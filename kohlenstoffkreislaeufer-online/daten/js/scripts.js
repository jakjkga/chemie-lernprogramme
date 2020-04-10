function lade_seite() {
    $('#schieberegler').val(0);
    setze();
}

function setze() {
    var schluessel=parseInt($('#schieberegler').val());
    var textinhalt=schritte_texte[schluessel];
    $('#vorschau').html(textinhalt);
    // Werte zurücksetzen
    $('text').css('font-size', '14px');
    $('#r_hint').css('fill', '#ffffff');
    $('.speicherhintergrund').css('fill', '#f5f5f5');
    $('.stofffluss').css('stroke-width', '3px');
    switch (schluessel) {
        case 0:
            break
        case 1:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(10)
            - atm.hintergrund_aendern('#FFFF80808080')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ff8080');
            break
        case 2:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(10)
            - fotosynthese.schriftgroesse_aendern(22)
            - fotosynthese.linienbreite_aendern(10)
            - atm.hintergrund_aendern('#FFFFAAAAAAAA')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_fotosynthese').css('font-size', '22px');
            $('#l_fotosynthese').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ffaaaa');
            break
        case 3:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(10)
            - fotosynthese.schriftgroesse_aendern(22)
            - fotosynthese.linienbreite_aendern(10)
            - loesen.schriftgroesse_aendern(22)
            - loesen.linienbreite_aendern(10)
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_fotosynthese').css('font-size', '22px');
            $('#l_fotosynthese').css('stroke-width', '10px');
            $('#t_loesen').css('font-size', '22px');
            $('#l_loesen').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ffffff');
            break
        case 4:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(18)
            - atm.hintergrund_aendern('#FFFF80808080')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ff8080');
            break
        case 5:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(18)
            - atm.hintergrund_aendern('#FFFF80808080')
            - f1canvas1.config(bg='#FFFFD5D5D5D5')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ff8080');
            $('#r_hint').css('fill', '#ffd5d5');
            break
        case 6:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(18)
            - gaerung_zellatmung.schriftgroesse_aendern(22)
            - gaerung_zellatmung.linienbreite_aendern(18)
            - atm.hintergrund_aendern('#FFFF55555555')
            - f1canvas1.config(bg='#FFFFAAAAAAAA')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_zellatmung').css('font-size', '22px');
            $('#l_zellatmung').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ff5555');
            $('#r_hint').css('fill', '#ffaaaa');
            break
        case 7:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(18)
            - gaerung_zellatmung.schriftgroesse_aendern(22)
            - gaerung_zellatmung.linienbreite_aendern(18)
            ausgasen.schriftgroesse_aendern(22)
            ausgasen.linienbreite_aendern(18)
            - atm.hintergrund_aendern('#FFFF2A2A2A2A')
            - f1canvas1.config(bg='#FFFF80808080')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_zellatmung').css('font-size', '22px');
            $('#l_zellatmung').css('stroke-width', '10px');
            $('#t_ausgasen').css('font-size', '22px');
            $('#l_ausgasen').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#ff2a2a');
            $('#r_hint').css('fill', '#ff8080');
            break
        case 8:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(18)
            - ausgasen.schriftgroesse_aendern(30)
            - ausgasen.linienbreite_aendern(22)
            - gaerung_zellatmung.schriftgroesse_aendern(22)
            - gaerung_zellatmung.linienbreite_aendern(18)
            - gesteinserosion.schriftgroesse_aendern(22)
            - gesteinserosion.linienbreite_aendern(18)
            - atm.hintergrund_aendern('#D4D400000000')
            - f1canvas1.config(bg='#FFFF55555555')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_zellatmung').css('font-size', '22px');
            $('#l_zellatmung').css('stroke-width', '10px');
            $('#t_ausgasen').css('font-size', '22px');
            $('#l_ausgasen').css('stroke-width', '10px');
            $('#t_erosion').css('font-size', '22px');
            $('#l_erosion').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#d40000');
            $('#r_hint').css('fill', '#ff5555');
            break
        case 9:
            /*
            - verbrennung.schriftgroesse_aendern(22)
            - verbrennung.linienbreite_aendern(30)
            - ausgasen.schriftgroesse_aendern(30)
            - ausgasen.linienbreite_aendern(40)
            - gaerung_zellatmung.schriftgroesse_aendern(22)
            - gaerung_zellatmung.linienbreite_aendern(30)
            - gesteinserosion.schriftgroesse_aendern(22)
            - gesteinserosion.linienbreite_aendern(30)
            - atm.hintergrund_aendern('#AAAA00000000')
            - f1canvas1.config(bg='#D4D400000000')
            */
            $('#t_verbrennung').css('font-size', '22px');
            $('#l_verbrennung').css('stroke-width', '10px');
            $('#t_zellatmung').css('font-size', '22px');
            $('#l_zellatmung').css('stroke-width', '10px');
            $('#t_ausgasen').css('font-size', '22px');
            $('#l_ausgasen').css('stroke-width', '10px');
            $('#t_erosion').css('font-size', '22px');
            $('#l_erosion').css('stroke-width', '10px');
            $('#r_atm').css('fill', '#aa0000');
            $('#r_hint').css('fill', '#d40000');
            break
    }
    
}


