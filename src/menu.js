//Element function defined in another js file - a class that takes in an ID, a Class and 
//an element type (div, img and so on) and creates an element. 
//has a .addContent function to add text.
import cheeseburger from './images/cheeseburger.jpg'
import pasta from './images/pasta.jpg'
import bruschetta from './images/bruschetta.jpg'
import sashimi from './images/sashimi.jpg'
import chocolate from './images/chocolate.jpg'
import cheesecake from './images/cheesecake.jpg'

import { makeHeader } from './header'
import { displayHome } from './home'
import { displayContact } from './contact'


const contentDiv = document.querySelector('#content');

const mainTitle = document.createElement('h1');
mainTitle.classList.add('menuTitle')
mainTitle.innerText = 'Food Reimagined';




const menuGrid = document.createElement('div');
menuGrid.classList.add('menuGrid')
const menuItems = [

    {name:"Sashimi",image:sashimi,
    description:"A japanese timeless essential. Heaven on earth"},

    {name:"Cheeseburger",image:cheeseburger, 
    description:"A good ol' cheeseburger. How could you not love it?"},

    {name:"Bruschetta",image:bruschetta, 
    description:"A delightful refreshing piece of heavenly bread with raw fish and sauce"},
    
    {name:"Pasta",image:pasta, description:"Pasta rago. What else is there to say?"}]


for(let item of menuItems){
    const newItem = document.createElement('div');
    newItem.classList.add('menuItem',item.name)
    const itemText = document.createElement('p');
    itemText.textContent = item.description;
    const itemImg = document.createElement('img');
    itemImg.src = item.image
    newItem.append(itemText);
    newItem.append(itemImg);
    menuGrid.append(newItem)
}

const DessertTitle = document.createElement('h2');
DessertTitle.classList.add('dessertTitle');
DessertTitle.textContent = 'Dessert Items'

const DessertItems = [
    {name:'chocolatefondeu',image:chocolate, description:"A godly, smooth chocolate fondeu"},
    {name: 'cheesecake', image:cheesecake, description:"The best cheesecake on earth. That's all."}
]

const DessertGrid = document.createElement('div');
DessertGrid.classList.add('DessertGrid')

for(let item of DessertItems){
    const newItem = document.createElement('div');
    newItem.classList.add('DessertItem',item.name)
    const itemText = document.createElement('p');
    itemText.textContent = item.description;
    const itemImg = document.createElement('img');
    itemImg.src = item.image
    newItem.append(itemText);
    newItem.append(itemImg);
    DessertGrid.append(newItem)
}

function displayMenu(){
contentDiv.append(mainTitle)
contentDiv.append(menuGrid)
contentDiv.append(DessertTitle)
contentDiv.append(DessertGrid)

//making navbar interactive
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    makeHeader();
    displayHome()
})
const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click',(e)=>{
e.preventDefault();
makeHeader();
displayContact();
})
}


export {displayMenu};