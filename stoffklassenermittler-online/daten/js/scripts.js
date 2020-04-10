function lade_seite() {
    $('#a_1 option:first').prop('selected', true);
    $('#a_2 option:first').prop('selected', true);
    $('#a_3 option:first').prop('selected', true);
    $('#a_4 option:first').prop('selected', true);
    $('#a_5 option:first').prop('selected', true);
    $('#a_6 option:first').prop('selected', true);
    hole_carbonyl();
    hole_hydroxy();
}

function hole_carbonyl() {
    var li=String($('#a_1').prop('selectedIndex'));
    var re=String($('#a_2').prop('selectedIndex'));
    var schluessel=li+re;
    //console.log(schluessel);
    var stoffklasse=carbonylverbindungen[schluessel];
    $('#aus_carbonyl').val(stoffklasse);
    if (stoffklasse == 'Nicht erlaubt' ||
        stoffklasse == 'Nicht stabil') {
        $('#aus_carbonyl').addClass('achtung');
    } else {
        $('#aus_carbonyl').removeClass('achtung');
    }
}

function hole_hydroxy() {
    var li=String($('#a_3').prop('selectedIndex'));
    var u=String($('#a_4').prop('selectedIndex'));
    var re=String($('#a_5').prop('selectedIndex'));
    var o=String($('#a_6').prop('selectedIndex'));
    var schluessel=li+u+re+o;
    var stoffklasse=hydroxyverbindungen[schluessel];
    $('#aus_hydroxy').val(stoffklasse);
    if (stoffklasse == 'Nicht erlaubt' ||
        stoffklasse == 'Nicht stabil') {
        $('#aus_hydroxy').addClass('achtung');
    } else {
        $('#aus_hydroxy').removeClass('achtung');
    }
}
