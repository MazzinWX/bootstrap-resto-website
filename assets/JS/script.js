

function updateTime(){
    var currentTime = new Date()
    var years = currentTime.getFullYear();
    var nameMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", ]
    var nameDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    var days = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (hours < 10){
        hours = "0" + hours
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var timeString = hours + " h " + minutes + " ";
    
    var xTime = "Nous sommes: " + "<br>" + nameDays[currentTime.getDay()] + " " + days + " " + nameMonths[currentTime.getMonth()] + " " + years + " " + "<br>" + " - " + timeString + " - ";
    document.getElementById('rClock').innerHTML = xTime;
};

function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

var affichageDate = setInterval(updateTime, 1000);

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true});
});