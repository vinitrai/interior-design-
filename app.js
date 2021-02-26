const menu = document.querySelector('.menu');
const showIcon = document.querySelector('.show__menu');
const hideIcon = document.querySelector('.hide__menu');
const navBar = document.querySelector('nav');
const brand = document.querySelector('.brand');


menu.addEventListener('click', function () {
    const navStyles = window.getComputedStyle(navBar);
    // if (navBar.style.display === '') {
    //     hideIcon.style.display = 'block';
    //     showIcon.style.display = 'none';
    //     navBar.style.display = 'block';
    //     brand.style.opacity = 0;
    // } else if (navBar.style.display === 'block') {
    //     hideIcon.style.display = 'none';
    //     showIcon.style.display = 'block';
    //     navBar.style.display = 'none';
    //     brand.style.opacity = 1;
    // }
    if (navStyles.display === 'none') {
        navBar.style.display = 'block';
        hideIcon.style.display = 'inline-block';
        showIcon.style.display = 'none';
        brand.style.opacity = 0;
    } else if (navStyles.display === 'block') {
        navBar.style.display = 'none';
        hideIcon.style.display = 'none';
        showIcon.style.display = 'inline-block';
        brand.style.opacity = 1;
    }

});
window.addEventListener('resize', function () {
    if (screen.width > 567) {
        navBar.style.display = 'block';
        brand.style.opacity = 1;
    }
})