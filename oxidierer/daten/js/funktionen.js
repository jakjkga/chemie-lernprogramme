function text_schreiben(bereich, neuer_text) {
    document.getElementById(bereich).innerHTML=neuer_text;
}

function setze_bild(bildname, quelle) {
    document.getElementById(bildname).src=quelle;
}

function hole_werte_listbox(auswahlid) {
    var auswahl=document.getElementById(auswahlid);
    var wert=auswahl.options[auswahl.options.selectedIndex].value;
    //text_schreiben('textbereich', wert);
    return wert;
}

function hole_werte_radio(auswahlname) {
    var auswahl=document.getElementsByName(auswahlname);
    //var wert=auswahl[0].value;
    var laenge=auswahl.length;
    for(var i = 0; i < laenge; i++) {
        if(auswahl[i].checked) {
            var wert=auswahl[i].value;
            //text_schreiben('textbereich', wert);
            return wert;
        }
    }
}

function edukt_auswahl(auswahlnahme) {
    hole_werte_radio(auswahlnahme);
    //Aktivieren der anderen Auswahlfelder und Vorauswahl der Startwerte
    document.getElementById('Darstellungsform').disabled=false;
    document.getElementById('Darstellungsform').options[0].selected="selected";
    document.getElementById('Gleichungen').disabled=false;
    document.getElementById('Gleichungen').options[2].selected="selected";
    abbildung_anzeigen()
    text_anzeigen()
}

function darstellungsform_auswahl(auswahlid) {
    abbildung_anzeigen()
    text_anzeigen()
}

function abbildung_anzeigen() {
    var a1=hole_werte_radio('Eduktauswahl')
    var a2=hole_werte_listbox('Darstellungsform')
    var a3=hole_werte_listbox('Gleichungen')
    var bildname='daten/img/'+a1+'_'+a2+'_'+a3+'.gif'
    //text_schreiben('textbereich', bildname)
    setze_bild('abbildung1', bildname)
}

function text_anzeigen() {
    var a1=hole_werte_radio('Eduktauswahl')
    var a2=hole_werte_listbox('Darstellungsform')
    var a3=hole_werte_listbox('Gleichungen')
    var schluessel=a1+'_'+a2+'_'+a3
    text_schreiben('textbereich', textbausteine[schluessel])
    //TODO: Array definieren und per Schlüssel auf Textbaustein zugreifen
}
