
/*var requestURL = "data.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var formulaire = request.response;
    console.log(formulaire);
    console.log(formulaire.client1);
    console.log(formulaire.client2.nom);

}*/


$.getJSON("data.json", function (json) {
    console.log(json);
});

