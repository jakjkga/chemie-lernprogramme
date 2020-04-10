function lade_seite() {
    $('#s_verb option:first').prop('selected', true);
    auswahl_alkan();
}

function auswahl_alkan() {
    var verbname=$('#s_verb option:selected').text();
    //console.log(verbname);
    var sf=verbnamen[verbname][0];
    var sdp=verbnamen[verbname][1];
    var geruestisom=verbnamen[verbname][2];
    $('#i_sf').val(sf);
    $('#i_sdp').val(sdp);
    $('#i_geruestisom').val(geruestisom);
    var strukturdateipfad='daten/jsmol/strukturen/pdb/'+verbname+'.mol.pdb';
    Jmol.loadFile(mein_applet1, strukturdateipfad);
    
}

