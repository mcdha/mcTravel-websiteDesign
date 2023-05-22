function toggleNavbar() {
        // var navbar = document.querySelector('.navbar');
        // navbar.classList.toggle('collapsed');
        if (navo.classList.contains('navMc1')) {
                navo.classList.remove('navMc1');
                navo.classList.add('navMc2');
                console.log('navo');
        }
        else {
                navo.classList.remove('navMc2');
                navo.classList.add('navMc1');
        }
}

let navo = document.getElementById('navo');
console.log('navo');



function toggleNavbar1() {
        // var navbar = document.querySelector('.navbar');
        // navbar.classList.toggle('collapsed');
        if (navo1.classList.contains('navMc')) {
                navo1.classList.remove('navMc');
                navo1.classList.add('navMc3');
                console.log('navo1');
        }
        else {
                navo1.classList.remove('navMc3');
                navo1.classList.add('navMc');
        }
}

let navo1 = document.getElementById('navo1');
console.log('navo1');


// window.addEventListener("load", function(){
//         let preloader = document.getElementById('preloader');
//         preloader.style.display = 'none';
// });