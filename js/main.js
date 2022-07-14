var count = 0;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        count+=1;
        var pressed = document.getElementById('pressed');
        pressed.innerText=count
    }
})
