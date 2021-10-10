const inputs = document.querySelectorAll(".input-float");
const button = document.querySelector("#button");

button.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target; //Cuando los inputs tengan un valor > 0;
    inputs.forEach((input) => {
        const value = target.value;
        if (value.length > 5) {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
    })
})