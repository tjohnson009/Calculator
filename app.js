let DOM = {
    input: document.querySelector('#input'), 
    output: document.querySelector('#output'), 
}; 

class Calculator {
    constructor(element) {
        this.element = element; 
        this.input = ''; // listen for change here to update dom input
        this.output = '';  // ""
        this.a = ''; 
        this.operator = ''; 
        this.b = ''; 
    }
    add = () => {
        return this.a + this.b; 
    }
    subtract = () => {
        return this.a - this.b; 
    };
    multiply = () => {
        return this.a * this.b; 
    }
    divide = () => {
        if (this.b !== 0) {
            return this.a / this.b;  
        } else {
            return `Error!`; 
            // clear everything after this. 
            // output = error
        }
    }
    updateInput = (newInput) => {
        return this.input = newInput; 
    }
    updateOutput = () => {

    }
    addDecimal = () => {
        if (!Array.from(this.input).split('').includes('.')) {
            this.input += '.';
        }
    }
}

class Button { // can get all the buttons on the dom, loop through and create new button instances
    constructor(element, value, callback) {
        this.element = element; 
        this.value = value; 
        // this.callback = callback; 
        this.element.addEventListener('click', (e) => {
            // add to input f(x)
            if (e.target.value !== "solve") {

            } else {
                // operate f(x)
                // if not enough data => error?
            }
        })
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
