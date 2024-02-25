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

    updateInput = (newInput) => {
        return this.input = newInput; 
    }
    updateOutput = () => {

    }
}

class Button { // perhaps have a number button class that extends button, same with operator
// can get all the buttons on the dom, loop through and create new button instances
    constructor(element, value) {
        this.element = element; 
        this.value = value; 
        // this.callback = callback; 
    }
        
    handleClick(value) {
        calculator.input += value; 
        DOM.input.innerHTML = this.input; 
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

    addToInput = () => {
        
    }

    // addClickListener() {
    //     this.element.addEventListener('click', this.callback)
    // }

    // addKeypressListener(keyCode) {
    //     this.element.addEventListener('keypress', () => {
    //         if (e.target.keyCode === keyCode) {
    //             this.callback(); 
    //         }
    //     })
    // }


class Number extends Button {
    constructor(element, value) {
        super(element, value);
    }

    handleClick() {
        if (calculator.operator === "") {
            calculator.a += this.value; 
            console.log(calculator); 
        }
    }

    addToAorB(e) {
        if (e.target.attributes["data-type"].value === 'number') {
            console.log(e); 
            // if (calculator.operator === '') {
            //     calculator.a += e.target.value; 
            // }
        }
    }
}

const clearDelete = () => {
    // clear input
    DOM.input = ''; 
    // clear output
    DOM.output = ''; 
    // clear "a"
    // clear "b"
    // clear operator
}


let calculator = new Calculator(document.getElementById('calculator'))
let numbers = Array.from(document.querySelectorAll('.calculator-buttons[data-type=number]')); 
numbers.forEach(number => {
    new Number(number, number.value); 
    console.log(number); 
    // new Button(button, button.value); 
    number.addEventListener('click', e => console.log(e))
    
})

DOM.input.addEventListener('onchange', (e) => {
    console.log('111'); 
})
