var alle_elemente=[
/* 1. Periode */
'H', 'He', 
/* 2. Periode */
'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
/* 3. Periode */
'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
/* 4. Periode */
'K', 'Ca', 
'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr',
/* 5. Periode */
'Rb', 'Sr',
'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
'In', 'Sn', 'Sb', 'Te', 'I', 'Xe',
/* 6. Periode */
'Cs', 'Ba',
'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb',
'Lu', 'Hf', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn',
/* 7. Periode */
'Fr', 'Ra', 
'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No',
'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn',

/*TODO: Erweiterung um die Elemente des p-Blocks mit n=7 */

]

var vereinfachungen_hinweis='\
Die nach oben zeigende Energieachse ist nicht dargestellt, da die Abstände zwischen den Energieniveaus nicht maßstäblich verlaufen. Mit dem Beginn jeder neuen Zeile im PSE (s. gestrichelte waagrechte Linien) müsste hier ein viel größerer Abstand eingefügt werden, der von n=1 bis n=7 stark abnimmt. Beachte, dass es ab der <span title="auch „4. Energiestufe“, jedoch nicht zwingend gleichbedeutend mit einer Hauptquantenzahl n=4 ">„4. Schale“</span> zu Überschneidungen von Orbitalen verschiedener Hauptquantenzahlen kommt! Im <a href="http://de.wikipedia.org/wiki/Erweitertes_Periodensystem" target="_blank">erweiterten Periodensystem</a> mögliche g-Orbitale sind hier nicht gar berücksichtigt. Abbildungen zu den verschiedenen Orbitaltypen findet man auf der Seite <a href="http://www.ptable.com/" target="_blank">ptable</a>\
';

var ausnahmen_hinweise={
/* d-Block */
'Cr':'müssten die mit fünf Elektronen halb besetzten 3d-Orbitale energetisch unterhalb des einfach besetzten 4s-Orbitals liegen.', 
'Cu':'müssten die mit zehn voll besetzten 3d-Orbitale energetisch unterhalb des einfach besetzten 4s-Orbitals liegen.', 
'Nb':'müssten die mit vier Elektronen besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.', 
'Mo':'müssten die mit fünf Elektronen halb besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.',
'Tc':'müssten die mit sechts Elektronen besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.', 
'Ru':'müssten die mit sieben Elektronen besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.', 
'Rh':'müssten die mit acht Elektronen besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.', 
'Pd':'müssten die mit zehn Elektronen voll besetzten 4d-Orbitale energetisch unterhalb des unbesetzten 5s-Orbitals liegen.', 
'Ag':'müssten die mit zehn Elektronen voll besetzten 4d-Orbitale energetisch unterhalb des einfach besetzten 5s-Orbitals liegen.',
'Pt':'müssten die mit neun Elektronen besetzten 5d-Orbitale ebenso wie die mit vierzehn Elektronen vollbesetzten 4f-Orbitale energetisch unterhalb des einfach besetzten 6s-Orbitals liegen.', 
'Au':'müssten die mit zehn Elektronen voll besetzten 5d-Orbitale ebenso wie die mit vierzehn Elektronen vollbesetzten 4f-Orbitale energetisch unterhalb des einfach besetzten 6s-Orbitals liegen.', 
/* f-Block */
'La':'müsste das mit einem Elektron besetzte 5d-Orbital energetisch unterhalb der unbesetzten 4f-Orbitale liegen.',
'Gd':'sind die mit sieben Elektronen halb besetzten 4f-Orbitale energetisch besonders günstig.',
'Ac':'müsste das mit einem Elektron besetzte 6d-Orbital energetisch unterhalb der unbesetzten 5f-Orbitale liegen.', 
'Th':'müsste das mit zwei Elektronen besetzte 6d-Orbital energetisch unterhalb der unbesetzten 5f-Orbitale liegen.',
'Pa':'liegen die 5f-Orbitale und die 6d-Orbitale energetisch sehr eng beieinander.', 
'U':'liegen die 5f-Orbitale und die 6d-Orbitale energetisch sehr eng beieinander.', 
'Np':'liegen die 5f-Orbitale und die 6d-Orbitale energetisch sehr eng beieinander.', 
'Cm':'sind die mit sieben Elektronen halb besetzten 5f-Orbitale energetisch besonders günstig.', 
}

var ausnahmen=[
/* d-Block */
'Cr', 'Cu', 
'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag',
'Pt', 'Au', 
/* f-Block */
'La', 'Gd',
'Ac', 'Th','Pa', 'U', 'Np', 'Cm', 
]

var ausnahmen_elektronen={
/* d-Block */
'Cr':[/*20*/ 21,22,23,24,25], 
'Cu':[/*20*/ 21,22,23,24,25,26,27,28,29,30], 
'Nb':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42], 
'Mo':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42,43],
'Tc':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42,43,44], 
'Ru':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42,43,44,45], 
'Rh':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42,43,44,45,46], 
'Pd':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      /*37,38*/,39,40,41,42,43,44,45,46,47,48], 
'Ag':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,/*38*/,39,40,41,42,43,44,45,46,47],
'Pt':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,/*56*/,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79], 
'Au':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,/*56*/,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80], 
/* f-Block */
'La':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,71],
'Gd':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,56,57,58,59,60,61,62,63,71],
'Ac':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,103], 
'Th':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,103,104],
'Pa':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,89,90,103], 
'U':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,89,90,91,103], 
'Np':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,89,90,91,92,103], 
'Cm':[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
      37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
      55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,
      87,88,89,90,91,92,93,94,95,103], 
}

var psedata={
'H':[
    'Wasserstoff', //Name
    '1', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p1">1s¹</span>', //Valenzelektronenkonfiguration
],
'He':[
    'Helium', //Name
    '2', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p1">1s²</span>', //Valenzelektronenkonfiguration
],
'Li':[
    'Lithium', //Name
    '3', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p2">2s¹</span>', //Valenzelektronenkonfiguration
],
'Be':[
    'Beryllium', //Name
    '4', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p2">2s²</span>', //Valenzelektronenkonfiguration
],
'B':[
    'Bor', //Name
    '5', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p2">2s²2p¹</span>', //Valenzelektronenkonfiguration
],
'C':[
    'Kohlenstoff', //Name
    '6', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p2">2s²2p²</span>', //Valenzelektronenkonfiguration
],
'N':[
    'Stickstoff', //Name
    '7', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p2">2s²2p³</span>', //Valenzelektronenkonfiguration
],
'O':[
    'Sauerstoff', //Name
    '8', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p2">2s²2p⁴</span>', //Valenzelektronenkonfiguration
],
'F':[
    'Fluor', //Name
    '9', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p2">2s²2p⁵</span>', //Valenzelektronenkonfiguration
],
'Ne':[
    'Neon', //Name
    '10', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p2">2s²2p⁶</span>', //Valenzelektronenkonfiguration
],
'Na':[
    'Natrium', //Name
    '11', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p3">3s¹</span>', //Valenzelektronenkonfiguration
],
'Mg':[
    'Magnesium', //Name
    '12', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p3">3s²</span>', //Valenzelektronenkonfiguration
],
'Al':[
    'Aluminium', //Name
    '13', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p3">3s²3p¹</span>', //Valenzelektronenkonfiguration
],
'Si':[
    'Silicium', //Name
    '14', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p3">3s²3p²</span>', //Valenzelektronenkonfiguration
],
'P':[
    'Phosphor', //Name
    '15', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p3">3s²3p³</span>', //Valenzelektronenkonfiguration
],
'S':[
    'Schwefel', //Name
    '16', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p3">3s²3p⁴</span>', //Valenzelektronenkonfiguration
],
'Cl':[
    'Chlor', //Name
    '17', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p3">3s²3p⁵</span>', //Valenzelektronenkonfiguration
],
'Ar':[
    'Argon', //Name
    '18', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p3">3s²3p⁶</span>', //Valenzelektronenkonfiguration
],
'K':[
    'Kalium', //Name
    '19', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p4">4s¹</span>', //Valenzelektronenkonfiguration
],
'Ca':[
    'Calcium', //Name
    '20', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p4">4s²</span>', //Valenzelektronenkonfiguration
],
'Sc':[
    'Scandium', //Name
    '21', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹</span>', //Valenzelektronenkonfiguration
],
'Ti':[
    'Titan', //Name
    '22', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d²</span>', //Valenzelektronenkonfiguration
],
'V':[
    'Vanadium', //Name
    '23', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d³</span>', //Valenzelektronenkonfiguration
],
'Cr':[
    'Chrom', //Name
    '24', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p3">3d⁵</span><span class="p4 achtung">4s¹</span>', //Valenzelektronenkonfiguration
],
'Mn':[
    'Mangan', //Name
    '25', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d⁵</span>', //Valenzelektronenkonfiguration
],
'Fe':[
    'Eisen', //Name
    '26', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d⁶</span>', //Valenzelektronenkonfiguration
],
'Co':[
    'Cobalt', //Name
    '27', //Gesamtelektronenzahl
    '9', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d⁷</span>', //Valenzelektronenkonfiguration
],
'Ni':[
    'Nickel', //Name
    '28', //Gesamtelektronenzahl
    '10', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d⁸</span>', //Valenzelektronenkonfiguration
],
'Cu':[
    'Kupfer', //Name
    '29', //Gesamtelektronenzahl
    '11', //Valenzelektronenzahl
    '<span class="p3">3d¹⁰</span><span class="p4 achtung">4s¹</span>', //Valenzelektronenkonfiguration
],
'Zn':[
    'Zink', //Name
    '30', //Gesamtelektronenzahl
    '12', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span>', //Valenzelektronenkonfiguration
],
'Ga':[
    'Gallium', //Name
    '31', //Gesamtelektronenzahl
    '13 (nur s- und p-Block: 3)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p¹</span>', //Valenzelektronenkonfiguration
],
'Ge':[
    'Germanium', //Name
    '32', //Gesamtelektronenzahl
    '14 (nur s- und p-Block: 4)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p²</span>', //Valenzelektronenkonfiguration
],
'As':[
    'Arsen', //Name
    '33', //Gesamtelektronenzahl
    '15 (nur s- und p-Block: 5)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p³</span>', //Valenzelektronenkonfiguration
],
'Se':[
    'Selen', //Name
    '34', //Gesamtelektronenzahl
    '16 (nur s- und p-Block: 6)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p⁴</span>', //Valenzelektronenkonfiguration
],
'Br':[
    'Brom', //Name
    '35', //Gesamtelektronenzahl
    '17 (nur s- und p-Block: 7)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p⁵</span>', //Valenzelektronenkonfiguration
],
'Kr':[
    'Krypton', //Name
    '36', //Gesamtelektronenzahl
    '18 (nur s- und p-Block: 8)', //Valenzelektronenzahl
    '<span class="p4">4s²</span><span class="p3">3d¹⁰</span><span class="p4">4p⁶</span>', //Valenzelektronenkonfiguration
],
'Rb':[
    'Rubidium', //Name
    '37', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p5">5s¹</span>', //Valenzelektronenkonfiguration
],
'Sr':[
    'Strontium', //Name
    '38', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p5">5s²</span>', //Valenzelektronenkonfiguration
],
'Y':[
    'Yttrium', //Name
    '39', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹</span>', //Valenzelektronenkonfiguration
],
'Zr':[
    'Zirconium', //Name
    '40', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d²</span>', //Valenzelektronenkonfiguration
],
'Nb':[
    'Niob', //Name
    '41', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p4">4d⁴</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Mo':[
    'Molybdän', //Name
    '42', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p4">4d⁵</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Tc':[
    'Technetium', //Name
    '43', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p4">4d⁶</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Ru':[
    'Ruthenium', //Name
    '44', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p4">4d⁷</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Rh':[
    'Rhodium', //Name
    '45', //Gesamtelektronenzahl
    '9', //Valenzelektronenzahl
    '<span class="p4">4d⁸</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Pd':[
    'Palladium', //Name
    '46', //Gesamtelektronenzahl
    '10', //Valenzelektronenzahl
    '<span class="p4">4d¹⁰</span><span class="p5 achtung">5s⁰</span>', //Valenzelektronenkonfiguration
],
'Ag':[
    'Silber', //Name
    '47', //Gesamtelektronenzahl
    '11', //Valenzelektronenzahl
    '<span class="p4">4d¹⁰</span><span class="p5 achtung">5s¹</span>', //Valenzelektronenkonfiguration
],
'Cd':[
    'Cadmium', //Name
    '48', //Gesamtelektronenzahl
    '12', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span>', //Valenzelektronenkonfiguration
],
'In':[
    'Indium', //Name
    '49', //Gesamtelektronenzahl
    '13 (nur s- und p-Block: 3)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p¹</span>', //Valenzelektronenkonfiguration
],
'Sn':[
    'Zinn', //Name
    '50', //Gesamtelektronenzahl
    '14 (nur s- und p-Block: 4)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p²</span>', //Valenzelektronenkonfiguration
],
'Sb':[
    'Antimon', //Name
    '51', //Gesamtelektronenzahl
    '15 (nur s- und p-Block: 5)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p³</span>', //Valenzelektronenkonfiguration
],
'Te':[
    'Tellur', //Name
    '52', //Gesamtelektronenzahl
    '16 (nur s- und p-Block: 6)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p⁴</span>', //Valenzelektronenkonfiguration
],
'I':[
    'Iod', //Name
    '53', //Gesamtelektronenzahl
    '17 (nur s- und p-Block: 7)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p⁵</span>', //Valenzelektronenkonfiguration
],
'Xe':[
    'Xenon', //Name
    '54', //Gesamtelektronenzahl
    '18 (nur s- und p-Block: 8)', //Valenzelektronenzahl
    '<span class="p5">5s²</span><span class="p4">4d¹⁰</span><span class="p5">5p⁶</span>', //Valenzelektronenkonfiguration
],
'Cs':[
    'Cäsium', //Name
    '55', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p6">6s¹</span>', //Valenzelektronenkonfiguration
],
'Ba':[
    'Barium', //Name
    '56', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p6">6s²</span>', //Valenzelektronenkonfiguration
],
'La':[
    'Lanthan', //Name
    '57', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁰</span><span class="p5 achtung">5d¹</span>', //Valenzelektronenkonfiguration
],
'Ce':[
    'Cer', //Name
    '58', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f²</span>', //Valenzelektronenkonfiguration
],
'Pr':[
    'Praseodym', //Name
    '59', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f³</span>', //Valenzelektronenkonfiguration
],
'Nd':[
    'Neodym', //Name
    '60', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁴</span>', //Valenzelektronenkonfiguration
],
'Pm':[
    'Promethium', //Name
    '61', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁵</span>', //Valenzelektronenkonfiguration
],
'Sm':[
    'Samarium', //Name
    '62', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁶</span>', //Valenzelektronenkonfiguration
],
'Eu':[
    'Europium', //Name
    '63', //Gesamtelektronenzahl
    '9', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁷</span>', //Valenzelektronenkonfiguration
],
'Gd':[
    'Gadolinium', //Name
    '64', //Gesamtelektronenzahl
    '10', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁷</span><span class="p5 achtung">5d¹</span>', //Valenzelektronenkonfiguration
],
'Tb':[
    'Terbium', //Name
    '65', //Gesamtelektronenzahl
    '11', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f⁹</span>', //Valenzelektronenkonfiguration
],
'Dy':[
    'Dysprosiom', //Name
    '66', //Gesamtelektronenzahl
    '12', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁰</span>', //Valenzelektronenkonfiguration
],
'Ho':[
    'Holmium', //Name
    '67', //Gesamtelektronenzahl
    '13', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹¹</span>', //Valenzelektronenkonfiguration
],
'Er':[
    'Erbium', //Name
    '68', //Gesamtelektronenzahl
    '14', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹²</span>', //Valenzelektronenkonfiguration
],
'Tm':[
    'Thulium', //Name
    '69', //Gesamtelektronenzahl
    '15', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹³</span>', //Valenzelektronenkonfiguration
],
'Yb':[
    'Ytterbium', //Name
    '70', //Gesamtelektronenzahl
    '16', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span>', //Valenzelektronenkonfiguration
],
'Lu':[
    'Lutetium', //Name
    '71', //Gesamtelektronenzahl
    '17', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹</span>', //Valenzelektronenkonfiguration
],
'Hf':[
    'Hafnium', //Name
    '72', //Gesamtelektronenzahl
    '18', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d²</span>', //Valenzelektronenkonfiguration
],
'Ta':[
    'Tantal', //Name
    '73', //Gesamtelektronenzahl
    '19', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d³</span>', //Valenzelektronenkonfiguration
],
'W':[
    'Wolfram', //Name
    '74', //Gesamtelektronenzahl
    '20', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d⁴</span>', //Valenzelektronenkonfiguration
],
'Re':[
    'Rhenium', //Name
    '75', //Gesamtelektronenzahl
    '21', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d⁵</span>', //Valenzelektronenkonfiguration
],
'Os':[
    'Osmium', //Name
    '76', //Gesamtelektronenzahl
    '22', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d⁶</span>', //Valenzelektronenkonfiguration
],
'Ir':[
    'Iridium', //Name
    '77', //Gesamtelektronenzahl
    '23', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d⁷</span>', //Valenzelektronenkonfiguration
],
'Pt':[
    'Platin', //Name
    '78', //Gesamtelektronenzahl
    '24', //Valenzelektronenzahl
    '<span class="p4">4f¹⁴</span><span class="p5">5d⁹</span><span class="p6 achtung">6s¹</span>', //Valenzelektronenkonfiguration
],
'Au':[
    'Gold', //Name
    '79', //Gesamtelektronenzahl
    '25', //Valenzelektronenzahl
    '<span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6 achtung">6s¹</span>', //Valenzelektronenkonfiguration
],
'Hg':[
    'Quecksilber', //Name
    '80', //Gesamtelektronenzahl
    '26', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span>', //Valenzelektronenkonfiguration
],
'Tl':[
    'Thallium', //Name
    '81', //Gesamtelektronenzahl
    '27 (nur s- und p-Block: 3)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p¹</span>', //Valenzelektronenkonfiguration
],
'Pb':[
    'Blei', //Name
    '82', //Gesamtelektronenzahl
    '28 (nur s- und p-Block: 4)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p²</span>', //Valenzelektronenkonfiguration
],
'Bi':[
    'Bismut', //Name
    '83', //Gesamtelektronenzahl
    '29 (nur s- und p-Block: 5)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p³</span>', //Valenzelektronenkonfiguration
],
'Po':[
    'Polonium', //Name
    '84', //Gesamtelektronenzahl
    '30 (nur s- und p-Block: 6)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p⁴</span>', //Valenzelektronenkonfiguration
],
'At':[
    'Astat', //Name
    '85', //Gesamtelektronenzahl
    '31 (nur s- und p-Block: 7)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p⁵</span>', //Valenzelektronenkonfiguration
],
'Rn':[
    'Radon', //Name
    '86', //Gesamtelektronenzahl
    '32 (nur s- und p-Block: 8)', //Valenzelektronenzahl
    '<span class="p6">6s²</span><span class="p4">4f¹⁴</span><span class="p5">5d¹⁰</span><span class="p6">6p⁶</span>', //Valenzelektronenkonfiguration
],
'Fr':[
    'Francium', //Name
    '87', //Gesamtelektronenzahl
    '1', //Valenzelektronenzahl
    '<span class="p7">7s¹</span>', //Valenzelektronenkonfiguration
],
'Ra':[
    'Radium', //Name
    '88', //Gesamtelektronenzahl
    '2', //Valenzelektronenzahl
    '<span class="p7">7s²</span>', //Valenzelektronenkonfiguration
],
'Ac':[
    'Actinium', //Name
    '89', //Gesamtelektronenzahl
    '3', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁰</span><span class="p6 achtung">6d¹</span>', //Valenzelektronenkonfiguration
],
'Th':[
    'Thorium', //Name
    '90', //Gesamtelektronenzahl
    '4', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁰</span><span class="p6 achtung">6d²</span>', //Valenzelektronenkonfiguration
],
'Pa':[
    'Protacinium', //Name
    '91', //Gesamtelektronenzahl
    '5', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f²</span><span class="p6 achtung">6d¹</span>', //Valenzelektronenkonfiguration
],
'U':[
    'Uran', //Name
    '92', //Gesamtelektronenzahl
    '6', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f³</span><span class="p6 achtung">6d¹</span>', //Valenzelektronenkonfiguration
],
'Np':[
    'Neptunium', //Name
    '93', //Gesamtelektronenzahl
    '7', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁴</span><span class="p6 achtung">6d¹</span>', //Valenzelektronenkonfiguration
],
'Pu':[
    'Plutonium', //Name
    '94', //Gesamtelektronenzahl
    '8', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁶</span>', //Valenzelektronenkonfiguration
],
'Am':[
    'Americium', //Name
    '95', //Gesamtelektronenzahl
    '9', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁷</span>', //Valenzelektronenkonfiguration
],
'Cm':[
    'Curium', //Name
    '96', //Gesamtelektronenzahl
    '10', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁷</span><span class="p6 achtung">6d¹</span>', //Valenzelektronenkonfiguration
],
'Bk':[
    'Berkelium', //Name
    '97', //Gesamtelektronenzahl
    '11', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f⁹</span>', //Valenzelektronenkonfiguration
],
'Cf':[
    'Californium', //Name
    '98', //Gesamtelektronenzahl
    '12', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁰</span>', //Valenzelektronenkonfiguration
],
'Es':[
    'Einsteinium', //Name
    '99', //Gesamtelektronenzahl
    '13', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹¹</span>', //Valenzelektronenkonfiguration
],
'Fm':[
    'Fermium', //Name
    '100', //Gesamtelektronenzahl
    '14', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹²</span>', //Valenzelektronenkonfiguration
],
'Md':[
    'Mendelevium', //Name
    '101', //Gesamtelektronenzahl
    '15', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹³</span>', //Valenzelektronenkonfiguration
],
'No':[
    'Nobelium', //Name
    '102', //Gesamtelektronenzahl
    '16', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span>', //Valenzelektronenkonfiguration
],
'Lr':[
    'Lawrencium', //Name
    '103', //Gesamtelektronenzahl
    '17', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d¹</span>', //Valenzelektronenkonfiguration
],
'Rf':[
    'Rutherfordium', //Name
    '104', //Gesamtelektronenzahl
    '18', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d²</span>', //Valenzelektronenkonfiguration
],
'Db':[
    'Dubnium', //Name
    '105', //Gesamtelektronenzahl
    '19', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d³</span>', //Valenzelektronenkonfiguration
],
'Sg':[
    'Seaborgium', //Name
    '106', //Gesamtelektronenzahl
    '20', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁴</span>', //Valenzelektronenkonfiguration
],
'Bh':[
    'Bohrium', //Name
    '107', //Gesamtelektronenzahl
    '21', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁵</span>', //Valenzelektronenkonfiguration
],
'Hs':[
    'Hassium', //Name
    '108', //Gesamtelektronenzahl
    '22', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁶</span>', //Valenzelektronenkonfiguration
],
'Mt':[
    'Meitnerium', //Name
    '109', //Gesamtelektronenzahl
    '23', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁷</span>', //Valenzelektronenkonfiguration
],
'Ds':[
    'Darmstadtium', //Name
    '110', //Gesamtelektronenzahl
    '24', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁸</span>', //Valenzelektronenkonfiguration
],
'Rg':[
    'Roentgenium', //Name
    '111', //Gesamtelektronenzahl
    '25', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d⁹</span>', //Valenzelektronenkonfiguration
],
'Cn':[
    'Copernicium', //Name
    '112', //Gesamtelektronenzahl
    '26', //Valenzelektronenzahl
    '<span class="p7">7s²</span><span class="p5">5f¹⁴</span><span class="p6">6d¹⁰</span>', //Valenzelektronenkonfiguration
],

/*TODO: Erweiterung um die Elemente des p-Blocks mit n=7 */

}
