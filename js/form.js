
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}



function setName(event){
    let div = document.getElementById('user-name');
    div.setAttribute("class", "white-text");
    div.innerHTML =event.target.value;
}


function setCardNumber(value){
    let div = document.getElementById('card-number');
    div.setAttribute("class", "white-text");
    for(let i=value.length; i< 18 ; i++){
        if(i%4 == 0){
        value = value + ' ';
        }else{
        value = value + '.';
        }
    }
    div.innerHTML =value;
}

function setDate(value){
    let div = document.getElementById('card-date');
    div.setAttribute("class", "white-text");
    for(let i=value.length; i< 4; i++){
        if(i%2 == 0){
        value = value + '/';
        }else{
        value = value + '.';
        }
    }
    div.innerHTML =value;
}