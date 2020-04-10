function lade_seite() {
    for (var i=0; i < alle_elemente.length; i++) {
        var elementsymbol=alle_elemente[i];
        var schluessel='#'+elementsymbol;
        var elementname=psedata[elementsymbol][0];
        $(schluessel).attr('title', elementname);
        //$(schluessel).hover( // schon bei Mouseover
        //    function () {
        //        waehle_element(this.id);
        //    }
        //);
        $(schluessel).click( // erst beim Anklicken
            function () {
                waehle_element(this.id);
            }
        );
    }
    waehle_element('H');
    $('#hinweisfeld').html(vereinfachungen_hinweis);
}

function waehle_element(wer) {
    //alert(wer);
    var elementsymbol=wer;
    var elementname=psedata[elementsymbol][0];
    var gesamtelektronenzahl=psedata[elementsymbol][1];
    var valenzelektronenzahl=psedata[elementsymbol][2];
    var valenzelektronenkonfiguration=psedata[elementsymbol][3];
    $('#anzeige_elementsymbol').attr('value', elementsymbol);
    $('#anzeige_elementname').attr('value', elementname);
    $('#anzeige_gesamtelektronenzahl').attr('value', gesamtelektronenzahl);
    $('#anzeige_valenzelektronenzahl').attr('value', valenzelektronenzahl);
    $('#anzeige_valenzelektronenkonfiguration').html(valenzelektronenkonfiguration);
    zeige_elektronen(wer);
    zeige_hinweis(wer);
}

function zeige_hinweis(wer) {
    if (ausnahmen.enthaelt(wer)) {
        var hinweis='⇐ Im Schema links '+ausnahmen_hinweise[wer];
        $('#warnungsfeld').html(hinweis);
    } else {
        var hinweis='&nbsp;'
        $('#warnungsfeld').html(hinweis);
    }
}

Array.prototype.enthaelt=function(gesuchter_wert) {
    for (var i=0, len=this.length; i < len && this[i] !== gesuchter_wert; i++);
         return i < len;
}

function zeige_elektronen(wer) {
    // Alle e⁻ ausblenden
    for (i=1; i <= 112; i++) {
        var schluessel='#e'+String(i);
        $(schluessel).attr('visibility', 'hidden'); //visibility=hidden/collapse ODER display=none
    }
    if (ausnahmen.enthaelt(wer)) {
        // e⁻ 1 bis 19 für alle Ausnahmen gleich
        for (i=1; i <= 19; i++) {
            var schluessel='#e'+String(i);
            $(schluessel).attr('visibility', 'visible'); //visibility=visible ODER display=inline
        }
        for (i=0; i< ausnahmen_elektronen[wer].length; i++) {
            var j=ausnahmen_elektronen[wer][i];
            var schluessel='#e'+String(j);
            $(schluessel).attr('visibility', 'visible'); //visibility=visible ODER display=inline
        }     
    } else {
        for (i=1; i <= parseInt(psedata[wer][1]); i++) {
            var schluessel='#e'+String(i);
            $(schluessel).attr('visibility', 'visible'); //visibility=visible ODER display=inline
        }
    }
    
    
}
