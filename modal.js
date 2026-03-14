const modal=document.querySelector('.modal');
const openmodalbtn=document.querySelector('.openmodal');
const closeModalButton=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
const openmodal=()=>{
    modal.classList.remove("close");
   document.body.classList.add("overflowhidden");
}

function closemodal(){
    modal.classList.add("close");
    document.body.classList.remove("overflowhidden");
}
openmodalbtn.addEventListener('click',()=>{
    openmodal();
})

closeModalButton.addEventListener('click',()=>{
 closemodal();
});

// overlay.addEventListener('click',()=>{
//  closemodal();
// });

modal.addEventListener('click',(e)=>{
    const x=e.target.classList;
    console.log(e.target);
    if( x.contains('overlay')   ||  x.contains('close-modal'))
        {
          closemodal();     
    };

});
