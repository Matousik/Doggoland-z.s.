/* closing and opening sidebar */

const navlinksarr = document.getElementsByClassName('nav-links');
const navlinks = navlinksarr[0];
const closingIcon = document.getElementById('menuOffIcon');
const openingIcon = document.getElementById('menuIcon');

let timeout;
var lastWidthChange = 0;

/* sidebar opening and closing */

openingIcon.addEventListener('click', function() {
    navlinks.style.display='block';
    timeout = setTimeout(slideIn, 20);

})

closingIcon.addEventListener('click', function() {
    navlinks.style.right= "-200px";
    timeout = setTimeout(slideOutTerminator, 1000);
})

function slideIn() {
    navlinks.style.right= '0';
}

function slideOutTerminator() {
    navlinks.style.display='none';
}

/* sidebar display after enlarge */

window.addEventListener('resize', displayMenuAfterEnlarge);

function displayMenuAfterEnlarge() {
    /* execute only after 0.2 s */
    if(Date.now() - lastWidthChange > 200) {
        /*display menu after crossing width 1300px */
        if (window.innerWidth > 1300) {
            navlinks.style.display='block';
        }
        lastWidthChange = Date.now();
    }
}




