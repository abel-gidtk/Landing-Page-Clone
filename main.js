const btn = document.querySelectorAll('.togg-btn');
const btnContent = document.querySelectorAll('.btn-content');


function removeShow() {
    btnContent.forEach(content => content.classList.remove('show'));
}

function selectItem(e) {
    var img = document.getElementById(`${this.id}-icon`).src;
    const btnContentItem = document.querySelector(`#${this.id}-content`);
    btnContentItem.classList.toggle('show');
    const btnItem = document.querySelector(`#${this.id}`);
    if (btnItem.style.marginBottom === "1px") {
        btnItem.style.marginBottom = "8px";
    } else {
        btnItem.style.marginBottom = "1px";
    };

    if (img.indexOf('plus-sign.svg')!=-1) {
        document.getElementById(`${this.id}-icon`).src  = './images/xmark.svg';
    }
     else {
       document.getElementById(`${this.id}-icon`).src = './images/plus-sign.svg';
   };
   
}

btn.forEach(button => {
    button.addEventListener('click', selectItem);
})
