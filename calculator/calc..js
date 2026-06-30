const display = document.querySelector('input');
const btns = document.querySelectorAll('button');

let expression = '';

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            expression = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else {
            expression += value;
        }

        display.value = expression;
    });
});