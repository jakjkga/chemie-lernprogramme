/*
# Elementsammlung in der Form:
# Elementsymbol:
#               Name
#  - Teilcheneigenschaften:
#               Ordnungszahl/Protonenzahl/Gesamtelektronenzahl
#               Neutronenzahl
#               Valenzelektronenzahl/Hauptgruppennummer
#               Hauptquantenzahl/Nummer der Valenzschale
#               Struktur
#  - Stoffeigenschaften:
#               Farbe
#               Zustand
#               ggfs. Vektorgrafikinformationen zur Elektronenbesetzung
*/

var elemente={
//#        Name               p+/e-  n       val-e-  schale   atomradius EN
'H':    ['Wasserstoff',     1,     0,      1,      'K',       37,         2.2,   
         'Einzelne zweiatomige Moleküle', 'Farblos', 'Gasförmig'],
'He':   ['Helium',          2,     2,      2,      'K',  'nicht vergleichbar', 'nicht definiert', 
         'Einzelne Atome', 'Farblos', 'Gasförmig'],
'Li':   ['Lithium',         3,     4,      1,      'L',       152,         1.0,   
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend', 'Fest'],
'Be':   ['Beryllium',       4,     5,      2,      'L',       112,         1.5,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend',  'Fest'],
'B':    ['Bor',             5,     6,      3,      'L',       88,         2.0,
         'Makromoleküle aus vielen Atomen bzw. Atomgitter', 'Schwarz', 'Fest'],
'C':    ['Kohlenstoff',     6,     6,      4,      'L',       77,         2.5,
         'Makromolekülschichten aus vielen Atomen bzw. Atomgitter',      'Schwarz bzw. farblos', 'Fest'],
'N':    ['Stickstoff',      7,     7,      5,      'L',       70,         3.1,
         'Einzelne zweiatomige Moleküle', 'Farblos', 'Gasförmig'],
'O':    ['Sauerstoff',      8,     8,      6,      'L',       66,         3.5,
         'Einzelne zweiatomige Moleküle', 'Farblos', 'Gasförmig'],
'F':    ['Fluor',           9,     10,     7,      'L',       64,         4.1,
         'Einzelne zweiatomige Moleküle', 'Farblos bis schwachgelb', 'Gasförmig'],
'Ne':   ['Neon',            10,    10,     8,      'L', 'nicht vergleichbar', 'nicht definiert',
         'Einzelne Atome', 'Farblos', 'Gasförmig'],
'Na':   ['Natrium',         11,    12,     1,      'M',       186,         1.0,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend',  'Fest'],
'Mg':   ['Magnesium',       12,    12,     2,      'M',       160,         1.2,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend',  'Fest'],
'Al':   ['Aluminium',       13,    14,     3,      'M',       143,         1.5,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend',  'Fest'],
'Si':   ['Silicium',        14,    14,     4,      'M',       117,         1.7,
         'Makromoleküle aus vielen Atomen bzw. Atomgitter', 'Dunkelgrau glänzend', 'Fest'],
'P':    ['Phosphor',        15,    16,     5,      'M',       110,         2.1,
         'Molekülgitter aus vieratomiges Molekülen', 'Weiß', 'Fest'],
'S':    ['Schwefel',        16,    16,     6,      'M',       104,         2.4,
         'Molekülgitter aus achtatomigen Molekülen', 'Gelb', 'Fest'],
'Cl':   ['Chlor',           17,    18,     7,      'M',       99,         2.8,
         'Einzelne zweiatomige Moleküle', 'Grün', 'Gasförmig'],
'Ar':   ['Argon',           18,    22,     8,      'M', 'nicht vergleichbar', 'nicht definiert',
         'Einzelne Atome',  'Farblos', 'Gasförmig'],
'K':    ['Kalium',          19,    20,     1,      'N',       231,         0.9,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend', 'Fest'],
'Ca':   ['Calcium',         20,    20,     2,      'N',       197,         1.0,
         'Metallkationengitter mit Elektronengas', 'Silbrig glänzend', 'Fest']
}
