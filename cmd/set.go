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

	"github.com/loderunner/scrt/backend"
	"github.com/loderunner/scrt/store"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var setCmd = &cobra.Command{
	Use:   "set [flags] storage location key value",
	Short: "Associate a key to a value in a store",
	Args: func(cmd *cobra.Command, args []string) error {
		err := cobra.ExactArgs(4)(cmd, args)
		if err != nil {
			return err
		}
		backendType := args[0]
		if _, ok := backend.Backends[backendType]; !ok {
			return fmt.Errorf("unknown backend: %s", backendType)
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		backendType := args[0]
		backendName := args[1]
		key := args[2]
		val := []byte(args[3])

		b := backend.Backends[backendType](backendName)
		if !b.Exists() {
			return fmt.Errorf("%s store at %s does not exist", backendType, backendName)
		}

		data, err := b.Load()
		if err != nil {
			return fmt.Errorf("could not load data from %s: %w", backendName, err)
		}

		password := []byte(viper.GetString("password"))
		s, err := store.ReadStore(password, data)
		if err != nil {
			return fmt.Errorf("could not read store from data: %w", err)
		}

		var overwrite bool
		if cmd.Flags().Changed("overwrite") {
			overwrite, err = cmd.Flags().GetBool("overwrite")
			if err != nil {
				return fmt.Errorf("could not read options: %w", err)
			}
		}

		if s.Has(key) && !overwrite {
			return fmt.Errorf("value exists for key \"%s\", use --overwrite to force", key)
		}

		err = s.Set(key, val)
		if err != nil {
			return fmt.Errorf("could not set value: %w", err)
		}

		data, err = store.WriteStore(password, s)
		if err != nil {
			return fmt.Errorf("could not write store to data: %w", err)
		}

		err = b.Save(data)
		if err != nil {
			return fmt.Errorf("could not save data to %s: %w", backendName, err)
		}

		return nil
	},
}

func init() {
	setCmd.Flags().Bool("overwrite", false, "overwrite value if it exists")
}
