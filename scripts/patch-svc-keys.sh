#!/bin/bash

file_path="src/services/token-worlds-contract.service-impl.ts"
current_keys=("supply" "terms")
new_keys=("issuer" "version")

# Loop through the indices and perform the key replacements
for i in "${!current_keys[@]}"; do
    current_key="${current_keys[$i]}"
    new_key="${new_keys[$i]}"

    # Search for the current_key in the file and replace it with new_key
    sed -i "" "s/const table_key = '${current_key}';/const table_key = '${new_key}';/g" $file_path
done
