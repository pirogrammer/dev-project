function myFunction() {
    const btn = document.body;
    btn.classList.toggle('dark');

}


const element = document.querySelector('button');
element.innerHTML = 'click to see magic';

element.addEventListener('click', myFunction);


const foot = document.querySelector('footer');
foot.innerText = '© Santosh';