var ionische=[
    '2_ethen_und_brom',
    '3_ethen_und_bromwasserstoff',
    '4_ethen_und_wasser',
    '5_ethen_und_ethen',
    '6_ethin_und_chlor',
    '7_benzol_und_brom',
    '8_benzol_und_nitroniumion',
    '9_benzol_und_schwefeltrioxid',
    '10_benzol_und_carbeniumion',
    '11_ethanal_und_methanol',
    '12_ethansaeure_und_methanol',
    '13_ethansaeure_und_ammoniak',
    '14_ethansaeureethylester_und_hydroxidion',
    '15_halbacetal_und_methanol'
];
var radikalische=[
    '1_methan_und_brom',
];
var reaktionstyp=false;
var teilschritt=false;
var bildnummer=false;
var edukte=false;
var basenummer=0;
var nummer=0;

function zeige_daten() {
    edukte=$('#s_edukte option:selected').val();
    switch (reaktionstyp) {
        case 'radikalisch':
            teilschritt=$('#s_radikalisch option:selected').val();
            break
        case 'ionisch':
            teilschritt=$('#s_ionisch option:selected').val();
            break
    }
    bildnummer=$('#s_bildnummer option:selected').val();
    var bildschluessel=edukte+'_'+teilschritt+bildnummer;
    //var bildpfad='daten/img/'+bildschluessel+'.gif';
    var bildpfad=abbildungen[bildschluessel];
    $('#bildausgabe').attr('src', bildpfad);
    //console.log(bildschluessel);
    switch (reaktionstyp) {
        case 'radikalisch':
            switch (teilschritt) {
                case '1_startreaktion':
                    basenummer=0;
                    break
                case '2_kettenreaktion':
                    basenummer=1;
                    break
                case '3_abbruchreaktion':
                    basenummer=2;
                    break
            }
            break
        case 'ionisch':
            switch (teilschritt) {
                // basenummer anpassen je nach ausgeblendeten Teilschritten
                case '1_aktivierung_des_elektrophils':
                    basenummer=0;
                    break
                case '2_angriff_des_nu_am_el':
                    if (edukte == '2_ethen_und_brom'             ||
                        edukte == '6_ethin_und_chlor'            ||
                        edukte == '7_benzol_und_brom'            ||
                        edukte == '8_benzol_und_nitroniumion'    ||
                        edukte == '9_benzol_und_schwefeltrioxid' ||
                        edukte == '10_benzol_und_carbeniumion'   ||
                        edukte == '12_ethansaeure_und_methanol'  ||
                        edukte == '13_ethansaeure_und_ammoniak'  ||
                        edukte == '15_halbacetal_und_methanol') {
                        basenummer=1;
                    } else {
                        basenummer=0;
                    }
                    break
                case '3_metastabiles_zwischenprodukt':
                    if (edukte == '3_ethen_und_bromwasserstoff' ||
                        edukte == '4_ethen_und_wasser' ||
                        edukte == '5_ethen_und_ethen' ||
                        edukte == '11_ethanal_und_methanol' ||
                        edukte == '14_ethansaeureethylester_und_hydroxidion') {
                        basenummer=1;
                    } else {
                        basenummer=2;
                    }
                    break
                case '4_additionsschritt':
                    if (edukte == '3_ethen_und_bromwasserstoff' || 
                        edukte == '4_ethen_und_wasser' ||
                        edukte == '5_ethen_und_ethen' ||
                        edukte == '11_ethanal_und_methanol') {
                        basenummer=1;
                        bildnummer++;
                    } else {
                        basenummer=3;
                    }
                    break
                case '4_eliminierungsschritt':
                    if (edukte == '12_ethansaeure_und_methanol'  ||
                        edukte == '13_ethansaeure_und_ammoniak'  ||
                        edukte == '15_halbacetal_und_methanol') {
                        basenummer=2;
                        bildnummer++;
                    } else if (edukte == '14_ethansaeureethylester_und_hydroxidion') {
                        basenummer=1;
                        bildnummer++;
                    } else {
                        basenummer=3;
                        
                    }
                    break
            }
            break
        }
    nummer=basenummer*3+parseInt(bildnummer);
    var mein_index=nummer-1;
    var anzeigetext=teilschritte_text[edukte][mein_index];
    $('#textausgabe').html(anzeigetext);
    
    
    
}

function setze_teilschritt() {
    switch (reaktionstyp) {
        case 'radikalisch':
            teilschritt=$('#s_radikalisch option:selected').val();
            $('#s_bildnummer option:first').prop('selected', true);
            break
        case 'ionisch':
            teilschritt=$('#s_ionisch option:selected').val();
            $('#s_bildnummer option').show();
            // ggf. einzene Bildnummern ausblenden
            if (edukte == '3_ethen_und_bromwasserstoff' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '4_ethen_und_wasser' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '5_ethen_und_ethen' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } /*else if (edukte == '6_ethin_und_chlor' && teilschritt == '3_metastabiles_zwischenprodukt') {
        
            } else if (edukte == '7_benzol_und_brom' && teilschritt == '3_metastabiles_zwischenprodukt') {
        
            } else if (edukte == '8_benzol_und_nitroniumion' && teilschritt == '3_metastabiles_zwischenprodukt') {
        
            } else if (edukte == '9_benzol_und_schwefeltrioxid' && teilschritt == '3_metastabiles_zwischenprodukt') {
        
            } else if (edukte == '10_benzol_und_carbeniumion' && teilschritt == '3_metastabiles_zwischenprodukt') {
        
            }*/ else if (edukte == '11_ethanal_und_methanol' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '12_ethansaeure_und_methanol' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '13_ethansaeure_und_ammoniak' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '14_ethansaeureethylester_und_hydroxidion' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else if (edukte == '15_halbacetal_und_methanol' && teilschritt == '3_metastabiles_zwischenprodukt') {
                $('#s_bildnummer option[value=2]').hide();
                $('#s_bildnummer option[value=3]').hide();
                $('#s_bildnummer option:first').prop('selected', true);
            } else {
                //console.log('keine Bildnummernausblendung');
                $('#s_bildnummer option:first').prop('selected', true);
            }
            break
    }
    zeige_daten();
}

function lade_seite() {
    $('#s_edukte option[value=2_ethen_und_brom]').prop('selected', true);
    $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    $('#s_bildnummer option[value=1]').prop('selected', true);
    $('#s_edukte').bind('change', function() {
        setze_edukte()
    });
    $('#s_ionisch').bind('change', function() {
        setze_teilschritt()
    });
    $('#s_radikalisch').bind('change', function() {
        setze_teilschritt()
    });
    $('#s_bildnummer').bind('change', function() {
        zeige_daten()
    });
    setze_edukte();
}

function setze_radikalisch() {
    $('#s_ionisch').hide();
    $('#s_radikalisch').show();
    $('#s_radikalisch option[value=1_startreaktion]').prop('selected', true);
    $('#s_bildnummer option[value=1]').prop('selected', true);
    reaktionstyp='radikalisch';
    zeige_daten();
}

function setze_ionisch() {
    $('#s_ionisch').show();
    $('#s_radikalisch').hide();
    reaktionstyp='ionisch';
    // Alle anzeigen
    $('#s_ionisch option').show();
    // ggf. einzene Teilschritte ausblenden
    if (edukte == '2_ethen_und_brom') {
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
    } else if (edukte == '3_ethen_und_bromwasserstoff') {
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').hide();
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
        $('#s_ionisch option[value=2_angriff_des_nu_am_el]').prop('selected', true);
    } else if (edukte == '4_ethen_und_wasser') {
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').hide();
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
        $('#s_ionisch option[value=2_angriff_des_nu_am_el]').prop('selected', true);
    } else if (edukte == '5_ethen_und_ethen') {
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').hide();
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
        $('#s_ionisch option[value=2_angriff_des_nu_am_el]').prop('selected', true);
    } else if (edukte == '6_ethin_und_chlor') {
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '7_benzol_und_brom') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '8_benzol_und_nitroniumion') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '9_benzol_und_schwefeltrioxid') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '10_benzol_und_carbeniumion') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '11_ethanal_und_methanol') {
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').hide();
        $('#s_ionisch option[value=4_eliminierungsschritt]').hide();
        $('#s_ionisch option[value=2_angriff_des_nu_am_el]').prop('selected', true);
    } else if (edukte == '12_ethansaeure_und_methanol') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '13_ethansaeure_und_ammoniak') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);
    } else if (edukte == '14_ethansaeureethylester_und_hydroxidion') {
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').hide();
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=2_angriff_des_nu_am_el]').prop('selected', true);
     } else if (edukte == '15_halbacetal_und_methanol') {
        $('#s_ionisch option[value=4_additionsschritt]').hide();
        $('#s_ionisch option[value=1_aktivierung_des_elektrophils]').prop('selected', true);   
    } else {
        //console.log('keine Teilschrittausblendung');
        $('#s_ionisch option:first').prop('selected', true);
    }
    $('#s_bildnummer option[value=1]').prop('selected', true);
    zeige_daten();
}

function setze_edukte() {
    edukte=$('#s_edukte option:selected').val();
    switch (edukte) {
        case radikalische[0]:
            setze_radikalisch()
            break
        default:
            setze_ionisch()
            break
    }
}
