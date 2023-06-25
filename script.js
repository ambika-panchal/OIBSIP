/*======================scroll selection active link =====================================*/

let section = Document.querySeletionAll('section');
let navLinks =document.querySeletionAll('header nav a ');

window .onscroll=() =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' +id+ ']').classList.add('active')
            });

        };

    });

    /*================sticky navbar==============*/
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY >100);
};

ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    delay :200

});

scrollReveal().reveal('.home-content,.heading',{origin:'top'});
scrollRevel().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});

scrollReveal().reveal('.home-content h1, .about-img',{origin:left});
