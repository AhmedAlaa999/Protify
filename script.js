const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    localStorage.setItem("firstname", inputs[0].value);
    localStorage.setItem("lastname", inputs[1].value);
    localStorage.setItem("role", inputs[2].value);
    localStorage.setItem("bio", inputs[3].value);
    localStorage.setItem("project1", inputs[4].value);
    localStorage.setItem("project1desc", inputs[5].value);
    localStorage.setItem("project2", inputs[6].value);
    localStorage.setItem("project2desc", inputs[7].value);

    window.location.href = "portfolio.html";

});