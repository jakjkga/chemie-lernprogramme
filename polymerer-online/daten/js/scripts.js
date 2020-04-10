function lade_seite() {
    $('#s_monomere option:first').prop('selected', true);
    setze_monomere();
}

function setze_monomere() {
    var schluessel=$('#s_monomere option:selected').val();
    var name_des_polymers=polymere[schluessel][0];
    var bausteintypschluessel=polymere[schluessel][1];
    var bausteintyp=bausteintypen[bausteintypschluessel];
    var verknuepfungsvorgang=polymere[schluessel][2];
    var verknuepfungsgruppe=polymere[schluessel][3];
    var verzweigungstypschluessel=polymere[schluessel][4];
    var verzweigungstyp=verzweigungstypen[verzweigungstypschluessel];
    $('#span_name_des_polymers').text(name_des_polymers);
    $('#span_bausteintyp').text(bausteintyp);
    $('#span_verknuepfungsvorgang').text(verknuepfungsvorgang);
    $('#span_verknuepfungsgruppe').text(verknuepfungsgruppe);
    $('#span_verzweigungstyp').text(verzweigungstyp);
    var bildpfad_monomere='daten/img/'+schluessel+'/monomere.gif';
    $('#img_monomere').attr('src', bildpfad_monomere);
    var bildpfad_polymer='daten/img/'+schluessel+'/polymerausschnitt.gif';
    $('#img_polymer').attr('src', bildpfad_polymer);
    var verweisziel='http://chemie-lernprogramme.de/daten/help/polymerer/html/'+schluessel+'.html';
    $('#a_informationsseite').attr('href', verweisziel);
}
