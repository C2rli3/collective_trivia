
//This program is fetching data from google trend api for a particular job title
var googleTrends = require('google-trends-api');
var fs = require('fs');
var data;

var storeTrends = googleTrends.autoComplete({keyword: "blue"}); // .then(res => {}).catch(err =>{console.error(err)});
// later in code
async function wild(){
  
await storeTrends.then(function(id) {
  data = JSON.parse(id);
});
};

wild();

var yes = [];

setTimeout(function(){     yes = data.default.topics[1];   console.log(yes);   }, 3000);














// var document= DOCUMENT;

// const element = doucment.getElementById("stone");

// global.y = "This can be anywhere";``
// const people =  googleTrends.autoComplete({keyword: "blue"});






//   async function getTrends() { 
//     const response = await people;
//     const data = await response;
//    element.innerHTML = `${data}`;
  
//   }

//   getTrends();
//   var result= document.getElementById("stone").innerHTML;
//   console.log(result);





// async function getTrends() {
//   try {
//      people = await people;
//      person = people.find(person => { return person.name === name });
//     return person, people;
//   } catch (error) {
//     // Handle the error any way you'd like
//   }
// }

// let use = googleTrends.autoComplete({keyword: "blue"})
// .then(res => {populate(res)}).catch( err => {console.error(err)});

//   const getData =async () =>
//   {
//     y =await use;
   
// };
  

// console.log(people, person);

// var world;

// hello = () => {

//   return (googleTrends.autoComplete({keyword: "blue"})
//   .then(res => {
//     return JSON.parse(res);
//   }).catch(err => {
//     console.error(err);

//   })
//   )

// };

// const getData = async () => {

//    return world = await hello().then(res => res.json());

// };

// const wrapperFunc = async () => {
// world = await getData();
// console.log(world);
// }









// fs.readFile('keywords.txt', 'utf8', function (err,data) {
//         if (err) {
//                 return console.log(err);
//         }
//         data = data.toString().split("\n");
//         recur(0, data);
// });

// function recur(index, data){
//         if (index < data.length){
//                 var keyword = data[index].split(",");

//                 googleTrends.interestByRegion({keyword:keyword,
//                 geo:'US',
//                 resolution:'state'
//                 })

//                 .then(function(results ){

//                   world = results.toString();
                 
//                   index = index+1;

//                     recur(index, data);
//                          })
//                 .catch(function(err){
//                         console.error('We have an error!', err);
//                  });
//         }

// }
// console.log(world);


// var googleTrends = require(`google-trends-api`);
// var async = require("async");

// var first;

// hello = () => {

//   return (googleTrends.autoComplete({keyword: "blue"})
//   .then(res => {
//     return JSON.parse(res);
//   }).catch(err => {
//     console.error(err);

//   })
//   )

// };


// async function run () {
//     first = await hello();

//     console.log(first.default);
// };



// run();
// console.log(first)










// async function getTrends() {

//     try {

//       const response = await googleTrends.autoComplete({
//         keyword: "blue"
//       }).then(res => {
//        return res;
//       }).catch(err => {
//         console.log(err)
//       });
//       return await response;

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   let hello =  getTrends();
//   console.log(hello);



    // catch (error)
    // {
    //   console.error("oops something went wrong");
    // }

    // console.log( "This is HURN: "+ hurn);
    // }





    // googleTrends.autoComplete({keyword: 'Back to school'})
    // .then( res => {

    //    return JSON.parse(res);

    // })
    // .then( res => {
    //  fillHurn(res);
    // })
    // .catch((err) => {
    //   console.log('got the error', err);
    //   console.log('error message', err.message);
    //   console.log('request body',  err.requestBody);
    // });

    // console.log(hurn);


    // function resolveAfter2Seconds() {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve('resolved');
    //     }, 2000);
    //   });
    // }

    // var hello = async () => {  
    // googleTrends.autoComplete({keyword: 'Back to school'})
    // .then(res =>{

    //   let data = res.toString();
    //     data = JSON.parse(data);
    //   for(let i =0; i< data.default.topics.length-1;i++)
    //   {

    //    hurn[i] = data.default.topics[i].title;

    //   }

    //   console.log(hurn);

    // }).then( () =>{

    // resolveAfter2Seconds();  
    // })
    // .catch((err) => {
    //   console.log('got the error', err);
    //   console.log('error message', err.message);
    //   console.log('request body',  err.requestBody);
    // })};



    // setTimeout(()=>{hello()},2000);

    // console.log(typeof(hurn));


    // resolveAfter2Seconds();
    // console.log(hurn);

    // {
    //   "default": {
    //     "topics": [{
    //       "mid": "/m/0h539z7",
    //       "title": "First day of school",
    //       "type": "Topic"
    //     }, {
    //       "mid": "/g/11gbk4ryc2",
    //       "title": "Night School",
    //       "type": "2018 film"
    //     }, {
    //       "mid": "/m/03vv1f",
    //       "title": "Old School",
    //       "type": "Film"
    //     }, {
    //       "mid": "/m/0414j6",
    //       "title": "Back to School",
    //       "type": "1986 film"
    //     }, {
    //       "mid": "/m/05357_",
    //     "title": "Tax holiday",
    //     "type": "Holiday"
    //   }]
    // }
