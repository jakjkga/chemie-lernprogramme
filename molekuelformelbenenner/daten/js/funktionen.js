function teste_auf_gleiches_element() {
    var formular=document.forms['form_verbindung'];
    var element1=formular.elements['element1_auswahl'].value;
    var element2=formular.elements['element2_auswahl'].value;
    var aktuelle_auswahl=String(element1+element2);
    /* 
       Falls zweimal das gleiche Element ausgewählt wurde, 
       wird eine Fehlermeldung erzeugt
    */
    var schalter=verbotene_liste.contains(aktuelle_auswahl);
    if (schalter == true) {
        setze_farbe('red');
        schreibe_ergebnis('&nbsp;');
        alert('Es müssen verschiedene Elemente ausgewählt werden, sonst ist keine sinnvolle Benennung möglich! '+aktuelle_auswahl+' ist Unfug!');
    }

}

function hole_aktuellen_index() {
    var formular=document.forms['form_verbindung'];
    var element1=formular.elements['element1_auswahl'].value;
    var index1=formular.elements['index1_auswahl'].value;
    var element2=formular.elements['element2_auswahl'].value;
    var index2=formular.elements['index2_auswahl'].value;
    var neuer_name=String(index1+element1+index2+element2);
    var neuer_name_klein=neuer_name.toLowerCase()
    var neuer_name_erster_gross=neuer_name_klein.substr(0,1).toUpperCase()+neuer_name_klein.substring(1);
    return neuer_name_erster_gross;
}

function schreibe_ergebnis(ergebnis) {
    var zielbereich=document.getElementById('namensfeld');
    zielbereich.innerHTML=ergebnis;
}

function name_ermitteln() {
    var formular=document.forms['form_verbindung'];
    var element1=formular.elements['element1_auswahl'].value;
    var element2=formular.elements['element2_auswahl'].value;
    // wurden zwei Elemente ausgewählt?
    if (element1 == '' || element2 == '') {
        setze_farbe('red');
        schreibe_ergebnis('&nbsp;');
        alert('Erst müssen zwei Elemente ausgewählt werden!');
    } else {
        var neuer_name=hole_aktuellen_index();
        setze_farbe('#faa');
        ganz_neuer_name=ersetze(neuer_name);
        schreibe_ergebnis(ganz_neuer_name);
        // Nur falls gültige Verbindung, auf Grün schalten
        teste_gueltigkeit(neuer_name);
    }
}

function teste_gueltigkeit(neuer_name) {
    /* 
       Falls der Name nicht im Array Spezialnamen enthalten ist,
       bleibt der übergebene Name unverändert, sonst wird er durch den
       in diesem Array festgelegten ergänzt
    */
    var schalter=erlaubtenamen_liste.contains(neuer_name);
    if (schalter == true) {
        setze_farbe('lime');
    }
}

function setze_farbe(neue_farbe) {
    document.getElementById('namensfeld').style.backgroundColor=neue_farbe;
}

function zurueck_setzen() {
    var formular=document.forms['form_verbindung'];
    formular.elements['element1_auswahl'].options[0].selected="selected";
    formular.elements['index1_auswahl'].options[0].selected="selected";
    formular.elements['element2_auswahl'].options[0].selected="selected";
    formular.elements['index2_auswahl'].options[0].selected="selected";
    name_ermitteln();
}

Array.prototype.contains=function(gesuchter_wert) {
    for (var i=0, len=this.length; i < len && this[i] !== gesuchter_wert; i++);
         return i < len;
}

function ersetze(neuer_name) {
    var neuer_name=neuer_name;
    /* 
       Falls der Name nicht im Array Spezialnamen enthalten ist,
       bleibt der übergebene Name unverändert, sonst wird er durch den
       in diesem Array festgelegten ergänzt
    */
    var schalter=spezialnamen_liste.contains(neuer_name);
    if (schalter == true) {
        var ganz_neuer_name='Formal '+neuer_name+' besser bekannt als: '+spezialnamen[neuer_name];
        setze_farbe('yellow');
    } else {
        var ganz_neuer_name=neuer_name;
    }
    return ganz_neuer_name;
}

