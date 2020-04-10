var ismozilla=false;
var ischrome=false;
      
if (navigator.appCodeName =='Mozilla' && navigator.userAgent.match('WebKit')) {
    ischrome=true;
} else {
    ismozilla=true;
}
//console.log('Mozilla: '+ismozilla+' Chrome:'+ischrome);
      
var isonline=false;
      
if (location.href.match(/^http/)) {
    isonline=true;
} else {
    isonline=false;
}
//console.log('online: '+isonline);

function lade_seite() {
    // lokaler URL-Test mit file:///home/jj/Desktop/3dmolekuele/index.html 
    if (ischrome) {
        if (isonline) {
        
        } else {
            alert('In der lokalen offline Version muss Chrome mit der Kommandozeilenoption --allow-file-access-from-files gestartet werden!');
            var weiterleiten=confirm('Weiterleiten zur online-Version?');
            if (weiterleiten) {
                location.href='http://quizdidaktik.de/simpleboard/daten/3dmolekuele/index.html'
            }
        }
    }
     
    // In Firefox muss unter about:config zuerst gesetzt werden: security.fileuri.strict_origin_policy = false ');
    $('#i_breite').val(640);
    $('#i_hoehe').val(480);
    $('#div_ausgabe').hide();
    $('#s_molekuel option:first').prop('selected', true);
    befuelle_stoffnamen();
    /*$('#ein_stoffname').autocomplete({
        source: alle_stoffnamen
    });*/
    for (var i=0; i < alle_stoffnamen.length; i++) {
        $('#l_ein_stoffname').append('<option value="'+alle_stoffnamen[i]+'"></option>');
    }
    $('#ein_stoffname').bind('blur', function() {
        in_liste_suchen();
    });
    var erster_stoff=alle_stoffnamen[0];
    $('#ein_stoffname').val(erster_stoff);
    in_liste_suchen();
    zeige_auswahl();
    $('#ein_stoffname').focus();
    
    // Ausblenden der Bedienelemente Deaktivieren für Standalone-Version!
    //setInterval(function(){ 
    //    hole_parent_info()
    //}, 1500);
    waehle_formeltyp();
}

function setze_groesse() {
    var neue_breite=$('#i_breite').val();
    var neue_hoehe=$('#i_hoehe').val();
    console.log(neue_breite+'x'+neue_hoehe);
    /* Weg 1: Style des DIVS ändern */
    $('div#mein_applet_appletinfotablediv').css('width', neue_breite+'px');
    $('div#mein_applet_appletinfotablediv').css('height', neue_hoehe+'px');
    $('canvas#mein_applet_canvas2d').css('width', neue_breite+'px');
    $('canvas#mein_applet_canvas2d').css('height', neue_hoehe+'px');
    /* Weg 2: Applet-Resize-Funktion */
    //mein_applet._resizeApplet(neue_breite, neue_hoehe);
    /* Weg 3: Info-Variable ändern */
    //mein_applet.__Info.width=neue_breite;
    //mein_applet.__Info.height=neue_hoehe;
}

function zeige_molekuel(dateipfad) {
    Jmol.loadFile(mein_applet, dateipfad);
}

function zeige_auswahl() {
    var aktuelle_auswahl=$('#s_molekuel option:selected').val();
    var aktueller_auswahltext=$('#s_molekuel option:selected').text();
    //console.log(aktueller_auswahltext);
    $('#ein_stoffname').val('');
    zeige_molekuel('daten/jsmol/structure/'+aktuelle_auswahl)
    $('#div_ausgabe').text(aktuelle_auswahl);
}

function eingabe_loeschen() {
    $('#ein_stoffname').val('');

}

function in_liste_suchen() {
    var eingabe=$('#ein_stoffname').val();
    $('#s_molekuel option').each(
        function() {
            var textinhalt=$(this).text(); //this.firstChild.data
            if (String(textinhalt).toLowerCase() == String(eingabe).toLowerCase()) {
                this.setAttribute('selected', true);
            }
    });
    zeige_auswahl();
}


function befuelle_stoffnamen() {
    $('#s_molekuel option').each(
        function(i) {
            //console.log($(this).val());
            var textinhalt=$(this).text(); //this.firstChild.data
            //console.log(textinhalt);
            alle_stoffnamen.push(textinhalt);
    });
}

function speichern(textinhalt, stammname, endung) {
    var dateiname=ermittle_dateiname(stammname);
    var blob = new Blob([textinhalt], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, dateiname+'.'+endung);
}

function ermittle_dateiname(stammname) {
    /* START Anpassen */
    stammname_neu=prompt('Gib hier den Dateinamen ein: ');
    if (stammname_neu) {
        stammname_neu=stammname_neu.replace(/\s+/g, '_');
    } else {
        stammname_neu=stammname;
    } 
    /* ENDE Anpassen */
    var aktuelle_zeit=new Date();
    var jahr=aktuelle_zeit.getFullYear();
    var monat=aktuelle_zeit.getMonth();
    var tag=aktuelle_zeit.getDate();
    var stunde=aktuelle_zeit.getHours();
    var minuten=aktuelle_zeit.getMinutes();
    var sekunden=aktuelle_zeit.getSeconds();
    if (monat < 10) {
        monat = '0'+monat;
    }
    if (tag < 10) {
        tag = '0'+tag;
    }
    if (stunde < 10) {
        stunde = '0'+stunde;
    }
    if (minuten < 10) {
        minuten = '0'+minuten;
    }
    if (sekunden < 10) {
        sekunden = '0'+sekunden;
    }
    var zeitanzeigeanhang='_'+jahr+'-'+monat+'-'+tag+'_'+stunde+'-'+minuten+'-'+sekunden
    var dateiname_kurz=stammname_neu+zeitanzeigeanhang;
    return dateiname_kurz
}

function hole_parent_info() {
     /*
      try {
          var aktuelle_auswahl_parent=window.parent.$('#span_aktuelle_auswahl').text();
          //console.log(aktuelle_auswahl_parent);
          if (aktuelle_auswahl_parent == '3D' || 
              aktuelle_auswahl_parent == 'Hintergrund' || 
              aktuelle_auswahl_parent == 'URL'
              ) {
              //console.log('Valenzstrichformel-Steuerelemente einblenden');
              $('div#div_navi').show();
              $('div#platzhalter').hide();
              $('div#jmol_steuerelemente').show();
          } else if (String(aktuelle_auswahl_parent) == 'undefined' ||
                     String(aktuelle_auswahl_parent) == 'false'     ||
                     String(aktuelle_auswahl_parent) == 'null' 
                     ) {
              //console.log('Valenzstrichformel-Steuerelemente einblenden');
              $('div#div_navi').show();
              $('div#platzhalter').hide();
              $('div#jmol_steuerelemente').show();
          } else {
              //console.log('Valenzstrichformel-Steuerelemente ausblenden');
              $('div#div_navi').hide();
              $('div#platzhalter').show();
              $('div#jmol_steuerelemente').hide();
          }
      }
       catch(e) {
           //console.log('offline ist das Ausblenden in diesem Browser nicht möglich!')
      }
      */
 }

