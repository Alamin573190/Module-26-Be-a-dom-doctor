function triangleArea(){
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    triangleBaseInput.value='';
    // console.log(base);

    // triagle-height
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    triangleHeightInput.value='';
    // console.log(height);


    // calculate area
    const area= 0.5 * base * height;
    console.log(area);

    const triangleSpanArea = document.getElementById('triangle-span');
    triangleSpanArea.innerText = area;
}