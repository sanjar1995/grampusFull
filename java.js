// hamburger
$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger-active');
    $('header .navbarr').toggleClass('navbarr__active');
});

const addCart = document.querySelectorAll('.addCart'),
 receipt = document.querySelector('.receipt'),
     receiptWindow = document.querySelector('.receipt__window'),
     check = document.querySelector('input[type="radio"]'),
     close = document.querySelector('.window-x button');
     
    // check.addEventListener('click', function () {
    //         if (check.checked == true) {
    //         check = false;
    //     }
    // })




     


     addCart.forEach(function(el){
         el.addEventListener('click', function (e) {
         e.preventDefault();
         receipt.style.display = 'flex';
         setTimeout(function () {
             receipt.style.opacity = '1';
         }, 100);
         setTimeout(function () {
             receiptWindow.style.top = '10%';
         }, 200);
         document.body.style.overflow = 'hidden';

    

     })
    })
close.addEventListener('click', function (e) {
    e.preventDefault()
    receipt.style.display = 'none';
    setTimeout(function () {
        receipt.style.opacity = '0';
    }, 100);
    setTimeout(function () {
        receiptWindow.style.top = '-100%';
    }, 200);
     document.body.style.overflow = 'visible';
})

