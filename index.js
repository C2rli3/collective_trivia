//using parcel use 'npm run start' in terminal to test
const { data } = require('jquery');
const $ = require('jquery');
const apiKey = '5b3682be';
const rand= require('random-words');
const keyword = rand();
const myUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=` // I'm going to fill in with movie title
const promise = $.ajax({ url: myUrl + `${keyword}` });
let current = "current";


const hexRan = () => {
  return (Math.floor(Math.random() * 256));
}

const drawSquare = () =>
  $(() => {
      for (let i = 0; i <= 1; i++) {
          const $square = $(`<div></div>`).addClass(`square`);
          $square.css('background-color', `white`);//`rgb(${hexRan()},${hexRan()},${hexRan()})`)
          promise.then(data =>{
          $square.css('background-image', "url(" + data.Poster + ")");
          current = data.Title;
          console.log(current);
          }
          ).catch(err => {console.log(err)});
          $square.css('grid-row', `2`);
          $square.css('grid-column', `7`);
          $('body').append($square);
      }      
  })
  

drawSquare();


$('form').on('submit', (event) => {
  event.preventDefault();
  $('#user-input').val() == current ? $square.text("YAY") : $square.css('background-color', `red`);
$.off;

});





// $( () => {

//     $('form').on('submit', (event) =>
//     {
//         event.preventDefault();
//         const userInput = $('#user-movie-input').val();
//         const filledInUrl = myUrl + userInput;
//         console.log(filledInUrl);
//     }
//     );


// }
// );






// promise.then(data => {
//   console.log(data)
//   console.log(data.Year)
// }).catch(err => {
//   console.error(err)
// })
// async function callFrozen() {
//   try {
//     const res = await $.ajax({ url: myUrl + 'Frozen' })
//     console.log(res);
//   } catch(e) {
//     console.error(e, e.message)
//   }
// }
// callFrozen();
// const res = axios.get(myUrl + 'Frozen');
// res.then(data => {
//   console.log(data.data);
// }).catch(e => {
//   console.error(e.message)
// })
