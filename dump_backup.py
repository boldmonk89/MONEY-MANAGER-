import json
import fix_final

data = fix_final.new_default_data

# Also we need to make sure the calculated logs from fix_final are there
with open('tejas_backup_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
print("Backup created in tejas_backup_data.json")
