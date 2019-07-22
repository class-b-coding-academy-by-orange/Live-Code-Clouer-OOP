function sqoorOOP(init) {
  var obj = {
    balance: init,
    withdraw: function (money) {
      obj.balance = obj.balance - money;
      return 'your money now ' + obj.balance;
    },
    show: function () {
      return obj.balance;
    }
  };
  return obj;
}

// you need to put the variable before the function so you can reach it

var withdrawA = function (money) {
  // obj.balance = obj.balance - money;
  // return 'your money now ' + obj.balance;
  return money;
}

var showA = function () {
  console.log(this);
  return this.balance;
  // return 1;
}

function sqoorOOPVersion1(init) {
  var obj = {
    balance: init,
    withdraw: withdrawA,
    show: showA
  };
  return obj;
}

var sqoorOOP3 = sqoorOOPVersion1(300);
var sqoorOOP4 = sqoorOOPVersion1(400);


/*
// dont forget to write the notes about the OOP

1- put the function outside
2- put instead of these functions the name of the varible outside thats have the function (cutPizaa2)
3- dont forget to put the varible before the fucntion that you did in OOP
4- add to any key I want to reach it the keyword this before it (checkSize)=>this.checkSize
*/



/*
// exercise:
solve it one time using OOP and one time using closure
 create a function called makePizza
 that takes one parameter this size of the pizza
 and inside it two funtions:
  a. called cutPizza that takes one parameter to decrease the size of the pizza
  and return the new size 
  b. function called checkSize that returns the size of the pizza.

*/

function makePizzaClosure(size1) {
  var obj = {
    size: size1,
    cutPizza: function (x) {
      obj.size = obj.size - x;
      return 'the new size = ' + obj.size;
    },
    checkSize: function () {
      return obj.size;
    }
  }
  return obj;
}

var pizza1 = makePizzaClosure(4);


var cutPizza2 = function (x) {
  this.size = this.size - x;
  return 'the new size = ' + this.size;
}
var checkSize2 = function () {
  return this.size;
}

function makePizzaOPP(size1) {
  var obj = {
    size: size1,
    cutPizza: cutPizza2,
    checkSize: checkSize2
  }
  return obj;
}

var pizza2 = makePizzaOPP(5)