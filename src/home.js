import { makeHeader } from "./header";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
const displayHome = ()=>{

    const contentDiv = document.querySelector('#content');
    //background image of home
    const heroBackground = document.createElement('section');
    heroBackground.classList.add('hero-background');
    //hero section
    const hero = document.createElement('section');
    hero.classList.add('hero');
    //hero text
    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');
    heroText.textContent = `Sign up now and discover the magic of Israel's best food`
    //hero description
    const heroDesc = document.createElement('p');
    heroDesc.classList.add('desc-text');
    heroDesc.textContent = `We promise you won't regret it. We offer the best food in the middle east`

    hero.append(heroText,heroDesc);
    contentDiv.append(heroBackground);
    contentDiv.append(hero)
    
    // making navbar interactive
    const menuBtn = document.querySelector('#menu');
    menuBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    makeHeader();
    displayMenu();
    })

    const contactBtn = document.querySelector('#contact');
    contactBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    makeHeader();
    displayContact();
    })


}

export {displayHome}