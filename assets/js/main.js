const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backColorBody = estilosBody.backgroundColor;



for (let p of ps){
    p.style.backgroundColor = backColorBody;
    p.style.color = '#FFF';
}
