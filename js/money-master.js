function gettingInput(inputId) {
    const givingInput = document.getElementById(inputId);
    const givingAmount = parseFloat(givingInput.value);
    return givingAmount;
};
function totallCost(costId) {
    const expenseInput = document.getElementById(costId);
    const expenseCost = parseFloat(expenseInput.value);
    return expenseCost;
};

document.getElementById('calc-button').addEventListener('click', function () {
    // Getting Income Input.
    const incomeAmount = gettingInput('income-input');

    // Getting Food cost.
    const foodCost = totallCost('food-input');

    // Getting Rent Cost.
    const rentCost = totallCost('rent-input');


    // Getting Clothes Cost.
    const clothesCost = totallCost('clothes-input');

    //Getting and Calculating Total Cost.
    const totalCost = document.getElementById('total-expenses');
    const errorMssg1 = document.getElementById('number-error');
    const errorMssg2 = document.getElementById('error-message')
    const errorMssg3 = document.getElementById('more-expense');
    if ((isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) || (foodCost < 0 || rentCost < 0 || clothesCost < 0 || incomeAmount < 0)) {
        errorMssg1.style.display = 'block';
        errorMssg2.style.display = 'none';
        errorMssg3.style.display = 'none';
    }
    else {
        errorMssg1.style.display = 'none';
        const totalCostAmount = foodCost + rentCost + clothesCost;
        const errorMssg3 = document.getElementById('more-expense');
        if (totalCostAmount > incomeAmount) {
            errorMssg1.style.display = 'none';
            errorMssg2.style.display = 'none';
            errorMssg3.style.display = 'block';

        }
        else {
            // Getting balance and Calculating Total balance.
            totalCost.innerText = totalCostAmount;
            const totalBalance = document.getElementById('total-balance');
            const totalBalanceAmount = incomeAmount - totalCostAmount;
            totalBalance.innerText = totalBalanceAmount;

            errorMssg3.style.display = 'none';

        }


    }

});
document.getElementById('save-button').addEventListener('click', function () {
    const incomeAmount = gettingInput('income-input');
    const foodCost = totallCost('food-input');
    const rentCost = totallCost('rent-input');
    const clothesCost = totallCost('clothes-input');
    // Getting Saving percentage.
    const savingPercentageAmount = gettingInput('save-input');
    // Getting and Calculating saving Amount.
    const savingAmount = document.getElementById('saving-amount');
    const totalSavingAmount = (incomeAmount * savingPercentageAmount) / 100;
    const totalCostAmount = foodCost + rentCost + clothesCost;
    const totalBalanceAmount = incomeAmount - totalCostAmount;
    const errorMssg1 = document.getElementById('number-error');
    const errorMssg2 = document.getElementById('error-message')
    const errorMssg3 = document.getElementById('more-expense');
    if (totalSavingAmount > totalBalanceAmount) {
        errorMssg1.style.display = 'none';
        errorMssg2.style.display = 'block';
        errorMssg3.style.display = 'none';

    }
    else {
        savingAmount.innerText = totalSavingAmount;

        const foodCost = totallCost('food-input');
        const rentCost = totallCost('rent-input');
        const clothesCost = totallCost('clothes-input');
        //Calculating Total balance.
        const totalCost = document.getElementById('total-expenses');
        const totalCostAmount = foodCost + rentCost + clothesCost;
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceAmount = incomeAmount - totalCostAmount;
        // Calculating Remaining Balance.
        const remainingBalance = document.getElementById('remaining-balance');
        const totalRemainingBalance = totalBalanceAmount - totalSavingAmount;
        remainingBalance.innerText = totalRemainingBalance;
        errorMssg2.style.display = 'none';
    }
});