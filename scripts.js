function changeArrowColor() {
    var line3 = document.getElementById("Line_3");
    var line4 = document.getElementById("Line_4");
    var line5 = document.getElementById("Line_3-2");
    var line6 = document.getElementById("Line_4-2");
    var line7 = document.getElementById("Line_3-3");
    var line8 = document.getElementById("Line_4-3");

    if(line3.style.stroke == "rgb(255, 255, 255)"){
        line3.style.stroke = "#000";
        line4.style.stroke = "#000";
        line5.style.stroke = "#000";
        line6.style.stroke = "#000";
        line7.style.stroke = "#000";
        line8.style.stroke = "#000";
    } else{
        line3.style.stroke = "#fff";
        line4.style.stroke = "#fff";
        line5.style.stroke = "#fff";
        line6.style.stroke = "#fff";
        line7.style.stroke = "#fff";
        line8.style.stroke = "#fff";
    }
    

}

setInterval(function () {changeArrowColor();}, 2000);

