function lade_seite() {
    $('#r_druck').val(2);
    setze_druck();
}

function setze_druck() {
    var druck=parseInt($('#r_druck').val());
    var teilchenanteil_no2=anteile_no2[druck][0];
    var teilchenanteil_n2o4=anteile_no2[druck][2];
    var massenprozent_no2=anteile_no2[druck][1];
    var massenprozent_n2o4=anteile_no2[druck][3];
    var raumteile=anteile_no2[druck][4];
    $('#i_massenprozent_no2').val(massenprozent_no2);
    $('#i_teilchenanteil_no2').val(teilchenanteil_no2);
    $('#i_massenprozent_n2o4').val(massenprozent_n2o4);
    $('#i_teilchenanteil_n2o4').val(teilchenanteil_n2o4);
    $('#i_raumteile').val(raumteile);
    $('#img_abb').attr('src', 'daten/img/abb_'+druck+'.png');
}

