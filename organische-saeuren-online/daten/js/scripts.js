function lade_seite() {
    $('#s_sb option:first').attr('selected', true);
    setze_auswahl();   
}

function setze_auswahl() {
    var auswahl=$('#s_sb option:selected').val();
    var typ=auswahl.split('_')[0];
    var schluessel=auswahl.split('_')[1];
    switch (typ) {
        case 's':
            // Summenformeln
            var b1_sf=gleichungen[schluessel][0];
            var s2_sf=gleichungen[schluessel][1];
            var s1_sf=gleichungen[schluessel][2];
            var b2_sf=gleichungen[schluessel][3];
            // Bildpfade
            var b1_abb='daten/img/'+gleichungen[schluessel][4]+'.gif';
            var s2_abb='daten/img/'+gleichungen[schluessel][5]+'.gif';
            var s1_abb='daten/img/'+gleichungen[schluessel][6]+'.gif';
            var b2_abb='daten/img/'+gleichungen[schluessel][7]+'.gif';
            // Teilchennamen
            var b1_name=gleichungen[schluessel][8];
            var s2_name=gleichungen[schluessel][9];
            var s1_name=gleichungen[schluessel][10];
            var b2_name=gleichungen[schluessel][11];
            // Hintergrundfarben
            var b1_bg=gleichungen[schluessel][12];
            var s2_bg=gleichungen[schluessel][13];
            var s1_bg=gleichungen[schluessel][14];
            var b2_bg=gleichungen[schluessel][15];
            $('#i_b1').val(b1_name+' ('+b1_sf+')');
            $('#i_s2').val(s2_name+' ('+s2_sf+')');
            $('#i_s1').val(s1_name+' ('+s1_sf+')');
            $('#i_b2').val(b2_name+' ('+b2_sf+')');
            $('#img_b1').attr('src', b1_abb);
            $('#img_s2').attr('src', s2_abb);
            $('#img_s1').attr('src', s1_abb);
            $('#img_b2').attr('src', b2_abb);
            $('#i_b1').css('background-color', b1_bg);
            $('#i_s2').css('background-color', s2_bg);
            $('#i_s1').css('background-color', s1_bg);
            $('#i_b2').css('background-color', b2_bg);
            break
        case 'b':
            // Summenformeln
            var b1_sf=gleichungen[schluessel][0];
            var s2_sf=gleichungen[schluessel][1];
            var s1_sf=gleichungen[schluessel][2];
            var b2_sf=gleichungen[schluessel][3];
            // Bildpfade
            var b1_abb='daten/img/'+gleichungen[schluessel][4]+'.gif';
            var s2_abb='daten/img/'+gleichungen[schluessel][5]+'.gif';
            var s1_abb='daten/img/'+gleichungen[schluessel][6]+'.gif';
            var b2_abb='daten/img/'+gleichungen[schluessel][7]+'.gif';
            // Teilchennamen
            var b1_name=gleichungen[schluessel][8];
            var s2_name=gleichungen[schluessel][9];
            var s1_name=gleichungen[schluessel][10];
            var b2_name=gleichungen[schluessel][11];
            // Hintergrundfarben
            var b1_bg=gleichungen[schluessel][12];
            var s2_bg=gleichungen[schluessel][13];
            var s1_bg=gleichungen[schluessel][14];
            var b2_bg=gleichungen[schluessel][15];
            $('#i_b1').val(b1_name+' ('+b1_sf+')');
            $('#i_s2').val(s2_name+' ('+s2_sf+')');
            $('#i_b1').val(b1_name+' ('+b1_sf+')');
            $('#i_s2').val(s2_name+' ('+s2_sf+')');
            $('#i_s1').val(s1_name+' ('+s1_sf+')');
            $('#i_b2').val(b2_name+' ('+b2_sf+')');
            $('#img_b1').attr('src', b1_abb);
            $('#img_s2').attr('src', s2_abb);
            $('#img_s1').attr('src', s1_abb);
            $('#img_b2').attr('src', b2_abb);
            $('#i_b1').css('background-color', b1_bg);
            $('#i_s2').css('background-color', s2_bg);
            $('#i_s1').css('background-color', s1_bg);
            $('#i_b2').css('background-color', b2_bg);
            break
    }
                
    
    
    
    


}

