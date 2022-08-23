//select the deposit button Id and go to input field Id
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputGo = document.getElementById('deposit-input-field');
    const inputGetString = inputGo.value;
    const inputGet = parseFloat(inputGetString);
    // remove deposit amount
    inputGo.value = '';

    // go to heading deposit-amount
    const headingGo = document.getElementById('deposit-amount');
    const headingGetString = headingGo.innerText;
    const headingGet = parseFloat(headingGetString);

    // sum inputGet and headingGet
    const currentDepositAmount = inputGet + headingGet;
    headingGo.innerText = currentDepositAmount;

    // go to balance acount
    const balanceGo = document.getElementById('balance-amount');
    const balanceString = balanceGo.innerText;
    const balanceGet = parseFloat(balanceString);

    // sum balance and inputGet
    const balanceTotal = balanceGet + inputGet;
    balanceGo.innerText = balanceTotal;

})

//select the withdraw button Id and go to input field Id
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputGo1 = document.getElementById('withdraw-input-field');
    const inputGetString1 = inputGo1.value;
    const inputGet1 = parseFloat(inputGetString1);

    // go to withdraw amount
    const withdrawId = document.getElementById('withdraw-amount');
    const withdrawIdValue = withdrawId.innerText;
    const withdrawConvert = parseFloat(withdrawIdValue);
    withdrawId.innerText = inputGet1;
    // remove deposit amount
    inputGo1.value = '';

    // sum current-withdraw and previous-withdraw
    const withdrawTotal = withdrawConvert + inputGet1;
    withdrawId.innerText = withdrawTotal;

    // go to balance amount
    const balanceGo = document.getElementById('balance-amount');
    const balanceString = balanceGo.innerText;
    const balanceGet = parseFloat(balanceString);

    // substraction balance amount and withdraw amount
    const balanceTotal = balanceGet - inputGet1;
    balanceGo.innerText = balanceTotal;
})