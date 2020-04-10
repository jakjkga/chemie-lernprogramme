function lade_seite() {
    $('#s_ges option:first').prop('selected', true);
    auswahl();
}

function volumen_aus_stoffmenge() {
    var n=parseFloat($('#i_n').val().replace(/\,/, '.'));
    var V=(Math.round(n*22.41*100)/100);
    var antwortsatz='Das gesuchte Volumen beträgt '+V+' Liter.';
    $('#div_anzeige').text(antwortsatz);
}

function masse_aus_stoffmenge_und_molarer_masse() {
    var n=parseFloat($('#i_n').val().replace(/\,/, '.'));
    var M=parseFloat($('#i_M').val().replace(/\,/, '.'));
    var m=(Math.round(n*M*100)/100);
    var antwortsatz='Die gesuchte Masse beträgt '+m+' Gramm.';
    $('#div_anzeige').text(antwortsatz);
}

function teilchenzahl_aus_stoffmenge() {
    var n=parseFloat($('#i_n').val().replace(/\,/, '.'));
    var N=n*6.023*Math.pow(10, 23);
    var antwortsatz='Die gesuchte Teilchenzahl beträgt '+N+'.';
    $('#div_anzeige').text(antwortsatz);
}

function stoffmenge_aus_masse_und_molarer_masse() {
    var m=parseFloat($('#i_m').val().replace(/\,/, '.'));
    var M=parseFloat($('#i_M').val().replace(/\,/, '.'));
    var n=(Math.round(m/M*100)/100);
    var antwortsatz='Die gesuchte Stoffmenge beträgt '+n+' Mol.';
    $('#div_anzeige').text(antwortsatz); 
}

function stoffmenge_aus_volumen() {
    var V=parseFloat($('#i_V').val().replace(/\,/, '.'));
    var n=(Math.round(V/22.41*100)/100);
    var antwortsatz='Die gesuchte Stoffmenge beträgt '+n+' Mol.';
    $('#div_anzeige').text(antwortsatz); 
}

function stoffmenge_aus_teilchenzahl() {
    var basis=10;
    var exponent=parseFloat($('#i_exp').val().replace(/\,/, '.'));
    var faktor=parseFloat($('#i_N').val().replace(/\,/, '.'));
    var N=faktor*Math.pow(basis, exponent);
    var avogadro=6.023*Math.pow(10, 23)
    var n=N/avogadro;
    var antwortsatz='Die gesuchte Stoffmenge beträgt '+n+' Mol.';
    $('#div_anzeige').text(antwortsatz); 
}

function berechne() {
    var gesucht=$('#s_ges').val();
    var gegeben=$('input[type=radio][name=r_geg]:checked').attr('id');
    switch (gesucht) {
        case 'volumen':
            volumen_aus_stoffmenge();
            break
        case 'masse':
            masse_aus_stoffmenge_und_molarer_masse();
            break
        case 'teilchenzahl':
            teilchenzahl_aus_stoffmenge();
            break
        case 'stoffmenge':
            switch (gegeben) {
                case 'r_m':
                    stoffmenge_aus_masse_und_molarer_masse();
                    break
                case 'r_V':
                    stoffmenge_aus_volumen();
                    break
                case 'r_N':
                    stoffmenge_aus_teilchenzahl();
                    break
            }
            break
    }
}

function zweitauswahl() {
    var ausgewaehlt=$('input[type=radio][name=r_geg]:checked').attr('id');
    //console.log(ausgewaehlt);
    switch (ausgewaehlt) {
        case 'r_m':
            // M aktiv
            $('#i_M').removeAttr('disabled');
            // m aktiv
            $('#r_m').removeAttr('disabled');
            $('#i_m').removeAttr('disabled');
            // V inaktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').attr('disabled', true);
            $('#i_V').val('');
            $('#i_V').attr('disabled', true);
            // N inaktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').attr('disabled', true);
            $('#i_N').val('');
            $('#i_N').attr('disabled', true);
            $('#i_exp').val('');
            $('#i_exp').attr('disabled', true);
            break
        case 'r_V':
            // M inaktiv
            $('#i_M').val('');
            $('#i_M').attr('disabled', true);
            // m inaktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').attr('disabled', true);
            $('#i_m').val('');
            $('#i_m').attr('disabled', true);
            // V aktiv
            $('#r_V').removeAttr('disabled');
            $('#i_V').removeAttr('disabled');
            $('#i_V').val('22.41');
            // N inaktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').attr('disabled', true);
            $('#i_N').val('');
            $('#i_N').attr('disabled', true);
            $('#i_exp').val('');
            $('#i_exp').attr('disabled', true);
            break
        case 'r_N':
            // M inaktiv
            $('#i_M').val('');
            $('#i_M').attr('disabled', true);
            // m inaktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').attr('disabled', true);
            $('#i_m').val('');
            $('#i_m').attr('disabled', true);
            // V inaktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').attr('disabled', true);
            $('#i_V').val('');
            $('#i_V').attr('disabled', true);
            // N aktiv
            $('#r_N').removeAttr('disabled');
            $('#i_N').removeAttr('disabled');
            $('#i_N').val('6.023');
            $('#i_exp').removeAttr('disabled');
            $('#i_exp').val('23');
            break
    }
}

function auswahl() {
    var aktuell=$('#s_ges').val();
    switch (aktuell) {
        case 'volumen':
            // n aktiv
            $('#i_n').removeAttr('disabled');
            // M inaktiv
            $('#i_M').val('');
            $('#i_M').attr('disabled', true);
            // m inaktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').attr('disabled', true);
            $('#i_m').val('');
            $('#i_m').attr('disabled', true);
            // V inaktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').attr('disabled', true);
            $('#i_V').val('');
            $('#i_V').attr('disabled', true);
            // N inaktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').attr('disabled', true);
            $('#i_N').val('');
            $('#i_N').attr('disabled', true);
            $('#i_exp').val('');
            $('#i_exp').attr('disabled', true);
            break
        case 'masse':
            // n aktiv
            $('#i_n').removeAttr('disabled');
            // M aktiv
            $('#i_M').removeAttr('disabled');
            // m inaktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').attr('disabled', true);
            $('#i_m').val('');
            $('#i_m').attr('disabled', true);
            // V inaktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').attr('disabled', true);
            $('#i_V').val('');
            $('#i_V').attr('disabled', true);
            // N inaktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').attr('disabled', true);
            $('#i_N').val('');
            $('#i_N').attr('disabled', true);
            $('#i_exp').val('');
            $('#i_exp').attr('disabled', true);
            break
        case 'teilchenzahl':
            // n aktiv
            $('#i_n').removeAttr('disabled');
            // M inaktiv
            $('#i_M').val('');
            $('#i_M').attr('disabled', true);
            // m inaktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').attr('disabled', true);
            $('#i_m').val('');
            $('#i_m').attr('disabled', true);
            // V inaktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').attr('disabled', true);
            $('#i_V').val('');
            $('#i_V').attr('disabled', true);
            // N inaktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').attr('disabled', true);
            $('#i_N').val('');
            $('#i_N').attr('disabled', true);
            $('#i_exp').val('');
            $('#i_exp').attr('disabled', true);
            break
        case 'stoffmenge':
            // n inaktiv
            $('#i_n').val('');
            $('#i_n').attr('disabled', true);
            // M inaktiv
            $('#i_M').val('');
            $('#i_M').attr('disabled', true);
            // m aktiv
            $('#r_m').removeAttr('checked');
            $('#r_m').removeAttr('disabled');
            $('#i_m').removeAttr('disabled');
            // V aktiv
            $('#r_V').removeAttr('checked');
            $('#r_V').removeAttr('disabled');
            $('#i_V').removeAttr('disabled');
            // N aktiv
            $('#r_N').removeAttr('checked');
            $('#r_N').removeAttr('disabled');
            $('#i_N').removeAttr('disabled');
            $('#i_exp').removeAttr('disabled');
            break
    }
}
