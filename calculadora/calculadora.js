document.addEventListener('DOMContentLoaded', () => {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const calculatorKeys = document.querySelector('.calculator-keys');

    let prevValue = '';
    let operator = '';
    let currentValue = '0';
    let waitingForSecondOperand = false;

    function updateScreen(value) {
        calculatorScreen.value = value;
    }

    function handleNumber(number) {
        if (waitingForSecondOperand === true) {
            currentValue = number;
            waitingForSecondOperand = false;
        } else {
            currentValue = currentValue === '0' ? number : currentValue + number;
        }
        updateScreen(currentValue);
    }

    function handleDecimal(dot) {
        if (waitingForSecondOperand === true) {
            currentValue = '0.';
            waitingForSecondOperand = false;
            updateScreen(currentValue);
            return;
        }
        
        if (!currentValue.includes(dot)) {
            currentValue += dot;
        }
        updateScreen(currentValue);
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentValue);

        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
        }

        if (prevValue === '') {
            prevValue = inputValue;
        } else if (operator) {
            const result = calculate(prevValue, inputValue, operator);
            currentValue = `${parseFloat(result.toFixed(7))}`;
            prevValue = result;
        }

        waitingForSecondOperand = true;
        operator = nextOperator;
        updateScreen(currentValue);
    }

    function calculate(firstOperand, secondOperand, op) {
        if (op === '+') {
            return firstOperand + secondOperand;
        }
        if (op === '-') {
            return firstOperand - secondOperand;
        }
        if (op === '*') {
            return firstOperand * secondOperand;
        }
        if (op === '/') {
            return firstOperand / secondOperand;
        }
        return secondOperand;
    }

    function resetCalculator() {
        prevValue = '';
        operator = '';
        currentValue = '0';
        waitingForSecondOperand = false;
        updateScreen(currentValue);
    }

    calculatorKeys.addEventListener('click', (event) => {
        const { target } = event; 
        const value = target.value;

       
        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperator(value);
                break;
            case '=':
                handleOperator('='); 
                operator = '';
                break;
            case '.':
                handleDecimal(value);
                break;
            case 'clear':
                resetCalculator();
                break;
            default:
            
                if (Number.isFinite(parseFloat(value))) {
                    handleNumber(value);
                }
                break;
        }
    });

    
    updateScreen(currentValue);
});