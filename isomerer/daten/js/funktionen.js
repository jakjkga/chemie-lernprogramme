function lade_seite() {
    //falsche Start-Indices Setzen
    document.forms['C'].elements['C_auswahl'].options[0].selected="selected";
    document.forms['H'].elements['H_auswahl'].options[0].selected="selected";
    document.forms['O'].elements['O_auswahl'].options[0].selected="selected";
    //für diese Indices entsprechende Summenformel und Text setzen
    hole_aktuellen_index('C', 'C_auswahl');
}

function hole_andere_indices(auswahlname1, optionname1, auswahlname2, optionname2) {
    var auswahl1=document.forms[auswahlname1].elements[optionname1];
    var wert1=auswahl1.value;
    var auswahl2=document.forms[auswahlname2].elements[optionname2];
    var wert2=auswahl2.value;
    var myArray = new Array();
    myArray[0]=wert1;
    myArray[1]=wert2;
    return myArray;
}

function hole_aktuellen_index(auswahlname, optionname) {
    var wert=String(document.forms[auswahlname].elements[optionname].value);
    switch (String(auswahlname)) {
        case 'C':
            var wert1=hole_andere_indices('H', 'H_auswahl', 'O', 'O_auswahl')[0];
            var wert2=hole_andere_indices('H', 'H_auswahl', 'O', 'O_auswahl')[1];
            if (String(wert2) == '0') {
                var schluessel='C'+wert+'H'+wert1;
            } else {
                var schluessel='C'+wert+'H'+wert1+'O'+wert2;
            }
            var summenformel=erstelle_summenformel(wert, wert1, wert2);
            break;
        case 'H':
            var wert1=hole_andere_indices('C', 'C_auswahl', 'O', 'O_auswahl')[0];
            var wert2=hole_andere_indices('C', 'C_auswahl', 'O', 'O_auswahl')[1];
            if (String(wert2) == '0') {
                var schluessel='C'+wert1+'H'+wert;
            } else {
                var schluessel='C'+wert1+'H'+wert+'O'+wert2;
            }
            var summenformel=erstelle_summenformel(wert1, wert, wert2);
            break;
        case 'O':
            var wert1=hole_andere_indices('C', 'C_auswahl', 'H', 'H_auswahl')[0];
            var wert2=hole_andere_indices('C', 'C_auswahl', 'H', 'H_auswahl')[1];
            if (String(wert) == '0') {
                var schluessel='C'+wert1+'H'+wert2;
            } else {
                var schluessel='C'+wert1+'H'+wert2+'O'+wert;
            }
            var summenformel=erstelle_summenformel(wert1, wert2, wert);
            break;
    }
    schreibe_summenformel('sf_in', summenformel, schluessel);
    text_schreiben('textbereich', schluessel);
}

function erstelle_summenformel(i1, i2, i3) {
    var i1_tief=tiefgestellt[i1];
    var i2_tief=tiefgestellt[i2];
    var i3_tief=tiefgestellt[i3];
    if (i3 == '0') {
        var summenformel='C'+i1_tief+'H'+i2_tief;}
    else {
        var summenformel='C'+i1_tief+'H'+i2_tief+'O'+i3_tief;}
    return summenformel;
}

function schreibe_summenformel(namedestextfelds, summenformel, schluessel) {
    document.getElementById(namedestextfelds).disabled=false;
    document.getElementById(namedestextfelds).value=summenformel;
    //Je nach Schlüssel das Textfeld rot einfärben bzw. wieder zurücksetzen
    document.getElementById(namedestextfelds).style.backgroundColor='red';
    var anzahl_schluessel=erlaubte_schluessel.length;
    for (var i=0; i < anzahl_schluessel; ++i) {
        var zwischenspeicher=erlaubte_schluessel[i];
        if (zwischenspeicher == schluessel) {
            document.getElementById(namedestextfelds).style.backgroundColor='white';
        }
    }
    //Summenformelfeld deaktivieren
    document.getElementById(namedestextfelds).disabled=true;
}

function text_schreiben(bereich, schluessel) {
    var start_text="Wähle zunächst oben die Indices aus, bis eine zulässige Summenformel entsteht!"
    var neuer_text=String(textbausteine[schluessel]);
    //Je nach Schlüssel das Textfeld rot einfärben bzw. wieder zurücksetzen
    document.getElementById(bereich).style.Color='red';
    document.getElementById(bereich).innerHTML=start_text;
    var anzahl_schluessel=erlaubte_schluessel.length;
    for (var i=0; i < anzahl_schluessel; ++i) {
        var zwischenspeicher=erlaubte_schluessel[i];
        if (zwischenspeicher == schluessel) {
            document.getElementById(bereich).style.Color='white';
            document.getElementById(bereich).innerHTML=neuer_text;
        }
    }
}

