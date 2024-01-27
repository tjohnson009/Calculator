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

    add = (a, b) => {
        return a + b; 
    }

    subtract = (a, b) => {
        return a - b; 
    };

    multiply = (a, b) => {
        return a * b; 
    }

    divide = (a, b) => {
        if (b !== 0) {
            return a / b;  
        } else {
            return `Error!`; 
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

}

const addDecimal = () => {

}
