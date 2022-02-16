document.getElementById('calc-button').addEventListener('click', function () {
    // Getting Income Input.
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);

    // Getting Food cost.
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);

    // Getting Rent Cost.
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);


    // Getting Clothes Cost.
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);


    // Getting and Calculating Total Cost.
    const totalCost = document.getElementById('total-expenses');
    const totalCostAmount = foodCost + rentCost + clothesCost;
    totalCost.innerText = totalCostAmount;

    // Getting balance and Calculating Total balance.
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = incomeAmount - totalCostAmount;
    totalBalance.innerText = totalBalanceAmount;

});
document.getElementById('save-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    // Getting Saving percentage.
    const savingPercentageInput = document.getElementById('save-input');
    const savingPercentageAmount = parseFloat(savingPercentageInput.value);
    console.log(savingPercentageAmount);
    // Getting and Calculating saving Amount.
    const savingAmount = document.getElementById('saving-amount');
    const totalSavingAmount = (incomeAmount * savingPercentageAmount) / 100;
    savingAmount.innerText = totalSavingAmount;
    // Getting and Calculating Remaining Amount.
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);

    const totalCost = document.getElementById('total-expenses');
    const totalCostAmount = foodCost + rentCost + clothesCost;
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = incomeAmount - totalCostAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    const totalRemainingBalance = totalBalanceAmount - totalSavingAmount;
    remainingBalance.innerText = totalRemainingBalance;

})