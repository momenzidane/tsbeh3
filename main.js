
let increment = document.querySelector(".increment");
let clear = document.querySelector(".clear");
let num = document.querySelector(".num");
let data =document.querySelector(".data");
let add = document.querySelector(".add");
let newText = document.querySelector(".newText");

add.addEventListener("click",()=>{
    let text = newText.value;
    if (text==null) {
        return -1;
    }
    tsbeh.push(text)
    newText.value = null; 
    
})
let tsbeh =["سبحان الله","الحمد لله","لا اله الا الله ","الله اكبر"]
let count = 1;
increment.addEventListener("click",()=>{
    var oldValue = num;
    var newVaule = oldValue.innerHTML;
    newVaule++;
    oldValue.innerHTML = newVaule;

   if (newVaule == 33) {
       if (count===tsbeh.length) {
            count = 0;
       }
        num.innerHTML = 0;
        data.innerHTML = tsbeh[count]
        count++;
   }
})
clear.addEventListener("click",()=>{
    num.innerHTML = 0;
})

