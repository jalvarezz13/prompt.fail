import os
import json

csv_prompts = {}
json_prompts = {}

with open(os.path.join(os.getcwd(), "prompts.csv"), "r", encoding="utf-8") as f:
    lines = f.readlines()

for line in lines[1:]:
    line = line.strip().split(",")
    llm_id = line[0]
    prompt_id = line[2]
    result = line[3]

    if prompt_id not in csv_prompts:
        csv_prompts[prompt_id] = {}

    if llm_id not in csv_prompts[prompt_id]:
        csv_prompts[prompt_id][llm_id] = {"passed": 0, "failed": 0}

    if result == "passed":
        csv_prompts[prompt_id][llm_id]["passed"] += 1
    elif result == "failed":
        csv_prompts[prompt_id][llm_id]["failed"] += 1

with open(os.path.join(os.getcwd(), "..", "src", "data", "prompts.json"), "r", encoding="utf-8") as f:
    json_prompts = json.load(f)

for prompt_id in csv_prompts:
    json_prompt_index = -1
    for i, prompt in enumerate(json_prompts):
        if prompt["id"] == prompt_id:
            json_prompt_index = i
            break

    if json_prompt_index == -1:
        continue

    for llm_id in csv_prompts[prompt_id]:
        if csv_prompts[prompt_id][llm_id]["passed"] > csv_prompts[prompt_id][llm_id]["failed"]:
            json_prompts[json_prompt_index]["results"][llm_id] = "passed"
        elif csv_prompts[prompt_id][llm_id]["passed"] < csv_prompts[prompt_id][llm_id]["failed"]:
            json_prompts[json_prompt_index]["results"][llm_id] = "failed"
        else:
            json_prompts[json_prompt_index]["results"][llm_id] = "not_tested"

with open(os.path.join(os.getcwd(), "..", "src", "data", "prompts.json"), "w", encoding="utf-8") as f:
    json.dump(json_prompts, f, indent=2, ensure_ascii=False)
