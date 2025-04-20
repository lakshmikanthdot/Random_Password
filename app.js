const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}[]{<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  // console.log("lucky", upperCase[0]);
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    // console.log(password);
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);

  //   document.execCommand("copy"); // deprecated not in use

  /* it is another way of copying the text  */

  //   document.contentEditable("copy");
  //   var text_to_copy = document.getElementById("password").innerHTML;
  //   if (!navigator.clipboard) {
  //     // use old commandExec() way
  //   } else {
  //     navigator.clipboard
  //       .writeText(text_to_copy)
  //       .then(function () {
  //         alert("yeah!"); // success
  //       })
  //       .catch(function () {
  //         alert("err"); // error
  //       });
  //   }
}
