function lade_seite() {
    $('#s_mehrst option:first').prop('selected', true);
    setze_mehrst();
    $('#s_zugef option:first').prop('selected', true);
    setze_zugef();
}

function setze_zugef() {
    $('#s_nutzbare option[value=lichtenergie]').prop('selected', false);
    $('#s_nutzbare option[value=elektrische_energie]').prop('selected', false);
    $('#s_nutzbare option[value=chemische_energie]').prop('selected', false);
    $('#s_nutzbare option[value=kernenergie]').prop('selected', false);
    $('#s_nutzbare option[value=mechanische_energie]').prop('selected', false);
    $('#s_nutzbare option[value=waermeenergie]').prop('selected', false);
    $('#s_nutzbare option[value=lichtenergie]').attr('disabled', true);
    $('#s_nutzbare option[value=elektrische_energie]').attr('disabled', true);
    $('#s_nutzbare option[value=chemische_energie]').attr('disabled', true);
    $('#s_nutzbare option[value=kernenergie]').attr('disabled', true);
    $('#s_nutzbare option[value=mechanische_energie]').attr('disabled', true);
    $('#s_nutzbare option[value=waermeenergie]').attr('disabled', true);
    var zugef=$('#s_zugef option:selected').val();
    var bildpfad='daten/img/icons/'+zugef+'.gif';
    //console.log(bildpfad);
    $('#img_zugef').attr('src', bildpfad);
    switch (zugef) {
        case 'lichtenergie':
            $('#s_nutzbare option[value=elektrische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=chemische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=waermeenergie]').removeAttr('disabled');
            $('#s_nutzbare option[value=elektrische_energie]').prop('selected', true);
            break
        case 'elektrische_energie':
            $('#s_nutzbare option[value=chemische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=mechanische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=chemische_energie]').prop('selected', true);
            break
        case 'chemische_energie':
            $('#s_nutzbare option[value=elektrische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=mechanische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=waermeenergie]').removeAttr('disabled');
            $('#s_nutzbare option[value=elektrische_energie]').prop('selected', true);
            break
        case 'kernenergie':
            $('#s_nutzbare option[value=waermeenergie]').removeAttr('disabled');
            $('#s_nutzbare option[value=waermeenergie]').prop('selected', true);
            break
        case 'mechanische_energie':
            $('#s_nutzbare option[value=elektrische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=mechanische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=elektrische_energie]').prop('selected', true);
            break
        case 'waermeenergie':
            $('#s_nutzbare option[value=mechanische_energie]').removeAttr('disabled');
            $('#s_nutzbare option[value=mechanische_energie]').prop('selected', true);
            break
    }
    setze_nutzbare();
}

function setze_nutzbare() {
    var zugef=$('#s_zugef option:selected').val();
    var nutzbare=$('#s_nutzbare option:selected').val();
    var bildpfad='daten/img/icons/'+nutzbare+'.gif';
    //console.log(bildpfad);
    $('#img_nutzbare').attr('src', bildpfad);
    var s1=zugefuehrte_energieformen[zugef];
    var s2=nutzbare_energieformen[nutzbare];
    var schluessel=s1+s2;
    //console.log(schluessel);
    var energiewandler=einzel_energiewandler[schluessel][0];
    var wirkungsgrad=Math.round(parseFloat(einzel_energiewandler[schluessel][1])*100);
    //console.log(schluessel+' '+energiewandler+' '+wirkungsgrad);
    var bildpfad='daten/img/'+schluessel+'.jpg';
    $('#img_schema').attr('src', bildpfad);
    $('#anzeige_wirkungsgrad').html('mit einem Wirkungsgrad&nbsp;<em>η</em>&nbsp;von&nbsp;≈&nbsp;'+wirkungsgrad+'&nbsp;%');
    $('#anzeige_wirkungsgrad').show();
    var linktext='<a href="http://de.wikipedia.org/wiki/'+energiewandler+'" target="_blank">'+energiewandler+'</a>';
    $('#anzeige_energiewandler').html(linktext);
}

function setze_mehrst() {
    var energiewandler=$('#s_mehrst option:selected').val();
    var energiewandler_text=$('#s_mehrst option:selected').text();
    var iconpfad='daten/img/icons/'+energiewandler+'.gif';
    $('#img_mehrst').attr('src', iconpfad);
    var bildpfad='daten/img/'+energiewandler+'.gif';
    $('#img_schema').attr('src', bildpfad);
    var linktext='<a href="http://de.wikipedia.org/wiki/'+energiewandler_text+'" target="_blank">'+energiewandler_text+'</a>';
    $('#anzeige_energiewandler').html(linktext);
    $('#anzeige_wirkungsgrad').hide();
}

