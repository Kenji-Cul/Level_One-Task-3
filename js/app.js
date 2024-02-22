// Scripts

const celsiusField = document.querySelector("#celsius");
const kelvinField = document.querySelector("#kelvin");
const degree = document.querySelector("#degree");
const convertBtnOne = document.querySelector("#convert-btn");
const convertBtnTwo = document.querySelector("#convert-btn2");
const tempType = document.querySelector("#temp-type");

// Window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    kelvinField.innerHTML = "";
})


convertBtnOne.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // add loading feature
    convertBtnOne.innerHTML= "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
    setTimeout(() => {
        convertBtnOne.innerHTML = "<span>Celsius Converter</span>";
    }, 1000);
})

convertBtnTwo.addEventListener("click", (e) => {
    e.preventDefault();
    convertToKelvin();

    // add loading feature
    convertBtnTwo.innerHTML= "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
    setTimeout(() => {
        convertBtnTwo.innerHTML = "<span>Kelvin Converter</span>";
    }, 1000);
})

function convertToCelsius(){
   let inputValue = degree.value;
   
   setTimeout(() => {
    if(tempType.value === "fahrenheit"){
        const fahrenheitToCelsius = (inputValue - 32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    } 
      else if(tempType.value === "kelvin"){
         const kelvinToCelsius = inputValue - 273.15;
          celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
      }
   }, 1200);
}


function convertToKelvin(){
    let inputValue = degree.value;
    
    setTimeout(() => {
     if(tempType.value === "fahrenheit"){
         const fahrenheitToKelvin = (inputValue - 32) * (5/9) + 273.15;
         kelvinField.innerHTML = `${fahrenheitToKelvin.toFixed(3)}K`;
     } 
       else if(tempType.value === "celsius"){
          const celsiusToKelvin = 273.15 + (+inputValue);
           kelvinField.innerHTML = `${celsiusToKelvin.toFixed(2)}K`;
       }
    }, 1200);
 }