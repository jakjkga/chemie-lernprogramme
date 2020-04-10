function lade_seite() {
    $('#r_temp').val(20);
    setze_temp();
}

function setze_temp() {
    var temp=parseInt($('#r_temp').val());
    $('#i_temp').val(temp);
    var massenprozent_no2=anteile_no2[temp][0];
    var teilchenanteil_no2=massenprozent_no2;
    var massenprozent_n2o4=100-massenprozent_no2;
    var teilchenanteil_n2o4=parseInt(massenprozent_n2o4/2);
    var hintergrundfarbe=anteile_no2[temp][1];
    $('#i_massenprozent_no2').val(massenprozent_no2);
    $('#i_teilchenanteil_no2').val(teilchenanteil_no2);
    $('#i_massenprozent_n2o4').val(massenprozent_n2o4);
    $('#i_teilchenanteil_n2o4').val(teilchenanteil_n2o4);
    $('#gefaesshintergrund').attr('fill', hintergrundfarbe);
    $('#teilchenabbildung').attr('xlink:href', 'daten/img/t_'+temp+'.png');
    
}
