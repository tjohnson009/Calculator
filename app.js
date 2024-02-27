let DOM = {
    inputElement: document.querySelector('#input'), 
    outputElement: document.querySelector('#output'), 
}; 

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

class Calculator {
    constructor(element) {
        this.element = element; // is this necessary?
        this.input = ''; 
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
    negate() {
        
    }
    clear() {
        for (let key in this) {
            if (key !== this.element) {
                this[key] = ''; 
            }
        }
        calculator.input = "0";
        DOM.inputElement.innerHTML = calculator.input; 
        DOM.outputElement.innerHTML = calculator.output; 
    }
    back() {
        let inputArray = calculator.getPreppedInput(); // array
        if (this.input !== 0) {
            // get the input into an array
            // split on ' ' 
            if (inputArray.includes('back')) {
                // clear the back word and whatever is before the back word
                    // get index of 'back'
                    let index = inputArray.indexOf('back'); 
                    console.log('Before splice:',inputArray);
                    inputArray.splice(index, 1); // deletes the word back
                    console.log('After splice:', inputArray); 
                    // deletes the last item off the input that came before the word back
                    let inputLettersArray = inputArray[0].split(''); 
                    inputLettersArray.splice(inputLettersArray.length - 2, 1);;  
                    let newInput = inputLettersArray.join(''); 
                    this.input = newInput; 
                    DOM.inputElement.innerHTML = newInput; 
                    // this.updateDOM(); 
                // set the input to the corrected input
                // DOM
            }
        }
    }
    updateInput() {
        
    }
    updateDOM() {
        // DOM.inputElement = `${this.a} ${this.operator} ${this.b}`;
        DOM.inputElement.innerHTML = this.input; 
        DOM.outputElement = `${this.output}`; 
    }

    operate() {

    }

    getPreppedInput() {
        return Array.from((this.input).split(' ')); 
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
        if (DOM.inputElement.innerHTML == 0 || DOM.inputElement.innerHTML == '0') {
            DOM.inputElement.innerHTML = ''; 
            calculator.input = ''; 
        }
        calculator.input += this.element.value; 
            DOM.inputElement.innerHTML += this.element.value; 
        if (calculator.getPreppedInput().includes('clear')) {
            calculator.clear(); 
            // console.log(calculator); 
        }
        if (calculator.getPreppedInput().includes('back')) {
            calculator.back(); 
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
