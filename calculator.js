function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  }
  
  function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  }
  
  function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  }
  
  function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num2 == 0) {
      document.getElementById("result").innerHTML = "Cannot divide by zero.";
    } else {
      var result = parseFloat(num1) / parseFloat(num2);
      document.getElementById("result").innerHTML = result;
    }
  }
  