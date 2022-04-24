var buttArr = document.getElementsByClassName('scrollerButtons');
var titleArr = document.getElementsByClassName('scrollerTitles');

for (let i = 0; i < buttArr.length; i++) {
    buttArr[i].addEventListener("click", function() {
       titleArr[i].scrollIntoView({
                 behavior: 'smooth'
               });
    })
    
}