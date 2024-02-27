let DOM = {
    input: document.querySelector('#input'), 
    output: document.querySelector('#output'), 
}; 

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

class Calculator {
    constructor(element) {
        this.element = element; // is this necessary?
        this.input = ''; // listen for change here to update dom input
        this.output = '';  // ""
        this.a = ''; 
        this.operator = ''; 
        this.b = ''; 
    }
    add() {
        return this.a + this.b; 
    }
    subtract() {
        return this.a - this.b; 
    };
    multiply() {
        return this.a * this.b; 
    }
    divide() {
        if (this.b !== 0) {
            return this.a / this.b;  
        } else {
            return `Error!`; 
            // clear everything after this. 
            // output = error
        }
    }
    percent(number) {
        return number * .01; 
    }
    addDecimal(number) {
        if (!Array.from(number).split('').includes('.')) {
            this.input += '.';
        }
    }
    clearDelete() {
        // // clear input
        // DOM.input = ''; 
        // // clear output
        // DOM.output = ''; 
        // // clear "a"
        // this.a = ''
        // // clear "b"
        // this.b = ''
        // // clear operator
        // this.operator = ''
        for (let key in this) {
            if (key !== this.element) {
                this[key] = ''; 
            }
        }
        calculator.input = 0;
        DOM.input.innerHTML = calculator.input; 
        DOM.output.innerHTML = calculator.output; 

    }
    updateDisplay() {
        DOM.input = `${this.a} ${this.operator} ${this.b}`;
        DOM.output = `${this.output}`; 
    }

    operate() {

    }

    // updateInput = (newInput) => {
    //     return this.input = newInput; 
    // }
    // updateOutput = () => {
    // }
}

class Button { // perhaps have a number button class that extends button, same with operator
// can get all the buttons on the dom, loop through and create new button instances
    constructor(element, value, callback) {
        this.element = element; 
        this.value = value; 
        this.element.addEventListener('click', (e) => {
            // console.log(`You clicked ${this.value}.`); 
            this.callback(this.value); 
        }); 
        this.callback = this.handleClick; 
    }
        
    handleClick() {
        // console.log(`You clicked the ${this.value} button.`); // working properly
        calculator.input += this.element.value; 
        DOM.input.innerHTML += this.element.value; 
        if (Array.from((calculator.input).split(' ')).includes('clear')) {
            calculator.clearDelete(); 
        }
        console.log(calculator); 
        // console.log(Array.from((calculator.input).split(' '))); 
    }

    // this.element.addEventListener('click', (e) => {
            // add to value of button to input f(x) 

            // if (e.target.attributes["data-type"].value === 'number' && calculator.operator === '') {
            //     calculator.a += e.target.value; 
            //     calculator.input += e.target.value; 
            //     DOM.input.innerHTML += e.target.value;
            // } else if (e.target.attributes["data-type"].value === "operator" && calculator.a === '') {
            //     calculator.input = ''; 
            //     DOM.input.innerHTML = '';  
            // } else if (e.target.attributes["data-type"].value === "operator" && calculator.a !== '') {
            //     calculator.operator += e.target.value; 
            // } else if (e.target.attributes["data-type"].value === "operator" && calculator.operator !== '') {    
            // }
    // })
}

class NumberButton extends Button {
    constructor(element, value) {
        super(element, value);
        this.callback = () => {
            // console.log(`NumberButton callback`); 
            this.handleClick(); 
        }
    }

    handleClick() {
        console.log(`You clicked the number ${this.value} button.`)
    }

    addToAorB(e) {
        if (e.target.attributes["data-type"].value === 'number') {
            // console.log(e); 
            // if (calculator.operator === '') {
            //     calculator.a += e.target.value; 
            // }
        }
    }
}

class OperatorButton extends Button {
    constructor(element, value) {
        super(element, value);
        this.callback = () => {
            // console.log(`NumberButton callback`); 
            this.handleClick(); 
        }
    }

    handleClick() {
        console.log(`You clicked the ${this.value} operator button.`)
    }

}

let calculator = new Calculator(document.getElementById('calculator')); 
let numbers = Array.from(document.querySelectorAll('.calculator-buttons[data-type=number]')); 
numbers.forEach(number => {
    number.classList.add('number'); 
    new NumberButton(number, number.value); 
    // console.log(number); 
    // new Button(button, button.value); 
    
})
let operators = Array.from(document.querySelectorAll('.calculator-buttons[data-type=operator]'))
operators.forEach(operator => {
    operator.classList.add('operator'); 
    new OperatorButton(operator, operator.value); 
})

let otherButtons = Array.from(document.querySelectorAll('.calculator-buttons:not(.number):not(.operator)'))
otherButtons.forEach(other => {
    other.classList.add('operator'); 
    new Button(other, other.value); 
})
// DOM.input.addEventListener('onchange', (e) => {
//     console.log('111'); 
// })
