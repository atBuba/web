const background = document.querySelector('.background');
const rabbit = document.querySelector('.objects__rabbit');
const cat = document.querySelector('.objects__cat');
const rabbitClickable = document.querySelector('.rabbit__clickable');
const catClickable = document.querySelector('.cat__clickable');

const lamp = document.querySelector('.lamp__image');
const light = document.querySelector('.light');
const figures = document.querySelector('.objects__figures');

let canRestore = false;

background.addEventListener('click', () => {
   if (canRestore) {
      background.classList.remove('remove');
      background.classList.add('restore');
      canRestore = false;
   } else {
      background.classList.remove('restore');
      background.classList.add('remove');
      canRestore = true;
   }
});

lamp.addEventListener('mousedown', () => {
   lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
   lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
   light.classList.toggle('on');
   figures.classList.toggle('display');
});

rabbitClickable.addEventListener('click', () => {
    rabbitClickable.classList.add("hide");
    catClickable.classList.remove("hide");

    rabbit.classList.add('hide');
    cat.classList.remove('hide');
});

catClickable.addEventListener('click', () => {
    rabbitClickable.classList.remove("hide");
    catClickable.classList.add("hide");

    cat.classList.add('hide');
    rabbit.classList.remove('hide');
});

