function lade_seite() {
    $('#s_reaktion option:first').prop('selected', true);
    $('#s_schritt option:first').prop('selected', true);
    anzeigen();
}

function anzeigen() {
    var reaktion=$('#s_reaktion option:selected').val();
    var schritt=$('#s_schritt option:selected').val();
    var schluessel=reaktion+'_'+schritt;
    var anzeigetext_stoffebene=textdaten[schluessel]['stoffebene'];
    var anzeigetext_teilchenebene=textdaten[schluessel]['teilchenebene'];
    $('#t_stoffebene').val(anzeigetext_stoffebene);
    $('#t_teilchenebene').val(anzeigetext_teilchenebene);
    $('#img_stoffebene').attr('src', 'daten/img/stoffebene/'+schluessel+'.gif');
    $('#img_teilchenebene').attr('src', 'daten/img/teilchenebene/'+schluessel+'.gif');
    var katalysetyp=reaktion.split('_')[0];
    var stoff=reaktion.split('_')[1];
    var linkurl_katalysezyklus='daten/img/katalysezyklus/katalysezyklus_'+stoff+'.gif';
    var linkurl_energiediagramm='daten/img/energiediagramm/energiediagramm_'+katalysetyp+'.gif';
    $('#a_katalysezyklus').attr('href', linkurl_katalysezyklus);
    $('#a_energiediagramm').attr('href', linkurl_energiediagramm);
}
