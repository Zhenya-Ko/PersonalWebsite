const modal = document.getElementById("modal");
const buttonmodal = document.querySelector('.modal-close');
const contactbutton = document.querySelector(".contactme");

const openModal = () => {
	modal.classList.add('open');	
}
const closeModal = function(){
	modal.classList.remove('open');
}
contactbutton.addEventListener('click',openModal);
buttonmodal.addEventListener('click',closeModal);
modal.addEventListener('click', function(e){
        	if(!e.target.closest('#modaldiv')){  //нет в родителях .model
        		closeModal();
            }   	
});