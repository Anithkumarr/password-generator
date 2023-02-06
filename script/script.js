const outputEL = document.getElementById("output");
const copyBtn = document.getElementById("btn-copy");
const passwordLengthEl = document.getElementById("length");
const numberEl = document.getElementById("numbers");
const capitalEl = document.getElementById("capital-letters");
const smallEl = document.getElementById("small-letters");
const symbolEl = document.getElementById("symbols");
const formEl = document.getElementById("frm");

copyBtn.addEventListener("click", async () => {
  const password = outputEL.value;

  if (password) {
    await navigator.clipboard.writeText(password);
    alert("copied to clipboard");
  } else {
    alert("there is no password");
  }
});

function generateRandomChar(min, max) {
  const limit = max - min + 1;

  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function numberValue() {
  return generateRandomChar(48, 57);
}

function capitalValue() {
  return generateRandomChar(65, 90);
}

function smallValue() {
  return generateRandomChar(97, 122);
}

function symbolsValue() {
  const symbols = "!@#$%^&*()_'";
  return symbols[Math.floor(Math.random() * symbols.length)];
};



const functionArray=[
    {element:numberEl,
    fun:numberValue},
    {element:capitalEl,
        fun:capitalValue},
        {element:smallEl,
            fun:smallValue},
            {element:symbolEl,
                fun:symbolsValue},

]
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    const passLength=passwordLengthEl.value;

    let generatedPassword='';

    const funArray=functionArray.filter(({element})=>element.checked);



    for (let i = 0; i < passLength; i++) {
        const index=Math.floor(Math.random()*funArray.length);

        const letter = funArray[index].fun();
       generatedPassword+=letter;
        
    }
    outputEL.value=generatedPassword;
});




