function productInfo(product, price, isIncreasing) {
    const quantity = document.getElementById(product + '-quantity');
    if(isIncreasing) {
        quantity.value++
    }
    else if (quantity.value > 0){
        quantity.value-- 
    }
    const quantityValue = quantity.value;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = quantityValue * price;

    calculation(10);
}
// get phone or case price
function getprodunctPrice(product) {
    const productPrice = document.getElementById(product + '-price');
    const productPriceValue = productPrice.innerText;
    return parseInt(productPriceValue);
}
// set in html 
function calculation(taxRate) {
    const subTotal = getprodunctPrice('phone') + getprodunctPrice('case');
    document.getElementById('sub-total').innerText = subTotal;
    const tax = subTotal / taxRate;
    document.getElementById('tax').innerText = tax;
    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}
// for phone 
document.getElementById('phone-plus').addEventListener('click', function() {
    productInfo('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    productInfo('phone', 1219, false);
});

// for case 
document.getElementById('case-plus').addEventListener('click', function() {
    productInfo('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {
    productInfo('case', 59, false);
});