const productContainer = document.querySelector(".recipes-container"); 
const moreButton = document.querySelector(".more-button");
const searchBar = document.querySelector("#searchBar");
const url = "https://student-noroff.store/project-exam-1/wp-json/wp/v2/posts?per_page=100"; 

let products = [];

async function getRecipes() {
    try {
        const response = await fetch(url);
        products = await response.json();

        productContainer.innerHTML = "";
        addMore(products);       
    }

    catch(error) {
        productContainer.innerHTML = "An error has occured";
    }
}

getRecipes(); 

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredRecipes = products.filter( (recipes) => {
        return (
            recipes.title.rendered.toLowerCase().includes(searchString)
        );
    });

    moreButton.remove();
    productContainer.innerHTML = "";
    searchField(filteredRecipes);
})

function searchField(products) {
    for(let i = 0; i < products.length; i++) {
        productContainer.innerHTML += 
                `<div class="recipes-content">
                    <a href="recipes-spesific.html?id=${products[i].id}">
                        <img src="${products[i].better_featured_image.source_url}" alt="${products[i].title.rendered}">
                        <h2>${products[i].title.rendered}</h2>
                    </a>
                </div>`;
    }
}

function addMore(products) {
    for(let i = 0; i < 10; i++) {
        productContainer.innerHTML += 
                `<div class="recipes-content">
                    <a href="recipes-spesific.html?id=${products[i].id}">
                        <img src="${products[i].better_featured_image.source_url}" alt="${products[i].title.rendered}">
                        <h2>${products[i].title.rendered}</h2>
                    </a>
                </div>`;
    }
    let currentItems = 10;

    moreButton.addEventListener("click", (e) => {
        for(let i = currentItems; i < products.length; i++) {

            productContainer.innerHTML += 
                `<div class="recipes-content">
                    <a href="recipes-spesific.html?id=${products[i].id}">
                        <img src="${products[i].better_featured_image.source_url}" alt="${products[i].title.rendered}">
                        <h2>${products[i].title.rendered}</h2>
                    </a>
                </div>`;
            
            currentItems += 10;

            moreButton.disable = false;
            moreButton.classList.add("disableButton")
        }
    })
}