import { makeHeader } from "./header"
import { displayHome } from "./home";
import { displayMenu } from "./menu";

const contentDiv = document.querySelector('#content')
//making page grid
const backgroundColor = document.createElement('div');
backgroundColor.setAttribute('id','contact-background')
const contactGrid = document.createElement('div');
contactGrid.classList.add('contact-grid');

//adding card for form
const formCard = document.createElement('div');
formCard.classList.add('form-card')
//actual form 
const realForm = document.createElement('form');
realForm.classList.add('real-form')
//form div for styling
const contactForm = document.createElement('div');
contactForm.classList.add('contact-form');
//title
const contactFormTitle = document.createElement('h2');
contactFormTitle.setAttribute('id','form-title');
contactFormTitle.textContent = 'Lets talk!'
//new inputs
//name
const nameInput = document.createElement('input');
nameInput.setAttribute('type','text');
nameInput.classList.add('name-input');
nameInput.placeholder = 'Your name :)'
nameInput.required = true;
//phoneNumber
const phoneInput = document.createElement('input');
phoneInput.setAttribute('type','number');
phoneInput.classList.add('phone-input');
phoneInput.required=true;
phoneInput.placeholder = 'Phone Number'
//message
const messageInput = document.createElement('input');
messageInput.setAttribute('type','text');
messageInput.classList.add('message-input');
messageInput.placeholder = 'your message here'
messageInput.required = true;
//submit button
const subBtn = document.createElement('button');
subBtn.textContent = 'Send'
subBtn.addEventListener('click',(e)=>{e.preventDefault();
    nameInput.value='';
    phoneInput.value='';
    messageInput.value = '';
    alert('message sent successfully');
})
//adding contact form card to grid
contactForm.append(contactFormTitle,nameInput,phoneInput,messageInput,subBtn);
realForm.append(contactForm)
formCard.append(realForm);
contactGrid.append(formCard);


//adding map from googlemap
const findUs = document.createElement('div');
findUs.classList.add('find-us')
const newMap = document.createElement('div');
newMap.classList.add('google-map')
newMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.4398894985547!2d34.76812801503937!3d32.05734902763708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4db8ed98ae29%3A0xbb3f8fd4b85ecc87!2sp.o.c%20caf%C3%A9!5e0!3m2!1sen!2sil!4v1678644885545!5m2!1sen!2sil" 
width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

//message above map
const findUsMsg = document.createElement('p');
findUsMsg.classList.add('find-us-text')
findUsMsg.textContent = 'Come find us!'

findUs.append(findUsMsg,newMap)
contactGrid.append(findUs);

function displayContact(){
    //adding all to content
contentDiv.append(backgroundColor);
contentDiv.append(contactGrid);
//making navbar interactive:
const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click',(e)=>{
e.preventDefault();
makeHeader();
displayMenu();
})

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    makeHeader();
    displayHome()
})
}

export{displayContact}