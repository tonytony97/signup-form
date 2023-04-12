function showError() {
    if (pw1.value != pw2.value) {
        passError.textContent = "* Passwords do not match";
    }
    passError.className = "error active";
}
const form = document.getElementsByTagName("form")[0];
var pw1 = document.getElementById("pass1");
var pw2 = document.getElementById("pass2");
const passError = document.querySelector("#pass1 + span.error");

form.addEventListener("submit", function (event) {
    if (pw1.value != pw2.value) {
        pw1.className = "nomatch";
        pw2.className = "nomatch";
        showError();
        event.preventDefault();
    }
});
