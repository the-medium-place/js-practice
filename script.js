var nameArray = ['zac', 'darth vader', 'goku', 'homer', 'bertha', 'joe rehfuss', 'joe rehfuss']
// var userInput = prompt("Search for a student: ");
console.log(nameArray);

var newStudent = prompt("Enter the new Name");

nameArray.push(newStudent);

console.log(nameArray);

var numberOfGokus = 0;
var numberOfJoes = 0; 

for (let i = 0; i < nameArray.length; i++) {
    if(nameArray[i] === 'goku'){
        console.log("found one!");
        numberOfGokus++
    }  
}

for (let i = 0; i < nameArray.length; i++) {
    if(nameArray[i] === 'joe rehfuss'){
        console.log("found joe!");
        numberOfJoes++
    }  
}

if(numberOfGokus > numberOfJoes){
    console.log("not a fair fight");
} else if (numberOfJoes > numberOfGokus){
    console.log("joe's gonna win every time");
} else {
    console.log("this seems pretty fair.")
}




console.log(numberOfGokus)




// console.log(userInput)