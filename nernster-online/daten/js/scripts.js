function lade_seite() {
    $('#s_halbzelle option:first').prop('selected', true);
    $('#i_oxidationsteilreaktion').val('');
    //$('#i_c_redm').val(1);
    //$('#i_c_oxm').val(1);
    //$('#i_ph').val(7);
    setze_oxidationsteilreaktion();    
}

function zeige_formel(schluessel, bestandteile_links, bestandteile_rechts) {
    var formel='\\[ E = E_0 + \\frac{0,059 V}{\\text{Anzahl e⁻}} \\cdot  \\frac{\\text{c(Oxm)}^{Koeff}}{\\text{c(Redm)}^{Koeff}} \\]';
    switch (schluessel) {
        case 0:
            formel='\\[ E = -3,02 V + \\frac{0,059 V}{1} \\cdot  \\text{c(Li⁺)} \\]';
            break
        case 1:
            formel='\\[ E = -2,71 V + \\frac{0,059 V}{1} \\cdot  \\text{c(Na⁺)} \\]';
            break
        case 2:
            formel='\\[ E = -1,66 V + \\frac{0,059 V}{3} \\cdot  \\text{c(Al³⁺)} \\]';
            break
        case 3:
            formel='\\[ E = -0,82 V + \\frac{0,059 V}{2} \\cdot  \\frac{1}{\\text{c(OH⁻)}^2} \\]';
            break    
        case 4:
            formel='\\[ E = -0,76 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Zn²⁺)} \\]';
            break
        case 5:
            formel='\\[ E = -0,41 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Fe²⁺)} \\]';
            break
        case 6:
            formel='\\[ E = -0,4 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Cd²⁺)} \\]';
            break
        case 7:
            formel='\\[ E = -0,36 V + \\frac{0,059 V}{2} \\cdot  \\frac{1}{\\text{c(SO₄²⁻)}} \\]';
            break
        case 8:
            formel='\\[ E = -0,23 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Ni²⁺)} \\]';
            break
        case 9:
            formel='\\[ E = -0,14 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Sn²⁺)} \\]';
            break
        case 10:
            formel='\\[ E = 0 V + \\frac{0,059 V}{2} \\cdot  \\text{c(H₃O⁺)}^{2} \\]';
            break
        case 11:
            formel='\\[ E = 0,34 V + \\frac{0,059 V}{2} \\cdot  \\text{c(Cu²⁺)} \\]';
            break
        case 12:
            formel='\\[ E = 0,4 V + \\frac{0,059 V}{4} \\cdot  \\frac{1}{\\text{c(OH⁻)}^4} \\]';
            break
        case 13:
            formel='\\[ E = 0,54 V + \\frac{0,059 V}{2} \\cdot  \\frac{1}{\\text{c(I⁻)}^2} \\]';
            break
        case 14:
            formel='\\[ E = 0,8 V + \\frac{0,059 V}{1} \\cdot  \\text{c(Ag⁺)} \\]';
            break
        case 15:
            formel='\\[ E = 1,07 V + \\frac{0,059 V}{2} \\cdot  \\frac{1}{\\text{c(Br⁻)}^2} \\]';
            break
        case 16:
            formel='\\[ E = 1,23 V + \\frac{0,059 V}{4} \\cdot  \\text{c(H₃O⁺)}^4 \\]';
            break
        case 17:
            formel='\\[ E = 1,36 V + \\frac{0,059 V}{2} \\cdot  \\frac{1}{\\text{c(Cl⁻)}^2} \\]';
            break
        case 18:
            formel='\\[ E = 1,49 V + \\frac{0,059 V}{5} \\cdot  \\frac{\\text{c(MnO₄⁻)} \\cdot \\text{c(H₃O⁺)}^8}{\\text{c(Mn²⁺)}} \\]';
            break
        case 19:
            formel='\\[ E = 1,69 V + \\frac{0,059 V}{2} \\cdot  \\text{c(H₃O⁺)}^3 \\cdot \\text{c(HSO₄⁻)} \\]';
            break
    }
    
    $('#anzeigebereich').html(formel);
    MathJax.Hub.Typeset();
}

function setze_oxidationsteilreaktion() {
    var schluessel=parseInt($('#s_halbzelle option:selected').val());
    var E0=parseFloat(halbzellendaten[schluessel]['E0']);
    var li_redm_koeff=halbzellendaten[schluessel]['redm_haelfte'][0];
    var li_redm_sf=halbzellendaten[schluessel]['redm_haelfte'][1];
    var li_lad_koeff=halbzellendaten[schluessel]['redm_haelfte'][2];
    var li_lad_sf=halbzellendaten[schluessel]['redm_haelfte'][3];
    var li_wass_koeff=halbzellendaten[schluessel]['redm_haelfte'][4];
    var li_wass_sf=halbzellendaten[schluessel]['redm_haelfte'][5];
    var re_oxm_koeff=halbzellendaten[schluessel]['oxm_haelfte'][0];
    var re_oxm_sf=halbzellendaten[schluessel]['oxm_haelfte'][1];
    var re_el_koeff=halbzellendaten[schluessel]['oxm_haelfte'][2];
    var re_el_sf=halbzellendaten[schluessel]['oxm_haelfte'][3];
    var re_lad_koeff=halbzellendaten[schluessel]['oxm_haelfte'][4];
    var re_lad_sf=halbzellendaten[schluessel]['oxm_haelfte'][5];
    var re_wass_koeff=halbzellendaten[schluessel]['oxm_haelfte'][6];
    var re_wass_sf=halbzellendaten[schluessel]['oxm_haelfte'][7];
    var bestandteile_links=[
        li_redm_koeff, li_redm_sf, 
        li_lad_koeff, li_lad_sf,
        li_wass_koeff, li_wass_sf
    ];
    var bestandteile_rechts=[
        re_oxm_koeff, re_oxm_sf, 
        re_el_koeff, re_el_sf, 
        re_lad_koeff, re_lad_sf, 
        re_wass_koeff, re_wass_sf
    ];
    var oxidationsteilgleichung_text='';
    var linker_teil=' '+li_redm_koeff+' '+li_redm_sf;
    if (bestandteile_links[2].length > 0 && bestandteile_links[3].length > 0) {
        linker_teil=linker_teil+' + '+bestandteile_links[2]+' '+bestandteile_links[3];
    }
    if (bestandteile_links[4].length > 0 && bestandteile_links[5].length > 0) {
        linker_teil=linker_teil+' + '+bestandteile_links[4]+' '+bestandteile_links[5];
    }
    var rechter_teil=re_oxm_koeff+' '+re_oxm_sf;
    if (bestandteile_rechts[2].length > 0 && bestandteile_rechts[3].length > 0) {
        rechter_teil=rechter_teil+' + '+bestandteile_rechts[2]+' '+bestandteile_rechts[3];
    }
    if (bestandteile_rechts[4].length > 0 && bestandteile_rechts[5].length > 0) {
        rechter_teil=rechter_teil+' + '+bestandteile_rechts[4]+' '+bestandteile_rechts[5];
    }
    if (bestandteile_rechts[6].length > 0 && bestandteile_rechts[7].length > 0) {
        rechter_teil=rechter_teil+' + '+bestandteile_rechts[6]+' '+bestandteile_rechts[7];
    }
    
    var oxidationsteilgleichung_text=(linker_teil+' ⇌ '+rechter_teil).replace(/\s+1\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
    $('#i_oxidationsteilreaktion').val(oxidationsteilgleichung_text);
    $('#s_redm').text(li_redm_sf);
    $('#s_oxm').text(re_oxm_sf);
    zeige_formel(schluessel, bestandteile_links, bestandteile_rechts);
}
