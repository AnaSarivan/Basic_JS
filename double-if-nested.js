let userName = prompt("enter username: ");

if (userName == "PrettUser" || userName == "JohnPi" || userName == "BabyYoda") {
  let smsCode = +prompt("confirm SMS code: ");

  if (smsCode === 12345) {
    console.log(`Welcome ${userName}`);
  } else {
    console.log("Wrong confirmation code!");
  }
} else {
  console.log("Wrong username!");
}
