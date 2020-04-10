var geg=false;
var ges=false;
var hervorhebung='#e5ffd5'; /*'#F0F8FF' #ffe6d5 */

// MathJax Ansicht aktualieren
function aktualisiere_ansicht() {
    // MathJax eneut aufrufen zum Aktualisieren der Ansicht
    MathJax.Hub.Typeset();
}

function schreibe_formeln(geg, ges) {
    //alert('schreibe_formeln '+geg+' '+ges);
    // alle notwendigen Variablen aus dem Formular holen
    /* Stoff A */
    var f_a_name=$('#a_name').attr('value');
    var f_a_koeff=$('#a_verhaeltnis').attr('value');
    var f_a_sf=$('#a_sf').attr('value');
    var f_a_M=parseFloat($('#a_M').attr('value')).toLocaleString();
    var f_a_m=parseFloat($('#a_m').attr('value')).toLocaleString()
    var f_a_V=parseFloat($('#a_V').attr('value')).toLocaleString()
    var f_a_N=$('#a_N').attr('value');
    var f_a_n=parseFloat($('#a_n').attr('value')).toLocaleString();
    /* Stoff B */
    var f_b_name=$('#b_name').attr('value');
    var f_b_koeff=$('#b_verhaeltnis').attr('value');
    var f_b_sf=$('#b_sf').attr('value');
    var f_b_M=parseFloat($('#b_M').attr('value')).toLocaleString();
    var f_b_m=parseFloat($('#b_m').attr('value')).toLocaleString();
    var f_b_V=parseFloat($('#b_V').attr('value')).toLocaleString();
    var f_b_N=$('#b_N').attr('value');
    var f_b_n=parseFloat($('#b_n').attr('value')).toLocaleString();
    //alle 8 Vormel-Varianten in Formeldictionary
    var formelsammlung={
        /* Aus der gegebenen Größe die Stoffmenge des Stoffs A ermitteln */
        'geg_m':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_a_sf+'}) = \\frac{m('+'\\ce{'+f_a_sf+'})}{M('+'\\ce{'+f_a_sf+'})} = \
                         \\frac{'+f_a_m+' \\, g}{'+f_a_M+' \\frac {g}{mol}} =\
                         '+f_a_n+' \\, mol \
\\end{aligned}\
\\]\
</div>',
        'geg_V':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_a_sf+'}) = \\frac{V('+'\\ce{'+f_a_sf+'})}{V_{M}} = \
                         \\frac{'+f_a_V+' \\, l}{ 22,4 \\frac {l}{mol}} =\
                         '+f_a_n+' \\, mol \
\\end{aligned}\
\\]\
</div>',
        'geg_N':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_a_sf+'}) = \\frac{N('+'\\ce{'+f_a_sf+'})}{N_{A}} = \
                         \\frac{'+f_a_N+'}{ 6,022 \\cdot 10^{23}  \\frac {1}{mol}} =\
                         '+f_a_n+' \\, mol \
\\end{aligned}\
\\]\
</div>',
        'geg_n':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_a_sf+'}) = '+f_a_n+' \\, mol \
\\end{aligned}\
\\]\
</div>',
        /* Aus der Stoffmenge des Stoffs A die Stoffmenge von Stoff B und 
           anschließend die gewünschte Größe ermitteln */
        'ges_m':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_a_sf+'}) \\cdot \\frac{\\color{green}{Koeffizient('+'\\ce{'+f_b_sf+'})}}{\\color{#ff6600}{Koeffizient('+'\\ce{'+f_a_sf+'})}} = \
                         '+f_a_n+' \\, mol \\cdot \\frac{\\color{green}{'+f_b_koeff+'}}{\\color{#ff6600}{'+f_a_koeff+'}} = \
                         '+f_b_n+' \\, mol \\\\\
m('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_b_sf+'}) \\cdot M('+'\\ce{'+f_b_sf+'}) = \
                         '+f_b_n+' \\, mol \\cdot '+f_b_M+' \\frac{g}{mol} = \
                         \\bbox[yellow,2pt]{'+f_b_m+' \\, g } \\\\\
\\text{Die Masse an gebildetem '+f_b_name+' beträgt } '+f_b_m+' \\text { Gramm.} \
\\end{aligned}\
\\]\
</div>',
        'ges_V':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_a_sf+'}) \\cdot \\frac{\\color{green}{Koeffizient('+'\\ce{'+f_b_sf+'})}}{\\color{#ff6600}{Koeffizient('+'\\ce{'+f_a_sf+'})}} = \
                         '+f_a_n+' \\, mol \\cdot \\frac{\\color{green}{'+f_b_koeff+'}}{\\color{#ff6600}{'+f_a_koeff+'}} = \
                         '+f_b_n+' \\, mol \\\\\
V('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_b_sf+'}) \\cdot V_{M}  = \
                         '+f_b_n+' \\, mol \\cdot 22,4 \\frac{l}{mol} = \
                         \\bbox[yellow,2pt]{'+f_b_V+' \\, l } \\\\\
\\text{Das Volumen an gebildetem '+f_b_name+' beträgt } '+f_b_V+' \\text { Liter.} \
\\end{aligned}\
\\]\
</div>',
        'ges_N':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_a_sf+'}) \\cdot \\frac{\\color{green}{Koeffizient('+'\\ce{'+f_b_sf+'})}}{\\color{#ff6600}{Koeffizient('+'\\ce{'+f_a_sf+'})}} = \
                         '+f_a_n+' \\, mol \\cdot \\frac{\\color{green}{'+f_b_koeff+'}}{\\color{#ff6600}{'+f_a_koeff+'}} = \
                         '+f_b_n+' \\, mol \\\\\
N('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_b_sf+'}) \\cdot N_{A}  = \
                         '+f_b_n+' \\, mol \\cdot 6,022 \\cdot 10^{23} \\frac{1}{mol} = \
                         \\bbox[yellow,2pt]{'+f_b_N+'} \\\\\
\\text{Die Teilchenzahl an gebildetem '+f_b_name+' beträgt } '+f_b_N+' \\text {.} \
\\end{aligned}\
\\]\
</div>',
    'ges_n':'\
<div>\
\\[\
\\begin{aligned}\
n('+'\\ce{'+f_b_sf+'}) = n('+'\\ce{'+f_a_sf+'}) \\cdot \\frac{\\color{green}{Koeffizient('+'\\ce{'+f_b_sf+'})}}{\\color{#ff6600}{Koeffizient('+'\\ce{'+f_a_sf+'})}} = \
                         '+f_a_n+' \\, mol \\cdot \\frac{\\color{green}{'+f_b_koeff+'}}{\\color{#ff6600}{'+f_a_koeff+'}} = \
                         \\bbox[yellow,2pt]{'+f_b_n+' \\, mol } \\\\\
\\text{Die Stoffmenge an gebildetem '+f_b_name+' beträgt } '+f_b_n+' \\text { Mol.} \
\\end{aligned}\
\\]\
</div>',

} 
    // die ausgewählte Kombination aus zwei Formeln mit MathJax formatiert darstellen
    $('#berechnung1').html(formelsammlung[geg]);
    $('#berechnung2').html(formelsammlung[ges]);
    /* Einmalig die Ansicht aktualisieren */
    aktualisiere_ansicht();
}

function berechne() {
     if (geg && ges) {
         // welche Größe ist gegeben und welcher ist gesucht?
         // Berechnung für jeden dieser Fälle durchführen und Werte in input eintragen
         switch(geg) {
             case 'geg_m':
                 /* Molare Masse holen */
                 var M_von_a=parseFloat($('input#a_M').attr('value'));
                 /* Masse holen */
                 var m_von_a=parseFloat($('input#a_m').attr('value'));
                 /* Stoffmenge von A berechnen */
                 var n_von_a=parseFloat(m_von_a/M_von_a).toFixed(3);
                 $('input#a_n').attr('value', n_von_a);
                 break;
             case 'geg_V':
                 /* Volumen holen */
                 var V_von_a=parseFloat($('input#a_V').attr('value'));
                 /* molares Molumen Vm=22,4 l/mol */
                 var Vm=22.4;
                 /* Stoffmenge von A berechnen */
                 var n_von_a=parseFloat(V_von_a/Vm).toFixed(3)
                 $('input#a_n').attr('value', n_von_a);
                 break;
             case 'geg_N':
                 /* Teilchenzahl holen */
                 var N_von_a=parseFloat(eval($('input#a_N').attr('value')));
                 /* Avogadrokonstante NA=6.022*10^23 1/mol */
                 var NA=6.022*Math.exp(23);
                 /* Stoffmenge von A berechnen */
                 var n_von_a=parseFloat(N_von_a/NA).toFixed(3);
                 $('input#a_n').attr('value', n_von_a);
                 break;
             case 'geg_n':
                 /* Stoffmenge von A unverändert */
                 break;
         }
         switch(ges) {
             case 'ges_m':
                 /* Stoffmenge von B aus der Stoffmenge von A und dem Stoffmengenverhältnis */
                 var n_von_a=parseFloat($('input#a_n').attr('value'));
                 var koeff_von_a=parseFloat($('input#a_verhaeltnis').attr('value'));
                 var koeff_von_b=parseFloat($('input#b_verhaeltnis').attr('value'))
                 var n_von_b=parseFloat((n_von_a*koeff_von_b)/koeff_von_a).toFixed(3);
                 $('input#b_n').attr('value', n_von_b);
                 /* Molare Masse von B holen */
                 var M_von_b=parseFloat($('input#b_M').attr('value'));
                 /* Masse von B berechnen */
                 var m_von_b=parseFloat(n_von_b*M_von_b).toFixed(3);
                 $('input#b_m').attr('value', m_von_b);
                 $('input#b_m').removeAttr('disabled');
                 $('input#b_m').css('background-color', 'yellow');
                 break;
             case 'ges_V':
                 /* Stoffmenge von B aus der Stoffmenge von A und dem Stoffmengenverhältnis */
                 var n_von_a=parseFloat($('input#a_n').attr('value'));
                 var koeff_von_a=parseFloat($('input#a_verhaeltnis').attr('value'));
                 var koeff_von_b=parseFloat($('input#b_verhaeltnis').attr('value'))
                 var n_von_b=parseFloat((n_von_a*koeff_von_b)/koeff_von_a).toFixed(3);
                 $('input#b_n').attr('value', n_von_b);
                 /* molares Molumen Vm=22,4 l/mol */
                 var Vm=22.4;
                 /* Volumen von B berechnen */
                 var V_von_b=parseFloat(n_von_b*Vm).toFixed(3);
                 $('input#b_V').attr('value', V_von_b);
                 $('input#b_V').removeAttr('disabled');
                 $('input#b_V').css('background-color', 'yellow');
                 break;
             case 'ges_N':
                 /* Stoffmenge von B aus der Stoffmenge von A und dem Stoffmengenverhältnis */
                 var n_von_a=parseFloat($('input#a_n').attr('value'));
                 var koeff_von_a=parseFloat($('input#a_verhaeltnis').attr('value'));
                 var koeff_von_b=parseFloat($('input#b_verhaeltnis').attr('value'))
                 var n_von_b=parseFloat((n_von_a*koeff_von_b)/koeff_von_a).toFixed(3);
                 $('input#b_n').attr('value', n_von_b);
                 /* Avogadrokonstante NA=6.022*10^23 1/mol */
                 var NA_kurz=6.022;
                 /* Teilchenzahl berechnen */
                 var N_von_b_kurz=eval(n_von_b*NA_kurz);
                 //var N_von_b_anzeige=N_von_b_kurz+'*Math.exp(23)';
                 var N_von_b_anzeige=N_von_b_kurz+' • 10²³';
                 /* anzeigen */
                 $('input#b_N').attr('value', N_von_b_anzeige);
                 $('input#b_N').removeAttr('disabled');
                 $('input#b_N').css('background-color', 'yellow');
                 break;
             case 'ges_n':
                 /* Stoffmenge von B aus der Stoffmenge von A und dem Stoffmengenverhältnis */
                 var n_von_a=parseFloat($('input#a_n').attr('value'));
                 var koeff_von_a=parseFloat($('input#a_verhaeltnis').attr('value'));
                 var koeff_von_b=parseFloat($('input#b_verhaeltnis').attr('value'))
                 var n_von_b=parseFloat((n_von_a*koeff_von_b)/koeff_von_a).toFixed(3);
                 $('input#b_n').attr('value', n_von_b);
                 $('input#b_n').removeAttr('disabled');
                 $('input#b_n').css('background-color', 'yellow');
                 break;
         }
         // Berechnung mit MathJax darstellen
         schreibe_formeln(geg, ges);      
     } else {
         alert('entweder geg oder ges nicht ausgewählt!');
     }
     
}

function zurueck_setzen() {
    //alert('zurueck_setzen');
    var groessen=['M', 'm', 'V', 'N', 'n'];
    for (var i=0; i< groessen.length; i++) {
        var schluessel_a='td.auswahl_a_'+groessen[i];
        $(schluessel_a).removeAttr('disabled');
        var schluessel_b='td.auswahl_b_'+groessen[i];
        $(schluessel_b).removeAttr('disabled');
    }
    var eingabefelder_zeichen=[
        ['a_name', 'Stoff A'],              ['b_name', 'Stoff B'],
        ['a_sf',   'A'],                    ['b_sf',   'B']
    ]
    var eingabefelder_zahlen=[
        ['a_M', 0],                      ['b_M', 0],
        ['a_m', 0],                      ['b_m', 0], //Lösungsfeld: unten deaktiviert
        ['a_V', 0],                      ['b_V', 0], //Lösungsfeld: unten deaktiviert
        ['a_N', '6.022*Math.exp(23)'],   ['b_N', 0], //Lösungsfeld: unten deaktiviert
        ['a_n', 1],                      ['b_n', 0]  //Lösungsfeld: unten deaktiviert
    ]
    for (var i=0; i<eingabefelder_zeichen.length; i++) {
        var schluessel='#'+eingabefelder_zeichen[i][0];
        $(schluessel).attr('value', eingabefelder_zeichen[i][1]);
    }
    for (var i=0; i<eingabefelder_zahlen.length; i++) {
        var schluessel='#'+eingabefelder_zahlen[i][0];
        $(schluessel).attr('value', eingabefelder_zahlen[i][1]);
        $(schluessel).removeAttr('disabled');
    }
    //Lösungsfelder, diese werden erst mit dem Ergebnis farbig unterlegt
    $('#b_m').attr('disabled', 'disabled');
    $('#b_V').attr('disabled', 'disabled');
    $('#b_N').attr('disabled', 'disabled');
    $('#b_n').attr('disabled', 'disabled');
    //Koeffizienten-Auswahllisten
    var auswahllisten=[
        'a_koeff', 'b_koeff'
    ]
    for (var i=0; i< auswahllisten.length; i++) {
        var schluessel='#'+auswahllisten[i];
        $(schluessel).children('option:first').attr('selected', 'selected');
        verhaeltnis_anpassen(auswahllisten[i], 1);
    }
    /* Radiobuttons abwählen */
    $('input[type="radio"]:checked').removeAttr('checked');
}

function verhaeltnis_anpassen(wer, wie) {
    //alert(wer+' '+wie);
    switch(wer) {
        case 'a_koeff':
            $('#a_verhaeltnis').attr('value', wie);
            break;
        case 'b_koeff':
            $('#b_verhaeltnis').attr('value', wie);
            break;
    }
}

function waehle_geg_a(wert) {
    switch(wert) {
        case 'geg_m':
            geg=wert;
            $('td.auswahl_a_M').css('background-color', hervorhebung);
            $('td.auswahl_a_M').removeAttr('disabled');
            $('td.auswahl_a_m').css('background-color', hervorhebung);
            $('td.auswahl_a_m').removeAttr('disabled');
            $('td.auswahl_a_V').empty();
            $('td.auswahl_a_N').empty();
            $('#a_n').attr('disabled', 'disabled');
            $('#a_r5').remove();
            break;
        case 'geg_V':
            geg=wert;
            $('td.auswahl_a_M').empty();
            $('td.auswahl_a_m').empty();
            $('td.auswahl_a_V').css('background-color', hervorhebung);
            $('td.auswahl_a_V').removeAttr('disabled');
            $('td.auswahl_a_N').empty();
            $('#a_n').attr('disabled', 'disabled');
            $('#a_r5').remove();
            break;
        case 'geg_N':
            geg=wert;
            $('td.auswahl_a_M').empty();
            $('td.auswahl_a_m').empty();
            $('td.auswahl_a_V').empty();
            $('td.auswahl_a_N').css('background-color', hervorhebung);
            $('td.auswahl_a_N').removeAttr('disabled');
            $('#a_n').attr('disabled', 'disabled');
            $('#a_r5').remove();
            break;
        case 'geg_n':
            geg=wert;
            $('td.auswahl_a_M').empty();
            $('td.auswahl_a_m').empty();
            $('td.auswahl_a_V').empty();
            $('td.auswahl_a_N').empty();
            $('td.auswahl_a_n').css('background-color', hervorhebung);
            $('td.auswahl_a_n').removeAttr('disabled');
            break;
    }
}
function waehle_ges_b(wert) {
        switch(wert) {
        case 'ges_m':
            ges=wert;
            $('td.auswahl_b_M').css('background-color', hervorhebung);
            $('td.auswahl_b_M').removeAttr('disabled');
            $('td.auswahl_b_m').css('background-color', hervorhebung);
            $('td.auswahl_b_m').removeAttr('disabled');
            $('td.auswahl_b_V').empty();
            $('td.auswahl_b_N').empty();
            $('#b_n').attr('disabled', 'disabled');
            $('#b_r5').remove();
            break;
        case 'ges_V':
            ges=wert;
            $('td.auswahl_b_M').empty();
            $('td.auswahl_b_m').empty();
            $('td.auswahl_b_V').css('background-color', hervorhebung);
            $('td.auswahl_b_V').removeAttr('disabled');
            $('td.auswahl_b_N').empty();
            $('#b_n').attr('disabled', 'disabled');
            $('#b_r5').remove();
            break;
        case 'ges_N':
            ges=wert;
            $('td.auswahl_b_M').empty();
            $('td.auswahl_b_m').empty();
            $('td.auswahl_b_V').empty();
            $('td.auswahl_b_N').css('background-color', hervorhebung);
            $('td.auswahl_b_N').removeAttr('disabled');
            $('#b_n').attr('disabled', 'disabled');
            $('#b_r5').remove();
            break;
        case 'ges_n':
            ges=wert;
            $('td.auswahl_b_M').empty();
            $('td.auswahl_b_m').empty();
            $('td.auswahl_b_V').empty();
            $('td.auswahl_b_N').empty();
            $('td.auswahl_b_n').css('background-color', hervorhebung);
            $('td.auswahl_b_n').removeAttr('disabled');
            break;
    }
}
