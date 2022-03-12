const recipesMenu = document.querySelector(".recipes-menu");
const recipesHeading = document.querySelector("#recipes-spesific-h1"); 
const recipesImg = document.querySelector(".btn");
const recipesText = document.querySelector("#recipes-spesific-text"); 
const recipesPopupPicture = document.querySelector(".modal-body");

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = "https://student-noroff.store/project-exam-1/wp-json/wp/v2/posts/" + id;

async function detailsRecipe() {
    try {
        const response = await fetch(url);
        const details = await response.json(); 

        createMenu(details);

        recipesHeading.innerHTML = `<h1 class="recipes-spesific-h1">${details.title.rendered}</h1>`;
        recipesImg.innerHTML = `<div class="btn" style="background-image: url('${details.better_featured_image.source_url}')"></div>`;
        recipesText.innerHTML = `<p class="recipes-spesific-text">${details.content.rendered}</p>`;
        recipesPopupPicture.innerHTML = `<img src="${details.better_featured_image.source_url}" alt="${details.title.rendered}">`;

        document.title += ` ${details.title.rendered}`;
    }

    catch(error) {
        recipesText.innerHTML = "An error has occured"; 
    }
}

detailsRecipe();

function createMenu(details) {
    recipesMenu.innerHTML = 
        `<nav class="whereAmIContainer">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="recipes.html"><i class="fas fa-chevron-right"></i> Recipes</a></li>
                <li><a class="whereAmINow"><i class="fas fa-chevron-right"></i> ${details.title.rendered}</a></li>
            </ul>
        </nav>`
};      