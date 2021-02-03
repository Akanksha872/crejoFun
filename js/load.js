fetch("./card.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("creditcard").innerHTML = data;
});

fetch("./cardform.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("cardform").innerHTML = data;
});