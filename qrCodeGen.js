const genBtn=document.querySelector('.genBtn');
const imageD=document.querySelector('.imageD');

genBtn.addEventListener('click',async function(){
    const textI=document.querySelector('input').value;
    imageD.innerHTML=`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textI}" alt="qr">`
})