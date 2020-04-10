var pufferdaten={
    '-':[
        'HA', //Summenformel des Säureteilchens
        'A⁻', //Summenformel des Basenteilchens
        7.00, //pKs des Säureteilchens
        'HA', //Summenformel des Säureteilchens
        'A^{-}', //Summenformel des Basenteilchens
    ],
    'Ammoniak':[
        'NH₄⁺', //Summenformel des Säureteilchens
        'NH₃', //Summenformel des Basenteilchens
        9.25, //pKs des Säureteilchens
        'NH_{4}^{+}', //Summenformel des Säureteilchens
        'NH_{3}', //Summenformel des Basenteilchens
    ],
    'Essigsäure':[
        'CH₃COOH', //Summenformel des Säureteilchens
        'CH₃COO⁻', //Summenformel des Basenteilchens
        4.75, //pKs des Säureteilchens 4,76
        'CH_{3}COOH', //Summenformel des Säureteilchens
        'CH_{3}COO^{-}', //Summenformel des Basenteilchens
    ],
    'Glycin_sauer':[
        '⁺H₃N–CH₂–COOH', //Summenformel des Säureteilchens
        '⁺H₃N–CH₂–COO⁻', //Summenformel des Basenteilchens
        2.34, //pKs des Säureteilchens pKs(R-COOH)=2,34
        '^{+}H_{3}N–CH_{2}–COOH', //Summenformel des Säureteilchens
        '^{+}H_{3}N–CH_{2}–COO^{-}', //Summenformel des Basenteilchens
    ],
    'Glycin_alkalisch':[
        '⁺H₃N–CH₂–COO⁻', //Summenformel des Säureteilchens
        'H₂N–CH₂–COO⁻', //Summenformel des Basenteilchens
        9.60, //pKs des Säureteilchens pKs(R-NH₃⁺)=9,60
        '^{+}H_{3}N–CH_{2}–COO^{-}', //Summenformel des Säureteilchens
        'H_{2}N–CH_{2}–COO^{-}', //Summenformel des Basenteilchens
    ],
    'HEPES':[
        '(HOCH₂CH₂)[N(CH₂CH₂)₂N]CH₂CH₂SO₃H', //Summenformel des Säureteilchens
        '(HOCH₂CH₂)[N(CH₂CH₂)₂N]CH₂CH₂SO₃⁻', //Summenformel des Basenteilchens
        7.55, //pKs des Säureteilchens
        '(HOCH_{2}CH_{2})[N(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}SO_{3}H', //Summenformel des Säureteilchens
        '(HOCH_{2}CH_{2})[N(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}SO_{3}^{-}', //Summenformel des Basenteilchens
    ],
    'HEPPS':[
        '(HOCH₂CH₂)[N(CH₂CH₂)₂N]CH₂CH₂CH₂SO₃H', //Summenformel des Säureteilchens
        '(HOCH₂CH₂)[N(CH₂CH₂)₂N]CH₂CH₂CH₂SO₃⁻', //Summenformel des Basenteilchens
        8.00, //pKs des Säureteilchens
        '(HOCH_{2}CH_{2})[N(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}CH_{2}SO_{3}H', //Summenformel des Säureteilchens
        '(HOCH_{2}CH_{2})[N(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}CH_{2}SO_{3}^{-}', //Summenformel des Basenteilchens
    ],
    'Kohlensäure':[
        'H₂CO₃', //Summenformel des Säureteilchens
        'HCO₃⁻', //Summenformel des Basenteilchens
        6.1, //pKs des Säureteilchens H₂O + H₂CO₃ ⇌  H3O + HCO₃⁻                     pKS₁=3,3
             //aber das Gleichgewicht der Zerfallsreaktion CO₂ + H₂O ⇌ H₂CO₃  pK=3,1
             //liegt weit auf der linken Seite, so die Gesamtreaktion ergibt: pKs=6,4 bei 37°C
             //(Wert Wikipedia: 6,1 bei 20°C) bei pH=7 liegt also HCO₃⁻/CO₂ im Verhältnis 10/1 vor.
             //Quellen: http://www2.chemie.uni-erlangen.de/projects/vsc/chemie-mediziner-neu/saeuren/kohlensaeurepuffer.html
             //http://de.wikipedia.org/wiki/Kohlens%C3%A4ure-Bicarbonat-System
        'H_{2}CO_{3}', //Summenformel des Säureteilchens
        'HCO_{3}^{-}', //Summenformel des Basenteilchens
    ],
    'MES':[
        '[O(CH₂CH₂)₂N]CH₂CH₂SO₃H', //Summenformel des Säureteilchens
        '[O(CH₂CH₂)₂N]CH₂CH₂SO₃⁻', //Summenformel des Basenteilchens
        6.15, //pKs des Säureteilchens
        '[O(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}SO_{3}H', //Summenformel des Säureteilchens
        '[O(CH_{2}CH_{2})_{2}N]CH_{2}CH_{2}SO_{3}^{-}', //Summenformel des Basenteilchens
    ],
    'Phosphat':[
        'H₂PO₄⁻', //Summenformel des Säureteilchens
        'HPO₄²⁻', //Summenformel des Basenteilchens
        7.21, //pKs des Säureteilchens
        'H_{2}PO_{4}^{-}', //Summenformel des Säureteilchens
        'HPO_{4}^{2-}', //Summenformel des Basenteilchens
    ],
    'TRIS':[
        '(HO–CH₂)₃C–NH₃⁺', //Summenformel des Säureteilchens
        '(HO–CH₂)₃C–NH₂', //Summenformel des Basenteilchens
        8.2, //pKs des Säureteilchens
        '(HO–CH_{2})_{3}C–NH_{3}^{+}', //Summenformel des Säureteilchens
        '(HO–CH_{2})_{3}C–NH_{2}', //Summenformel des Basenteilchens
    ]  
}

function pufferauswahl(welcher) {
    var sf_s=pufferdaten[welcher][0];
    var sf_b=pufferdaten[welcher][1];
    var sf_pks=pufferdaten[welcher][2];
    document.getElementById('st').innerHTML='c₀('+sf_s+') =';
    document.getElementById('bt').innerHTML='c₀('+sf_b+') =';
    document.f1.pk_s.value=sf_pks;
    berechne_ph();
}

function berechne_ph() {
    var c_sa=parseFloat(document.f1.c_s.value);
    var c_ba=parseFloat(document.f1.c_b.value);
    if (c_ba == 0) {
        alert('Die Konzentration des Base muss größer als Null sein!');
    }
    var pks=parseFloat(document.f1.pk_s.value);
    var schluesselnr=0;
    var schluesselnr=document.f1.ap.options.selectedIndex;
    var schluessel=document.f1.ap.options[schluesselnr].value;
    var sf_s=pufferdaten[schluessel][0];
    var sf_b=pufferdaten[schluessel][1];
    var sf_s_unf=pufferdaten[schluessel][3];
    var sf_b_unf=pufferdaten[schluessel][4];
    //Henderson-Hasselbalch-Formel...
    // (1) ...berechen
    var ergebnis_lang=parseFloat(pks-(Math.log(c_sa/c_ba)/Math.log(10))); 
    // Falle: Math.log() liefert den natürlichen Logarithmus ln!
    // daher: "lg(x) zur Basis 10" = Math.log(x)/Math.log(10)  
    //                                           [hier allgemein für die Basis im Nenner]
    var ergebnis_gekuerzt=(Math.round(ergebnis_lang*100)/100).toFixed(2);
    var ergebnis=ergebnis_gekuerzt.replace(/\./g , ','); //Punkte durch Kommata ersetzen
    // (2) ...als String erzeugen
    var hehaformel_punkt='\
\\[\
\\begin{aligned}\
pH=pK_{S}-lg\\left\\lbrace\\frac{c_{0}('+String(sf_s_unf)+')}{c_{0}('+String(sf_b_unf)+')}\\right\\rbrace='+String(pks)+'-lg\\left\\lbrace\\frac{'+String(c_sa)+'\\,mol/ℓ}{'+String(c_ba)+'\\,mol/ℓ}\\right\\rbrace='+String(ergebnis)+'\
\\end{aligned}\
\\]\
';
    var hehaformel=hehaformel_punkt.replace(/\./g , ','); //Punkte durch Kommata ersetzen
    // (3) ...mit MathJax anzeigen
    document.getElementById('loesungsbereich').innerHTML=hehaformel;
    /* Einmalig die Ansicht aktualisieren */
    aktualisiere_ansicht();
    
}

// MathJax Ansicht aktualieren
function aktualisiere_ansicht() {
    // MathJax eneut aufrufen zum Aktualisieren der Ansicht
    MathJax.Hub.Typeset();
}

function zurueck_setzen() {
    document.f1.ap.options[0].selected="selected";
    pufferauswahl('-');
    document.f1.c_s.value=0.5;
    document.f1.c_b.value=0.5;
    document.f1.pk_s.value=7.00;
    document.getElementById('loesungsbereich').innerHTML='&nbsp;';
}
