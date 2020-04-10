// verbname:['Summenformel', 'Siedetemperatur', 'Zahl der Isomere']
//       ggfs. Abbildung, Schmelzpunkt, Molare Masse
var verbnamen={
        //// unverzweigt
        'Methan':['CH₄',                                '-161','1'],
        'Ethan':['C₂H₆',                                '-88', '1'],
        'Propan':['C₃H₈',                               '-42', '1'],
        'Butan':['C₄H₁₀',                               '-1', '2'],
        'Pentan':['C₅H₁₂',                              '36', '3'],
        'Hexan':['C₆H₁₄',                               '68', '5'],
        'Heptan':['C₇H₁₆',                              '98', '9'],
        'Octan':['C₈H₁₈',                               '126', '18'],
        'Nonan':['C₉H₂₀',                               '150', '35'],
        'Decan':['C₁₀H₂₂',                              '174', '75'],
        'Undecan':['C₁₁H₂₄',                            '195', '159'],
        'Dodecan':['C₁₂H₂₆',                            '216', '355'],
        //// verzweigt
        // C3-Kette
        // eine Methylgruppe
        '2-Methylpropan':['C₄H₁₀',                      '-12', '2'], // vgl. "Isobutan"
        // zwei Methylgruppen
        '2,2-Dimethylpropan':['C₅H₁₂',                  '10', '3'],
        // C4-Kette
        // eine Methylgruppe
        '2-Methylbutan':['C₅H₁₂',                       '28', '3'],
        // zwei Methylgruppen
        '2,2-Dimethylbutan':['C₆H₁₄',                   '50', '5'],
        '2,3-Dimethylbutan':['C₆H₁₄',                   '58', '5'],
        // drei Methylgruppen
        '2,2,3-Trimethylbutan':['C₇H₁₆',                '81', '9'],
        // vier Methylgruppen
        '2,2,3,3-Tetramethylbutan':['C₈H₁₈',            '106', '18'],
        // C5 Kette
        // eine Methylgruppe
        '2-Methylpentan':['C₆H₁₄',                      '62' , '5'],
        '3-Methylpentan':['C₆H₁₄',                      '63' , '5'],
        // zwei Methylgruppen
        '2,2-Dimethylpentan':['C₇H₁₆',                  '78' , '9'],
        '2,3-Dimethylpentan':['C₇H₁₆',                  '89' , '9'],
        '3,3-Dimethylpentan':['C₇H₁₆',                  '86' , '9'],
        '2,4-Dimethylpentan':['C₇H₁₆',                  '80' , '9'],
        // drei Methylgruppen
        '2,2,3-Trimethylpentan':['C₈H₁₈',               '110' , '18'],
        '2,3,3-Trimethylpentan':['C₈H₁₈',               '115' , '18'],
        '2,2,4-Trimethylpentan':['C₈H₁₈',                '99' , '18'],  // vgl. "Isooctan"
        '2,3,4-Trimethylpentan':['C₈H₁₈',               '113' , '18'],
        // vier Methylgruppen
        '2,2,4,4-Tetramethylpentan':['C₉H₂₀',           '122', '35' ],
        '2,2,3,4-Tetramethylpentan':['C₉H₂₀',           'k.a.', '35'],
        '2,3,3,4-Tetramethylpentan':['C₉H₂₀',           'k.a.', '35'],
        '2,2,3,3-Tetramethylpentan':['C₉H₂₀',           'k.a.', '35'],
        // eine Ethylgruppe
        '3-Ethylpentan':['C₇H₁₆',                       '93', '9'],
        // zwei Ethylgruppen
        '3,3-Diethylpentan':['C₉H₂₀',                   '146', '35'],
        // Methylgruppen und Ethylgruppen gemischt
        // eine Ethylgruppe, eine Methylgruppe
        '3-Ethyl-3-methylpentan':['C₈H₁₈',              '118' , '18'],
        '3-Ethyl-2-methylpentan':['C₈H₁₈',              '115' , '18'],
        // eine Ethylgruppe, zwei Methylgruppen
        '3-Ethyl-2,3-dimethylpentan':['C₉H₂₀',          'k. A.', '35'],
        '3-Ethyl-2,2-dimethylpentan':['C₉H₂₀',          'k. A.', '35'],
        // eine Ethylgruppe, drei Methylgruppen
        '3-Ethyl-2,2,3-trimethylpentan':['C₁₀H₂₂',      'k. A.', '75'],
        '3-Ethyl-2,2,4-trimethylpentan':['C₁₀H₂₂',      'k. A.', '75'],
        // eine Ethylgruppe, vier Methylgruppen
        '3-Ethyl-2,2,3,4-tetramethylpentan':['C₁₁H₂₄',  'k. A.', '159'],
        '3-Ethyl-2,2,4,4-tetramethylpentan':['C₁₁H₂₄',  'k. A.', '159'],
        // zwei Ethylgruppen, eine Methylgruppe
        '3,3-Diethyl-2-methylpentan':['C₁₀H₂₂',         'k. A.', '75'],
        // zwei Ethylgruppen, zwei Methylgruppen
        '3,3-Diethyl-2,2-dimethylpentan':['C₁₁H₂₄',     'k. A.', '159'],
        '3,3-Diethyl-2,4-dimethylpentan':['C₁₁H₂₄',     'k. A.', '159'],
        // zwei Ethylgruppen, drei Methylgruppen
        '3,3-Diethyl-2,2,4-trimethylpentan':['C₁₂H₂₆',  'k.a.', '355'],
        // zwei Ethylgruppen, vier Methylgruppen
        '3,3-Diethyl-2,2,4,4-tetramethylpentan':['C₁₃H₂₈', 'k.a.', '802'],
        }
