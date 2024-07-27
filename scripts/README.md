# Scripts directory

This directory contains Python scripts used for various automated tasks related to the project.

## Important Instructions

1. **Execution Path**:

   - Ensure that all scripts in this directory are executed from within the `scripts` directory itself.
   - This is important to avoid issues with `os.getcwd()`, as the scripts rely on the current working directory being set to `scripts`.

2. **Required Files**:

   - Some scripts require access to specific files, such as `.csv` files.
   - Currently, the necessary `.csv` file is not included in the repository and is only accessible by the administrator (`@jalvarezz13`).

## Example Usage

To run the `update_prompts_data_based_on_db.py` script, navigate to the `scripts` directory and execute the following command:

```bash
cd scripts
python3 update_prompts_data_based_on_db.py
```
