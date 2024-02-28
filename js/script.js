document.addEventListener('click', function(e) {
    let activePopApp = document.querySelector('._pop-app-active');
    if(e.target.closest('._open-pop-app')) {
        let eData = e.target.closest('[data-open]').dataset.open;
        let eDataPopApp = document.querySelector(`[data-popApp='${eData}']`)
        eDataPopApp.classList.toggle('_pop-app-active')
    } else if(activePopApp && !e.target.closest('.pop-app-row')) {
        activePopApp.classList.remove('_pop-app-active')
    }

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    let header = document.querySelector('.header');
    const html = document.documentElement;
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        header.classList.toggle('header-active')
        html.classList.toggle('_overflow')
    } else if (menu.closest('.active') && !e.target.closest('.menu') && menuBtn.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        header.classList.remove('header-active')
        html.classList.remove('_overflow')
    }
})

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}