const tabBlock = document.querySelector('.tabs');
const firstChild = tabBlock.firstChild;

const tab1 = document.createElement('div');
const tab2 = document.createElement('div');
const tab3 = document.createElement('div');
const span = document.createElement('span');
const span1 = document.createElement('span');
const span2 = document.createElement('span');


tab1.classList.add('tab1');
span.innerHTML = 'TAB 1';
span.classList.add('tabTxt');
tab1.appendChild(span)

tab2.classList.add('tab2');
span1.innerHTML = 'TAB 2';
span1.classList.add('tabTxt');
tab2.appendChild(span1)

tab3.classList.add('tab3');
span2.innerHTML = 'TAB 2';
span2.classList.add('tabTxt');
tab3.appendChild(span2)

tabBlock.insertBefore(tab1, firstChild)
tabBlock.insertBefore(tab2, firstChild)
tabBlock.insertBefore(tab3, firstChild)

let mainText = document.querySelector('.mainTxt')
let secondText = document.querySelector('.secondText')

tab1.onclick = () => {
    tab1.style.backgroundColor = '#FF8B38';
    tab2.style.backgroundColor = '#333333';
    tab3.style.backgroundColor = '#333333';
    mainText.innerHTML = 'Tabs with soft transitioning effect.'
    secondText.hidden = false;
}

tab2.onclick = () => {
    tab2.style.backgroundColor = '#FF8B38';
    tab1.style.backgroundColor = '#333333';
    tab3.style.backgroundColor = '#333333';
    mainText.innerHTML = 'Your text'
}

tab3.onclick = () => {
    tab3.style.backgroundColor = '#FF8B38';
    tab2.style.backgroundColor = '#333333';
    tab1.style.backgroundColor = '#333333';
    mainText.innerHTML = 'Your another text'
}


const nav = document.querySelector('.navbar-btn');
let navCon = document.querySelector('.second-nav');

nav.onclick = () => {
    navCon.hidden = !navCon.hidden;
}