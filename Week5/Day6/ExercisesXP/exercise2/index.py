import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
sample_dict = json.loads(sampleJson)
print(sample_dict["company"]["employee"]["payable"]["salary"])
sample_dict["company"]["employee"]["birth_date"] = "8/23/2024"
with open("file.json", "w+") as f:
    json.dump(sample_dict, f, indent=4)