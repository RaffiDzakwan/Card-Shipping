let priceElem = document.getElementById('price');
let subTotalElem = document.getElementById('subTotal');
let shippingElem = document.getElementById('shipping');
let discountElem = document.getElementById('discount');
let totalElem = document.getElementById('total');
let quantityElem = document.getElementById('quantity');
let textVoucherElem = document.getElementById('textVoucher');
let codeVoucherElem = document.getElementById('codeVoucher');

// document.getElementById('subTotal').innerHTML = 10000;
subTotalElem.innerHTML = priceElem.innerHTML;

function totalAll(subTotal, shipping = 0, discount = 0) {
    return Number(subTotal) + Number(shipping) - Number(discount);
}
// console.log(totalAll(10000, 2000, 5000));
totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);

let tambah = (num) => {
    let number = parseFloat(quantityElem.value);
    number += num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil

    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

let kurang = (num) => {
    let number = parseFloat(quantityElem.value);
    number -= num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil

    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}


function bttnvoucher() {
    let inputVoucher = codeVoucherElem.value;
    // console.log(inputVoucher);
     if (inputVoucher === "abudzar"){
        textVoucherElem.innerHTML = "Voucher Berhasil";
        textVoucherElem.classList.remove("applied", "reject");
        textVoucherElem.classList.add("success");
        
        discountElem.innerHTML = 10000
    } else if (inputVoucher === "fulan"){
        
        discountElem.innerHTML = 1000
    } else{
        textVoucherElem.innerHTML = "Gagal Memasukkan Voucher!";
        textVoucherElem.classList.remove("success");
        textVoucherElem.classList.add("reject", "success");
        textVoucherElem.classList.remove("applied");
        
        
        discountElem.innerHTML = 0
    } 
    
}
