const modal = document.getElementById("modal_container");
const openBtn = document.getElementById("modal_open_btn");
const closeBtn = document.getElementById("modal_close_btn");
const okBtn = document.getElementById("modal_ok_btn");
openBtn.onclick = function () {
    modal.style.display = "block";
}
closeBtn.onclick = function () {
    modal.style.display = "none";
}
okBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}