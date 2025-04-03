let localArr = JSON.parse(localStorage.getItem("cartArray")) || [];
let checkoutBox = document.getElementById("checkout-box");
let totalAmount = 0;

function displayItem() {
    localArr = JSON.parse(localStorage.getItem("cartArray")) || [];
    checkoutBox.innerHTML = "";
    totalAmount = 0;

    if (localArr.length === 0) {
        checkoutBox.innerHTML = `
        <img src="./assets/images/empty-cart.png" alt="empty-cart image" width="100%">
        <p class='text-center'>Your cart is empty</p>`;
        document.getElementById("total").innerHTML = 0
        return;
    }
    let content = "";

    localArr.forEach((item, idx) => {
        let subTotal = item.quantity * item.price;
        totalAmount += subTotal;
        content += `
        <div class="text-end border-top">
            <button class="btn text-danger" onclick="removeItem(${idx})">
                <i class="ri-delete-bin-2-line"></i>
            </button>
        </div>
        <div class="d-flex gap-2 align-items-center">
            <div class="checkout-img border border-warning rounded">
                <img src="${item.image}" alt="${item.name}" width="100%" height="100%">
            </div>
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="text-uppercase fw-bold mb-0">${item.name}</h6>
                </div>
                <p class="m-0 very-fs-sm text-capitalize text-secondary">${item.discription}</p>
            </div>
        </div>
        <table class="w-100 mt-2 table-responsive table table-light mb-2 border-bottom table-striped table-hover">
            <thead>
                <tr class="border-bottom">
                    <td class="very-fs-sm text-capitalize border-end">quantity</td>
                    <td class="very-fs-sm text-capitalize text-center border-end">price</td>
                    <td class="very-fs-sm text-capitalize text-center">sub total</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-end">
                        <div class="d-flex gap-2 align-items-center">
                            <button class="quantity-btn rounded-circle" onclick="updateQuantity(${idx}, -1)">
                                <i class="ri-subtract-line"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn rounded-circle" onclick="updateQuantity(${idx}, 1)">
                                <i class="ri-add-line"></i>
                            </button>
                        </div>
                    </td>
                    <td class="text-center border-end fs-sm">${item.price}</td>
                    <td class="text-center fs-sm">${subTotal}</td>
                </tr>
            </tbody>
        </table>
        <hr>`;
    });

    checkoutBox.innerHTML = content;
    document.getElementById("total").innerHTML = `<i class="ri-money-rupee-circle-line"></i> ${totalAmount}`;
}

function updateQuantity(index, value) {
    localArr[index].quantity += value;
    if (localArr[index].quantity < 1) {
        removeItem(index);
    } else {
        saveCartArray();
    }
    displayItem();
}

function removeItem(index) {
    localArr.splice(index, 1);
    saveCartArray();
    displayItem();
    counter.innerHTML = localArr.length
}

// Function to store cartArray in localStorage
function saveCartArray() {
    localStorage.setItem("cartArray", JSON.stringify(localArr));
}

displayItem();
