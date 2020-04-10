function lade_seite() {
    $('#s_verbtyp option:first').prop('selected', true);
    $('#i_el2').val('H');
    $('#s_el2 option[value=2]').prop('selected', true);
    $('#i_el3').val('O');
    $('#s_el3 option[value=1]').prop('selected', true);
    $('#s_ladung option[value=0]').prop('selected', true);
    auswahl_typ();
    $('#i_oz').val('');
}

function auswahl_typ() {
    var auswahl=$('#s_verbtyp option:selected').val();
    switch (auswahl) {
        case 'zwei':
            $('#i_el1').val('');
            $('#i_el1').attr('disabled', true);
            $('#s_el1 option:first').prop('selected', true);
            $('#s_el1').attr('disabled', true);
            break
        case 'drei':
            $('#i_el1').removeAttr('disabled');
            $('#s_el1').removeAttr('disabled');
            break
    }
}

function ermittle() {
    var auswahl=$('#s_verbtyp option:selected').val();
    switch (auswahl) {
        case 'zwei':
            // OZ=(-1*(int(E3_Ind)*int(E3_Daten[E3][0]))+int(LADUNG))/int(E2_Ind)
            var el3_el=$('#i_el3').val().replace(/\s+/g, '');
            var el3_ind=parseInt($('#s_el3 option:selected').val());
            try {
                var el3_oz=parseInt(E3_Daten[el3_el][0]);
            } catch(e) {
                alert('unzulässige Eingabe beim zweiten Element!');
            }
            var ladung=parseInt($('#s_ladung option:selected').val());
            var el2_ind=parseInt($('#s_el2 option:selected').val());
            var oz=(-1*(el3_ind*el3_oz)+ladung)/el2_ind;
            var oz_anzeige=oz_roem[String(oz)];
            $('#i_oz').val(oz_anzeige);
            break
        case 'drei':
            // OZ=(-1*(int(E1_Ind)*int(E1_Daten[E1][0])+int(E3_Ind)*int(E3_Daten[E3][0]))+int(LADUNG))/int(E2_Ind)
            var el1_el=$('#i_el1').val().replace(/\s+/g, '');
            var el1_ind=parseInt($('#s_el1 option:selected').val());
            try {
                var el1_oz=parseInt(E1_Daten[el1_el][0]);
            } catch(e) {
                alert('unzulässige Eingabe beim dritten Element!');
            }
            var el3_el=$('#i_el3').val().replace(/\s+/g, '');
            var el3_ind=parseInt($('#s_el3 option:selected').val());
            try {
                var el3_oz=parseInt(E3_Daten[el3_el][0]);
            } catch(e) {
                alert('unzulässige Eingabe beim zweiten Element!');
            }
            var ladung=parseInt($('#s_ladung option:selected').val());
            var el2_ind=parseInt($('#s_el2 option:selected').val());
            var oz=(-1*(el1_ind*el1_oz+el3_ind*el3_oz)+ladung)/el2_ind;
            var oz_anzeige=oz_roem[String(oz)];
            $('#i_oz').val(oz_anzeige);
            break
    }
}
