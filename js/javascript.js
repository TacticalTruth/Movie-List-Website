let mybutton = document.getElementById("BackToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showMovies(id) {
    var x = document.getElementById(id)
    if (x.classList === "RowWrap") {
        x.classList.add("Hide");
    }
    else {
        x.classList.toggle("Hide")
    }
}