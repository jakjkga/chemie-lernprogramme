/*
################################################################################
##                            Summenformeln und Namen                         ##
################################################################################
*/
salznamen=new Array();
salznamen['-']="";
// Halogenide (z.B. Chloride)
salznamen['NaCl']="Natriumchlorid";
salznamen['KCl']="Kaliumchlorid";
salznamen['NH₄Cl']="Ammoniumchlorid";
salznamen['CuCl']="Kupfer(I)-chlorid";
salznamen['CaCl₂']="Calciumchlorid";
salznamen['MgCl₂']="Magnesiumchlorid";
salznamen['ZnCl₂']="Zink(II)-chlorid";
salznamen['CuCl₂']="Kupfer(II)-chlorid";
salznamen['FeCl₂']="Eisen(II)-chlorid";
salznamen['AlCl₃']="Aluminiumchlorid";
salznamen['FeCl₃']="Eisen(III)-chlorid";
// Chalkogenide (z.B. Oxide)
salznamen['Na₂O']="Natriumoxid";
salznamen['K₂O']="Kaliumoxid";
salznamen['Cu₂O']="Kupfer(I)-oxid";
salznamen['CaO']="Calciumoxid";
salznamen['MgO']="Magnesiumoxid";
salznamen['ZnO']="Zink(II)-oxid";
salznamen['CuO']="Kupfer(II)-oxid";
salznamen['FeO']="Eisen(II)-oxid";
salznamen['Al₂O₃']="Aluminiumoxid";
salznamen['Fe₂O₃']="Eisen(III)-oxid";
// Hydroxide
salznamen['NaOH']="Natriumhydroxid";
salznamen['KOH']="Kaliumhydroxid";
salznamen['NH₄OH']="Ammoniumhydroxid";
salznamen['Ca(OH)₂']="Calciumhydroxid";
salznamen['Mg(OH)₂']="Magnesiumhydroxid";
salznamen['Cu(OH)₂']="Kupfer(II)-hydroxid";
salznamen['Al(OH)₃']="Aluminiumhydroxid";
salznamen['Fe(OH)₃']="Eisen(III)-hydroxid";
// Nitrate
salznamen['NaNO₃']="Natriumnitrat";
salznamen['KNO₃']="Kaliumnitrat";
salznamen['NH₄NO₃']="Ammoniumnitrat";
salznamen['Ca(NO₃)₂']="Calciumnitrat";
salznamen['Mg(NO₃)₂']="Magnesiumnitrat";
salznamen['Cu(NO₃)₂']="Kupfer(II)-nitrat";
salznamen['Al(NO₃)₃']="Aluminiumnitrat";
salznamen['Fe(NO₃)₃']="Eisen(III)-nitrat";
// Carbonate
salznamen['Na₂CO₃']="Natriumcarbonat";
salznamen['K₂CO₃']="Kaliumcarbonat";
salznamen['(NH₄)₂CO₃']="Ammoniumcarbonat";
salznamen['CaCO₃']="Calciumcarbonat";
salznamen['MgCO₃']="Magnesiumcarbonat";
salznamen['CuCO₃']="Kupfer(II)-carbonat";
salznamen['Cu₂CO₃']="Kupfer(I)-carbonat";
salznamen['FeCO₃']="Eisen(II)-carbonat";
// Sulfate
salznamen['Na₂SO₄']="Natriumsulfat";
salznamen['K₂SO₄']="Kaliumsulfat";
salznamen['(NH₄)₂SO₄']="Ammoniumsulfat";
salznamen['CaSO₄']="Calciumsulfat";
salznamen['MgSO₄']="Magnesiumsulfat";
salznamen['ZnSO₄']="Zink(II)-sulfat";
salznamen['CuSO₄']="Kupfer(II)-sulfat";
salznamen['Cu₂SO₄']="Kupfer(I)-sulfat";
salznamen['FeSO₄']="Eisen(II)-sulfat";
salznamen['Al₂(SO₄)₃']="Aluminiumsulfat";
salznamen['Fe₂(SO₄)₃']="Eisen(III)-sulfat";
// Phosphate
salznamen['Na₃PO₄']="Natriumphosphat";
salznamen['K₃PO₄']="Kaliumphosphat";
salznamen['Ca₃(PO₄)₂']="Calciumphosphat";
salznamen['Cu₃(PO₄)₂']="Kupfer(II)-phosphat";
salznamen['AlPO₄']="Aluminiumphosphat";
salznamen['FePO₄']="Eisen(III)-phosphat";

/*
################################################################################
##                 Summenformeln und Zerlegung in Ionen                       ##
################################################################################
*/
ionenzerlegung=new Array();
ionenzerlegung['-']="";
// Halogenide (z.B. Chloride)
ionenzerlegung['NaCl']="1 Na⁺ + 1 Cl⁻";
ionenzerlegung['KCl']="1 K⁺ + 1 Cl⁻";
ionenzerlegung['NH₄Cl']="1 NH₄⁺ + 1 Cl⁻";
ionenzerlegung['CuCl']="1 Cu⁺ + 1 Cl⁻";
ionenzerlegung['CaCl₂']="1 Ca²⁺ + 2 Cl⁻";
ionenzerlegung['MgCl₂']="1 Mg²⁺ + 2 Cl⁻";
ionenzerlegung['ZnCl₂']="1 Zn²⁺ + 2 Cl⁻";
ionenzerlegung['CuCl₂']="1 Cu²⁺ + 2 Cl⁻";
ionenzerlegung['FeCl₂']="1 Fe²⁺ + 2 Cl⁻";
ionenzerlegung['AlCl₃']="1 Al³⁺ + 3 Cl⁻";
ionenzerlegung['FeCl₃']="1 Fe³⁺ + 3 Cl⁻";
// Chalkogenide (z.B. Oxide)
ionenzerlegung['Na₂O']="2 Na⁺ + 1 O²⁻";
ionenzerlegung['K₂O']="2 K⁺ + 1 O²⁻";
ionenzerlegung['Cu₂O']="2 Cu⁺+ 1 O²⁻";
ionenzerlegung['CaO']="1 Ca²⁺+ 1 O²⁻";
ionenzerlegung['MgO']="1 Mg²⁺ + 1 O²⁻";
ionenzerlegung['ZnO']="1 Zn²⁺ + 1 O²⁻";
ionenzerlegung['CuO']="1 Cu²⁺ + 1 O²⁻";
ionenzerlegung['FeO']="1 Fe²⁺ + 1 O²⁻";
ionenzerlegung['Al₂O₃']="2 Al³⁺ + 3 O²⁻";
ionenzerlegung['Fe₂O₃']="2 Fe³⁺ + 3 O²⁻";
// Hydroxide
ionenzerlegung['NaOH']="1 Na⁺ + 1 OH⁻";
ionenzerlegung['KOH']="1 K⁺ + 1 OH⁻";
ionenzerlegung['NH₄OH']="1 NH₄⁺ + 1 OH⁻";
ionenzerlegung['Ca(OH)₂']="1 Ca²⁺ + 2 OH⁻";
ionenzerlegung['Mg(OH)₂']="1 Mg²⁺ + 2 OH⁻";
ionenzerlegung['Cu(OH)₂']="1 Cu²⁺ + 2 OH⁻";
ionenzerlegung['Al(OH)₃']="1 Al³⁺ + 3 OH⁻";
ionenzerlegung['Fe(OH)₃']="1 Fe³⁺ + 3 OH⁻";
// Nitrate
ionenzerlegung['NaNO₃']="1 Na⁺ + 1 NO₃⁻";
ionenzerlegung['KNO₃']="1 K⁺ + 1 NO₃⁻";
ionenzerlegung['NH₄NO₃']="1 NH₄⁺ + 1 NO₃⁻";
ionenzerlegung['Ca(NO₃)₂']="1 Ca²⁺ + 2 OH⁻";
ionenzerlegung['Mg(NO₃)₂']="1 Mg²⁺ + 2 OH⁻";
ionenzerlegung['Cu(NO₃)₂']="1 Cu²⁺ + 2 OH⁻";
ionenzerlegung['Al(NO₃)₃']="1 Al³⁺ + 3 OH⁻";
ionenzerlegung['Fe(NO₃)₃']="1 Fe³⁺ + 3 OH⁻";
// Carbonate
ionenzerlegung['Na₂CO₃']="2 Na⁺ + 1 CO₃²⁻";
ionenzerlegung['K₂CO₃']="2 K⁺ + 1 CO₃²⁻";
ionenzerlegung['(NH₄)₂CO₃']="2 NH₄⁺ + 1 CO₃²⁻";
ionenzerlegung['CaCO₃']="1 Ca²⁺ + 1 CO₃²⁻";
ionenzerlegung['MgCO₃']="1 Mg²⁺ + 1 CO₃²⁻";
ionenzerlegung['CuCO₃']="1 Cu²⁺ + 1 CO₃²⁻";
ionenzerlegung['Cu₂CO₃']="2 Cu⁺ + 1 CO₃²⁻";
ionenzerlegung['FeCO₃']="1 Fe²⁺ + 1 CO₃²⁻";
// Sulfate
ionenzerlegung['Na₂SO₄']="2 Na⁺ + 1 SO₄²⁻";
ionenzerlegung['K₂SO₄']="2 K⁺ + 1 SO₄²⁻";
ionenzerlegung['(NH₄)₂SO₄']="2 NH₄⁺ + 1 SO₄²⁻";
ionenzerlegung['CaSO₄']="1 Ca²⁺ + 1 SO₄²⁻";
ionenzerlegung['MgSO₄']="1 Mg²⁺ + 1 SO₄²⁻";
ionenzerlegung['ZnSO₄']="1 Zn²⁺ + 1 SO₄²⁻";
ionenzerlegung['CuSO₄']="1 Cu²⁺ + 1 SO₄²⁻";
ionenzerlegung['FeSO₄']="1 Fe²⁺ + 1 SO₄²⁻";
ionenzerlegung['Al₂(SO₄)₃']="2 Al³⁺ + 3 SO₄²⁻";
ionenzerlegung['Fe₂(SO₄)₃']="2 Fe³⁺ + 3 SO₄²⁻";
// Phosphate
ionenzerlegung['Na₃PO₄']="3 Na⁺ + 1 PO₄³⁻";
ionenzerlegung['K₃PO₄']="3 K⁺ + 1 PO₄³⁻";
ionenzerlegung['Ca₃(PO₄)₂']="3 Ca²⁺ + 2 PO₄³⁻";
ionenzerlegung['Cu₃(PO₄)₂']="3 Cu²⁺ + 2 PO₄³⁻";
ionenzerlegung['AlPO₄']="Al³⁺ + 1 PO₄³⁻";
ionenzerlegung['FePO₄']="Fe³⁺ + 1 PO₄³⁻";

/*
################################################################################
##                                Funktionen                                  ##
################################################################################
*/


function eingabetaste(e) {
    var ereignis=e || window.event;
    //console.log(e);
    if (ereignis && ereignis.which == 13) {
        //auswertung('SF', 'SF_auswahl');
        ereignis.preventDefault();
        ereignis.stopPropagation();
        //alert('Eingabetaste');
    }
}

function lade_seite() {
    document.forms['SF'].elements['SF_auswahl'].options[0].selected="selected";
    // Eingabe-Textfeld:
    document.getElementById('Salzname_Eingabe').disabled=false;
    document.getElementById('Salzname_Eingabe').value='';
    //document.getElementById('Salzname_Eingabe').style='background-color:white';
    document.getElementById('Salzname_Eingabe').style.fontWeight='normal';
    document.getElementById('Salzname_Eingabe').disabled=true;
    // Ausgabe-Textfeld:
    document.getElementById('Salzname_Ausgabe').disabled=false;
    document.getElementById('Salzname_Ausgabe').value='';
    document.getElementById('Salzname_Ausgabe').disabled=true;
    // Infolink:
    document.getElementById('infolink').href='http://de.wikipedia.org/wiki/Salze'
}

function hole_aktuellen_index(auswahlname, optionname) {
    var schluessel=String(document.forms[auswahlname].elements[optionname].value);
    var wert=salznamen[schluessel];
    var linkwert=salznamen[schluessel];
    document.getElementById('Salzname_Eingabe').value='';
    document.getElementById('Salzname_Ausgabe').value='';
    document.getElementById('Salzname_Eingabe').disabled=false;
    document.getElementById('Salzname_Eingabe').style.backgroundColor='white';
    document.getElementById('Salzname_Eingabe').style.Color='black';
    document.getElementById('Salzname_Eingabe').style.fontWeight='normal';
    var eingabewert=document.getElementById('Salzname_Eingabe').value;
    if ( eingabewert != wert) {
        wert='Leider enthält der angegebene Name noch Fehler, richtig wäre: '+wert;
    } else {
        wert='Richtig: '+wert;
    }
    //document.getElementById('infolink').href='http://de.wikipedia.org/wiki/'+linkwert;
}

function auswertung(auswahlname, optionname) {
    var schluessel=String(document.forms[auswahlname].elements[optionname].value);
    var wert=salznamen[schluessel];
    var linkwert=salznamen[schluessel];
    var ionenwert=ionenzerlegung[schluessel];
    document.getElementById('Salzname_Ausgabe').disabled=false;
    document.getElementById('Salzname_Eingabe').disabled=false;
    var eingabewert=document.getElementById('Salzname_Eingabe').value;
    if ( eingabewert != wert) {
        //wert='Leider enthält der angegebene Name noch Fehler, richtig wäre: '+wert;
        wert='Leider enthält der angegebene Name noch Fehler, probiere es nochmal!';
        document.getElementById('Salzname_Eingabe').disabled=false;
        document.getElementById('Salzname_Eingabe').style.backgroundColor='#f00';
        document.getElementById('Salzname_Eingabe').style.Color='white';
        document.getElementById('Salzname_Eingabe').style.fontWeight='bold';
        document.getElementById('Salzname_Ausgabe').style.Color='red';
        //document.getElementById('Salzname_Eingabe').disabled=true;
        document.getElementById('infolink').href='http://de.wikipedia.org/wiki/Salze';
        if (schluessel == '-') {
            wert='';
            document.getElementById('Salzname_Eingabe').disabled=false;
            document.getElementById('Salzname_Eingabe').style.backgroundColor='#f00';
            document.getElementById('Salzname_Eingabe').style.Color='white';
            document.getElementById('Salzname_Eingabe').style.fontWeight='bold';
            document.getElementById('Salzname_Ausgabe').style.Color='red';
            //document.getElementById('Salzname_Eingabe').disabled=true;
        }
    } else {
        //wert='Richtig: '+wert;
        wert=ionenwert;
        document.getElementById('Salzname_Eingabe').disabled=false;
        document.getElementById('Salzname_Eingabe').style.backgroundColor='lightgreen';
        //document.getElementById('Salzname_Eingabe').style.Color='white';
        document.getElementById('Salzname_Eingabe').style.fontWeight='bold';
        document.getElementById('Salzname_Ausgabe').style.Color='green';
        //document.getElementById('Salzname_Eingabe').disabled=true;
        document.getElementById('infolink').href='http://de.wikipedia.org/wiki/'+linkwert;
    }
    document.getElementById('Salzname_Ausgabe').disabled=false;
    document.getElementById('Salzname_Ausgabe').value=wert;
    //document.getElementById('Salzname_Eingabe').disabled=true;
    //document.getElementById('Salzname_Ausgabe').disabled=true;
}
