const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보
const buttons = document.querySelector('.buttons'); // buttons 엘리먼트와, 그 자식 엘리먼트의 정보

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보
const operator = document.querySelector('.operator'); // operator 엘리먼트와, 그 자식 엘리먼트의 정보
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보
const calculatedResult = document.querySelector('.result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보
const display = document.querySelector('.displayNum'); // displayNum 엘리먼트 정보
let firstNum, operatorForAdvanced, previousKey, previousNum;

// n1과 n2를 operator에 따라 계산하는 함수
function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === '+') {
    result = Number(n1) + Number(n2);
  }
  if (operator === '-') {
    result = Number(n1) - Number(n2);
  }
  if (operator === '*') {
    result = Number(n1) * Number(n2);
  }
  if (operator === '/') {
    result = Number(n1) / Number(n2);
  }

  return String(result);
}


  
  
  
  buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수
  
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클래스 정보
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보
    const buttonContainerArray = buttons.children;
  
  
    if (target.matches('button')) {
      for (let i = 0; i < buttonContainerArray.length; i++) {
        const childrenArray = buttonContainerArray[i].children;
        for (let j = 0; j < childrenArray.length; j++) {
          childrenArray[j].classList.remove('isPressed');
        }
      }
  
      if (action === 'number') {
        if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
          display.textContent = buttonContent;
        } else {
          display.textContent = display.textContent + buttonContent;
        }
        previousKey = 'number';
      }
  
      if (action === 'operator') {
        target.classList.add('isPressed');
        if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
          display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
        }
        firstNum = display.textContent;
        operatorForAdvanced = buttonContent;
        previousKey = 'operator';
      }
  
      if (action === 'decimal') {
        if (!display.textContent.includes('.') && previousKey !== 'operator') {
          display.textContent = display.textContent + '.';
        } else if (previousKey === 'operator') {
          display.textContent = '0.';
        }
        previousKey = 'decimal';
      }
  
      if (action === 'clear') {
        firstNum = undefined;
        operatorForAdvanced = undefined;
        previousNum = undefined;
        previousKey = 'clear';
        display.textContent = '0';
      }
  
      if (action === 'calculate') {
        if (firstNum) {
          if (previousKey === 'calculate') {
            display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
          } else {
            previousNum = display.textContent;
            display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
          }
        }
        previousKey = 'calculate';
      }


    }
  });
  