import React from 'react';
import Header from './project-06/Header';

import Form from './project-06/Form';
function App(props) {
  // const[boxes,setBoxes] = React.useState(Boxes)
  // const [contact,setContact] = React.useState({
  //   firstName:'Tharindu',
  //   lastName:'Mandusanka',
  //   phone:'+94 768783078',
  //   email:'dltharindu@gmail.com',
  //   isFavorite:false
  // })
  // var color=''
  // props.darkmode ? color='#222222' : color='#cccccc'
  // const style = {
  //   backgroundColor:color.toString(),
  //   borderRadius:'10px'
  // }


  // function toggle(id){
   
  //   setBoxes(prevBoxes=>{
  //     // const newBoxes = []
  //     // for(let i=0;i<prevBoxes.length;i++){
  //     //   const currentBox = prevBoxes[i]
  //     //   if(currentBox.id === id){
  //     //    const updateBox={
  //     //     ...currentBox,
  //     //     on:!currentBox.on
  //     //    }
  //     //    newBoxes.push(updateBox)
  //     //   }else{
  //     //     newBoxes.push(currentBox)
  //     //   }
  //     // }
  //     // return newBoxes
  //     return prevBoxes.map((box)=>
  //       box.id === id ? {...box,on:!box.on} : box
  //     )
  //   })
  // }
  // const squareElement = boxes.map((item)=>(
  //   <Box  
  //   handleToggle={toggle}
  //   key={item.id} 
  //   on={item.on} 
  //   id={item.id}
  //   />
  //   // <div className='box' key ={item.id}></div>
  // ))
  
  // const jokeElement = JokesData.map(joke =>{
  //   return <JokeT setup = {joke.setup} punchline = {joke.punchline} />
  // })
  return(
    <div>
      <Header/>
      <Form/>
      {/* <JokeT/> */}
    {/* {jokeElement}  */}
      {/* <main>
        {squareElement}
      </main> */}
       {/* <Header/>
      <Form/>    */}
       {/*<h2>
        Name:{contact.firstName+' ' + contact.lastName}
      </h2>
      <h2>
        phoneNumber:{contact.phone}
      </h2>
      <h2 oncli >
        Email:{contact.email}
      </h2> */}
      
    </div>
  )
  

}

export default App;





//()=>{seThingsArray.push(thing)}
//setContact(prevContact=> ({ ...prevContact,isfavourite:!prevContact.isfavourite ==! }))
//()=>{return need} ()=>({not need return})






























//////////////////// project 03 code ........................//////////////////////////
/* <div className='contact-container'>
     <Contact
              img='./image/nauter-3.png'
              name = 'Mr Chamikara'
              number = '+94 768783078'
              emaill = 'dltharindu@gmail.com'
       />
     <Contact
              img='./image/nauter-3.png'
              name = 'Mr Chamikara'
              number = '+94 768783078'
              emaill = 'dltharindu@gmail.com'
     />
     <Contact
              img='./image/cat2.jpg'
              name = 'Mr Tharindu'
              number = '+94 768783078'
              emaill = 'dltharindu@gmail.com'
     />
    <Contact
              img='./image/cat2.jpg'
              name = 'Mr Tharindu'
              number = '+94 768783078'
              emaill = 'dltharindu@gmail.com'
     />
     <Contact
            img='./image/cat3.jpg'
            name = 'Mr Tharindu'
            number = '+94 768783078'
            emaill = 'dltharindu@gmail.com'
     />
     <Contact
            img='./image/cat4.jpg'
            name = 'Mr Tharindu'
            number = '+94 768783078'
            emaill = 'dltharindu@gmail.com'
     />
    </div>

           <Navbar/>
       <Hero/>
       <div className="card-container">
       <Card 
       sellin='Sold out'
       img='./image/pizza.jpg'
       rating='5.0'
       title='Pizza For Dinner or Lunch'
       price={123}
       />
       <Card 
       sellin='Here now'
       img='./image/burger.jpg'
       rating='4.0'
       title='Pizza For Dinner or Lunch'
       price={123}
       />
              <Card 
       sellin='Sold out'
       img='./image/pizza.jpg'
       rating='5.0'
       title='Pizza For Dinner or Lunch'
       price={123}
       />
       <Card 
       sellin='Here now'
       img='./image/burger.jpg'
       rating='4.0'
       title='Pizza For Dinner or Lunch'
       price={123}
       />
       </div>
    //////////////////// project 03 code ........................//////////////////////////
    
  <div className="container-joke">
    <Joke 
     setup = {'dsdsdsddddddddadasdsadsa'}
     punchline = 'dssssssssssssssssssssssssssssssssssssssssss'
     value = {133}
    />
    <Joke setup ='dsdsdsddddddddadasdsadsa'
     punchline = 'dssssssssssssssssssssssssssssssssssssssssss'
    />
    <Joke setup ='dsdsdsddddddddadasdsadsa'
     punchline = 'dssssssssssssssssssssssssssssssssssssssssss'
    />
    <Joke setup ='dsdsdsddddddddadasdsadsa'
     punchline = 'dssssssssssssssssssssssssssssssssssssssssss'
    />
    <Joke setup ='dsdsdsddddddddadasdsadsa'
     punchline = 'dssssssssssssssssssssssssssssssssssssssssss'
    />
   </div> 
    
    
    
    function App() {
  const jokeElement = JokesData.map(joke =>{
       return <Joke setup = {joke.setup} punchline = {joke.punchline} />
  })
  return(
       <div>
         {jokeElement}   
       </div>
  )
}
 const dataElement = Data.map((item)=>{
              return <Card 
              key = {item.id}
              item = {item} 
              // title = {item.title}
              // sellstatus = {item.sellstatus}
              // img = {item.img}
              // rating = {item.status.rating}
              // price = {item.price}
              // openSpots = {item.openspots}

              />
       }) 
       
       
     const vlogElement = Data.map((item)=>{
      return <Body
       key={item.id}
       item = {item}
       />
      
  }) 
  return(
       <div>
         <Header/>
         <div className="vlog-container">
         {vlogElement}
         </div>   
       </div>
  )



   
  
  function handleCheckPlus(){
    // res2(function (){
    //   return res1+1
    // })
    res2(oldValue=>oldValue+1)
  }
  function handleCheckMinus(){
    // res2(function (){
    //   return res1-1
    // })
    res2(oldValue=>oldValue-1)
  }
      <button onClick={handleCheckPlus}>
        +
      </button>
      <h1>{res1}</h1>
      <button onClick={handleCheckMinus}>
        -
      </button>
    
    */