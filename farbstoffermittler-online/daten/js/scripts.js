function lade_seite() {
    zuruecksetzen()
}

function setze_schieberegler(zahlenwert) {
    $('#schieberegler').val(zahlenwert);
    $('#beschriftungslabel').text(zahlenwert);
    var abstand_links=parseInt((500/370)*(zahlenwert-380)-7);
    $('#beschriftungslabel').css('left', abstand_links+'px');
}

function zuruecksetzen() {
    $('#a_chromophor option:first').prop('selected', true);
    $('#a_auxochrom option:first').prop('selected', true);
    $('#a_antiauxochrom option:first').prop('selected', true);
    $('#a_loeslichegruppe option:first').prop('selected', true);
    $('#b_anzeigen').attr('disabled', true);
    var bildpfad='daten/img/start.gif';
    $('#abb_strukturformel').attr('src', bildpfad);
    $('#name_des_farbstoffs').val('');
    $('#name_der_farbe').val('');
    $('#name_der_farbe').css('background-color', 'white');
    var wellenlaenge=380;
    setze_schieberegler(wellenlaenge);
    //console.log('zuruecksetzen');
}

function anzeigen() {
    var chromophor=$('#a_chromophor option:selected').val();
    var auxochrom=$('#a_auxochrom option:selected').val();
    var antiauxochrom=$('#a_antiauxochrom option:selected').val();
    var loeslichegruppe=$('#a_loeslichegruppe option:selected').val();
    var schluessel=chromophor+'_'+auxochrom+'_'+antiauxochrom+'_'+loeslichegruppe;
    var bildpfad='daten/img/'+farbstoffe[schluessel][0]+'.gif';
    var farbstoffname=farbstoffe[schluessel][1];
    var farbe=farbstoffe[schluessel][2];
    var wellenlaenge=farbstoffe[schluessel][3];
    var hintergrundfarbe=farbstoffe[schluessel][4];
    $('#abb_strukturformel').attr('src', bildpfad);
    $('#name_des_farbstoffs').val(farbstoffname);
    $('#name_der_farbe').val(farbe);
    $('#name_der_farbe').css('background-color', hintergrundfarbe);
    setze_schieberegler(wellenlaenge);
}

function auswahl() {
    /* schaltet bei zulässiger Auswahl den Anzeigebutton frei */
    var chromophor=$('#a_chromophor option:selected').val();
    var auxochrom=$('#a_auxochrom option:selected').val();
    var antiauxochrom=$('#a_antiauxochrom option:selected').val();
    var loeslichegruppe=$('#a_loeslichegruppe option:selected').val();
    var schluessel=chromophor+'_'+auxochrom+'_'+antiauxochrom+'_'+loeslichegruppe;
    //console.log(schluessel);
    try {
        var passender_eintrag=farbstoffe[schluessel][0];
        if (passender_eintrag.length > 0) {
            hole_auswahl();
        } else {
            kein_treffer();
        }
        
    } catch(e) {
        //console.log('Fehler:'+e);
        kein_treffer();
    }
}

function hole_auswahl() {
    //console.log('hole_auswahl');
    $('#b_anzeigen').removeAttr('disabled');
    //anzeigen(); //direkt??????
}
function kein_treffer() {
    //console.log('kein_treffer');
    $('#b_anzeigen').attr('disabled', true);
    var farbstoffname='';
    var farbe='';
    var wellenlaenge=380;
    var bildpfad='daten/img/start.gif';
    $('#abb_strukturformel').attr('src', bildpfad);
    $('#name_des_farbstoffs').val(farbstoffname);
    $('#name_der_farbe').val(farbe);
    $('#name_der_farbe').css('background-color', 'white');
    setze_schieberegler(wellenlaenge);
}
