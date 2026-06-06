/* =====================================================
   DATA STORE & PERSISTENCE
===================================================== */
let STORAGE_KEY = 'moneyMgr_v3';

// Default starting data
const DEFAULT_DATA = {
  "initialMine": 21338,
  "initialFather": 34008,
  "initialShared": 0,
  "businessBudget": 10000,
  "currentBalance": 38401,
  "balanceNote": "Total Cash + Bank",
  "balanceSet": true,
  "myMoneyLog": [
    {
      "id": "mm_auto_exp_exp_1",
      "type": "spend",
      "amt": 19,
      "desc": "Expense: Personal",
      "date": "2026-06-05",
      "createdAt": "2026-06-05T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_2",
      "type": "spend",
      "amt": 19,
      "desc": "Expense: Personal",
      "date": "2026-06-05",
      "createdAt": "2026-06-05T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_3",
      "type": "spend",
      "amt": 352,
      "desc": "Expense: Food",
      "date": "2026-06-05",
      "createdAt": "2026-06-05T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_4",
      "type": "spend",
      "amt": 13,
      "desc": "Expense: Personal",
      "date": "2026-06-05",
      "createdAt": "2026-06-05T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_5",
      "type": "spend",
      "amt": 2000,
      "desc": "Expense: Business",
      "date": "2026-06-05",
      "createdAt": "2026-06-05T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_r2",
      "type": "add",
      "amt": 389,
      "desc": "Income: Razorpay",
      "date": "2026-06-04",
      "createdAt": "2026-06-04T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_6",
      "type": "spend",
      "amt": 30,
      "desc": "Expense: Food",
      "date": "2026-06-04",
      "createdAt": "2026-06-04T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_p1",
      "type": "add",
      "amt": 779,
      "desc": "Income: Razorpay",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_p2",
      "type": "add",
      "amt": 1000,
      "desc": "Income: Client",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_r1",
      "type": "add",
      "amt": 1000,
      "desc": "Income: Client",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_r3",
      "type": "add",
      "amt": 389,
      "desc": "Income: Razorpay",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_7",
      "type": "spend",
      "amt": 2764,
      "desc": "Expense: Shopping",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_8",
      "type": "spend",
      "amt": 226,
      "desc": "Expense: Food",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_9",
      "type": "spend",
      "amt": 3,
      "desc": "Expense: Personal",
      "date": "2026-06-03",
      "createdAt": "2026-06-03T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_r4",
      "type": "add",
      "amt": 1558,
      "desc": "Income: Razoapy",
      "date": "2026-06-02",
      "createdAt": "2026-06-02T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_10",
      "type": "spend",
      "amt": 730,
      "desc": "Expense: Other",
      "date": "2026-06-01",
      "createdAt": "2026-06-01T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_11",
      "type": "spend",
      "amt": 50,
      "desc": "Expense: Personal",
      "date": "2026-06-01",
      "createdAt": "2026-06-01T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_12",
      "type": "spend",
      "amt": 30,
      "desc": "Expense: Food",
      "date": "2026-06-01",
      "createdAt": "2026-06-01T12:00:00Z"
    },
    {
      "id": "mm_auto_inc_inc_r5",
      "type": "add",
      "amt": 1000,
      "desc": "Income: Mummy",
      "date": "2026-05-31",
      "createdAt": "2026-05-31T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_13",
      "type": "spend",
      "amt": 568,
      "desc": "Expense: Food",
      "date": "2026-05-31",
      "createdAt": "2026-05-31T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_14",
      "type": "spend",
      "amt": 40,
      "desc": "Expense: Food",
      "date": "2026-05-31",
      "createdAt": "2026-05-31T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_16",
      "type": "spend",
      "amt": 3975,
      "desc": "Expense: Shopping",
      "date": "2026-05-31",
      "createdAt": "2026-05-31T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_17",
      "type": "spend",
      "amt": 443,
      "desc": "Expense: Personal",
      "date": "2026-05-31",
      "createdAt": "2026-05-31T12:00:00Z"
    },
    {
      "id": "mm_auto_exp_exp_15",
      "type": "spend",
      "amt": 19,
      "desc": "Expense: Software",
      "date": "2026-05-30",
      "createdAt": "2026-05-30T12:00:00Z"
    }
  ],
  "myMoneyManualBalance": null,
  "fatherMoneyLog": [
    {
      "id": "mm_auto_exp_exp_f1",
      "type": "spend",
      "amt": 8000,
      "desc": "Expense: UPI Transfer",
      "date": "2026-06-04",
      "createdAt": "2026-06-04T12:00:00Z"
    }
  ],
  "fatherMoneyManualBalance": null,
  "income": [
    {
      "id": "inc_p1",
      "amount": 779,
      "source": "Razorpay",
      "owner": "mine",
      "date": "2026-06-03",
      "status": "pending",
      "notes": ""
    },
    {
      "id": "inc_p2",
      "amount": 1000,
      "source": "Client",
      "owner": "mine",
      "date": "2026-06-03",
      "status": "pending",
      "notes": ""
    },
    {
      "id": "inc_r1",
      "amount": 1000,
      "source": "Client",
      "owner": "mine",
      "date": "2026-06-03",
      "status": "received",
      "notes": ""
    },
    {
      "id": "inc_r2",
      "amount": 389,
      "source": "Razorpay",
      "owner": "mine",
      "date": "2026-06-04",
      "status": "received",
      "notes": ""
    },
    {
      "id": "inc_r3",
      "amount": 389,
      "source": "Razorpay",
      "owner": "mine",
      "date": "2026-06-03",
      "status": "received",
      "notes": ""
    },
    {
      "id": "inc_r4",
      "amount": 1558,
      "source": "Razoapy",
      "owner": "mine",
      "date": "2026-06-02",
      "status": "received",
      "notes": ""
    },
    {
      "id": "inc_r5",
      "amount": 1000,
      "source": "Mummy",
      "owner": "mine",
      "date": "2026-05-31",
      "status": "received",
      "notes": ""
    }
  ],
  "expenses": [
    {
      "id": "exp_f1",
      "amount": 8000,
      "category": "UPI Transfer",
      "owner": "father",
      "date": "2026-06-04",
      "notes": "quick pay to mummy"
    },
    {
      "id": "exp_1",
      "amount": 19,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-06-05",
      "notes": ""
    },
    {
      "id": "exp_2",
      "amount": 19,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-06-05",
      "notes": ""
    },
    {
      "id": "exp_3",
      "amount": 352,
      "category": "Food",
      "owner": "mine",
      "date": "2026-06-05",
      "notes": ""
    },
    {
      "id": "exp_4",
      "amount": 13,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-06-05",
      "notes": ""
    },
    {
      "id": "exp_5",
      "amount": 2000,
      "category": "Business",
      "owner": "mine",
      "date": "2026-06-05",
      "notes": "ADD AGENCY",
      "bizPlatform": "ADD AGENCY",
      "bizPurpose": "Business"
    },
    {
      "id": "exp_6",
      "amount": 30,
      "category": "Food",
      "owner": "mine",
      "date": "2026-06-04",
      "notes": ""
    },
    {
      "id": "exp_7",
      "amount": 2764,
      "category": "Shopping",
      "owner": "mine",
      "date": "2026-06-03",
      "notes": ""
    },
    {
      "id": "exp_8",
      "amount": 226,
      "category": "Food",
      "owner": "mine",
      "date": "2026-06-03",
      "notes": ""
    },
    {
      "id": "exp_9",
      "amount": 3,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-06-03",
      "notes": ""
    },
    {
      "id": "exp_10",
      "amount": 730,
      "category": "Other",
      "owner": "mine",
      "date": "2026-06-01",
      "notes": ""
    },
    {
      "id": "exp_11",
      "amount": 50,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-06-01",
      "notes": ""
    },
    {
      "id": "exp_12",
      "amount": 30,
      "category": "Food",
      "owner": "mine",
      "date": "2026-06-01",
      "notes": ""
    },
    {
      "id": "exp_13",
      "amount": 568,
      "category": "Food",
      "owner": "mine",
      "date": "2026-05-31",
      "notes": ""
    },
    {
      "id": "exp_14",
      "amount": 40,
      "category": "Food",
      "owner": "mine",
      "date": "2026-05-31",
      "notes": ""
    },
    {
      "id": "exp_15",
      "amount": 19,
      "category": "Software",
      "owner": "mine",
      "date": "2026-05-30",
      "notes": ""
    },
    {
      "id": "exp_16",
      "amount": 3975,
      "category": "Shopping",
      "owner": "mine",
      "date": "2026-05-31",
      "notes": ""
    },
    {
      "id": "exp_17",
      "amount": 443,
      "category": "Personal",
      "owner": "mine",
      "date": "2026-05-31",
      "notes": ""
    }
  ],
  "investments": [
    {
      "id": "inv_1",
      "amount": 2000,
      "platform": "ADD AGENCY",
      "purpose": "Business",
      "date": "2026-06-05",
      "notes": "Auto from Expense"
    }
  ],
  "goals": [
    {
      "id": "goal_emergency",
      "name": "Emergency Fund",
      "target": 50000,
      "current": 0,
      "icon": "\ud83d\udee1\ufe0f",
      "desc": "For unexpected expenses"
    },
    {
      "id": "goal_business",
      "name": "Business Fund",
      "target": 25000,
      "current": 0,
      "icon": "\ud83d\udcbc",
      "desc": "Grow the business"
    },
    {
      "id": "goal_laptop",
      "name": "Laptop Fund",
      "target": 80000,
      "current": 0,
      "icon": "\ud83d\udcbb",
      "desc": "New laptop upgrade"
    }
  ],
  "editingGoalId": null,
  "upiContacts": [],
  "upiPayments": []
};

let state = {};

// Load from localStorage or use defaults
function loadState() {
  const FORCE_RESET_KEY = 'moneyMgr_v3_reconciled_1780772424';
  if (!localStorage.getItem(FORCE_RESET_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(FORCE_RESET_KEY, 'true');
  }
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      state = JSON.parse(saved);
      // Ensure new fields exist
      if (!state.goals) state.goals = DEFAULT_DATA.goals;
      if (!state.investments) state.investments = [];
      if (!state.businessBudget) state.businessBudget = 10000;
      if (state.currentBalance === undefined) state.currentBalance = 0;
      if (!state.balanceNote) state.balanceNote = '';
      if (state.balanceSet === undefined) state.balanceSet = false;
      if (!state.myMoneyLog) state.myMoneyLog = [];
      if (state.myMoneyManualBalance === undefined) state.myMoneyManualBalance = undefined;
      if (!state.upiContacts) state.upiContacts = [];
      if (!state.upiPayments) state.upiPayments = [];
      if (!state.fatherMoneyLog) state.fatherMoneyLog = [];
      if (state.fatherMoneyManualBalance === undefined) state.fatherMoneyManualBalance = undefined;
    } catch(e) {
      state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    // Set default expected dates for pending payments (safely)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7);
    const dateStr = tomorrow.toISOString().split('T')[0];
    state.income.forEach(inc => { if (!inc.date) inc.date = dateStr; });
  }
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* =====================================================
   COMPUTED VALUES
===================================================== */
function compute() {
  const myIncome = state.income.filter(i => i.owner === 'mine' && i.status === 'received').reduce((sum, i) => sum + Number(i.amount), 0);
  const myPendingIncome = state.income.filter(i => i.owner === 'mine' && i.status === 'pending').reduce((sum, i) => sum + Number(i.amount), 0);
  const myExpense = state.expenses.filter(e => e.owner === 'mine' && e.status !== 'pending').reduce((sum, e) => sum + Number(e.amount), 0);
  
  const fatherIncome = state.income.filter(i => i.owner === 'father' && i.status === 'received').reduce((sum, i) => sum + Number(i.amount), 0);
  const fatherPendingIncome = state.income.filter(i => i.owner === 'father' && i.status === 'pending').reduce((sum, i) => sum + Number(i.amount), 0);
  const fatherExpense = state.expenses.filter(e => e.owner === 'father' && e.status !== 'pending').reduce((sum, e) => sum + Number(e.amount), 0);
  
  const totalIncome = myIncome + fatherIncome;
  const pendingIncome = myPendingIncome + fatherPendingIncome;
  const totalExpense = myExpense + fatherExpense;
  const totalInvested = state.investments.reduce((sum, i) => sum + Number(i.amount), 0);
  
  const myMoney = Number(state.initialMine || 0) + myIncome - myExpense;
  const fatherMoney = Number(state.initialFather || 0) + fatherIncome - fatherExpense;
  
  state.currentBalance = myMoney + fatherMoney;

  let remaining = state.currentBalance;
  if (state.banks && state.banks.length > 0) {
    for (let i = 1; i < state.banks.length; i++) {
      remaining -= Number(state.banks[i].balance || 0);
    }
    state.banks[0].balance = Math.max(0, remaining);
  }

  const myNetWorth = myMoney + myPendingIncome;
  const fatherNetWorth = fatherMoney + fatherPendingIncome;
  const expectedBalance = state.currentBalance + pendingIncome;
  const bizBudgetLeft = (state.businessBudget || 10000) - totalInvested;

  const elCurBal = document.getElementById('dashCurBal');
  if (elCurBal) elCurBal.innerText = '₹' + state.currentBalance.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elTotAvailable = document.getElementById('dashTotAvailable');
  if (elTotAvailable) elTotAvailable.innerText = '₹' + state.currentBalance.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elExpected = document.getElementById('dashExpected');
  if (elExpected) elExpected.innerText = '₹' + expectedBalance.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elTotExp = document.getElementById('dashTotExp');
  if (elTotExp) elTotExp.innerText = '₹' + totalExpense.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elPendInc = document.getElementById('dashPendInc');
  if (elPendInc) elPendInc.innerText = '₹' + pendingIncome.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elBizInvested = document.getElementById('dashBizInvested');
  if (elBizInvested) elBizInvested.innerText = '₹' + totalInvested.toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elBizLeft = document.getElementById('bizBudgetLeft');
  if (elBizLeft) elBizLeft.innerText = '₹' + Math.max(0, bizBudgetLeft).toLocaleString('en-IN', {minimumFractionDigits: 0});
  
  const elMyMoney = document.getElementById('dashMyMoney');
  if (elMyMoney) elMyMoney.innerText = '₹' + myMoney.toLocaleString('en-IN', {minimumFractionDigits: 0});

  const elMyNetWorth = document.getElementById('myNetWorth');
  if (elMyNetWorth) elMyNetWorth.innerText = '₹' + myNetWorth.toLocaleString('en-IN', {minimumFractionDigits: 0});

  const elFatherNetWorth = document.getElementById('fatherNetWorth');
  if (elFatherNetWorth) elFatherNetWorth.innerText = '₹' + fatherNetWorth.toLocaleString('en-IN', {minimumFractionDigits: 0});

  return {
    receivedIncome: totalIncome, pendingIncome, totalExpenses: totalExpense, bizInvested: totalInvested,
    totalAvailable: state.currentBalance, expectedBalance,
    myMoney, fatherMoney, sharedMoney: 0,
    myNetWorth, fatherNetWorth, bizRemaining: bizBudgetLeft,
    myExpenses: myExpense, fatherExpenses: fatherExpense
  };
}

/* =====================================================
   FORMATTING HELPERS
===================================================== */
function fmt(n) {
  return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
}

function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function ownerBadge(owner) {
  if (owner === 'mine') return '<span class="badge badge-mine">👤 Mine</span>';
  if (owner === 'father') return '<span class="badge badge-father">👴 Father</span>';
  return '<span class="badge badge-shared">🤝 Shared</span>';
}

function uid() {
  return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const now = new Date(); now.setHours(0,0,0,0);
  const dt = new Date(dateStr); dt.setHours(0,0,0,0);
  return Math.round((dt - now) / 86400000);
}

/* =====================================================
   NAVIGATION
===================================================== */
const sectionTitles = {
  dashboard: ['Dashboard', 'Overview of your finances'],
  income: ['Income Manager', 'Track incoming money'],
  expenses: ['Expense Manager', 'Track your spending'],
  pending: ['Pending Payments', 'Awaiting settlement'],
  history: ['Transaction History', 'Full ledger of all transactions'],
  business: ['Business Investments', 'Track business spending'],
  goals: ['Goals & Savings', 'Financial targets'],
  fathermoney: ["Father's Money", "Track father's finances"],
  analytics: ['Monthly Analytics', 'Charts & insights'],
  quickpay: ['Quick Pay', 'Send money via UPI'],
  backup: ['Data Backup', 'Export, import, reset']
};

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const sec = document.getElementById('section-' + id);
  if (sec) sec.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.textContent.trim().toLowerCase().includes(id.replace('-', ' ').toLowerCase().split(' ')[0])) {
      n.classList.add('active');
    }
  });

  // Set by onclick attribute
  const nav = document.querySelector(`.nav-item[onclick="showSection('${id}')"]`);
  if (nav) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    nav.classList.add('active');
  }

  const [title, sub] = sectionTitles[id] || ['Dashboard', ''];
  document.getElementById('topbarTitle').textContent = title;
  document.getElementById('topbarSub').textContent = sub;

  closeSidebar();

  // Render section-specific content
  if (id === 'analytics') renderCharts();
  if (id === 'backup') renderBackupSummary();
  if (id === 'business') renderBizSection();
  if (id === 'goals') renderGoals();
  if (id === 'history') renderHistory();
  if (id === 'quickpay') renderQuickPay();
  if (id === 'fathermoney') renderFatherMoneySection();
}

/* =====================================================
   SIDEBAR MOBILE
===================================================== */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

/* =====================================================
   MODAL HELPERS
===================================================== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

let editingIncomeId = null;

function populateBankSelect(selectId, defaultBankId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = state.banks.map(b => `<option value="${b.id}">${b.bank_name} (₹${Number(b.balance || 0).toLocaleString('en-IN')})</option>`).join('');
  if (defaultBankId) sel.value = defaultBankId;
}

function openIncomeModal(id = null, defaultOwner = 'mine', bankId = null) {
  editingIncomeId = id;
  if (id) {
    const inc = state.income.find(i => i.id === id);
    if (!inc) return;
    document.getElementById('incAmount').value = inc.amount;
    document.getElementById('incSource').value = inc.source;
    
    document.getElementById('incDate').value = inc.date || today();
    document.getElementById('incStatus').value = inc.status;
    document.getElementById('incNotes').value = inc.notes || '';
    populateBankSelect('incBank', inc.bank_id || bankId || state.banks[0]?.id);
    document.getElementById('incomeModalTitle').textContent = '✏️ Edit Income';
    document.getElementById('incomeSaveBtn').textContent = 'Update Income';
  } else {
    document.getElementById('incAmount').value = '';
    document.getElementById('incSource').value = '';
    
    document.getElementById('incDate').value = today();
    document.getElementById('incStatus').value = 'received';
    document.getElementById('incNotes').value = '';
    populateBankSelect('incBank', bankId || state.banks[0]?.id);
    document.getElementById('incomeModalTitle').textContent = '💰 Add Income';
    document.getElementById('incomeSaveBtn').textContent = 'Save Income';
  }
  openModal('incomeModal');
}

let editingExpenseId = null;

function openExpenseModal(id = null, defaultOwner = 'mine', bankId = null) {
  editingExpenseId = id;
  if (id) {
    const exp = state.expenses.find(e => e.id === id);
    if (!exp) return;
    document.getElementById('expAmount').value = exp.amount;
    document.getElementById('expCategory').value = exp.category;
    
    document.getElementById('expDate').value = exp.date || today();
    document.getElementById('expNotes').value = exp.notes || '';
    document.getElementById('expBizPlatform').value = exp.bizPlatform || '';
    document.getElementById('expBizPurpose').value = exp.bizPurpose || '';
    populateBankSelect('expBank', exp.bank_id || bankId || state.banks[0]?.id);
    document.getElementById('expenseModalTitle').textContent = '✏️ Edit Expense';
    document.getElementById('expenseSaveBtn').textContent = 'Update Expense';
    handleExpCategoryChange();
  } else {
    document.getElementById('expAmount').value = '';
    document.getElementById('expCategory').value = 'Personal';
    
    document.getElementById('expDate').value = today();
    document.getElementById('expNotes').value = '';
    document.getElementById('expBizPlatform').value = '';
    document.getElementById('expBizPurpose').value = '';
    document.getElementById('expBizPlatformGroup').style.display = 'none';
    document.getElementById('expBizPurposeGroup').style.display = 'none';
    document.getElementById('expBizNote').style.display = 'none';
    populateBankSelect('expBank', bankId || state.banks[0]?.id);
    document.getElementById('expenseModalTitle').textContent = '💸 Add Expense';
    document.getElementById('expenseSaveBtn').textContent = 'Save Expense';
  }
  openModal('expenseModal');
}

function handleExpCategoryChange() {
  const cat = document.getElementById('expCategory').value;
  const isBiz = cat === 'Business' || cat === 'Advertising';
  document.getElementById('expBizPlatformGroup').style.display = isBiz ? '' : 'none';
  document.getElementById('expBizPurposeGroup').style.display = isBiz ? '' : 'none';
  document.getElementById('expBizNote').style.display = isBiz ? '' : 'none';
}

function openPendingModal() {
  document.getElementById('pendSource').value = '';
  document.getElementById('pendAmount').value = '';
  document.getElementById('pendOwner').value = 'mine';
  document.getElementById('pendDate').value = '';
  document.getElementById('pendNotes').value = '';
  openModal('pendingModal');
}

let editingBizId = null;

function openBizModal(id = null) {
  editingBizId = id;
  if (id) {
    const inv = state.investments.find(i => i.id === id);
    if (!inv) return;
    document.getElementById('bizAmount').value = inv.amount;
    document.getElementById('bizPlatform').value = inv.platform;
    document.getElementById('bizPurpose').value = inv.purpose || '';
    document.getElementById('bizDate').value = inv.date || today();
    document.getElementById('bizNotes').value = inv.notes || '';
    document.getElementById('bizModalTitle').textContent = '✏️ Edit Investment';
    document.getElementById('bizSaveBtn').textContent = 'Update Investment';
  } else {
    document.getElementById('bizAmount').value = '';
    document.getElementById('bizPlatform').value = '';
    document.getElementById('bizPurpose').value = '';
    document.getElementById('bizDate').value = today();
    document.getElementById('bizNotes').value = '';
    document.getElementById('bizModalTitle').textContent = '🚀 Add Business Investment';
    document.getElementById('bizSaveBtn').textContent = 'Save Investment';
  }
  openModal('bizModal');
}

/* Close modal on overlay click */
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

/* =====================================================
   TOAST NOTIFICATIONS
===================================================== */
function toast(msg, type = 'success') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(() => el.remove(), 3100);
}

/* =====================================================
   SAVE INCOME
===================================================== */
function saveIncome() {
  const amount = parseFloat(document.getElementById('incAmount').value);
  const source = document.getElementById('incSource').value.trim();
  if (!amount || amount <= 0) { toast('Enter a valid amount', 'error'); return; }
  if (!source) { toast('Enter income source', 'error'); return; }

  const owner = 'mine';
  const status = document.getElementById('incStatus').value;
  const bankId = document.getElementById('incBank').value;

  if (editingIncomeId) {
    const idx = state.income.findIndex(i => i.id === editingIncomeId);
    if (idx !== -1) {
      const old = state.income[idx];
      // If was received, reverse old amount from currentBalance
      if (old.status === 'received') {
        state.currentBalance = (state.currentBalance || 0) - Number(old.amount);
        if (old.bank_id) {
          const bIdx = state.banks.findIndex(b => b.id === old.bank_id);
          if (bIdx !== -1) state.banks[bIdx].balance -= Number(old.amount);
        }
      }
      state.income[idx] = { ...old, amount, source, owner, bank_id: bankId, date: document.getElementById('incDate').value || today(), status, notes: document.getElementById('incNotes').value.trim() };
      // If now received, add new amount
      if (status === 'received') {
        state.currentBalance = (state.currentBalance || 0) + amount;
        state.balanceSet = true;
        if (bankId) {
          const bIdx = state.banks.findIndex(b => b.id === bankId);
          if (bIdx !== -1) {
            state.banks[bIdx].balance += amount;
            if (window.supabaseClient && window.currentUserId) {
              window.supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
            }
          }
        }
        // Log in myMoney if mine
        if (owner === 'mine') logMyMoney('add', amount, `💰 Income: ${source}`, document.getElementById('incDate').value || today());
      }
      
      // Update old bank if it changed and was received
      if (old.status === 'received' && old.bank_id && old.bank_id !== bankId) {
        const oldBIdx = state.banks.findIndex(b => b.id === old.bank_id);
        if (oldBIdx !== -1 && window.supabaseClient && window.currentUserId) {
           window.supabaseClient.from('user_banks').update({ balance: state.banks[oldBIdx].balance }).eq('id', old.bank_id).then();
        }
      }
    }
    toast('Income updated ✅');
    editingIncomeId = null;
  } else {
    const entry = { id: uid(), amount, source, owner, bank_id: bankId, date: document.getElementById('incDate').value || today(), status, notes: document.getElementById('incNotes').value.trim(), createdAt: new Date().toISOString() };
    state.income.push(entry);
    // If directly received, update currentBalance
    if (status === 'received') {
      state.currentBalance = (state.currentBalance || 0) + amount;
      state.balanceSet = true;
      if (bankId) {
        const bIdx = state.banks.findIndex(b => b.id === bankId);
        if (bIdx !== -1) {
          state.banks[bIdx].balance += amount;
          if (window.supabaseClient && window.currentUserId) {
            window.supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
          }
        }
      }
      if (owner === 'mine') logMyMoney('add', amount, `💰 Income: ${source}`, entry.date);
      if (owner === 'father') warnPapaChange('income added', amount);
    }
    toast(`Income of ${fmt(amount)} added`);
  }

  saveState();
  renderAll();
  renderMyMoneySection();
  closeModal('incomeModal');
}

/* =====================================================
   SAVE EXPENSE
===================================================== */
function saveExpense() {
  const amount = parseFloat(document.getElementById('expAmount').value);
  if (!amount || amount <= 0) { toast('Enter a valid amount', 'error'); return; }

  const category = document.getElementById('expCategory').value;
  const owner = 'mine';
  const bankId = document.getElementById('expBank').value;
  const isBiz = category === 'Business' || category === 'Advertising';
  const bizPlatform = document.getElementById('expBizPlatform').value.trim();
  const bizPurpose = document.getElementById('expBizPurpose').value.trim();

  if (editingExpenseId) {
    const idx = state.expenses.findIndex(e => e.id === editingExpenseId);
    if (idx !== -1) {
      const old = state.expenses[idx];
      const diff = amount - Number(old.amount);
      if (diff > 0 && owner === 'mine') {
        const myBal = getMyMoneyBalance();
        if (myBal < diff) {
          toast(`❌ Nahi ho sakta! Tumhare paas sirf ${fmt(myBal)} hai.`, 'error');
          return;
        }
      }
      state.currentBalance = (state.currentBalance || 0) - diff;
      state.balanceSet = true;
      
      // Revert old bank and apply to new bank
      if (old.bank_id) {
        const obIdx = state.banks.findIndex(b => b.id === old.bank_id);
        if (obIdx !== -1) state.banks[obIdx].balance += Number(old.amount);
      }
      if (bankId) {
        const nbIdx = state.banks.findIndex(b => b.id === bankId);
        if (nbIdx !== -1) state.banks[nbIdx].balance -= amount;
      }
      
      // Persist both to DB
      if (window.supabaseClient && window.currentUserId) {
         if (old.bank_id && old.bank_id !== bankId) {
            const obIdx = state.banks.findIndex(b => b.id === old.bank_id);
            if (obIdx !== -1) window.supabaseClient.from('user_banks').update({ balance: state.banks[obIdx].balance }).eq('id', old.bank_id).then();
         }
         if (bankId) {
            const nbIdx = state.banks.findIndex(b => b.id === bankId);
            if (nbIdx !== -1) window.supabaseClient.from('user_banks').update({ balance: state.banks[nbIdx].balance }).eq('id', bankId).then();
         }
      }

      if (diff > 0 && owner === 'mine') logMyMoney('spend', diff, `✏️ Expense edit: ${category}`, document.getElementById('expDate').value || today());
      if (diff < 0 && owner === 'mine') logMyMoney('add', Math.abs(diff), `✏️ Expense reduced: ${category}`, document.getElementById('expDate').value || today());
      
      state.expenses[idx] = { ...old, amount, category, owner, bank_id: bankId, date: document.getElementById('expDate').value || today(), notes: document.getElementById('expNotes').value.trim(), bizPlatform: isBiz ? bizPlatform : '', bizPurpose: isBiz ? bizPurpose : '' };
    }
    toast('Expense updated ✅');
    editingExpenseId = null;
  } else {
    // NEW EXPENSE
    if (owner === 'mine') {
      const myBal = getMyMoneyBalance();
      if (myBal < amount) {
        toast(`❌ BLOCKED! Tumhare paas sirf ${fmt(myBal)} hai.`, 'error');
        const el = document.getElementById('mmHeroAmount');
        if (el) { el.style.color = 'var(--accent-red)'; setTimeout(() => el.style.color = '', 2000); }
        return;
      }
    }

    const entry = { id: uid(), amount, category, owner, bank_id: bankId, date: document.getElementById('expDate').value || today(), notes: document.getElementById('expNotes').value.trim(), bizPlatform: isBiz ? bizPlatform : '', bizPurpose: isBiz ? bizPurpose : '', createdAt: new Date().toISOString() };
    state.expenses.push(entry);
    state.currentBalance = (state.currentBalance || 0) - amount;
    state.balanceSet = true;
    
    if (bankId) {
      const bIdx = state.banks.findIndex(b => b.id === bankId);
      if (bIdx !== -1) {
        state.banks[bIdx].balance -= amount;
        if (window.supabaseClient && window.currentUserId) {
          window.supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
        }
      }
    }

    if (owner === 'mine') logMyMoney('spend', amount, `💸 Expense: ${category}${entry.notes ? ' — ' + entry.notes : ''}`, entry.date);

    if (isBiz && owner === 'mine') {
      state.investments.push({ id: uid(), amount, platform: bizPlatform || category, purpose: bizPurpose || entry.notes || category, date: entry.date, notes: `[Auto from Expense] ${entry.notes || ''}`.trim(), createdAt: new Date().toISOString() });
      toast(`${fmt(amount)} business mein lagaya 🚀`);
    } else {
      toast(`${fmt(amount)} expense record hua ✅`);
    }
  }

  saveState();
  renderAll();
  renderBizSection();
  renderMyMoneySection();
  closeModal('expenseModal');
}

/* =====================================================
   SAVE PENDING
===================================================== */
function savePending() {
  const amount = parseFloat(document.getElementById('pendAmount').value);
  const source = document.getElementById('pendSource').value.trim();
  if (!amount || amount <= 0) { toast('Enter a valid amount', 'error'); return; }
  if (!source) { toast('Enter source name', 'error'); return; }

  const entry = {
    id: uid(),
    source,
    amount,
    owner: document.getElementById('pendOwner').value,
    date: document.getElementById('pendDate').value,
    notes: document.getElementById('pendNotes').value.trim(),
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  // Also add as income
  state.income.push({
    id: uid(),
    amount,
    source,
    owner: entry.owner,
    date: entry.date,
    status: 'pending',
    notes: entry.notes,
    createdAt: new Date().toISOString()
  });

  saveState();
  renderAll();
  closeModal('pendingModal');
  toast('Pending payment added');
}

/* =====================================================
   SAVE BUSINESS INVESTMENT
===================================================== */
function saveBizInvestment() {
  const amount = parseFloat(document.getElementById('bizAmount').value);
  const platform = document.getElementById('bizPlatform').value.trim();
  if (!amount || amount <= 0) { toast('Enter a valid amount', 'error'); return; }
  if (!platform) { toast('Enter platform name', 'error'); return; }

  if (editingBizId) {
    const idx = state.investments.findIndex(i => i.id === editingBizId);
    if (idx !== -1) {
      const oldAmt = Number(state.investments[idx].amount);
      const diff = amount - oldAmt; // positive = spending more, negative = spending less
      // Adjust currentBalance & myMoney for the difference
      if (diff !== 0) {
        state.currentBalance = (state.currentBalance || 0) - diff;
        state.balanceSet = true;
        if (!state.myMoneyLog) state.myMoneyLog = [];
        const logDesc = diff > 0
          ? `Business Edit: extra ${fmt(diff)} spent on [${platform}]`
          : `Business Edit: ${fmt(Math.abs(diff))} refunded from [${platform}]`;
        state.myMoneyLog.unshift({ id: 'mm_bizedit_' + Date.now(), type: diff > 0 ? 'spend' : 'add', amt: Math.abs(diff), desc: logDesc, date: document.getElementById('bizDate').value || today(), createdAt: new Date().toISOString() });
      }
      state.investments[idx] = {
        ...state.investments[idx],
        amount,
        platform,
        purpose: document.getElementById('bizPurpose').value.trim(),
        date: document.getElementById('bizDate').value || today(),
        notes: document.getElementById('bizNotes').value.trim()
      };
    }
    toast('Investment updated ✅');
    editingBizId = null;
  } else {
    // Check if My Money has enough — never touch papa's money
    const myBal = getMyMoneyBalance();
    if (myBal < amount) {
      toast(`❌ BLOCKED! Tumhare paas sirf ${fmt(myBal)} hai — ${fmt(amount)} business mein nahi laga sakte. Papa ki money use nahi hogi!`, 'error');
      return;
    }

    const entryId = uid();
    const entry = {
      id: entryId,
      amount,
      platform,
      purpose: document.getElementById('bizPurpose').value.trim(),
      date: document.getElementById('bizDate').value || today(),
      notes: document.getElementById('bizNotes').value.trim(),
      createdAt: new Date().toISOString()
    };

    // Deduct from currentBalance
    state.currentBalance = (state.currentBalance || 0) - amount;
    state.balanceSet = true;

    // Log in myMoneyLog as spend (linked to biz entry)
    if (!state.myMoneyLog) state.myMoneyLog = [];
    state.myMoneyLog.unshift({
      id: 'mm_biz_' + entryId,
      type: 'spend',
      amt: amount,
      desc: `🚀 Business: [${platform}] ${entry.purpose || ''}`.trim(),
      date: entry.date,
      bizEntryId: entryId,
      createdAt: new Date().toISOString()
    });

    // Also log as expense
    state.expenses.push({
      id: uid(),
      amount,
      category: 'Business',
      owner: 'mine',
      date: entry.date,
      notes: `[${platform}] ${entry.purpose}`,
      bizPlatform: platform,
      bizPurpose: entry.purpose,
      createdAt: new Date().toISOString()
    });

    state.investments.push(entry);
    toast(`₹${amount.toLocaleString('en-IN')} business mein lagaya — My Money & Current Balance update ho gaya 🚀`);

    const { bizInvested } = compute();
    if (bizInvested > state.businessBudget) {
      toast('⚠️ Business budget exceeded!', 'error');
    }
  }

  saveState();
  renderAll();
  renderBizSection();
  renderMyMoneySection();
  closeModal('bizModal');
}

/* =====================================================
   MARK INCOME RECEIVED
===================================================== */
function markReceived(id) {
  const entry = state.income.find(i => i.id === id);
  if (entry) {
    entry.status = 'received';
    state.currentBalance = (state.currentBalance || 0) + Number(entry.amount);
    state.balanceSet = true;
    if (entry.owner === 'mine') logMyMoney('add', Number(entry.amount), `💰 Income received: ${entry.source}`, today());
    if (entry.owner === 'father') warnPapaChange('income received', Number(entry.amount));
    saveState();
    renderAll();
    renderMyMoneySection();
    toast(`${entry.source} received! ✅ Balance updated`);
  }
}

/* =====================================================
   DELETE FUNCTIONS
===================================================== */
/* =====================================================
   HELPER: Log to My Money & Papa Warning
===================================================== */
function logMyMoney(type, amt, desc, date) {
  if (!state.myMoneyLog) state.myMoneyLog = [];
  state.myMoneyLog.unshift({ id: 'mm_auto_' + Date.now(), type, amt, desc, date: date || today(), createdAt: new Date().toISOString() });
}

function warnPapaChange(action, amount) {
  // Show a prominent warning toast
  setTimeout(() => {
    toast(`⚠️ PAPA KI MONEY! ${fmt(amount)} ${action} — Papa ke balance mein change aa raha hai. Agar galti hai toh undo karo!`, 'error');
  }, 300);
}

function deleteIncome(id) {
  if (!confirm('Delete this income entry?')) return;
  const entry = state.income.find(i => i.id === id);
  if (entry && entry.status === 'received') {
    // Reverse from currentBalance
    state.currentBalance = (state.currentBalance || 0) - Number(entry.amount);
    state.balanceSet = true;
    if (entry.owner === 'mine') logMyMoney('spend', Number(entry.amount), `🗑️ Income deleted: ${entry.source}`, today());
    if (entry.owner === 'father') warnPapaChange('income deleted', Number(entry.amount));
  }
  state.income = state.income.filter(i => i.id !== id);
  saveState();
  renderAll();
  renderMyMoneySection();
  toast('Income deleted', 'info');
}

function deleteExpense(id) {
  if (!confirm('Delete this expense?')) return;
  const entry = state.expenses.find(e => e.id === id);
  if (entry) {
    // Reverse: add amount back to currentBalance
    state.currentBalance = (state.currentBalance || 0) + Number(entry.amount);
    state.balanceSet = true;
    if (entry.owner === 'mine') logMyMoney('add', Number(entry.amount), `🗑️ Expense deleted: ${entry.category}`, today());
    if (entry.owner === 'father') warnPapaChange('expense deleted (refund)', Number(entry.amount));
  }
  state.expenses = state.expenses.filter(e => e.id !== id);
  saveState();
  renderAll();
  renderMyMoneySection();
  toast('Expense deleted & balance restored', 'info');
}

function deleteBiz(id) {
  if (!confirm('Delete this investment?')) return;
  const inv = state.investments.find(i => i.id === id);
  if (inv) {
    // Reverse: add amount back to currentBalance
    state.currentBalance = (state.currentBalance || 0) + Number(inv.amount);
    state.balanceSet = true;
    // Remove linked myMoneyLog entry
    state.myMoneyLog = (state.myMoneyLog || []).filter(e => e.bizEntryId !== id);
    // Also remove linked expense
    state.expenses = state.expenses.filter(e => !(e.bizPlatform === inv.platform && Number(e.amount) === Number(inv.amount)));
  }
  state.investments = state.investments.filter(i => i.id !== id);
  saveState();
  renderAll();
  renderBizSection();
  renderMyMoneySection();
  toast('Investment deleted & balance restored ✅', 'info');
}

function deleteGoal(id) {
  if (!confirm('Delete this goal?')) return;
  state.goals = state.goals.filter(g => g.id !== id);
  saveState();
  renderGoals();
  toast('Goal deleted', 'info');
}

/* =====================================================
   CURRENT BALANCE
===================================================== */
function openBalanceModal() {
  document.getElementById('balAmount').value = state.currentBalance || '';
  document.getElementById('balNote').value = state.balanceNote || '';
  openModal('balanceModal');
}

function saveCurrentBalance() {
  const amount = parseFloat(document.getElementById('balAmount').value);
  if (isNaN(amount) || amount < 0) { toast('Enter a valid balance', 'error'); return; }
  state.currentBalance = amount;
  state.balanceNote = document.getElementById('balNote').value.trim();
  state.balanceSet = true;
  saveState();
  closeModal('balanceModal');
  renderCurrentBalance();
  toast('Balance updated ✅');
}

function renderCurrentBalance() {
  const c = compute();
  const cur = state.currentBalance || 0;
  const calc = c.totalAvailable;

  document.getElementById('curBalDisplay').textContent = fmt(cur);
  document.getElementById('curBalNote').textContent = state.balanceNote || (state.balanceSet ? 'Real balance' : 'Set your actual wallet/bank balance');

  const diffEl = document.getElementById('curBalDiff');
  if (!state.balanceSet) {
    diffEl.textContent = 'Not set yet';
    diffEl.className = 'cur-bal-diff neu';
    return;
  }
  const diff = cur - calc;
  if (Math.abs(diff) < 1) {
    diffEl.textContent = '✅ Matches calculated';
    diffEl.className = 'cur-bal-diff pos';
  } else if (diff > 0) {
    diffEl.textContent = `+${fmt(diff)} vs calculated`;
    diffEl.className = 'cur-bal-diff pos';
  } else {
    diffEl.textContent = `${fmt(diff)} vs calculated`;
    diffEl.className = 'cur-bal-diff neg';
  }
}

/* =====================================================
   EDIT PENDING PAYMENT
===================================================== */
let editingPendingId = null;

function openEditPending(id) {
  editingPendingId = id;
  const p = state.income.find(i => i.id === id);
  if (!p) return;
  document.getElementById('editPendSource').value = p.source;
  document.getElementById('editPendAmount').value = p.amount;
  document.getElementById('editPendOwner').value = p.owner;
  document.getElementById('editPendDate').value = p.date || '';
  document.getElementById('editPendNotes').value = p.notes || '';
  openModal('editPendingModal');
}

function saveEditPending() {
  const amount = parseFloat(document.getElementById('editPendAmount').value);
  const source = document.getElementById('editPendSource').value.trim();
  if (!amount || amount <= 0) { toast('Enter a valid amount', 'error'); return; }
  if (!source) { toast('Enter source name', 'error'); return; }

  const idx = state.income.findIndex(i => i.id === editingPendingId);
  if (idx !== -1) {
    state.income[idx] = {
      ...state.income[idx],
      source,
      amount,
      owner: document.getElementById('editPendOwner').value,
      date: document.getElementById('editPendDate').value,
      notes: document.getElementById('editPendNotes').value.trim()
    };
  }
  saveState();
  renderAll();
  closeModal('editPendingModal');
  toast('Pending payment updated ✅');
  editingPendingId = null;
}

/* =====================================================
   GOALS
===================================================== */
let editingGoalId = null;

function openGoalModal(id = null) {
  editingGoalId = id;
  if (id) {
    const g = state.goals.find(g => g.id === id);
    document.getElementById('goalName').value = g.name;
    document.getElementById('goalTarget').value = g.target;
    document.getElementById('goalCurrent').value = g.current;
    document.getElementById('goalIcon').value = g.icon;
    document.getElementById('goalDesc').value = g.desc || '';
    document.getElementById('goalModalTitle').textContent = '✏️ Edit Goal';
    document.getElementById('goalSaveBtn').textContent = 'Update Goal';
  } else {
    document.getElementById('goalName').value = '';
    document.getElementById('goalTarget').value = '';
    document.getElementById('goalCurrent').value = '';
    document.getElementById('goalIcon').value = '🎯';
    document.getElementById('goalDesc').value = '';
    document.getElementById('goalModalTitle').textContent = '🎯 Add Savings Goal';
    document.getElementById('goalSaveBtn').textContent = 'Save Goal';
  }
  openModal('goalModal');
}

function saveGoal() {
  const name = document.getElementById('goalName').value.trim();
  const target = parseFloat(document.getElementById('goalTarget').value);
  const current = parseFloat(document.getElementById('goalCurrent').value) || 0;
  if (!name) { toast('Enter goal name', 'error'); return; }
  if (!target || target <= 0) { toast('Enter target amount', 'error'); return; }

  if (editingGoalId) {
    const idx = state.goals.findIndex(g => g.id === editingGoalId);
    if (idx !== -1) {
      state.goals[idx] = { ...state.goals[idx], name, target, current, icon: document.getElementById('goalIcon').value || '🎯', desc: document.getElementById('goalDesc').value.trim() };
    }
    toast('Goal updated');
  } else {
    state.goals.push({ id: uid(), name, target, current, icon: document.getElementById('goalIcon').value || '🎯', desc: document.getElementById('goalDesc').value.trim() });
    toast('Goal added!');
  }
  saveState();
  closeModal('goalModal');
  renderGoals();
}

function renderGoals() {
  const grid = document.getElementById('goalsGrid');
  const empty = document.getElementById('goalsEmpty');
  if (!state.goals || state.goals.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = state.goals.map(g => {
    const pct = Math.min(100, Math.round((g.current / g.target) * 100));
    const isDone = pct >= 100;
    return `
    <div class="goal-card">
      <div class="goal-header">
        <div>
          <div class="goal-name">${g.icon} ${g.name}</div>
          <div class="goal-target">${g.desc || 'Savings goal'}</div>
        </div>
        <div class="goal-pct" style="${isDone ? 'color:var(--success)' : ''}">${pct}%</div>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar ${pct >= 80 && !isDone ? '' : ''}" style="width:${pct}%;${isDone ? 'background:linear-gradient(90deg,var(--accent-teal),#2f9e82)' : ''}"></div>
      </div>
      <div class="goal-amounts">
        <span>${fmt(g.current)} saved</span>
        <span>Target: ${fmt(g.target)}</span>
      </div>
      ${isDone ? '<div class="alert alert-success" style="margin-top:10px;margin-bottom:0;padding:8px 12px;font-size:12px">🎉 Goal achieved!</div>' : ''}
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn btn-ghost btn-xs" onclick="openGoalModal('${g.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-xs" onclick="deleteGoal('${g.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

/* =====================================================
   RENDER DASHBOARD
===================================================== */
function renderDashboard() {
  const c = compute();

  // Stat cards
  document.getElementById('totalAvailable').textContent = fmt(c.totalAvailable);
  document.getElementById('myMoney').textContent = fmt(c.myMoney);
  document.getElementById('fatherMoney').textContent = fmt(c.fatherMoney);
  document.getElementById('pendingIncoming').textContent = fmt(c.pendingIncome);
  document.getElementById('expectedBalance').textContent = fmt(c.expectedBalance);
  document.getElementById('totalExpenses').textContent = fmt(c.totalExpenses);
  document.getElementById('bizInvested').textContent = fmt(c.bizInvested);
  document.getElementById('bizRemaining').textContent = fmt(c.bizRemaining);
  document.getElementById('sidebarBalance').textContent = fmt(c.totalAvailable);

  // Business budget warning
  const bizWarn = document.getElementById('bizWarning');
  if (c.bizInvested > state.businessBudget) {
    bizWarn.style.display = 'flex';
    document.getElementById('bizRemaining').style.color = 'var(--accent-red)';
  } else {
    bizWarn.style.display = 'none';
    document.getElementById('bizRemaining').style.color = 'var(--accent-teal)';
  }

  // Papa warning — show if fatherMoney is going negative or close to 0
  const papaWarn = document.getElementById('papaWarning');
  const papaWarnText = document.getElementById('papaWarningText');
  if (c.fatherMoney < 0) {
    papaWarn.style.display = 'flex';
    papaWarnText.textContent = `⛔ RUKO! Papa ki money negative ho gayi hai (${fmt(c.fatherMoney)}) — kuch expenses papa ke naam pe hai jo unka balance kha gaya!`;
  } else if (c.fatherMoney < 2000) {
    papaWarn.style.display = 'flex';
    papaWarnText.textContent = `⚠️ Papa ki money sirf ${fmt(c.fatherMoney)} bachi hai — dhyan se! Aur expenses unke naam pe mat daalna.`;
  } else {
    papaWarn.style.display = 'none';
  }

  // Also update sidebar to show real currentBalance
  document.getElementById('sidebarBalance').textContent = fmt(state.currentBalance || 0);

  // Role-based visibility
  const curBalCard = document.getElementById('currentBalanceCard');
  const myNetWorthCard = document.getElementById('myNetWorthCard');
  const fatherNetWorthLabel = document.getElementById('fatherNetWorthLabel');
  const statCardMyMoney = document.getElementById('statCardMyMoney');
  const statCardFatherMoney = document.getElementById('statCardFatherMoney');
  const moneyDistCard = document.getElementById('moneyDistributionCard');

  if (selectedRole === 'papa') {
    // Papa's account: hide personal items, rename Father references
    if (curBalCard) curBalCard.style.display = 'none';
    if (myNetWorthCard) myNetWorthCard.style.display = 'none';
    if (fatherNetWorthLabel) fatherNetWorthLabel.textContent = "Net Worth";
    if (statCardMyMoney) statCardMyMoney.style.display = 'none';
    if (moneyDistCard) moneyDistCard.style.display = 'none';

    // Rename Father's Money → My Funds
    const lbl = document.getElementById('statLabelFatherMoney');
    const sub = document.getElementById('statSubFatherMoney');
    const ico = document.getElementById('statIconFather');
    if (lbl) lbl.textContent = "My Funds";
    if (sub) sub.textContent = "Available balance";
    if (ico) ico.textContent = "💼";
  } else {
    // Normal user: show everything
    if (curBalCard) curBalCard.style.display = 'flex';
    if (myNetWorthCard) myNetWorthCard.style.display = 'block';
    if (fatherNetWorthLabel) fatherNetWorthLabel.textContent = "Father's Net Worth";
    if (statCardMyMoney) statCardMyMoney.style.display = '';
    if (moneyDistCard) moneyDistCard.style.display = '';

    const lbl = document.getElementById('statLabelFatherMoney');
    const sub = document.getElementById('statSubFatherMoney');
    const ico = document.getElementById('statIconFather');
    if (lbl) lbl.textContent = "Father's Money";
    if (sub) sub.textContent = "Father's funds";
    if (ico) ico.textContent = "👴";
  }

  document.getElementById('myNetWorth').textContent = fmt(c.myNetWorth);
  document.getElementById('fatherNetWorth').textContent = fmt(c.fatherNetWorth);

  document.getElementById('myInitial').textContent = fmt(state.initialMine);
  document.getElementById('fatherInitial').textContent = fmt(state.initialFather);

  // Recent transactions
  renderRecentTxns();
  renderDashPending();
  renderCurrentBalance();
  renderDashboardBanks();
}

function renderDashboardBanks() {
  const container = document.getElementById('dashboardBanksContainer');
  if (!container) return;
  if (!state.banks || state.banks.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'grid';
  container.innerHTML = state.banks.map((b, i) => {
    const isCash = b.bank_name === 'Cash';
    const label = isCash ? 'Cash on Hand' : `Bank ${i+1}: ${b.bank_name}`;
    const borderCol = isCash ? 'var(--accent-teal)' : 'var(--accent-blue)';
    return `
    <div class="glass-card" style="padding: 15px; border-left: 4px solid ${borderCol};">
      <div class="stat-label">${label}</div>
      <div class="stat-value" style="font-size: 20px; color: var(--text-primary); margin-bottom: 10px;">₹${Number(b.balance || 0).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-success btn-xs" onclick="promptOwnerSelection('income', '${b.id}')">+ Income</button>
        <button class="btn btn-danger btn-xs" onclick="promptOwnerSelection('expense', '${b.id}')">- Expense</button>
      </div>
    </div>`;
  }).join('');
}

function renderRecentTxns() {
  const container = document.getElementById('recentTxns');
  const allTxns = [
    ...state.income.filter(i => i.status === 'received').map(i => ({ ...i, type: 'income' })),
    ...state.expenses.map(e => ({ ...e, type: 'expense' }))
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);

  if (allTxns.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:24px 0"><div class="empty-icon">📋</div><div class="empty-text">No transactions yet</div></div>';
    return;
  }

  container.innerHTML = allTxns.map(t => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:13.5px;font-weight:600">${t.source || t.category}</div>
        <div style="font-size:11px;color:var(--text-muted)">${fmtDate(t.date)} · ${ownerBadge(t.owner)}</div>
      </div>
      <div style="font-size:14px;font-weight:700;font-family:var(--font-mono);color:${t.type === 'income' ? 'var(--accent-teal)' : 'var(--accent-red)'}">
        ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
      </div>
    </div>
  `).join('');
}

function renderDashPending() {
  const container = document.getElementById('dashPending');
  const pending = state.income.filter(i => i.status === 'pending').slice(0, 5);

  if (pending.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:24px 0"><div class="empty-icon">⏳</div><div class="empty-text">No pending payments</div></div>';
    return;
  }

  container.innerHTML = pending.map(p => {
    const days = daysUntil(p.date);
    let statusClass = 'badge-warning', statusText = 'Pending';
    if (days !== null && days < 0) { statusClass = 'badge-danger'; statusText = 'Overdue'; }
    else if (days !== null && days <= 3) { statusClass = 'badge-warning'; statusText = 'Due Soon'; }

    return `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:13.5px;font-weight:600">${p.source}</div>
        <div style="font-size:11px;color:var(--text-muted)">${p.date ? fmtDate(p.date) : 'No date set'}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:14px;font-weight:700;font-family:var(--font-mono);color:var(--accent-amber)">${fmt(p.amount)}</div>
        <span class="badge ${statusClass}" style="font-size:10px">${statusText}</span>
      </div>
    </div>`;
  }).join('');
}

/* =====================================================
   RENDER INCOME TABLE
===================================================== */
function renderIncomeSection() {
  const tbody = document.getElementById('incomeTableBody');
  const empty = document.getElementById('incomeEmpty');
  const c = compute();

  document.getElementById('totalReceived').textContent = fmt(c.receivedIncome);
  document.getElementById('totalPendingIncome').textContent = fmt(c.pendingIncome);
  document.getElementById('myTotalIncome').textContent = fmt(
    state.income.filter(i => i.owner === 'mine').reduce((s,i) => s+Number(i.amount), 0)
  );
  document.getElementById('fatherTotalIncome').textContent = fmt(
    state.income.filter(i => i.owner === 'father').reduce((s,i) => s+Number(i.amount), 0)
  );

  if (state.income.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    tbody.closest('.table-wrapper').style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  tbody.closest('.table-wrapper').style.display = 'block';

  const sorted = [...state.income].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  tbody.innerHTML = sorted.map(i => `
    <tr>
      <td>${fmtDate(i.date)}</td>
      <td style="font-weight:600">${i.source}</td>
      <td style="font-family:var(--font-mono);color:var(--accent-teal);font-weight:700">${fmt(i.amount)}</td>
      <td>${ownerBadge(i.owner)}</td>
      <td>
        ${i.status === 'received'
          ? '<span class="badge badge-success">✅ Received</span>'
          : `<span class="badge badge-warning">⏳ Pending</span>`}
      </td>
      <td style="color:var(--text-muted);font-size:12px">${i.notes || '—'}</td>
      <td style="white-space:nowrap">
        ${i.status === 'pending' ? `<button class="btn btn-success btn-xs" onclick="markReceived('${i.id}')">✓</button> ` : ''}
        <button class="btn btn-ghost btn-xs" onclick="openIncomeModal('${i.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteIncome('${i.id}')">🗑️</button>
      </td>
    </tr>
  `).join('');
}

/* =====================================================
   RENDER EXPENSE TABLE
===================================================== */
function renderExpenseSection() {
  const tbody = document.getElementById('expenseTableBody');
  const empty = document.getElementById('expenseEmpty');
  const c = compute();

  document.getElementById('expTotal').textContent = fmt(c.totalExpenses);
  document.getElementById('expMine').textContent = fmt(c.myExpenses);
  document.getElementById('expFather').textContent = fmt(c.fatherExpenses);
  document.getElementById('expBusiness').textContent = fmt(
    state.expenses.filter(e => e.category === 'Business').reduce((s,e) => s+Number(e.amount), 0)
  );

  if (state.expenses.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    tbody.closest('.table-wrapper').style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  tbody.closest('.table-wrapper').style.display = 'block';

  const catColors = {
    Business: 'var(--accent-amber)', Personal: 'var(--accent-blue)',
    Food: 'var(--accent-teal)', Travel: 'var(--accent-purple)',
    Shopping: 'var(--accent-pink)', Software: 'var(--accent-blue)',
    Advertising: 'var(--accent-amber)', Healthcare: '#f687b3',
    Education: '#63b3ed', Utilities: '#f6ad55', Rent: '#b794f4',
    Entertainment: '#38d9a9', Fuel: '#fc8181', Subscriptions: '#63b3ed',
    Repairs: '#f6ad55', Gifts: '#f687b3', Other: 'var(--text-secondary)'
  };

  const sorted = [...state.expenses].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  tbody.innerHTML = sorted.map(e => `
    <tr>
      <td>${fmtDate(e.date)}</td>
      <td><span class="badge" style="background:rgba(255,255,255,0.06);color:${catColors[e.category]||'var(--text-secondary)'}">${e.category}</span></td>
      <td style="font-family:var(--font-mono);color:var(--accent-red);font-weight:700">-${fmt(e.amount)}</td>
      <td>${ownerBadge(e.owner)}</td>
      <td style="color:var(--text-muted);font-size:12px">${e.notes || '—'}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-ghost btn-xs" onclick="openExpenseModal('${e.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteExpense('${e.id}')">🗑️</button>
      </td>
    </tr>
  `).join('');
}

/* =====================================================
   RENDER PENDING TABLE
===================================================== */
function renderPendingSection() {
  const tbody = document.getElementById('pendingTableBody');
  const empty = document.getElementById('pendingEmpty');
  const pending = state.income.filter(i => i.status === 'pending');

  if (pending.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    tbody.closest('.table-wrapper').style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  tbody.closest('.table-wrapper').style.display = 'block';

  tbody.innerHTML = pending.map(p => {
    const days = daysUntil(p.date);
    let rowClass = '', statusHtml = '', daysHtml = '—';

    if (!p.date) {
      statusHtml = '<span class="badge badge-warning">⏳ Pending</span>';
    } else if (days < 0) {
      rowClass = 'row-overdue';
      statusHtml = '<span class="badge badge-danger">🔴 Overdue</span>';
      daysHtml = `<span style="color:var(--accent-red);font-weight:600">${Math.abs(days)}d overdue</span>`;
    } else if (days <= 3) {
      rowClass = 'row-soon';
      statusHtml = '<span class="badge badge-warning">⚡ Due Soon</span>';
      daysHtml = `<span style="color:var(--accent-amber);font-weight:600">${days}d left</span>`;
    } else {
      statusHtml = '<span class="badge badge-info">⏳ Pending</span>';
      daysHtml = `${days}d`;
    }

    return `
    <tr class="${rowClass}">
      <td style="font-weight:600">${p.source}</td>
      <td style="font-family:var(--font-mono);color:var(--accent-amber);font-weight:700">${fmt(p.amount)}</td>
      <td>${ownerBadge(p.owner)}</td>
      <td>
        <input type="date" class="form-control" style="max-width:150px;padding:5px 8px;font-size:12px"
          value="${p.date || ''}"
          onchange="updatePendingDate('${p.id}', this.value)">
      </td>
      <td>${statusHtml}</td>
      <td>${daysHtml}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-success btn-xs" onclick="markReceived('${p.id}')">✓ Received</button>
        <button class="btn btn-ghost btn-xs" onclick="openEditPending('${p.id}')">✏️</button>
        <button class="btn btn-danger btn-xs" onclick="deleteIncome('${p.id}')">🗑️</button>
      </td>
    </tr>`;
  }).join('');
}

function updatePendingDate(id, date) {
  const entry = state.income.find(i => i.id === id);
  if (entry) {
    entry.date = date;
    saveState();
    renderPendingSection();
    renderDashPending();
  }
}

/* =====================================================
   RENDER HISTORY
===================================================== */
function renderHistory() {
  const search = document.getElementById('historySearch').value.toLowerCase();
  const ownerF = document.getElementById('historyOwner').value;
  const typeF = document.getElementById('historyType').value;
  const categoryF = document.getElementById('historyCategory').value;
  const fromF = document.getElementById('historyFrom').value;
  const toF = document.getElementById('historyTo').value;

  let txns = [
    ...state.income.filter(i => i.status === 'received').map(i => ({ ...i, type: 'income', displayCat: i.source })),
    ...state.expenses.map(e => ({ ...e, type: 'expense', displayCat: e.category }))
  ];

  if (search) txns = txns.filter(t => (t.source || t.category || '').toLowerCase().includes(search) || (t.notes || '').toLowerCase().includes(search));
  if (ownerF) txns = txns.filter(t => t.owner === ownerF);
  if (typeF) txns = txns.filter(t => t.type === typeF);
  if (categoryF) txns = txns.filter(t => t.category === categoryF);
  if (fromF) txns = txns.filter(t => t.date >= fromF);
  if (toF) txns = txns.filter(t => t.date <= toF);

  txns.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const tbody = document.getElementById('historyTableBody');
  const empty = document.getElementById('historyEmpty');

  if (txns.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  tbody.innerHTML = txns.map(t => `
    <tr>
      <td>${fmtDate(t.date)}</td>
      <td>
        ${t.type === 'income'
          ? '<span class="badge badge-success">Income</span>'
          : '<span class="badge badge-danger">Expense</span>'}
      </td>
      <td style="font-weight:600">${t.displayCat}</td>
      <td>${ownerBadge(t.owner)}</td>
      <td style="font-family:var(--font-mono);font-weight:700;color:${t.type === 'income' ? 'var(--accent-teal)' : 'var(--accent-red)'}">
        ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
      </td>
      <td style="font-size:12px;color:var(--text-muted)">${t.notes || '—'}</td>
    </tr>
  `).join('');
}

function clearHistoryFilters() {
  ['historySearch','historyOwner','historyType','historyCategory','historyFrom','historyTo'].forEach(id => {
    const el = document.getElementById(id);
    el.value = '';
  });
  renderHistory();
}

/* =====================================================
   RENDER BUSINESS SECTION
===================================================== */
function renderBizSection() {
  const bizInvested = state.investments.reduce((s, i) => s + Number(i.amount), 0);
  const bizRemaining = state.businessBudget - bizInvested;
  const pct = Math.min(100, Math.round((bizInvested / state.businessBudget) * 100));

  document.getElementById('bizProgressLabel').textContent = `${fmt(bizInvested)} / ${fmt(state.businessBudget)}`;
  document.getElementById('bizProgressPct').textContent = `${pct}%`;
  document.getElementById('bizProgressBar').style.width = pct + '%';
  document.getElementById('bizProgressBar').className = 'progress-bar' + (pct >= 90 ? ' danger' : '');
  document.getElementById('bizTotalInvested').textContent = fmt(bizInvested);
  document.getElementById('bizBudgetLeft').textContent = fmt(bizRemaining);
  document.getElementById('bizBudgetLeft').style.color = bizRemaining < 0 ? 'var(--accent-red)' : 'var(--accent-teal)';

  const overLimit = document.getElementById('bizOverLimitAlert');
  overLimit.style.display = bizInvested > state.businessBudget ? 'flex' : 'none';

  // Log
  const logList = document.getElementById('bizLogList');
  const empty = document.getElementById('bizEmpty');

  if (state.investments.length === 0) {
    logList.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  const sorted = [...state.investments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  logList.innerHTML = sorted.map(i => `
    <div class="invest-row">
      <div>
        <div class="invest-platform">${i.platform}</div>
        <div class="invest-purpose">${i.purpose || i.notes || 'Business investment'}</div>
      </div>
      <div style="text-align:right">
        <div class="invest-amount">${fmt(i.amount)}</div>
        <div class="invest-date">${fmtDate(i.date)}</div>
        <div style="display:flex;gap:4px;margin-top:4px;justify-content:flex-end">
          <button class="btn btn-ghost btn-xs" onclick="openBizModal('${i.id}')">✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteBiz('${i.id}')">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');

  // Pie chart
  renderBizPieChart();
}

/* =====================================================
   CHARTS
===================================================== */
let charts = {};

function destroyChart(key) {
  if (charts[key]) { charts[key].destroy(); delete charts[key]; }
}

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#8896a8', font: { family: 'DM Mono', size: 11 } } }
  }
};

function renderBizPieChart() {
  destroyChart('bizPie');
  if (state.investments.length === 0) return;

  const platformTotals = {};
  state.investments.forEach(i => {
    platformTotals[i.platform] = (platformTotals[i.platform] || 0) + Number(i.amount);
  });

  const labels = Object.keys(platformTotals);
  const data = Object.values(platformTotals);
  const colors = ['#63b3ed','#38d9a9','#f6ad55','#fc8181','#b794f4','#f687b3'];

  charts.bizPie = new Chart(document.getElementById('bizPieChart'), {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors.slice(0, labels.length), borderWidth: 0 }] },
    options: { ...chartDefaults, cutout: '60%' }
  });
}

function renderCharts() {
  // 1. Income vs Expenses (by month)
  destroyChart('incExp');
  const monthlyData = buildMonthlyData();
  const months = Object.keys(monthlyData).slice(-6);

  charts.incExp = new Chart(document.getElementById('incExpChart'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        { label: 'Income', data: months.map(m => monthlyData[m].income), backgroundColor: 'rgba(56,217,169,0.7)', borderRadius: 4 },
        { label: 'Expenses', data: months.map(m => monthlyData[m].expenses), backgroundColor: 'rgba(252,129,129,0.7)', borderRadius: 4 }
      ]
    },
    options: {
      ...chartDefaults,
      scales: {
        x: { ticks: { color: '#8896a8' }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#8896a8', callback: v => '₹' + v.toLocaleString('en-IN') }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });

  // 2. Owner distribution
  destroyChart('owner');
  const c = compute();
  charts.owner = new Chart(document.getElementById('ownerChart'), {
    type: 'doughnut',
    data: {
      labels: ['My Money', "Father's Money"],
      datasets: [{
        data: [Math.max(0, c.myMoney), Math.max(0, c.fatherMoney)],
        backgroundColor: ['rgba(99,179,237,0.8)', 'rgba(183,148,244,0.8)'],
        borderWidth: 0
      }]
    },
    options: { ...chartDefaults, cutout: '55%' }
  });

  // 3. Business spending by platform
  destroyChart('bizSpend');
  const platformTotals = {};
  state.investments.forEach(i => {
    platformTotals[i.platform] = (platformTotals[i.platform] || 0) + Number(i.amount);
  });

  if (Object.keys(platformTotals).length > 0) {
    charts.bizSpend = new Chart(document.getElementById('bizSpendChart'), {
      type: 'bar',
      data: {
        labels: Object.keys(platformTotals),
        datasets: [{
          label: 'Investment',
          data: Object.values(platformTotals),
          backgroundColor: 'rgba(246,173,85,0.7)',
          borderRadius: 4
        }]
      },
      options: {
        ...chartDefaults,
        scales: {
          x: { ticks: { color: '#8896a8' }, grid: { color: 'rgba(255,255,255,0.04)' } },
          y: { ticks: { color: '#8896a8', callback: v => '₹' + v.toLocaleString('en-IN') }, grid: { color: 'rgba(255,255,255,0.04)' } }
        }
      }
    });
  }

  // 4. Cash flow
  destroyChart('cashFlow');
  charts.cashFlow = new Chart(document.getElementById('cashFlowChart'), {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Net Cash Flow',
        data: months.map(m => monthlyData[m].income - monthlyData[m].expenses),
        borderColor: '#63b3ed',
        backgroundColor: 'rgba(99,179,237,0.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#63b3ed',
        pointRadius: 4
      }]
    },
    options: {
      ...chartDefaults,
      scales: {
        x: { ticks: { color: '#8896a8' }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#8896a8', callback: v => '₹' + v.toLocaleString('en-IN') }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

function buildMonthlyData() {
  const data = {};
  const now = new Date();

  // Build last 6 months
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    data[key] = { income: 0, expenses: 0 };
  }

  state.income.filter(i => i.status === 'received' && i.date).forEach(i => {
    const d = new Date(i.date);
    const key = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    if (data[key] !== undefined) data[key].income += Number(i.amount);
  });

  state.expenses.filter(e => e.date).forEach(e => {
    const d = new Date(e.date);
    const key = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    if (data[key] !== undefined) data[key].expenses += Number(e.amount);
  });

  return data;
}

/* =====================================================
   BACKUP
===================================================== */
function renderBackupSummary() {
  const c = compute();
  document.getElementById('backupSummary').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
      <div><div class="stat-label">Income Entries</div><div class="font-mono" style="font-size:18px;margin-top:4px">${state.income.length}</div></div>
      <div><div class="stat-label">Expense Entries</div><div class="font-mono" style="font-size:18px;margin-top:4px">${state.expenses.length}</div></div>
      <div><div class="stat-label">Business Investments</div><div class="font-mono" style="font-size:18px;margin-top:4px">${state.investments.length}</div></div>
      <div><div class="stat-label">Savings Goals</div><div class="font-mono" style="font-size:18px;margin-top:4px">${state.goals.length}</div></div>
      <div><div class="stat-label">Total Balance</div><div class="font-mono" style="font-size:18px;margin-top:4px;color:var(--accent-teal)">${fmt(c.totalAvailable)}</div></div>
      <div><div class="stat-label">Last Saved</div><div class="font-mono" style="font-size:13px;margin-top:4px;color:var(--text-muted)">${new Date().toLocaleString('en-IN')}</div></div>
    </div>`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `money-manager-backup-${today()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Data exported successfully!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      state = imported;
      saveState();
      renderAll();
      toast('Data imported successfully!');
    } catch(err) {
      toast('Invalid JSON file', 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function confirmReset() {
  if (confirm('⚠️ This will DELETE all your data permanently. Are you absolutely sure?')) {
    if (confirm('Final confirmation: Reset all data?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  }
}

/* =====================================================
   MY MONEY
===================================================== */
let mmModalType = 'add'; // 'add' | 'spend' | 'set'

function openMyMoneyModal(type) {
  mmModalType = type;
  const titles = { add: '➕ Add Money', spend: '💸 Record Spend', set: '✏️ Set My Balance' };
  const descs = {
    add: 'Record money you have received or added to your personal funds (e.g. freelance payment, gift, cash received).',
    spend: 'Record an amount you have spent from your personal money (e.g. food, travel, shopping).',
    set: 'Manually override your current my-money balance. This sets an exact figure rather than calculating from history.'
  };
  const btnStyles = { add: 'btn-success', spend: 'btn-danger', set: 'btn-primary' };
  document.getElementById('myMoneyModalTitle').textContent = titles[type];
  document.getElementById('myMoneyModalDesc').textContent = descs[type];
  const btn = document.getElementById('myMoneySaveBtn');
  btn.className = `btn ${btnStyles[type]}`;
  btn.textContent = type === 'set' ? 'Set Balance' : type === 'spend' ? 'Record Spend' : 'Add Money';
  document.getElementById('mmAmount').value = '';
  document.getElementById('mmDesc').value = '';
  document.getElementById('mmDate').value = today();

  const bankGrp = document.getElementById('mmBankSelectGroup');
  const bankSel = document.getElementById('mmBankSelect');
  if (type === 'set') {
    bankGrp.style.display = 'none';
  } else {
    bankGrp.style.display = 'block';
    bankSel.innerHTML = (state.banks || []).map(b => `<option value="${b.id}">${b.bank_name}</option>`).join('');
  }

  document.getElementById('myMoneyModal').classList.add('open');
}

function saveMyMoneyTxn() {
  const amt = parseFloat(document.getElementById('mmAmount').value);
  const desc = document.getElementById('mmDesc').value.trim() || (mmModalType === 'add' ? 'Money Added' : mmModalType === 'spend' ? 'Expense' : 'Balance Set');
  const date = document.getElementById('mmDate').value || today();
  const bankId = document.getElementById('mmBankSelect') ? document.getElementById('mmBankSelect').value : null;

  if (!amt || amt <= 0) { toast('Enter a valid amount', 'error'); return; }

  if (!state.myMoneyLog) state.myMoneyLog = [];

  if (mmModalType === 'set') {
    const oldMyBal = getMyMoneyBalance();
    const diff = amt - oldMyBal;
    state.currentBalance = (state.currentBalance || 0) + diff;
    state.balanceSet = true;
    state.myMoneyManualBalance = amt;
    state.myMoneyLog.unshift({ id: 'mm_' + Date.now(), type: 'set', amt, desc, date, createdAt: new Date().toISOString() });
    toast('My Money balance set to ' + fmt(amt), 'success');

  } else if (mmModalType === 'spend') {
    const myBal = getMyMoneyBalance();
    if (myBal < amt) {
      toast(`❌ BLOCKED! Tumhare paas sirf ${fmt(myBal)} hai — ${fmt(amt)} nahi nikal sakte. Papa ki money use nahi hogi!`, 'error');
      return;
    }
    state.currentBalance = (state.currentBalance || 0) - amt;
    state.balanceSet = true;
    state.myMoneyLog.unshift({ id: 'mm_' + Date.now(), type: 'spend', amt, desc, date, bankId, createdAt: new Date().toISOString() });

    // Deduct from selected bank
    if (bankId) {
      const bIdx = (state.banks || []).findIndex(b => b.id === bankId);
      if (bIdx !== -1) {
        state.banks[bIdx].balance = Number(state.banks[bIdx].balance) - amt;
        if (window.supabaseClient) supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
      }
    }
    toast(`${fmt(amt)} deduct hua — My Money & Current Balance dono update 💸`, 'success');

  } else {
    state.currentBalance = (state.currentBalance || 0) + amt;
    state.balanceSet = true;
    state.myMoneyLog.unshift({ id: 'mm_' + Date.now(), type: 'add', amt, desc, date, bankId, createdAt: new Date().toISOString() });

    // Add to selected bank
    if (bankId) {
      const bIdx = (state.banks || []).findIndex(b => b.id === bankId);
      if (bIdx !== -1) {
        state.banks[bIdx].balance = Number(state.banks[bIdx].balance) + amt;
        if (window.supabaseClient) supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
      }
    }
    toast(fmt(amt) + ' My Money me add ho gaye! 📈', 'success');
  }

  saveState();
  renderMyMoneySection();
  if (typeof renderDashboardBanks === 'function') renderDashboardBanks();
  renderDashboard();
  renderAll();
  closeModal('myMoneyModal');
}

// Helper: get current My Money balance from log
function getMyMoneyBalance() {
  if (!state.myMoneyLog) return state.initialMine;
  const c = compute();
  let logBal = null;
  const sortedLog = [...state.myMoneyLog].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
  for (const entry of sortedLog) {
    if (entry.type === 'set') logBal = entry.amt;
    else if (logBal !== null) logBal = entry.type === 'add' ? logBal + entry.amt : logBal - entry.amt;
  }
  return logBal !== null ? logBal : c.myMoney;
}

function clearMyMoneyLog() {
  if (!confirm('Clear all My Money log entries?')) return;
  state.myMoneyLog = [];
  state.myMoneyManualBalance = undefined;
  saveState();
  renderMyMoneySection();
  toast('Log cleared');
}

function renderMyMoneySection() {
  const c = compute();

  // Calculate My Money balance from log if exists, else from computed
  let myBal = c.myMoney;
  if (!state.myMoneyLog) state.myMoneyLog = [];

  // Apply log entries on top of computed base
  // If a 'set' entry exists, use that as the base and apply subsequent entries
  let logBal = null;
  const sortedLog = [...state.myMoneyLog].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
  for (const entry of sortedLog) {
    if (entry.type === 'set') {
      logBal = entry.amt;
    } else if (logBal !== null) {
      logBal = entry.type === 'add' ? logBal + entry.amt : logBal - entry.amt;
    }
  }
  const displayBal = logBal !== null ? logBal : myBal;

  // My pending
  const myPending = state.income.filter(i => i.status === 'pending' && i.owner === 'mine').reduce((s,i) => s+Number(i.amount), 0);
  const myIncome = state.income.filter(i => i.status === 'received' && i.owner === 'mine').reduce((s,i) => s+Number(i.amount), 0);
  const myExpenses = state.expenses.filter(e => e.owner === 'mine').reduce((s,e) => s+Number(e.amount), 0);

  document.getElementById('mmHeroAmount').textContent = fmt(displayBal);
  document.getElementById('mmHeroSub').textContent = logBal !== null
    ? 'Manually adjusted balance with log entries'
    : `Initial ₹${state.initialMine.toLocaleString('en-IN')} + ₹${myIncome.toLocaleString('en-IN')} income − ₹${myExpenses.toLocaleString('en-IN')} expenses`;
  document.getElementById('mmTotalIncome').textContent = fmt(myIncome);
  document.getElementById('mmTotalSpent').textContent = fmt(myExpenses);
  document.getElementById('mmPendingIncome').textContent = fmt(myPending);
  document.getElementById('mmExpected').textContent = fmt(displayBal + myPending);

  // Render log
  const list = document.getElementById('myMoneyTxnList');
  const empty = document.getElementById('myMoneyEmpty');
  if (!state.myMoneyLog.length) {
    list.innerHTML = '';
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = state.myMoneyLog.map(entry => {
    const icons = { add: '➕', spend: '💸', set: '✏️' };
    const sign = entry.type === 'spend' ? '−' : entry.type === 'add' ? '+' : '';
    return `
      <div class="mymoney-txn-row">
        <div class="mymoney-txn-icon ${entry.type}">${icons[entry.type]}</div>
        <div class="mymoney-txn-info">
          <div class="mymoney-txn-desc">${entry.desc}</div>
          <div class="mymoney-txn-date">${entry.date ? new Date(entry.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—'}</div>
        </div>
        <div>
          <div class="mymoney-txn-amt ${entry.type}">${entry.type === 'set' ? '= ' : sign}${fmt(entry.amt)}</div>
          <div style="text-align:right;margin-top:4px">
            <button class="btn btn-ghost btn-xs" onclick="deleteMyMoneyEntry('${entry.id}')">✕</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function deleteMyMoneyEntry(id) {
  const entry = (state.myMoneyLog || []).find(e => e.id === id);
  if (entry) {
    // Reverse the effect on currentBalance
    if (entry.type === 'spend') {
      state.currentBalance = (state.currentBalance || 0) + entry.amt;
    } else if (entry.type === 'add') {
      state.currentBalance = (state.currentBalance || 0) - entry.amt;
    }
    state.balanceSet = true;
  }
  state.myMoneyLog = (state.myMoneyLog || []).filter(e => e.id !== id);
  saveState();
  renderMyMoneySection();
  renderDashboard();
  toast('Entry removed & balance restored');
}

/* =====================================================
   FATHER'S MONEY
===================================================== */
let fmModalType = 'add';

function openFatherMoneyModal(type) {
  fmModalType = type;
  const titles = { add: '➕ Add Money (Father)', spend: '💸 Record Spend (Father)', set: "✏️ Set Father's Balance" };
  const descs = {
    add: "Record money added to father's funds (e.g. salary, pension, received cash).",
    spend: "Record an expense from father's money (e.g. bills, groceries, medical).",
    set: "Manually set father's current balance to an exact figure."
  };
  const btnStyles = { add: 'btn-success', spend: 'btn-danger', set: 'btn-primary' };
  document.getElementById('fatherMoneyModalTitle').textContent = titles[type];
  document.getElementById('fatherMoneyModalDesc').textContent = descs[type];
  const btn = document.getElementById('fmSaveBtn');
  btn.className = `btn ${btnStyles[type]}`;
  btn.textContent = type === 'set' ? 'Set Balance' : type === 'spend' ? 'Record Spend' : 'Add Money';
  document.getElementById('fmAmount').value = '';
  document.getElementById('fmDesc').value = '';
  document.getElementById('fmDate').value = today();

  const bankGrp = document.getElementById('fmBankSelectGroup');
  const bankSel = document.getElementById('fmBankSelect');
  if (type === 'set') {
    bankGrp.style.display = 'none';
  } else {
    bankGrp.style.display = 'block';
    bankSel.innerHTML = (state.banks || []).map(b => `<option value="${b.id}">${b.bank_name}</option>`).join('');
  }

  document.getElementById('fatherMoneyModal').classList.add('open');
}

function getFatherMoneyBalance() {
  if (!state.fatherMoneyLog || state.fatherMoneyLog.length === 0) {
    const c = compute();
    return c.fatherMoney;
  }
  const c = compute();
  let logBal = null;
  const sortedLog = [...state.fatherMoneyLog].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
  for (const entry of sortedLog) {
    if (entry.type === 'set') logBal = entry.amt;
    else if (logBal !== null) logBal = entry.type === 'add' ? logBal + entry.amt : logBal - entry.amt;
  }
  return logBal !== null ? logBal : c.fatherMoney;
}

function saveFatherMoneyTxn() {
  const amt = parseFloat(document.getElementById('fmAmount').value);
  const desc = document.getElementById('fmDesc').value.trim() || (fmModalType === 'add' ? 'Money Added' : fmModalType === 'spend' ? 'Expense' : 'Balance Set');
  const date = document.getElementById('fmDate').value || today();
  const bankId = document.getElementById('fmBankSelect') ? document.getElementById('fmBankSelect').value : null;

  if (!amt || amt <= 0) { toast('Enter a valid amount', 'error'); return; }

  if (!state.fatherMoneyLog) state.fatherMoneyLog = [];

  if (fmModalType === 'set') {
    const oldBal = getFatherMoneyBalance();
    const diff = amt - oldBal;
    state.currentBalance = (state.currentBalance || 0) + diff;
    state.balanceSet = true;
    state.fatherMoneyManualBalance = amt;
    state.fatherMoneyLog.unshift({ id: 'fm_' + Date.now(), type: 'set', amt, desc, date, createdAt: new Date().toISOString() });
    toast("Balance set to " + fmt(amt), 'success');

  } else if (fmModalType === 'spend') {
    const fBal = getFatherMoneyBalance();
    if (fBal < amt) {
      toast(`❌ Sirf ${fmt(fBal)} hai — ${fmt(amt)} nahi nikal sakte!`, 'error');
      return;
    }
    state.currentBalance = (state.currentBalance || 0) - amt;
    state.balanceSet = true;
    state.expenses.push({
      id: uid(), amount: amt, category: 'Personal', owner: 'father',
      date, notes: `💼 ${desc}`, createdAt: new Date().toISOString()
    });
    state.fatherMoneyLog.unshift({ id: 'fm_' + Date.now(), type: 'spend', amt, desc, date, bankId, createdAt: new Date().toISOString() });

    // Deduct from selected bank
    if (bankId) {
      const bIdx = (state.banks || []).findIndex(b => b.id === bankId);
      if (bIdx !== -1) {
        state.banks[bIdx].balance = Number(state.banks[bIdx].balance) - amt;
        if (window.supabaseClient) supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
      }
    }
    toast(`${fmt(amt)} deducted 💸`, 'success');

  } else {
    state.currentBalance = (state.currentBalance || 0) + amt;
    state.balanceSet = true;
    state.income.push({
      id: uid(), amount: amt, source: desc, owner: 'father',
      date, status: 'received', notes: '💼 Income',
      createdAt: new Date().toISOString()
    });
    state.fatherMoneyLog.unshift({ id: 'fm_' + Date.now(), type: 'add', amt, desc, date, bankId, createdAt: new Date().toISOString() });

    // Add to selected bank
    if (bankId) {
      const bIdx = (state.banks || []).findIndex(b => b.id === bankId);
      if (bIdx !== -1) {
        state.banks[bIdx].balance = Number(state.banks[bIdx].balance) + amt;
        if (window.supabaseClient) supabaseClient.from('user_banks').update({ balance: state.banks[bIdx].balance }).eq('id', bankId).then();
      }
    }
    toast(fmt(amt) + " added 💰", 'success');
  }

  saveState();
  renderFatherMoneySection();
  if (typeof renderDashboardBanks === 'function') renderDashboardBanks();
  renderDashboard();
  renderAll();
  closeModal('fatherMoneyModal');
}

function clearFatherMoneyLog() {
  if (!confirm("Clear all Father's Money log entries?")) return;
  state.fatherMoneyLog = [];
  state.fatherMoneyManualBalance = undefined;
  saveState();
  renderFatherMoneySection();
  toast('Log cleared');
}

function deleteFatherMoneyEntry(id) {
  const entry = (state.fatherMoneyLog || []).find(e => e.id === id);
  if (entry) {
    if (entry.type === 'spend') {
      state.currentBalance = (state.currentBalance || 0) + entry.amt;
    } else if (entry.type === 'add') {
      state.currentBalance = (state.currentBalance || 0) - entry.amt;
    }
    state.balanceSet = true;
  }
  state.fatherMoneyLog = (state.fatherMoneyLog || []).filter(e => e.id !== id);
  saveState();
  renderFatherMoneySection();
  renderDashboard();
  toast('Entry removed & balance restored');
}

function renderFatherMoneySection() {
  const c = compute();

  let fatherBal = c.fatherMoney;
  if (!state.fatherMoneyLog) state.fatherMoneyLog = [];

  let logBal = null;
  const sortedLog = [...state.fatherMoneyLog].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
  for (const entry of sortedLog) {
    if (entry.type === 'set') logBal = entry.amt;
    else if (logBal !== null) logBal = entry.type === 'add' ? logBal + entry.amt : logBal - entry.amt;
  }
  const displayBal = logBal !== null ? logBal : fatherBal;

  const fatherPending = state.income.filter(i => i.status === 'pending' && i.owner === 'father').reduce((s,i) => s+Number(i.amount), 0);
  const fatherIncome = state.income.filter(i => i.status === 'received' && i.owner === 'father').reduce((s,i) => s+Number(i.amount), 0);
  const fatherExpenses = state.expenses.filter(e => e.owner === 'father').reduce((s,e) => s+Number(e.amount), 0);

  const heroEl = document.getElementById('fmHeroAmount');
  if (heroEl) heroEl.textContent = fmt(displayBal);
  const subEl = document.getElementById('fmHeroSub');
  if (subEl) subEl.textContent = logBal !== null
    ? 'Manually adjusted balance with log entries'
    : `Initial ₹${state.initialFather.toLocaleString('en-IN')} + ₹${fatherIncome.toLocaleString('en-IN')} income − ₹${fatherExpenses.toLocaleString('en-IN')} expenses`;

  const tiEl = document.getElementById('fmTotalIncome');
  if (tiEl) tiEl.textContent = fmt(fatherIncome);
  const tsEl = document.getElementById('fmTotalSpent');
  if (tsEl) tsEl.textContent = fmt(fatherExpenses);
  const piEl = document.getElementById('fmPendingIncome');
  if (piEl) piEl.textContent = fmt(fatherPending);
  const exEl = document.getElementById('fmExpected');
  if (exEl) exEl.textContent = fmt(displayBal + fatherPending);

  // Render log
  const list = document.getElementById('fatherMoneyTxnList');
  const empty = document.getElementById('fatherMoneyEmpty');
  if (!list) return;
  if (!state.fatherMoneyLog.length) {
    list.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';
  list.innerHTML = state.fatherMoneyLog.map(entry => {
    const icons = { add: '➕', spend: '💸', set: '✏️' };
    const sign = entry.type === 'spend' ? '−' : entry.type === 'add' ? '+' : '';
    return `
      <div class="mymoney-txn-row">
        <div class="mymoney-txn-icon ${entry.type}">${icons[entry.type]}</div>
        <div class="mymoney-txn-info">
          <div class="mymoney-txn-desc">${entry.desc}</div>
          <div class="mymoney-txn-date">${entry.date ? new Date(entry.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—'}</div>
        </div>
        <div>
          <div class="mymoney-txn-amt ${entry.type}">${entry.type === 'set' ? '= ' : sign}${fmt(entry.amt)}</div>
          <div style="text-align:right;margin-top:4px">
            <button class="btn btn-ghost btn-xs" onclick="deleteFatherMoneyEntry('${entry.id}')">✕</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* =====================================================
   QUICK PAY — UPI PAYMENTS
===================================================== */
let editingContactId = null;

function openContactModal(id = null) {
  editingContactId = id;
  if (id) {
    const c = (state.upiContacts || []).find(x => x.id === id);
    if (!c) return;
    document.getElementById('ctName').value = c.name;
    document.getElementById('ctUpi').value = c.upiId;
    document.getElementById('ctEmoji').value = c.emoji || '👤';
    document.getElementById('contactModalTitle').textContent = '✏️ Edit Contact';
    document.getElementById('ctSaveBtn').textContent = 'Update Contact';
  } else {
    document.getElementById('ctName').value = '';
    document.getElementById('ctUpi').value = '';
    document.getElementById('ctEmoji').value = '👤';
    document.getElementById('contactModalTitle').textContent = '📲 Add UPI Contact';
    document.getElementById('ctSaveBtn').textContent = 'Save Contact';
  }
  openModal('contactModal');
}

function saveContact() {
  const name = document.getElementById('ctName').value.trim();
  const upiId = document.getElementById('ctUpi').value.trim();
  const emoji = document.getElementById('ctEmoji').value.trim() || '👤';
  if (!name) { toast('Name daalo!', 'error'); return; }
  if (!upiId || !upiId.includes('@')) { toast('Valid UPI ID daalo (e.g. name@ybl)', 'error'); return; }

  if (!state.upiContacts) state.upiContacts = [];

  if (editingContactId) {
    const idx = state.upiContacts.findIndex(c => c.id === editingContactId);
    if (idx !== -1) state.upiContacts[idx] = { ...state.upiContacts[idx], name, upiId, emoji };
    toast('Contact updated ✅');
    editingContactId = null;
  } else {
    state.upiContacts.push({ id: 'upi_' + Date.now(), name, upiId, emoji });
    toast(`${name} added! 📲`);
  }
  saveState();
  renderQuickPay();
  closeModal('contactModal');
}

function deleteContact(id) {
  if (!confirm('Delete this contact?')) return;
  state.upiContacts = (state.upiContacts || []).filter(c => c.id !== id);
  saveState();
  renderQuickPay();
  toast('Contact deleted', 'info');

  // Also delete from Supabase
  if (window.supabaseClient && currentUserId) {
    supabaseClient.from('upi_contacts').delete().eq('user_id', currentUserId).eq('local_id', id).then();
  }
}

function setQuickPayAmt(contactId, amt) {
  const inp = document.getElementById('qpAmt_' + contactId);
  if (inp) inp.value = amt;
  // Highlight active preset
  document.querySelectorAll('.qp-preset').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('qpp_' + contactId + '_' + amt);
  if (btn) btn.classList.add('active');
}

function promptOwnerSelection(actionType, bankId = null) {
  if (actionType === 'income') {
    document.getElementById('ownerSelectTitle').textContent = '💰 Add Income';
    document.getElementById('ownerSelectDesc').textContent = 'Select which account received this income:';
    openModal('ownerSelectionModal');
    
    document.getElementById('ownerSelectMineBtn').onclick = function() {
      closeModal('ownerSelectionModal');
      showSection('income');
      openIncomeModal(null, 'mine', bankId);
    };
    document.getElementById('ownerSelectFatherBtn').onclick = function() {
      closeModal('ownerSelectionModal');
      showSection('income');
      openIncomeModal(null, 'father', bankId);
    };
  } else if (actionType === 'expense') {
    document.getElementById('ownerSelectTitle').textContent = '💸 Record Expense';
    document.getElementById('ownerSelectDesc').textContent = 'Select which account to spend this expense from:';
    openModal('ownerSelectionModal');
    
    document.getElementById('ownerSelectMineBtn').onclick = function() {
      closeModal('ownerSelectionModal');
      showSection('expenses');
      openExpenseModal(null, 'mine', bankId);
    };
    document.getElementById('ownerSelectFatherBtn').onclick = function() {
      closeModal('ownerSelectionModal');
      showSection('expenses');
      openExpenseModal(null, 'father', bankId);
    };
  }
}

function executeUpiPayment(contactId, amt, note, owner) {
  const contact = (state.upiContacts || []).find(c => c.id === contactId);
  if (!contact) return;

  const paymentId = uid();

  if (owner) {
    if (!state.upiPayments) state.upiPayments = [];
    state.upiPayments.unshift({
      id: paymentId,
      contactId,
      contactName: contact.name,
      contactEmoji: contact.emoji,
      amount: amt,
      note,
      date: today(),
      owner,
      status: 'pending',
      createdAt: new Date().toISOString()
    });

    saveState();
    renderAll();
  }

  // Build UPI deep link
  const upiUrl = `upi://pay?pa=${encodeURIComponent(contact.upiId)}&pn=${encodeURIComponent(contact.name)}&am=${amt}&cu=INR&tn=${encodeURIComponent(note)}`;
  window.location.href = upiUrl;

  setTimeout(() => {
    toast(`📲 ${fmt(amt)} → ${contact.name} — UPI app opened! (Logged as Pending) ⏳`, 'info');
  }, 500);
}

function sendUpiPayment(contactId) {
  const contact = (state.upiContacts || []).find(c => c.id === contactId);
  if (!contact) return;

  const amt = parseFloat(document.getElementById('qpAmt_' + contactId).value);
  const note = document.getElementById('qpNote_' + contactId).value.trim() || 'Transfer';
  const shouldLog = document.getElementById('qpLog_' + contactId).checked;

  if (!amt || amt <= 0) { toast('Pehle amount daalo! 💰', 'error'); return; }

  if (shouldLog) {
    document.getElementById('qpMineBalanceShow').innerText = fmt(getMyMoneyBalance());
    document.getElementById('qpFatherBalanceShow').innerText = fmt(getFatherMoneyBalance());
    openModal('qpSourceModal');

    document.getElementById('qpSelectMineBtn').onclick = function() {
      executeUpiPayment(contactId, amt, note, 'mine');
      closeModal('qpSourceModal');
    };
    document.getElementById('qpSelectFatherBtn').onclick = function() {
      executeUpiPayment(contactId, amt, note, 'father');
      closeModal('qpSourceModal');
    };
  } else {
    executeUpiPayment(contactId, amt, note, null);
  }
}

function completeUpiPayment(paymentId) {
  if (!state.upiPayments) return;
  const p = state.upiPayments.find(pay => pay.id === paymentId);
  if (!p || p.status !== 'pending') return;

  const amt = Number(p.amount);
  
  if (p.owner === 'mine') {
    const myBal = getMyMoneyBalance();
    if (myBal < amt) {
      toast(`❌ Tumhare paas sirf ${fmt(myBal)} hai — ${fmt(amt)} nahi bhej sakte!`, 'error');
      return;
    }

    const expenseId = uid();
    state.expenses.push({
      id: expenseId, amount: amt, category: 'UPI Transfer', owner: 'mine',
      date: today(), notes: `📲 UPI → ${p.contactName}: ${p.note || 'Transfer'}`,
      createdAt: new Date().toISOString()
    });
    p.expenseId = expenseId;
    state.currentBalance = (state.currentBalance || 0) - amt;
    state.balanceSet = true;
    logMyMoney('spend', amt, `📲 UPI → ${p.contactName}: ${p.note || 'Transfer'}`, today());

  } else if (p.owner === 'father') {
    const fBal = getFatherMoneyBalance();
    if (fBal < amt) {
      toast(`❌ Father ke paas sirf ${fmt(fBal)} hai — ${fmt(amt)} nahi nikal sakte!`, 'error');
      return;
    }

    const expenseId = uid();
    state.expenses.push({
      id: expenseId, amount: amt, category: 'UPI Transfer', owner: 'father',
      date: today(), notes: `👴 UPI → ${p.contactName}: ${p.note || 'Transfer'}`,
      createdAt: new Date().toISOString()
    });
    p.expenseId = expenseId;
    state.currentBalance = (state.currentBalance || 0) - amt;
    state.balanceSet = true;
    
    if (!state.fatherMoneyLog) state.fatherMoneyLog = [];
    state.fatherMoneyLog.unshift({
      id: 'fm_auto_upi_' + Date.now(),
      type: 'spend',
      amt: amt,
      desc: `UPI → ${p.contactName}: ${p.note || 'Transfer'}`,
      date: today(),
      createdAt: new Date().toISOString()
    });
  }

  p.status = 'completed';
  saveState();
  renderAll();
  renderMyMoneySection();
  renderFatherMoneySection();
  toast(`✅ Payment marked completed & deducted from ${p.owner === 'mine' ? 'My Money' : "Father's Money"}!`, 'success');
}

function deleteUpiPayment(paymentId) {
  if (!confirm('Are you sure you want to delete this UPI payment record?')) return;
  if (!state.upiPayments) return;
  const p = state.upiPayments.find(pay => pay.id === paymentId);
  if (!p) return;

  const amt = Number(p.amount);

  if (p.status === 'completed') {
    state.currentBalance = (state.currentBalance || 0) + amt;
    state.balanceSet = true;

    if (p.expenseId) {
      state.expenses = state.expenses.filter(e => e.id !== p.expenseId);
    }

    if (p.owner === 'mine') {
      logMyMoney('add', amt, `🗑️ UPI Deleted (Refund): ${p.contactName}`, today());
    } else if (p.owner === 'father') {
      if (!state.fatherMoneyLog) state.fatherMoneyLog = [];
      state.fatherMoneyLog.unshift({
        id: 'fm_auto_upi_del_' + Date.now(),
        type: 'add',
        amt: amt,
        desc: `🗑️ UPI Deleted (Refund): ${p.contactName}`,
        date: today(),
        createdAt: new Date().toISOString()
      });
      warnPapaChange('UPI payment deleted (refund)', amt);
    }
  }

  state.upiPayments = state.upiPayments.filter(pay => pay.id !== paymentId);

  saveState();
  renderAll();
  renderMyMoneySection();
  renderFatherMoneySection();
  toast('UPI Payment record deleted!', 'info');
}

function renderQuickPay() {
  const container = document.getElementById('qpContactCards');
  if (!container) return;

  if (!state.upiContacts || state.upiContacts.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📲</div><div class="empty-text">No contacts yet. Click "+ Add Contact" above!</div></div>';
    renderUpiHistory();
    return;
  }

  container.innerHTML = state.upiContacts.map(c => {
    const recentPay = (state.upiPayments || []).filter(p => p.contactId === c.id);
    const lastPay = recentPay.length > 0 ? recentPay[0] : null;
    const totalSent = recentPay.reduce((s, p) => s + Number(p.amount), 0);

    return `
    <div class="qp-card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:6px">
        <div class="qp-avatar">${c.emoji || '👤'}</div>
        <div>
          <div class="qp-name">${c.name}</div>
          <div class="qp-upi">${c.upiId}</div>
        </div>
      </div>
      ${lastPay ? `<div style="font-size:11px;color:var(--text-muted);margin-bottom:14px">Last: ${fmt(lastPay.amount)} on ${fmtDate(lastPay.date)} · Total sent: ${fmt(totalSent)}</div>` : '<div style="margin-bottom:14px"></div>'}

      <div class="qp-presets">
        ${[100, 200, 500, 1000, 2000, 5000].map(a =>
          `<button class="qp-preset" id="qpp_${c.id}_${a}" onclick="setQuickPayAmt('${c.id}',${a})">₹${a.toLocaleString('en-IN')}</button>`
        ).join('')}
      </div>

      <div class="form-group" style="margin-bottom:10px">
        <input type="number" class="form-control" id="qpAmt_${c.id}" placeholder="₹ Amount" min="1" style="font-size:16px;padding:12px;font-weight:700">
      </div>
      <div class="form-group" style="margin-bottom:10px">
        <input type="text" class="form-control" id="qpNote_${c.id}" placeholder="Note — e.g. Monthly pocket money">
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
        <input type="checkbox" id="qpLog_${c.id}" checked style="accent-color:var(--accent-teal);width:16px;height:16px">
        <label for="qpLog_${c.id}" style="font-size:12px;color:var(--text-muted);cursor:pointer">Auto-log as expense in Money Manager</label>
      </div>

      <button class="qp-send" onclick="sendUpiPayment('${c.id}')">
        📲 Pay ${c.name} via UPI
      </button>

      <div style="display:flex;gap:6px;margin-top:14px;justify-content:flex-end">
        <button class="btn btn-ghost btn-xs" onclick="openContactModal('${c.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-xs" onclick="deleteContact('${c.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');

  renderUpiHistory();
}

function renderUpiHistory() {
  const histDiv = document.getElementById('qpHistory');
  const emptyDiv = document.getElementById('qpHistEmpty');
  if (!histDiv) return;

  const payments = (state.upiPayments || []).slice(0, 15);
  if (payments.length === 0) {
    histDiv.innerHTML = '';
    if (emptyDiv) emptyDiv.style.display = '';
    return;
  }
  if (emptyDiv) emptyDiv.style.display = 'none';

  histDiv.innerHTML = payments.map(p => {
    let sourceBadge = '';
    let actionButtons = '';
    
    if (p.status === 'pending') {
      sourceBadge = `<span style="font-size:9px;padding:2px 6px;margin-left:6px;border-radius:4px;background:rgba(246,173,85,0.15);color:var(--accent-amber);border:1px solid rgba(246,173,85,0.3)">⏳ Pending (${p.owner === 'mine' ? 'Mine' : 'Father'})</span>`;
      actionButtons = `
        <div style="display:flex;gap:6px;margin-top:6px">
          <button class="btn btn-success btn-xs" onclick="completeUpiPayment('${p.id}')" style="padding:4px 8px;font-size:10.5px;border-radius:6px;font-weight:600">✅ Complete</button>
          <button class="btn btn-danger btn-xs" onclick="deleteUpiPayment('${p.id}')" style="padding:4px 8px;font-size:10.5px;border-radius:6px;font-weight:600">🗑️ Delete</button>
        </div>
      `;
    } else {
      const ownerLabel = p.owner === 'mine' ? 'Mine' : 'Father';
      const ownerColor = p.owner === 'mine' ? 'var(--accent-blue)' : 'var(--accent-purple)';
      const ownerBg = p.owner === 'mine' ? 'rgba(99,179,237,0.15)' : 'rgba(183,148,244,0.15)';
      const ownerBorder = p.owner === 'mine' ? 'rgba(99,179,237,0.3)' : 'rgba(183,148,244,0.3)';
      
      sourceBadge = `<span style="font-size:9px;padding:2px 6px;margin-left:6px;border-radius:4px;background:${ownerBg};color:${ownerColor};border:1px solid ${ownerBorder}">✅ ${ownerLabel}</span>`;
      actionButtons = `
        <div style="display:flex;gap:6px;margin-top:6px">
          <button class="btn btn-danger btn-xs" onclick="deleteUpiPayment('${p.id}')" style="padding:4px 8px;font-size:10.5px;border-radius:6px;font-weight:600">🗑️ Delete</button>
        </div>
      `;
    }
    
    return `
      <div class="qp-hist-item" style="display:flex;flex-direction:column;align-items:stretch;gap:8px;padding:12px;border-bottom:1px solid var(--border)">
        <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;background:rgba(56,217,169,0.12)">${p.contactEmoji || '📲'}</div>
            <div>
              <div style="font-size:13.5px;font-weight:600;display:flex;align-items:center;flex-wrap:wrap;gap:4px">
                → ${p.contactName} ${sourceBadge}
              </div>
              <div style="font-size:11px;color:var(--text-muted)">${fmtDate(p.date)}${p.note ? ' · ' + p.note : ''}</div>
            </div>
          </div>
          <div style="font-family:var(--font-mono);font-size:14px;font-weight:700;color:var(--accent-red);text-align:right">−${fmt(p.amount)}</div>
        </div>
        <div style="display:flex;justify-content:flex-end">
          ${actionButtons}
        </div>
      </div>
    `;
  }).join('');
}

/* =====================================================
   RENDER ALL
===================================================== */
function renderAll() {
  renderDashboard();
  renderIncomeSection();
  renderQuickPay();
  renderExpenseSection();
  renderPendingSection();
  renderHistory();
  renderGoals();
  renderBizSection();
  renderMyMoneySection();
}

/* =====================================================
   PWA SETUP
===================================================== */
let deferredInstallPrompt = null;

function initPWA() {
  // Inline manifest via Blob
  const manifest = {
    name: 'Money Manager',
    short_name: 'MoneyMgr',
    description: 'Personal Finance Dashboard',
    start_url: location.href,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#080c14',
    theme_color: '#63b3ed',
    icons: [
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230d1320'/%3E%3Crect width='100' height='100' rx='22' fill='url(%23g)'/%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%2338d9a9'/%3E%3Cstop offset='1' stop-color='%2363b3ed'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='50' y='72' text-anchor='middle' font-size='60' font-family='serif' fill='white'%3E%E2%82%B9%3C/text%3E%3C/svg%3E",
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ]
  };

  try {
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const url = URL.createObjectURL(blob);
    document.getElementById('pwa-manifest').href = url;
  } catch(e) {}

  // Service Worker (offline cache)
  if ('serviceWorker' in navigator) {
    const swCode = `
      const CACHE = 'moneymgr-v1';
      self.addEventListener('install', e => self.skipWaiting());
      self.addEventListener('activate', e => e.waitUntil(clients.claim()));
      self.addEventListener('fetch', e => {
        e.respondWith(
          caches.match(e.request).then(r => r || fetch(e.request).then(res => {
            if (res && res.status === 200 && e.request.method === 'GET') {
              const clone = res.clone();
              caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return res;
          }))
        );
      });
    `;
    try {
      const swBlob = new Blob([swCode], { type: 'application/javascript' });
      const swURL = URL.createObjectURL(swBlob);
      navigator.serviceWorker.register(swURL).catch(() => {});
    } catch(e) {}
  }

  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'flex';
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'none';
    toast('App installed! 🎉 Open from home screen', 'success');
  });
}

function installPWA() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(r => {
      if (r.outcome === 'accepted') toast('Installing... 🎉');
      deferredInstallPrompt = null;
      document.getElementById('installBtn').style.display = 'none';
    });
  } else {
    toast('Tap browser menu → "Add to Home Screen" / "Install App" 📲', 'info');
  }
}

/* =====================================================
   INIT
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
// Set today's date as default for date inputs
  const inputs = document.querySelectorAll('input[type="date"]');
  inputs.forEach(inp => { if (!inp.value) inp.value = today(); });

  loadState();
  renderAll();
  initPWA();

  // Real-time clock
  setInterval(() => {
    const el = document.getElementById('topbarRealTime');
    if(el) {
      const now = new Date();
      el.innerText = now.toLocaleString('en-IN', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
        hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
      });
    }
  }, 1000);

  // Initial section: dashboard
  showSection('dashboard');
});