function lade_seite() {
    $('#a_anordnung option:first').prop('selected', true);
    $('#a_einfaerbung option:first').prop('selected', true);
    $('div.el').bind('click', function (e) { setze_aktiv(e.target.id) });
    $('div.el').bind('click', function (e) { zeige_werte(e.target.id) });
    $('#o_protonenzahl').css('color', 'red');
    $('#o_neutronenzahl').css('color', 'green');
    $('#o_valenzelektronenzahl').css('color', 'blue');
    aendere_anordnung();
    aendere_einfaerbung();
    setze_aktiv(startelement)
    zeige_werte(startelement);
}

function zeige_vergroesserung() {
    var aktuelle_pfadbestandteile=$('img#atombau_vorschau').attr('src').split('/');
    var aktuelles_bild=aktuelle_pfadbestandteile[aktuelle_pfadbestandteile.length-1];
    //console.log(aktuelles_bild);
    var neuer_pfad='daten/img/atombau_402x402/'+aktuelles_bild;
    window.open(neuer_pfad);
}

function zeige_stoff_struktur() {
    var wer=$('div.gerade_aktiv').get(0).textContent;
    var elementname=elemente[wer][0];
    //console.log(wer);
    var geruest_1='<!doctype html>\n'+
'<html>\n'+
'  <head>\n'+
'    <meta charset="utf-8" />\n'+
'    <title>Stoff und Struktur des Elements ';
    // elementname
    var geruest_2='    </title>\n'+
'  </head>\n'+
'  <body>\n'+
'    <table>\n'+
'      <tr>\n'+
'        <td>\n'+
'          <img src="';
    // wer
    var geruest_3='" />\n'+
'        </td>\n'+
'        <td>\n'+
'          <img src="';
    // wer
    var geruest_4='" />\n'+
'        </td>\n'+
'      </tr>\n'+
'      <tr>\n'+
'        <td colspan="2" style="text-align:center;">\n'+
'         <input type="button" value="Fenster schließen" onclick="window.close();" />\n'+
'        </td>\n'+
'      </tr>\n'+
'    </table>\n'+
'  </body>\n'+
'</html>';
    var seiten_geruest=geruest_1+
                       elementname+
                       geruest_2+
                       bilddaten['stoff'][wer]+
                       geruest_3+
                       bilddaten['struktur'][wer]+
                       geruest_4;
    var uriContent='data:text/html;charset=utf-8,'+encodeURIComponent(seiten_geruest);
    window.open(uriContent, 'Stoff und Struktur', "width=620,height=320,location=no,menubar=no,toolbar=no");
}

function zeige_werte(wer) {
    //console.log(wer);
    var elementname=elemente[wer][0];
    var protonenzahl=elemente[wer][1];
    var neutronenzahl=elemente[wer][2];
    var massenzahl=protonenzahl+neutronenzahl;
    var valenzelektronenzahl=elemente[wer][3];
    var valenzschale=elemente[wer][4];
    var atomradius=elemente[wer][5];
    var elektronegativitaet=elemente[wer][6];
    var struktur=elemente[wer][7];
    var farbe=elemente[wer][8];
    var zustand=elemente[wer][9];
    $('#o_elementname').val(elementname);
    $('#o_protonenzahl').val(protonenzahl);
    $('#o_neutronenzahl').val(neutronenzahl);
    $('#o_massenzahl').val(massenzahl);
    $('#o_valenzelektronenzahl').val(valenzelektronenzahl);
    $('#o_valenzschale').val(valenzschale);
    $('#o_atomradius').val(atomradius);
    $('#o_elektronegativitaet').val(elektronegativitaet);
    $('#o_struktur').val(struktur);
    $('#o_farbe').val(farbe);
    $('#o_zustand').val(zustand);
    switch (valenzschale) {
        case 'K':
            $('#o_valenzschale').css('background-color', '#deaa87');
            break
        case 'L':
            $('#o_valenzschale').css('background-color', '#e9afaf');
            break
        case 'M':
            $('#o_valenzschale').css('background-color', '#8dd35f');
            break
        case 'N':
            $('#o_valenzschale').css('background-color', '#ff9955');
            break
            
    }
    $('img#atombau_vorschau').attr('src', 'daten/img/atombau/'+wer+'.png');
}

function setze_aktiv(wer) {
    for (var i=0; i < alle_elemente.length; i++) {
         $('#'+alle_elemente[i]).removeClass('gerade_aktiv');
    }
    $('#'+wer).addClass('gerade_aktiv');
}

function setze_element(id, anordnung) {
     var x=positionen[anordnung][id][0];
     var y=positionen[anordnung][id][1];
     //$('#'+id).css('position', 'absolute');
     $('#'+id).css('left', x+'px');
     $('#'+id).css('top', y+'px');

}

function aendere_einfaerbung() {
    var einfaerbung=$('#a_einfaerbung option:selected').val();
    //console.log(einfaerbung);
    for (var i=0; i < alle_elemente.length; i++) {
        $('#'+alle_elemente[i]).removeClass('hg1');
        $('#'+alle_elemente[i]).removeClass('hg2');
        $('#'+alle_elemente[i]).removeClass('hg3');
        $('#'+alle_elemente[i]).removeClass('hg4');
        $('#'+alle_elemente[i]).removeClass('hg5');
        $('#'+alle_elemente[i]).removeClass('hg6');
        $('#'+alle_elemente[i]).removeClass('hg7');
        $('#'+alle_elemente[i]).removeClass('hg8');
        $('#'+alle_elemente[i]).removeClass('periode1');
        $('#'+alle_elemente[i]).removeClass('periode2');
        $('#'+alle_elemente[i]).removeClass('periode3');
        $('#'+alle_elemente[i]).removeClass('periode4');
        $('#'+alle_elemente[i]).removeClass('metalle');
        $('#'+alle_elemente[i]).removeClass('nichtmetalle');
        $('#'+alle_elemente[i]).removeClass('halbmetalle');
        $('#'+alle_elemente[i]).removeClass('edelgase');

    }
    switch (einfaerbung) {
        case 'nach_hauptgruppen':
            for (var i=0; i < erste_hg.length; i++) {
                $('#'+erste_hg[i]).addClass('hg1');
            }
            for (var i=0; i < zweite_hg.length; i++) {
                $('#'+zweite_hg[i]).addClass('hg2');
            }
            for (var i=0; i < dritte_hg.length; i++) {
                $('#'+dritte_hg[i]).addClass('hg3');
            }
            for (var i=0; i < vierte_hg.length; i++) {
                $('#'+vierte_hg[i]).addClass('hg4');
            }
            for (var i=0; i < fuenfte_hg.length; i++) {
                $('#'+fuenfte_hg[i]).addClass('hg5');
            }
            for (var i=0; i < sechste_hg.length; i++) {
                $('#'+sechste_hg[i]).addClass('hg6');
            }
            for (var i=0; i < siebte_hg.length; i++) {
                $('#'+siebte_hg[i]).addClass('hg7');
            }
            for (var i=0; i < achte_hg.length; i++) {
                $('#'+achte_hg[i]).addClass('hg8');
            }
            break
        case 'nach_perioden':
            for (var i=0; i < erste_periode.length; i++) {
                $('#'+erste_periode[i]).addClass('periode1');
            }
            for (var i=0; i < zweite_periode.length; i++) {
                $('#'+zweite_periode[i]).addClass('periode2');
            }
            for (var i=0; i < dritte_periode.length; i++) {
                $('#'+dritte_periode[i]).addClass('periode3');
            }
            for (var i=0; i < vierte_periode.length; i++) {
                $('#'+vierte_periode[i]).addClass('periode4');
            }
            break
        case 'metalle_und_nichtmetalle':
            for (var i=0; i < metalle.length; i++) {
                $('#'+metalle[i]).addClass('metalle');
            }
            for (var i=0; i < halbmetalle.length; i++) {
                $('#'+halbmetalle[i]).addClass('halbmetalle');
            }
            for (var i=0; i < nichtmetalle.length; i++) {
                $('#'+nichtmetalle[i]).addClass('nichtmetalle');
            }
            for (var i=0; i < edelgase.length; i++) {
                $('#'+edelgase[i]).addClass('edelgase');
            }
            break
    
    }
    
    
}

function aendere_anordnung() {
    var anordnung=$('#a_anordnung option:selected').val();
    for (var i=0; i < alle_elemente.length; i++) {
        setze_element(alle_elemente[i], anordnung);
    }
}
