console.log('closure');
function sqoor(init) {
  var obj = {
    balance: init,
    withdraw: function (money) {
      balance = balance - money;
      return 'your money now ' + balance;
    },
    show: function () {
      return balance;
    }
  };
  return obj;
}

var sqoor1 = sqoor(100);
var sqoor2 = sqoor(200);

/*
// problems in closures adding methods: 
1- we need to put the vairable inside the object to arrange the code
2- we copy both objects what we return and put it inside new variable and this consume the mmory.
3 - important in clocure:
  a. put the variable that outside the object you return inside it.
  b. inside this object that you return if you need to reach the variable 3.a you can use the same name of the object then the name of this variable as a key.
   

*/

function sqoorVersion2(init) {
  var balance = init
  var obj = {
    show: function () {
      return balance;
    }
  }
  obj.withdraw = function (money) {
    balance = balance - money;
    return 'your money now ' + balance;
  }
  return obj;
}

function oop(init) {
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













function createBankAccount(ini) {
  var balance = ini;
  var obj = {
    "with": function w(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return 'money: $ ' + amount + "  balance: " + balance;
      }
      return 'Insufficient funds.';
    },
    "show": function s() {
      return balance;
    }
  }
  return obj
}

var account1 = createBankAccount(100)
var account2 = createBankAccount(200)














function Counter(initial) {
  var value = initial;
  var counter = {};
  counter.up = function () {
    value = value + 1;
    return value;
  }
  counter.down = function () {
    value = value - 1;
    return value;
  }
  counter.show = function () {
    return value;
  }
  return counter
}

var myCounter = Counter(0);
var liftoff = Counter(10);













function Counter2(initial) {
  var counter = {};
  counter.value = initial;
  counter.up = up;
  counter.down = down;
  counter.show = show;
  return counter
}
var up = function () {
  console.log(this)
  this.value = this.value + 1;
  return this.value;
}
var down = function () {
  this.value = this.value - 1;
  return this.value;
}
var show = function () {
  return this.value;
}
var myCounter2 = Counter2(0);
var liftoff2 = Counter2(10);



















var note = "We will review the closuer and adding method so focus \nthen we will improve it step by step ok "
// console.log(note)