let products = [{
    id: 1,
    name: 'headphone',
    price: 100,
    category: 'electronics',
    image: 'https://img.freepik.com/free-photo/headphones-hanged-tree_23-2148523940.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}, {
    id: 2,
    name: 'laptop',
    price: 500,
    category: 'electronics',
    image: 'https://img.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table-workspace-concept_53876-24817.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}, {
    id: 3,
    name: 'phone',
    price: 200,
    category: 'electronics',
    image: 'https://img.freepik.com/free-photo/person-s-hand-holding-mobile-phone-showing-white-blank-screen-display-outdoors_23-2148041403.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}, {
    id: 4,
    name: 'shirt',
    price: 20,
    category: 'clothing',
    image: 'https://img.freepik.com/free-photo/cheerful-caucasian-guy-going-vacation-wearing-summer-shirt-smiling-standing-blue-backgroun_1258-164164.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}, {
    id: 5,
    name: 'pants',
    price: 30,
    category: 'clothing',
    image: 'https://img.freepik.com/free-photo/close-up-friends-legs_23-2148576849.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}, {
    id: 6,
    name: 'bulb',
    price: 5,
    category: 'electronics',
    image: 'https://img.freepik.com/free-photo/edison-light-bulb-gray-background_53876-105926.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740',
}];


let productContainer = document.getElementById("cards-grid");

function displayProducts(products) {
    productContainer.innerHTML = ""
    products.forEach((product) => {
        productContainer.innerHTML += `
        <div class="card-modern">
            <div class="card-image" id="card-image" style="background-image: url(${product.image});">
            </div>
            <div class="card-body">
                <h3 class="card-title" id="">${product.name}</h3>
                <div class="card-price">$${product.price}</div>
                <p class="card-description">High-quality sound with noise cancellation. Experience studio-grade
                    audio with ultimate comfort.</p>
                <div class="card-footer">
                    <div class="card-rating">★★★★★ 4.9</div>
                    <button class="card-btn">Add to Cart</button>
                </div>
            </div>
        </div>
        `
    })
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
        const filterCategory = this.getAttribute('data-filter');
        let filteredProducts = products;
        if (filterCategory !== 'all') {
            filteredProducts = products.filter((product) => {
                return product.category === filterCategory;
            });
        }
        console.log(filteredProducts, filterCategory);
        displayProducts(filteredProducts);
    });
});

displayProducts(products)