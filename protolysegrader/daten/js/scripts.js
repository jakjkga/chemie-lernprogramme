var daten={ //         0           1            2       3
    //Schlüssel:       c₀(HA)      c(H₃O⁺)      pH      α
    '-':[              '',         '',          '',     ''],
    'HCl_1':[          '1.00',     '1.00',      '0',    '100'],
    'HCl_0.1':[        '0.10',     '0.10',      '1',    '100'],
    'HCl_0.01':[       '0.01',     '0.01',      '2',    '100'],
    'HCl_0.001':[      '0.001',    '0.001',     '3',    '100'],
    'HCl_0.0001':[     '0.0001',   '0.0001',    '4',    '100'],
    'CH₃COOH_1':[      '1.00',     '0.00426',   '2.37', '0.426'],
    'CH₃COOH_0.1':[    '0.10',     '0.00134',   '2.87', '1.34'],
    'CH₃COOH_0.01':[   '0.01',     '0.000418',  '3.83', '4.18'],
    'CH₃COOH_0.001':[  '0.001',    '0.000126',  '3.90', '12.6'],
    'CH₃COOH_0.0001':[ '0.0001',   '0.0000417', '4.38', '41.7'], 
}

function komma_statt_punkt(wert) {
    var wert=wert;
    var neuer_wert=wert.replace(/\./g , ','); //Punkte durch Kommata ersetzen
    return neuer_wert;
}

function lade_seite() {
    document.f1.aus.options[0].selected="selected";
    auswahl('-');
}

function auswahl(wer) {
    var wer=wer;
    var c0=komma_statt_punkt(daten[wer][0]);
    var cOx=komma_statt_punkt(daten[wer][1]);
    var pH=komma_statt_punkt(daten[wer][2]);
    var diss_anz=komma_statt_punkt(daten[wer][3]);
    var diss_ber=parseFloat(daten[wer][3]);
    $('#anzeige_c0').attr('value', c0);
    $('#anzeige_cOx').attr('value', cOx);
    $('#anzeige_pH').attr('value', pH);
    $('#anzeige_diss').attr('value', diss_anz);
    if (wer != '-') {
        zeichne_tortendiagramm(diss_ber);
    } else {
        //Diagrammfläche leeren
    }
    //alert(wer);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(zeichne_tortendiagramm);

function zeichne_tortendiagramm(diss_ber) {
    if (diss_ber) {
        var wert_diss=diss_ber;
    } else {
        var wert_diss=0;
    }
    var wert_undiss=100.0-wert_diss;
    //alert(wert_diss+' '+wert_undiss)
    var data = google.visualization.arrayToDataTable([
          ['Teilchensorte', 'Anteil'],
          ['Undissoziiert (Anteil HA)', wert_undiss ],
          ['Dissoziiert (Anteil H₃O⁺ gleich Anteil A⁻)',   wert_diss]
        ]);

        var options = {
          title: 'Dissoziationsgrad (Protolysegrad)'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
}

