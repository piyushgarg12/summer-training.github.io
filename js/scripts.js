
// Mobile Menu

 document.getElementById("hamburguer-icon").onclick=function(){
    document.getElementById("sliding-header-menu-outer").style.right="0";
 }
 document.getElementById("sliding-header-menu-close-button").onclick= function(){
  document.getElementById("sliding-header-menu-outer").style.right="-320px";
 }

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";


 let aboutustab= document.getElementsByClassName("single-tab");
   Array.from(aboutustab).forEach((Element)=>{
       
       Element.addEventListener("click",()=>{
         let box= document.getElementById("box-text");
         box.innerHTML= aboutUs[Element.innerHTML];
         Array.from(aboutustab).forEach((Element)=>{
           Element.style.background="#646872";
           Element.style["font-weight"]=300;
          })
          Element.style.background="#2A2D34";
          Element.style["font-weight"] = "bold";
       })
   })

// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

let previousarrow= document.getElementById("service-previous");
let nextarrow= document.getElementById("service-next");
let currentindex= 0;
  nextarrow.addEventListener("click",()=>{
     let servicetitle= document.getElementById("service-title");
      let servicetext= document.getElementById("service-text");
      currentindex++;
       if(currentindex>2) currentindex=0;
      servicetitle.innerHTML= ourServices[currentindex]["title"];
  })

  previousarrow.addEventListener("click",()=>{
    let servicetitle= document.getElementById("service-title");
     let servicetext= document.getElementById("service-text");
     currentindex--;
      if(currentindex<0) currentindex=2;
     servicetitle.innerHTML= ourServices[currentindex]["title"];
 })


// Footer


document.getElementById("current_year").innerHTML= new Date().getFullYear();
  
   


   