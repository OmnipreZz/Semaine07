

var sex;

function valide() {
    console.log("coucou");
    if ($(":input")[3].checked) {
        sex = "Homme";
    } else {
        sex = "Femme";
    }
    var obj = { "nom": $("#firstName").val(), 
                "prenom": $("#lastName").val(),
                "login": $("#userId").val(),
                "sexe": sex,
                "mdp": $("#pass").val(),
                "born": $("#birth").val(),
                "ville": $("#city").val(),
                "email": $("#mail").val(),
                "web": $("#web").val(),
                "tel": $("#tel").val(),
                "color": $("#color").val(),
                "loisir": $("#hob").val() };
    localStorage.setItem("data", JSON.stringify(obj));
    console.log("data")
    
};



var stock = JSON.parse(localStorage.getItem("data"));

$("#message").html("Bonjour " + stock.nom + " " + stock.prenom );