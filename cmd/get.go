// Copyright 2021 Charles Francoise
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"fmt"
	"os"

	"github.com/mattn/go-isatty"

	"github.com/loderunner/scrt/backend"
	"github.com/loderunner/scrt/store"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var getCmd = &cobra.Command{
	Use:   "get [flags] key",
	Short: "Retrieve the value associated to key from a store",
	Args: func(cmd *cobra.Command, args []string) error {
		err := cobra.ExactArgs(1)(cmd, args)
		if err != nil {
			return err
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		storage := viper.GetString(configKeyStorage)
		location := viper.GetString(configKeyLocation)
		key := args[0]

		b, err := backend.Backends[storage].New(location, viper.AllSettings())
		if err != nil {
			return err
		}
		if !b.Exists() {
			return fmt.Errorf("%s store at %s does not exist", storage, location)
		}

		data, err := b.Load()
		if err != nil {
			return fmt.Errorf("could not load data from %s: %w", location, err)
		}

		password := []byte(viper.GetString(configKeyPassword))
		s, err := store.ReadStore(password, data)
		if err != nil {
			return fmt.Errorf("could not read store from data: %w", err)
		}

		if !s.Has(key) {
			return fmt.Errorf("no value for key: \"%s\"", key)
		}

		val, err := s.Get(key)
		if err != nil {
			return fmt.Errorf("could not get value: %w", err)
		}

		if isatty.IsTerminal(os.Stdout.Fd()) || isatty.IsCygwinTerminal(os.Stdout.Fd()) {
			fmt.Println(string(val))
		} else {
			fmt.Print(string(val))
		}

		return nil
	},
}
