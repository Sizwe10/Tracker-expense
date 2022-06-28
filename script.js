var state = {
    balance: 1000,
    income: 400,
    expense: 100,
    transaction: [
                {name: 'Salary', amount: 1000, type: 'income' },
                {name: 'Buy Grocery', amount: 50, type: 'expense' },
                {name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}
 var balanceEL = document.querySelector('#balance');
 var incomeEL = document.querySelector('#income');
 var expenseEL = document.querySelector('#expense');
 var transactionEL = document.querySelector('#transaction');
 var incomeBtnEL = document.querySelector('#incomeBtn');
 var expenseBtnEL = document.querySelector('#expenseBtn');
 var nameInputEL = document.querySelector('#name');
 var amountInputEL = document.querySelector('#amount')
 
function init() {
    updateState();
    initListeners();
    render();
}

function initListeners() {
  incomeBtnEL.addEventListener('click', onAddIncomeClick);
  expenseBtnEL.addEventListener('click', onAddExpenseClick);
}

function onAddIncomeClick() {
  console.log('income ', nameInputEL.value, amountInputEL.value);
  var transaction = {
    name: nameInputEL.value, 
    amount: parseInt(amountInputEL.value), type: 'income'}
}

function onAddExpenseClick() {
  console.log('expense');
}

function updateState() {
  var balance = 0,
      income = 0,
      expense = 0,
      item;

  for (var i = 0; i <state.transaction.length; i++) {
       item = state.transaction[i];

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
            
                for (var i = 0; i < state.transaction.length; i++){
                            item =state.transaction[i];
                            transactionEL = document.createElement('li');  
                            transactionEL.append(item.name);
                            
                            transactionEL.appendChild(transactionEL);
            
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
                            ntmEL.innerHTML = 'X';
            
                            containerEL.appendChild(btnEL);
            
                            transactionEL.appendChild(containerEL);
                }
}
  init();