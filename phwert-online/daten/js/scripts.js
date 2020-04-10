function lade_seite() {
    $('#s_st option:first').prop('selected', true);
    auswahl();
    $('#i_c').val('1.00');
    $('#i_exp').val('0');
    $('#i_ph').val('');
    $('#i_ph').attr('disabled', true);
}

function auswahl() {
    var aktuelle_auswahl=$('#s_st option:selected').val();
    switch (aktuelle_auswahl) {
        case 'stark':
            $('#i_tn').val('');
            $('#i_tn').attr('disabled', true);
            break
        case 'schwach':
            $('#i_tn').removeAttr('disabled');
            break
    }
}

function berechne() {
    var aktuelle_auswahl=$('#s_st option:selected').val();
    switch (aktuelle_auswahl) {
        case 'stark':
            // pH = -1*math.log10(SAEUREKONZENTRATION)
            var c0=parseFloat($('#i_c').val().replace(/\,/, '.'));
            var exponent=parseFloat($('#i_exp').val().replace(/\,/, '.'));
            var c=c0 * Math.pow(10, exponent);
            if (c > 1.00) {
                alert('Der pH-Wert ist sinnvoll nur für verdünnte Lösungen mit Konzentrationen kleiner als 1,0 Mol/Liter definiert! Er kann sich hier daher nur in einem Bereich zwischen 0 und 7 bewegen! Eine Zugabe einer sehr geringen Säuremenge von weniger als 10⁻⁷ mol/l führt nicht dazu, dass die Lösung alkalisch wird, da dann die in der Autoprotolyse des Wassers gebildeten Oxoniumionen mit berücksichtigt werden müssten.');
            }
            ph=-1 * Math.log10(c);
            ph_anzeige=Math.floor(ph*100)/100;
            $('#i_ph').val(ph_anzeige);
            $('#i_ph').removeAttr('disabled');
            break
        case 'schwach':
            // pH = 0.5*(float(pKs)-math.log10(SAEUREKONZENTRATION))  
            var c0=parseFloat($('#i_c').val().replace(/\,/, '.'));
            var exponent=parseFloat($('#i_exp').val().replace(/\,/, '.'));
            var c=c0 * Math.pow(10, exponent);
            var schluessel=$('#i_tn').val().replace(/\s+/g, '');
            try {
                var pks=parseFloat(PKSWERTE[schluessel]);
                ph=0.5 * ( pks - Math.log10(c) );
                ph_anzeige=Math.floor(ph*100)/100;
                $('#i_ph').val(ph_anzeige);
                $('#i_ph').removeAttr('disabled');
                if (ph_anzeige.isNaN || String(ph_anzeige) == 'NaN' ) {
                    alert('Der eingegebene Name des Säureteilchens ist dem Programm nicht bekannt!');
                    $('#i_ph').val('');
                    $('#i_ph').attr('disabled', true);
                }
            } catch(e) {
                $('#i_ph').val('');
                $('#i_ph').attr('disabled', true);
            }
            
            break
    }
}

