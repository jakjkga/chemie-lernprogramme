function lade_seite() {
    $('#i_b1').val('Acetation');
    $('#i_s2').val('Chlorwasserstoff');
    ermittle();
}

function ermittle() {
    var schluessel_b1=$('#i_b1').val().replace(/\s+/g, '');
    var schluessel_s2=$('#i_s2').val().replace(/\s+/g, '');
    try {
        // Edukte
        var b1_sf=B1[schluessel_b1][0];
        var b1_pkb=B1[schluessel_b1][1];
        var b1_st=B1[schluessel_b1][2];
        var s1_tn=B1[schluessel_b1][3];
        var s2_sf=S2[schluessel_s2][0];
        var s2_pkb=S2[schluessel_s2][1];
        var s2_st=S2[schluessel_s2][2];
        var b2_tn=S2[schluessel_s2][3];
        // Produkte
        var s1_sf=S2[s1_tn][0];
        var s1_pkb=S2[s1_tn][1];
        var s1_st=S2[s1_tn][2];
        var b2_sf=B1[b2_tn][0];
        var b2_pkb=B1[b2_tn][1];
        var b2_st=B1[b2_tn][2];
        // Summen:
        var pk_ed=(Math.round((parseFloat(b1_pkb)+parseFloat(s2_pkb))*100)/100).toString().replace(/\./, ',');
        var pk_prod=(Math.round((parseFloat(s1_pkb)+parseFloat(b2_pkb))*100)/100).toString().replace(/\./, ',');
    } catch (e) {
        alert('Leider ist die Eingabe der Teilchennamen noch fehlerhaft!');
        // Summenformeln
        $('#i_b1_sf').val('');
        $('#i_s2_sf').val('');
        $('#i_s1_sf').val('');
        $('#i_b2_sf').val('');
        // Teilchennamen Produkte
        $('#i_s1_tn').val('');
        $('#i_b2_tn').val('');
        // Säure- und Basenstärke
        $('#i_b1_st').val('');
        $('#i_s2_st').val('');
        $('#i_s1_st').val('');
        $('#i_b2_st').val('');
        // Summe der pKS und pKB-Werte
        $('#i_pk_ed').val('');
        $('#i_pk_prod').val('');
    }
    // Summenformeln
    $('#i_b1_sf').val(b1_sf);
    $('#i_s2_sf').val(s2_sf);
    $('#i_s1_sf').val(s1_sf);
    $('#i_b2_sf').val(b2_sf);
    // Teilchennamen Produkte
    $('#i_s1_tn').val(s1_tn);
    $('#i_b2_tn').val(b2_tn);
    // Säure- und Basenstärke
    $('#i_b1_st').val(b1_st);
    $('#i_s2_st').val(s2_st);
    $('#i_s1_st').val(s1_st);
    $('#i_b2_st').val(b2_st);
    // Summe der pKS und pKB-Werte
    $('#i_pk_ed').val(pk_ed);
    $('#i_pk_prod').val(pk_prod);
    
}
