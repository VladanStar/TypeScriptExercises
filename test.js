var vladan = "Vladan Cupric";
console.log(vladan);
var TipPrevoza;
(function (TipPrevoza) {
    TipPrevoza[TipPrevoza["Automobil"] = 0] = "Automobil";
    TipPrevoza[TipPrevoza["Autobus"] = 1] = "Autobus";
    TipPrevoza[TipPrevoza["Tramvaj"] = 2] = "Tramvaj";
    TipPrevoza[TipPrevoza["Ostalo"] = 3] = "Ostalo";
})(TipPrevoza || (TipPrevoza = {}));
var mojTip = TipPrevoza.Automobil;
var imeMogTipa = TipPrevoza[mojTip];
console.log(imeMogTipa);
