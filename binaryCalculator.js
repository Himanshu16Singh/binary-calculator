var resDiv;
var sumSetted;
var subSetted;
var mulSetted;
var divSetted;
function initialize(){
    resDiv = document.getElementById('res');
    sumSetted = false;
    subSetted = false;
    mulSetted = false;
    divSetted = false;
}

function clearDiv(){
    resDiv.innerHTML = "";
}
function setZero(){
    resDiv.innerHTML += "0";
}
function setOne(){
    resDiv.innerHTML += "1";
}
function setSum(){
    resDiv.innerHTML += "+";
    sumSetted = true;
}
function setSub(){
    resDiv.innerHTML += "-";
    subSetted = true;
}
function setMul(){
    resDiv.innerHTML += "*";
    mulSetted = true;
}
function setDiv(){
    resDiv.innerHTML += "/";
    divSetted = true;
}
function evalResult(){
    var data = String(resDiv.innerHTML);
    
    if(sumSetted){
        sumSetted = false;
        var index = data.indexOf("+");
        resDiv.innerHTML = (eval(parseInt(data.substr(0, index),2) + parseInt(data.substr(index+1),2))).toString(2);
    }else if(subSetted){
        subSetted = false;
        var index = data.indexOf("-");
        resDiv.innerHTML = (eval(parseInt(data.substr(0, index),2) - parseInt(data.substr(index+1),2))).toString(2);
    }else if(mulSetted){
        mulSetted = false;
        var index = data.indexOf("*");
        resDiv.innerHTML = (eval(parseInt(data.substr(0, index),2) * parseInt(data.substr(index+1),2))).toString(2);
    }else if(divSetted){
        divSetted = false;
        var index = data.indexOf("/");
        resDiv.innerHTML = (eval(parseInt(data.substr(0, index),2) / parseInt(data.substr(index+1),2))).toString(2);
    }
}