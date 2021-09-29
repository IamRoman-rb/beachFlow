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

li.addEventListener("click", e => {
    li.classList.add("active")
})

window.addEventListener("scroll", e => {
    const scroll = document.scrollingElement.scrollTop;
    const header = document.querySelector(".header");
    if (scroll >= 500) {
        header.classList.add("headerSolid")
    }
    else{
        header.classList.remove("headerSolid");
    }
    console.clear();
    console.log(scroll)
})