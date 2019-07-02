var temica = localStorage.getItem("temaIgre");
var nivojcic = localStorage.getItem("nivoIgre");
var starWars = ["./Resources/StarWars/sw1.jpg",
                "./Resources/StarWars/sw2.jpg",
                "./Resources/StarWars/sw3.jpg",
                "./Resources/StarWars/sw3.jpg",
                "./Resources/StarWars/sw4.jpg",
                "./Resources/StarWars/sw5.jpg",
                "./Resources/StarWars/sw6.jpg",
                "./Resources/StarWars/sw7.jpg",
                "./Resources/StarWars/sw8.jpg",
                "./Resources/StarWars/sw9.jpg",
                "./Resources/StarWars/sw10.jpg",
                "./Resources/StarWars/sw11.jpg",
                "./Resources/StarWars/sw12.jpg",
                "./Resources/StarWars/sw13.jpg",
                "./Resources/StarWars/sw14.jpg",
                "./Resources/StarWars/sw15.jpg",
                "./Resources/StarWars/sw16.jpg",
                "./Resources/StarWars/sw17.jpg",
                "./Resources/StarWars/sw18.jpg",
                "./Resources/StarWars/sw19.jpg",
                "./Resources/StarWars/sw20.jpg"];
var LOTR =     ["./Resources/LordOfTheRings/LOTR1.jpg",
                "./Resources/LordOfTheRings/LOTR2.jpg",
                "./Resources/LordOfTheRings/LOTR3.jpg",
                "./Resources/LordOfTheRings/LOTR3.jpg",
                "./Resources/LordOfTheRings/LOTR4.jpg",
                "./Resources/LordOfTheRings/LOTR5.jpg",
                "./Resources/LordOfTheRings/LOTR6.jpg",
                "./Resources/LordOfTheRings/LOTR7.jpg",
                "./Resources/LordOfTheRings/LOTR8.jpg",
                "./Resources/LordOfTheRings/LOTR9.jpg",
                "./Resources/LordOfTheRings/LOTR10.jpg",
                "./Resources/LordOfTheRings/LOTR11.jpg",
                "./Resources/LordOfTheRings/LOTR12.jpg",
                "./Resources/LordOfTheRings/LOTR13.jpg",
                "./Resources/LordOfTheRings/LOTR14.jpg",
                "./Resources/LordOfTheRings/LOTR15.jpg",
                "./Resources/LordOfTheRings/LOTR16.jpg",
                "./Resources/LordOfTheRings/LOTR17.jpg",
                "./Resources/LordOfTheRings/LOTR18.jpg",
                "./Resources/LordOfTheRings/LOTR19.jpg",
                "./Resources/LordOfTheRings/LOTR20.jpg"];
var dupliNiz = [];
document.body.onload = mesanjeKarata("LOTR", "3");
function mesanjeKarata (temaIgre, nivoIgre) {
switch (nivoIgre) {
  case "1":
    brojKarata=12;
    break; 
  case "2":
    brojKarata=16;
    break; 
  case "3":
    brojKarata=20;
    break;
  default: 
    break;}

if (temaIgre === "SW"){
    for (let i = 0; i < brojKarata; i++) {
dupliNiz.push = starWars[i];
dupliNiz.push = starWars[i];          
    }
}
else {
    for (let i = 0; i < brojKarata; i++) {
dupliNiz.push = LOTR[i];
dupliNiz.push = LOTR[i];          
    }  
}

for (let i = 0; i < brojKarata*2; i++) {
    var redniBroj = i.toString();
    var duzinaNiz = dupliNiz.length;
    var pozicija = Math.floor((Math.random() * duzinaNiz));
    var noviElement = dupliNiz.slice(pozicija);
    document.getElementById("ss"+redniBroj).src = noviElement; 
}
};