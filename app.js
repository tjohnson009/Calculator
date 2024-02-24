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

class Button { // perhaps have a number button class that extends button, same with operator
// can get all the buttons on the dom, loop through and create new button instances
    constructor(element, value) {
        this.element = element; 
        this.value = value; 
        // this.callback = callback; 
        this.element.addEventListener('click', (e) => {
            // add to value of button to input f(x) 
            calculator.input += e.target.value; 
            DOM.input.innerHTML += e.target.value; 


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
            console.log(calculator); 
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
let buttons = Array.from(document.querySelectorAll('.calculator-buttons')); 
buttons.forEach(button => {
    // console.log(button); 
    new Button(button, button.value); 
})

DOM.input.addEventListener('change', (e) => {
    console.log('111'); 
})
