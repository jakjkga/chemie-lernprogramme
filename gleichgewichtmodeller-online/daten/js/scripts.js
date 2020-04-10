var startwert_n_ed=200;
var startwert_n_hin=10;
var startwert_n_rueck=5;
var startwert_n_prod=100;
var startwert_n_vhin=2000;
var startwert_n_vrueck=500;
var startwert_r_uebertragungsschritt='0';
var gefaessbreite_A=100;
var gefaessbreite_B=100;

function lade_seite() {
    $('#n_ed').val(startwert_n_ed);
    $('#n_ed_verl').val(startwert_n_ed);
    $('#n_hin').val(startwert_n_hin);
    $('#n_rueck').val(startwert_n_rueck);
    $('#n_prod').val(startwert_n_prod);
    $('#n_prod_verl').val(startwert_n_prod);
    $('#n_vhin').val(startwert_n_vhin);
    $('#n_vrueck').val(startwert_n_vrueck);
    $('#r_uebertragungsschritt').val(startwert_r_uebertragungsschritt);
    $('#i_uebertragungsschritt').val(startwert_r_uebertragungsschritt);
    zeichne_gefaesse(startwert_n_ed, startwert_n_prod);
}

function zeichne_gefaesse(alte_fuellhoehe_A, alte_fuellhoehe_B) {
    /* http://calebevans.me/projects/jcanvas/ */
    // stauchen, um ein "Überlaufen" zu verhindern#
    if (alte_fuellhoehe_A+alte_fuellhoehe_B > 350) {
        alert('Die Gesamtfüllhöhe aus beiden Gefäßen A und B sollte zusammengenommen etwa 350 nicht überschreiten, da es sonst je nach gewählter Pipettenbreite zu einem Überlaufen der Gefäße kommen könnte!');
    }
    ausgleichsfaktor=3/4; // z.B. 3/4 oder 2/3
    alte_fuellhoehe_A=alte_fuellhoehe_A*ausgleichsfaktor;
    alte_fuellhoehe_B=alte_fuellhoehe_B*ausgleichsfaktor;
    // Canvas leeren
    $('#zeichenflaeche').clearCanvas();
    var pipettenbreite_A=$('#n_hin').val();
    var pipettenbreite_B=$('#n_rueck').val();
    var Y1_A=350-1/2*(alte_fuellhoehe_A);
    var Y1_B=350-1/2*(alte_fuellhoehe_B);
    //console.log(Y1_A);
    // Gefaess_A zeichnen
    $('#zeichenflaeche').drawRect({ //x, y, width, height
                                    x:150, 
                                    y:Y1_A, 
                                    width:100, 
                                    height:alte_fuellhoehe_A,
                                    fillStyle:'lightblue',
                                    strokeStyle:'white'
    });
    // Gefaess_B zeichnen
    $('#zeichenflaeche').drawRect({ //x, y, width, height
                                    x:450, 
                                    y:Y1_B, 
                                    width:100, 
                                    height:alte_fuellhoehe_B,
                                    fillStyle:'lightblue',
                                    strokeStyle:'white'
    });
    // Pipette_A zeichnen
    var X1_pip_A=150;
    var X2_pip_A=150+1/2*pipettenbreite_A;
    $('#zeichenflaeche').drawRect({ //x, y, width, height
                                    x:X1_pip_A, 
                                    y:Y1_A, 
                                    width:pipettenbreite_A, 
                                    height:alte_fuellhoehe_A,
                                    fillStyle:'blue',
                                    strokeStyle:'white'
    });
    // Pipette_B zeichnen
    var X1_pip_B=450;
    var X2_pip_B=450+1/2*pipettenbreite_B;
    $('#zeichenflaeche').drawRect({ //x, y, width, height
                                    x:X1_pip_B, 
                                    y:Y1_B, 
                                    width:pipettenbreite_B, 
                                    height:alte_fuellhoehe_B,
                                    fillStyle:'green',
                                    strokeStyle:'white'
    });
    // Begrenzungen zeichnen
    // Begrenzungen Gefäß A
    $('#zeichenflaeche').drawLine({ x2:100,  y2:75, x1:100, y1:350, strokeStyle:'black', lineWidth:'2px' });
    $('#zeichenflaeche').drawLine({ x2:100,  y2:350, x1:200, y1:350, strokeStyle:'black', lineWidth:'2px' });
    $('#zeichenflaeche').drawLine({ x2:200,  y2:75, x1:200, y1:350, strokeStyle:'black', lineWidth:'2px' });
    // Begrenzungen Pipette A
    $('#zeichenflaeche').drawLine({ x2:X1_pip_A-1/2*pipettenbreite_A,  y2:50, x1:X1_pip_A-1/2*pipettenbreite_A, y1:350, strokeStyle:'black', lineWidth:'3px' });
    $('#zeichenflaeche').drawLine({ x2:X2_pip_A,  y2:50, x1:X2_pip_A, y1:350, strokeStyle:'black', lineWidth:'3px' });
    // Begrenzungen Gefäß B
    $('#zeichenflaeche').drawLine({ x2:400,  y2:75, x1:400, y1:350, strokeStyle:'black', lineWidth:'2px' });
    $('#zeichenflaeche').drawLine({ x2:400,  y2:350, x1:500, y1:350, strokeStyle:'black', lineWidth:'2px' });
    $('#zeichenflaeche').drawLine({ x2:500,  y2:75, x1:500, y1:350, strokeStyle:'black', lineWidth:'2px' });
    // Begrenzungen Pipette B
    $('#zeichenflaeche').drawLine({ x2:X1_pip_B-1/2*pipettenbreite_B,  y2:50, x1:X1_pip_B-1/2*pipettenbreite_B, y1:350, strokeStyle:'black', lineWidth:'3px' });
    $('#zeichenflaeche').drawLine({ x2:X2_pip_B,  y2:50, x1:X2_pip_B, y1:350, strokeStyle:'black', lineWidth:'3px' });
    // Pipettenhütchen
    $('#zeichenflaeche').drawEllipse({
        x:150, 
        y:45, 
        width:40, 
        height:50,
        fillStyle:'orange',
        strokeStyle:'orange'
    });
    $('#zeichenflaeche').drawEllipse({
        x:450, 
        y:45, 
        width:40, 
        height:50,
        fillStyle:'orange',
        strokeStyle:'orange'
    });
    /*
        self.canvas1.create_oval(130, 20, 170, 70, fill='orange', outline='orange')
        self.canvas1.create_oval(430, 20, 470, 70, fill='orange', outline='orange')
    */
}

function zurueck() {
    var aktueller_schritt=parseInt($('#r_uebertragungsschritt').val());
    if (aktueller_schritt > 0) {
        aktueller_schritt=aktueller_schritt-1;
        $('#r_uebertragungsschritt').val(aktueller_schritt);
        schritt();//;werte_fuer_schritt_ermitteln(aktueller_schritt);
    }
}

function weiter() {
    var aktueller_schritt=parseInt($('#r_uebertragungsschritt').val());
    if (aktueller_schritt < 50) {
        aktueller_schritt=aktueller_schritt+1;
        $('#r_uebertragungsschritt').val(aktueller_schritt);
        schritt();
        //werte_fuer_schritt_ermitteln(aktueller_schritt);
    }
}

function schritt() {
    printValue('r_uebertragungsschritt', 'i_uebertragungsschritt');
    var nr=parseInt($('#r_uebertragungsschritt').val());
    werte_fuer_schritt_ermitteln(nr);
}

function neue_fuellhoehe(alte_fuellhoehe_A, alte_fuellhoehe_B,
                         pipettenbreite_A, pipettenbreite_B,
                         gefaessbreite_A, gefaessbreite_B) {
    // Fläche hin und rück ist gleich dem Produkt aus der alten Füllhöhe und der Pipettenbreite
    var austauschflaeche_hin=parseFloat(alte_fuellhoehe_A)*parseFloat(pipettenbreite_A);
    var austauschflaeche_rueck=parseFloat(alte_fuellhoehe_B)*parseFloat(pipettenbreite_B);
    // Die neue Fläche ist gleich der Summe bzw. der Differenz der übergegangenen Flächen
    var neue_gesamtflaeche_A=parseFloat(alte_fuellhoehe_A)*parseFloat(gefaessbreite_A)-parseFloat(austauschflaeche_hin)+parseFloat(austauschflaeche_rueck);
    var neue_gesamtflaeche_B=parseFloat(alte_fuellhoehe_B)*parseFloat(gefaessbreite_B)+parseFloat(austauschflaeche_hin)-parseFloat(austauschflaeche_rueck);
    var fuellhoehe_neu_A=parseFloat(neue_gesamtflaeche_A)/parseFloat(gefaessbreite_A);
    var fuellhoehe_neu_B=parseFloat(neue_gesamtflaeche_B)/parseFloat(gefaessbreite_B);
    var rueckgabeliste=[fuellhoehe_neu_A, fuellhoehe_neu_B, austauschflaeche_hin, austauschflaeche_rueck];
    return rueckgabeliste
}

function schritt_null() {
    $('#r_uebertragungsschritt').val(0);
    werte_fuer_schritt_ermitteln(0);
}

function werte_fuer_schritt_ermitteln(a) {
    schritt_nr=a;
    //console.log('werte_fuer_schritt_ermitteln: '+schritt_nr);
    var pipettenbreite_A=$('#n_hin').val();
    var pipettenbreite_B=$('#n_rueck').val();
    var alte_fuellhoehe_A_0=$('#n_ed').val();
    var alte_fuellhoehe_B_0=$('#n_prod').val();
    //console.log(pipettenbreite_A+' '+pipettenbreite_B+' '+alte_fuellhoehe_A_0+' '+alte_fuellhoehe_B_0);
    /* 1-10 */
    // 1. Schritt
    var alte_fuellhoehe_A_1=neue_fuellhoehe(alte_fuellhoehe_A_0, alte_fuellhoehe_B_0, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_1=neue_fuellhoehe(alte_fuellhoehe_A_0, alte_fuellhoehe_B_0, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_1=neue_fuellhoehe(alte_fuellhoehe_A_0, alte_fuellhoehe_B_0, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_1=neue_fuellhoehe(alte_fuellhoehe_A_0, alte_fuellhoehe_B_0, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 2. Schritt
    var alte_fuellhoehe_A_2=neue_fuellhoehe(alte_fuellhoehe_A_1, alte_fuellhoehe_B_1, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_2=neue_fuellhoehe(alte_fuellhoehe_A_1, alte_fuellhoehe_B_1, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_2=neue_fuellhoehe(alte_fuellhoehe_A_1, alte_fuellhoehe_B_1, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_2=neue_fuellhoehe(alte_fuellhoehe_A_1, alte_fuellhoehe_B_1, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 3. Schritt
    var alte_fuellhoehe_A_3=neue_fuellhoehe(alte_fuellhoehe_A_2, alte_fuellhoehe_B_2, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_3=neue_fuellhoehe(alte_fuellhoehe_A_2, alte_fuellhoehe_B_2, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_3=neue_fuellhoehe(alte_fuellhoehe_A_2, alte_fuellhoehe_B_2, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_3=neue_fuellhoehe(alte_fuellhoehe_A_2, alte_fuellhoehe_B_2, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 4. Schritt
    var alte_fuellhoehe_A_4=neue_fuellhoehe(alte_fuellhoehe_A_3, alte_fuellhoehe_B_3, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_4=neue_fuellhoehe(alte_fuellhoehe_A_3, alte_fuellhoehe_B_3, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_4=neue_fuellhoehe(alte_fuellhoehe_A_3, alte_fuellhoehe_B_3, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_4=neue_fuellhoehe(alte_fuellhoehe_A_3, alte_fuellhoehe_B_3, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 5. Schritt
    var alte_fuellhoehe_A_5=neue_fuellhoehe(alte_fuellhoehe_A_4, alte_fuellhoehe_B_4, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_5=neue_fuellhoehe(alte_fuellhoehe_A_4, alte_fuellhoehe_B_4, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_5=neue_fuellhoehe(alte_fuellhoehe_A_4, alte_fuellhoehe_B_4, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_5=neue_fuellhoehe(alte_fuellhoehe_A_4, alte_fuellhoehe_B_4, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 6. Schritt
    var alte_fuellhoehe_A_6=neue_fuellhoehe(alte_fuellhoehe_A_5, alte_fuellhoehe_B_5, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_6=neue_fuellhoehe(alte_fuellhoehe_A_5, alte_fuellhoehe_B_5, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_6=neue_fuellhoehe(alte_fuellhoehe_A_5, alte_fuellhoehe_B_5, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_6=neue_fuellhoehe(alte_fuellhoehe_A_5, alte_fuellhoehe_B_5, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 7. Schritt
    var alte_fuellhoehe_A_7=neue_fuellhoehe(alte_fuellhoehe_A_6, alte_fuellhoehe_B_6, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_7=neue_fuellhoehe(alte_fuellhoehe_A_6, alte_fuellhoehe_B_6, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_7=neue_fuellhoehe(alte_fuellhoehe_A_6, alte_fuellhoehe_B_6, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_7=neue_fuellhoehe(alte_fuellhoehe_A_6, alte_fuellhoehe_B_6, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 8. Schritt
    var alte_fuellhoehe_A_8=neue_fuellhoehe(alte_fuellhoehe_A_7, alte_fuellhoehe_B_7, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_8=neue_fuellhoehe(alte_fuellhoehe_A_7, alte_fuellhoehe_B_7, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_8=neue_fuellhoehe(alte_fuellhoehe_A_7, alte_fuellhoehe_B_7, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_8=neue_fuellhoehe(alte_fuellhoehe_A_7, alte_fuellhoehe_B_7, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 9. Schritt
    var alte_fuellhoehe_A_9=neue_fuellhoehe(alte_fuellhoehe_A_8, alte_fuellhoehe_B_8, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_9=neue_fuellhoehe(alte_fuellhoehe_A_8, alte_fuellhoehe_B_8, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_9=neue_fuellhoehe(alte_fuellhoehe_A_8, alte_fuellhoehe_B_8, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_9=neue_fuellhoehe(alte_fuellhoehe_A_8, alte_fuellhoehe_B_8, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 10. Schritt
    var alte_fuellhoehe_A_10=neue_fuellhoehe(alte_fuellhoehe_A_9, alte_fuellhoehe_B_9, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_10=neue_fuellhoehe(alte_fuellhoehe_A_9, alte_fuellhoehe_B_9, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_10=neue_fuellhoehe(alte_fuellhoehe_A_9, alte_fuellhoehe_B_9, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_10=neue_fuellhoehe(alte_fuellhoehe_A_9, alte_fuellhoehe_B_9, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    /* 11-20 */
    // 11. Schritt
    var alte_fuellhoehe_A_11=neue_fuellhoehe(alte_fuellhoehe_A_10, alte_fuellhoehe_B_10, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_11=neue_fuellhoehe(alte_fuellhoehe_A_10, alte_fuellhoehe_B_10, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_11=neue_fuellhoehe(alte_fuellhoehe_A_10, alte_fuellhoehe_B_10, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_11=neue_fuellhoehe(alte_fuellhoehe_A_10, alte_fuellhoehe_B_10, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 12. Schritt
    var alte_fuellhoehe_A_12=neue_fuellhoehe(alte_fuellhoehe_A_11, alte_fuellhoehe_B_11, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_12=neue_fuellhoehe(alte_fuellhoehe_A_11, alte_fuellhoehe_B_11, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_12=neue_fuellhoehe(alte_fuellhoehe_A_11, alte_fuellhoehe_B_11, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_12=neue_fuellhoehe(alte_fuellhoehe_A_11, alte_fuellhoehe_B_11, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 13. Schritt
    var alte_fuellhoehe_A_13=neue_fuellhoehe(alte_fuellhoehe_A_12, alte_fuellhoehe_B_12, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_13=neue_fuellhoehe(alte_fuellhoehe_A_12, alte_fuellhoehe_B_12, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_13=neue_fuellhoehe(alte_fuellhoehe_A_12, alte_fuellhoehe_B_12, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_13=neue_fuellhoehe(alte_fuellhoehe_A_12, alte_fuellhoehe_B_12, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 14. Schritt
    var alte_fuellhoehe_A_14=neue_fuellhoehe(alte_fuellhoehe_A_13, alte_fuellhoehe_B_13, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_14=neue_fuellhoehe(alte_fuellhoehe_A_13, alte_fuellhoehe_B_13, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_14=neue_fuellhoehe(alte_fuellhoehe_A_13, alte_fuellhoehe_B_13, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_14=neue_fuellhoehe(alte_fuellhoehe_A_13, alte_fuellhoehe_B_13, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 15. Schritt
    var alte_fuellhoehe_A_15=neue_fuellhoehe(alte_fuellhoehe_A_14, alte_fuellhoehe_B_14, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_15=neue_fuellhoehe(alte_fuellhoehe_A_14, alte_fuellhoehe_B_14, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_15=neue_fuellhoehe(alte_fuellhoehe_A_14, alte_fuellhoehe_B_14, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_15=neue_fuellhoehe(alte_fuellhoehe_A_14, alte_fuellhoehe_B_14, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 6. Schritt
    var alte_fuellhoehe_A_16=neue_fuellhoehe(alte_fuellhoehe_A_15, alte_fuellhoehe_B_15, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_16=neue_fuellhoehe(alte_fuellhoehe_A_15, alte_fuellhoehe_B_15, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_16=neue_fuellhoehe(alte_fuellhoehe_A_15, alte_fuellhoehe_B_15, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_16=neue_fuellhoehe(alte_fuellhoehe_A_15, alte_fuellhoehe_B_15, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 17. Schritt
    var alte_fuellhoehe_A_17=neue_fuellhoehe(alte_fuellhoehe_A_16, alte_fuellhoehe_B_16, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_17=neue_fuellhoehe(alte_fuellhoehe_A_16, alte_fuellhoehe_B_16, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_17=neue_fuellhoehe(alte_fuellhoehe_A_16, alte_fuellhoehe_B_16, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_17=neue_fuellhoehe(alte_fuellhoehe_A_16, alte_fuellhoehe_B_16, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 18. Schritt
    var alte_fuellhoehe_A_18=neue_fuellhoehe(alte_fuellhoehe_A_17, alte_fuellhoehe_B_17, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_18=neue_fuellhoehe(alte_fuellhoehe_A_17, alte_fuellhoehe_B_17, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_18=neue_fuellhoehe(alte_fuellhoehe_A_17, alte_fuellhoehe_B_17, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_18=neue_fuellhoehe(alte_fuellhoehe_A_17, alte_fuellhoehe_B_17, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 19. Schritt
    var alte_fuellhoehe_A_19=neue_fuellhoehe(alte_fuellhoehe_A_18, alte_fuellhoehe_B_18, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_19=neue_fuellhoehe(alte_fuellhoehe_A_18, alte_fuellhoehe_B_18, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_19=neue_fuellhoehe(alte_fuellhoehe_A_18, alte_fuellhoehe_B_18, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_19=neue_fuellhoehe(alte_fuellhoehe_A_18, alte_fuellhoehe_B_18, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 20. Schritt
    var alte_fuellhoehe_A_20=neue_fuellhoehe(alte_fuellhoehe_A_19, alte_fuellhoehe_B_19, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_20=neue_fuellhoehe(alte_fuellhoehe_A_19, alte_fuellhoehe_B_19, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_20=neue_fuellhoehe(alte_fuellhoehe_A_19, alte_fuellhoehe_B_19, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_20=neue_fuellhoehe(alte_fuellhoehe_A_19, alte_fuellhoehe_B_19, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    /* 21-30 */
    // 21. Schritt
    var alte_fuellhoehe_A_21=neue_fuellhoehe(alte_fuellhoehe_A_20, alte_fuellhoehe_B_20, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_21=neue_fuellhoehe(alte_fuellhoehe_A_20, alte_fuellhoehe_B_20, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_21=neue_fuellhoehe(alte_fuellhoehe_A_20, alte_fuellhoehe_B_20, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_21=neue_fuellhoehe(alte_fuellhoehe_A_20, alte_fuellhoehe_B_20, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 22. Schritt
    var alte_fuellhoehe_A_22=neue_fuellhoehe(alte_fuellhoehe_A_21, alte_fuellhoehe_B_21, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_22=neue_fuellhoehe(alte_fuellhoehe_A_21, alte_fuellhoehe_B_21, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_22=neue_fuellhoehe(alte_fuellhoehe_A_21, alte_fuellhoehe_B_21, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_22=neue_fuellhoehe(alte_fuellhoehe_A_21, alte_fuellhoehe_B_21, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 23. Schritt
    var alte_fuellhoehe_A_23=neue_fuellhoehe(alte_fuellhoehe_A_22, alte_fuellhoehe_B_22, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_23=neue_fuellhoehe(alte_fuellhoehe_A_22, alte_fuellhoehe_B_22, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_23=neue_fuellhoehe(alte_fuellhoehe_A_22, alte_fuellhoehe_B_22, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_23=neue_fuellhoehe(alte_fuellhoehe_A_22, alte_fuellhoehe_B_22, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 24. Schritt
    var alte_fuellhoehe_A_24=neue_fuellhoehe(alte_fuellhoehe_A_23, alte_fuellhoehe_B_23, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_24=neue_fuellhoehe(alte_fuellhoehe_A_23, alte_fuellhoehe_B_23, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_24=neue_fuellhoehe(alte_fuellhoehe_A_23, alte_fuellhoehe_B_23, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_24=neue_fuellhoehe(alte_fuellhoehe_A_23, alte_fuellhoehe_B_23, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 25. Schritt
    var alte_fuellhoehe_A_25=neue_fuellhoehe(alte_fuellhoehe_A_24, alte_fuellhoehe_B_24, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_25=neue_fuellhoehe(alte_fuellhoehe_A_24, alte_fuellhoehe_B_24, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_25=neue_fuellhoehe(alte_fuellhoehe_A_24, alte_fuellhoehe_B_24, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_25=neue_fuellhoehe(alte_fuellhoehe_A_24, alte_fuellhoehe_B_24, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 26. Schritt
    var alte_fuellhoehe_A_26=neue_fuellhoehe(alte_fuellhoehe_A_25, alte_fuellhoehe_B_25, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_26=neue_fuellhoehe(alte_fuellhoehe_A_25, alte_fuellhoehe_B_25, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_26=neue_fuellhoehe(alte_fuellhoehe_A_25, alte_fuellhoehe_B_25, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_26=neue_fuellhoehe(alte_fuellhoehe_A_25, alte_fuellhoehe_B_25, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 27. Schritt
    var alte_fuellhoehe_A_27=neue_fuellhoehe(alte_fuellhoehe_A_26, alte_fuellhoehe_B_26, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_27=neue_fuellhoehe(alte_fuellhoehe_A_26, alte_fuellhoehe_B_26, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_27=neue_fuellhoehe(alte_fuellhoehe_A_26, alte_fuellhoehe_B_26, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_27=neue_fuellhoehe(alte_fuellhoehe_A_26, alte_fuellhoehe_B_26, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 28. Schritt
    var alte_fuellhoehe_A_28=neue_fuellhoehe(alte_fuellhoehe_A_27, alte_fuellhoehe_B_27, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_28=neue_fuellhoehe(alte_fuellhoehe_A_27, alte_fuellhoehe_B_27, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_28=neue_fuellhoehe(alte_fuellhoehe_A_27, alte_fuellhoehe_B_27, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_28=neue_fuellhoehe(alte_fuellhoehe_A_27, alte_fuellhoehe_B_27, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 29. Schritt
    var alte_fuellhoehe_A_29=neue_fuellhoehe(alte_fuellhoehe_A_28, alte_fuellhoehe_B_28, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_29=neue_fuellhoehe(alte_fuellhoehe_A_28, alte_fuellhoehe_B_28, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_29=neue_fuellhoehe(alte_fuellhoehe_A_28, alte_fuellhoehe_B_28, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_29=neue_fuellhoehe(alte_fuellhoehe_A_28, alte_fuellhoehe_B_28, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 30. Schritt
    var alte_fuellhoehe_A_30=neue_fuellhoehe(alte_fuellhoehe_A_29, alte_fuellhoehe_B_29, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_30=neue_fuellhoehe(alte_fuellhoehe_A_29, alte_fuellhoehe_B_29, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_30=neue_fuellhoehe(alte_fuellhoehe_A_29, alte_fuellhoehe_B_29, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_30=neue_fuellhoehe(alte_fuellhoehe_A_29, alte_fuellhoehe_B_29, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    /* 31-40 */
    // 31. Schritt
    var alte_fuellhoehe_A_31=neue_fuellhoehe(alte_fuellhoehe_A_30, alte_fuellhoehe_B_30, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_31=neue_fuellhoehe(alte_fuellhoehe_A_30, alte_fuellhoehe_B_30, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_31=neue_fuellhoehe(alte_fuellhoehe_A_30, alte_fuellhoehe_B_30, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_31=neue_fuellhoehe(alte_fuellhoehe_A_30, alte_fuellhoehe_B_30, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 32. Schritt
    var alte_fuellhoehe_A_32=neue_fuellhoehe(alte_fuellhoehe_A_31, alte_fuellhoehe_B_31, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_32=neue_fuellhoehe(alte_fuellhoehe_A_31, alte_fuellhoehe_B_31, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_32=neue_fuellhoehe(alte_fuellhoehe_A_31, alte_fuellhoehe_B_31, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_32=neue_fuellhoehe(alte_fuellhoehe_A_31, alte_fuellhoehe_B_31, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 33. Schritt
    var alte_fuellhoehe_A_33=neue_fuellhoehe(alte_fuellhoehe_A_32, alte_fuellhoehe_B_32, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_33=neue_fuellhoehe(alte_fuellhoehe_A_32, alte_fuellhoehe_B_32, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_33=neue_fuellhoehe(alte_fuellhoehe_A_32, alte_fuellhoehe_B_32, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_33=neue_fuellhoehe(alte_fuellhoehe_A_32, alte_fuellhoehe_B_32, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 34. Schritt
    var alte_fuellhoehe_A_34=neue_fuellhoehe(alte_fuellhoehe_A_33, alte_fuellhoehe_B_33, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_34=neue_fuellhoehe(alte_fuellhoehe_A_33, alte_fuellhoehe_B_33, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_34=neue_fuellhoehe(alte_fuellhoehe_A_33, alte_fuellhoehe_B_33, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_34=neue_fuellhoehe(alte_fuellhoehe_A_33, alte_fuellhoehe_B_33, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 35. Schritt
    var alte_fuellhoehe_A_35=neue_fuellhoehe(alte_fuellhoehe_A_34, alte_fuellhoehe_B_34, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_35=neue_fuellhoehe(alte_fuellhoehe_A_34, alte_fuellhoehe_B_34, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_35=neue_fuellhoehe(alte_fuellhoehe_A_34, alte_fuellhoehe_B_34, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_35=neue_fuellhoehe(alte_fuellhoehe_A_34, alte_fuellhoehe_B_34, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 36. Schritt
    var alte_fuellhoehe_A_36=neue_fuellhoehe(alte_fuellhoehe_A_35, alte_fuellhoehe_B_35, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_36=neue_fuellhoehe(alte_fuellhoehe_A_35, alte_fuellhoehe_B_35, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_36=neue_fuellhoehe(alte_fuellhoehe_A_35, alte_fuellhoehe_B_35, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_36=neue_fuellhoehe(alte_fuellhoehe_A_35, alte_fuellhoehe_B_35, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 37. Schritt
    var alte_fuellhoehe_A_37=neue_fuellhoehe(alte_fuellhoehe_A_36, alte_fuellhoehe_B_36, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_37=neue_fuellhoehe(alte_fuellhoehe_A_36, alte_fuellhoehe_B_36, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_37=neue_fuellhoehe(alte_fuellhoehe_A_36, alte_fuellhoehe_B_36, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_37=neue_fuellhoehe(alte_fuellhoehe_A_36, alte_fuellhoehe_B_36, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 38. Schritt
    var alte_fuellhoehe_A_38=neue_fuellhoehe(alte_fuellhoehe_A_37, alte_fuellhoehe_B_37, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_38=neue_fuellhoehe(alte_fuellhoehe_A_37, alte_fuellhoehe_B_37, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_38=neue_fuellhoehe(alte_fuellhoehe_A_37, alte_fuellhoehe_B_37, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_38=neue_fuellhoehe(alte_fuellhoehe_A_37, alte_fuellhoehe_B_37, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 39. Schritt
    var alte_fuellhoehe_A_39=neue_fuellhoehe(alte_fuellhoehe_A_38, alte_fuellhoehe_B_38, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_39=neue_fuellhoehe(alte_fuellhoehe_A_38, alte_fuellhoehe_B_38, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_39=neue_fuellhoehe(alte_fuellhoehe_A_38, alte_fuellhoehe_B_38, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_39=neue_fuellhoehe(alte_fuellhoehe_A_38, alte_fuellhoehe_B_38, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 40. Schritt
    var alte_fuellhoehe_A_40=neue_fuellhoehe(alte_fuellhoehe_A_39, alte_fuellhoehe_B_39, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_40=neue_fuellhoehe(alte_fuellhoehe_A_39, alte_fuellhoehe_B_39, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_40=neue_fuellhoehe(alte_fuellhoehe_A_39, alte_fuellhoehe_B_39, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_40=neue_fuellhoehe(alte_fuellhoehe_A_39, alte_fuellhoehe_B_39, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    /* 41-50 */
    // 41. Schritt
    var alte_fuellhoehe_A_41=neue_fuellhoehe(alte_fuellhoehe_A_40, alte_fuellhoehe_B_40, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_41=neue_fuellhoehe(alte_fuellhoehe_A_40, alte_fuellhoehe_B_40, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_41=neue_fuellhoehe(alte_fuellhoehe_A_40, alte_fuellhoehe_B_40, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_41=neue_fuellhoehe(alte_fuellhoehe_A_40, alte_fuellhoehe_B_40, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 42. Schritt
    var alte_fuellhoehe_A_42=neue_fuellhoehe(alte_fuellhoehe_A_41, alte_fuellhoehe_B_41, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_42=neue_fuellhoehe(alte_fuellhoehe_A_41, alte_fuellhoehe_B_41, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_42=neue_fuellhoehe(alte_fuellhoehe_A_41, alte_fuellhoehe_B_41, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_42=neue_fuellhoehe(alte_fuellhoehe_A_41, alte_fuellhoehe_B_41, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 43. Schritt
    var alte_fuellhoehe_A_43=neue_fuellhoehe(alte_fuellhoehe_A_42, alte_fuellhoehe_B_42, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_43=neue_fuellhoehe(alte_fuellhoehe_A_42, alte_fuellhoehe_B_42, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_43=neue_fuellhoehe(alte_fuellhoehe_A_42, alte_fuellhoehe_B_42, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_43=neue_fuellhoehe(alte_fuellhoehe_A_42, alte_fuellhoehe_B_42, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 44. Schritt
    var alte_fuellhoehe_A_44=neue_fuellhoehe(alte_fuellhoehe_A_43, alte_fuellhoehe_B_43, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_44=neue_fuellhoehe(alte_fuellhoehe_A_43, alte_fuellhoehe_B_43, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_44=neue_fuellhoehe(alte_fuellhoehe_A_43, alte_fuellhoehe_B_43, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_44=neue_fuellhoehe(alte_fuellhoehe_A_43, alte_fuellhoehe_B_43, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 45. Schritt
    var alte_fuellhoehe_A_45=neue_fuellhoehe(alte_fuellhoehe_A_44, alte_fuellhoehe_B_44, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_45=neue_fuellhoehe(alte_fuellhoehe_A_44, alte_fuellhoehe_B_44, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_45=neue_fuellhoehe(alte_fuellhoehe_A_44, alte_fuellhoehe_B_44, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_45=neue_fuellhoehe(alte_fuellhoehe_A_44, alte_fuellhoehe_B_44, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 46. Schritt
    var alte_fuellhoehe_A_46=neue_fuellhoehe(alte_fuellhoehe_A_45, alte_fuellhoehe_B_45, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_46=neue_fuellhoehe(alte_fuellhoehe_A_45, alte_fuellhoehe_B_45, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_46=neue_fuellhoehe(alte_fuellhoehe_A_45, alte_fuellhoehe_B_45, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_46=neue_fuellhoehe(alte_fuellhoehe_A_45, alte_fuellhoehe_B_45, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 47. Schritt
    var alte_fuellhoehe_A_47=neue_fuellhoehe(alte_fuellhoehe_A_46, alte_fuellhoehe_B_46, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_47=neue_fuellhoehe(alte_fuellhoehe_A_46, alte_fuellhoehe_B_46, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_47=neue_fuellhoehe(alte_fuellhoehe_A_46, alte_fuellhoehe_B_46, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_47=neue_fuellhoehe(alte_fuellhoehe_A_46, alte_fuellhoehe_B_46, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 48. Schritt
    var alte_fuellhoehe_A_48=neue_fuellhoehe(alte_fuellhoehe_A_47, alte_fuellhoehe_B_47, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_48=neue_fuellhoehe(alte_fuellhoehe_A_47, alte_fuellhoehe_B_47, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_48=neue_fuellhoehe(alte_fuellhoehe_A_47, alte_fuellhoehe_B_47, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_48=neue_fuellhoehe(alte_fuellhoehe_A_47, alte_fuellhoehe_B_47, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 49. Schritt
    var alte_fuellhoehe_A_49=neue_fuellhoehe(alte_fuellhoehe_A_48, alte_fuellhoehe_B_48, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_49=neue_fuellhoehe(alte_fuellhoehe_A_48, alte_fuellhoehe_B_48, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_49=neue_fuellhoehe(alte_fuellhoehe_A_48, alte_fuellhoehe_B_48, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_49=neue_fuellhoehe(alte_fuellhoehe_A_48, alte_fuellhoehe_B_48, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
    // 50. Schritt
    var alte_fuellhoehe_A_50=neue_fuellhoehe(alte_fuellhoehe_A_49, alte_fuellhoehe_B_49, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[0];
    var alte_fuellhoehe_B_50=neue_fuellhoehe(alte_fuellhoehe_A_49, alte_fuellhoehe_B_49, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[1];
    var austauschflaeche_hin_50=neue_fuellhoehe(alte_fuellhoehe_A_49, alte_fuellhoehe_B_49, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[2];
    var austauschflaeche_rueck_50=neue_fuellhoehe(alte_fuellhoehe_A_49, alte_fuellhoehe_B_49, pipettenbreite_A, pipettenbreite_B, gefaessbreite_A, gefaessbreite_B)[3];
  
    var WERTEZUORDNUNG_A={
        'alte_fuellhoehe_A_0':alte_fuellhoehe_A_0,
        'alte_fuellhoehe_A_1':alte_fuellhoehe_A_1,
        'alte_fuellhoehe_A_2':alte_fuellhoehe_A_2,
        'alte_fuellhoehe_A_3':alte_fuellhoehe_A_3,
        'alte_fuellhoehe_A_4':alte_fuellhoehe_A_4,
        'alte_fuellhoehe_A_5':alte_fuellhoehe_A_5,
        'alte_fuellhoehe_A_6':alte_fuellhoehe_A_6,
        'alte_fuellhoehe_A_7':alte_fuellhoehe_A_7,
        'alte_fuellhoehe_A_8':alte_fuellhoehe_A_8,
        'alte_fuellhoehe_A_9':alte_fuellhoehe_A_9,
        'alte_fuellhoehe_A_10':alte_fuellhoehe_A_10,
        'alte_fuellhoehe_A_11':alte_fuellhoehe_A_11,
        'alte_fuellhoehe_A_12':alte_fuellhoehe_A_12,
        'alte_fuellhoehe_A_13':alte_fuellhoehe_A_13,
        'alte_fuellhoehe_A_14':alte_fuellhoehe_A_14,
        'alte_fuellhoehe_A_15':alte_fuellhoehe_A_15,
        'alte_fuellhoehe_A_16':alte_fuellhoehe_A_16,
        'alte_fuellhoehe_A_17':alte_fuellhoehe_A_17,
        'alte_fuellhoehe_A_18':alte_fuellhoehe_A_18,
        'alte_fuellhoehe_A_19':alte_fuellhoehe_A_19,
        'alte_fuellhoehe_A_20':alte_fuellhoehe_A_20,
        'alte_fuellhoehe_A_21':alte_fuellhoehe_A_21,
        'alte_fuellhoehe_A_22':alte_fuellhoehe_A_22,
        'alte_fuellhoehe_A_23':alte_fuellhoehe_A_23,
        'alte_fuellhoehe_A_24':alte_fuellhoehe_A_24,
        'alte_fuellhoehe_A_25':alte_fuellhoehe_A_25,
        'alte_fuellhoehe_A_26':alte_fuellhoehe_A_26,
        'alte_fuellhoehe_A_27':alte_fuellhoehe_A_27,
        'alte_fuellhoehe_A_28':alte_fuellhoehe_A_28,
        'alte_fuellhoehe_A_29':alte_fuellhoehe_A_29,
        'alte_fuellhoehe_A_30':alte_fuellhoehe_A_30,
        'alte_fuellhoehe_A_31':alte_fuellhoehe_A_31,
        'alte_fuellhoehe_A_32':alte_fuellhoehe_A_32,
        'alte_fuellhoehe_A_33':alte_fuellhoehe_A_33,
        'alte_fuellhoehe_A_34':alte_fuellhoehe_A_34,
        'alte_fuellhoehe_A_35':alte_fuellhoehe_A_35,
        'alte_fuellhoehe_A_36':alte_fuellhoehe_A_36,
        'alte_fuellhoehe_A_37':alte_fuellhoehe_A_37,
        'alte_fuellhoehe_A_38':alte_fuellhoehe_A_38,
        'alte_fuellhoehe_A_39':alte_fuellhoehe_A_39,
        'alte_fuellhoehe_A_40':alte_fuellhoehe_A_40,
        'alte_fuellhoehe_A_41':alte_fuellhoehe_A_41,
        'alte_fuellhoehe_A_42':alte_fuellhoehe_A_42,
        'alte_fuellhoehe_A_43':alte_fuellhoehe_A_43,
        'alte_fuellhoehe_A_44':alte_fuellhoehe_A_44,
        'alte_fuellhoehe_A_45':alte_fuellhoehe_A_45,
        'alte_fuellhoehe_A_46':alte_fuellhoehe_A_46,
        'alte_fuellhoehe_A_47':alte_fuellhoehe_A_47,
        'alte_fuellhoehe_A_48':alte_fuellhoehe_A_48,
        'alte_fuellhoehe_A_49':alte_fuellhoehe_A_49,
        'alte_fuellhoehe_A_50':alte_fuellhoehe_A_50
    }
    self.WERTEZUORDNUNG_hin={
        'austauschflaeche_hin_0':parseFloat(alte_fuellhoehe_A_0)*parseFloat(pipettenbreite_A),
        'austauschflaeche_hin_1':austauschflaeche_hin_1,
        'austauschflaeche_hin_2':austauschflaeche_hin_2,
        'austauschflaeche_hin_3':austauschflaeche_hin_3,
        'austauschflaeche_hin_4':austauschflaeche_hin_4,
        'austauschflaeche_hin_5':austauschflaeche_hin_5,
        'austauschflaeche_hin_6':austauschflaeche_hin_6,
        'austauschflaeche_hin_7':austauschflaeche_hin_7,
        'austauschflaeche_hin_8':austauschflaeche_hin_8,
        'austauschflaeche_hin_9':austauschflaeche_hin_9,
        'austauschflaeche_hin_10':austauschflaeche_hin_10,
        'austauschflaeche_hin_11':austauschflaeche_hin_11,
        'austauschflaeche_hin_12':austauschflaeche_hin_12,
        'austauschflaeche_hin_13':austauschflaeche_hin_13,
        'austauschflaeche_hin_14':austauschflaeche_hin_14,
        'austauschflaeche_hin_15':austauschflaeche_hin_15,
        'austauschflaeche_hin_16':austauschflaeche_hin_16,
        'austauschflaeche_hin_17':austauschflaeche_hin_17,
        'austauschflaeche_hin_18':austauschflaeche_hin_18,
        'austauschflaeche_hin_19':austauschflaeche_hin_19,
        'austauschflaeche_hin_20':austauschflaeche_hin_20,
        'austauschflaeche_hin_21':austauschflaeche_hin_21,
        'austauschflaeche_hin_22':austauschflaeche_hin_22,
        'austauschflaeche_hin_23':austauschflaeche_hin_23,
        'austauschflaeche_hin_24':austauschflaeche_hin_24,
        'austauschflaeche_hin_25':austauschflaeche_hin_25,
        'austauschflaeche_hin_26':austauschflaeche_hin_26,
        'austauschflaeche_hin_27':austauschflaeche_hin_27,
        'austauschflaeche_hin_28':austauschflaeche_hin_28,
        'austauschflaeche_hin_29':austauschflaeche_hin_29,
        'austauschflaeche_hin_30':austauschflaeche_hin_30,
        'austauschflaeche_hin_31':austauschflaeche_hin_31,
        'austauschflaeche_hin_32':austauschflaeche_hin_32,
        'austauschflaeche_hin_33':austauschflaeche_hin_33,
        'austauschflaeche_hin_34':austauschflaeche_hin_34,
        'austauschflaeche_hin_35':austauschflaeche_hin_35,
        'austauschflaeche_hin_36':austauschflaeche_hin_36,
        'austauschflaeche_hin_37':austauschflaeche_hin_37,
        'austauschflaeche_hin_38':austauschflaeche_hin_38,
        'austauschflaeche_hin_39':austauschflaeche_hin_39,
        'austauschflaeche_hin_40':austauschflaeche_hin_40,
        'austauschflaeche_hin_41':austauschflaeche_hin_41,
        'austauschflaeche_hin_42':austauschflaeche_hin_42,
        'austauschflaeche_hin_43':austauschflaeche_hin_43,
        'austauschflaeche_hin_44':austauschflaeche_hin_44,
        'austauschflaeche_hin_45':austauschflaeche_hin_45,
        'austauschflaeche_hin_46':austauschflaeche_hin_46,
        'austauschflaeche_hin_47':austauschflaeche_hin_47,
        'austauschflaeche_hin_48':austauschflaeche_hin_48,
        'austauschflaeche_hin_49':austauschflaeche_hin_49,
        'austauschflaeche_hin_50':austauschflaeche_hin_50
    }
    self.WERTEZUORDNUNG_rueck={
        'austauschflaeche_rueck_0':parseFloat(alte_fuellhoehe_B_0)*parseFloat(pipettenbreite_B),
        'austauschflaeche_rueck_1':austauschflaeche_rueck_1,
        'austauschflaeche_rueck_2':austauschflaeche_rueck_2,
        'austauschflaeche_rueck_3':austauschflaeche_rueck_3,
        'austauschflaeche_rueck_4':austauschflaeche_rueck_4,
        'austauschflaeche_rueck_5':austauschflaeche_rueck_5,
        'austauschflaeche_rueck_6':austauschflaeche_rueck_6,
        'austauschflaeche_rueck_7':austauschflaeche_rueck_7,
        'austauschflaeche_rueck_8':austauschflaeche_rueck_8,
        'austauschflaeche_rueck_9':austauschflaeche_rueck_9,
        'austauschflaeche_rueck_10':austauschflaeche_rueck_10,
        'austauschflaeche_rueck_11':austauschflaeche_rueck_11,
        'austauschflaeche_rueck_12':austauschflaeche_rueck_12,
        'austauschflaeche_rueck_13':austauschflaeche_rueck_13,
        'austauschflaeche_rueck_14':austauschflaeche_rueck_14,
        'austauschflaeche_rueck_15':austauschflaeche_rueck_15,
        'austauschflaeche_rueck_16':austauschflaeche_rueck_16,
        'austauschflaeche_rueck_17':austauschflaeche_rueck_17,
        'austauschflaeche_rueck_18':austauschflaeche_rueck_18,
        'austauschflaeche_rueck_19':austauschflaeche_rueck_19,
        'austauschflaeche_rueck_20':austauschflaeche_rueck_20,
        'austauschflaeche_rueck_21':austauschflaeche_rueck_21,
        'austauschflaeche_rueck_22':austauschflaeche_rueck_22,
        'austauschflaeche_rueck_23':austauschflaeche_rueck_23,
        'austauschflaeche_rueck_24':austauschflaeche_rueck_24,
        'austauschflaeche_rueck_25':austauschflaeche_rueck_25,
        'austauschflaeche_rueck_26':austauschflaeche_rueck_26,
        'austauschflaeche_rueck_27':austauschflaeche_rueck_27,
        'austauschflaeche_rueck_28':austauschflaeche_rueck_28,
        'austauschflaeche_rueck_29':austauschflaeche_rueck_29,
        'austauschflaeche_rueck_30':austauschflaeche_rueck_30,
        'austauschflaeche_rueck_31':austauschflaeche_rueck_31,
        'austauschflaeche_rueck_32':austauschflaeche_rueck_32,
        'austauschflaeche_rueck_33':austauschflaeche_rueck_33,
        'austauschflaeche_rueck_34':austauschflaeche_rueck_34,
        'austauschflaeche_rueck_35':austauschflaeche_rueck_35,
        'austauschflaeche_rueck_36':austauschflaeche_rueck_36,
        'austauschflaeche_rueck_37':austauschflaeche_rueck_37,
        'austauschflaeche_rueck_38':austauschflaeche_rueck_38,
        'austauschflaeche_rueck_39':austauschflaeche_rueck_39,
        'austauschflaeche_rueck_40':austauschflaeche_rueck_40,
        'austauschflaeche_rueck_41':austauschflaeche_rueck_41,
        'austauschflaeche_rueck_42':austauschflaeche_rueck_42,
        'austauschflaeche_rueck_43':austauschflaeche_rueck_43,
        'austauschflaeche_rueck_44':austauschflaeche_rueck_44,
        'austauschflaeche_rueck_45':austauschflaeche_rueck_45,
        'austauschflaeche_rueck_46':austauschflaeche_rueck_46,
        'austauschflaeche_rueck_47':austauschflaeche_rueck_47,
        'austauschflaeche_rueck_48':austauschflaeche_rueck_48,
        'austauschflaeche_rueck_49':austauschflaeche_rueck_49,
        'austauschflaeche_rueck_50':austauschflaeche_rueck_50
    }
    

    var WERTEZUORDNUNG_B={
        'alte_fuellhoehe_B_0':alte_fuellhoehe_B_0,
        'alte_fuellhoehe_B_1':alte_fuellhoehe_B_1,
        'alte_fuellhoehe_B_2':alte_fuellhoehe_B_2,
        'alte_fuellhoehe_B_3':alte_fuellhoehe_B_3,
        'alte_fuellhoehe_B_4':alte_fuellhoehe_B_4,
        'alte_fuellhoehe_B_5':alte_fuellhoehe_B_5,
        'alte_fuellhoehe_B_6':alte_fuellhoehe_B_6,
        'alte_fuellhoehe_B_7':alte_fuellhoehe_B_7,
        'alte_fuellhoehe_B_8':alte_fuellhoehe_B_8,
        'alte_fuellhoehe_B_9':alte_fuellhoehe_B_9,
        'alte_fuellhoehe_B_10':alte_fuellhoehe_B_10,
        'alte_fuellhoehe_B_11':alte_fuellhoehe_B_11,
        'alte_fuellhoehe_B_12':alte_fuellhoehe_B_12,
        'alte_fuellhoehe_B_13':alte_fuellhoehe_B_13,
        'alte_fuellhoehe_B_14':alte_fuellhoehe_B_14,
        'alte_fuellhoehe_B_15':alte_fuellhoehe_B_15,
        'alte_fuellhoehe_B_16':alte_fuellhoehe_B_16,
        'alte_fuellhoehe_B_17':alte_fuellhoehe_B_17,
        'alte_fuellhoehe_B_18':alte_fuellhoehe_B_18,
        'alte_fuellhoehe_B_19':alte_fuellhoehe_B_19,
        'alte_fuellhoehe_B_20':alte_fuellhoehe_B_20,
        'alte_fuellhoehe_B_21':alte_fuellhoehe_B_21,
        'alte_fuellhoehe_B_22':alte_fuellhoehe_B_22,
        'alte_fuellhoehe_B_23':alte_fuellhoehe_B_23,
        'alte_fuellhoehe_B_24':alte_fuellhoehe_B_24,
        'alte_fuellhoehe_B_25':alte_fuellhoehe_B_25,
        'alte_fuellhoehe_B_26':alte_fuellhoehe_B_26,
        'alte_fuellhoehe_B_27':alte_fuellhoehe_B_27,
        'alte_fuellhoehe_B_28':alte_fuellhoehe_B_28,
        'alte_fuellhoehe_B_29':alte_fuellhoehe_B_29,
        'alte_fuellhoehe_B_30':alte_fuellhoehe_B_30,
        'alte_fuellhoehe_B_31':alte_fuellhoehe_B_31,
        'alte_fuellhoehe_B_32':alte_fuellhoehe_B_32,
        'alte_fuellhoehe_B_33':alte_fuellhoehe_B_33,
        'alte_fuellhoehe_B_34':alte_fuellhoehe_B_34,
        'alte_fuellhoehe_B_35':alte_fuellhoehe_B_35,
        'alte_fuellhoehe_B_36':alte_fuellhoehe_B_36,
        'alte_fuellhoehe_B_37':alte_fuellhoehe_B_37,
        'alte_fuellhoehe_B_38':alte_fuellhoehe_B_38,
        'alte_fuellhoehe_B_39':alte_fuellhoehe_B_39,
        'alte_fuellhoehe_B_40':alte_fuellhoehe_B_40,
        'alte_fuellhoehe_B_41':alte_fuellhoehe_B_41,
        'alte_fuellhoehe_B_42':alte_fuellhoehe_B_42,
        'alte_fuellhoehe_B_43':alte_fuellhoehe_B_43,
        'alte_fuellhoehe_B_44':alte_fuellhoehe_B_44,
        'alte_fuellhoehe_B_45':alte_fuellhoehe_B_45,
        'alte_fuellhoehe_B_46':alte_fuellhoehe_B_46,
        'alte_fuellhoehe_B_47':alte_fuellhoehe_B_47,
        'alte_fuellhoehe_B_48':alte_fuellhoehe_B_48,
        'alte_fuellhoehe_B_49':alte_fuellhoehe_B_49,
        'alte_fuellhoehe_B_50':alte_fuellhoehe_B_50
    }
    var alte_fuellhoehe_A=parseInt(WERTEZUORDNUNG_A['alte_fuellhoehe_A_'+schritt_nr]);
    var vhin=parseInt(WERTEZUORDNUNG_hin['austauschflaeche_hin_'+schritt_nr]);
    var vrueck=parseInt(WERTEZUORDNUNG_rueck['austauschflaeche_rueck_'+schritt_nr]);
    var alte_fuellhoehe_B=parseInt(WERTEZUORDNUNG_B['alte_fuellhoehe_B_'+schritt_nr]);
    $('#n_ed_verl').val(alte_fuellhoehe_A);
    $('#n_vhin').val(vhin);
    $('#n_vrueck').val(vrueck);
    $('#n_prod_verl').val(alte_fuellhoehe_B);
    zeichne_gefaesse(alte_fuellhoehe_A, alte_fuellhoehe_B);
}

function printValue(sliderID, textbox) {
    var wert=$('#'+sliderID).val();
    $('#'+textbox).val(wert);
}
