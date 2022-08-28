const btn = document.querySelectorAll('.togg-btn');
const btnContent = document.querySelectorAll('.btn-content');


function removeShow() {
    btnContent.forEach(content => content.classList.remove('show'));
}

function selectItem(e) {
    this.lastElementChild.classList.toggle('transform');
    const btnContentItem = document.querySelector(`#${this.id}-content`);
    btnContentItem.classList.toggle('show');
    const btnItem = document.querySelector(`#${this.id}`);
    if (btnItem.style.marginBottom === "1px") {
        btnItem.style.marginBottom = "8px";
    } else {
        btnItem.style.marginBottom = "1px";
    };
}

btn.forEach(button => {
    button.addEventListener('click', selectItem);
})
