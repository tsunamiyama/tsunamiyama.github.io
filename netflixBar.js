function menuButtonOnClick(num){
    menuButtons = document.getElementsByClassName("netflix_button");
    for(let i = 0; i < menuButtons.length; ++i){
        if(i != num){
            menuButtons[i].style.fontWeight = "normal";
            menuButtons[i].classList.remove("netflix_buttonSelected");
        }
    }
    menuButtons[num].style.fontWeight = "bold";
    menuButtons[num].classList.add("netflix_buttonSelected");
}






document.addEventListener('click', function(e) {
    var searchIcon = document.getElementById("netflix_search_icon");
    var searchArea = document.getElementById("netflix_search_input");
    var searchBar = document.getElementById("netflix_searchMainCon");
    var searchClear = document.getElementById("netflix_search_clearIcon");
    var search = document.getElementsByClassName("netflix_searchContainer");
    if(e.target == searchBar || e.target == search || e.target == searchIcon || e.target == searchArea || e.target == searchClear){
        searchBar.style.border = "1px solid white";
        searchBar.style.width = "fit-content";
        searchArea.style.width = "350px";
        searchClear.style.fontSize = "30px";
    } else {
        searchArea.style.width = "0px";
        searchClear.style.fontSize = "0px";
        searchBar.style.width = "fit-content";
        searchClear.style.visibility = "hidden"
        setTimeout(function(){
            //Used to smooth border transition on search box close
            searchBar.style.borderColor = "transparent";
        },150);
    }
});

document.addEventListener('click', function(e){
    var searchClear = document.getElementById("netflix_search_clearIcon");
    var searchArea = document.getElementById("netflix_search_input");
    if(e.target == searchArea){
        searchClear.style.visibility = "visible";
    } else {
        searchClear.style.visibility = "hidden";
    }
});
