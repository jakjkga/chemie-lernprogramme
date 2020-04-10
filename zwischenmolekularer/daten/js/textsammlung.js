kraefte=new Array();

kraefte['truetruetrue']='Wasserstoffbrückenbindung';
kraefte['truetruefalse']='Dipol-Dipol-Wechselwirkung';
kraefte['truefalse']='Van-der-Waals-Kräfte';
kraefte['false']='Van-der-Waals-Kräfte';
/*
kraefte['falsetruetrue']='Unsinn';
kraefte['falsefalsetrue']='Unsinn';
kraefte['falsetruefalse']='Unsinn';
kraefte['truefalsetrue']='Unsinn';
*/

molekuele=new Array();

molekuele['-']=[
'&nbsp;',                       // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'&nbsp;',                       // zwischenmolekulare_kraft
'&nbsp;',                       // siede_punkt
'&nbsp;',
'&nbsp;'
];

molekuele['HF']=[
'Fluorwasserstoff',             // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'19,5 °C',                      // siedepunkt
'<ul>\
<li>Die H-F-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz stark polar. \
<li>Das Fluorwasserstoffmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Fluorwasserstoff bildet sehr starke Wasserstoffbrückenbindungen aus. \
<li>Im flüssigen Zustand geht es im zeitlichen Mittel meist zwei \
    Wasserstoffbrückenbindungen pro Molekül ein, davon eine über das eine \
    positiv polarisierte Wasserstoffatom und eine über das freie Elektronenpaar \
    am Fluoratom. \
<li>Da viel Energie zur Trennung der Fluorwasserstoffmoleküle voneinander notwendig ist, \
    besitzt Fluorwasserstoff einen hohen Siedepunkt.\
</ul>',
'<pre>\
      _<br>\
<span class="zwimol">┄</span> H – F|<br>\
      ‾<br>\
      <span class="zwimol">⁞</span><br>\
      H<br>\
      |        _<br>\
     |F| <span class="zwimol">┄</span> H – F|<br>\
      ‾        ‾<br>\
               <span class="zwimol">⁞</span><br>\
</pre>'
];

molekuele['H₂O']=[
'Wasser',                       // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'100 °C',                       // siede_punkt
'<ul>\
<li>Die H-O-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz stark polar. \
<li>Das Wassermolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Wasser bildet starke Wasserstoffbrückenbindungen aus. \
<li>Im flüssigen Zustand geht es im zeitlichen Mittel meist drei \
    Wasserstoffbrückenbindungen pro Molekül ein, davon zwei über die beiden \
    positiv polarisierten Wasserstoffatome und eine über das freie Elektronenpaar \
    am Sauerstoffatom. \
<li>Da viel Energie zur Trennung der Wassermoleküle voneinander notwendig ist, \
    besitzt Wasser einen sehr hohen Siedepunkt.\
</ul>',
'<pre>\
                        <span class="zwimol">⁞</span><br>\
                        H<br>\
      _        _        |<br>\
<span class="zwimol"><span class="zwimol">┄</span></span> H – O| <span class="zwimol">┄</span> H – O| <span class="zwimol">┄</span> H – O|<span class="zwimol">┄</span><br>\
      |        |        ‾<br>\
      H        H<br>\
      <span class="zwimol">⁞</span>        <span class="zwimol">⁞</span><br>\
               _<br>\
        <span class="zwimol">┄</span> H –  O|<br>\
               |<br>\
               H<br>\
               <span class="zwimol">⁞</span><br>\
</pre>'
];

molekuele['NH₃']=[
'Ammoniak',                     // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'-33 °C',                       // siedepunkt
'<ul>\
<li>Die H-N-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz stark polar. \
<li>Das Ammoniakmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Ammoniak bildet starke Wasserstoffbrückenbindungen aus. \
<li>Im flüssigen Zustand geht es im zeitlichen Mittel meist zwei \
    Wasserstoffbrückenbindungen pro Molekül ein, davon eine über eines der drei \
    positiv polarisierten Wasserstoffatome und eine über das freie Elektronenpaar \
    am Stickstoffatom. \
<li>Da viel Energie zur Trennung der Ammoniakmoleküle voneinander notwendig ist, \
    besitzt Ammoniak für ein so kleines Molekül immer noch einen recht hohen Siedepunkt.\
</ul>',
'<pre>\
      H<br>\
      |<br>\
┄ H – N – H<br>\
      ‾<br>\
      <span class="zwimol">⁞</span><br>\
      H        H<br>\
      |        |<br>\
  H – N| ┄ H – N – H<br>\
      |        ‾<br>\
      H        <span class="zwimol">⁞</span><br>\
</pre>'
];

molekuele['HCl']=[
'Chlorwasserstoff',             // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'-85 °C',                       // siedepunkt
'<ul>\
<li>Die H-Cl-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
<li>Das Chlorwasserstoffmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Chlorwasserstoff bildet noch Wasserstoffbrückenbindungen aus. \
<li>Im flüssigen Zustand geht es im zeitlichen Mittel meist zwei \
    Wasserstoffbrückenbindungen pro Molekül ein, davon eine über das eine \
    positiv polarisierte Wasserstoffatom und eine über das freie Elektronenpaar \
    am Chloratom. \
<li>Da viel Energie zur Trennung der Chlorwasserstoffmoleküle voneinander notwendig ist, \
    besitzt Chlorwasserstoff immer noch einen recht hohen Siedepunkt.\
</ul>',
'<pre>\
      _<br>\
<span class="zwimol">┄</span> H – Cl|<br>\
      ‾<br>\
      <span class="zwimol">⁞</span><br>\
      H<br>\
      |         _<br>\
     |Cl| <span class="zwimol">┄</span> H – Cl|<br>\
      ‾         ‾<br>\
                <span class="zwimol">⁞</span><br>\
</pre>'
];

molekuele['HBr']=[
'Bromwasserstoff',              // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'-66,7 °C',                     // siedepunkt
'<ul>\
<li>Die H-Br-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
<li>Das Bromwasserstoffmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Bromwasserstoff bildet noch Wasserstoffbrückenbindungen aus \
    (wenn auch noch schlechter als Chlorwasserstoff und viel schlechter als Fluorwasserstoff). \
<li>Im flüssigen Zustand geht es im zeitlichen Mittel meist zwei \
    Wasserstoffbrückenbindungen pro Molekül ein, davon eine über das eine \
    positiv polarisierte Wasserstoffatom und eine über das freie Elektronenpaar \
    am Bromatom. \
<li>Da viel Energie zur Trennung der Bromwasserstoffmoleküle voneinander notwendig ist, \
    besitzt Bromwasserstoff einen etwas erhöhten Siedepunkt.\
</ul>',
'<pre>\
      _<br>\
<span class="zwimol">┄</span> H – Br|<br>\
      ‾<br>\
      <span class="zwimol">⁞</span><br>\
      H<br>\
      |         _<br>\
     |Br| <span class="zwimol">┄</span> H – Br|<br>\
      ‾         ‾<br>\
                <span class="zwimol">⁞</span><br>\
</pre>'
];

molekuele['CH₃OH']=[
'Methanol',                     // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'65 °C',                        // siedepunkt
'<ul>\
<li>Die H-O-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
<li>Das Methanolmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Methanol bildet mit der Hydroxygruppe Wasserstoffbrückenbindungen aus. \
<li>Da viel Energie zur Trennung der Methanolmoleküle voneinander notwendig ist, \
    besitzt Methanol einen hohen Siedepunkt (viel höher als der von Ethan, \
    welches etwa die gleiche Molare Masse besitzt aber nur Van-der-Waals-Kräfte \
    ausbilden kann, und niedriger als der des Wassers, das mehr und stärkere Wasserstoffbrückenbindungen ausbildet).\
</ul>',
'<pre>\
      _        _<br>\
CH₃ – O| <span class="zwimol">┄</span> H – O|<br>\
      |        |<br>\
      H        CH₃<br>\
</pre>'
];

molekuele['CH₃CH₂OH']=[
'Ethanol',                      // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'78 °C',                        // siedepunkt
'<ul>\
<li>Die H-O-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
<li>Das Ethanolmolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Ethanol bildet mit der Hydroxygruppe Wasserstoffbrückenbindungen aus. \
<li>Da viel Energie zur Trennung der Ethanolmoleküle voneinander notwendig ist, \
    besitzt Methanol einen hohen Siedepunkt (viel höher als der von Ethan, \
    welches etwa die gleiche Molare Masse besitzt aber nur Van-der-Waals-Kräfte \
    ausbilden kann, und niedriger als der des Wassers, das mehr und stärkere Wasserstoffbrückenbindungen ausbildet).\
</ul>',
'<pre>\
         _        _<br>\
CH₃CH₂ – O| <span class="zwimol">┄</span> H – O|<br>\
         |        |<br>\
         H        CH₂CH₃<br>\
</pre>'
];

molekuele['CH₃COOH']=[
'Ethansäure',                   // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
true,                           // positiv_polarisierte_wasserstoffatome
'Wasserstoffbrückenbindung',    // zwischenmolekulare_kraft
'118 °C',                       // siedepunkt
'<ul>\
<li>Die H-O-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
<li>Das Ethansäuremolekül ist aufgrund der unsymmetrischen Teilladungsverteilung \
    ein permanenter Dipol. \
<li>Ethansäure bildet mit der Hydroxygruppe sowie der Carbonylgruppe \
    Wasserstoffbrückenbindungen aus, so dass Dimere aus zwei Ethansäuremolekülen entstehen. \
<li>Da viel Energie zur Trennung dieser Ethansäure-Dimere voneinander notwendig ist, \
    besitzt Ethansäure einen sehr hohen Siedepunkt (noch höher als der von Wasser \
    und viel höher als der von Ethanol). \
    Die Abbildung zeigt nur die Bildung eines Ethansäure-Dimers. \
    Die starken Wechselwirkungen zwischen zwei Dimeren sind hier nicht dargestellt.\
</ul>',
'<pre>\
               _<br>\
     |O| <span class="zwimol">┄</span> H – O – C – CH₃<br>\
      ǁ   _    ‾   ǁ<br>\
CH₃ – C – O – H <span class="zwimol">┄</span> |O|<br>\
          ‾<br>\
</pre>'
];

molekuele['H₂']=[
'Wasserstoff',                  // name_des_molekuels
false,                           // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'-253 °C',                      // siedepunkt
'<ul>\
<li>Die H-H-Bindung ist aufgrund der Elektronegativitätsdifferenz von Null völlig unpolar. \
<li>Das Wasserstoffmolekül liegt also nur kurzzeitig als spontaner oder induzierter \
    Dipol vor, die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier nur ca. 2 g×mol⁻¹ beträgt. \
<li>Da nur sehr wenig Energie zur Trennung der Wasserstoffmoleküle voneinander notwendig ist, \
    besitzt elementarer Wasserstoff einen der niedrigsten Siedepunkte überhaupt. Es ist sehr leicht flüchtig. \
</ul>',
'<pre>\
H – H <span class="zwimol">┄</span> H – H<br>\
</pre>'
];

molekuele['F₂']=[
'Fluor',                        // name_des_molekuels
false,                          // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'−188 °C',                      // siedepunkt
'<ul>\
<li>Die F-F-Bindung ist aufgrund der aufgrund der Elektronegativitätsdifferenz von Null völlig unpolar.  \
<li>Das Fluormolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 38 g×mol⁻¹ beträgt. \
<li>Da nur sehr wenig Energie zur Trennung der Fluormoleküle voneinander notwendig ist, \
    besitzt Fluor einen sehr niedrigen Siedepunkt. \
</ul>',
'<pre>\
 _   _     _   _<br>\
|F – F| <span class="zwimol">┄</span> |F – F|<br>\
 ‾   ‾     ‾   ‾<br>\
</pre>'
];

molekuele['Cl₂']=[
'Chlor',                        // name_des_molekuels
false,                          // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'−34 °C',                       // siedepunkt
'<ul>\
<li>Die Cl-Cl-Bindung ist aufgrund der aufgrund der Elektronegativitätsdifferenz von Null völlig unpolar.  \
<li>Das Chlormolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, \
    die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 70 g×mol⁻¹ beträgt. \
<li>Da nur wenig Energie zur Trennung der Chlormoleküle voneinander notwendig ist, \
    besitzt Chlor einen niedrigen Siedepunkt. \
</ul>',
'<pre>\
 _    _      _    _<br>\
|Cl – Cl| <span class="zwimol">┄</span> |Cl – Cl|<br>\
 ‾    ‾      ‾    ‾<br>\
</pre>'
];

molekuele['Br₂']=[
'Brom',                         // name_des_molekuels
false,                          // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'59 °C',                        // siedepunkt
'<ul>\
<li>Die Br-Br-Bindung ist aufgrund der aufgrund der Elektronegativitätsdifferenz von Null völlig unpolar.  \
<li>Das Brommolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, \
    die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 158 g×mol⁻¹ beträgt. \
<li>Da aufgrund der großen Molaren Masse für ein unpolares Molekül doch recht \
    viel Energie zur Trennung der Brommoleküle voneinander notwendig ist, \
    besitzt Brom einen recht hohen Siedepunkt, es liegt bei Raumtemperatur flüssig vor. \
</ul>',
'<pre>\
 _    _      _    _<br>\
|Br – Br| <span class="zwimol">┄</span> |Br – Br|<br>\
 ‾    ‾      ‾    ‾<br>\
</pre>'
];

molekuele['I₂']=[
'Iod',                           // name_des_molekuels
false,                           // polare_atombindungen
false,                           // unsymmetrische_teilladungsverteilung
false,                           // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',          // zwischenmolekulare_kraft
'184,3 °C',                      // siedepunkt
'<ul>\
<li>Die I-I-Bindung ist aufgrund der aufgrund der Elektronegativitätsdifferenz von Null völlig unpolar.  \
<li>Das Iodmolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, \
    die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 254 g×mol⁻¹ beträgt. \
<li>Da aufgrund der sehr großen Molaren Masse für ein unpolares Molekül \
    viel Energie zur Trennung der Iodmoleküle voneinander notwendig ist, \
    besitzt Iod einen ungewöhnlich hohen Siedepunkt (und Schmelzpunkt), \
    es liegt daher bei Raumtemperatur fest vor. \
</ul>',
'<pre>\
 _   _     _   _<br>\
|I – I| <span class="zwimol">┄</span> |I – I|<br>\
 ‾   ‾     ‾   ‾<br>\
</pre>'
];

molekuele['CH₄']=[
'Methan',                       // name_des_molekuels
false,                          // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'-162 °C',                      // siedepunkt
'<ul>\
<li>Die C-H-Bindung ist aufgrund der sehr niedrigen Elektronegativitätsdifferenz fast unpolar. \
<li>Das Methanmolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 16 g×mol⁻¹ beträgt. \
<li>Da nur sehr wenig Energie zur Trennung der Methanmoleküle voneinander notwendig ist, \
    besitzt Methan einen sehr niedrigen Siedepunkt. Es ist der Hauptbestandteil von Erdgas.\
</ul>',
'<pre>\
    H           H<br>\
    |           |<br>\
H – C – H <span class="zwimol">┄</span> H – C – H<br>\
    |           |<br>\
    H           H<br>\
</pre>'
];

molekuele['CH₃CH₃']=[
'Ethan',                        // name_des_molekuels
false,                          // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'-89 °C',                       // siedepunkt
'<ul>\
<li>Die C-H-Bindung ist aufgrund der sehr niedrigen Elektronegativitätsdifferenz fast unpolar. \
<li>Das Ethanmolekül liegt also nur kurzzeitig als spontaner oder induzierter Dipol vor, die meiste Zeit ist es unpolar. \
<li>Es entstehen Van-der-Waals-Kräfte, die von der Moleküloberfläche abhängen. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 30 g×mol⁻¹ beträgt. \
<li>Da nur wenig Energie zur Trennung der Ethanmoleküle voneinander notwendig ist, \
    besitzt Methan einen niedrigen Siedepunkt. \
</ul>',
'<pre>\
    H   H<br>\
    |   |<br>\
H – C – C – H<br>\
    |   |<br>\
    H   H<br>\
    <span class="zwimol">⁞</span>   <span class="zwimol">⁞</span><br>\
    H   H<br>\
    |   |<br>\
H – C – C – H<br>\
    |   |<br>\
    H   H<br>\
</pre>'
];

molekuele['CCl₄']=[
'Tetrachlormethan',             // name_des_molekuels
true,                           // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'76,7 °C',                      // siedepunkt
'<ul>\
<li>Die C-Cl-Bindung ist aufgrund der sehr hohen Elektronegativitätsdifferenz polar. \
<li>Da die Teilladungsschwerpunkte aber in einem Punkt zusammenfallen, die Teilladungsverteilung also symmetrisch ist, handelt es sich trotzdem nicht um einen permanenten Dipol, sondern es können nur Van-der-Waals-Kräfte ausgebildet werden.. \
<li>Die Stärke dieser Van-der-Waals-Kräfte hängt von der Moleküloberfläche ab. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 308 g×mol⁻¹ beträgt. \
    Da aufgrund der sehr großen Molaren Masse für ein unpolares Molekül \
    viel Energie zur Trennung der Tetrachlormethanmoleküle voneinander notwendig ist, \
    besitzt Tetrachlormethan einen ungewöhnlich hohen Siedepunkt, \
    es liegt daher bei Raumtemperatur flüssig vor. \
</ul>',
'<pre>\
      _               _<br>\
     |Cl|            |Cl|<br>\
 _    |   _      _    |   _<br>\
|Cl – C – Cl| <span class="zwimol">┄</span> |Cl – C – Cl|<br>\
 ‾    |   ‾      ‾    |   ‾<br>\
     |Cl|            |Cl|<br>\
      ‾               ‾<br>\
</pre>'
];

molekuele['CO₂']=[
'Kohlenstoffdioxid',            // name_des_molekuels
true,                           // polare_atombindungen
false,                          // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Van-der-Waals-Kräfte',         // zwischenmolekulare_kraft
'-78,5 °C (Ausnahme: Sublimationspunkt!)',  // siedepunkt
'<ul>\
<li>Die C-O-Bindung ist aufgrund der sehr hohen Elektronegativitätsdifferenz polar. \
<li>Da die Teilladungsschwerpunkte aber in einem Punkt zusammenfallen, die Teilladungsverteilung also symmetrisch ist, handelt es sich trotzdem nicht um einen permanenten Dipol, sondern es können nur Van-der-Waals-Kräfte ausgebildet werden.. \
<li>Die Stärke dieser Van-der-Waals-Kräfte hängt von der Moleküloberfläche ab. \
    Ein vereinfachtes Maß ist die Molare Masse M, die hier 44 g×mol⁻¹ beträgt. \
    Da in <a class="linkbereich" href="http://de.wikipedia.org/wiki/Trockeneis" target="_blank">Trockeneis</a> \
    nur wenig Energie zur Trennung der Kohlenstoffdioxidmoleküle voneinander notwendig ist, \
    besitzt Kohlenstoffdioxid einen niedrigen Sublimationspunkt. \
</ul>',
'<pre>\
_       _   _       _<br>\
O = C = O <span class="zwimol">┄</span> O = C = O<br>\
‾       ‾   ‾       ‾<br>\
</pre>'
];

molekuele['CH₂Cl₂']=[
'Dichlormethan',                // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Dipol-Dipol-Wechselwirkung',   // zwischenmolekulare_kraft
'39,8 °C',                      // siedepunkt
'<ul>\
<li>Die C-Cl-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz polar. \
    Die C-H-Bindung dagegen ist aufgrund der niedrigen Elektronegativitätsdifferenz fast unpolar. \
<li>Da die Teilladungsschwerpunkte nicht in einem Punkt zusammenfallen, die Teilladungsverteilung \
    also unsymmetrisch ist, handelt es sich um einen permanenten Dipol. \
    Da keine positiv polarisierten Wasserstoffatome zur Verfügung stehen, \
    können aber keine Wasserstoffbrückenbindungen sondern nur \
    Dipol-Dipol-Wechselwirkungen ausgebildet werden. \
</ul>',
'<pre>\
    _         _<br>\
H  |Cl|  H  |Cl|<br>\
 \\ /      \\ /<br>\
  C   <span class="zwimol">┄</span>    C<br>\
 / \\      / \\<br>\
H  |Cl|  H  |Cl|<br>\
    ‾         ‾<br>\
</pre>'
];

molekuele['CH₂O']=[
'Methanal',                     // name_des_molekuels
true,                           // polare_atombindungen
true,                           // unsymmetrische_teilladungsverteilung
false,                          // positiv_polarisierte_wasserstoffatome
'Dipol-Dipol-Wechselwirkung',   // zwischenmolekulare_kraft
'-19 °C',                       // siedepunkt
'<ul>\
<li>Die C-O-Bindung ist aufgrund der hohen Elektronegativitätsdifferenz stark polar. \
    Die C-H-Bindung dagegen ist aufgrund der niedrigen Elektronegativitätsdifferenz fast unpolar. \
<li>Da die Teilladungsschwerpunkte nicht in einem Punkt zusammenfallen, die Teilladungsverteilung \
    also unsymmetrisch ist, handelt es sich um einen permanenten Dipol. \
    Da keine positiv polarisierten Wasserstoffatome zur Verfügung stehen, \
    können aber keine Wasserstoffbrückenbindungen sondern nur \
    Dipol-Dipol-Wechselwirkungen ausgebildet werden. \
</ul>',
'<pre>\
H        H<br>\
 \\    _   \\    _<br>\
  C = O <span class="zwimol">┄</span>  C = O<br>\
 /    ‾   /    ‾<br>\
H        H<br>\
</pre>'
];








