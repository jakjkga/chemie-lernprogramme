function lade_seite() {
    $('#table_formularinhalt').wrap('<form>').parent('form').trigger('reset');
    $('#img_abb').attr('src', 'daten/img/start.gif');
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information-inactive.png');
    
}

function setze_monosaccharid_rest() {
    $('#s_monosaccharid').wrap('<form>').parent('form').trigger('reset');
    var r=$('#s_monosaccharid_rest option:selected').val();
    var z=$('#s_monosaccharid option:selected').val();
    var schluessel=String(r)+String(z)
    console.log(schluessel);
    $('#s_monosaccharid option').attr('disabled', true);
    switch (r) {
        case 'r1':
            $('#s_monosaccharid option[value=z1]').removeAttr('disabled');
            $('#s_monosaccharid option[value=z3]').removeAttr('disabled');
            $('#s_monosaccharid option[value=z4]').removeAttr('disabled');
            $('#s_monosaccharid option[value=z5]').removeAttr('disabled');
            break
        case 'r2':
            $('#s_monosaccharid option[value=z2]').removeAttr('disabled');
            break
        case 'r3':
            $('#s_monosaccharid option[value=z3]').removeAttr('disabled');
            break
        case 'r4':
            $('#s_monosaccharid option[value=z2]').removeAttr('disabled');
            break
    }
    $('#img_abb').attr('src', 'daten/img/'+r+'.gif');
    $('#i_name').val('');
    $('#i_reduzierend').val('');
    $('t_bedeutung').val('');
    $('#a_informationsseite').attr('href', '#');
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information-inactive.png');
}

function setze_monosaccharid() {
    var r=$('#s_monosaccharid_rest option:selected').val();
    var z=$('#s_monosaccharid option:selected').val();
    var schluessel=String(r)+String(z)
    console.log(schluessel);
    var langer_name=disacchararide[schluessel][0];
    var reduzierend=disacchararide[schluessel][1];
    var bedeutung=disacchararide[schluessel][2];
    var kuerzel=disacchararide[schluessel][3]
    var bildpfad='daten/img/'+kuerzel+'.gif';
    var linkadresse='http://chemie-lernprogramme.de/daten/help/disaccharider/html/'+kuerzel+'.html'
    $('#i_name').val(langer_name);
    $('#i_reduzierend').val(reduzierend);
    $('#t_bedeutung').val(bedeutung);
    $('#img_abb').attr('src', bildpfad);
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information.png');
    $('#a_informationsseite').attr('href', linkadresse);
    
    
}

function zuruecksetzen() {
    lade_seite();
}
