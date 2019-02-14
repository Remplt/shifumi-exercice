var app = {
    init: function(event){
        console.log('app : init');

        // Récuperer le clic de l'utilisateur
        var buttonPierre = document.getElementById('pierre');
        var buttonFeuille = document.getElementById('feuille');
        var buttonCiseau = document.getElementById('ciseau');

        // Permet de lancer le jeu au clic sur les différents boutons possibles
        buttonPierre.addEventListener('click', app.play);
        buttonFeuille.addEventListener('click', app.play);
        buttonCiseau.addEventListener('click', app.play);
        console.log(event);
    },
    score: 0,
    scoreComputer: 0,
    // Fonction qui permet d'augmenter le score du joueur et de l'afficher
    scoreUp: function (){
        var addScore = document.getElementById('score');
        app.score++;
        addScore.textContent = app.score;
    },
    // Fonction qui permet d'augmenter le score de l'ordinateur et de l'afficher
    scoreUpComputer: function(){
        var addScoreComputer = document.getElementById('scoreOrdi');
        app.scoreComputer++;
        addScoreComputer.textContent = app.scoreComputer;
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
        var affichageGagnant = document.getElementById('gagnant');
        affichageGagnant.innerHTML = "";
        var choixOrdi = app.conversionChoixOrdi(choixOrdi);

        if (event.target.id == choixOrdi){
            affichageGagnant.innerHTML = "<p id='egalite'> Egalité </p>"; 
        // Choix de l'user = Pierre
        } else if (event.target.id == 'pierre') {
            // Gagne sur les ciseaux
            if (choixOrdi == 'ciseau'){
                app.scoreUp();
            } else {
                app.scoreUpComputer();
            }
        // Choix de l'user = feuille
        } else if (event.target.id == 'feuille'){
            // Gagne sur la pierre
            if( choixOrdi == 'pierre'){
                app.scoreUp();
            } else {
                app.scoreUpComputer();
            }
        // Choix de l'user = ciseau
        } else if (event.target.id == 'ciseau'){
            // Gagne sur la feuille
            if (choixOrdi == 'feuille') {
                app.scoreUp();        
            } else {
                app.scoreUpComputer();
            }
        }
    },
    // Affiche les choix des joueurs
    phraseChoice: function(choixJoueur, choixOrdi){
        console.log('lordi a choisi', choixOrdi, 'et le joueur', choixJoueur.target.id)
        var choixOrdi = app.conversionChoixOrdi(choixOrdi);
        phraseChoix = document.getElementById('affichageChoix');
        phraseChoix.innerHTML = "<p>L'ordinateur a choisi <strong>" + choixOrdi + "</strong> et vous avez choisi <strong>" + choixJoueur.target.id +".</strong></p>";
    },
    // Converti le choix de l'ordi (int) en string
    conversionChoixOrdi: function(choixOrdi){
        if(choixOrdi == 1){
            choixOrdi = "pierre";
        } else if(choixOrdi == 2){
            choixOrdi = "feuille";
        } else {
            choixOrdi = "ciseau";
        }
        return choixOrdi;
    },
    // Fonction qui lance le jeu
    play: function(event){
    var choixOrdi = app.botChoice();
    app.phraseChoice(event, choixOrdi);
    app.whoWin(event, choixOrdi);
    },
};

window.addEventListener('DOMContentLoaded', app.init);




