var starttext="\
Wähle oben die Indices aus!";

textbausteine=new Array();

//##############################################################################
//##                                1 C-Atom                                  ##
//##############################################################################
// 1 C-Atom, kein O-Atom  ######################################################
textbausteine['C1H4']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₄</td>\
<td><a href='http://de.wikipedia.org/wiki/Methan' target='_blank'>Methan</a></td>\
<td>Alkan</td>\
</tr>\
</table>";
// 1 C-Atom, 1 O-Atom  #########################################################
textbausteine['C1H4O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Methanol' target='_blank'>Methanol</a><br>(≙ Holzgeist)</td>\
<td>primärer Alkohol</td>\
</tr>\
</table>";
textbausteine['C1H2O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂O</td>\
<td><a href='http://de.wikipedia.org/wiki/Formaldehyd' target='_blank'>Methanal</a><br>(≙ Formaldehyd)</td>\
<td>Aldehyd</td>\
</tr>\
</table>";
// 1 C-Atom, 2 O-Atome  ########################################################
textbausteine['C1H4O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂(OH)OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Aldehydhydrate' target='_blank'>Methanalhydrat</a></td>\
<td>Hydrat (instabil: zerfällt zu Methanal und Wasser)</td>\
</tr>\
</table>";
textbausteine['C1H2O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>HC(=O)OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Ameisens%C3%A4ure' target='_blank'>Methansäure</a><br>(≙ Ameisensäure)</td>\
<td>Carbonsäure, Aldehyd</td>\
</tr>\
</table>";
//##############################################################################
//##                                2 C-Atome                                 ##
//##############################################################################
// 2 C-Atome, kein O-Atom  #####################################################
textbausteine['C2H6']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethan' target='_blank'>Ethan</a></td>\
<td>Alkan</td>\
</tr>\
</table>";
textbausteine['C2H4']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethen' target='_blank'>Ethen</a></td>\
<td>Alken</td>\
</tr>\
</table>";
textbausteine['C2H2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH≡CH</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethin' target='_blank'>Ethin</a></td>\
<td>Alkin</td>\
</tr>\
</table>";
// 2 C-Atome, 1 O-Atom  ########################################################
textbausteine['C2H6O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethanol' target='_blank'>Ethanol</a><br>(≙ Ethylalkohol, Weingeist, Trinkalkohol (ugs.))</td>\
<td>primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃-O-CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Dimethylether' target='_blank'>Dimethyl-ether</a></td>\
<td>Ether</td>\
</tr>\
</table>";
textbausteine['C2H4O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Acetaldehyd' target='_blank'>Ethanal</a><br>(≙ Acetaldehyd)</td>\
<td>Aldehyd</td>\
</tr>\
<tr>\
<td>CH₂=CHOH</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethenol' target='_blank'>Ethenol</a></td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu Ethanal)</td>\
</tr>\
</table>";
// 2 C-Atome, 2 O-Atome  #######################################################
textbausteine['C2H6O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethylenglycol' target='_blank'>Ethan-1,2-diol</a><br>(≙ Ethylenglycol)</td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OCH₃)OH</td>\
<td><!--Methanal-methyl-halbacetal<br/>Methoxy-hydroxy-methan (<a href='http://www.acdlabs.com/iupac/nomenclature/79/r79_298.htm'>vgl.</a>)--></td>\
<td>Halbacetal (instabil: zerfällt zu Methanal und Methanol)</td>\
</tr>\
</table>";
textbausteine['C2H4O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃COOH</td>\
<td><a href='http://de.wikipedia.org/wiki/Essigs%C3%A4ure' target='_blank'>Ethansäure</a><br>(≙ Essigsäure)</td>\
<td>Carbonsäure</td>\
</tr>\
<tr>\
<td>HC(=O)OCH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Ameisens%C3%A4uremethylester' target='_blank'>Methansäure-methyl-ester</a></td>\
<td>Ester, Aldehyd</td>\
</tr>\
<tr>\
<td>CH(OH)-CHO</td>\
<td>2-Hydroxy-ethanal</td>\
<td>Aldehyd, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH(OH)=CHOH</td>\
<td>1,2-Dihydroxy-ethen</td>\
<td>&quot;zweiwertiger&quot; Alkohol, Alken (instabil: tautomerisiert zu 2-Hydroxy-ethanal)</td>\
</tr>\
</table>";
textbausteine['C2H2O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH(=O)CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Glyoxal' target='_blank'>Ethan-1,2-dial</a><br>(≙ Glyoxal, Oxalaldehyd)</td>\
<td>Aldehyd</td>\
</tr>\
</table>";
//##############################################################################
//##                                3 C-Atome                                 ##
//##############################################################################
// 3 C-Atome, kein O-Atom  #####################################################
textbausteine['C3H8']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Propan' target='_blank'>Propan</a></td>\
<td>Alkan</td>\
</tr>\
</table>";
textbausteine['C3H6']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Propen' target='_blank'>Propen</a></td>\
<td>Alken</td>\
</tr>\
</table>";
textbausteine['C3H4']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH⁡≡CH</td>\
<td><a href='http://de.wikipedia.org/wiki/Propin' target='_blank'>Propin</a></td>\
<td>Alkin</td>\
</tr>\
<tr>\
<td>CH₂=C=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Propadien' target='_blank'>Prop-1,2-dien</a></td>\
<td>(unverzweigtes) Alken (instabiler Sonderfall: Kumulen)</td>\
</tr>\
</table>";
// 3 C-Atome, 1 O-Atom  ########################################################
textbausteine['C3H8O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1-Propanol' target='_blank'>Propan-1-ol</a></td>\
<td>primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/2-Propanol' target='_blank'>Propan-2-ol</a></td>\
<td>sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂-O-CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethylmethylether' target='_blank'>Ethyl-methyl-ether</a></td>\
<td>Ether</td>\
</tr>\
</table>";
textbausteine['C3H6O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Propanal' target='_blank'>Propanal</a></td>\
<td>Aldehyd</td>\
</tr>\
<tr>\
<td>CH₃C(=O)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Aceton' target='_blank'>Propanon</a><br>(≙ Aceton)</td>\
<td>Keton</td>\
</tr>\
<tr>\
<td><a href='http://de.wikipedia.org/wiki/Allylalkohol' target='_blank'>CH₂=CHCH₂OH</a></td>\
<td>Prop-2-en-1-ol</td>\
<td>Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CH-O-CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/http://de.wikipedia.org/wiki/Methylvinylether' target='_blank'>Ethenyl-methyl-ether</a></td>\
<td>Ether, Alken</td>\
</tr>\
</table>";
textbausteine['C3H4O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂=CHCHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Acrolein' target='_blank'>Prop-2-en-1-al</a></td>\
<td>Aldehyd, Alken</td>\
</tr>\
<tr>\
<td>CH≡CCH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/Propargylalkohol' target='_blank'>Prop-2-in-1-ol</a></td>\
<td>primärer Alkohol, Alkin</td>\
</tr>\
<tr>\
<td>CH≡C-O-CH₃</td>\
<td>Ethinyl-methyl-ether</td>\
<td>Ether, Alkin</td>\
</tr>\
</table>";
textbausteine['C3H2O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂=CHCHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Acrolein' target='_blank'>Prop-2-en-al</a></td>\
<td>Carbonsäure, Alken</td>\
</tr>\
</table>";
// 3 C-Atome, 2 O-Atome  #######################################################
textbausteine['C3H8O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1,3-Propandiol' target='_blank'>Propan-1,3-diol</a></td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1,2-Propandiol' target='_blank'>Propan-1,2-diol</a></td>\
<td>&quot;zweiwertiger&quot; primärer und sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH(OH)OH</td>\
<td>Propanal-hydrat</td>\
<td>Hydrat (instabil: zerfällt zu Propanal und Wasser)</td>\
</tr>\
<tr>\
<td>CH₂(OCH₃)OCH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Dimethoxymethan' target='_blank'>Methanal-methyl-acetal</a><br/>Dimethoxy-methan (<a href='http://www.acdlabs.com/iupac/nomenclature/79/r79_298.htm'>vgl.</a>)</td>\
<td>(Voll-)Acetal (instabil: zerfällt zu Methanal und Methanol)</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂-O-CH₃</td>\
<td>(2-Hydroxy-ethyl)-methyl-ether<br>(≙ 2-Methoxy-ethanol)</td>\
<td>Ether, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)OCH₃</td>\
<td><!--Methanal-methyl-halbacetal<br/>-->Methoxy-hydroxy-ethan<!-- (<a href='http://www.acdlabs.com/iupac/nomenclature/79/r79_298.htm'>vgl.</a>)--></td>\
<td>Halbacetal (instabil: zerfällt zu Ethanal und Methanol)</td>\
</tr>\
</table>";
textbausteine['C3H6O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂COOH</td>\
<td><a href='http://de.wikipedia.org/wiki/Propions%C3%A4ure' target='_blank'>Propansäure</a><br>(≙ Propionsäure)</td>\
<td>Carbonsäure</td>\
</tr>\
<tr>\
<td>CH₃C(=O)OCH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Essigs%C3%A4uremethylester' target='_blank'>Ethansäure-methylester</a></td>\
<td>Ester</td>\
</tr>\
<tr>\
<td>CH(=O)OCH₂CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Ameisens%C3%A4ureethylester' target='_blank'>Methansäure-ethylester</a></td>\
<td>Ester</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CHO</td>\
<td>2-Hydroxy-propanal</td>\
<td>Aldehyd, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂CHO</td>\
<td>3-Hydroxy-propanal</td>\
<td>Aldehyd, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃C(=O)CH₂OH</td>\
<td>1-Hydroxy-propanon</td>\
<td>Keton, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂=CHC(OH)OH</td>\
<td>Prop-2-en-1-al-hydrat</td>\
<td>Hydrat (instabil: zerfällt zu Propal und Wasser</td>\
</tr>\
<tr>\
<td>CH₃-O-CH₂CHO</td>\
<td>2-Methoxy-ethanal<br>(≙ Ethanal-methylether)</td>\
<td>Aldehyd, Ether</td>\
</tr>\
</table>";
textbausteine['C3H4O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂=CHCOOH</td>\
<td><a href='http://de.wikipedia.org/wiki/Acryls%C3%A4ure' target='_blank'>Prop-2-en-säure</a></td>\
<td></td>\
</tr>\
</table>";
//##############################################################################
//##                                4 C-Atome                                 ##
//##############################################################################
// 4 C-Atome, kein O-Atom ######################################################
textbausteine['C4H10']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/N-Butan' target='_blank'>Butan</a></td>\
<td>(unverzweigtes) Alkan</td>\
</tr>\
<tr>\
<td>CH₃CH(CH₃)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Isobutan' target='_blank'>2-Methyl-propan</a></td>\
<td>(verzweigtes) Alkan</td>\
</tr>\
</table>";
textbausteine['C4H8']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH⁡=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Butene' target='_blank'>But-1-en</a></td>\
<td>(unverzweigtes) Alken</td>\
</tr>\
<tr>\
<td>CH₃CH=CH⁡CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Butene' target='_blank'>But-2-en</a></td>\
<td>(unverzweigtes) Alken</td>\
</tr>\
<tr>\
<td>CH₃C(CH₃)=⁡CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Butene' target='_blank'>2-Methyl-propen</a></td>\
<td>(verzweigtes) Alken</td>\
</tr>\
</table>";
textbausteine['C4H6']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₂=CHCH⁡=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/1,3-Butadien' target='_blank'>But-1,3-dien</a></td>\
<td>(unverzweigtes) Alken</td>\
</tr>\
<tr>\
<td>CH₃CH₂C≡CH</td>\
<td><a href='http://de.wikipedia.org/wiki/1-Butin' target='_blank'>But-1-in</a></td>\
<td>(unverzweigtes) Alkin</td>\
</tr>\
<tr>\
<td>CH₃C≡CCH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/2-Butin' target='_blank'>But-2-in</a></td>\
<td>(unverzweigtes) Alkin</td>\
</tr>\
<tr>\
<td>CH₃CH=C=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/1,2-Butadien' target='_blank'>But-1,2-dien</a></td>\
<td>(unverzweigtes) Alken (instabiler Sonderfall: Kumulen)</td>\
</tr>\
</table>";
// 4 C-Atome, 1 O-Atom ######################################################
textbausteine['C4H10O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1-Butanol' target='_blank'>Butan-1-ol</a></td>\
<td>primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH(OH)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/2-Butanol' target='_blank'>Butan-2-ol</a></td>\
<td>sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂-O-CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Methylpropylether' target='_blank'>Methyl-propyl-ether</a></td>\
<td>Ether</td>\
</tr>\
<tr>\
<td>CH₃CH₂-O-CH₂CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Diethylether' target='_blank'>Diethyl-ether</a></td>\
<td>Ether</td>\
</tr>\
<tr>\
<td>CH₃CH(CH₃)CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/2-Methyl-1-propanol' target='_blank'>2-Methyl-propan-1-ol</a></td>\
<td>primärer Alkohol, verzweigtes Alkan</td>\
</tr>\
<tr>\
<td>CH₃C(OH)(CH₃)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Tert-Butanol' target='_blank'>2-Methyl-propan-2-ol</a></td>\
<td>sekundärer Alkohol, verzweigtes Alkan</td>\
</tr>\
</table>";
textbausteine['C4H8O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Butanal' target='_blank'>Butanal</a></td>\
<td>Aldehyd</td>\
</tr>\
<tr>\
<td>CH₃CH₂C(=O)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/Butanon' target='_blank'>Butanon</a></td>\
<td>Keton</td>\
</tr>\
<tr>\
<td>CH₃CH=CHCH₂OH</td>\
<td>But-2-en-1-ol</td>\
<td>primärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHCH₂CH₂OH</td>\
<td>But-3-en-1-ol</td>\
<td>primärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHCH(OH)CH₃</td>\
<td>But-3-en-2-ol</td>\
<td>sekundärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₃CH=C(OH)CH₃</td>\
<td>But-2-en-2-ol</td>\
<td>sekundärer Alkohol, Alken (instabil: tautomerisiert zu Butanon)</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH=CH₂OH</td>\
<td>But-1-en-1-ol</td>\
<td>primärer Alkohol, Alken (instabil: tautomerisiert zu Butanal)</td>\
</tr>\
<tr>\
<td>CH₃CH₂-O-CH=CH₂</td>\
<td><a href='http://de.wikipedia.org/wiki/Ethylvinylether' target='_blank'>Ethenyl-ethyl-ether</a></td>\
<td>Ether, Alken</td>\
</tr>\
<tr>\
<td>CH₃CH=CH-O-CH₃</td>\
<td>(Prop-1-enyl)-methyl-ether</td>\
<td>Ether, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHCH₂-O-CH₃</td>\
<td>(Prop-2-enyl)-methyl-ether</td>\
<td>Ether, Alken</td>\
</tr>\
<tr>\
<td>CH₃C(CH₃)CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Isobutanal' target='_blank'>2-Methyl-propanal</a></td>\
<td>Aldehyd, verzweigtes Alkan</td>\
</tr>\
<tr>\
<td>CH₂=C(CH₃)CH₂OH</td>\
<td>2-Methyl-prop-2-en-1-ol</td>\
<td>primärer Alkohol, verzweigtes Alken</td>\
</tr>\
<tr>\
<td>CH₃C(CH₃)=CH(OH)</td>\
<td>2-Methyl-prop-1-en-1-ol</td>\
<td>primärer Alkohol, verzweigtes Alken (instabil: tautomerisiert zu 2-Methyl-propanal)</td>\
</tr>\
</table>";
textbausteine['C4H6O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH=CHCHO</td>\
<td>But-2-en-1-al</td>\
<td>Aldehyd, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHCH₂CHO</td>\
<td>But-3-en-1-al</td>\
<td>Aldehyd, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHC(=O)CH₃</td>\
<td>But-3-en-2-on</td>\
<td>Keton, Alken</td>\
</tr>\
<tr>\
<td>CH≡CCH₂CH₂OH</td>\
<td>But-3-in-1-ol</td>\
<td>primärer Alkohol, Alkin</td>\
</tr>\
<tr>\
<td>CH≡CCH(OH)CH₃</td>\
<td>But-3-in-3-ol</td>\
<td>sekundärer Alkohol, Alkin</td>\
</tr>\
<tr>\
<td>CH₃C≡CCH₂OH</td>\
<td>But-2-in-1-ol</td>\
<td>primärer Alkohol, Alkin</td>\
</tr>\
<tr>\
<td>CH₂=C=CHCH₂OH</td>\
<td>But-2,3-dien-1-ol</td>\
<td>primärer Alkohol, Alken (instabiler Sonderfall: Kumulen)</td>\
</tr>\
<tr>\
<td>CH₂=C(CH₃)CHO</td>\
<td>2-Methyl-prop-2-en-1-al</td>\
<td>Aldehyd, verzweigtes Alken</td>\
</tr>\
</table>";
textbausteine['C4H4O1']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃C≡CCHO</td>\
<td>But-2-in-1-al</td>\
<td>Aldehyd, Alkin</td>\
</tr>\
<tr>\
<td>CH≡CCH₂CHO</td>\
<td>But-3-in-1-al</td>\
<td>Aldehyd, Alkin</td>\
</tr>\
<tr>\
<td>CH≡CC(=O)CH₃</td>\
<td>But-3-in-2-on</td>\
<td>Keton, Alkin</td>\
</tr>\
<tr>\
<td>CH₂=C=CHCHO</td>\
<td>But-2,3-dien-1-al</td>\
<td>Aldehyd, Alken (instabiler Sonderfall: Kumulen)</td>\
</tr>\
</table>";
// 4 C-Atome, 2 O-Atome  #######################################################
textbausteine['C4H10O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH(OH)CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1,2-Butandiol' target='_blank'>Butan-1,2-diol</a></td>\
<td>primärer Alkohol, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH₂CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1,2-Butandiol' target='_blank'>Butan-1,3-diol</a></td>\
<td>primärer Alkohol, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂CH₂CH₂OH</td>\
<td><a href='http://de.wikipedia.org/wiki/1,4-Butandiol' target='_blank'>Butan-1,4-diol</a></td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH(OH)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/2,3-Butandiol' target='_blank'>Butan-2,3-diol</a></td>\
<td>&quot;zweiwertiger&quot; sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂CH(OH)OH</td>\
<td>Butanal-hydrat</td>\
<td>Hydrat (instabil: zerfällt zu Butanal und Wasser)</td>\
</tr>\
<tr>\
<td>CH₃C(OH)(CH₃)CH₂OH</td>\
<td>2-Methyl-propan-1,2-diol</td>\
<td>primärer Alkohol, tertiärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH(CH₃)CH₂OH</td>\
<td>2-Methyl-propan-1,3-diol</td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(CH₃)CH(OH)OH</td>\
<td>2-Methyl-propanal-hydrat</td>\
<td>Hydrat (instabil: zerfällt zu 2-Methyl-propanal und Wasser)</td>\
</tr>\
<tr>\
<td>...</td>\
<td></td>\
<td>mögliche Ether, Halb- und Vollacetale und -ketale sind hier nicht aufgeführt</td>\
</tr>\
</table>";
textbausteine['C4H8O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂CH₂COOH</td>\
<td><a href='http://de.wikipedia.org/wiki/Butters%C3%A4ure' target='_blank'>Butansäure</a><br>(≙ Buttersäure)</td>\
<td>Carbonsäure</td>\
</tr>\
<tr>\
<td>CH₃CH₂CH(OH)CHO</td>\
<td>2-Hydroxy-butanal</td>\
<td>Aldehyd, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH₂CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/3-Hydroxybutanal' target='_blank'>3-Hydroxy-butanal</a></td>\
<td>Aldehyd, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂CH₂CHO</td>\
<td>4-Hydroxy-butanal</td>\
<td>Aldehyd, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂C(=O)CH₂OH</td>\
<td>1-Hydroxy-butan-2-on</td>\
<td>Keton, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)C(=O)CH₃</td>\
<td><a href='http://de.wikipedia.org/wiki/3-Hydroxy-2-butanon' target='_blank'>3-Hydroxy-butan-2-on</a></td>\
<td>Keton, sekundärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂C(=O)CH₃</td>\
<td>4-Hydroxy-butan-2-on</td>\
<td>Keton, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₃CH₂C(OH)=CH(OH)</td>\
<td>But-1-en-1,2-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 2-Hydroxy-butanal oder 1-Hydroxy-butan-2-on)</td>\
</tr>\
<tr>\
<td>CH₃CH=C(OH)CH₂OH</td>\
<td>But-3-en-1,2-diol</td>\
<td>primärer Alkohol, sekundärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)CH=CH(OH)</td>\
<td>But-1-en-1,3-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 3-Hydroxy-butanal)</td>\
</tr>\
<tr>\
<td>CH₃C(OH)=CHCH₂OH</td>\
<td>But-2-en-1,3-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 4-Hydroxy-butan-2-on [die Ketten-Nummerierung kehrt sich dabei um])</td>\
</tr>\
<tr>\
<td>CH₂=CH(OH)CH₂CH₂OH</td>\
<td>But-3-en-1,3-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 4-Hydroxy-butan-2-on [die Ketten-Nummerierung kehrt sich dabei um])</td>\
</tr>\
<tr>\
<td>CH₃CH(OH)C(OH)=CH₂</td>\
<td>But-1-en-2,3-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 3-Hydroxy-butan-2-on)</td>\
</tr>\
<tr>\
<td>CH₃C(OH)=C(OH)CH₃</td>\
<td>But-2-en-2,3-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 3-Hydroxy-butan-2-on)</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH₂CH=CH(OH)</td>\
<td>But-1-en-1,4-diol</td>\
<td>Alkohol, Alken (instabil: tautomerisiert zu 4-Hydroxy-butanal)</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH=CHCH₂OH</td>\
<td>But-2-en-1,4-diol</td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₃CH₂C(=O)OCH₃</td>\
<td>Propansäure-methyl-ester</td>\
<td>Ester</td>\
</tr>\
<tr>\
<td>CH₃C(=O)OCH₂CH₃</td>\
<td>Ethansäure-ethyl-ester</td>\
<td>Ester</td>\
</tr>\
<tr>\
<td>CH(=O)OCH₂CH₂CH₃</td>\
<td>Methansäure-propyl-ester</td>\
<td>Ester</td>\
</tr>\
<tr>\
<td>CH₃CH(CH₃)COOH</td>\
<td>2-Methyl-propansäure</td>\
<td>Carbonsäure</td>\
</tr>\
<tr>\
<td>CH₃C(OH)(CH₃)CHO</td>\
<td>2-Hydroxy-2-methyl-propanal</td>\
<td>Aldehyd, tertiärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH(CH₃)CHO</td>\
<td>3-Hydroxy-2-methyl-propanal</td>\
<td>Aldehyd, primärer Alkohol</td>\
</tr>\
<tr>\
<td>CH₂C(CH₃)=CH(OH)</td>\
<td>Prop-1-en-1,3-diol</td>\
<td>&quot;zweiwertiger&quot; primärer Alkohol, Alken (instabil: tautomerisiert zu 3-Hydroxy-2-methyl-propanal)</td>\
</tr>\
<tr>\
<td>...</td>\
<td></td>\
<td>mögliche Ether, Halb- und Vollacetale und -ketale sind hier nicht aufgeführt</td>\
</tr>\
</table>";
textbausteine['C4H6O2']="\
<table class='ausgabetabelle'>\
<tr>\
<th>Halbstrukturformel</th>\
<th>Name</th>\
<th>Stoffklasse(n)</th>\
</tr>\
<tr>\
<td>CH₃CH₂C(=O)CHO</td>\
<td>Butan-2-on-1-al</td>\
<td>Aldehyd, Keton</td>\
</tr>\
<tr>\
<td>CH₃C(=O)CH₂CHO</td>\
<td>Butan-3-on-1-al</td>\
<td>Aldehyd, Keton</td>\
</tr>\
<tr>\
<td>CH(=O)CH₂CH₂CHO</td>\
<td>Butandial</td>\
<td>Aldehyd</td>\
</tr>\
<tr>\
<td>CH₃C(=O)C(=O)CH₃</td>\
<td>Butan-2,3-dion</td>\
<td>Keton</td>\
</tr>\
<tr>\
<td>CH₃CH=C(OH)CHO</td>\
<td>2-Hydroxy-but-2-en-1-al</td>\
<td>Aldehyd, Alkohol, Alken (instabil: tautomerisiert zu Butan-2-on-1-al)</td>\
</tr>\
<tr>\
<td>CH₂=CHCH(OH)CHO</td>\
<td>2-Hydroxy-but-3-en-1-al</td>\
<td>Aldehyd, primärer Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH₃C(OH)=CHCHO</td>\
<td>3-Hydroxy-but-2-en-1-al</td>\
<td>Aldehyd, Alkohol, Alken (instabil: tautomerisiert zu Butan-3-on-1-al)</td>\
</tr>\
<tr>\
<td>CH₂=C(OH)CH₂CHO</td>\
<td>3-Hydroxy-but-3-en-1-al</td>\
<td>Aldehyd, Alkohol, Alken (instabil: tautomerisiert zu Butan-3-on-1-al)</td>\
</tr>\
<tr>\
<td>CH₂(OH)CH=CHCHO</td>\
<td>4-Hydroxy-but-2-en-1-al</td>\
<td>Aldehyd, Alkohol, Alken</td>\
</tr>\
<tr>\
<td>CH(OH)=CHCH₂CHO</td>\
<td>4-Hydroxy-3-en-1-al</td>\
<td>Aldehyd, Alkohol, Alken (instabil: tautomerisiert zu Butandial)</td>\
</tr>\
<tr>\
<td>CH₃CH=CHCHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Crotons%C3%A4ure' target='_blank'>But-2-en-säure</a></td>\
<td>Carbonsäure, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHCH₂CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/3-Butens%C3%A4ure' target='_blank'>But-3-en-säure</a></td>\
<td>Carbonsäure, Alken</td>\
</tr>\
<tr>\
<td>CH₂=CHC(=O)OCH₃</td>\
<td>Propensäure-methyl-ester</td>\
<td>Exter, Alken</td>\
</tr>\
<tr>\
<td>CH₂=(CH₃)CHO</td>\
<td><a href='http://de.wikipedia.org/wiki/Methacryls%C3%A4ure' target='_blank'>2-Methyl-propensäure</a></td>\
<td>Carbonsäure, Alken</td>\
</tr>\
<tr>\
<td>CH(=O)CH(CH₃)CHO</td>\
<td>2-Methyl-propandial</td>\
<td>Aldehyd</td>\
</tr>\
<tr>\
<td>CH(OH)=C(CH₃)CHO</td>\
<td>3-Hydroxy-2-methyl-prop-2-en</td>\
<td>Aldehyd, Alkohol, Alken (instabil: tautomerisiert zu 2-Methyl-propandial)</td>\
</tr>\
</table>";
