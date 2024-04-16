function animar() {
    let elem = document.getElementById("anima");
    let stepValue = 0;
    let id = setInterval(resultado, 500);

    function resultado() {
        //valor total porcentual
        if (stepValue >= 61) {
            clearInterval(id);
            swal.fire({
                    title: "Promedio de ventas",
                    showConfirmButton: false,
                    timer: 1500,
                    html: '<iframe width="100" height="100" src="https://lottie.host/embed/645bc63c-e149-4611-bf29-8fd97ad1e30f/Irh67BpeHe.json"></iframe>',
                })

        } else {
            elem.style.width = (stepValue + 10) + "%";
            elem.innerHTML = (stepValue + 10) + "%";
            stepValue = (stepValue + 10);

        }
    }
}