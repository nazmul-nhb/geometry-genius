/* 
function triangleArea (){
    const baseText = document.getElementById('triangle-base').value;
    const base = parseFloat(baseText); //convert the value to float
    const heightText = document.getElementById('triangle-height').value;
    const height = parseFloat(heightText); //convert the value to float
    const area = 0.5 * base * height;
    
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}

function rectangleArea (){
    const lengthText = document.getElementById('rectangle-length').value;
    const length = parseFloat(lengthText); //convert the value to float
    const widthText = document.getElementById('rectangle-width').value;
    const width = parseFloat(widthText); //convert the value to float
    const area = length * width;
    
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

function parallelogramArea (){
    const baseText = document.getElementById('parallelogram-base').value;
    const base = parseFloat(baseText); //convert the value to float
    const heightText = document.getElementById('parallelogram-height').value;
    const height = parseFloat(heightText); //convert the value to float
    const area = base * height;
    
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}

function rhombusArea (){
    const d1Text = document.getElementById('rhombus-d1').value;
    const d1 = parseFloat(d1Text); //convert the value to float
    const d2Text = document.getElementById('rhombus-d2').value;
    const d2 = parseFloat(d2Text); //convert the value to float
    const area = 0.5 * d1 * d2;
    
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}

function pentagonArea (){
    const pText = document.getElementById('pentagon-p').value;
    const p = parseFloat(pText); //convert the value to float
    const baseText = document.getElementById('pentagon-base').value;
    const base = parseFloat(baseText); //convert the value to float
    const area = 0.5 * p * base;
    
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}

function ellipseArea (){
    const aText = document.getElementById('ellipse-a').value;
    const a = parseFloat(aText); //convert the value to float
    const bText = document.getElementById('ellipse-b').value;
    const b = parseFloat(bText); //convert the value to float
    const area = Math.PI * a * b;
    
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}
 */

// Common Function to Get the Input Values
function getInputValueById(inputFieldId) {
    const inputFieldText = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

// Common Function to Set the Area Values
function setInnerTextById(shapeName, elementId, area) {

    const element = document.getElementById(elementId);
    element.innerHTML = `Area: ${area} cm<sup>2</sup>`;

    const calculatedArea = document.getElementById('area-calculated');
    const li = document.createElement('li');
    li.classList.add('list-decimal');
    li.innerHTML = `The area of the ${shapeName} is ${area} cm<sup>2</sup>`;
    calculatedArea.appendChild(li);

    if (isNaN(area) === true) {
        element.innerText = 'invalid input';
        li.innerText = 'invalid input';
    }
}

function triangleArea() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = (0.5 * base * height);
    setInnerTextById('triangle', 'triangle-area', area);
}

function rectangleArea() {
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = (length * width);
    setInnerTextById('rectangle', 'rectangle-area', area);
}

function parallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = (base * height);
    setInnerTextById('parallelogram', 'parallelogram-area', area);
}

function rhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = (0.5 * d1 * d2);
    setInnerTextById('rhombus', 'rhombus-area', area);
}

function pentagonArea() {
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const area = (0.5 * p * b);
    setInnerTextById('pentagon', 'pentagon-area', area);
}

function ellipseArea() {
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const area = (Math.PI * a * b).toFixed(2);
    setInnerTextById('ellipse', 'ellipse-area', area);
}

