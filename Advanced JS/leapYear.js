function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.

  var x = year % 4;
  var y = year % 100;
  var z = year % 400;

  if ((x == 0 && y !== 0) || z == 0) {
    console.log("Leap year");
  } else {
    console.log("Not leap year");
  }

  /**************Don't change the code below****************/
}
isLeap(2013);
