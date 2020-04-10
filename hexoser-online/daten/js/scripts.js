var c2_conf;
var c3_conf;
var c4_conf;
var c5_conf;

function lade_seite() {
    $('#s_carbonylverbindungstyp option[value=aldose]').prop('selected', true);
    c2_conf='re';
    c3_conf='li';
    c4_conf='re';
    c5_conf='re';
    var carbonylverbindungstyp=$('#s_carbonylverbindungstyp option:selected').val();
    switch (carbonylverbindungstyp) {
        case 'aldose':
            setze_aldose();
            break
        case 'ketose':
            setze_ketose();
            break
    }
}

function setze_carbonylverbindungstyp() {
    var carbonylverbindungstyp=$('#s_carbonylverbindungstyp option:selected').val();
    switch (carbonylverbindungstyp) {
        case 'aldose':
            c2_conf='re';
            c3_conf='li';
            c4_conf='re';
            c5_conf='re';
            setze_aldose();
            break
        case 'ketose':
            c3_conf='li';
            c4_conf='re';
            c5_conf='re';
            setze_ketose();
            break
    }
    
}

function setze(wer) {
    //console.log(wer);
    var carbonylverbindungstyp=$('#s_carbonylverbindungstyp option:selected').val();
    var catom=wer.split('_')[0];
    var neuer_wert=wer.split('_')[1];
    switch (catom) {
        case 'c2':
            c2_conf=neuer_wert;
            break
        case 'c3':
            c3_conf=neuer_wert;
            break
        case 'c4':
            c4_conf=neuer_wert;
            break
        case 'c5':
            c5_conf=neuer_wert;
            break
    }
    switch (carbonylverbindungstyp) {
        case 'aldose':
            setze_aldose();
            break
        case 'ketose':
            setze_ketose();
            break
    }
}

function setze_ketose() {
    $('#svg_aldosen').hide();
    $('#svg_ketosen').show();
    switch (c3_conf) {
        case 're':
            $('#svg_ketosen #c3_li').text('H');
            $('#svg_ketosen #c3_re').text('OH');
            break
        case 'li':
            $('#svg_ketosen #c3_li').text('HO');
            $('#svg_ketosen #c3_re').text('H');
            break
    }
    switch (c4_conf) {
        case 're':
            $('#svg_ketosen #c4_li').text('H');
            $('#svg_ketosen #c4_re').text('OH');
            break
        case 'li':
            $('#svg_ketosen #c4_li').text('HO');
            $('#svg_ketosen #c4_re').text('H');
            break
    }
    switch (c5_conf) {
        case 're':
            $('#svg_ketosen #c5_li').text('H');
            $('#svg_ketosen #c5_re').text('OH');
            break
        case 'li':
            $('#svg_ketosen #c5_li').text('HO');
            $('#svg_ketosen #c5_re').text('H');
            break
    }
    var schluessel=c3_conf+c4_conf+c5_conf;
    var anzeigetext=hexosen['ketose'][schluessel];
    var linktext=anzeigetext.replace(/^D\-/, '').replace(/^L\-/, '');
    $('#i_name').val(anzeigetext);
    var wplink='http://de.wikipedia.org/wiki/'+linktext;
    $('#a_wplink').attr('href', wplink);
}

function setze_aldose() {
    $('#svg_aldosen').show();
    $('#svg_ketosen').hide();
    switch (c2_conf) {
        case 're':
            $('#svg_aldosen #c2_li').text('H');
            $('#svg_aldosen #c2_re').text('OH');
            break
        case 'li':
            $('#svg_aldosen #c2_li').text('HO');
            $('#svg_aldosen #c2_re').text('H');
            break
    }
    switch (c3_conf) {
        case 're':
            $('#svg_aldosen #c3_li').text('H');
            $('#svg_aldosen #c3_re').text('OH');
            break
        case 'li':
            $('#svg_aldosen #c3_li').text('HO');
            $('#svg_aldosen #c3_re').text('H');
            break
    }
    switch (c4_conf) {
        case 're':
            $('#svg_aldosen #c4_li').text('H');
            $('#svg_aldosen #c4_re').text('OH');
            break
        case 'li':
            $('#svg_aldosen #c4_li').text('HO');
            $('#svg_aldosen #c4_re').text('H');
            break
    }
    switch (c5_conf) {
        case 're':
            $('#svg_aldosen #c5_li').text('H');
            $('#svg_aldosen #c5_re').text('OH');
            break
        case 'li':
            $('#svg_aldosen #c5_li').text('HO');
            $('#svg_aldosen #c5_re').text('H');
            break
    }
    var schluessel=c2_conf+c3_conf+c4_conf+c5_conf;
    var anzeigetext=hexosen['aldose'][schluessel];
    var linktext=anzeigetext.replace(/^D\-/, '').replace(/^L\-/, '');
    $('#i_name').val(anzeigetext);
    var wplink='http://de.wikipedia.org/wiki/'+linktext;
    $('#a_wplink').attr('href', wplink);
}

