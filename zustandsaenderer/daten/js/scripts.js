var teilchentyp='kerzenwachs';

function setze_teilchentyp() {
    teilchentyp=$('#s_teilchentyp option:selected').val();
    alles_abblenden();
}

function zeige_text(auswahl) {
    var anzeigetext=alle_texte[auswahl];
    $('#beschreibung').html(anzeigetext);
}

function setze(auswahl) {
    alles_abblenden();
    switch (auswahl) {
        case 'fest':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            break
        case 'fluessig':
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            break
        case 'gasfoermig':
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
        case 'schmelzen':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#t_schmelzen').attr('class', 't_aktiv_erwaermen');
            $('#l_schmelzen').attr('class', 'l_aktiv_erwaermen');
            $('#l_schmelzen').attr('marker-end', 'url(#pfred)');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            break
        case 'gefrieren':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#t_gefrieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_gefrieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_gefrieren').attr('marker-end', 'url(#pfblue)');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            break
        case 'sieden':
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#t_sieden').attr('class', 't_aktiv_erwaermen');
            $('#l_sieden').attr('class', 'l_aktiv_erwaermen');
            $('#l_sieden').attr('marker-end', 'url(#pfred)');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
        case 'kondensieren':
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#t_kondensieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_kondensieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_kondensieren').attr('marker-end', 'url(#pfblue)');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
        case 'sublimieren':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#t_sublimieren').attr('class', 't_aktiv_erwaermen');
            $('#l_sublimieren').attr('class', 'l_aktiv_erwaermen');
            $('#l_sublimieren').attr('marker-end', 'url(#pfred)');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
        case 'resublimieren':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#t_resublimieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_resublimieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_resublimieren').attr('marker-end', 'url(#pfblue)');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
        case 'alles':
            $('#r_fest').attr('class', 'rechteck_aktiv');
            $('#t_fest').attr('class', 'text_aktiv');
            $('#r_fluessig').attr('class', 'rechteck_aktiv');
            $('#t_fluessig').attr('class', 'text_aktiv');
            $('#r_gasfoermig').attr('class', 'rechteck_aktiv');
            $('#t_gasfoermig').attr('class', 'text_aktiv');
            $('#t_schmelzen').attr('class', 't_aktiv_erwaermen');
            $('#l_schmelzen').attr('class', 'l_aktiv_erwaermen');
            $('#l_schmelzen').attr('marker-end', 'url(#pfred)');
            $('#t_gefrieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_gefrieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_gefrieren').attr('marker-end', 'url(#pfblue)');
            $('#t_sieden').attr('class', 't_aktiv_erwaermen');
            $('#l_sieden').attr('class', 'l_aktiv_erwaermen');
            $('#l_sieden').attr('marker-end', 'url(#pfred)');
            $('#t_kondensieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_kondensieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_kondensieren').attr('marker-end', 'url(#pfblue)');
            $('#t_sublimieren').attr('class', 't_aktiv_erwaermen');
            $('#l_sublimieren').attr('class', 'l_aktiv_erwaermen');
            $('#l_sublimieren').attr('marker-end', 'url(#pfred)');
            $('#t_resublimieren').attr('class', 't_aktiv_abkuehlen');
            $('#l_resublimieren').attr('class', 'l_aktiv_abkuehlen');
            $('#l_resublimieren').attr('marker-end', 'url(#pfblue)');
            $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_aktiv.svg');
            $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_aktiv.svg');
            $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_aktiv.svg');
            break
    }
    zeige_text(auswahl);
}

function alles_abblenden() {
    for (var i=0; i < alle_textobjekte_zustaende.length; i++) {
        $('#'+alle_textobjekte_zustaende[i]).attr('class', 'text_inaktiv');
        //console.log(alle_textobjekte_zustaende[i]);
    }
    for (var i=0; i < alle_rechtecke.length; i++) {
        $('#'+alle_rechtecke[i]).attr('class', 'rechteck_inaktiv');
        //console.log(alle_rechtecke[i]);
    }
    for (var i=0; i < alle_textobjekte_aenderungen.length; i++) {
        $('#'+alle_textobjekte_aenderungen[i]).attr('class', 'text_inaktiv');
        //console.log(alle_textobjekte_aenderungen[i]);
    }
    for (var i=0; i < alle_linien.length; i++) {
        $('#'+alle_linien[i]).attr('class', 'l_inaktiv');
        $('#'+alle_linien[i]).attr('marker-end', 'url(#pfgrey)');
        //console.log(alle_linien[i]);
    }
    $('#img_fest').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fest_inaktiv.svg');
    $('#img_fluessig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/fluessig_inaktiv.svg');
    $('#img_gasfoermig').get(0).setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'daten/img/'+teilchentyp+'/gasfoermig_inaktiv.svg');
}

function lade_seite() {
    $('#s_teilchentyp option[value=kerzenwachs]').prop('selected', true);
    alles_abblenden();
    $('#beschreibung').html(starttext);
}

