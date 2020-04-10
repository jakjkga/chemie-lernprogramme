var startelement='H';
var startmolekuel='daten/structures/wasser.mol'
var hoehe=300;
var breite=300;

var elemente=[
    'H', 'C', 'N', 'O', 'F', 'P', 'S', 'Cl', 'Br', 'I'
];

function lade_seite() {
    $('.mein_absatz').css('color', '#369');
    zeige_bindung(startelement);
    //Jmol.resizeApplet(mein_applet, 400);
    //Jmol.resizeApplet(mein_applet, [breite, hoehe]);
    //Jmol.loadFile(mein_applet, startmolekuel);
}

function zeige_bindung(wer) {
    var verbindungen=strukturen[wer];
    //console.log(verbindungen);
    // Anzeige der verschiedenen Moleküle
    $('#molekuelauswahl').empty();
    for (var i=0; i < verbindungen.length; i++) {
        $('#molekuelauswahl').append(texte[verbindungen[i]][1]);
    }
    $('input[name=auswahl]:first').attr('checked', true);
    zeige(verbindungen[0]);
    for (var i=0; i < elemente.length; i++) {
        $('#'+elemente[i]).removeClass('gerade_aktiv');
    }
    $('#'+wer).addClass('gerade_aktiv');
}

//molekuelauswahl

function zeige(wer) {
    //console.log(wer);
    var verzeichnis='daten/structures/';
    var endung='.mol';
    var pfad=verzeichnis+wer+endung;
    Jmol.loadFile(mein_applet, pfad);
    $('#checkbox1').attr('checked', false);
    $('#checkbox2').attr('checked', false);
    // gewählten Molekül-Radiobutton kennzeichnen
    $('#molekuelauswahl > label').removeClass('aktuell');
    $('#'+wer).parent().addClass('aktuell');
    var mimetyp='text/plain'; // chemical/x-mdl-molfile
    var bezeichnung=texte[wer][0];
    var linkelement='• <a class="linkbereich" href="'+pfad+'" type="'+mimetyp+'" target="_blank">'+bezeichnung+' (MOL-Datei)</a>';
    $('#downloadbereich').html(linkelement);
}

function setze_ansicht() {
    var gerade_gewaehlt=$('#checkbox1').is(':checked');
    //console.log(gerade_gewaehlt);
    if (gerade_gewaehlt) { // umschalten auf Kugelmodell
        Jmol.script(mein_applet, 'spacefill on');
    } else {
        Jmol.script(mein_applet, 'wireframe 0.15; spacefill 20%;');
    }
}

function setze_rotation() {
    var gerade_gewaehlt=$('#checkbox2').is(':checked');
    //console.log(gerade_gewaehlt);
    if (gerade_gewaehlt) { // umschalten auf Kugelmodell
        //console.log('Rotation ein');
        Jmol.script(mein_applet, 'rotate');
    } else {
        //console.log('Rotation aus');
        Jmol.script(mein_applet, 'rotate false');
    }
}
