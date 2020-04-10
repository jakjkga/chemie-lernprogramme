var pks_schwache_saeure=4.75;
var pkb_schwache_base=4.75;
var ph=0;
var ph_werte=[];

function csv_speichern() {
    var textinhalt='Volumen Maßlösung (ml);pH-Wert\n'+$('#anzeige_ergebnisse').val().replace(/^\n/, '').replace(/\n$/, '').replace(/\./g, ',');
    var uriContent='data:text/plain;charset=utf-8,'+encodeURIComponent(textinhalt);
    var neuer_tab=window.open(uriContent,'CSV-Speicheransicht');

}

function schritt() {
    var v_mass=parseFloat($('#i_volumen_massloesung').val());
    //console.log('schritt '+v_mass);
    var mass=$('#s_massloesung option:selected').val();
    var probe=$('#s_probeloesung option:selected').val();
    var schluessel=mass+'_'+probe;
    var c_mass=parseFloat($('#s_konzentration_massloesung').val());
    var c_probe=parseFloat($('#i_konzentration_probeloesung').val());
    var v_mass=parseFloat($('#i_volumen_massloesung').val())/1000; // l statt ml
    var v_probe=parseFloat($('#i_volumen_probeloesung').val())/1000; // l statt ml
    var n_mass=parseFloat(c_mass*v_mass);
    var n_probe=parseFloat(c_probe*v_probe);
    var v_aeq=(c_probe*v_probe)/c_mass;
    switch(schluessel) {
        /* ********************************************************************* 
            Fall 1: Maßlösung Natronlauge, Probelösung Essigsäure
                    Titration einer schwachen Säure mit einer starken Base     
        ********************************************************************* */
        case 'naoh_loes_hoac_loes':
            //console.log('Fall 1: Titration einer schwachen Säure mit einer starken Base');
            if (v_mass == 0) {
                console.log('Fall 1a: pH-Wert nur der schwachen Säure, zugegebene Basenmenge 0');
                ph=1.0/2.0*(pks_schwache_saeure-log10(c_probe));  
            } else if (v_mass > 0 && v_mass <= v_aeq) {
                //console.log('Fall 1b:  Werte im Pufferbreich kleiner als der Äquivalenzpunkt');               
                var n_schwache_saeure_puffer=n_probe-n_mass;
                var n_saeureanion_puffer=n_mass;
                //console.log(n_saeureanion_puffer+' ; '+n_schwache_saeure_puffer);
                try {
                ph=Math.abs(pks_schwache_saeure+log10(n_saeureanion_puffer/n_schwache_saeure_puffer));
                } catch(e) {
                    poh=1.0/2.0*(pkb-log10(c_probe));
                    ph=Math.abs(14-poh);
                } 
            /*else if (v_mass == v_aeq) {
                //console.log('Fall 1c: Äquivalenzpunkt erreicht');
                var pkb=14-pks_schwache_saeure;
                poh=1.0/2.0*(pkb-log10(c_probe));
                ph=14-poh;
            }*/ 
            }  else {
                //console.log('Fall 1d: Äquivalenzpunkt überschritten');
                v_mass=v_mass-v_aeq;
                poh=(-1)*log10(v_mass);
                ph=14-poh;
            }
            if (String(ph) == 'Infinity') {
                var pkb=14-pks_schwache_saeure;
                poh=1.0/2.0*(pkb-log10(c_probe));
                ph=14-poh;
            }
            break
        /* ********************************************************************* 
            Fall 2: Maßlösung Natronlauge, Probelösung Salzsäure
                    Titration einer starken Säure mit einer starken Base    
        ********************************************************************* */
        case 'naoh_loes_hcl_loes':
            //console.log('Fall 2: Titration einer starken Säure mit einer starken Base');
            if (v_mass == 0) {
                //console.log('Fall 2a: pH-Wert nur der starken Säure, zugegebene Basenmenge 0');
                ph=(-1)*log10(c_probe);
            } else if (v_mass > 0 && v_mass < v_aeq) {
                //console.log('Fall 2b:  Werte im Bereich kleiner als der Äquivalenzpunkt');               
                var n_saeure=n_probe-n_mass;
                var c_saeure=n_saeure/v_probe;
                ph=(-1)*log10(c_saeure);
            } else if (v_mass == v_aeq) {
                //console.log('Fall 2c: Äquivalenzpunkt erreicht');
                ph=7;
            } else {
                //console.log('Fall 2d: Äquivalenzpunkt überschritten');
                v_mass=v_mass-v_aeq;
                poh=(-1)*log10(v_mass);
                ph=14-poh;
            }
            break
        /* ********************************************************************* 
            Fall 3: Maßlösung Salzsäure, Probelösung Natronlauge
                    Titration einer starken Base mit einer starken Säure    
        ********************************************************************* */
        case 'hcl_loes_naoh_loes':
            //console.log('Fall 3: Titration einer starken Base mit einer starken Säure');
            if (v_mass == 0) {
                //console.log('Fall 3a: pH-Wert nur der starken Base, zugegebene Säuremenge 0');
                poh=(-1)*log10(c_probe);
                ph=14-poh;
            } else if (v_mass > 0 && v_mass < v_aeq) {
                //console.log('Fall 3b:  Werte im Bereich kleiner als der Äquivalenzpunkt');               
                var n_base=n_probe-n_mass;
                var c_base=n_base/v_probe;
                poh=(-1)*log10(c_base);
                ph=14-poh;
            } else if (v_mass == v_aeq) {
                //console.log('Fall 3c: Äquivalenzpunkt erreicht');
                ph=7;
            } else {
                //console.log('Fall 3d: Äquivalenzpunkt überschritten');
                v_mass=v_mass-v_aeq;
                ph=(-1)*log10(v_mass);
            }
            break
        /* ********************************************************************* 
            Fall 4: Maßlösung Salzsäure, Probelösung Ammoniak-Lösung          
                    Titration einer schwachen Base mit einer starken Säure     
        ********************************************************************* */
        case 'hcl_loes_nh3_loes':
            //console.log('Fall 4: Titration einer schwachen Base mit einer starken Säure');
            if (v_mass == 0) {
                //console.log('Fall 4a: pH-Wert nur der schwachen Base, zugegebene Säuremenge 0');
                poh=1.0/2.0*(pkb_schwache_base-log10(c_probe));
                ph=14-poh;
            } else if (v_mass > 0 && v_mass <= v_aeq) {
                //console.log('Fall 4b:  Werte im Pufferbreich kleiner als der Äquivalenzpunkt');
                var n_schwache_base_puffer=n_probe-n_mass;
                var n_saeure_puffer=n_mass;
                poh=pkb_schwache_base+log10(n_saeure_puffer/n_schwache_base_puffer);
                ph=Math.abs(14-poh);
            } /* else if (v_mass == v_aeq) {
                //console.log('Fall 4c: Äquivalenzpunkt erreicht');
                var pks=14-pkb_schwache_base;
                poh=1.0/2.0*(pks-log10(c_probe));
                ph=14-poh;
            }*/ else {
                //console.log('Fall 4d: Äquivalenzpunkt überschritten');
                v_mass=v_mass-v_aeq;
                ph=(-1)*log10(v_mass);
            }
            if (String(ph) == 'Infinity') {
                var pks=14-pkb_schwache_base;
                poh=1.0/2.0*(pks-log10(c_probe));
                ph=14-poh;
            }
            break
    }
    $('#i_konzentration_probeloesung').attr('disabled', true);
    if (parseFloat($('#i_volumen_massloesung').val()) != 0) {
        /* Auswahl- und Eingabebedienelemente deaktivieren */
        $('#s_massloesung').attr('disabled', true);
        $('#s_konzentration_massloesung').attr('disabled', true);
        $('#s_probeloesung').attr('disabled', true); 
        $('#i_volumen_probeloesung').attr('disabled', true);
    }
        // pH-Wert in Textfeld schreiben und anschließend plotten
        var ph_anzeige=Math.round(ph*100)/100;
        $('#i_aktueller_ph').val(ph_anzeige);
        var zugegebenes_volumen=$('#i_volumen_massloesung').val();
        var neues_ergebnis=zugegebenes_volumen+';'+ph_anzeige;
        var alter_text=$('#anzeige_ergebnisse').val().replace(/^\n/, '').replace(/\n\n/g, '');
        var neuer_text=alter_text+'\n'+neues_ergebnis;
        // doppelte Einträge entfernen
        var neuer_text_liste=neuer_text.split('\n');
        var neuer_text_eindeutig=neuer_text_liste.unique();
        var neuer_text_anzeige=neuer_text_eindeutig.join('\n');
        $('#anzeige_ergebnisse').val(neuer_text_anzeige.replace(/^\n/, ''));
        zeige_ergebnisse();
}

Array.prototype.unique = function() {
    var o = {};
    var tmp = [];
    for(var i = 0 ; i < this.length; i++) o[this[i]] = true;
    for(var i in o) tmp[tmp.length] = i;
    return tmp;
}

function zeige_ergebnisse() {
    clearBoard();
    plotData();
}

function Numsort (a, b) {
  return a - b;
}

function log10(x) { return Math.LOG10E * Math.log(x); }

function lade_seite() {
    /* Bedienelemente wieder aktivieren */
    $('#s_massloesung').removeAttr('disabled');
    $('#s_konzentration_massloesung').removeAttr('disabled');
    $('#s_probeloesung').removeAttr('disabled');
    //$('#i_konzentration_probeloesung').removeAttr('disabled');
    $('#i_volumen_probeloesung').removeAttr('disabled');
    /* Startwerte vorbelegen */
    $('#s_massloesung option:first').prop('selected', true);
    setze_massloesung();
    $('#s_konzentration_massloesung option:first').prop('selected', true);
    $('#i_volumen_massloesung').val(0);
    //$('#s_probeloesung option:first').prop('selected', true);
    $('#i_volumen_probeloesung').val('20');
    $('#i_aktueller_ph').val('noch nicht bestimmt');
    neue_zufallskonzentration();
    //$('#b_farbumschlag').attr('disabled', true);
    //$('#b_farbumschlag').hide();
    $('#anzeige_ergebnisse').val('');
    schritt();
}

function neue_zufallskonzentration() {
    var maxkonz=parseFloat($('#s_konzentration_massloesung option:selected').val());
    var zufallskonz=ermittle_zufallskonzentration(maxkonz);
    $('#i_konzentration_probeloesung').val(zufallskonz);
}

function ermittle_zufallskonzentration(maxkonz) {
    var zufallskonz=Math.floor(Math.random()*maxkonz*100)/100;
    if (zufallskonz == 0) {
        zufallskonz=0.01;
    }
    return zufallskonz
}

function setze_probeloesung() {
    $('#i_volumen_massloesung').val(0);
    $('#anzeige_ergebnisse').val('');
    schritt();
}

function setze_massloesung() {
    var massloesung=$('#s_massloesung option:selected').val();
    switch (massloesung) {
        case 'naoh_loes':
            $('#s_probeloesung option[value=hcl_loes]').removeAttr('disabled');
            $('#s_probeloesung option[value=hoac_loes]').removeAttr('disabled');
            $('#s_probeloesung option[value=naoh_loes]').attr('disabled', true);
            $('#s_probeloesung option[value=nh3_loes]').attr('disabled', true);
            $('#s_probeloesung option[value=hcl_loes]').prop('selected', true);
            break
        case 'hcl_loes':
            $('#s_probeloesung option[value=hcl_loes]').attr('disabled', true);
            $('#s_probeloesung option[value=hoac_loes]').attr('disabled', true);
            $('#s_probeloesung option[value=naoh_loes]').removeAttr('disabled');
            $('#s_probeloesung option[value=nh3_loes]').removeAttr('disabled');
            $('#s_probeloesung option[value=naoh_loes]').prop('selected', true);
            break
    }
    $('#i_volumen_massloesung').val(0);
    $('#anzeige_ergebnisse').val('');
    schritt();
}

function ermittle() {
    console.log('ermittle');
}
