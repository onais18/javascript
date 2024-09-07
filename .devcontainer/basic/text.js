const accountid=12345
let acountemail="oyankler@mail.com "
let accountpassword="234566"

console.table([accountid,acountemail,accountpassword])

//type conversion of data types
let value="77"
let intonumber=Number (value)
// console.log(typeof(intonumber))
// console.log(intonumber)

// console.log("2"<7)
// console.log("2"===2)

// There are two types of data in javscript. 
// Primitive datatypes: string,number,boolean,symbol,null and undifiend.
// they store in "stack" memory due to (creating a copy nature).
// non-primitive type: array,object and function it is also called (refrence type).
// they store in "Heap" memory due to (change in original value not creating a copy).

// copy value example
let valueone=25;
let valuetwo=valueone;
valuetwo=35;
// console.log(valueone)
// console.log(valuetwo)

// Reference value example
let user1={
    email: "email.com",
    upiId: "okylm@.com"
}
let user2=user1

user2.email="yankler@.com"
// console.log(user1)
// console.log(user2)

// MATHS //
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

// like we wantto generate some number in fixed range we use this

const min=10
const max=20
console.log(Math.round(Math.random()* (max-min+1))+min)
