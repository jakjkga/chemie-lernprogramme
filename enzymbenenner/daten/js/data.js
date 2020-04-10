var enzymsammlung={
    'enzym':[
         '&nbsp;', //Substrat
         '&nbsp;', //Wirkung
         '&nbsp;', //Endung
         'Enzym',  //WP-Linkbegriff
         '&nbsp;', //allgemeine Wirkungsweise
         '&nbsp;',  //spezielle Wirkungsweise
         ],
     'ethanaloxidase':[
         'Ethanal', //Substrat
         'oxid', //Wirkung
         'ase', //Endung
         'Aldehyd-Dehydrogenasen',  //WP-Linkbegriff
         '<strong>Oxidoreduktasen</strong> katalysieren Redoxreaktionen.<br>\
          <strong>Oxidasen</strong> fördern die Umwandlung der reduzierten Form des Substrats \
          in die oxidierte Form des Substrats als Produkt.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Ethanal</span> (ein Aldehyd) wird zur <span class="t_prod">Ethansäure</span> (einer Carbonsäure) oxidiert.<br>\
          Das aus dem Abbau von Ethanol stammende Ethanal (Acetyldehyd) kann somit entgiftet werden.',  //spezielle Wirkungsweise
         ],
     'glucoseoxidase':[
         'Glucose', //Substrat
         'oxid', //Wirkung
         'ase', //Endung
         'Glucose-Oxidase',  //WP-Linkbegriff
         '<strong>Oxidoreduktasen</strong> katalysieren Redoxreaktionen.<br>\
          <strong>Oxidasen</strong> fördern die Umwandlung der reduzierten Form des Substrats \
          in die oxidierte Form des Substrats als Produkt.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Glucose</span> (bzw. dessen Aldehydgruppe) wird zur <span class="t_prod">Gluconsäure</span> (bzw. deren Carboxylgruppe) oxidiert.<br>\
          Im Rahmen des Glucose-Oxidase-Tests (GOD-Test) wird überprüft, ob im Urin Glucose vorhanden ist, was mittels des Nebenprodukts Wasserstoffperoxid eine Farbreaktion hervorrufen würde und einen Hinweis auf das Vorliegen der „Zuckerkrankheit“ (<em>Diabetes mellitus</em>) liefert.',  //spezielle Wirkungsweise
         ],
     'ethanoldehydrogenase':[
         'Ethanol', //Substrat
         'dehydrogen', //Wirkung
         'ase', //Endung
         'Alkoholdehydrogenase',  //WP-Linkbegriff
         '<strong>Oxidoreduktasen</strong> katalysieren Redoxreaktionen.<br>\
          <strong>Oxidasen</strong> fördern die Umwandlung der reduzierten Form des Substrats \
          in die oxidierte Form des Substrats als Produkt. \
          Eine formale Wasserstoffabgabe (⇒ „dehydrogen“) ist ein Spezialfall einer Oxidation.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Ethanol</span> (ein primärer Alkohol) wird zu <span class="t_prod">Ethanal</span> (Acetyldehyd, einem Aldehyd) oxidiert.<br>\
          Dieser Schritt läuft im menschlichen Körper beim Alkoholabbau statt.<br>\
          Zusätzlich kann das gleiche Enzym auch die Rückreaktion fördern, etwa beim Reduktionsschritt im Rahmen der alkoholischen Gärung. Man würde das gleiche Enzym dann aber besser als Ethanalreduktase bezeichnen.',  //spezielle Wirkungsweise
         ],
     'homogentisatdioxygenase':[
         'Homogentisat', //Substrat
         'dioxygen', //Wirkung
         'ase', //Endung
         'Homogentisatdioxygenase',  //WP-Linkbegriff
         '<strong>Oxidoreduktasen</strong> katalysieren Redoxreaktionen.<br>\
          <strong>Oxidasen</strong> fördern die Umwandlung der reduzierten Form des Substrats \
          in die oxidierte Form des Substrats als Produkt. \
          Eine formale Sauerstoffaufnahme (⇒ „(di)oxygen“) ist ein Spezialfall einer Oxidation.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Homogentisinsäure</span> (Homogentisat) wird zur <span class="t_prod">4-Maleylacetatessigsäure</span> oxidiert.<br>\
          Dieser Reaktionsschritt spielt eine Schlüsselrolle beim Abbau der Aminosäuren Phenylalanin und Tyrosin. Ein Gendefekt des Homogentisatdioxygenase-Gens führt zum Krankheitsbild der Alkaptonurie, bei dem das schwarzbraune oxidierte Alkapton mit dem Urin ausgeschieden wird. Auch Gichtähnliche Symptome treten durch Ablagerungen in den Gelenken auf.',  //spezielle Wirkungsweise
         ],
     'ethanalreduktase':[
         'Ethanal', //Substrat
         'redukt', //Wirkung
         'ase', //Endung
         'Ethanol',  //WP-Linkbegriff
         '<strong>Oxidoreduktasen</strong> katalysieren Redoxreaktionen.<br>\
          <strong>Reduktasen</strong> fördern die Umwandlung der oxidierten Form des Substrats \
          in die reduzierte Form des Substrats als Produkt.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Ethanal</span> (Acetaldehyd, ein Aldehyd) wird zu <span class="t_prod">Ethanol</span> (einem Alkohol) reduziert.<br>\
         Die findet unter Verbrauch von Reduktionsäquivalenten <span class="t_subs" title="Co-Substrat">NADH₂⁺</span> im \
         Reduktionsschritt im Verlauf der alkoholischen Gärung statt.<br>\
         Zusätzlich kann das gleiche Enzym aber auch die Rückreaktion fördern, \
         man würde es dann aber besser als Ethanoldehydrogenase oder allgemein \
         als Ethanoloxidase bezeichnen',  //spezielle Wirkungsweise
         ],
     'glucokinase':[
         'Gluco', //Substrat
         'kin', //Wirkung
         'ase', //Endung
         'Glucokinase',  //WP-Linkbegriff
         '<strong>Transferasen</strong> fördern die Übertragung bestimmter Gruppen auf ein Substrat \
          (wie z.B. von Phosphatgruppen im Falle der <strong>Kinasen</strong>). <br>\
          Die Umkehrreaktion, die Abspaltung von Phosphatgruppen dagegen wird \
          von Phosphatasen katalysiert, die eher zu den Hydrolasen gehören.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Glucose</span> wird unter ATP-Verbrauch zum Produkt <span class="t_prod">Glucose-6-phosphat</span> phosphoryliert.<br>\
          Die zusätzlich eingefügte Phosphatgruppe dient meist der Aktivierung \
          für einen nachfolgenden weiteren Stoffwechselschritt, \
          z.B. beim Glucose-Abbau zu Beginn der Glykolyse aber auch bei der \
          Glucose-Speicherung in Form von Glycogen.',  //spezielle Wirkungsweise
         ],
     'lipase':[
         'Lip', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Lipasen',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Esterasen</strong> spalten bei der Esterhydrolyse Esterbindungen in Carbonsäuren und Alkohol auf.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Fett</span> (Triglycerid, Lipid) wird unter Wasserverbrauch in die Bestandteile <span class="t_prod">Glycerin</span> und <span class="t_prod">Fettsäuren</span> (langkettige Carbonsäuren mit geradzahliger Kohlenstoffatomanzahl) gespalten.',  //spezielle Wirkungsweise
         ],
     'cholinesterase':[
         'Cholinester', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Acetylcholinesterase',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Esterasen</strong> spalten bei der Esterhydrolyse Esterbindungen in Carbonsäuren und Alkohol auf.', //allgemeine Wirkungsweise
         'Der Neurotransmitter <span class="t_subs">(Acetyl-)Cholinester</span> wird unter Einbau von Wasser in <span class="t_prod">Essigsäure</span> (Acetat) und <span class="t_prod">Cholin</span> (einen Alkohol) gespalten.<br>\
         Das Cholin wird anschließend wieder in den Axonenknoten aufgenommen und dort in Vesikeln wieder verestert, so dass der Neurotransmitter Acetylcholin(ester) dann erneut in den synaptischen Spalt ausgeschüttet werden kann.',  //spezielle Wirkungsweise
         ],
     'dnanuklease':[
         'DNA-Nukle', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Phosphatasen',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Phosphatasen</strong> spalten bei der Hydrolyse Phosphorsäureesterbindungen, so dass Phosphatgruppen abgespalten werden. Dies entspricht der Umkehrreaktion der Kinasen (s. Transferasen).', //allgemeine Wirkungsweise
         '<strong>Nukleasen</strong> sind spezielle Phosphatasen (und somit auch Esterasen), die als Substrat die <span class="t_subs">Nukleinsäure DNA</span> in einzelne <span class="t_prod">Nukleotide</span> spalten, indem sie die Phosphorsäureesterbindungen der Kohlenhydrat-Phosphat-Seitenketten unter Wasserverbrauch spalten.',  //spezielle Wirkungsweise
         ],
     'amylase':[
         'Amyl', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Amylasen',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Glycosidasen</strong> spalten glykosidische Bindungen (meist Vollacetale) von Poly- und Disacchariden, \
          wobei dann Monosaccharide entstehen.', //allgemeine Wirkungsweise
         'Das Polysaccharid <span class="t_subs">Amylose</span> (unverzweigte Stärke) wird unter Wasserverbrauch zu <span class="t_prod">Maltose</span> und <span class="t_prod">Glucose</span> abgebaut.',  //spezielle Wirkungsweise
         ],
     'lactase':[
         'Lact', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Lactase',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Glycosidasen</strong> spalten glykosidische Bindungen (meist Vollacetale) von Poly- und Disacchariden, \
          wobei dann Monosaccharide entstehen.', //allgemeine Wirkungsweise
         'Das Disaccharid <span class="t_subs">Lactose</span> (Milchzucker) wird unter Wasserverbrauch in die Monosaccharide <span class="t_prod">Galactose</span> (Schleimzucker) und <span class="t_prod">Glucose</span> gespalten.<br>\
         Ein Gendefekt kann zur Lactoseintoleranz (Milchuckerunverträglichkeit) führen, da dann die Lactose nicht gespalten wird und nicht im Dünndarm aufgenommen werden kann und in den Dickdarm gelangt, was nach dortigen Gärungsvorgängen zu Verdauungsproblemen führt.',  //spezielle Wirkungsweise
         ],
     'pepsin':[
         '<span style="color:black;" title="Ausnahme: von griech. pepsis: das Kochen">Peps</span>', //Substrat
         '', //Wirkung
         '<span style="color:black;" title="Ausnahme: Endung -in wie viele andere Proteine">in</span>', //Endung
         'Pepsin',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Peptidasen</strong> spalten Peptidbindungen (allgemein: Säureamidbindungen) wobei Aminosäuren (allgemein Carbonsäuren und Amine oder Ammoniak) entstehen.', //allgemeine Wirkungsweise
         '<span class="t_subs">Proteine</span> (Polypeptide) werden im Magen in <span class="t_prod">Aminosäuren</span> (und Oligopeptide) gespalten.<br>\
          Das pH-Optimum des Pepsins liegt daher im stark sauren Bereich zwischen ca. 1,5 bis 3.',  //spezielle Wirkungsweise
         ],
     'urease':[
         'Ure', //Substrat
         '', //Wirkung
         'ase', //Endung
         'Urease',  //WP-Linkbegriff
         '<strong>Hydrolasen</strong> fördern die Spaltung (ggfs. langkettiger) Substrate unter Einbau von Wasser.<br>\
          <strong>Amidasen</strong> spalten Säureamidbindungen Carbonsäuren und Amine entstehen.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Harnstoff</span> (Urea) wird in <span class="t_prod">Kohlenstoffdioxid</span> und <span class="t_prod">Ammoniak</span> gespalten.<br>\
          Urease kommt in Bodenbakterien vor und spielt eine wichtige Rolle im Stickstoffkreislauf.',  //spezielle Wirkungsweise
         ],
     'rubisco':[
         'Ribulose', //Substrat
         'carboxyl', //Wirkung
         'ase', //Endung
         'RuBisCO',  //WP-Linkbegriff
         '<strong>Lyasen</strong> katalysieren nichthydrolytische Spaltungs- aber auch Anlagerungsreaktionen.<br>\
          <strong>Carboxylasen</strong> fördern die Bindung von Kohlenstoffdioxid an ein Substrat.', //allgemeine Wirkungsweise
         'Der CO₂-Akzeptor <span class="t_subs">Ribulose</span> (genauer: Ribulose-1,5-bisphosphat) bindet im \
          Fixierungsschritt des Calvin-Zyklus <span class="t_subs" title="Cosubstrat">Kohlenstoffdioxid</span> unter Bildung einer instabilen <span class="t_prod">C6-Verbindung</span>.',  //spezielle Wirkungsweise
         ],
     'pyruvatdecarboxylase':[
         'Pyruvat', //Substrat
         'decaboxyl', //Wirkung
         'ase', //Endung
         'Pyruvatdecarboxylase',  //WP-Linkbegriff
         '<strong>Lyasen</strong> katalysieren nichthydrolytische Spaltungs- oder Anlagerungsreaktionen.<br>\
          <strong>Decarboxylasen</strong> fördern die Abspaltung von Kohlenstoffdioxid von einem Substrat.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Brenztraubensäure</span> (Pyruvat) wird in <span class="t_prod">Ethanal</span> (Acetaldehyd)\
          und <span class="t_prod">Kohlenstoffdioxid</span> gespalten.<br>\
          Dieser Decarboxylierungsschritt findet z.B. während der alkoholischen Gärung statt.',  //spezielle Wirkungsweise
         ],
     'glucoseisomerase':[
         'Glucose', //Substrat
         'isomer', //Wirkung
         'ase', //Endung
         'Glucose-6-phosphat-Isomerase',  //WP-Linkbegriff
         '<strong>Isomerasen</strong> erleichtern die Umwandlung von Isomeren ineinander.<br>\
          Ein Beispiel ist die Keto-enol-Tautomerie bei Monosacchariden zwischen der\
          Aldose und der entsprechenden Ketose.', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">Glucose</span> (genauer: Glucose-6-phosphat) wird in das Isomer\
          <span class="t_prod">Fructose</span> (genauer: Fructose-6-phosphat) umgewandelt.<br>\
          Diese Umwandlung spielt eine Rolle beim Glucose-Abbau im Rahmen der Glykolyse.',  //spezielle Wirkungsweise
         ],
     'retinalisomerase':[
         'Retinal', //Substrat
         'isomer', //Wirkung
         'ase', //Endung
         'Retinal',  //WP-Linkbegriff
         '<strong>Isomerasen</strong> erleichtern die Umwandlung von Isomeren ineinander.<br>\
          Ein Beispiel ist die Umwandlung von E/Z-Isomeren (vereinfacht: cis/trans-Isomeren).', //allgemeine Wirkungsweise
         'Das Substrat <span class="t_subs">11-cis-Retinal</span> wird umgewandelt in <span class="t_prod">alltrans-Retinal</span>.<br>\
          Dies dient in den Stäbchenzellen der Netzhaut der Regeneration von \
          alltrans-Retinal, das dann durch erneute Belichtung\
          wieder zu 11-cis-Retinal reagiert.',  //spezielle Wirkungsweise
         ],
     'dnaligase':[
         'DNA-', //Substrat
         'Lig', //Wirkung
         'ase', //Endung
         'DNA-Ligase',  //WP-Linkbegriff
         '<strong>Ligasen</strong> verknüpfen unter ATP-verbrauch Monomere miteinander.<br>\
          Falls Nukleotide zu Nukleinsäuren verknüpft werden, so entspricht dies\
          der Umkehrreaktion der von den Nukleasen geförderten Hydrolyse.', //allgemeine Wirkungsweise
         'Aus Hydroxygruppen des Desoxyribose-Rests eines <span class="t_prod">Nukleotids</span> werden mit Phosphatgruppen eines anderen Nukleotidbausteins Phosphorsäureesterbindung unter Abspaltung von Wasser (Kondensationsreaktion) genüpft, so dass langkettige <span class="t_prod">Nukleinsäuren</span> entstehen.<br>\
         Dies entspricht einer Esterbildung und somit der Umkehrung einer Esterhydrolyse.\
         Neben der DNA-Replikation während der Synthesephase werden auch bei \
         Reparaturen, z.B. nach Sonneneinstrahlung Strangbrüche wieder geschlossen. \
         Auch in der Gentechnik kann man so Genfragmente miteinander verbinden.',  //spezielle Wirkungsweise
         ]
}
