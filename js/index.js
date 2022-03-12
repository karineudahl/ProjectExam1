const sliders = document.querySelector(".carouselbox"); 
const buttonLeft = document.querySelector(".switchLeft");
const buttonRight = document.querySelector(".switchRight");
const latestBlogposts = "https://student-noroff.store/project-exam-1/wp-json/wp/v2/posts";

async function carouselHomepage() {
    try {
        const response = await fetch(latestBlogposts);
        const result = await response.json(); 

        for(let i = 0; i < result.length; i++) {
            sliders.innerHTML += 
                    `<div class="carouselbox-content">
                        <a href="recipes-spesific.html?id=${result[i].id}">
                            <img src="${result[i].better_featured_image.source_url}" alt="${result[i].title.rendered}">
                            <h2>${result[i].title.rendered}</h2>
                        </a>
                    </div>`;
        }        
}
    catch(error) {
        sliders.innerHTML = "An error has occured";
    }
}

carouselHomepage();

let scrollPerClick = document.querySelector(".carouselbox").clientWidth; 
let scrollAmount = 0; 

buttonLeft.onclick = function () {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}

buttonRight.onclick = function() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        }); 
    }
}