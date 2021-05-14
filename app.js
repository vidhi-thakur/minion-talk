var userInput = document.querySelector(".txt_input");
var btnTranslate = document.querySelector("#btn_input");
var userOutput = document.querySelector(".txt_output");

var url = "https://api.funtranslations.com/translate/groot.json"

function generateUrl(text) {
    return url+"?text="+text;
}

function errorhandler(error) {
    alert("Something went wrong with server!")
}

function process() {
    // var inputText = userInput.value
    fetch(generateUrl(userInput.value)).then(response => response.json()).then(json => {
        var displayOutput = json.contents.translated
        userOutput.innerText = displayOutput
    }).catch(errorhandler)
    
}

btnTranslate.addEventListener("click",process)