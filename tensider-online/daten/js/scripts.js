function tuwas(wer) {
    var menuepunkt=$('#'+wer).parent('li').parent('ul').attr('id');
    $('#'+menuepunkt+' li').removeClass('active');
    $('#'+wer).parent('li').addClass('active');
    console.log(wer);
    zeige_seite(wer);
}

var baseurl='daten/html/';

function zeige_seite(wer) {
    var pfad=baseurl+wer+'.html';
    $('#anzeigerahmen').attr('src', pfad);
    document.getElementById("IframeId").body.scrollLeft;
}
