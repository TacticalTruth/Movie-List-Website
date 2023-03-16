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

const moviePosters = document.getElementsByTagName('img');
const imgSrcs = [];
const totalPosters = moviePosters.length

for(let i = 0; i < totalPosters; i++){
    let elem = moviePosters[i];
    elem.addEventListener('click', showPopUp, false);
}



for (let i = 0; i < totalPosters; i++){
    imgSrcs.push(moviePosters[i].src);
}

console.log(imgSrcs);


function showPopUp(){
    document.getElementById('MoviePopUp').classList.remove('Hide');
    console.log(imgSource);
}

    

const fileName = document.g


const closeButton = document.getElementById("CloseBtn");
closeButton.addEventListener('click', function(){
    document.getElementById('MoviePopUp').classList.add('Hide');
});