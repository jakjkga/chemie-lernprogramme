function lade_seite() {
    $('#a_element option:first').prop('selected', true);
    zeige_radius();
}

function zeige_radius() {
    var element=$('#a_element option:selected').val();
    var elementname=elemente[element][1];
    var radius_zahlenwert=elemente[element][0];
    var farbe=ionenladungen[elemente[element][2]];
    
    
    $('#anzeige_elementname').text(elementname);
    $('#anzeige_zahlenwert_radius').text(String(radius_zahlenwert)+' pm');
    $('#kreis').attr('fill', farbe);
    $('#kreis').attr('fill-opacity', flaechentransparenz);
    // Atomrdius berechnen und anpassen
    var radius_skaliert=parseFloat(radius_zahlenwert)/4.0;
    $('#kreis').attr('r', radius_skaliert+'mm');
    // Radius Pfeil anpassen
    var x2=65+radius_skaliert-3.5;
    $('#anzeige_radius').attr('x2', x2+'mm');
}

