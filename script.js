const randome_word_api='https://api.quotable.io/random';

const quote_display= document.getElementById('quotedisplay');

const quote_input= document.getElementById('quoteinput');

const timer = document.getElementById('timer');

quote_input.addEventListener('input',()=>{
const arrayquote=quote_display.querySelectorAll('span');
const arrayvalue=quote_input.value.split('');
let correct=true;
arrayquote.forEach((characterspan,index)=>{
    const character=arrayvalue[index];
    if(character==null){
        characterspan.classList.remove('correct')
        characterspan.classList.remove('incorrect')
        correct=false;
    }else if(character === characterspan.innerText){
        characterspan.classList.add('correct')
        characterspan.classList.remove('incorrect')

    }else{
        characterspan.classList.remove('correct')
        characterspan.classList.add('incorrect')
        correct=false;
    }
})
if(correct)rendernewquote();
}
)
function getrandomequote(){
   return  fetch(randome_word_api)
    .then(response=>response.json()) //converting into json
    .then(data=>data.content) //we need only content so that we use content from the api
}
 async function rendernewquote(){
     const quote = await getrandomequote()
     quote_display.innerHTML='' // putting the value of gentrated text from api to our html display
     quote.split('').forEach(character=>{
         const characterspan=document.createElement('span')
         characterspan.innerText=character;
         quote_display.appendChild(characterspan);
     })
     quote_input.value=null;
     starttimer();
 }
 rendernewquote();  
let startTime
 function starttimer(){
     timer.innerText=0;
     startTime = new Date();
     setInterval(()=>{
      timer.innerText= getTimertime();
     },1000)
 }

 function  getTimertime(){
  return Math.floor ((new Date()-startTime)/1000)
 }