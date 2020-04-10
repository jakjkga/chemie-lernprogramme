function lade_seite() {
    setze_redm('start', '');
    setze_oxm('start', '');
}

function setze_redm(wer, bezeichnung) {
    //console.log(wer);
    $('.redm_knopf').removeClass('gerade_aktiv_redm');
    $('#'+wer).addClass('gerade_aktiv_redm');
    var oxidation=ox[wer];
    $('#ox_teilreaktion').html(oxidation);
}

function setze_oxm(wer, bezeichnung) {
    //console.log(wer);
    $('.oxm_knopf').removeClass('gerade_aktiv_oxm');
    $('#'+wer).addClass('gerade_aktiv_oxm');
    var reduktion=red[wer];
    $('#red_teilreaktion').html(reduktion);
    
}


