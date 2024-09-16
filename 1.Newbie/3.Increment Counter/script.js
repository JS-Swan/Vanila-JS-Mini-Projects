let count=0;

const value=document.querySelector("#value");
const btns=document.querySelectorAll('.btn');
const btnContainer=document.querySelector(".btn-container");

btns.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        if(event.target.classList.contains("decrease")){
            count--;
        }
        else if(event.target.classList.contains("increase")){
            count++;
        }
        else{
          count=0;  
        }
        if(count > 0){
            value.style.color="green";
        }
       else if(count < 0){
            value.style.color="red";
        }
        else{
            value.style.color="black"; 
        }
        value.textContent=count;
        
    })
})

// Below code is good use of event-bublling ,prefered

// btnContainer.addEventListener("click",(event)=>{
//     if(event.target.classList.contains("decrease")){
//         count--;
//     }
//     else if(event.target.classList.contains("increase")){
//                      count++
//          }
//          else{
//                      count=0;  
//                     }   
//       value.textContent=count;              
// })