var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transacrtion: [
                {name: 'Salary', amount: 5000, type: income},
                {name: 'Buy Grocery', amount: 500, type: expense},
                {name: 'Buy Guitar', amount: 500, type: expense}
    ]
}
 var balanceEL = document.querySelector('#balance');
 var incomeEL = document.querySelector('#income');
 var expenseEL = document.querySelector('#expense');
 var transactionEL = document.querySelector('#transaction');

function init() {
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
    }
}
  init();