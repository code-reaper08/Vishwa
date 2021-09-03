const me = document.querySelector('#me');
const meContent = document.querySelector('#me-content');

const Mywork = document.querySelector('#Mywork');
const MyworkContent = document.querySelector('#Mywork-content');

const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

const skills = document.querySelector('#skills');
const skillscontent  = document.querySelector('#skills-content');

const switcher = document.getElementById('switch');

// me.addEventListener('click', () => {
//     const meBox = new WinBox({
//         class: "crt",
//         title: 'Me.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: meContent
//     })
// })

// Mywork.addEventListener('click', () => {
//     const WorkBox = new WinBox({
//         class: "crt",
//         title: 'Mywork.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: MyworkContent
//     })
// })

// contact.addEventListener('click', () => {
//     const contactBox = new WinBox({
//         class: "crt",
//         title: 'Contact.exe',
//         background: '#01ba06',
//         width: '400px',
//         top: 10,
//         bottom: 10,
//         left: 100,
//         right: 100,
//         height: '400px',
//         mount: contactContent
//     })
// })


// mobile optimizations.

function Mobresizer(x) {
    if (x.matches) {
        me.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Me.exe',
                background: '#01ba06',
                width: '250px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: meContent
            })
        })
        
        Mywork.addEventListener('click', () => {
            const WorkBox = new WinBox({
                class: "crt",
                title: 'Mywork.exe',
                background: '#01ba06',
                width: '250px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: MyworkContent
            })
        })
        
        contact.addEventListener('click', () => {
            const contactBox = new WinBox({
                class: "crt",
                title: 'Contact.exe',
                background: '#01ba06',
                width: '250px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: contactContent
            })
        })

        skills.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Me.exe',
                background: '#01ba06',
                width: '250px',
                top: 10,
                bottom: 10,
                left: 5,
                right: 5,
                height: '400px',
                mount: skillscontent
            })
        })
    } else {
        me.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Me.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: meContent
            })
        })
        
        Mywork.addEventListener('click', () => {
            const WorkBox = new WinBox({
                class: "crt",
                title: 'Mywork.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: MyworkContent
            })
        })
        
        contact.addEventListener('click', () => {
            const contactBox = new WinBox({
                class: "crt",
                title: 'Contact.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: contactContent
            })
        })

        skills.addEventListener('click', () => {
            const meBox = new WinBox({
                class: "crt",
                title: 'Skills.exe',
                background: '#01ba06',
                width: '400px',
                top: 10,
                bottom: 10,
                left: 100,
                right: 100,
                height: '400px',
                mount: skillscontent
            })
        })
    }
  }
  
  let mediaquery = window.matchMedia("(max-width: 390px)")
  Mobresizer(mediaquery) 
  mediaquery.addListener(Mobresizer)

// switcher.addEventListener('click', () => {

//         const body = document.getElementsByTagName('body');
//         const html = document.getElementsByTagName('html');
//         const head = document.getElementsByTagName('head')[0];
//         if ((body[0].style.mixBlendMode === "normal")) {
//                 console.log(html)
//                 body[0].style.mixBlendMode = "luminosity";
//                 body[0].style.transition = "ease-in-out 2s";

//                 html[0].style.mixBlendMode = "luminosity";
//                 html[0].style.transition = "ease-in-out 2s";
//         }
//         else {
//             body[0].style.mixBlendMode = "normal";
//             body[0].style.transition = "ease-in-out 2s"
//             html[0].style.mixBlendMode = "normal";
//             html[0].style.transition = "ease-in-out 2s";
//         }
//     })

switcher.addEventListener('click', () => {
    const csssheet = document.getElementById('normalcss');
    if(csssheet.href.match("css/global.css")) {
        csssheet.href = "css/mono_global.css";
        document.getElementById('switch').innerText = "Want CRT"
    }
    else {
        csssheet.href = "css/global.css";
        document.getElementById('switch').innerText = "Want MonoChrome"

    }
})