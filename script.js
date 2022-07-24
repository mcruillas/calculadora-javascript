var equationArray = [];
var cleared;

function insert(item){
    if (item == 'ap'){
        equationArray.push('(');
    }else if(item == 'fp'){
        equationArray.push(')');
    }else{
    equationArray.push(item);
    }
    var show = equationArray.join("")
    document.getElementById("display").innerHTML= show
    
}

function clearEntry(){
    cleared = equationArray.pop();
    var show2 = equationArray.join("")
    document.getElementById("display").innerHTML= show2
}

function clearAll(){
    equationArray = [];
    var show3 = equationArray.join("")
    document.getElementById("display").innerHTML= show3
}


function equals(){
    var show4 = equationArray.join("");
    var resultado = eval(show4);
    document.getElementById("display").innerHTML= resultado;
    equationArray = [resultado];
    
}