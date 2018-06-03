

var sex;

function valide() {
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
};

var gender;
var stock = JSON.parse(localStorage.getItem("data"));

if (stock.sexe == "Homme") {
    gender = "Monsieur";
} else {
    gender = "Madame";
}

$("#message").html("Bonjour " + gender + " " + stock.nom + " " + stock.prenom );