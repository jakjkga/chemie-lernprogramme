var auswahl;

function lade_seite() {
    $('#b_ed1').removeAttr('disabled');
    $('#b_ed2').removeAttr('disabled');
    $('#b_prod1').removeAttr('disabled');
    $('#b_prod2').removeAttr('disabled');
    $('#s_ed1 option[value=1]').prop('selected', true);
    $('#s_ed2 option[value=1]').prop('selected', true);
    $('#s_prod1 option[value=1]').prop('selected', true);
    $('#s_prod2 option[value=1]').prop('selected', true);
    $('#s_ed1').attr('disabled', true);
    $('#s_ed2').attr('disabled', true);
    $('#s_prod1').attr('disabled', true);
    $('#s_prod2').attr('disabled', true);
    auswahl='X';
    setze_konzentration();
    MathJax.Hub.Typeset();
}


function setze_konzentration() {
    var c_ed1=String($('#s_ed1 option:selected').val());
    var c_ed2=String($('#s_ed2 option:selected').val());
    var c_prod1=String($('#s_prod1 option:selected').val());
    var c_prod2=String($('#s_prod2 option:selected').val());
    var schluessel=c_ed1+c_ed2+c_prod1+c_prod2;
    console.log(schluessel);
    var hintergrundfarbe=gg[auswahl][schluessel][0];
    var dateiname=gg[auswahl][schluessel][1];
    $('#gefaesshintergrund').attr('fill', hintergrundfarbe);
    $('#img_abb').attr('src', 'daten/img/'+dateiname+'.png');
}


function setze_stoff(wer) {
    $('#b_ed1').attr('disabled', true);
    $('#b_ed2').attr('disabled', true);
    $('#b_prod1').attr('disabled', true);
    $('#b_prod2').attr('disabled', true);
    var endung=wer.split('_')[1];
    //$('#b_'+endung).removeAttr('disabled');
    $('#s_'+endung).removeAttr('disabled');
    auswahl=endung;
}

function zuruecksetzen() {
    lade_seite();
}
