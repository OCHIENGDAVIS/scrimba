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


class OldSyntaxt{
    constructor(name){
        this.name = name
    }
}

class Syntax {
    name = 'brian'
}
const old = new OldSyntaxt('James')
console.log(old)

const newSyntax = new Syntax()
console.log(newSyntax)



export default (a, b)=>a-b

 

// export {sayHello, add}
