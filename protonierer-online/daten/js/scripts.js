function lade_seite() {
    $('#s_reaktion option:first').prop('selected', true);
    $('#s_darstellungsebene option:first').prop('selected', true);
    $('#s_schritt option:first').prop('selected', true);
    $('#img_anzeige').attr('daten/img/start.gif');
    $('#div_anzeige').hide();
    $('#t_anzeige').val('');
}

function setze(wer) {
    var reaktion=$('#s_reaktion option:selected').val();
    var darstellungsebene=$('#s_darstellungsebene option:selected').val();
    var schritt=$('#s_schritt option:selected').val();
    var bildpfad='daten/img/'+reaktion+'/'+darstellungsebene+'/'+schritt+'/'+reaktion+'_'+darstellungsebene+'_'+schritt+'_'+wer+'.gif';
    //console.log(bildpfad);
    var schluessel=reaktion+'_'+darstellungsebene+'_'+schritt+'_'+wer;
    var beschreibungstext=textdaten[schluessel];
    $('#t_anzeige').val(beschreibungstext);
    switch (darstellungsebene) {
        case 'summe':
            $('#div_anzeige').show();
            var sf=summenformeln[schluessel];
            $('#div_anzeige').html(sf);
            $('#img_anzeige').hide();
            //$('input[type=button]#uez').hide();
            $('input[type=button]#uez').attr('disabled', true);
            break
        default:
            $('#div_anzeige').html('');
            $('#div_anzeige').hide();
            $('#img_anzeige').show();
            $('#img_anzeige').attr('src', bildpfad);
            //$('input[type=button]#uez').show();
            $('input[type=button]#uez').removeAttr('disabled');
            //if ()
            break
    } 
}
