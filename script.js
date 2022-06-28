var state = {
    balance: 1000,
    income: 400,
    expense: 100,
    transactions: [
                { id: uniqueId(), name: 'Salary', amount: 1000, type: 'income' },
                { id:uniqueId(), name: 'Buy Grocery', amount: 50, type: 'expense' },
                { id:uniqueId(), name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}
 var balanceEL = document.querySelector('#balance');
 var incomeEL = document.querySelector('#income');
 var expenseEL = document.querySelector('#expense');
 var transactionsEL = document.querySelector('#transaction');
 var incomeBtnEL = document.querySelector('#incomeBtn');
 var expenseBtnEL = document.querySelector('#expenseBtn');
 var nameInputEL = document.querySelector('#name');
 var amountInputEL = document.querySelector('#amount')
 
function init() {
    updateState();
    initListeners();
    render();
}

function uniqueId() {
  return Math.round(Math.random() * 1000000);
}

function initListeners() {
  incomeBtnEL.addEventListener('click', onAddIncomeClick);
  expenseBtnEL.addEventListener('click', onAddExpenseClick);
}

// DRY - Do not repeat yourself//

function onAddIncomeClick() {
  addTransaction(nameInputEL.value, amountInputEL.value);
}

function addTransaction(name, amount, type) {
  if (name !== '' && amount !== '') {
    var transaction = {
      name: name,
      amount: parseInt(amount), 
      type: type
    };

      state.transactions.push(transaction);

      updateState();
  } else {
       alert('Please enter valid data');
  }

  nameInputEL.value = '';
  amountInputEL.value = '';
}

function onAddExpenseClick() {
 addTransaction(nameInputEL.value, amountInputEL.value, 'expense');
}

function onDeleteaClick(event) {
  var id = event.target.getAttribute('data-id');
  var deleteIndex;
  for(var i = 0; i < state.transactions.length; i++) {
    if (state.transactions[i].id === id) {
        deleteIndex = i;
        break;
    }
  }

  state.transactions.splice(deleteIndex, 1);

  updateState();
}

function updateState() {
  var balance = 0,
      income = 0,
      expense = 0,
      item;

  for (var i = 0; i <state.transactions.length; i++) {
       item = state.transactions[i];

       if (item.type === 'income') {
           income += item.amount;
       }else if (item.type === 'expense') {
          expense += item.amount;
       }
  }

  balance = income - expense;

  state.balance = balance;
  state.income = income;
  state.expense = expense;
}

function render() {
                balanceEL.innerHTML = `$${state.balance}`;
                incomeEL.innerHTML = `$${state.income}`;
                expenseEL.innerHTML = `$${state.expense}`;
            
                var transactionEL, containerEL, amountEL, item, btnEL;

                transactionsEL.innerHTML = '';
            
                for (var i = 0; i < state.transactions.length; i++){
                            item =state.transactions[i];
                            transactionEL = document.createElement('li');  
                            transactionEL.append(item.name);
                            
                            transactionsEL.appendChild(transactionEL);
            
                            containerEL = document.createElement('div');
                            amountEL = document.createElement('span');
                            if (item.type === 'income') {
                              amountEL.classList.add('income-amt');
                            }else  if (item.type === 'expense') {
                            amountEL.classList.add('expense-amt');
                            }
                            amountEL.innerHTML = `$${item.amount}`;
            
                            containerEL.appendChild(amountEL);
            
                            btnEL = document.createElement('button');
                            btnEL.setAttribute('data-id', item.id);
                            btnEL.innerHTML = 'X';

                            btnEL.addEventListener('click', onDeleteaClick);
            
                            containerEL.appendChild(btnEL);
            
                            transactionEL.appendChild(containerEL);
                }
}
  init();