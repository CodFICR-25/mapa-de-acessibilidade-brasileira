
function carregaConfiguracoes(){
    document.getElementsByClassName("subtab")[0].style.display = "none";
    document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
    document.getElementsByClassName("subtabrest")[0].style.display = "none";
    document.getElementsByClassName("subtabshop")[0].style.display = "none";
    document.getElementsByClassName("subtabpontos")[0].style.display = "none";
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    /*Aba principal*/
    if(evt.currentTarget.id == 'btnLocais'){
        document.getElementsByClassName("subtab")[0].style.display = "block";
        document.getElementsByClassName("subtabhoteis")[0].style.display = "block";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }else if(evt.currentTarget.id == 'btnMapa' || evt.currentTarget.id == 'btnProfile' || evt.currentTarget.id == 'btnConfiguracoes'){
        document.getElementsByClassName("subtab")[0].style.display = "none";
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }
  
    if(evt.currentTarget.id == 'btnHoteis'){
        document.getElementsByClassName("subtabhoteis")[0].style.display = "block";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }else if (evt.currentTarget.id == 'btnRestaurante'){
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "block";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }else if (evt.currentTarget.id == 'btnShopping'){
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "block";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }else if (evt.currentTarget.id == 'btnPontos-Turisticos'){
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "block";
    }


    
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
