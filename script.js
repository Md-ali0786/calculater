let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerText;

        if (btnText === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (btnText === 'AC') {
            string = "";
            input.value = string;
        } else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
