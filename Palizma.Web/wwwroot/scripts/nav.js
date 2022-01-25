/* header and nav codding */
const menu_bars = document.getElementById('menu-bars')
const menu = document.getElementById('menu')
const containerHeader = document.getElementById('container-header-content')
const aTag = document.querySelectorAll('.list-items')
const spanHeader = document.getElementById('span-header') //=> This tag was created to animate menu items (when hovering)
const nav = document.querySelector('.nav')
const bgMain = document.querySelector('.bg-main')
/* header functions */
const toggleMenuHeader = () => {
    // show menu animate
    menu.classList.toggle('active')
    bgMain.classList.toggle('active')
}
bgMain.addEventListener('click', () => {
    menu.classList.remove('active')
    bgMain.classList.remove('active')
})
/* header */
const hoveritemsMenu = (link) => {
    let linkCoods = link.getBoundingClientRect()
    spanHeader.style.height = `5px`
    spanHeader.style.width = `11px`
    spanHeader.style.transform = `translate(${linkCoods.left}px,${linkCoods.top + window.scrollY + 22}px)`
    spanHeader.classList.add('show')
    spanHeader.classList.remove('hide')
}
const onhoveritemsMenu = (aTag) => {
    aTag.forEach(link => {
        if (link.classList.contains('active')) {
            hoveritemsMenu(link)
        }
    })
}
onhoveritemsMenu(aTag)
/* Build hover animations on menu links */
aTag.forEach(link => link.addEventListener('mouseenter', hoveritemsMenu.bind(null, link)));
containerHeader.addEventListener('mouseenter', onhoveritemsMenu.bind(null, aTag))
menu_bars.addEventListener('click', toggleMenuHeader)
/* Changing the container class for website responsiveness in size 568 class will change to container-fluid */
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        containerHeader.classList.remove('container-fluid')
        containerHeader.classList.add('container')
    } else {
        containerHeader.classList.remove('container')
        containerHeader.classList.add('container-fluid')
    }
})

window.onscroll = function () { scrollTopFixed() };
function scrollTopFixed() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 200)
        nav.classList.add('top')
    else
        nav.classList.remove('top')

}