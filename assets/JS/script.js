

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
    var timeString = hours + ":" + minutes + " ";
    if(hours > 11){
        timeString += "PM";
    } else {
        timeString += "AM";
    }
    var xTime = "Nous sommes le " + nameDays[currentTime.getDay()] + " " + days + " " + nameMonths[currentTime.getMonth()] + " " + years + " " + "<br>" + "Il est " + timeString;
    document.getElementById('rClock').innerHTML = xTime;
};

var affichageDate = setInterval(updateTime, 1000);


TweenMax.from("#logoBig", 3, {right:200});
