function lade_seite() {
    // Werte zurücksetzen
    //$('#a_elem_1 option:first').prop('selected', true);
    //$('#a_elem_2 option:first').prop('selected', true);
    $('#a_elem_1 option[value=Li]').prop('selected', true);
    $('#a_elem_2 option[value=Li]').prop('selected', true);
    $('input[type=text]').attr('readonly', true);
    $('textarea#zusatzinformationen').attr('readonly', true);
    auswahl_element();
}

function loesung_herunterladen(typ, wer) {
    //console.log(typ);
    var passwort=prompt('Passwort eingeben:\n');
    //console.log(passwort);
    var losung='herdamit!';
    if (passwort == losung) {
        var downloadlink='daten/medien/ueb_bindungstypermittler_loes.'+typ;
        console.log(downloadlink);
        //$('#'+wer).unbind();
        $('#'+wer).attr('href', downloadlink);
        console.log(wer);
        window.open(downloadlink);
    } else {
        alert('Leider wurde das falsche Passwort eingegeben. Frage bei Deinem Chemielehrer nach. Chemiefachschaften anderer Schulen können Passwörter unter\njakj@chemie-lernprogramme.de\nerfragen!')
    }
}

function zeige_zusatzinfo(schluessel) {
    try {
        var zusatzinfo=sammlung_zusatzinformationen[schluessel];
        //console.log(zusatzinfo);
        if (zusatzinfo) {
            $('textarea#zusatzinformationen').show();
            $('textarea#zusatzinformationen').val(zusatzinfo);
        } else {
            $('textarea#zusatzinformationen').val('');
            $('textarea#zusatzinformationen').hide();
        }
    } catch(e) {
        $('textarea#zusatzinformationen').hide();
    }
}

function hole_x_koordinate(summe_en) {
    var breite_document=318.00;
    var abstand_links=35.43;
    var breite_acht_einheiten=breite_document-abstand_links;
    var anteil=parseFloat(summe_en)/8.00;
    var nach_rechts=breite_acht_einheiten*anteil;
    return nach_rechts
}

function hole_y_koordinate(delta_en) {
    var hoehe_document=177.43;
    var abstand_oben=35.43;
    var hoehe_acht_einheiten=hoehe_document-abstand_oben;
    var anteil=parseFloat(delta_en)/4.00;
    var nach_oben=-1*(hoehe_acht_einheiten*anteil);
    return nach_oben
}

function auswahl_element() {
    var element1=$('#a_elem_1 option:selected').val();
    var element2=$('#a_elem_2 option:selected').val();
    var en1=hole_en(element1);
    var en2=hole_en(element2);
    var en1_anzeige=hole_en(element1).toFixed(1).replace(/\./g, ',').replace(/0\,0/g, '0');
    var en2_anzeige=hole_en(element2).toFixed(1).replace(/\./g, ',').replace(/0\,0/g, '0');
    var delta_en=Math.abs(en1-en2);
    var summe_en=en1+en2;
    var delta_en_anzeige=delta_en.toFixed(1).replace(/\./g, ',').replace(/0\,0/g, '0');
    var summe_en_anzeige=summe_en.toFixed(1).replace(/\./g, ',').replace(/0\,0/g, '0');
    var name_element1=hole_name(element1);
    var name_element2=hole_name(element2);
    var labelbeschriftung_delta_en='<strong>ΔEN</strong>('+element1+element2+'):';
    var labelbeschriftung_summe_en='<strong>ΣEN</strong>('+element1+element2+'):';
    $('#ausgabe_en_element1').val(en1_anzeige);
    $('#ausgabe_en_element2').val(en2_anzeige);
    $('#ausgabe_delta_en').val(delta_en_anzeige);
    $('#ausgabe_summe_en').val(summe_en_anzeige);
    // Label anpassen
    $('label#label_delta_en').html(labelbeschriftung_delta_en);
    $('label#label_summe_en').html(labelbeschriftung_summe_en);
    // neue Koordinaten berechnen
    /*
        Breite Dokument: 354.33
        Höhe   Dokument: 212.59
        Breite x-Achse:  318-Abstand links     (0 bis 8)
        Höhe   y-Achse:  177.43-Abstand unten  (0 bis 4)
        Abstand bis 0x:   35.43   von links
        Abstand bis 0y:   35.43   von unten
    */
    var nach_rechts=hole_x_koordinate(summe_en);
    var nach_oben=hole_y_koordinate(delta_en);
    // Punkt entsprechend verschieben
    $('#kreis1').attr('cx', nach_rechts);
    $('#kreis1').attr('cy', nach_oben);
    //TODO: ggf. Informationen anzeigen
    var schluessel=element1+element2;
    zeige_zusatzinfo(schluessel);
}

function hole_en(element) {
    var en=en_sammlung[element][0];
    return en
}

function hole_name(element) {
    var name_element=en_sammlung[element][1];
    return name_element
}
