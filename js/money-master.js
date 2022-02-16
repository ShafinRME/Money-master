document.getElementById('calc-button').addEventListener('click', function () {
    // Getting Income Input.
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    incomeInput.value = '';
    // Getting Food cost.
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    foodInput.value = '';
    // Getting Rent Cost.
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    rentInput.value = '';

    // Getting Clothes Cost.
    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = parseFloat(clothesInput.value);
    clothesInput.value = '';

})