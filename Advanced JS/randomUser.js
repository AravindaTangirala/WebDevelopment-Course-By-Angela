function whoWillPayBill(names) {
  names = ["angela", "aravinda", "kiran", "indiv", "vyom"];
  var random = Math.floor(Math.random() * names.length);
  var user = names[random];
  console.log(user + " will pay for  lunch");
}
whoWillPayBill();
