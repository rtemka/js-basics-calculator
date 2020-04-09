const DEFAULT_RESULT = 0;
let currentResult = DEFAULT_RESULT;
let logEntries = [];
addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DEVIDE"));

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function calculateResult(calculateType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculateType != "ADD" &&
      calculateType != "SUBTRACT" &&
      calculateType != "MULTIPLY" &&
      calculateType != "DEVIDE") ||
    enteredNumber === 0
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathType;
  if (calculateType === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathType = "+";
  } else if (calculateType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathType = "-";
  } else if (calculateType === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    mathType = "*";
  } else if (calculateType === "DEVIDE") {
    currentResult = currentResult / enteredNumber;
    mathType = "/";
  }

  createAndWriteOutput(mathType, initialResult, enteredNumber);
  writeToLog(calculateType, initialResult, enteredNumber, currentResult);
}

function writeToLog(operatorIdentifier, prevResult, number, result) {
  const logEntry = {
    operation: operatorIdentifier,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// function add() {
//   calculateResult("ADD");
// }

// function subtract() {
//   calculateResult("SUBTRACT");
// }

// function multiply() {
//   calculateResult("MULTIPLY");
// }

// function devide() {
//   calculateResult("DEVIDE");
// }
