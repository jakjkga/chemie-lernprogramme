var v_m=22.4;
var avogadro=6.022*Math.pow(10, -23);


function lade_seite() {
    $('#s_groesse option:first').prop('selected', true);
    $('#s_aufloesen option:first').prop('selected', true);
    setze_formel();
    werte_zuruecksetzen();
}

function werte_zuruecksetzen() {
    $('#i_parameter_1').val('');
    $('#i_parameter_2').val('');
    $('#i_ergebnis').val('');
}

function setze_formel() {
    werte_zuruecksetzen();
    var key1=$('#s_groesse option:selected').val();
    var key2=$('#s_aufloesen option:selected').val();
    var latex_formel=daten[key1][key2][0];
    $('#div_formelanzeige').html(latex_formel);
    // MathJax eneut aufrufen zum Aktualisieren der Ansicht
    MathJax.Hub.Typeset();
    var param_1=daten[key1][key2][1];
    var param_2=daten[key1][key2][2];
    var ergebnis=daten[key1][key2][3];
    var einheit_param_1=daten[key1][key2][4];
    var einheit_param_2=daten[key1][key2][5];
    var einheit_ergebnis=daten[key1][key2][6];
    //console.log($('#i_parameter_1').parent().parent().find('label').first().text(param_1));
    $('#i_parameter_1').parent().parent().find('label').first().html('<span class="hinweis">(gegeben)</span> '+param_1);
    $('#i_parameter_2').parent().parent().find('label').first().html('<span class="hinweis">(gegeben)</span> '+param_2);
    $('#i_gesucht').parent().parent().find('label').first().html('<span class="hinweis">(gesucht)</span> '+ergebnis);
    $('#span_einheit_1').html(einheit_param_1);
    $('#span_einheit_2').html(einheit_param_2);
    $('#span_einheit_gesucht').html(einheit_ergebnis); 
    if (key1 == 'teilchenzahl') {
        if (key2 == 'stoffmenge') {
            $('#i_parameter_2').val(avogadro);
        }
        if (key2 == 'messbare_groesse') {
            $('#i_parameter_2').val(avogadro);
        }
    }
    if (key1 == 'volumen') {
        if (key2 == 'stoffmenge') {
            $('#i_parameter_2').val(v_m);
        }
        if (key2 == 'messbare_groesse') {
            $('#i_parameter_2').val(v_m);
        }
    }
}

function berechne() {
    var param1=$('#i_parameter_1').val();
    if (String(param1).length < 1) {
        //alert('Es wurde kein Wert ins erste Eingabefeld eingetragen!');
        $('#i_parameter_1').addClass('fehler');
    } else {
        $('#i_parameter_1').removeClass('fehler');
    }
    var param2=$('#i_parameter_2').val();
    if (String(param2).length < 1) {
        //alert('Es wurde kein Wert ins zweite Eingabefeld eingetragen!');
        $('#i_parameter_2').addClass('fehler');
    } else {
        $('#i_parameter_2').removeClass('fehler');
    }
    if ( String(param1).length > 0 && String(param2).length > 0 ) {
        var key2=$('#s_aufloesen option:selected').val();
        //console.log(key2);
        switch(key2) {
            case 'messbare_groesse':
                var ergebnis=param1*param2;
                $('#i_gesucht').val(ergebnis);
                break
            case 'stoffmenge':
                var ergebnis=param1/param2;
                $('#i_gesucht').val(ergebnis);
                break
            case 'molare_groesse':
                var ergebnis=param1/param2;
                $('#i_gesucht').val(ergebnis);
                break
        }
    }
}
