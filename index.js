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
        this.element = element; 
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
    addDecimal() {
        if (this.operator === '') { // no operator
            console.log('no operator - A', (this.a).split('')); 
            if (!(((this.a).split('')).includes('.'))) {
                    this.a += '.'; 
            } else {
                console.log('Already 1 decimal'); 
            }
        } else {
            console.log(`operator = ${this.operator} - adding decimal to B`)
                if (!(((this.b).split('')).includes('.'))) {
                    this.b += '.'; 
            }
        }
    }
    negate() {
        if (this.a === '') {
                console.log('negating A'); 
                this.a = '-'; 
                return; 
            } else if (this.operator === '') {
                this.a = parseFloat(this.a) * -1; 
            } else if (this.b === '' && this.operator !== '') {
                this.b = '-'; 
                return; 
            } else {
                console.log('negating B'); 
                this.b = parseFloat(this.b) * -1; 
            }
            this.updateInput(); 
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
                    inputLettersArray.splice(inputLettersArray.length - 1, 1); 
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
        this.input = `${this.a}${this.operator}${this.b}`;
    }
    updateDOM() {
        // DOM.inputElement = `${this.a}${this.operator}${this.b}`;
        DOM.inputElement.innerHTML = this.input; 
        DOM.outputElement.innerHTML = `${this.output}`; // why template literal?
    }
    operate() {

    }

    // Getters
    getPreppedInput() {
        return ((this.input).split(' ')); 
    }

    // updateInput = (newInput) => {
    //     return this.input = newInput; 
    // }
    // updateOutput = () => {
    // }
}

class Button { // perhaps have a number button class that extends button, same with operator
// can get all the buttons on the dom, loop through and create new button instances
    constructor(element, value) {
        this.element = element; 
        this.value = value; 
        this.callback = this.handleClick; 
        this.element.addEventListener('click', (e) => {
            // console.log(`You clicked ${this.value}.`); 
            this.callback(this.value); 
        }); 
    }
        
    handleClick(value) {
    // console.log(`You clicked the ${this.value} button.`); // working properly
        // remove the 0 placeholder
        if (DOM.inputElement.innerHTML == 0 || DOM.inputElement.innerHTML == '0') {
            DOM.inputElement.innerHTML = ''; 
            calculator.input = ''; 
        }
        // adds value to the calculator input 
        if (value === '.') {
            calculator.addDecimal(); 
            calculator.updateInput(); 
        } else if (value === '-1') {
            calculator.negate(); 
            // calculator.updateInput(); 
        } else {
            calculator.input += this.element.value; 
        }
        // calculator.updateInput(); 
        calculator.updateDOM(); 
        // clear button handling
        if (calculator.getPreppedInput().includes('clear')) {
            calculator.clear(); 
            // console.log(calculator); 
        }
        // back button handling
        if (calculator.getPreppedInput().includes('back')) {
            calculator.back(); 
        }
        console.log(calculator); 
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
        // console.log(`You clicked the number ${this.value} button.`) // works properly
        this.addToAorB(); 
        calculator.updateInput(); 
        calculator.updateDOM(); 
    }

    addToAorB() {
        // if (e.target.attributes["data-type"].value === 'number') {
            if (calculator.operator === '') {
                calculator.a += this.value; 
                console.log(calculator); 
            } else {
                calculator.b += this.value; 
                console.log(calculator); 
            }
        // }
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
        if (calculator.a === '') {
            console.log('No number chosen.'); 
            return; 
        }
        if (calculator.b !== '') {
            console.log(`Operator already chosen: ${calculator.operator}`); 
            return; 
        }
        console.log(`You clicked the ${this.value} operator button.`); 
            calculator.operator = this.value; // limits to one operator 
            calculator.updateInput(); 
            calculator.updateDOM(); 
    }

}

let calculator = new Calculator(document.getElementById('calculator')); 
let numbers = Array.from(document.querySelectorAll('.calculator-buttons[data-type=number]')); 
numbers.forEach(number => {
    number.classList.add('number'); 
    new NumberButton(number, number.value); 
    
})
let operators = Array.from(document.querySelectorAll('.calculator-buttons[data-type=operator]'))
operators.forEach(operator => {
    operator.classList.add('operator'); 
    new OperatorButton(operator, operator.value); 
})

let otherButtons = Array.from(document.querySelectorAll('.calculator-buttons:not(.number):not(.operator)'))
otherButtons.forEach(other => {
    // other.classList.add('operator'); 
    new Button(other, other.value); 
})