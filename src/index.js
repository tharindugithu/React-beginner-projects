import React from 'react';
 import ReactDOM from 'react-dom/client';
 import App from './App';
 import reportWebVitals from './reportWebVitals';


//   const nums = [1,2,3,4,5]

//   const square = nums.map(function(item){
//       console.log(item*item)
//   });

//   const names = ['thar' , 'rsf']

//    const upperCaseFirstLetterWords = names.map(function(item){
//        console.log(item[0].toUpperCase() + item.slice(1))
//    }) 
//   const upperCaseFirstLetterWords = names.map((item)=>item[0].toUpperCase() + item.slice(1))
//   console.log(upperCaseFirstLetterWords) 


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <>
   <App darkmode={false}/>
  </>
 );
 reportWebVitals();


// he conditional (ternary) operator 
// const isGoingOut = true;

// function getAns(is){
//     return(is ? 'Yes' : 'No')
// }
// console.log(getAns(isGoingOut))
