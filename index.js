const me = document.querySelector('#me');
const meContent = document.querySelector('#me-content');

const Mywork = document.querySelector('#Mywork');
const MyworkContent = document.querySelector('#Mywork-content');

const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

me.addEventListener('click', () => {
    const meBox = new WinBox({
        class: "crt boom",
        title: 'Me.exe',
        background: '#01ba06',
        width: '400px',
        height: '400px',
        mount: meContent
    })
})

Mywork.addEventListener('click', () => {
    const WorkBox = new WinBox({
        class: "crt",
        title: 'Me.exe',
        background: '#01ba06',
        width: '400px',
        height: '400px',
        mount: MyworkContent
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        class: "crt",
        title: 'Me.exe',
        background: '#01ba06',
        width: '400px',
        height: '400px',
        mount: contactContent
    })
})