let fromCur = document.getElementById("fromCur");
let toCur = document.getElementById("toCur");
let amountField = document.getElementById("amountFrom")
let conversionField = document.getElementById("convertedAmount");
let supportedCurrencies = [];
let api_key = '935c17c7d466ae0f0d04bd06';
let last_rate;
function getSupported(){
    let url=`https://v6.exchangerate-api.com/v6/${api_key}/codes`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json'; 

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let resp = xhr.response;
            supportedCurrencies = resp["supported_codes"];
            supportedCurrencies.forEach(pair => {
                const [shortcode, description] = pair;

                const option1 = document.createElement("option");
                option1.value = shortcode;
                option1.textContent= description;
                fromCur.appendChild(option1);

                const option2 = document.createElement("option");
                option2.value = shortcode;
                option2.textContent= description;
                toCur.appendChild(option2);
            })

        } else {
            console.log('An error occurred');
        }
    };

    xhr.onerror = function() {
        console.log('An error occurred');
    };

    xhr.send();

}

getSupported();

function convert(){
    let code1 = fromCur.value;
    let code2 = toCur.value;
    let amount = amountField.value;
    let url=`https://v6.exchangerate-api.com/v6/${api_key}/pair/${code1}/${code2}/${amount}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json'; 

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let resp = xhr.response;
            conversionField.value = resp.conversion_result;
            last_rate = resp.conversion_rate;
        } else {
            console.log('An error occurred');
        }
    };

    xhr.onerror = function() {
        console.log('An error occurred');
    };

    xhr.send();
}

let convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(isNaN(amountField.value)){
        alert("Must have a valid amount");
        return false;
    }
    convert();
})