window.addEventListener('scroll', function () {
    let scroll = window.pageYOffset;
    let banner = document.querySelector('.banner');
    banner.style.transform = ('translate3d(0,' + (scroll / 100) + '%,0) scale(' + (100 - scroll / 100) / 100 + ')');
});
