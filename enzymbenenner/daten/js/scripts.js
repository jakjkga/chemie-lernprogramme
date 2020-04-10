function lade_seite() {
    //alert('Seite geladen');
    var startwert='enzym';
    $('#enzymauswahl option[value="'+startwert+'"]').attr('selected', true);
    waehle_enzym(startwert);
}

function waehle_enzym(wert) {
    //alert('Enzymauswahl: '+wert);
    var substrat='<span class="subs">'+enzymsammlung[wert][0]+'</span>';
    var wirkung='<span class="wirk">'+enzymsammlung[wert][1]+'</span>';
    var endung='<span class="endu">'+enzymsammlung[wert][2]+'</span>';
    var wplink='<a href="http://de.wikipedia.org/wiki/'+enzymsammlung[wert][3]+'" target="_blank" class="linkbereich" title="Wikipedia-Link">'+enzymsammlung[wert][3]+'</a>';
    var allgemein=enzymsammlung[wert][4];
    var beispiel=enzymsammlung[wert][5];
    $('#name_des_substrats').html(substrat);
    $('#wirkungsweise_des_enzyms').html(wirkung);
    $('#endung_ase').html(endung);
    $('#platz_fuer_wplink').html(wplink);
    $('#allgemeiner_typ').html(allgemein);
    $('#beispiele').html(beispiel);
    
}
