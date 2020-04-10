function ermittle_sf() {
    var metall_lang=$('#in_metall').val().toLowerCase();
    var metall=metall_lang.replace(/\s+/g, '').replace(/\-/g, '');
    var nichtmetall_lang=$('#in_nichtmetall').val().toLowerCase();
    var nichtmetall=nichtmetall_lang.replace(/\s+/g, '').replace(/\-/g, '');
    var metall_elementsymbol=metalle[metall][0];
    var metall_ladung=metalle[metall][1];
    var metall_name=metalle[metall][2];
    var nichtmetall_elementsymbol=nichtmetalle[nichtmetall][0];
    var nichtmetall_ladung=nichtmetalle[nichtmetall][1];
    var nichtmetall_name=nichtmetalle[nichtmetall][2];
    var sf=erzeuge_verhaeltnisformel(metall_elementsymbol, metall_ladung, nichtmetall_elementsymbol, nichtmetall_ladung, metall);
    $('#aus_sf').removeAttr('disabled');
    $('#aus_sf').val(sf);
    var salzname=metall_name+nichtmetall_name;
    $('#aus_name').removeAttr('disabled');
    $('#aus_name').val(salzname);
}

function erzeuge_verhaeltnisformel(metall_elementsymbol, 
                                    metall_ladung, 
                                    nichtmetall_elementsymbol, 
                                    nichtmetall_ladung, 
                                    metall) {
    metall_ladung=parseInt(metall_ladung);
    nichtmetall_ladung=parseInt(nichtmetall_ladung);
    // Bei einem Verhältnis von 1:1 nicht anzeigen
        if (metall_ladung == nichtmetall_ladung) {
            metall_ladung='';
            nichtmetall_ladung='';
            var sf=metall_elementsymbol+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
        } else {
            // ggf. kleines Gemeinsames Vielfaches (und ggf. Anionen klammern)
            // Bed. 1: Mehr als zwei Elemente, als ab drei Buchstaben
            // Bed. 2: Koeffizient Nichtmetall ungleich 1
            if ( nichtmetall_elementsymbol.length > 2 && metall_ladung !== 1 ) {
                var sf=metall_elementsymbol+indizes[String(nichtmetall_ladung)]+'('+nichtmetall_elementsymbol+')'+indizes[String(metall_ladung)];
            } else {
        
                // Index 1 nicht anzeigen
                if (metall_ladung == 1) {
                    metall_ladung='';
                }
                if (nichtmetall_ladung == 1) {
                    nichtmetall_ladung='';
             }
                if (nichtmetall_ladung > 1) { // nur dann kann z.B. das Ammoniumion mehrfach vorkommen
                    //alert('ammonium-zweig');
                    switch (metall) {
                        case 'ammonium':
                            var sf='('+metall_elementsymbol+')'+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
                            break;
                        case 'ammoniumion':
                            var sf='('+metall_elementsymbol+')'+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
                            break;
                        case 'ammoniumkation':
                            var sf='('+metall_elementsymbol+')'+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
                            break;
                        default:
                            var sf=metall_elementsymbol+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
                    }
                } else {
                    var sf=metall_elementsymbol+indizes[String(nichtmetall_ladung)]+nichtmetall_elementsymbol+indizes[String(metall_ladung)];
                }
        //alert(sf);
        }
    }
    var sf_ohne_1=sf.replace(/₁/g, '');
    return sf_ohne_1
}


function lade_seite() {
    zurueck_setzen();
    $('#in_metall').bind('keydown', function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code == 13) {
            ermittle_sf();
        }
    })
    $('#in_nichtmetall').bind('keydown', function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code == 13) {
            ermittle_sf();
        }
    })
    $('#in_metall').focus();
}

function zurueck_setzen() {
    $('#in_metall').val('');
    $('#in_nichtmetall').val('');
    $('#aus_sf').val('');
    $('#aus_name').val('');
    $('#aus_sf').attr('disabled', true);
    $('#aus_name').attr('disabled', true);
}


