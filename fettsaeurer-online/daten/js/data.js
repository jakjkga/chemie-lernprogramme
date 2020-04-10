// Daten zu den verschiedenen Fettsäuren
var fettsaeuren={
        '4_0_kdb_kdb':['Buttersäure', 
                       // Butyric acid, butanoic acid, 
                       // CID 264
                       'Butansäure', 
                       'C₃H₇COOH', 
                       '-8 °C',
                       'Milchfett, Schweiß',
                       'buttersaeure'],
        '14_0_kdb_kdb':['Myristinsäure', 
                        // Myristic acid, tetradecanoic acid 
                        // CID 11005
                        'Tetradecansäure', 
                        'C₁₃H₂₇COOH', 
                        '53,9 °C',
                        'Milchfett, Fischöl, Tier- und Pflanzenfette',
                        'myristinsaeure'],
        '14_1_9_nein':['Myristoleinsäure', 
                       // Myristoleic acid, (Z)-9-tetradecenoic acid
                       // CID 5281119
                       '(9Z)-Tetradeca-9-ensäure',
                       'C₁₃H₂₅COOH', 
                       'k.a.',
                       'Muskatnussöl',
                       'myristoleinsaeure'],
        '16_0_kdb_kdb':['Palmitinsäure', 
                        // Palmitic acid, hexadecanoic acid
                        // CID 985
                        'Hexadecansäure',
                        'C₁₅H₃₁COOH',
                        '62,8 °C',
                        'Tier- und Pflanzenfette',
                        'palmitinsaeure'],
        '16_1_9_nein':['Palmitoleinsäure', 
                       // Palmitoleic acid, (Z)-9-hexadecenoic acid
                       // CID 445638
                       '(9Z)-Hexadeca-9-ensäure',
                       'C₁₅H₂₉COOH',
                       '1 °C',
                       'Milchfett, Depotfett der Tiere, Fischtran, Pflanzenfett',
                       'palmitoleinsaeure'],
        '18_0_kdb_kdb':['Stearinsäure', 
                        // Stearic acid, octadecanoic acid 
                        // CID 5281 nur 2D !!!, http://cdb.ics.uci.edu chemical_id=3968623
                        'Octadecansäure',
                        'C₁₇H₃₅COOH',
                        '69,9 °C',
                        'Tier- und Pflanzenfette',
                        'stearinsaeure'],
        '18_1_6_nein':['Petroselinsäure', 
                       // Petroselaidic/Petroselic acid, (Z)-6-octadecenoic acid
                       // CID 11634 nur trans !!!, http://cdb.ics.uci.edu chemical_id=6694078
                       '(6Z)-Octadeca-6-ensäure',
                       'C₁₇H₃₃COOH',
                       '30 °C',
                       'Korianderöl',
                       'petroselinsaeure'],
        '18_1_9_nein':['Ölsäure', 
                       // Oleic acid, (Z)-9-octadecenoic acid
                       // CID 445639
                       '(9Z)-Octadeca-9-ensäure',
                       'C₁₇H₃₃COOH',
                       '16 °C',
                       'In allen Naturfetten',
                       'oelsaeure'],
        '18_1_9_ja':['Elaidinsäure', 
                     // Elaidic acid, (E)-9-octadecenoic acid
                     // CID 637517
                     '(9E)-Octadeca-9-ensäure',
                     'C₁₇H₃₃COOH',
                     '44 - 51 °C',
                     'Im Fett von Wiederkäuern',
                     'elaidinsaeure'],
        '18_2_9_nein':['Linolsäure', 
                       // Linoleic acid, (Z, Z)-9,12-octadecadienoic acid
                       // CID 5280450
                       '(9Z, 12Z)-Octadeca-9,12-diensäure',
                       'C₁₇H₃₁COOH',
                       '-5 °C',
                       'Distelöl, Sonnenblumenöl, Traubenkernöl',
                       'linolsaeure'],
        '18_3_9_nein':['α-Linolensäure', 
                       // α-Linolenic acid, (9Z,12Z,15Z)-octadeca-9,12,15-trienoic acid, all-cis-9,12,15-octadecatrienoic acid
                       // CID 5280934
                       '(9Z, 12Z, 15Z)-Octadeca-9,12,15-triensäure',
                       'C₁₇H₂₉COOH',
                       '-11 °C',
                       'Leinöl, Walnussöl, Hanföl, Rapsöl, Sojaöl',
                       'alphalinolensaeure'],
        '18_3_6_nein':['γ-Linolensäure', 
                       // γ-Linolenic acid, (6Z,9Z,12Z)-octadeca-9,12,15-trienoic acid, all-cis-6,9,12-octadecatrienoic acid
                       // CID 5280933
                       '(6Z, 9Z, 12Z)-Octadeca-6,9,12-triensäure',
                       'C₁₇H₂₉COOH',
                       '-11 °C',
                       'Borretschöl, Nachtkerzenöl, Hanföl',
                       'gammalinolensaeure'],
        '18_3_9_ja':['Punicinsäure', 
                     // Punicic acid, 9Z,11E,13Z-octadeca-9,11,13-trienoic acid
                     // CID 5281126
                     '(9Z, 11E, 13Z)-Octadeca-9,11,13-triensäure',
                     'C₁₇H₂₉COOH',
                     'k.a.',
                     'Kernöl des Granatapfels',
                     'punicinsaeure'],
        '20_0_kdb_kdb':['Arachinsäure', 
                        // Arachidic acid, eicosanoic acid
                        // CID 10467 nur 2D !!!, http://cdb.ics.uci.edu chemical_id=4118951
                        'Eicosansäure [= Icosansäure]',
                        'C₁₉H₃₉COOH',
                        '75,4 °C',
                        'Geringe Mengen in Pflanzensamen und Tierfetten',
                        'arachinsaeure'],
        '20_1_9_nein':['Gadoleinsäure', 
                       // Gadoleic  acid, cis-icos-9-enoic acid
                       // CID 5282767 nur 2D !!!, http://cdb.ics.uci.edu chemical_id=7608543
                       '(9Z)-Eicosa-9-ensäure',
                       'C₁₉H₃₇COOH',
                       'k.a.',
                       'Jojobaöl',
                       'gadoleinsaeure'],
        '20_1_11_nein':['Icosensäure', 
                        // Gondoic  acid, cis-icos-11-enoic acid, cis-eicos-11-enoic acid
                        // CID 5282768 nur 2D !!!, http://cdb.ics.uci.edu chemical_id=6680390
                        '(11Z)-Eicosa-11-ensäure',
                        'C₁₉H₃₇COOH',
                        '16 °C',
                        'Rapsöl',
                        'icosensaeure']
}
