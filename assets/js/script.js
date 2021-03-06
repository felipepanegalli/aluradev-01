function handleMenu() {
    const btnMenu = document.getElementById('menu-icon');
    btnMenu.addEventListener('click', function () {
        const menu = document.getElementsByClassName('menu-mobile');
        const active = menu[0].classList.contains('active');
        active ? menu[0].classList.remove('active') : menu[0].classList.add('active');
    })
}

function handleSearchMobile() {
    const btnMenu = document.getElementById('mobile-search');
    btnMenu.addEventListener('click', function () {
        const menu = document.getElementsByClassName('mobile-search');
        const active = menu[0].classList.contains('active');
        active ? menu[0].classList.remove('active') : menu[0].classList.add('active');
    })
}

handleMenu();
handleSearchMobile();