var bausteintypen={
    'eins_mit_zwei':'Nur ein Monomer mit zwei verschiedenen funktionellen Gruppen',
    'eins_mit_eins':'Nur ein Monomer mit einer C-C-Doppelbindung',
    'zwei_mit_eins':'Zwei verschiedene Monomere mit jeweils zweimal der gleichen funktionellen Gruppe'
};

var verzweigungstypen={
    'linear':'Linear',
    'verwzeigt':'Verzweigt bzw. dreidimensional vernetzt'

}

/*
# Polymersammlung in der Form:
# Monomer:[
    'Name des Polymers',
    'Bausteintyp',
    'Verknüpfungsmechanismus,/-verfahren',
    'Funktionelle Gruppe an der Verknüpfungsstelle',
    'Verzweigungstyp'
)
*/

var polymere={
'1_lys_ala':[
    'Dipeptid aus Lysin und Alanin bzw. längerkettiges Polypeptid',
    'eins_mit_zwei',
    'Translation als 2. Teilschritt der Proteinbiosynthese (= Genxepression], Carbonsäureamidbildung (enzymatisch)',
    'Peptidbindung (= Sonderfall der Carbonsäureamidbindung)',
    'linear'
],
'2_ala_lys':[
    'Dipeptid aus Alanin und Lysin bzw. längerkettiges Polypeptid',
    'eins_mit_zwei',
    'Translation als 2. Teilschritt der Proteinbiosynthese (= Genxepression], Carbonsäureamidbildung (enzymatisch)',
    'Peptidbindung (= Sonderfall der Carbonsäureamidbindung)',
    'linear'
],
'3_adglucopyr':[
    'Amylose (unverzweigte Stärke) aus Maltose-Einheiten',
    'eins_mit_zwei',
    'Stärkebildung in Pflanzen (enzymatisch)',
    'Glykosidische Bindung (Sonderfall eines Vollacetals am C1)',
    'linear'
],
'3b_adenin_uracil':[
    'Ribonucleinsäure (RNA)',
    'eins_mit_zwei',
    'Transkription als 1. Teilschritt der Proteinbiosynthese (enzymatisch)',
    'Phosphorsäure(di)ester',
    'linear'
],
'3c_thymin_adenin':[
    'Desoxyribonucleinsäure (DNA)',
    'eins_mit_zwei',
    'Replikation der DNA im Verlauf des Zellzyklus (enzymatisch)',
    'Phosphorsäure(di)ester',
    'linear'
],
'4_bdglucopyr':[
    'Cellulose (Zellstoff) aus Cellobiose-Einheiten',
    'eins_mit_zwei',
    'Cellulose-Synthese in Pflanzen (enzymatisch)',
    'Glykosidische Bindung (Sonderfall eines Vollacetals am C1)',
    'linear'
],
'5_methylbutadien':[
    'Gummi (Vulkanisiertes Naturkautschuk)',
    'eins_mit_eins',
    'Polyterpensynthese in Pflanzen (enzymatisch) und künstliche Quervernetzung an den Doppelbindungsabschnitten über Disulfidbrücken',
    'C-C-Einfachbindung bzw. Disulfidbrücke',
    'vernetzt'
],
'6_cellulose_nitriersaeure':[
    'Cellulosenitrat (Nitrocellulose, Schießbaumwolle)',
    'eins_mit_zwei',
    'Cellulose-Synthese in Pflanzen (enzymatisch) und künstliche säurekatalysierte Veresterung der Hydroxygruppen mit Salpetersäure',
    'Glykosidische Bindung (Sonderfall eines Vollacetals) und Salpetersäureester (keine echten Nitrogruppen!)',
    'linear'
],
'7_ethen':[
    'Polyethen (PE)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'8_chlorethen':[
    'Polyvinylchlorid (PVC)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'9_tetrafluorethen':[
    'Polytetrafluorethylen (Teflon, PTFE)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'10_phenylethen':[
    'Polystyrol (PS)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'11_propen':[
    'Polypropen (Polypropylen, PP)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'12_acrylnitril':[
    'Polyacrylnitril (Textil-Kunstfasern, PAN)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'13_acrylsaeuremethylester':[
    'Polymethylmethacrylat (Plexiglas, PMMA)',
    'eins_mit_eins',
    'Radikalische Polymerisation (alternativ: Kationische Polymerisation)',
    'C-C-Einfachbindung',
    'linear'
],
'14_hexansaeure_diaminohexan':[
    'Polyamid 6.6 (Nylon)',
    'zwei_mit_eins',
    'Säurekatalysierte Carbonsäureamidbildung',
    'Carbonsäureamid',
    'linear'
],
'15_aminohexansaeure':[
    'Polyamid 6 (Perlon)',
    'eins_mit_zwei',
    'Säurekatalysierte Carbonsäureamidbildung',
    'Carbonsäureamid',
    'linear'
],
'16_terephthalsaeure_ethandiol':[
    'Polyethylenterephthalat (PET)',
    'zwei_mit_eins',
    'Säurekatalysierte Veresterung',
    'Ester',
    'linear'
],
'17_harnstoff_formaldehyd':[
    'Aminoplast (Resamin)',
    'zwei_mit_eins',
    'Erst säurekatalysierte Halbaminalbildung, dann Dehydratisierung (Eliminierung von Wasser)',
    'Methylenbrücken',
    'vernetzt'
],
'18_diisocyanatohexan_butandiol':[
    'Polyurethan (PU)',
    'zwei_mit_eins',
    'Säurekatalysierte Urethanbildung',
    'Carbamat (Kombination aus Carbonsäureamid und Ester)',
    'linear'
]
}
