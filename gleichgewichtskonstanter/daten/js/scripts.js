var einheiten={
    'aq':'mol \\cdot ℓ^{-1}',
    'g':'Pa',
    'l':'ℓ',
    's':'g'
};

var typen={
    'aq':'c',
    'g':'p',
    'l':'n',
    's':'n'
};

var konstantentypen={
    'hom_loes':'_{C}',
    'hom_gas':'_P',
    'het_loes':'_{C}',
    'het_gas':'_{P}'
};

function erstelle_mwg() {
    /* Auswahlkombination */
    var v_typ=$('#a_typ').val(); //alert(v_typ);
    var v_zahled=$('#a_zahled').val();
    var v_zahlprod=$('#a_zahlprod').val();
    var ktyp='K'+konstantentypen[v_typ];
    var geruestschluessel=String(v_zahled)+String(v_zahlprod);
    /* Alle Werte */
    /* A */
    var v_koeff_a=$('#a_koeff_a').val(); //Koeffizient
    if (v_koeff_a == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_a='\\,';
    }
    var v_sf_a=$('#i_sf_a').attr('value'); //Summenformel
    var v_ph_a=$('#a_ph_a').val(); //Phase
    var v_typ_a=typen[v_ph_a]; //Konzentration oder Partialdruck
    if (v_ph_a == 'l' || v_ph_a == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cA='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cA=''+v_typ_a+'(\\ce{'+v_sf_a+'})^'+v_koeff_a+''; //Anteil für A
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_a == 'g') {
            var cA='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_a == 'aq') {
            var cA='';
        }
    }
    if (cA == '') {
        var exp_a=0;
    } else if (v_koeff_a == '\\,') {
        var exp_a=1;
    } else {
        var exp_a=parseInt(v_koeff_a);
    }
    /* B */
    var v_koeff_b=$('#a_koeff_b').val(); //Koeffizient
    if (v_koeff_b == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_b='\\,';
    }
    var v_sf_b=$('#i_sf_b').attr('value'); //Summenformel
    var v_ph_b=$('#a_ph_b').val(); //Phase
    var v_typ_b=typen[v_ph_b]; //Konzentration oder Partialdruck
    if (v_ph_b == 'l' || v_ph_b == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cB='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        if (cA != '') { 
            var cB='\\cdot '+v_typ_b+'(\\ce{'+v_sf_b+'})^'+v_koeff_b+''; //Anteil für B
        } else { //Falls cA entfällt, führenden Malpunkt weglassen
           var cB=''+v_typ_b+'(\\ce{'+v_sf_b+'})^'+v_koeff_b+''; 
        }
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_b == 'g') {
            var cB='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_b == 'aq') {
            var cB='';
        }
    }
    if (cB == '') {
        var exp_b=0;
    } else if (v_koeff_b == '\\,') {
        var exp_b=1;
    } else {
        var exp_b=parseInt(v_koeff_b);
    }
    /* C */
    var v_koeff_c=$('#a_koeff_c').val(); //Koeffizient
    if (v_koeff_c == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_c='\\,';
    }
    var v_sf_c=$('#i_sf_c').attr('value'); //Summenformel
    var v_ph_c=$('#a_ph_c').val(); //Phase
    var v_typ_c=typen[v_ph_c]; //Konzentration oder Partialdruck
    if (v_ph_c == 'l' || v_ph_c == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cC='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cC='\\cdot '+v_typ_c+'(\\ce{'+v_sf_c+'})^'+v_koeff_c+''; //Anteil für C
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_c == 'g') {
            var cC='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_c == 'aq') {
            var cC='';
        }
    }
    if (cC == '') {
        var exp_c=0;
    } else if (v_koeff_c == '\\,') {
        var exp_c=1;
    } else {
        var exp_c=parseInt(v_koeff_c);
    }
    /* D */
    var v_koeff_d=$('#a_koeff_d').val(); //Koeffizient
    if (v_koeff_d == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_d='\\,';
    }
    var v_sf_d=$('#i_sf_d').attr('value'); //Summenformel
    var v_ph_d=$('#a_ph_d').val(); //Phase
    var v_typ_d=typen[v_ph_d]; //Konzentration oder Partialdruck
    if (v_ph_d == 'l' || v_ph_d == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cD='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cD='\\cdot '+v_typ_d+'(\\ce{'+v_sf_d+'})^'+v_koeff_d+''; //Anteil für D
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_d == 'g') {
            var cD='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_d == 'aq') {
            var cD='';
        }
    }
    if (cD == '') {
        var exp_d=0;
    } else if (v_koeff_d == '\\,') {
        var exp_d=1;
    } else {
        var exp_d=parseInt(v_koeff_d);
    }
    /* E */
    var v_koeff_e=$('#a_koeff_e').val(); //Koeffizient
    if (v_koeff_e == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_e='\\,';
    }
    var v_sf_e=$('#i_sf_e').attr('value'); //Summenformel
    var v_ph_e=$('#a_ph_e').val(); //Phase
    var v_typ_e=typen[v_ph_e]; //Konzentration oder Partialdruck
    if (v_ph_e == 'l' || v_ph_e == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cE='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cE=''+v_typ_e+'(\\ce{'+v_sf_e+'})^'+v_koeff_e+''; //Anteil für E
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_e == 'g') {
            var cE='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_e == 'aq') {
            var cE='';
        }
    }
    if (cE == '') {
        var exp_e=0;
    } else if (v_koeff_e == '\\,') {
        var exp_e=1;
    } else {
        var exp_e=parseInt(v_koeff_e);
    }
    /* F */
    var v_koeff_f=$('#a_koeff_f').val(); //Koeffizient
    if (v_koeff_f == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_f='\\,';
    }
    var v_sf_f=$('#i_sf_f').attr('value'); //Summenformel
    var v_ph_f=$('#a_ph_f').val(); //Phase
    var v_typ_f=typen[v_ph_f]; //Konzentration oder Partialdruck
    if (v_ph_f == 'l' || v_ph_f == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cF='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        if (cE != '') { 
            var cF='\\cdot '+v_typ_f+'(\\ce{'+v_sf_f+'})^'+v_koeff_f+''; //Anteil für F
        } else { //Falls cE entfällt, führenden Malpunkt weglassen
           var cF=''+v_typ_f+'(\\ce{'+v_sf_f+'})^'+v_koeff_f+''; 
        }
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_f == 'g') {
            var cF='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_f == 'aq') {
            var cF='';
        }
    }
    if (cF == '') {
        var exp_f=0;
    } else if (v_koeff_f == '\\,') {
        var exp_f=1;
    } else {
        var exp_f=parseInt(v_koeff_f);
    }
    /* G */
    var v_koeff_g=$('#a_koeff_g').val(); //Koeffizient
    if (v_koeff_g == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_g='\\,';
    }
    var v_sf_g=$('#i_sf_g').attr('value'); //Summenformel
    var v_ph_g=$('#a_ph_g').val(); //Phase
    var v_typ_g=typen[v_ph_g]; //Konzentration oder Partialdruck
    if (v_ph_g == 'l' || v_ph_g == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cG='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cG='\\cdot '+v_typ_g+'(\\ce{'+v_sf_g+'})^'+v_koeff_g+''; //Anteil für G
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_g == 'g') {
            var cG='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_g == 'aq') {
            var cG='';
        }
    }
    if (cG == '') {
        var exp_g=0;
    } else if (v_koeff_g == '\\,') {
        var exp_g=1;
    } else {
        var exp_g=parseInt(v_koeff_g);
    }
    /* H */
    var v_koeff_h=$('#a_koeff_h').val(); //Koeffizient
    if (v_koeff_h == '1') { //Koeffizient 1 nicht anzeigen
        v_koeff_h='\\,';
    }
    var v_sf_h=$('#i_sf_h').attr('value'); //Summenformel
    var v_ph_h=$('#a_ph_h').val(); //Phase
    var v_typ_h=typen[v_ph_h]; //Konzentration oder Partialdruck
    if (v_ph_h == 'l' || v_ph_h == 's') { //Falls flüssig oder fest ⇒ weglassen!
        var cH='';
    } else { // Falls gelöst oder gasförmig ⇒ anzeigen
        var cH='\\cdot '+v_typ_h+'(\\ce{'+v_sf_h+'})^'+v_koeff_h+''; //Anteil für H
    }
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') { //falls loes ⇒  zusätzlich auch g weglassen!
        if (v_ph_h == 'g') {
            var cH='';
        }
    }
    if (v_typ == 'hom_gas' || v_typ == 'het_gas') { //falls gas ⇒  zusätzlich auch aq weglassen!
        if (v_ph_h == 'aq') {
            var cH='';
        }
    }
    if (cH == '') {
        var exp_h=0;
    } else if (v_koeff_h == '\\,') {
        var exp_h=1;
    } else {
        var exp_h=parseInt(v_koeff_h);
    }
    //Falls alle im Zähler oder Nenner gleich '' sind, einmal die 1 (einfach an erster Stelle)
    //TODO: Nur für die jeweils angezeigten überprüfen (über switch v_zahled und v_zahlprod)
    switch (v_zahled) {
        case '1':
            if (cA =='') {
                cA='1';
            }
            break;
        case '2':
            if (cA =='' && cB == '') {
                cA='1';
            }
            break;
        case '3':
            if (cA =='' && cB == '' && cC == '') {
                cA='1';
            }
            break;
        case '4':
            if (cA =='' && cB == '' && cC == '' && cD == '') {
                cA='1';
            }
            break;
    }
    switch (v_zahlprod) {
        case '1':
            if (cE =='') {
                cE='1';
            }
            break;
        case '2':
            if (cE =='' && cF == '') {
                cE='1';
            }
            break;
        case '3':
            if (cE =='' && cF == '' && cG == '') {
                cE='1';
            }
            break;
        case '4':
            if (cE =='' && cF == '' && cG == '' && cH == '') {
                cE='1';
            }
            break;
    }
    // Gleichungen je nach Kombination zusammenstellen
    var gerueste={ //ANFANG Gerüst
        '11':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+'}{'+cA+'}\
\\end{aligned}\
\\]\
',
        '21':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+'}{'+cA+''+cB+'}\
\\end{aligned}\
\\]\
',
        '31':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+'}{'+cA+''+cB+''+cC+'}\
\\end{aligned}\
\\]\
',
        '41':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+'}{'+cA+''+cB+''+cC+''+cD+'}\
\\end{aligned}\
\\]\
',
        '12':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+'}{'+cA+'}\
\\end{aligned}\
\\]\
',
        '22':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+'}{'+cA+''+cB+'}\
\\end{aligned}\
\\]\
',
        '32':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+'}{'+cA+''+cB+''+cC+'}\
\\end{aligned}\
\\]\
',
        '42':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+'}{'+cA+''+cB+''+cC+''+cD+'}\
\\end{aligned}\
\\]\
',
        '13':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+'}{'+cA+'}\
\\end{aligned}\
\\]\
',
        '23':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+'}{'+cA+''+cB+'}\
\\end{aligned}\
\\]\
',
        '33':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+'}{'+cA+''+cB+''+cC+'}\
\\end{aligned}\
\\]\
',
        '43':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+'}{'+cA+''+cB+''+cC+''+cD+'}\
\\end{aligned}\
\\]\
',
        '14':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+''+cH+'}{'+cA+'}\
\\end{aligned}\
\\]\
',
        '24':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+''+cH+'}{'+cA+''+cB+'}\
\\end{aligned}\
\\]\
',
        '34':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+''+cH+'}{'+cA+''+cB+''+cC+'}\
\\end{aligned}\
\\]\
',
        '44':'\
\\[\
\\begin{aligned}\
'+ktyp+'=\\frac{'+cE+''+cF+''+cG+''+cH+'}{'+cA+''+cB+''+cC+''+cD+'}\
\\end{aligned}\
\\]\
',
    }; //ENDE Gerüst
    //Nur bestimmte anzeigen!
    //TODO: Aus den Exponenten und dem Typ die Einheit generieren, gffs. formatieren
    switch(v_zahlprod) {
        case '1':
            var exponenten_zaehler=exp_e;
            break;
        case '2':
            var exponenten_zaehler=exp_e+exp_f;
            break;
        case '3':
            var exponenten_zaehler=exp_e+exp_f+exp_g;
            break;
        case '4':
            var exponenten_zaehler=exp_e+exp_f+exp_g+exp_h;
            break;
    }
    switch(v_zahled) {
        case '1':
            var exponenten_nenner=exp_a;
            break;
        case '2':
            var exponenten_nenner=exp_a+exp_b;
            break;
        case '3':
            var exponenten_nenner=exp_a+exp_b+exp_c;
            break;
        case '4':
            var exponenten_nenner=exp_a+exp_b+exp_c+exp_d;
            break;
    }
    var exponenten_gesamt=exponenten_zaehler-exponenten_nenner;
    if (v_typ == 'hom_loes' || v_typ == 'het_loes') {
        if (String(exponenten_gesamt) == '0') {
            var einheiten='Einheit: keine';
        } else if (String(exponenten_gesamt) == '1') {
            var einheiten='Einheit: <span class="mformel">mol/l</sup></span>';
        } else {
            var einheiten='Einheit: <span class="mformel">mol<sup>'+exponenten_gesamt+'</sup>/l<sup>'+exponenten_gesamt+'</sup></span>';
        }
    } else if (v_typ == 'hom_gas' || v_typ == 'het_gas') {
        if (String(exponenten_gesamt) == '0') {
            var einheiten='Einheit: keine';
        } else if (String(exponenten_gesamt) == '1') {
            var einheiten='Einheit: <span class="mformel">Pa</span>';
        } else {
            var einheiten='Einheit: <span class="mformel">Pa<sup>'+exponenten_gesamt+'</span>';
        }
    }
    
    
    var gltext=gerueste[geruestschluessel]+einheiten;
    $('#loesungsbereich').html(gltext);
    aktualisiere_ansicht();
}

var sf_alle=[
    'i_sf_a', 'i_sf_b', 'i_sf_c', 'i_sf_d', 
    'i_sf_e', 'i_sf_f', 'i_sf_g', 'i_sf_h'
];

var teilchenauswahl={
    'a_zahled':{
        '1':['a'],
        '2':['a', 'plus_b', 'b'],
        '3':['a', 'plus_b', 'b', 'plus_c', 'c'],
        '4':['a', 'plus_b', 'b', 'plus_c', 'c', 'plus_d', 'd'],
        'alle':['a', 'plus_b', 'b', 'plus_c', 'c', 'plus_d', 'd']
    },
    'a_zahlprod':{
        '1':['e'],
        '2':['e', 'plus_f', 'f'],
        '3':['e', 'plus_f', 'f', 'plus_g', 'g'],
        '4':['e', 'plus_f', 'f', 'plus_g', 'g', 'plus_h', 'h'],
        'alle':['e', 'plus_f', 'f', 'plus_g', 'g', 'plus_h', 'h']
    }
};

function lade_seite() {
    $('#a_typ').val('hom_loes');
    $('#a_zahled').val('2');
    $('#a_zahlprod').val('2');
    zahl_teilchen('a_zahled');
    zahl_teilchen('a_zahlprod');
    var zuord1={
        0:'A', 1:'B', 2:'C', 3:'D', 
        4:'E', 5:'F', 6:'G', 7:'H'
    }
    for (i=0; i<sf_alle.length; i++) {
        var s1='#'+sf_alle[i];
        $(s1).attr('value', zuord1[i]);
    }
    $('#a_koeff_a').val('1');
    $('#a_koeff_b').val('1');
    $('#a_koeff_c').val('1');
    $('#a_koeff_d').val('1');
    $('#a_koeff_e').val('1');
    $('#a_koeff_f').val('1');
    $('#a_koeff_g').val('1');
    $('#a_koeff_h').val('1');
    $('#a_ph_a').val('aq');
    $('#a_ph_b').val('aq');
    $('#a_ph_c').val('aq');
    $('#a_ph_d').val('aq');
    $('#a_ph_e').val('aq');
    $('#a_ph_f').val('aq');
    $('#a_ph_g').val('aq');
    $('#a_ph_h').val('aq');
    //$('#loesungsbereich').html('&nbsp;');
    erstelle_mwg();
}

function zahl_teilchen(wer, wert) {
    var wer=String(wer);
    var wert=$('#'+wer).val();
    for (i=0; i<teilchenauswahl[wer]['alle'].length; i++) {
        var schluessel_aus='#'+teilchenauswahl[wer]['alle'][i];
        $(schluessel_aus).attr('hidden', 'hidden');
    }
    for (i=0; i<teilchenauswahl[wer][wert].length; i++) {
        var schluessel_ein='#'+teilchenauswahl[wer][wert][i];
        $(schluessel_ein).removeAttr('hidden');
    }
    erstelle_mwg();
}

function passe_laenge_an(wer, wert) {
    var wer=wer;
    var zeichenkette=wert;
    var zeichenkette_kurz=ohne_leerzeichen(zeichenkette);
    $('#'+wer).attr('value', zeichenkette_kurz);
    var neue_laenge=String(zeichenkette_kurz.length); //evtl. +1?
    if (parseInt(zeichenkette_kurz.length) > 0) {
        $('#'+wer).attr('size', neue_laenge);
    }
}

function ohne_leerzeichen(wert) {
    var wert=wert;
    var neuer_wert=wert.replace(/\ /g , ''); //Leerzeichen durch nichts ersetzen
    return neuer_wert;
}

// MathJax Ansicht aktualieren
function aktualisiere_ansicht() {
    // MathJax eneut aufrufen zum Aktualisieren der Ansicht
    MathJax.Hub.Typeset();
}
