let productArr = [{
    id: 1,
    name: "valeo",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/valeo_404525_clutch_set_clutch_pressure_plate_ford_figo_fiesta_ikon_1_4_ltr_diesel_.jpg",
    discription: "clutch set ford figo/fiesta/ikon 1.4ltr diesel",
    rating: 4,
    price: 6600
}, {
    id: 2,
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_f002h600368f8_brake_pad_front_swift_swift_dzire_ritz_diesel_.jpg",
    discription: "brake pad front swift/swift dzire/ ritz diesel",
    rating: 4,
    price: 1000
}, {
    id: 3,
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_0986ab70048f8_brake_fluid_dot_3_500_ml_.jpg",
    discription: "brake fluid DOT 3 (500ml)",
    rating: 3.5,
    price: 500
}, {
    id: 4,
    name: "autogold",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/autogold_tail_light_lamp_assembly_scorpio_type_3_s2_s4_s8_s10_white_left_.jpg",
    discription: "tail light lamp assembly scorpio type 3/s2/s4/s8/s10 (white)",
    rating: 4.5,
    price: 2500
}, {
    id: 5,
    name: "far",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/far_vision_side_door_mirror_etios_etios_liva_manual_type_2_left_.jpg",
    discription: "vision side door mirror etios/ etios liva (manual)",
    rating: 4,
    price: 1850
}, {
    id: 6,
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_0986ab8127e7a_wheel_cylinder_assembly_hyundai_i10_lhs_.jpg",
    discription: "wheel cylinder assembly hyundai i10 LHS",
    rating: 5,
    price: 3000
}, {
    id: 7,
    name: "valeo",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/250x/17f82f742ffe127f42dca9de82fb58b1/i/m/valeo_049111_head_light_lamp_assembly_nissan_sunny_type_1_right.jpg",
    discription: "head light lamp assembly nissan sunny",
    rating: 4,
    price: 5000
}, {
    id: 8,
    name: "spenz",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/16-288x288.jpg",
    discription: "car seat cushion car decor",
    rating: 4,
    price: 12000
}, {
    id: 9,
    name: "sonic",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/30-800x800.jpg",
    discription: "car pump washing machine",
    rating: 3.5,
    price: 2000
}, {
    id: 10,
    name: "audi",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/11-288x288.jpg",
    discription: "steering wheel",
    rating: 5,
    price: 15000
}, {
    id: 11,
    name: "DC",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/27-288x288.jpg",
    discription: "car disc brake",
    rating: 4.5,
    price: 7500
}, {
    id: 12,
    name: "toyota",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/19-288x288.jpg",
    discription: "engine assembly 1.4ltr diesel",
    rating: 5,
    price: 30000
},]

let productContainer = document.getElementById("car-parts")
let cartArr = JSON.parse(localStorage.getItem("cartArray")) || [];
let counter = document.getElementById("item-counter")

counter.innerHTML = cartArr.length
function addToCart(productID) {
    cartArr = JSON.parse(localStorage.getItem("cartArray")) || [];
    let item = productArr.find((obj) => { return obj.id == productID });
    let itemIndex = cartArr.findIndex((obj) => { return obj.id == productID });
    if (itemIndex != -1) {
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "warning",
            title: "Item already added to cart.",
            showConfirmButton: false,
            timer: 1500
        });
    } else {

        item.quantity = 1;
        cartArr.push(item);
        // Show success alert
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: "Item added to cart.",
            showConfirmButton: false,
            timer: 1500
        });
        localStorage.setItem("cartArray", JSON.stringify(cartArr));
        counter.innerHTML = cartArr.length;
    }

    displayItem();
}


function getStars(num) {
    let starString = "";
    let i = 0;

    for (i = 1; i <= num; i++) {
        starString += `<i class="ri-star-s-fill"></i>`;
    }

    if (num - (i - 1) > 0) {
        starString += `<i class="ri-star-half-line"></i>`;
    }

    return starString;
}

function buyNow(productID) {
    addToCart(productID)
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
    offcanvas.show();
}

productArr.forEach((product, idx) => {
    productContainer.innerHTML += `
    <div class="col-lg-3 col-md-6">
        <div class="border border-2 shadow-sm p-3 card">
            <div>
                <img src="${product.image}" alt="${product.name}" width="100%" class="" loading="lazy">
            </div>
            <h6 class="text-uppercase fw-semibold my-1">${product.name}</h6>
            <p class="mb-1 fs-sm text-capitalize text-secondary">${product.discription}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="text-warning d-block">
                    ${getStars(product.rating)}
                </span>
                <p class="m-0 fs-5">
                    <i class="ri-money-rupee-circle-line"></i>
                    <span>
                        ${product.price}
                    </span>
                </p>
            </div>
            <div class="mt-3 text-md-start text-center">
                <button class="btn border text-capitalize fs-sm buy-now" onclick="buyNow(${product.id})">buy now</button>
                <button class="btn border text-capitalize fs-sm to-cart" onclick="addToCart(${product.id})">add to cart</button>
            </div>
        </div>
    </div>`
})
