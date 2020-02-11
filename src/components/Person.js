class Person{
    constructor(name='Anonymous', age=0){
        this.name  = name
        this.age = age
    }
    getGreeting(){
        return `${this.name} is ${this.age} years old`
    }
    

}

class Student extends Person{
    constructor(name, age, admission='Not yet Admitted!'){
        super(name, age)
        this.admisioNumber = admission
    }
}

class MasterStudent extends Student{
    constructor(name, age, admission, book){
        super(name, age, admission)
        this.book = book
    }
    hasMajor(){
        return ''
    }
}

const me = new Person('Davis', 26)
const other = new Person()
const davis = new Student()
const mike = new Student('Ben', 20, 256)
const john = new MasterStudent('John', 30, 256, 'Introduction to javascript' )
// console.log(me.getGreeting())
// console.log(other.getGreeting())
console.log(davis)
console.log(mike)
console.log(john)

