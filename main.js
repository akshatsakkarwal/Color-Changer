const body = document.querySelector("body");

let child = document.querySelectorAll(".child");


child.forEach(function (button) {

    button.addEventListener("click", function (e) {

        console.log(e.target);

        if (e.target.id === "red") {
            body.style.backgroundColor = "tomato";
        }

        if (e.target.id === "purple") {
            body.style.backgroundColor = "purple";
        }

        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow";
        }

        if (e.target.id === "orange") {
            body.style.backgroundColor = "orange";
        }








    });

});