var schluessel='';
var zaehler=1;

function zeige_mechanismus(schluessel) {
    zaehler=1;
    var bildpfad='daten/img/'+schluessel+'/'+String(zaehler)+'.gif'
    var bildobjekt=document.getElementById('abbildung');
    bildobjekt.src=bildpfad;
    var textbereich=document.getElementById('textbereich');
    var neuer_text=hole_aktuellen_text(schluessel, zaehler);
    textbereich.innerHTML=neuer_text;
}

function hole_aktuellen_text(schluessel) {
    var nr=zaehler-1;
    var neuer_text=teilschritte_text[schluessel][nr];
    return neuer_text;
}

function zeige_textdarstellung() {
    var bildbereich=document.getElementById('bildbereich');
    var textbereich=document.getElementById('textbereich');
    bildbereich.setAttribute('hidden', 'hidden');
    textbereich.removeAttribute('hidden');
}

function zeige_bilddarstellung() {
    var bildbereich=document.getElementById('bildbereich');
    var textbereich=document.getElementById('textbereich');
    bildbereich.removeAttribute('hidden');
    textbereich.setAttribute('hidden', 'hidden');
}

function zeige_beides() {
    var bildbereich=document.getElementById('bildbereich');
    var textbereich=document.getElementById('textbereich');
    bildbereich.removeAttribute('hidden');
    textbereich.removeAttribute('hidden');
}

function zeige_erstes() {
    try {
        zaehler=1;
        zeige_aktuelles();
    } catch(e) {
        void(0);
    }
}

function zeige_vorheriges() {
    try {
        if (zaehler > 1) {
            zaehler=zaehler-1;
        }
    zeige_aktuelles();
    } catch(e) {
        void(0);
    }
}

function zeige_naechstes() {
    try {
        var bildobjekt=document.getElementById('abbildung');
        var aktueller_bildpfad=bildobjekt.getAttribute('src');
        var aktueller_schluessel=aktueller_bildpfad.split('/')[2];
        var anzahl_textbausteine=teilschritte_text[aktueller_schluessel].length;
        var bilderzahl=anzahl_textbausteine; //TODO: aus textsammlung auslesen
        if (zaehler < bilderzahl) {
            zaehler=zaehler+1;
        }
        zeige_aktuelles();
    } catch(e) {
        void(0);
    }
}

function zeige_letztes() {
    try {
        var bildobjekt=document.getElementById('abbildung');
        var aktueller_bildpfad=bildobjekt.getAttribute('src');
        var aktueller_schluessel=aktueller_bildpfad.split('/')[2];
        var anzahl_textbausteine=teilschritte_text[aktueller_schluessel].length;
        var bilderzahl=anzahl_textbausteine;
        zaehler=bilderzahl;
        zeige_aktuelles();
    } catch(e) {
        void(0);
    }
}

function zeige_aktuelles() {
    try {
        var bildobjekt=document.getElementById('abbildung');
        var aktueller_bildpfad=bildobjekt.getAttribute('src');
        var aktueller_schluessel=aktueller_bildpfad.split('/')[2];

        var bildpfad='daten/img/'+aktueller_schluessel+'/'+String(zaehler)+'.gif'
        var bildobjekt=document.getElementById('abbildung');
        bildobjekt.src=bildpfad;
        var textbereich=document.getElementById('textbereich');
        var neuer_text=hole_aktuellen_text(aktueller_schluessel, zaehler);
        textbereich.innerHTML=neuer_text+'<div style="font-size:8px;color:grey;text-align:center;">Bild-Nr.: '+zaehler+'</div>';
    } catch(e) {
        void(0);
    }
}
