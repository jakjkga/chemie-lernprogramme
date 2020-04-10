var starttext="\
Wähle zunächst ganz oben eine Ausgangsstoff-Kombination aus. Wähle anschließend \
im Seitenmenü die Darstellungsform sowie die gewünschte Gleichung aus. \
Betrachte genau die (evtl. etwas verzögert) \
angezeigten Animationen und lies die Texte durch. \
Sie helfen dir bei der Bearbeitung der Übungsaufgaben.<br />\
Dieses Lernprogramm veranschaulicht nur <strong>einfache</strong> Redoxgleichungen, \
die auch schon <em>ohne</em> das Konzept der <em>Oxidationszahl</em> sowie \
<em>ohne</em> die <em>Regeln zum Aufstellen komplexer Redoxgleichungen</em> \
erstellt werden können!"

textbausteine=new Array();

//##############################################################################
//##                        Natriumchlorid-Bildung                            ##
//##############################################################################

//########################### Kugelmodell ######################################
textbausteine['nacl_ku_ox']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Natrium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['nacl_ku_red']="\
<ul>\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Chlor wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['nacl_ku_ges']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Natrium) direkt auf das \
    Oxidationsmittel (hier Chlor) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Natriumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Chloridionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Summenformel######################################
textbausteine['nacl_sf_ox']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Natrium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['nacl_sf_red']="\
<ul>\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Chlor wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['nacl_sf_ges']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Natrium) direkt auf das \
    Oxidationsmittel (hier Chlor) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Natriumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Chloridionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Strukturformel####################################
textbausteine['nacl_st_ox']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Natrium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['nacl_st_red']="\
<ul>\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Chlor wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['nacl_st_ges']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Natrium) direkt auf das \
    Oxidationsmittel (hier Chlor) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Natriumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Chloridionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Schalenmodell ####################################
textbausteine['nacl_sa_ox']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Natrium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['nacl_sa_red']="\
<ul>\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Chlor wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['nacl_sa_ges']="\
<ul>\
<li>Die beiden Natriumatome geben jeweils ein Elektron ab.\
<li>Die aus dem zweiatomigen Chlormolekül stammenden beiden Chloratome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Natrium) direkt auf das \
    Oxidationsmittel (hier Chlor) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Natriumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Chloridionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//##############################################################################
//##                        Magnesiumoxid-Bildung                            ##
//##############################################################################

//########################### Kugelmodell ######################################
textbausteine['mgo_ku_ox']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Magnesium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['mgo_ku_red']="\
<ul>\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Sauerstoff wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['mgo_ku_ges']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Insgesamt gehen also vier Elektronen vom Reduktionsmittel (hier Magnesium) direkt auf das \
    Oxidationsmittel (hier Sauerstoff) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Magnesiumiumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Oxidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Summenformel######################################
textbausteine['mgo_sf_ox']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Magnesium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['mgo_sf_red']="\
<ul>\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Sauerstoff wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['mgo_sf_ges']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Insgesamt gehen also vier Elektronen vom Reduktionsmittel (hier Magnesium) direkt auf das \
    Oxidationsmittel (hier Sauerstoff) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Magnesiumiumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Oxidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Strukturformel####################################
textbausteine['mgo_st_ox']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Magnesium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['mgo_st_red']="\
<ul>\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Sauerstoff wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['mgo_st_ges']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Insgesamt gehen also vier Elektronen vom Reduktionsmittel (hier Magnesium) direkt auf das \
    Oxidationsmittel (hier Sauerstoff) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Magnesiumiumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Oxidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Schalenmodell ####################################
textbausteine['mgo_sa_ox']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Magnesium wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['mgo_sa_red']="\
<ul>\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Sauerstoff wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['mgo_sa_ges']="\
<ul>\
<li>Die beiden Magnesiumatome geben jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Sauerstoffmolekül stammenden beiden Sauerstoffatome nehmen \
    jeweils zwei Elektronen auf.\
<li>Insgesamt gehen also vier Elektronen vom Reduktionsmittel (hier Magnesium) direkt auf das \
    Oxidationsmittel (hier Sauerstoff) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Magnesiumiumionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Oxidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//##############################################################################
//##                        Zink mit Brom                                     ##
//##############################################################################

//########################### Kugelmodell ######################################
textbausteine['znbr2_ku_ox']="\
<ul>\
<li>Das Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['znbr2_ku_red']="\
<ul>\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['znbr2_ku_ges']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromididionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Summenformel######################################
textbausteine['znbr2_sf_ox']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['znbr2_sf_red']="\
<ul>\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['znbr2_sf_ges']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Brom) direkt auf das \
    Oxidationsmittel (hier Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromididionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Strukturformel####################################
textbausteine['znbr2_st_ox']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['znbr2_st_red']="\
<ul>\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['znbr2_st_ges']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Schalenmodell ####################################
textbausteine['znbr2_sa_ox']="\
<ul>\
<li>Das eine Zinkatom gibt jeweils zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['znbr2_sa_red']="\
<ul>\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['znbr2_sa_ges']="\
<ul>\
<li>Das eine Zinkatom jeweils zwei Elektronen ab.\
<li>Die aus dem zweiatomigen Brommolekül stammenden beiden Bromatome nehmen \
    jeweils ein Elektron auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";
//##############################################################################
//##                        Verdängung Kupfer(II)-ionen mit Zink              ##
//##############################################################################

//########################### Kugelmodell ######################################
textbausteine['zncu_ku_ox']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['zncu_ku_red']="\
<ul>\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Kupfer(II)-ionen wirken hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['zncu_ku_ges']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Kupfer(II)-ionen) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier elementares Kupfer) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Summenformel######################################
textbausteine['zncu_sf_ox']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['zncu_sf_red']="\
<ul>\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Kupfer(II)-ionen wirken hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['zncu_sf_ges']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Kupfer(II)-ionen) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier elementares Kupfer) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Strukturformel####################################
textbausteine['zncu_st_ox']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['zncu_st_red']="\
<ul>\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Kupfer(II)-ionen wirken hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['zncu_st_ges']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Kupfer(II)-ionen) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier elementares Kupfer) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";
//########################### Schalenmodell ####################################
textbausteine['zncu_sa_ox']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Zink wirkt hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['zncu_sa_red']="\
<ul>\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Kupfer(II)-ionen wirken hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['zncu_sa_ges']="\
<ul>\
<li>Das Zinkatom gibt zwei Elektronen ab.\
<li>Das Kupfer(II)-ion nimmt zwei Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Zink) direkt auf das \
    Oxidationsmittel (hier Kupfer(II)-ionen) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier Zink(II)-ionen) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier elementares Kupfer) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//##############################################################################
//##                        Verdängung Iodidionen mit Brom                    ##
//##############################################################################

//########################### Kugelmodell ######################################
textbausteine['ibr_ku_ox']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Iodidionen wirken hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['ibr_ku_red']="\
<ul>\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen \
    jeweils ein Elektronen auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['ibr_ku_ges']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen jeweils ein Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Iodidionen) direkt auf das \
    Oxidationsmittel (hier elementares Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier elementares Iod) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Summenformel######################################
textbausteine['ibr_sf_ox']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Iodidionen wirken hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['ibr_sf_red']="\
<ul>\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen \
    jeweils ein Elektronen auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['ibr_sf_ges']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen jeweils ein Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Iodidionen) direkt auf das \
    Oxidationsmittel (hier elementares Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier elementares Iod) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Strukturformel####################################
textbausteine['ibr_st_ox']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Iodidionen wirken hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['ibr_st_red']="\
<ul>\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen \
    jeweils ein Elektronen auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['ibr_st_ges']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen jeweils ein Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Iodidionen) direkt auf das \
    Oxidationsmittel (hier elementares Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier elementares Iod) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";

//########################### Schalenmodell ####################################
textbausteine['ibr_sa_ox']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Iodidionen wirken hier also als <span class='gruen'>Reduktionsmittel</span>, \
    welches selbst oxidiert wird.\
<li>Dies entspricht der Oxidations-Teilreaktion.\
</ul>";
textbausteine['ibr_sa_red']="\
<ul>\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen \
    jeweils ein Elektronen auf.\
<li>Brom wirkt hier also als <span class='rot'>Oxidationsmittel</span>, \
    welches selbst reduziert wird.\
<li>Dies entspricht der Reduktions-Teilreaktion.\
</ul>";
textbausteine['ibr_sa_ges']="\
<ul>\
<li>Die zwei Iodidionen geben jeweils ein Elektron ab.\
<li>Die beiden aus dem zweiatomigen Brommolekül stammenden Bromatome nehmen jeweils ein Elektronen auf.\
<li>Insgesamt gehen also zwei Elektronen vom Reduktionsmittel (hier Iodidionen) direkt auf das \
    Oxidationsmittel (hier elementares Brom) über. In der Gesamtgleichung (= Redoxgleichung) \
    kommen niemals freie Elektronen vor!\
<li>Bei einer Redoxreaktion finden immer eine Oxidations- und eine \
    Reduktionsteilreaktion aneinander gekoppelt statt. \
<li>Es wird immer ein <span class='gruen'>Reduktionsmittel 1</span> mit \
    einem <span class='rot'>Oxidationsmittel 2</span> oxidiert, wobei als Endstoffe \
    ein korrespondierendes <span class='rot'>Oxidationsmittel 1</span> \
    (hier elementares Iod) und \
    ein korrespondierendes <span class='gruen'>Reduktionsmittel 2</span> \
    (hier Bromidionen) entstehen. \
    Insgesamt sind an einer Redoxreaktion also immer zwei korrespondierende \
    Redoxpaare beteiligt.\
</ul>";
