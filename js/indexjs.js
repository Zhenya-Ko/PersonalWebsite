console.log("hello")

const greeting = document.querySelector("h1");
const text = "Hello, I am Zhenya";
let start = 0;
let letter = 1;

showgreeting = () =>{
 greeting.innerHTML += text.substr(start,letter);
start+=letter;
 if(start < text.length){
    setTimeout( showgreeting, 50);
};
}




// Modal 

const modal = document.getElementById("modal");
const buttonmodal = document.querySelector('.modal-close');
const contactbutton = document.getElementById("contactme");

const openModal = () => {
	modal.classList.add('open');	
}
const closeModal = function(){
	modal.classList.remove('open');
}
contactbutton.addEventListener('click',openModal);
buttonmodal.addEventListener('click',closeModal);
modal.addEventListener('click', function(e){
        	if(!e.target.closest('modaldiv')){  //нет в родителях .model
        		closeModal();
            }   	
});


greeting.addEventListener("DOMContentLoaded",setTimeout(showgreeting,500));