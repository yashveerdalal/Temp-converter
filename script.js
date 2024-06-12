const  textbox = document.getElementById("textbox");
const  flexRadioDefault1 = document.getElementById("flexRadioDefault1");
const  flexRadioDefault2 = document.getElementById("flexRadioDefault2");
const  result = document.getElementById("result");
let temp  ;


function convert(){

if (flexRadioDefault1.checked){

   temp = Number(textbox.value);
   temp = (temp * 9/5) + 32;
   result.textContent = `${temp}°F`;





}
else if(flexRadioDefault2.checked){

    temp = Number(textbox.value);
    temp = (temp -  32) * 5/9 ;
    result.textContent = `${temp}°C`;
 
}



}