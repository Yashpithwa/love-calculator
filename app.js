let submit=document.getElementById("btn");
window.onload=(e)=>
{
    alert("ONLY FOR FUN PURPOSE");
}
submit.addEventListener("click",(e)=>
{
   let name1=document.getElementById("name1").value;
   let name2=document.getElementById("name2").value;
   let result=Math.floor(Math.random()*100)+1;
   if(result==100)
   {
    alert(`100% soulmate connection! Your love story is destined to be amazing:${result}`);
   }
   else if(result>=75 && result<100)
   {
    alert(`A very good match! There’s a lot of love between you two: ${result}%`);
   }
   else if(result>=50 && result<75)
   {
    alert(`A promising match! With some effort, this relationship can grow even stronger:${result}%`)
   }
   else if(result>=35 && result<50)
   {
    alert(`It’s a bit of a struggle, but if you put in the effort, things can improve:${result}%`);
   }
   else
   {
    alert(`This might not be the best match. It’s important to talk and understand each other better:${result}$`);
   }
})
