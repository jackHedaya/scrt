// Copyright 2021-2023 Charles Francoise
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

	"github.com/loderunner/scrt/backend"
	"github.com/loderunner/scrt/store"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var unsetCmd = &cobra.Command{
	Use:   "unset [flags] key",
	Short: "Remove the value associated to key in a store",
	Args: func(cmd *cobra.Command, args []string) error {
		err := cobra.ExactArgs(1)(cmd, args)
		if err != nil {
			return err
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		storage := viper.GetString(configKeyStorage)
		key := args[0]

		b, err := backend.Backends[storage].NewContext(cmdContext, viper.AllSettings())
		if err != nil {
			return err
		}

		exists, err := b.ExistsContext(cmdContext)
		if err != nil {
			return fmt.Errorf("could not check store existence: %w", err)
		}
		if !exists {
			return fmt.Errorf("store does not exist")
		}

		data, err := b.LoadContext(cmdContext)
		if err != nil {
			return fmt.Errorf("could not load data from store: %w", err)
		}

		password := []byte(viper.GetString(configKeyPassword))
		s, err := store.ReadStoreContext(cmdContext, password, data)
		if err != nil {
			return fmt.Errorf("could not read store from data: %w", err)
		}

		s.UnsetContext(cmdContext, key)

		data, err = store.WriteStoreContext(cmdContext, password, s)
		if err != nil {
			return fmt.Errorf("could not write store to data: %w", err)
		}

		err = b.SaveContext(cmdContext, data)
		if err != nil {
			return fmt.Errorf("could not save data to store: %w", err)
		}

		return nil
	},
}
