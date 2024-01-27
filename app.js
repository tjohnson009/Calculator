let DOM = {

}; 

class Calculator {
    constructor(element) {
        this.element = element; 
        this.input = '';
        this.output = ''; 
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
}

class Button {
    constructor(element, value, callback) {
        this.element = element; 
        this.value = value; 
        this.callback = callback; 
    }

    addToInput = () => {
        
    }

    addClickListener() {
        this.element.addEventListener('click', this.callback)
    }

    addKeypressListener( keyCode) {
        this.element.addEventListener('keypress', () => {
            if (e.target.keyCode === keyCode) {
                this.callback(); 
            }
        })
    }
}

const clearDelete = () => {
    // clear input
    // clear output
    // clear "a"
    // clear "b"
    // cl;ear operator

}

const addDecimal = () => {

}

let calculator = new Calculator(document.getElementById('calculator'))
