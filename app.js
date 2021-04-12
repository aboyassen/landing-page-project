/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//some Global variables
const sections = document.querySelectorAll('.sectiond');
const ulm = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

//creating the nav
sections.forEach( (element)=> {
    const sec_datanav= element.getAttribute('data-nav');//calling section by data nav attribute
    const newli = document.createElement('li'); //creating li
    const newlink = document.createElement('a');// creating anchors
    const textnode = document.createTextNode(sec_datanav);

    newlink.appendChild(textnode);//appending textnode inside newlink
    newli.appendChild(newlink);//appending newlink inside newli
    fragment.appendChild(newli);//appending all previous element iside one element called fragment
    
 //adding an eventlistener to scroll into specific section for every linlk by click
    newlink.addEventListener('click', ()=>{

         element.scrollIntoView({behavior: "smooth"})

    } )


})

ulm.appendChild(fragment);


//adding  event by scroll
window.addEventListener('scroll', ()=> {
    sections.forEach( (ele)=> {  //loping over sections
        const actio= ele.getBoundingClientRect();
        
        if (actio.top >= -20 && actio.top <= 200){//conditional statement for the event
            sections.forEach( (removing)=> {
            removing.style.background="rgb(141, 131, 228)";// removing the action of the event if the class is no longer active
            })
            ele.style.background = "red";//action of the event
            
            const linkGroup = document.querySelectorAll('a'); //calling all the a
            linkGroup.forEach( (linkat)=>{
                if(ele.getAttribute('data-nav')== linkat.textContent){
                    linkGroup.forEach( (tazbet)=>{
                        tazbet.style.background="rgb(57, 43, 190)"; // result of true output
                    })
                    linkat.style.background="red";// action that applied to active link linked to the active section
                }
          
            })
        }
             
    })
});



