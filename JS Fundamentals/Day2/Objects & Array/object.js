//TASK!

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "pete";
delete user.name;

//TASK2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//Task3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

//Task4
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
