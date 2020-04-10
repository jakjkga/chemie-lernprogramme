function lade_seite() {
    $('#a_element option:first').prop('selected', true);
    zeige_radius();
}

function zeige_radius() {
    var element=$('#a_element option:selected').val();
    var elementname=elemente[element][1];
    var radius_zahlenwert=elemente[element][0];
    var farbschema=$('#a_farbschema option:selected').val();
    switch (farbschema) {
        case 'cpk':
            var farbe=elemente[element][2];
            break
        case 'nach_perioden':
            var farbe=farben[elemente[element][3]];
            //console.log(farbe);
            break
    }
    
    $('#anzeige_elementname').text(elementname);
    $('#anzeige_zahlenwert_radius').text(String(radius_zahlenwert)+' pm');
    $('#kreis').attr('fill', farbe);
    // Atomrdius berechnen und anpassen
    var radius_skaliert=parseFloat(radius_zahlenwert)/4.0;
    $('#kreis').attr('r', radius_skaliert+'mm');
    // Radius Pfeil anpassen
    var x2=65+radius_skaliert-3.5;
    $('#anzeige_radius').attr('x2', x2+'mm');
}

function setze_farbschema() {
    zeige_radius();
}

/*
function zoom_out() {
    var faktor=0.8;
    $('#zeichnung').attr('transform', 'scale('+faktor+')');
    console.log(faktor);
}

function zoom_original() {
    var faktor=1.0;
    $('#zeichnung').attr('transform', 'scale('+faktor+')');
    console.log(faktor);
}
function zoom_in() {
    var faktor=1.5;
    $('#zeichnung').attr('transform', 'scale('+faktor+')');
    console.log(faktor);
}
*/
