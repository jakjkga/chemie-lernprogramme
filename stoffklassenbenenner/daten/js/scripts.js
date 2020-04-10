function name_ermitteln() {
    var geruest=$('#i_geruest').val().toLowerCase();
    var an_hydroxy=parseInt($('#s_hydroxy option:selected').val());
    var pos_hydroxy=$('#i_hydroxy').val();
    var an_aldehyd=parseInt($('#s_aldehyd option:selected').val());
    var pos_aldehyd=$('#i_aldehyd').val();
    var an_keto=parseInt($('#s_keto option:selected').val());
    var pos_keto=$('#i_keto').val();
    var an_carboxy=parseInt($('#s_carboxy option:selected').val());
    if (an_carboxy > 0) {
        //console.log('Hauptfunktion: Carbonsäure');
        var endung=zahlsilben[an_carboxy]+'säure';
        if (an_hydroxy > 0) {
            var hydroxy=pos_hydroxy+'-'+zahlsilben[an_hydroxy]+'hydroxy-';
        } else {
            var hydroxy='';
        }
        var an_oxo=an_aldehyd+an_keto;
        if (an_oxo > 0 ) {
            var oxo=pos_aldehyd+'-'+pos_keto+'-'+zahlsilben[an_oxo]+'oxo-';
        } else {
            var oxo='';
        }
        var molekuelename=String(hydroxy+'-'+oxo+'-'+geruest+''+endung).replace(/\-\-\-/g, '-').replace(/\-\-/g, '-').replace(/^\-/, '');
        $('#i_verbindungsname').val(molekuelename);  
    } else if (an_keto > 0) {
        //console.log('Hauptfunktion: Keton');
        var endung='-'+pos_keto+'-'+zahlsilben[an_keto]+'on';
        if (an_hydroxy > 0) {
            var hydroxy=pos_hydroxy+'-'+zahlsilben[an_hydroxy]+'hydroxy-';
        } else {
            var hydroxy='';
        }
        var an_oxo=an_aldehyd;
        if (an_oxo > 0 ) {
            var oxo=pos_aldehyd+'-'+zahlsilben[an_oxo]+'oxo-';
        } else {
            var oxo='';
        }
        var molekuelename=String(hydroxy+'-'+oxo+'-'+geruest+''+endung).replace(/\-\-\-/g, '-').replace(/\-\-/g, '-').replace(/^\-/, '');
        $('#i_verbindungsname').val(molekuelename); 
    } else if (an_aldehyd > 0){
        //console.log('Hauptfunktion: Aldehyd');
        var endung=zahlsilben[an_aldehyd]+'al';
        if (an_hydroxy > 0) {
            var hydroxy=pos_hydroxy+'-'+zahlsilben[an_hydroxy]+'hydroxy-';
        } else {
            var hydroxy='';
        }
        var molekuelename=String(hydroxy+'-'+geruest+''+endung).replace(/\-\-\-/g, '-').replace(/\-\-/g, '-').replace(/^\-/, '');
        $('#i_verbindungsname').val(molekuelename); 
    } else if (an_hydroxy > 0){
        //console.log('Hauptfunktion: Alkohol');
        var endung='-'+pos_hydroxy+'-'+zahlsilben[an_hydroxy]+'ol';
        var molekuelename=String(geruest+''+endung).replace(/\-\-\-/g, '-').replace(/\-\-/g, '-').replace(/^\-/, '');
        $('#i_verbindungsname').val(molekuelename); 
    } else {
        $('#i_verbindungsname').val(geruest);
        console.log('Keine Sauerstoff haltige organische Verbindung!');
        //alert('Keine Sauerstoff haltige organische Verbindung!');
    }
    try {
        var molekuelname_komplett_klein=$('#i_verbindungsname').val();
        //console.log(molekuelname_komplett_klein);
        var erster_echter_buchstabe=molekuelname_komplett_klein.match(/[a-z]/)[0];
        //console.log(erster_echter_buchstabe);
        var position_erster_buchstabe=molekuelname_komplett_klein.indexOf(erster_echter_buchstabe);
        //console.log(position_erster_buchstabe);
        var erster_teil=molekuelname_komplett_klein.slice(0, position_erster_buchstabe);
        var erster_echter_buchstabe_gross=erster_echter_buchstabe.toUpperCase();
        var zweiter_teil=molekuelname_komplett_klein.slice(eval(position_erster_buchstabe+1), molekuelname_komplett_klein.length);
        var richtiger_molekuelname=erster_teil+
                                   erster_echter_buchstabe_gross+
                                   zweiter_teil;
        $('#i_verbindungsname').val(richtiger_molekuelname); 
    } catch (e) {
        console.log('Fehler: '+e);
    }
}

function lade_seite() {
    $('#i_geruest').val('');
    $('#s_hydroxy option:first').prop('selected', true);
    $('#i_hydroxy').val('');
    $('#s_aldehyd option:first').prop('selected', true);
    $('#i_aldehyd').val('');
    $('#s_keto option:first').prop('selected', true);
    $('#i_keto').val('');
    $('#s_carboxy option:first').prop('selected', true);
    $('#i_verbindungsname').val('');
}
