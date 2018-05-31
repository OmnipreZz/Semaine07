
/*var req = new XMLHttpRequest();
req.open('GET', "data.json");
req.responseType = 'json';
req.send();
req.onload = function () {
    var form = req.response;
    console.log(form);
    console.log(form.client1);
    console.log(form.client2.nom);
    $.each(form, function (key, val) {
        var option = $("<option value=" + val + ">" + val.nom + "</option>");
        option.click(function () {
            addHTML(val);
        })
        $("#select").append(option);
    })
    function addHTML(val) {
        var client = $("<div></div>");
        $.each(val, function (key, val) {
            client.append("<p>" + key + " : " + val + "</p>");
        });
        $(".message").html(client)
    }
}*/


/*$.getJSON("data.json", function(form) {
    console.log(form);
    console.log(form.client1);
    console.log(form.client2.nom);
});*/

/*var url = "data.json";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var formulaire = JSON.parse(xhr.responseText);
        console.log(formulaire);
        console.log(formulaire.client1);
        console.log(formulaire.client2.nom);
    }
};*/

/*document.addEventListener("DOMContentLoaded", function () {
        req = new XMLHttpRequest();
        req.open("GET", "data.json", true);
        req.send();
        req.onload = function () {
            form = JSON.parse(req.responseText);
            console.log(form);
        };
});*/


var req = new XMLHttpRequest();
req.open("GET", "data.json", true);
req.send();
req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
        var form = JSON.parse(req.responseText);
        var html = "";
        form.forEach(function(val) {
            html += "<option value=" + val + ">" + val.nom + "</option>"
        });
        document.getElementsByClassName("message")[0].innerHTML = html;
};
};




