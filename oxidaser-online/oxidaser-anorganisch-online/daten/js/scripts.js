var obergrenze=6;

function lade_seite() {
    $('#table_ausgabe').replaceWith('<table id="table_ausgabe"></table>');
    $('#t_ausgabe').hide();
    $('#table_formularinhalt').wrap('<form>').parent('form').trigger('reset');
    $('#table_formularinhalt').unwrap();
    $('#s_redm option').removeAttr('disabled');
    $('#s_redm option:last').attr('disabled', true);
    $('#s_oxm option').attr('disabled', true);
    $('#t_ausgabe').val();
    var nicht_waehlbar_redm=[5, 6];
    for (var i=0; i < nicht_waehlbar_redm.length; i++) {
        $($('#s_redm option').get(nicht_waehlbar_redm[i])).attr('disabled', true);
    }
}

function ermittle() {
    var auswahl_redm=$('#s_redm option:selected').val();
    var auswahl_oxm=$('#s_oxm option:selected').val();
    //console.log('ermittle '+auswahl_redm+' '+auswahl_oxm);
    var redm1=auswahl_redm.split('_')[0];
    var oxm1=auswahl_redm.split('_')[1];
    var redm2=auswahl_oxm.split('_')[0];
    var oxm2=auswahl_oxm.split('_')[1];
    var ph=auswahl_oxm.split('_')[2];
    //console.log('ermittle: '+redm1+' → '+oxm1+' ; '+oxm2+' → '+redm2);
    var ox_li_Redm1_OZ=daten[redm1][oxm1][ph]['li']['Redm1_OZ'];
    var ox_li_Redm1_KO=daten[redm1][oxm1][ph]['li']['Redm1_KO'];
    var ox_li_Redm1_SF=daten[redm1][oxm1][ph]['li']['Redm1_SF'];
    var ox_li_LA_KO=daten[redm1][oxm1][ph]['li']['LA_KO'];
    var ox_li_LA_SF=daten[redm1][oxm1][ph]['li']['LA_SF'];
    var ox_li_SA_KO=daten[redm1][oxm1][ph]['li']['SA_KO'];
    var ox_li_SA_SF=daten[redm1][oxm1][ph]['li']['SA_SF'];
    var ox_re_Oxm1_OZ=daten[redm1][oxm1][ph]['re']['Oxm1_OZ'];
    var ox_re_Oxm1_KO=daten[redm1][oxm1][ph]['re']['Oxm1_KO'];
    var ox_re_Oxm1_SF=daten[redm1][oxm1][ph]['re']['Oxm1_SF'];
    var ox_re_EA_KO=daten[redm1][oxm1][ph]['re']['EA_KO'];
    var ox_re_EA_SF=daten[redm1][oxm1][ph]['re']['EA_SF'];
    var ox_re_LA_KO=daten[redm1][oxm1][ph]['re']['LA_KO'];
    var ox_re_LA_SF=daten[redm1][oxm1][ph]['re']['LA_SF'];
    var ox_re_SA_KO=daten[redm1][oxm1][ph]['re']['SA_KO'];
    var ox_re_SA_SF=daten[redm1][oxm1][ph]['re']['SA_SF'];
    var ox=ox_li_Redm1_KO+' '+
           '<span class="redm">'+ox_li_Redm1_SF+'</span> + '+
           ox_li_LA_KO+' '+
           ox_li_LA_SF+' + '+
           ox_li_SA_KO+' '+
           ox_li_SA_SF+' → '+
           ox_re_Oxm1_KO+' '+
           '<span class="oxm">'+ox_re_Oxm1_SF+'</span> + '+
           '<span class="el">'+ox_re_EA_KO+'</span> '+
           '<span class="el">'+ox_re_EA_SF+'</span> + '+
           ox_re_LA_KO+' '+
           ox_re_LA_SF+' + '+
           ox_re_SA_KO+' '+
           ox_re_SA_SF;
     var ox_anzeige=ox.replace(/\s+/g, ' ').replace(/^1\s+/, '').replace(/\s+1\s+/g , ' ').replace(/\+\s+\+/g, '+').replace(/\s+\+\s+$/g, '').replace(/\+\s+→/g, '→');
    var red_li_Redm2_OZ=daten[redm2][oxm2][ph]['li']['Redm1_OZ'];
    var red_li_Redm2_KO=daten[redm2][oxm2][ph]['li']['Redm1_KO'];
    var red_li_Redm2_SF=daten[redm2][oxm2][ph]['li']['Redm1_SF'];
    var red_li_LA_KO=daten[redm2][oxm2][ph]['li']['LA_KO'];
    var red_li_LA_SF=daten[redm2][oxm2][ph]['li']['LA_SF'];
    var red_li_SA_KO=daten[redm2][oxm2][ph]['li']['SA_KO'];
    var red_li_SA_SF=daten[redm2][oxm2][ph]['li']['SA_SF'];
    var red_re_Oxm2_OZ=daten[redm2][oxm2][ph]['re']['Oxm1_OZ'];
    var red_re_Oxm2_KO=daten[redm2][oxm2][ph]['re']['Oxm1_KO'];
    var red_re_Oxm2_SF=daten[redm2][oxm2][ph]['re']['Oxm1_SF'];
    var red_re_EA_KO=daten[redm2][oxm2][ph]['re']['EA_KO'];
    var red_re_EA_SF=daten[redm2][oxm2][ph]['re']['EA_SF'];
    var red_re_LA_KO=daten[redm2][oxm2][ph]['re']['LA_KO'];
    var red_re_LA_SF=daten[redm2][oxm2][ph]['re']['LA_SF'];
    var red_re_SA_KO=daten[redm2][oxm2][ph]['re']['SA_KO'];
    var red_re_SA_SF=daten[redm2][oxm2][ph]['re']['SA_SF'];
    var ox=red_re_Oxm2_KO+' '+
           '<span class="oxm">'+red_re_Oxm2_SF+'</span> + '+
           '<span class="el">'+red_re_EA_KO+'</span> '+
           '<span class="el">'+red_re_EA_SF+'</span> + '+
           red_re_LA_KO+' '+
           red_re_LA_SF+' + '+
           red_re_SA_KO+' '+
           red_re_SA_SF+' → '+
           red_li_Redm2_KO+' '+
           '<span class="redm">'+red_li_Redm2_SF+'</span> + '+
           red_li_LA_KO+' '+
           red_li_LA_SF+' + '+
           red_li_SA_KO+' '+
           red_li_SA_SF;
     var red_anzeige=ox.replace(/\s+/g, ' ').replace(/^1\s+/, '').replace(/\s+1\s+/g , ' ').replace(/\+\s+\+/g, '+').replace(/\s+\+\s+$/g, '').replace(/\+\s+→/g, '→');
     $('#t_ausgabe').val('Ox.: '+ox_anzeige+'\nRed.: '+red_anzeige);
    var ox_links=ox_anzeige.split('→')[0];
    var ox_rechts=ox_anzeige.split('→')[1];
    var red_links=red_anzeige.split('→')[0];
    var red_rechts=red_anzeige.split('→')[1];
    var tabelleninhalt='<tr>\n'+
                       '  <td>&nbsp;</td><td><span class="el">'+ox_li_Redm1_OZ+'</span></td><td>&nbsp;</td><td><span class="el">'+ox_re_Oxm1_OZ+'</span></td>\n'+
                       '</tr>\n'+
                       '<tr>\n'+
                       '  <td>Ox.:</td><td>'+ox_links+'</td><td>→</td><td>'+ox_rechts+'</td>\n'+
                       '</tr>\n'+
                       '<tr>\n'+
                       '  <td>&nbsp;</td><td><span class="el">'+red_re_Oxm2_OZ+'</span></td><td>&nbsp;</td><td><span class="el">'+red_li_Redm2_OZ+'</span></td>\n'+
                       '</tr>\n'+
                       '<tr>\n'+
                       '  <td>Red.:</td><td>'+red_links+'</td><td>→</td><td>'+red_rechts+'</td>\n'+
                       '</tr>\n';
    $('#table_ausgabe').append(tabelleninhalt);
}


function setze_redm() {
    var redm1_index=$('#s_redm option:selected').index();
    //console.log(redm1_index);
    $('#s_oxm option').removeAttr('disabled');
    for (var i=0; i <= redm1_index; i++) {
        $($('#s_oxm option').get(i)).attr('disabled', true);
        //console.log(i);
    }
    $('#s_redm option').attr('disabled', true);
    var nicht_waehlbar_oxm=[0];
    for (var i=0; i < nicht_waehlbar_oxm.length; i++) {
        $($('#s_oxm option').get(nicht_waehlbar_oxm[i])).attr('disabled', true);
    }
}

function setze_oxm() {
    $('#s_oxm option').attr('disabled', true);
    ermittle();
}

function zuruecksetzen() {
    lade_seite();
}
