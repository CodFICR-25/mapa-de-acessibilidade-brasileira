
function carregaConfiguracoes() {
    /*escondendo sub aba dos locais*/
    document.getElementsByClassName("subtab")[0].style.display = "none";
    document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
    document.getElementsByClassName("subtabrest")[0].style.display = "none";
    document.getElementsByClassName("subtabshop")[0].style.display = "none";
    document.getElementsByClassName("subtabpontos")[0].style.display = "none";

    //inicio da aba config

    document.getElementById("Configuracoes").style.display = "none";
    document.getElementsByClassName("subtabfav")[0].style.display = "none";
    document.getElementsByClassName("subtabrev")[0].style.display = "none";
    document.getElementsByClassName("subtabava")[0].style.display = "none";
    document.getElementsByClassName("subtabseuspontos")[0].style.display = "none";
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
    if (evt.currentTarget.id == 'btnLocais') {
        document.getElementsByClassName("subtab")[0].style.display = "block";
        document.getElementsByClassName("subtabhoteis")[0].style.display = "block";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
        document.getElementById("Configuracoes").style.display = "none";
    } else if (evt.currentTarget.id == 'btnMapa' || evt.currentTarget.id == 'btnProfile' || evt.currentTarget.id == 'btnConfiguracoes') {
        document.getElementById("Configuracoes").style.display = "none";
        document.getElementsByClassName("subtab")[0].style.display = "none";
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    }

    if (evt.currentTarget.id == 'btnConfiguracoes') {
        document.getElementById("Configuracoes").style.display = "block";
    }

    /*SubAbaLocais*/
    if (evt.currentTarget.id == 'btnHoteis') {
        document.getElementsByClassName("subtabhoteis")[0].style.display = "block";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnRestaurante') {
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "block";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnShopping') {
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "block";
        document.getElementsByClassName("subtabpontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnPontos-Turisticos') {
        document.getElementsByClassName("subtabhoteis")[0].style.display = "none";
        document.getElementsByClassName("subtabrest")[0].style.display = "none";
        document.getElementsByClassName("subtabshop")[0].style.display = "none";
        document.getElementsByClassName("subtabpontos")[0].style.display = "block";
    }
    // sub abas configuracoes
    if (evt.currentTarget.id == 'btnFavoritos') {
        document.getElementsByClassName("subtabfav")[0].style.display = "block";
        document.getElementsByClassName("subtabrev")[0].style.display = "none";
        document.getElementsByClassName("subtabava")[0].style.display = "none";
        document.getElementsByClassName("subtabseuspontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnReviews') {
        document.getElementsByClassName("subtabfav")[0].style.display = "none";
        document.getElementsByClassName("subtabrev")[0].style.display = "block";
        document.getElementsByClassName("subtabava")[0].style.display = "none";
        document.getElementsByClassName("subtabseuspontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnAvaliacoes') {
        document.getElementsByClassName("subtabfav")[0].style.display = "none";
        document.getElementsByClassName("subtabrev")[0].style.display = "none";
        document.getElementsByClassName("subtabava")[0].style.display = "block";
        document.getElementsByClassName("subtabseuspontos")[0].style.display = "none";
    } else if (evt.currentTarget.id == 'btnPontos-Cadastrados') {
        document.getElementsByClassName("subtabfav")[0].style.display = "none";
        document.getElementsByClassName("subtabrev")[0].style.display = "none";
        document.getElementsByClassName("subtabava")[0].style.display = "none";
        document.getElementsByClassName("subtabseuspontos")[0].style.display = "block";
    } else {
        document.getElementsByClassName("subtabfav")[0].style.display = "none";
        document.getElementsByClassName("subtabrev")[0].style.display = "none";
        document.getElementsByClassName("subtabava")[0].style.display = "none";
        document.getElementsByClassName("subtabseuspontos")[0].style.display = "none";
    }
}

