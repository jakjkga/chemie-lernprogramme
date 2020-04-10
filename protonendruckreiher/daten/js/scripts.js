function lade_seite() {
    zeige_gleichung();
    zeige_erklaerung();
    zeige_pk_wert();
    $('#auswahl_ampholyte').attr('checked', false);
}

function zeige_ampholyte(wer) {
    if ($('#'+wer).is(':checked')) {
        //console.log($('#'+wer).is(':checked'));
        for (var i=0; i< ampholyte.length; i++) {
            $('#'+ampholyte[i]).addClass('ampholyt');
        }
        
    } else {
        //console.log($('#'+wer).is(':checked'));
        for (var i=0; i< ampholyte.length; i++) {
            $('#'+ampholyte[i]).removeClass('ampholyt');
        }
    }
}

function zeige_pk_wert() {
    var pkb_b1=pkb.replace(/\./g, ',');
    var pks_s2=pks.replace(/\./g, ',')
    $('#info_b1').val(pkb_b1);
    $('#info_s2').val(pks_s2);
    var pkb_b2=String(Math.round(100*(14.00-parseFloat(pks)))/100).replace(/\./g, ',');
    var pks_s1=String(Math.round(100*(14.00-parseFloat(pkb)))/100).replace(/\./g, ',');
    //console.log(pkb_b2+' '+pks_s1);
    if (String(pkb_b2) == 'NaN' || String(pks_s1) == 'NaN') {
        pks_s1='';
        pkb_b2='';
    }
    $('#info_s1').val(pks_s1);
    $('#info_b2').val(pkb_b2);
}

function zeige_erklaerung() {
    var erklaerung='Die '+
                   staerke_b1+
                   ' '+
                   bez_b1+
                   ' reagiert (formal) als Base 1'+
                   ' mit der '+
                   staerke_s2+
                   ' '+
                   bez_s2+
                   ' als Säure 2'+
                   ' zur korrespondierenden Säure 1 '+
                   bez_s1+
                   ' und zur korrespondierenden Base 2 '+
                   bez_b2+
                   '.'
                   ;
    $('#in_worten').val(erklaerung);
}

function zeige_gleichung() {
    var rg=sf_b1+' + '+
           sf_s2+' ⇌ '+
           sf_s1+' + '+
           sf_b2;
    $('#gleichung').val(rg);
    //console.log(rg);
}

function setze_saeure(wer, bezeichnung) {
    //console.log(wer);
    sf_s2=saeuren[wer][0];
    bez_s2=bezeichnung;
    sf_b2=saeuren[wer][1];
    bez_b2=saeuren[wer][2];
    pks=saeuren[wer][3];
    staerke_s2=saeuren[wer][4];
    zeige_gleichung();
    zeige_erklaerung();
    zeige_pk_wert();
    for (var i=0; i < saeure_knoepfe.length; i++) {
        $('#'+saeure_knoepfe[i]).removeClass('gerade_aktiv_saeure');
    }
    $('#'+wer).addClass('gerade_aktiv_saeure');
}

function setze_base(wer, bezeichnung) {
    //console.log(wer);
    sf_b1=basen[wer][0];
    bez_b1=bezeichnung;
    sf_s1=basen[wer][1];
    bez_s1=basen[wer][2];
    pkb=basen[wer][3];
    staerke_b1=basen[wer][4];
    zeige_gleichung();
    zeige_erklaerung();
    zeige_pk_wert();
    for (var i=0; i < basen_knoepfe.length; i++) {
        $('#'+basen_knoepfe[i]).removeClass('gerade_aktiv_base');
    }
    $('#'+wer).addClass('gerade_aktiv_base');
}


