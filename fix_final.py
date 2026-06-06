import json
import re
import time

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

html = read_file('index.html')

new_default_data = {
  "initialMine": 21338,
  "initialFather": 34008,
  "initialShared": 0,
  "businessBudget": 10000,
  "currentBalance": 38401,
  "balanceNote": "Total Cash + Bank",
  "balanceSet": True,
  "myMoneyLog": [],
  "myMoneyManualBalance": None,
  "fatherMoneyLog": [],
  "fatherMoneyManualBalance": None,
  "income": [
    { "id": "inc_p1", "amount": 779, "source": "Razorpay", "owner": "mine", "date": "2026-06-03", "status": "pending", "notes": "" },
    { "id": "inc_p2", "amount": 1000, "source": "Client", "owner": "mine", "date": "2026-06-03", "status": "pending", "notes": "" },
    { "id": "inc_r1", "amount": 1000, "source": "Client", "owner": "mine", "date": "2026-06-03", "status": "received", "notes": "" },
    { "id": "inc_r2", "amount": 389, "source": "Razorpay", "owner": "mine", "date": "2026-06-04", "status": "received", "notes": "" },
    { "id": "inc_r3", "amount": 389, "source": "Razorpay", "owner": "mine", "date": "2026-06-03", "status": "received", "notes": "" },
    { "id": "inc_r4", "amount": 1558, "source": "Razoapy", "owner": "mine", "date": "2026-06-02", "status": "received", "notes": "" },
    { "id": "inc_r5", "amount": 1000, "source": "Mummy", "owner": "mine", "date": "2026-05-31", "status": "received", "notes": "" }
  ],
  "expenses": [
    { "id": "exp_f1", "amount": 8000, "category": "UPI Transfer", "owner": "father", "date": "2026-06-04", "notes": "quick pay to mummy" },
    { "id": "exp_1", "amount": 19, "category": "Personal", "owner": "mine", "date": "2026-06-05", "notes": "" },
    { "id": "exp_2", "amount": 19, "category": "Personal", "owner": "mine", "date": "2026-06-05", "notes": "" },
    { "id": "exp_3", "amount": 352, "category": "Food", "owner": "mine", "date": "2026-06-05", "notes": "" },
    { "id": "exp_4", "amount": 13, "category": "Personal", "owner": "mine", "date": "2026-06-05", "notes": "" },
    { "id": "exp_5a", "amount": 2000, "category": "Personal", "owner": "mine", "date": "2026-06-05", "notes": "" },
    { "id": "exp_5b", "amount": 2000, "category": "Business", "owner": "mine", "date": "2026-05-31", "notes": "ADD AGENCY", "bizPlatform": "ADD AGENCY", "bizPurpose": "Business" },
    { "id": "exp_6", "amount": 30, "category": "Food", "owner": "mine", "date": "2026-06-04", "notes": "" },
    { "id": "exp_7", "amount": 2764, "category": "Shopping", "owner": "mine", "date": "2026-06-03", "notes": "" },
    { "id": "exp_8", "amount": 226, "category": "Food", "owner": "mine", "date": "2026-06-03", "notes": "" },
    { "id": "exp_9", "amount": 3, "category": "Personal", "owner": "mine", "date": "2026-06-03", "notes": "" },
    { "id": "exp_10", "amount": 730, "category": "Other", "owner": "mine", "date": "2026-06-01", "notes": "" },
    { "id": "exp_11", "amount": 50, "category": "Personal", "owner": "mine", "date": "2026-06-01", "notes": "" },
    { "id": "exp_12", "amount": 30, "category": "Food", "owner": "mine", "date": "2026-06-01", "notes": "" },
    { "id": "exp_13", "amount": 568, "category": "Food", "owner": "mine", "date": "2026-05-31", "notes": "" },
    { "id": "exp_14", "amount": 40, "category": "Food", "owner": "mine", "date": "2026-05-31", "notes": "" },
    { "id": "exp_15", "amount": 19, "category": "Software", "owner": "mine", "date": "2026-05-30", "notes": "" },
    { "id": "exp_16", "amount": 3975, "category": "Shopping", "owner": "mine", "date": "2026-05-31", "notes": "" },
    { "id": "exp_17", "amount": 443, "category": "Personal", "owner": "mine", "date": "2026-05-31", "notes": "" }
  ],
  "investments": [
    { "id": "inv_1", "amount": 2000, "platform": "ADD AGENCY", "purpose": "Business", "date": "2026-05-31", "notes": "Auto from Expense" }
  ],
  "goals": [
    { "id": "goal_emergency", "name": "Emergency Fund", "target": 50000, "current": 0, "icon": "🛡️", "desc": "For unexpected expenses" },
    { "id": "goal_business", "name": "Business Fund", "target": 25000, "current": 0, "icon": "💼", "desc": "Grow the business" },
    { "id": "goal_laptop", "name": "Laptop Fund", "target": 80000, "current": 0, "icon": "💻", "desc": "New laptop upgrade" }
  ],
  "editingGoalId": None,
  "upiContacts": [
    { "id": "cont_mummy", "name": "Mummy", "upiId": "9891990065@ptyes", "createdAt": "2026-06-01T12:00:00Z" }
  ],
  "upiPayments": [
    { "id": "upi_pay_mummy", "contactId": "cont_mummy", "contactName": "Mummy", "amount": 8000, "note": "Transfer", "owner": "father", "status": "completed", "date": "2026-06-04", "createdAt": "2026-06-04T12:00:00Z" }
  ]
}

logs = []
f_logs = []
for i in new_default_data["income"]:
    log_entry = {
        "id": f"mm_auto_inc_{i['id']}",
        "type": "add",
        "amt": i["amount"],
        "desc": f"Income: {i['source']}",
        "date": i["date"],
        "createdAt": i.get("date", "2026-06-01") + "T12:00:00Z"
    }
    if i["owner"] == "mine":
        logs.append(log_entry)
    else:
        f_logs.append(log_entry)

for e in new_default_data["expenses"]:
    log_entry = {
        "id": f"mm_auto_exp_{e['id']}",
        "type": "spend",
        "amt": e["amount"],
        "desc": f"Expense: {e['category']}",
        "date": e["date"],
        "createdAt": e.get("date", "2026-06-01") + "T12:00:00Z"
    }
    if e["owner"] == "mine":
        logs.append(log_entry)
    else:
        f_logs.append(log_entry)

logs.sort(key=lambda x: x['date'], reverse=True)
f_logs.sort(key=lambda x: x['date'], reverse=True)
new_default_data['myMoneyLog'] = logs
new_default_data['fatherMoneyLog'] = f_logs

data_str = json.dumps(new_default_data, indent=2)

pattern = r"const DEFAULT_DATA = \{.*?\n\};\n"
html = re.sub(pattern, lambda m: f"const DEFAULT_DATA = {data_str};\n", html, flags=re.DOTALL)

# Because we need the user to get this new data over anything else, bump the key
ts = str(int(time.time()))
html = re.sub(r"FORCE_RESET_KEY = 'moneyMgr_v3_reconciled_\w+'", f"FORCE_RESET_KEY = 'moneyMgr_v3_reconciled_{ts}'", html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html perfectly!")
