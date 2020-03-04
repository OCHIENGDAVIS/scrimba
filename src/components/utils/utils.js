console.log('utils.js is running')
export const sayHello = ()=>{
    return 'hello there'
}
export const add = (a, b)=>{
    return a + b
}
export const isAdult = (age)=>{
    if(age >= 18){
        return true
    }
    else{
        return false
    }
}
export const canDrink  = (age)=>{
    if(age >=21){
        return true
    }
    else{
        return false
    }
}


export default (a, b)=>a-b



// export {sayHello, add}