function parallelogramArea(){
    const Base =inputValueById('paraBase-input');
    // console.log(Base);
    const height =inputValueById('paraHeight-input')

    const area= Base *  height;
    // console.log(area);  

  innerTextValue('parallelogram-span',area)
  
}
function inputValueById(inputFieldId){
    const parallelograminput=document.getElementById(inputFieldId);
    const parallelogramText=parallelograminput.value;
    const paraBase=parseFloat(parallelogramText);
    parallelograminput.value='';
    // console.log(paraBase);
    return paraBase;

}
function innerTextValue(elementId ,area){
    const innerInput = document.getElementById(elementId);
    innerInput.innerText= area;
}