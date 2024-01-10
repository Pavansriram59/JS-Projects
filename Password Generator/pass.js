let password = document.getElementById("password");

function GeneratePass() {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  let len = 12;
  for (let i = 0; i < len; i++) {
    pass += str.charAt(Math.floor(Math.random() * str.length + 1));
  }
  console.log(pass);
  password.value = pass;
}
