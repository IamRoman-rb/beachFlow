const burguerMenu = document.querySelector(".burguer-menu");
const cancelButton = document.querySelector(".cancel-button");
const links = document.querySelector("#links");

burguerMenu.addEventListener("click", e => {
    links.classList.add("active")
})
cancelButton.addEventListener("click", e => {
    links.classList.remove("active")
})

const inputs = document.querySelectorAll(".input-float");
const p = document.querySelectorAll(".placeholder");
const button = document.querySelector("#button");

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        const target = e.target;
        const value = target.value;
        const label = target.parentElement;
        if (value.length > 0 ) {
            label.classList.add("complete");
        }else{
            label.classList.remove("complete")
        }
    })
    input.addEventListener("focus", (e) => {
        const target = e.target;
        const value = target.value;
        const label = target.parentElement;
        if (value.length > 0) {
            label.classList.add("complete")
        }
    })
})

const inputPassword = Array.from(document.querySelectorAll(".password"));
const btnEye = Array.from(document.querySelectorAll(".btn-eye"));

btnEye.forEach((btn, index) => btn.addEventListener("click", e => {
    e.preventDefault();
    inputPassword[index].getAttribute("type") == "password" ? inputPassword[index].setAttribute("type", "text") : inputPassword[index].setAttribute("type", "password")
}))

const li = document.querySelectorAll(".li");

function activeLink(){
    li.forEach((item) => 
    item.classList.remove("selected"));
    this.classList.add("selected");
} 
li.forEach((item) => 
    item.addEventListener("click", activeLink)
)

window.addEventListener("scroll", e => {
    const scroll = document.scrollingElement.scrollTop;
    const header = document.querySelector(".header");
    if (scroll >= 500) {
        header.classList.add("headerSolid")
    }
    else{
        header.classList.remove("headerSolid");
    }
})

//Pre-Loader
const preLoader = document.querySelector("#pre-loader");
window.addEventListener("load", e => {
    setTimeout(() => {
        preLoader.style.opacity = "0";
        preLoader.style.zIndex = "-1"    
    },
        2000)
});