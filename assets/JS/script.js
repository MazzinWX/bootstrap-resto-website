

function updateTime(){
    var currentTime = new Date()
    var years = currentTime.getFullYear();
    var nameMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", ]
    var nameDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    var days = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var timeString = hours + " h " + minutes + " ";
    
    var xTime = "Nous sommes: " + "<br>" + nameDays[currentTime.getDay()] + " " + days + " " + nameMonths[currentTime.getMonth()] + " " + years + " " + "<br>" + " - " + timeString + " - ";
    document.getElementById('rClock').innerHTML = xTime;
};

var affichageDate = setInterval(updateTime, 1000);


TweenMax.set(".joint", {xPercent:120, transformOrigin:"50% 15%"})

TweenMax.to(".wheel", 3, {rotation:360, ease:Linear.easeNone, repeat:-1})
TweenMax.to(".joint", 3, {rotation:-360, ease:Linear.easeNone, repeat:-1})