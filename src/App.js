import React from 'react';
import './App.css'



function App() {
  // exploreEs6()
  // console.log('Rerendering the app')
  let app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : [],
    count : 0,
  }
  const add = (e)=>{
    console.log('Add one.....')
    e.persist()
    app.count ++
    console.log(app.count)
  }
  const subtratc = (e)=>{

    console.log('subtract......')
    e.persist()
    app.count --
    console.log(app.count)
  }
  const reset = (e)=>{
    console.log('reset......')
    e.persist()
    app.count =0
    console.log(app.count)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option){
      app.options.push(option)
      e.target.elements.option.value = ''
    }
    console.log(app.options.length)
  
  }
  const removeAll = ()=>{
    console.log('Removing all the elements ......')
    app.options = ['one']
    btnState()
  }
  const btnState = ()=>{
    let btnState = false
    if(app.options.length <= 0){
      btnState = true
    }
    return btnState
  }
  const handleMakeChoice = ()=>{
    console.log('trying to make a choice')
    const choiceIndex = Math.floor(Math.random() * app.options.length)
    const choice = app.options[choiceIndex]
    alert(choice)
  }
  let appExpresssion = (
    <div>
     <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    {app.options.length > 0 ? <p>Here are your options </p> : <p>No options</p>}
     {app.options.map ((option, key)=><li key={key}>{option}</li>)}
    <button className='btn-small' onClick={handleMakeChoice} disabled={btnState()} >Make a choice</button>
     <button onClick={removeAll} className=' btn-small' disabled={btnState()} >Remove all</button>

     <hr></hr>
      <h1 className='counter'>Counter :  <span>{app.count}</span></h1>
      <button className="btn" onClick={add}>+1</button>
      <button className="btn" onClick={subtratc}>-1</button>  
      <button className="btn" onClick={reset}>Reset</button>
      <form onSubmit={handleSubmit}>
        <input type='text' name='option' placeholder='Add our options'/>
        <button className='btn-small'>Add option</button>
      </form>
    </div>
  )
  // let user = {
    // username : 'Davis',
    // age : 17,
   
  // }
  // function getLocation(location){
  //   if(location){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
    
  // }
  // let userExpresssion = (
  //   <div>
  //     <h1>{user.username}</h1> 
  //    { user.age > 18 ?  <p>Age : {user.age}</p> : undefined}
  //     {/* <p>location : {getLocation()}</p> */}
  //     {getLocation() ? <p>Location : {'Kenya'}</p>  : undefined}
  //     {false}
  //   </div>
  // )
  // function exploreEs6(){
  //     let name = "davis"
  //     name = 'mike'
  //     console.log(name)
  //     const nameCost  = 'Frank'
  //     console.log(nameCost)
  // }
  // arrow()
  // console.log('Making the arrow funtion to work........')
  // console.log(getFirstName('Brian Ochieng'))
  // console.log(arrowFirnName('James Omollo'))
 
    
  return  appExpresssion
 
}


// const arrow = ()=>{
//   const square = (x)=>{
//     // console.log(anotherFunction(3))
//     console.log(x*x)
//   }
  // console.log('i am an arrow function')
  // square(23)
// }
// const anotherFunction = x=>x*2

// Challenge => Arrow functiona
// getFirstName(Mike smith) return Mike
// create a regular arroew functions 
// create arrw function using the shorthand syntax 

// const getFirstName = (fullName)=>{
//   return fullName.split(' ')[0]

// }
// const arrowFirnName = fullName=>fullName.split(' ')[0]



// More of the arrow functions and their difference

// arguments object is nolonger bound

// console.log('More on the arrow functions')
// const add = (a, b)=>{
//   // console.log(arguments)
//   return a + b
// }
// console.log(add(5,2, 300, 400))



// The this keyword is nolonger bound
// const user = {
//   name : 'davis',
//   cities : ['Nairobi', 'Mombasa', 'Kedu bay'],
//   printCities(){
//     console.log(this.name)
//     console.log(this.cities)
//     const cityMessage = this.cities.map (city=>{
//       console.log(this.name + 'has lived in ' +city) 
//     })
//     console.log(cityMessage, 'City message is here')
//   }


// }
// user.printCities()

// const multiplier = {
//   numbers : [1,2,3,4,5],
//   multiply(multiplyBy){
//     return this.numbers.map(number=>number*multiplyBy)
//   }
// }
  
// console.log(multiplier.multiply(20))


class Person  {
  constructor(name='Anonymous', age=0){
    this.name = name
    this.age = age

  }
  getGreeting(){
    return `Hello there, ${this.name}`
  }
  getDescription(){
    return `My name is ${this.name}, I am ${this.age} years old`
  }
  
}
class Student extends Person{
  constructor(name, age, major){
    super(name, age)
    this.major = major

  }
  getDescription(){
    console.log('making the constructor workd.......')
    super.getDescription()
    console.log('Done with the constructor.......')
    return `Hi my name is ${this.name} anf I am ${this.age}  I take ${this.major}`
  }
  
}

class PhdStudent extends Student{
  constructor(name, age, major, thesis){
    super(name, age, major, 'poultry')
    this.poultry = this.poultry
  }
}
// const davis = new Person('davis Ochieng', 35)
// console.log(davis)
// davis.getGreeting()
// console.log(davis.getDescription())

// making another object

// const other = new Person()
// console.log(other)
// other.getGreeting()
// console.log(other.getDescription())

// const stud = new Student('student', 34, 'computer Science')
// console.log(stud.getDescription())
// const phd = new PhdStudent('ben', 100, 'Software Eng', 'Algorithms')
// console.log(phd.getDescription())
// console.log(phd)

class Traveller extends Person{
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting(){
    if(this.homeLocation){
      return super.getGreeting() + ` I am visiting from  ${this.homeLocation}`
    }
    else{
      return super.getGreeting()
    }
  }
}
const mike  = new Traveller('jesse', 20, 'uk')
console.log(mike.getGreeting())

export default App;


