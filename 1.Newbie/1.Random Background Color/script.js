const btn=document.querySelector("#one");
// console.log(btn)
const body=document.body;
const span=document.querySelector('span');

// console.log(span)

function getColor(){
  const red=Math.floor(Math.random()*255);
  const blue=Math.floor(Math.random()*255);
  const green=Math.floor(Math.random()*255);
 
  const rgb=`rgb(${red},${blue},${green})`
  return rgb;
}
btn.addEventListener('click',()=>{
  const bg=getColor();
  span.textContent=bg;
  // console.log(span)
  body.style.backgroundColor=bg;
});