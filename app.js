const title = document.querySelector('.title'),
    incrimentBtn = document.querySelector('.incriment'),
    resetBtn = document.querySelector('.reset'),
    box = document.querySelector('.counter')

incrimentBtn.addEventListener('click', () => {
    title.innerText++;
    console.log(typeof title.innerText)
});


resetBtn.addEventListener('click', ()=> {
    window.location.reload();
})




