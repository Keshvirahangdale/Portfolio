const form = document.getElementById("contact-form");

form.addEventListener("submit", ()=> {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all fields");
    } else {
        alert("Form submitted successfully");
    }
});


const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});