const user1 = {
  username: "jon",
  email: "jon.example.com",
  password: "pass123",
  age: 17,
  agreeToTerms: false
};

const user2 = {
  username: "sarah_dev",
  email: "sarah@example.com",
  password: "securePass2024",
  age: 24,
  agreeToTerms: true
};

/*Write a function called validateRegistration that takes a user object and checks the following rules:

username must be at least 4 characters long
email must contain an @ symbol
password must be at least 8 characters long
age must be 18 or older
If agreeToTerms is false or missing, validation fails
The function should return an object with two properties:

isValid (boolean)
errors (array of error messages for any failing rules)*/

function validateRegistration(user) {
  let errors = [];
  let isValid = true;

  let test = "asd";

  //username
  if (user.username.length <4) {
    isValid = false;
    errors.push("username must be at least 4 characters long");
  }

  //email
  if (!user.email.includes("@")) {
    isValid = false;
    errors.push("email must contain an @ symbol");
  }

  //password
  if (user.password.length <8) {
    isValid = false;
    errors.push("password must be at least 8 characters long");
  }

  //age
  if (user.age <18) {
    isValid = false;
    errors.push("age must be 18 or older");
  }

  //agreement
  if (!user.agreeToTerms) {
    isValid = false;
    errors.push("AgreeToTerms is false or missing");
  }

  return {isValid, errors};
}

console.log(validateRegistration(user1));
console.log(validateRegistration(user2));

//bonus challenge
function validateArray(users) {
  let output = [];
  users.forEach((element) => {
    if (validateRegistration(element).isValid) {
      output.push(element);
    }
  });
  return output;
}