// in setze_quizmodus() aus Checkbox auslesen und verändern
var quizmodus=true;


function lade_seite() {
    document.forms['SF'].elements['SF_auswahl'].options[0].selected='selected';
    document.SF.modus.checked='checked';
    hole_aktuellen_index('SF', 'SF_auswahl');
}

function hole_aktuellen_index(auswahlname, optionname) {
    var schluessel=String(document.forms[auswahlname].elements[optionname].value);
    return schluessel;
}

function start() {
    schluessel=hole_aktuellen_index('SF', 'SF_auswahl');
    name_des_molekuels=molekuele[schluessel][0];
    zwischenmolekulare_kraft=molekuele[schluessel][4];
    siedepunkt=molekuele[schluessel][5];
    infotext=molekuele[schluessel][6];
    strukturformel=molekuele[schluessel][7];
    // Falls kein Molekül gewählt ist, keine Fragen stellen, sondern Hinweis anzeigen
    if (schluessel == '-') {
        alert('Es muss erst ein Molekül ausgewählt werden!')
    } else {
        // Nur im Quizmodus fragen
        if (quizmodus == true) {            
            gegebene_antwort=fragen_stellen();
            angebliche_zwischenmolekulare_kraft=kraefte[gegebene_antwort];
            switch(angebliche_zwischenmolekulare_kraft) {
                case zwischenmolekulare_kraft:
                    alert('Richtig: Bei diesem Molekül liegt die Zwischenmolekulare Kraft '+angebliche_zwischenmolekulare_kraft+' vor.')
                    break;
                case 'Unsinn':
                alert('Leider falsch: Diese Kombination tritt nicht auf und ist gar keiner der drei zwischenmolekularen Kräften zuzuordnen!')
                    break;
                default:
                    alert('Leider stimmt die von Dir gefundene Zwischenmolekulare Kraft '+angebliche_zwischenmolekulare_kraft+' nicht mit der tatsächlichen, nämlich '+zwischenmolekulare_kraft+' überein!')
            }
         }
    }
    //TODO: je nach Antwortkombination und richtiger Antwort noch einen extra Hinweis anzeigen
    document.getElementById('name_des_molekuels').innerHTML=name_des_molekuels;
    document.getElementById('zwischenmolekulare_kraft').innerHTML=zwischenmolekulare_kraft;
    document.getElementById('siedepunkt').innerHTML=siedepunkt;
    document.getElementById('infotext').innerHTML=infotext;
    document.getElementById('strukturformel').innerHTML=strukturformel;
}

function setze_quizmodus() {
    if (document.SF.modus.checked) {;
        document.SF.modus.checked=true;
        quizmodus=true;
    } else {
        document.SF.modus.checked=false;
        quizmodus=false;
    }
}

function fragen_stellen() {
    fragetext1='\
Liegen im Molekül polare Atombindungen (mindestens eine) vor?\n\n\tDrücke \"OK\" für Ja\n\n\t\toder\n\n\tdrücke \"Abbrechen\" für Nein!';
    fragetext2='\
Sind die Teilladungen im Molekül unsymmetrisch verteilt?\n\n\tDrücke \"OK\" für Ja\n\n\t\toder\n\n\tdrücke \"Abbrechen\" für Nein!';
    fragetext3='\
Liegen im Molekül positiv polarisierte Wasserstoffatome vor?\n\n\tDrücke \"OK\" für Ja\n\n\t\toder\n\n\tdrücke \"Abbrechen\" für Nein!'
    antwort1=confirm(fragetext1);
    // Falls Antwort 1 Nein lautet, dann nicht weiter fragen
    if (antwort1) {
        // Nur wenn Antwort 1 Ja lautet, auch Frage 2 stellen
        antwort2=confirm(fragetext2);
        // Falls Antwort 2 Nein lautet, dann nicht weiter fragen
        if (antwort2) {
            // Nur wenn Antwort 2 Ja lautet, auch Frage 3 stellen
            antwort3=confirm(fragetext3);
            gesamtantwort=String(antwort1)+String(antwort2)+String(antwort3);
        } else {
            gesamtantwort=String(antwort1)+String(antwort2)
        }
    } else {
        gesamtantwort=String(antwort1)
    }
    return(gesamtantwort);
}

