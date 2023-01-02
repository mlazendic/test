


let btns=document.querySelectorAll('button');
btns.forEach(function (btn){
    btn.addEventListener("click",function(){
        console.log(btn.innerText);
    });
});

/*
btn.addEventListener("click",function(){
    console.log('kliknut');
});
*/

let link=document.querySelector('#link');
link.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(event.target) ;
});

let form=document.querySelector('form');
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log('test');
});

let select =document.querySelector('select');
select.addEventListener("change",(event)=>{
    console.log(event.target.value);
});

window.addEventListener("resize", ()=>{
    if(window.innerWidth>1000){
        console.log("prozor veci od 1000");
    } else {
        console.log(window.innerWidth);
    };
});

let input=document.querySelector('input');
input.addEventListener('keydown',(event)=>{
    if (event.key==="Delete"){
        alert(`Obrisao si ${event.key}`);
    }
});

input.addEventListener("mousemove",(event)=>{
    console.log('mis pomjeren');
} );