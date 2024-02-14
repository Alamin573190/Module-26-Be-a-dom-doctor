function rectangleArea(){
    const rectangleWidthInput=document.getElementById('rectangle-width');
    const triangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(triangleWidthText);
    rectangleWidthInput.value='';
    // console.log(width);

    // rectangle-width
    const rectangleLengthInput=document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length= parseFloat(rectangleLengthText);
    rectangleLengthInput.value='';
    // console.log(length);


    // calculate area
    const area= width * length;
    console.log(area);

    const rectangleSpanArea = document.getElementById('rectangle-span');
    rectangleSpanArea.innerText = area;
}