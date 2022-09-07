/*const div = document.querySelector('div');

function printObject(obj){
    let result = '<ul>'

    for(el in obj){
        result +='<li><b>' + el + '</b>' + obj[el] + '</li>'
    }

    result += '</ul>'

    document.write(result)
}

printObject(div);*/


const photos = document.querySelectorAll('img');


const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');

let imgIndex = 0;

setInterval(()=>{
    photos[imgIndex].className = '';
    imgIndex++;

if(imgIndex >= photos.length){
    imgIndex = 0;
}

    photos[imgIndex].className = 'visible';
},6000)


btnLeft.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex--;

if(imgIndex < 0){
    imgIndex = 3;
}

    photos[imgIndex].className = 'visible';
}

btnRight.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex++;

if(imgIndex >= photos.length){
    imgIndex = 0;
}

    photos[imgIndex].className = 'visible';
}