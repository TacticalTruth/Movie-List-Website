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

// function showMovies() {
//     var x = document.getElementById("Nolan")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies2() {
//     var x = document.getElementById("Tom")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies3() {
//     var x = document.getElementById("DWash")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies4() {
//     var x = document.getElementById("SciCom")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies5() {
//     var x = document.getElementById("SciFi")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies6() {
//     var x = document.getElementById("Western")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies7() {
//     var x = document.getElementById("War")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies8() {
//     var x = document.getElementById("IV")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies9() {
//     var x = document.getElementById("JB")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies10() {
//     var x = document.getElementById("Spider")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies11() {
//     var x = document.getElementById("HeartWarm")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

// function showMovies12() {
//     var x = document.getElementById("Love&Time")
//     if (x.classList === "RowWrap") {
//         x.classList.add("Hide");
//     }
//     else {
//         x.classList.toggle("Hide")
//     }
// }

function showMovies13() {
    var x = document.getElementById("Unsort")
    if (x.classList === "RowWrap") {
        x.classList.add("Hide");
    }
    else {
        x.classList.toggle("Hide")
    }
}