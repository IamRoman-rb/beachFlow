const inputsAlert = document.querySelectorAll(".input-float");
const buttonAlert = document.querySelector("#button");

buttonAlert.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target; //Cuando los inputsAlert tengan un valor > 0;
    const validos = Array.from(inputsAlert).filter(i => i.value.length > 0);
    // debugger
    if (validos.length == inputsAlert.length) {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the button!',
            confirmButtonText: "Ok!",
            confirmButtonColor: '#008fff',
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops... something went wrong',
            text: 'better try again!',
            confirmButtonText: "Ok!",
            confirmButtonColor: '#008fff',
        })
    }
})