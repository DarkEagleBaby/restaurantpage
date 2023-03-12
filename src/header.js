

const contentDiv = document.querySelector('#content');

function makeHeader(){
contentDiv.innerHTML = '';
//heading html
//creating section header
const headerSection = document.createElement('section');
headerSection.classList.add('header');
//creating navbar div
const navbarDiv  = document.createElement('div');
navbarDiv.classList.add('navbar');
//creating logo
const logo = document.createElement('h1');
logo.textContent = 'TLV-Foodies'
//creating nav
const navbar = document.createElement('nav');
//creating ul
const navItems = document.createElement('ul');
navItems.classList.add('nav-items');
//creating nav items

const homeNav = document.createElement('li');
homeNav.classList.add('nav-item');
homeNav.setAttribute('id','home')
homeNav.textContent = 'Home';

const menuNav = document.createElement('li');
menuNav.classList.add('nav-item');
menuNav.setAttribute('id','menu')
menuNav.textContent = 'Menu';

const contactNav = document.createElement('li');
contactNav.classList.add('nav-item');
contactNav.setAttribute('id','contact')
contactNav.textContent = 'Contact';

//appending all to section
navItems.append(homeNav,menuNav,contactNav);
navbar.append(navItems);
navbarDiv.append(logo,navbar);
headerSection.append(navbarDiv)

contentDiv.append(headerSection)    
}




export {makeHeader}