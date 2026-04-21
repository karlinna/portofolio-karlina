/*show menu*/
const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*====menu show====*/
/* validate constant if exist */
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*====menu hidden====*/
/* validate constant if exist */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==== remove menu mobile ====*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==== change header styles ====*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*==== email js ====*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_flcd27l', 'template_kjyek59', '#contact-form', 'MAqEGDBkg1DWbJDEK')
    .then(() =>{        
        contactMessage.textContent = 'Message sent successfully ✅' 

        setTimeout(() =>{
            contactMessage.textContent = '' 
        }, 5000)

        contactForm.reset()

    }, () =>{
        contactMessage.textContent = 'Message not sent, please try again' 
    })  
}
contactForm.addEventListener('submit', sendEmail)

/*==== scroll up ====*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==== scroll sections active link ====*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
