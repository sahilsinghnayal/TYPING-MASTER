const randome_word_api='https://api.quotable.io/random';

function getrandomequote(){
   return  fetch(randome_word_api)
    .then(response=>response.json()) //converting into json
    .then(data=>data.content) //we need only content so that we use content from the api
}
 async function getnextquote(){
     const quote = await getrandomequote()
     console.log(quote)
 }
 getnextquote();