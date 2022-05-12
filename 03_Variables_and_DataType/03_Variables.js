console.log("This tutorial is for knowing variables");
// //var, let, const

// var Nam = `Sanjay`;
// var age = 90;
// var salary = 1.55;
// var bestF= "Chandan";
// console.log("The name is: ",Name, "\nThe age is:",age, "\nThe salary is: ",salary, "\nThe bestfriend is: ",bestF );



// // Difference between var, let and const

var Name = `sanjay`;
Name = `raju`;//it is possible to change
console.log(Name);


const name2 = `Mou`;
// name2=`sanjay`;//it is not possible (throw error)
console.log(name2);




var age = 20;
const age2 = 58;
{
    // var age =33;//Throw error
    // console.log(age);

    let age= 100;// same name but it is working because here we used let and it is in another block
    age =200
    console.log("The age is: ",age);

    
}
console.log(age)
console.log(age2);


// // in const we jast add but can't change

const marks = [100, 200, 300, 400];
// marks= [2, 58, 20]//we cant changed
marks.push(45)//we can add
console.log(marks);



/* Most common programming case type 
1. camelCase
2. kabab-case
3. snack_case
4. PascalCase*/