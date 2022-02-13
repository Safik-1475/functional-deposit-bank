/* document.getElementById('deposit-btn').addEventListener('click', function () {
    // get user input value 
    const userInput = document.getElementById('deposit');

    const userInputValue = userInput.value;

    // added new deposit balance
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.innerText;
    depositAmount.innerText = userInputValue;
    //console.log(depositAmountValue)


    // clear inputField
    userInput.value = '';

})*/


// Selector button  handler

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputNum = parseFloat(depositInputText)

    // Set Deposit Amount 
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountText = depositAmount.innerText;
    const prevDepositAmount = parseFloat(depositAmountText)
    depositAmount.innerText = prevDepositAmount + depositInputNum;

    // updates balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNum = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceNum + depositInputNum;


    // clear input field
    depositInput.value = '';

});

// withdraw deposit
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get input withdraw value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputVal = parseFloat(withdrawInputText);

    // get withdraw balance 
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceText = withdrawBalance.innerText;
    const prevWithdrawBalance = parseFloat(withdrawBalanceText);
    withdrawBalance.innerText = prevWithdrawBalance + withdrawInputVal;




    //update balance after withdraw
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceVal = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceVal - withdrawInputVal;


    // withdraw input field clear
    withdrawInput.value = '';
})
