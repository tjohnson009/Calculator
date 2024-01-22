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
    constructor(element, value) {
        this.element = element; 
        this.value = value; 
    }

    addToInput = () => {
        
    }

    addClickListener(callback) {
        this.element.addEventListener('click', callback)
    }

    addKeypressListener(callback, keyCode) {
        this.element.addEventListener('keypress', () => {
            if (e.target.keyCode === keyCode) {
                callback(); 
            }
        })
    }
}