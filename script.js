var state = {
    balance: 1000,
    income: 400,
    expense: 100,
    transacrtion: [
                {name: 'Salary', amount: 1000, type: 'income'},
                {name: 'Buy Grocery', amount: 500, type: 'expense'},
                {name: 'Buy Guitar', amount: 500, type: 'expense'}
    ]
}
 var balanceEL = document.querySelector('#balance');
 var incomeEL = document.querySelector('#income');
 var expenseEL = document.querySelector('#expense');
 var transactionEL = document.querySelector('#transaction');

function init() {
    updateState();
    render();
}

function updateState() {
  var balance = 0,
      income = 0,
      expense = 0,
      item;

  for (var i = 0; i < state.transaction.lengthl; i++) {
       item = state.transacrtion[i];

       if (item.type === 'income') {
           income += item.amount;
       }else if (item.type === 'expense') {
          expense += item.amount;
       }
  }

  console.log(balance, income, expense);
}

function render() {
                balanceEL.innerHTML = `$${state.balance}`;
                incomeEL.innerHTML = `$${state.income}`;
                expenseEL.innerHTML = `$${state.expense}`;
            
                var transactionEL, containerEL, amountEL, item;
            
                for (var i= 0; i < state.transaction.length; i++){
                            item =state.transaction[i];
                            transactionEL = document.createElement('li')  
                            transactionEL.append(state.item.name);
                            
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