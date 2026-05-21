document.getElementById("name").innerHTML =
localStorage.getItem("firstname") + " " +
localStorage.getItem("lastname");

document.getElementById("role").innerHTML =
localStorage.getItem("role");

document.getElementById("bio").innerHTML =
localStorage.getItem("bio");

document.getElementById("project1").innerHTML =
localStorage.getItem("project1");

document.getElementById("project1desc").innerHTML =
localStorage.getItem("project1desc");

document.getElementById("project2").innerHTML =
localStorage.getItem("project2");

document.getElementById("project2desc").innerHTML =
localStorage.getItem("project2desc");

const button = document.querySelector(".hero button");

button.addEventListener("click", function() {

    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });

});