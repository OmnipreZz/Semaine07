

var sex;

function valide() {
    console.log("coucou");
    if ($(":input")[3].checked) {
        sex = "Homme";
    } else {
        sex = "Femme";
    }
    var obj = { "nom": $("#firstN").val(), 
                "prenom": $("#lastN").val(),
                "login": $("#userId").val(),
                "sexe": sex,
                "mdp": $("#pass").val(),
                "born": $("#birth").val(),
                "ville": $("#city").val(),
                "email": $("#mail").val(),
                "web": $("#webs").val(),
                "tel": $("#telN").val(),
                "color": $("#col").val(),
                "loisir": $("#hob").val() };
    localStorage.setItem("data", JSON.stringify(obj));
    
};


function get(){
    var stock = localStorage.getItem("data");
    console.log(JSON.parse(stock));
}
