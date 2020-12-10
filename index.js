var googleTrends = require(`google-trends-api`);
var async = require("async");

/* ******************* Autocomplete **************************/
let hurn = [];

googleTrends.autoComplete({keyword: 'Back to school'})
.then(res =>{

  let data = res.toString();
  data = JSON.parse(data);
  
  for(let i =0; i< data.default.topics.length;i++)
  {
    hurn.push(data.default.topics[i].title);
  }

  (res);
})
.catch((err) => {
  console.log('got the error', err);
  console.log('error message', err.message);
  console.log('request body',  err.requestBody);
});

console.log(hurn);

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
//       "title": "Tax holiday",
//       "type": "Holiday"
//     }]
//   }
// }