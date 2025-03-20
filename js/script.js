// toggle kelas aktif
const navbarNav = document.querySelector('.navbar-nav');

//ketika hambuger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan menu
const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hambuger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});