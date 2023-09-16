let result = document.querySelector('.result');
let input = document.querySelector('#input');
let btn=document.querySelector('.btn');
let arr = [];
window.onload=()=>{
    arr=JSON.parse(localStorage.getItem('arr')) || [];
    arr.forEach(arrs=>addtodo(arrs));
}
btn.addEventListener("click",()=>{
    arr.push(input.value);
    localStorage.setItem('arr',JSON.stringify(arr));
    addtodo(input.value);
    input.value='';
});
function addtodo(arrs){
    let para=(document.createElement('p'));
    para.innerText=arrs;
    result.appendChild(para);
    
    console.log(para);
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through';
        todoremove(arrs);
    })
    para.addEventListener('dblclick',()=>{
        result.removeChild(para);
        todoremove(arrs);
    })
}
function todoremove(arrs){
    let index=arr.indexOf(arrs);
    if(index-1)
        arr.splice(index,1);
    localStorage.setItem('arr',JSON.stringify(arr));
}
