const menuToggle = document.querySelector('.menu-toggle');
    const headerMenus = document.querySelector('.header-menus');

    menuToggle.addEventListener('click', function () {
        headerMenus.classList.toggle('show');
    });