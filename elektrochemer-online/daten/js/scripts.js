function lade_seite() {
    $('#s_linke_halbzelle').removeAttr('disabled');
    $('#s_rechte_halbzelle').removeAttr('disabled');
    $('#s_linke_halbzelle option:first').prop('selected', true);
    $('#s_rechte_halbzelle option:first').prop('selected', true);
    $('#s_rechte_halbzelle').attr('disabled', true);
    waehle_linke_halbzelle()
    waehle_rechte_halbzelle()
    $('#line_elektronen').hide();
    $('#text_elektronen').hide();
}

function waehle_linke_halbzelle() {
    var auswahl_links=$('#s_linke_halbzelle option:selected').val();
    var auswahl_rechts=$('#s_rechte_halbzelle option:selected').val();
    // Beschriftung und Einfärbung in der Abbildung
    var elektrodenmaterial_links=linke_halbzellen[auswahl_links]['beschriftung'][0];
    var elektrolyt_links=linke_halbzellen[auswahl_links]['beschriftung'][1];
    var farbe_elektrodenmaterial_links=linke_halbzellen[auswahl_links]['beschriftung'][2];
    var farbe_elektrolyt_links=linke_halbzellen[auswahl_links]['beschriftung'][3];
    var elektrodenmaterial_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][0];
    var elektrolyt_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][1];
    var farbe_elektrodenmaterial_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][2];
    var farbe_elektrolyt_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][3];
    $('#text_linke_elektrode').text(elektrodenmaterial_links);
    $('#text_linke_halbzelle').text(elektrolyt_links);
    $('#elektrode_linke_halbzelle').css('fill', farbe_elektrodenmaterial_links);
    $('#rect_linke_halbzelle').css('fill', farbe_elektrolyt_links);
    $('#text_rechte_elektrode').text(elektrodenmaterial_rechts);
    $('#text_rechte_halbzelle').text(elektrolyt_rechts);
    $('#elektrode_rechte_halbzelle').css('fill', farbe_elektrodenmaterial_rechts);
    $('#rect_rechte_halbzelle').css('fill', farbe_elektrolyt_rechts);
    var oxidationsteilreaktion=String(linke_halbzellen[auswahl_links]['redm_haelfte'][0]+
                               ' '+
                               linke_halbzellen[auswahl_links]['redm_haelfte'][1]+
                               '+'+
                               linke_halbzellen[auswahl_links]['redm_haelfte'][2]+
                               ' '+
                               linke_halbzellen[auswahl_links]['redm_haelfte'][3]+
                               '+'+
                               linke_halbzellen[auswahl_links]['redm_haelfte'][4]+
                               ' '+
                               linke_halbzellen[auswahl_links]['redm_haelfte'][5]+
                               '⇌'+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][0]+
                               ' '+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][1]+
                               '+'+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][2]+
                               ' '+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][3]+
                               '+'+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][4]+
                               ' '+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][5]+
                               '+'+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][6]+
                               ' '+
                               linke_halbzellen[auswahl_links]['oxm_haelfte'][7]).replace(/1\s+/g, ' ').replace(/\s+/g, '').replace(/\+\+\+/g, '+').replace(/\+\+/g, '+').replace(/\+⇌/g, '⇌').replace(/\+$/g, '').replace(/\+/g, ' + ').replace(/⇌/g, ' ⇌ ');
    $('#i_halbzellenreaktion_links').val(oxidationsteilreaktion);
    var halbzellenpotenzial_links=linke_halbzellen[auswahl_links]['E0'];
    $('#i_halbzellenpotenzial_links').val(String(halbzellenpotenzial_links).replace(/\./, ','));
    if (auswahl_links == '0') {
        $('#i_halbzellenreaktion_links').val('');
        $('#i_halbzellenpotenzial_links').val('');
        $('#messwert').text('Voltmeter');
    } else {
        $('#s_linke_halbzelle').attr('disabled', true);
        $('#s_rechte_halbzelle').removeAttr('disabled');
        var aktueller_index=parseInt(auswahl_links)+1;
        for (var i=0; i < aktueller_index; i++) {
            //console.log(i);
            $('#s_rechte_halbzelle option[value='+i+']').attr('disabled', true);
        }
    }
}

function waehle_rechte_halbzelle() {
    var auswahl_links=$('#s_linke_halbzelle option:selected').val();
    var auswahl_rechts=$('#s_rechte_halbzelle option:selected').val();
    // Beschriftung und Einfärbung in der Abbildung
    var elektrodenmaterial_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][0];
    var elektrolyt_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][1];
    var farbe_elektrodenmaterial_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][2];
    var farbe_elektrolyt_rechts=rechte_halbzellen[auswahl_rechts]['beschriftung'][3];
    $('#text_rechte_elektrode').text(elektrodenmaterial_rechts);
    $('#text_rechte_halbzelle').text(elektrolyt_rechts);
    $('#elektrode_rechte_halbzelle').css('fill', farbe_elektrodenmaterial_rechts);
    $('#rect_rechte_halbzelle').css('fill', farbe_elektrolyt_rechts);
    var reduktionsteilreaktion=String(rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][0]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][1]+
                               '+'+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][2]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][3]+
                               '+'+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][4]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][5]+
                               '+'+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][6]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['oxm_haelfte'][7]+
                               '⇌'+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][0]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][1]+
                               '+'+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][2]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][3]+
                               '+'+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][4]+
                               ' '+
                               rechte_halbzellen[auswahl_rechts]['redm_haelfte'][5]).replace(/1\s+/g, ' ').replace(/\s+/g, '').replace(/\+\+\+/g, '+').replace(/\+\+/g, '+').replace(/\+⇌/g, '⇌').replace(/\+$/g, '').replace(/\+/g, ' + ').replace(/⇌/g, ' ⇌ ');
    $('#i_halbzellenreaktion_rechts').val(reduktionsteilreaktion);
    var halbzellenpotenzial_rechts=linke_halbzellen[auswahl_rechts]['E0'];
    $('#i_halbzellenpotenzial_rechts').val(String(halbzellenpotenzial_rechts).replace(/\./, ','));
    if (auswahl_rechts == '0') {
        $('#i_halbzellenreaktion_rechts').val('');
        $('#i_halbzellenpotenzial_rechts').val('');
        $('#messwert').text('Voltmeter');
    } else {
        // Differenz Anzeigen
        var halbzellenpotenzial_links=parseFloat(linke_halbzellen[auswahl_links]['E0']);
        var differenz=parseFloat(parseFloat(halbzellenpotenzial_rechts)-halbzellenpotenzial_links).toFixed(2);
        $('#messwert').text(String(differenz+' V').replace(/\./, ','));
        //$('#s_rechte_halbzelle').attr('disabled', true);
        $('#line_elektronen').show();
        $('#text_elektronen').show();
    }
}
