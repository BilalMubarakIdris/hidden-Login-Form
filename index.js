let closeBtn = document.getElementById('closeBtn');
let openBtn = document.getElementById('openBtn');
let container = document.getElementById('container')


openBtn.addEventListener('click',function(e){
    e.preventDefault;
    container.style.display = 'block';
    
})

closeBtn.addEventListener('click',function(e){
    e.preventDefault;
    container.style.display = 'none';
})