var startbild='daten/img/dummy.png';

function lade_seite() {
    $('#table_formularinhalt').wrap('<form>').parent('form').trigger('reset');
    $('#table_formularinhalt').unwrap();
    $('#i_molekuelname').parent().parent().hide();
    $('#img_molekuelabb').parent().parent().hide(); 
}

function setze_bild(wer) {
    var endung=wer.split('_')[1];
    var neuer_wert=$('#s_'+endung+' option:selected').val();
    $('#img_'+endung).attr('src', 'daten/img/'+neuer_wert+'.png');
    if (endung =='z' && neuer_wert == 'C_zwei_z') {
        $('#s_u option:first').prop('selected', true);
        $('#img_u').attr('src', startbild);
        $('#s_u').hide();
    } else if (endung =='z' && neuer_wert == 'C_vier_z' ||
               endung =='z' && neuer_wert == 'N_z' || 
               endung =='z' && neuer_wert == 'O_z' ) {
        $('#s_u').show();
    }
    if (endung =='z' && neuer_wert == 'N_z') {
        $('#s_o option:first').prop('selected', true);
        $('#img_o').attr('src', startbild);
        $('#s_o').hide();
    } else if (endung =='z' && neuer_wert == 'C_zwei_z') {
        $('#s_o').show();
    }
    if (endung =='z' && neuer_wert == 'O_z') {
        $('#s_o option:first').prop('selected', true);
        $('#img_o').attr('src', startbild);
        $('#s_o').hide();
        $('#s_re option:first').prop('selected', true);
        $('#img_re').attr('src', startbild);
        $('#s_re').hide();
    } else  if (endung =='z' && neuer_wert == 'C_vier_z' ||
                endung =='z' && neuer_wert == 'C_zwei_z' ) {
        $('#s_o').show();
        $('#s_re').show();
    } else if (endung =='z' && neuer_wert == 'N_z') {
        $('#s_o').hide();
        $('#s_re').show();
    }
    var schluessel=String($('#s_z option:selected').val()).replace(/\_z/g, '')+'_'+
                   String($('#s_li option:selected').val()).replace(/\_li/g, '')+'_'+
                   String($('#s_o option:selected').val()).replace(/\_o/g, '')+'_'+
                   String($('#s_re option:selected').val()).replace(/\_re/g, '')+'_'+
                   String($('#s_u option:selected').val()).replace(/\_u/g, '');
    //console.log(schluessel);
    var molekuelname=false;
    var molekuelabb=false;
    try {
        var molekuelname=datensammlung[schluessel][0];
        //var molekuelabb=datensammlung[schluessel][1];
    } catch(e) {
        //console.log('Fehler: Kein Eintrag für '+schluessel);
        void(0);
    }
    if (molekuelname) {
        $('#i_molekuelname').val(molekuelname);
        $('#i_molekuelname').parent().parent().show();
        $('#a_wp').attr('href', 'https://de.wikipedia.org/wiki/'+molekuelname);
        molekuelabb=true;
    } else {
        $('#i_molekuelname').val('');
        $('#i_molekuelname').parent().parent().hide();
        $('#a_wp').attr('href', '#');
        molekuelabb=false;
    }
    if (molekuelabb) {
        $('#img_molekuelabb').attr('src', 'daten/img/'+molekuelname+'.png');
        $('#img_molekuelabb').parent().parent().show();
        //console.log('daten/img/'+molekuelname+'.png');
    } else {
        $('#img_molekuelabb').attr('src', startbild);
        $('#img_molekuelabb').parent().parent().hide(); 
    }
    
}
