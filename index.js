const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })

    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const section = document.querySelectorAll('section[id]')
function scrollAvtive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = cerrent.offsetTop - 50
        sectionID = current.getAttribute('id')
        
    })
}