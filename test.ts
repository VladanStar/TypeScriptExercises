// let vladan:string = "Vladan Cupric";
// console.log(vladan);

enum TipPrevoza {
    Automobil,
    Autobus,
    Tramvaj,
    Ostalo
}
let mojTip = TipPrevoza.Automobil;
let imeMogTipa = TipPrevoza[mojTip];
console.log(imeMogTipa)