var app = {
    init: function(event){
        console.log('app : init');

        // On lance le jeu
        app.play(event);
    },
    // Fonction qui permet d'augmenter le score du joueur et de l'afficher
    scoreUp: function (){
        var addScore = document.getElementById('score');
        score++;
        addScore.textContent = score;
    },
    // Fonction qui permet d'augmenter le score de l'ordinateur et de l'afficher
    scoreUpComputer: function(){
        var addScoreComputer = document.getElementById('scoreOrdi');
        scoreComputer++;
        addScoreComputer.textContent = scoreComputer;
    },
    // Fonction qui permet de choisir un nombre au hasard entre 1 et 3 et de l'affecter
    botChoice: function(){
        // On laisse l'ordinateur choisir
        // On prend un nombre random entre 1 et 3 compris qui correspondent aux elements du jeu
        // 1: pierre / 2: feuille / 3: ciseau
        var min = 1;
        var max = 3;
        var choixOrdi = app.getRandom(min, max);
        // console.log("choix ordi : ", choixOrdi);
        return choixOrdi;
    },
    // Fonction qui permet de tirer un nombre au hasard
    getRandom: function(min, max) {
        // Math.random retourne un nombre compris entre 0 et 1
        var zeroAndOne = Math.random(); // 0.99
        // ( 0.99 * ( 5 - 1 + 1 ) + 1 )
        var minAndMax = (zeroAndOne * (max - min + 1)) + min;
        // 10
        return Math.floor(minAndMax);
    },
    // On veut maintenant tester si le joueur gagne ou non et augmenter son score ou celui de l'ordi en fonction du résultat
    whoWin: function(event, choixOrdi){
        // Choix de l'user = Pierre
        if (event.target.id == 'pierre') {
            // Gagne sur les ciseaux
            if (choixOrdi == '3'){
                app.scoreUp();
            } else {
                app.scoreUpComputer();
            }
        // Choix de l'user = feuille
        } else if (event.target.id == 'feuille'){
            // Gagne sur la pierre
            if( choixOrdi == '1'){
                app.scoreUp();
            } else {
                app.scoreUpComputer();
            }
        // Choix de l'user = ciseau
        } else if (event.target.id == 'ciseau'){
            // Gagne sur la feuille
            if (choixOrdi == '2') {
                app.scoreUp();        
            } else {
                app.scoreUpComputer();
            }
        }
    },
    // Fonction qui lance le jeu
    play: function(event){
    var choixOrdi = app.botChoice();
    app.whoWin(event, choixOrdi);
    },
};


// Récuperer le clic de l'utilisateur
var buttonPierre = document.getElementById('pierre');
var buttonFeuille = document.getElementById('feuille');
var buttonCiseau = document.getElementById('ciseau');
// On initialise les variables qui nous seront utiles pour le score
var score = 0;
var scoreComputer = 0;


// Permet de lancer le jeu au clic sur les différents boutons possibles
buttonPierre.addEventListener('click', app.init);
buttonFeuille.addEventListener('click', app.init);
buttonCiseau.addEventListener('click', app.init);