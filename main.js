let calcultor_ui = document.getElementById ("Calculator");

calcultor_ui.innerHTML =`
<input type="text" id="displayInput" readonly>
            <div id="keys">
                <button onclick="display('+')" class="oper">+</button>
                <button onclick="display('7')">7</button> 
                <button onclick="display('8')">8</button>
                <button onclick="display('9')">9</button>
                <button onclick="display('-')" class="oper">-</button>
                <button onclick="display('4')">4</button>
                <button onclick="display('5')">5</button>
                <button onclick="display('6')">6</button>
                <button onclick="display('*')" class="oper">*</button>
                <button onclick="display('1')">1</button>
                <button onclick="display('2')">2</button>
                <button onclick="display('3')">3</button>
                <button onclick="display('/')" class="oper">/</button>
                <button onclick="display('0')">0</button>
                <button onclick="display('.')">.</button>
                <button id ="calulate">=</button>
                <button id="clear" class="oper">C</button>
            </div>

            `

let styleOfCalculator = document.createElement("style");
styleOfCalculator.innerHTML = `
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(0, 0%, 95%);
}
#Calculator {
    font-family: Arial, Helvetica, sans-serif;
    background-color: hsl(0, 0%, 15%);
    border-radius: 15px;
    max-width: 500px;
    overflow: hidden;
}
#displayInput {
    width: 100%;
    padding: 20px;
    text-align: left;
    border: none;
    background-color: hsl(0, 0%, 20%);
    color: white;
    font-size: 2rem;
}
#keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 25px;
}
.oper {
    background-color: hsl(35, 100%, 55%);
}
.oper:hover {
    background-color: hsl(35, 100%, 65%);
}
.oper:active {
    background-color: hsl(35, 100%, 75%);
}
button {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50px;
    border: none;
    background-color: hsl(0, 0%, 30%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
}
button:hover {
    background-color: hsl(0, 0%, 40%);
}
button:active {
    background-color: hsl(0, 0%, 50%);
}

`
document.head.appendChild(styleOfCalculator);

// Programe of calculator 

const displayInput = document.getElementById("displayInput");

 function display(input){
 displayInput.value +=input
 }

 const clearBtn = document.getElementById("clear");
 clearBtn.addEventListener("click" , () =>{
    console.log("help");
           displayInput.value = "";
 })

let calulate = document.getElementById("calulate")
calulate.addEventListener("click", () =>{
    try {
        displayInput.value = eval(displayInput.value)
    } catch (error) {
        displayInput.value = "Error"
    }
})