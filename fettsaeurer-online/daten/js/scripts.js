var catome;
var doppelbindungen;
var erste_doppelbindung;
var trans;

function lade_seite() {
    $('#table_formularinhalt').wrap('<form>').parent('form').trigger('reset');
    $('#table_formularinhalt').unwrap();
    $('#s_doppelbindungen option').attr('disabled', true);
    $('#s_erste_doppelbindung option').attr('disabled', true);
    $('#s_trans option').attr('disabled', true);
    $('#img_abb').attr('src', 'daten/img/start.gif');
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information-inactive.png');
    $('#a_informationsseite').attr('href', '#');
}

function setze_fettsaeure(hauptschluessel) {
    //console.log('setze_fettsaeure '+hauptschluessel);
    var anzeigename=fettsaeuren[hauptschluessel][0]+', '+fettsaeuren[hauptschluessel][1];
    var summenformel=fettsaeuren[hauptschluessel][2];
    var schmelzpunkt=fettsaeuren[hauptschluessel][3];
    var vorkommen=fettsaeuren[hauptschluessel][4];
    var bildpfad='daten/img/'+fettsaeuren[hauptschluessel][5]+'.gif';
    var linkadresse='http://chemie-lernprogramme.de/daten/help/fettsaeurer/html/'+fettsaeuren[hauptschluessel][5]+'.html';
    $('#i_name').val(anzeigename);
    $('#i_summenformel').val(summenformel);
    $('#i_schmelzpunkt').val(schmelzpunkt);
    $('#i_vorkommen').val(vorkommen);
    $('#img_abb').attr('src', bildpfad);
    $('#a_informationsseite').attr('href', linkadresse);
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information.png');
}

function informationen_zuruecksetzen() {
    $('#i_name').val('');
    $('#i_summenformel').val('');
    $('#i_schmelzpunkt').val('');
    $('#i_vorkommen').val('');
    $('#img_abb').attr('src', 'daten/img/start.gif');
    $('#a_informationsseite').attr('href', '#');
    $('#img_informationsseite').attr('src', 'daten/img/dialog-information-inactive.png');
}

function setze_catome() {
    //console.log('setze_catome');
    // alle weiteren Auswahllisten abwählen und deaktivieren
    $('#s_doppelbindungen').wrap('<form>').parent('form').trigger('reset');
    $('#s_doppelbindungen').unwrap();
    $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
    $('#s_erste_doppelbindung').unwrap();
    $('#s_trans').wrap('<form>').parent('form').trigger('reset');
    $('#s_trans').unwrap();
    $('#s_doppelbindungen option').attr('disabled', true);
    $('#s_erste_doppelbindung option').attr('disabled', true);
    $('#s_trans option').attr('disabled', true);
    informationen_zuruecksetzen();
    catome=String($('#s_catome').val());
    switch (catome) {
        case '4':
            $('#s_doppelbindungen option[value=0]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=0]').prop('selected', true);
            setze_doppelbindungen();
            break
        case '14':
            $('#s_doppelbindungen option[value=0]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=1]').removeAttr('disabled');
            break
        case '16':
            $('#s_doppelbindungen option[value=0]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=1]').removeAttr('disabled');
            break
        case '18':
            $('#s_doppelbindungen option[value=0]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=1]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=2]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=3]').removeAttr('disabled');
            break
        case '20':
            $('#s_doppelbindungen option[value=0]').removeAttr('disabled');
            $('#s_doppelbindungen option[value=1]').removeAttr('disabled');
            break
    }
}

function setze_doppelbindungen() {
    // alle weiteren Auswahllisten abwählen und deaktivieren
    $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
    $('#s_erste_doppelbindung').unwrap();
    $('#s_trans').wrap('<form>').parent('form').trigger('reset');
    $('#s_trans').unwrap();
    catome=String($('#s_catome').val());
    doppelbindungen=String($('#s_doppelbindungen').val());
    var schluessel=catome+'_'+doppelbindungen;
    //console.log('setze_doppelbindungen '+schluessel);
    switch (schluessel) {
        case '4_0':
            // Eindeutig ⇒ Buttersäure
            $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
            $('#s_erste_doppelbindung').unwrap();
            $('#s_erste_doppelbindung option').attr('disabled', true);
            $('#s_trans').wrap('<form>').parent('form').trigger('reset');
            $('#s_trans').unwrap();
            $('#s_trans option').attr('disabled', true);
            setze_fettsaeure('4_0_kdb_kdb');
            break
        case '14_0':
            // Eindeutig ⇒ Myristinsäure
            $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
            $('#s_erste_doppelbindung').unwrap();
            $('#s_erste_doppelbindung option').attr('disabled', true);
            $('#s_trans').wrap('<form>').parent('form').trigger('reset');
            $('#s_trans').unwrap();
            $('#s_trans option').attr('disabled', true);
            setze_fettsaeure('14_0_kdb_kdb');
            break
        case '14_1':
            // Eindeutig ⇒ Myristoleinsäure
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').prop('selected', true);
            $('#s_trans option[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('14_1_9_nein');
            break
        case '16_0':
            // Eindeutig ⇒ Palmitinsäure
            $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
            $('#s_erste_doppelbindung').unwrap();
            $('#s_erste_doppelbindung option').attr('disabled', true);
            $('#s_trans').wrap('<form>').parent('form').trigger('reset');
            $('#s_trans').unwrap();
            $('#s_trans option').attr('disabled', true);
            setze_fettsaeure('16_0_kdb_kdb');
            break
        case '16_1':
            // Eindeutig ⇒ Palmitoleinsäure
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').prop('selected', true);
            $('#s_trans option[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('16_1_9_nein');
            break
        case '18_0':
            // Eindeutig ⇒ Stearinsäure
            $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
            $('#s_erste_doppelbindung').unwrap();
            $('#s_erste_doppelbindung option').attr('disabled', true);
            $('#s_trans').wrap('<form>').parent('form').trigger('reset');
            $('#s_trans').unwrap();
            $('#s_trans option').attr('disabled', true);
            setze_fettsaeure('18_0_kdb_kdb');
            break
        case '18_1':
            // nicht eindeutig: drei Möglichkeiten!
            $('#s_erste_doppelbindung').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=6]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            $('#s_trans option').attr('disabled', true);
            informationen_zuruecksetzen();
            break
        case '18_2':
            // Eindeutig ⇒ Linolsäure
            $('#s_erste_doppelbindung option[value=6]').attr('disabled', true);
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').prop('selected', true);
            $('#s_trans option').attr('disabled', true);
            $('#s_trans option[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('18_2_9_nein');
            break
        case '18_3':
            // nicht eindeutig: drei Möglichkeiten!
            $('#s_erste_doppelbindung').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=6]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            informationen_zuruecksetzen();
            break
        case '20_0':
            // Eindeutig ⇒ Arachinsäure
            $('#s_erste_doppelbindung').wrap('<form>').parent('form').trigger('reset');
            $('#s_erste_doppelbindung').unwrap();
            $('#s_erste_doppelbindung option').attr('disabled', true);
            $('#s_trans').wrap('<form>').parent('form').trigger('reset');
            $('#s_trans').unwrap();
            $('#s_trans option').attr('disabled', true);
            setze_fettsaeure('20_0_kdb_kdb');
            break
        case '20_1':
            // nicht eindeutig: zwei Möglichkeiten!
            $('#s_erste_doppelbindung').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=9]').removeAttr('disabled');
            $('#s_erste_doppelbindung option[value=11]').removeAttr('disabled');
            informationen_zuruecksetzen();
            break
    }
}

function setze_erste_doppelbindung() {
    //console.log('setze_erste_doppelbindung');
    catome=String($('#s_catome').val());
    doppelbindungen=String($('#s_doppelbindungen').val());
    erste_doppelbindung=String($('#s_erste_doppelbindung').val());
    var schluessel=catome+'_'+doppelbindungen+'_'+erste_doppelbindung;
    switch (schluessel) {
        // 2x 18_1
        case '18_1_6':
            // Eindeutig ⇒ Petroselinsäure
            $('#s_trans option').attr('disabled', true);
            $('#s_trans option[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('18_1_6_nein');
            break
        case '18_1_9':
            // nicht eindeutig: transfett und normal
            $('#s_trans option').removeAttr('disabled');
            informationen_zuruecksetzen();
            break
        case '18_3_6':
            // Eindeutig ⇒ γ-Linolensäure
            $('#s_trans option').attr('disabled', true);
            $('#s_trans[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('18_3_6_nein');
            break
        case '18_3_9':
            // nicht eindeutig: transfett und normal
            $('#s_trans option').removeAttr('disabled');
            informationen_zuruecksetzen();
            break
        case '20_1_9':
            // Eindeutig ⇒ Gadoleinsäure
            $('#s_trans').removeAttr('disabled');
            $('#s_trans[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('20_1_9_nein');
            break
       case '20_1_11':
            // Eindeutig ⇒ Icosensäure
            $('#s_trans').removeAttr('disabled');
            $('#s_trans[value=nein]').removeAttr('disabled');
            $('#s_trans option[value=nein]').prop('selected', true);
            setze_fettsaeure('20_1_11_nein');
            break  
    }
}

function setze_trans() {
    //console.log('setze_trans');
    catome=String($('#s_catome').val());
    doppelbindungen=String($('#s_doppelbindungen').val());
    erste_doppelbindung=String($('#s_erste_doppelbindung').val());
    trans=String($('#s_trans').val());
    var schluessel=catome+'_'+doppelbindungen+'_'+erste_doppelbindung+'_'+trans;
    try {
        setze_fettsaeure(schluessel);
    } catch(e) {
        informationen_zuruecksetzen();
    }
}

function zuruecksetzen() {
    lade_seite();
}
