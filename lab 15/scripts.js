
document.addEventListener('DOMContentLoaded', function(){
    const rotate = function(component, step){
        const slide = component.querySelector('.slide');
        let slideWidthVw = ((slide.offsetWidth / document.documentElement.clientWidth) - 1) * 100;
        let left = Number(slide.style.left.replace('vw', ''));
        left += step * 100;
        if(left > 0) left = 0;
        if(left < -slideWidthVw) left = -slideWidthVw;
        slide.style.left = left + 'vw';
    };

    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        const leftArrow = gallery.querySelector('.left');
        const rightArrow = gallery.querySelector('.right');
        const slide = gallery.querySelector('.slide');
        slide.style.left = '0vw';

        leftArrow.addEventListener('click', () => rotate(gallery, 1));
        rightArrow.addEventListener('click', () => rotate(gallery, -1));
    });
});
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.cloner').forEach(function(cloner){
        cloner.querySelector('.add-button').addEventListener('click', function(){
            cloneRow(cloner);
        });
        cloneRow(cloner);
    });
});

function cloneRow(cloner){
    let container = cloner.querySelector('.container');
    let template = cloner.querySelector('template');
    let clon = template.content.cloneNode(true);
    container.appendChild(clon);
}

function removeRow(e){
    let button = e.target;
    let row = button.closest('.row');
    if(row) row.remove();
}

document.addEventListener("DOMContentLoaded", function(){
    const orderButton = document.querySelector('form a.button[href="#"]');
    const dialog = document.querySelector('form dialog');
    const closeBtn = document.querySelector('.close');

    if(orderButton){
        orderButton.addEventListener('click', function(e){
            e.preventDefault();
            dialog.classList.toggle('show');
        });
    }

    if(closeBtn){
        closeBtn.addEventListener('click', function(){
            dialog.classList.toggle('show');
        });
    }
});
