
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function addSpace(event){ 
    let removedSpaced = event.target.value.split(" ");
    let cardNumber = removedSpaced.join('');
    console.log(cardNumber);
    let spacedCardNumber = cardNumber.match(/.{1,4}/g).join(" ");
    event.target.value = spacedCardNumber;
    setCardNumber(spacedCardNumber);
}

function addSlash(event){ 
    let removedSlash = event.target.value.split("/");
    let cardNumber = removedSlash.join('');
    let spacedCardNumber = cardNumber.match(/.{1,2}/g).join("/");
    event.target.value = spacedCardNumber;
    setDate(spacedCardNumber);
}

function setName(event){
    let div = document.getElementById('user-name');
    div.setAttribute("class", "white-text");
    div.innerHTML =event.target.value;
}

function setCardNumber(value){
    var placeholder = ".... .... .... ....";
    let div = document.getElementById('card-number');
    div.setAttribute("class", "white-text");
    for(let i=0; i<value.length; i++){
      placeholder = placeholder.slice(0, i) 
                    + value[i] 
                    + placeholder.slice(i+1); 
    }
    div.innerHTML =placeholder;
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