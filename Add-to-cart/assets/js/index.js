let productArr = [{
    name: "valeo",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/valeo_404525_clutch_set_clutch_pressure_plate_ford_figo_fiesta_ikon_1_4_ltr_diesel_.jpg",
    discription: "clutch set ford figo/fiesta/ikon 1.4ltr diesel",
    rating: 4,
    price: 6600
}, {
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_f002h600368f8_brake_pad_front_swift_swift_dzire_ritz_diesel_.jpg",
    discription: "brake pad front swift/swift dzire/ ritz diesel",
    rating: 4,
    price: 1000
}, {
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_0986ab70048f8_brake_fluid_dot_3_500_ml_.jpg",
    discription: "brake fluid DOT 3 (500ml)",
    rating: 3.5,
    price: 500
}, {
    name: "autogold",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/autogold_tail_light_lamp_assembly_scorpio_type_3_s2_s4_s8_s10_white_left_.jpg",
    discription: "tail light lamp assembly scorpio type 3/s2/s4/s8/s10 (white)",
    rating: 4.5,
    price: 2500
}, {
    name: "far",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/far_vision_side_door_mirror_etios_etios_liva_manual_type_2_left_.jpg",
    discription: "vision side door mirror etios/ etios liva (manual)",
    rating: 4,
    price: 1850
}, {
    name: "bosch",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/i/m/bosch_0986ab8127e7a_wheel_cylinder_assembly_hyundai_i10_lhs_.jpg",
    discription: "wheel cylinder assembly hyundai i10 LHS",
    rating: 5,
    price: 3000
}, {
    name: "valeo",
    image: "https://www.partsbigboss.in/media/catalog/product/cache/1/small_image/250x/17f82f742ffe127f42dca9de82fb58b1/i/m/valeo_049111_head_light_lamp_assembly_nissan_sunny_type_1_right.jpg",
    discription: "head light lamp assembly nissan sunny",
    rating: 4,
    price: 5000
}, {
    name: "spenz",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/16-288x288.jpg",
    discription: "car seat cushion car decor",
    rating: 4,
    price: 12000
}, {
    name: "sonic",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/30-800x800.jpg",
    discription: "car pump washing machine",
    rating: 3.5,
    price: 2000
}, {
    name: "audi",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/11-288x288.jpg",
    discription: "steering wheel",
    rating: 5,
    price: 15000
}, {
    name: "DC",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/27-288x288.jpg",
    discription: "car disc brake",
    rating: 4.5,
    price: 7500
}, {
    name: "toyota",
    image: "https://opencart.dostguru.com/AS01/autospeed_02/image/cache/catalog/product/19-288x288.jpg",
    discription: "engine assembly 1.4ltr diesel",
    rating: 5,
    price: 30000
},]

let productContainer = document.getElementById("car-parts")

productArr.forEach((product, idx) => {
    productContainer.innerHTML += `
    <div class="col-lg-3 col-md-6">
        <div class="border shadow-sm p-3 card">
            <div>
                <img src="${product.image}" alt="${product.name}" width="100%" class="">
            </div>
            <h6 class="text-uppercase fw-semibold my-1">${product.name}</h6>
            <p class="mb-1 fs-sm text-capitalize text-secondary">${product.discription}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="text-warning d-block">
                     <i class="ri-star-s-fill"></i>
                     <i class="ri-star-s-fill"></i>
                     <i class="ri-star-s-fill"></i>
                     <i class="ri-star-s-fill"></i>
                     <i class="ri-star-s-line"></i>
                </span>
                <p class="m-0 fs-5">
                    <i class="ri-money-rupee-circle-line"></i>
                    <span>
                        ${product.price}
                    </span>
                </p>
            </div>
            <div class="mt-3 text-md-start text-center">
                <button class="btn border text-capitalize fs-sm" id="buy-now">buy now</button>
                <button class="btn border text-capitalize fs-sm" id="to-cart">add to cart</button>
            </div>
        </div>
    </div>`
})
