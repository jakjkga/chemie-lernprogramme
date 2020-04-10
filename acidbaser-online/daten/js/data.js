 // Datensammlung zu den Basen
// in der Form:
// Dictionary mit dem Teilchennamen des Ausgangsstoffs als Schluessel,
// Werte in einer Liste mit der Reihenfolge:
// Summenformel des Teilchens, pKB-Wert, grobe Staerke,
// Teilchenname der korrespondierenden Saeure

var B1={'Chloridion':['Cl⁻',
                  '15.74',
                  'sehr schwach',
                  'Chlorwasserstoff'],
    'Hydrogensulfation':['HSO₄⁻',
                         '15.74',
                         'sehr schwach',
                        'Schwefelsäure'],
    'Wasser':['H₂O',
              '15.74',
              'schwach',
              'Oxoniumion'],
    'Nitration':['NO₃⁻',
                 '15.32',
                 'schwach',
                'Salpetersäure'],
    'Sulfation':['SO₄²⁻',
                 '12.10',
                 'schwach',
                 'Hydrogensulfation'],
    'Dihydrogenphosphation':['H₂PO₄⁻',
                            '11.87',
                            'schwach',
                           'Phosphorsäure'],
    'Acetation':['CH₃COO⁻',
                 '9.25',
                 'mittelstark',
                 'Essigsäure'],
    'Hydrogencarbonation':['HCO₃⁻',
                           '7.48',
                           'mittelstark',
                          'Kohlensäure'],
    'Hydrogenphosphation':['HPO₄²⁻',
                           '6.80',
                           'mittelstark',
                           'Dihydrogenphosphation'],
    'Ammoniak':['NH₃',
                '4.75',
                'mittelstark',
                'Ammoniumion'],
    'Carbonation':['CO₃²⁻',
                   '3.60',
                   'stark',
                   'Hydrogencarbonation'],
    'Phosphation':['PO₄³⁻',
                   '1.64',
                   'stark',
                   'Hydrogenphosphation'],
    'Hydroxidion':['OH⁻',
                   '-1.74',
                   'stark',
                   'Wasser'],
    'Amidion':['NH₂⁻',
               '-1.74',
               'sehr stark',
               'Ammoniak'],
    'Oxidion':['O²⁻',
               '-1.74',
               'sehr stark',
               'Hydroxidion']}

// Datensammlung zu den Saeuren
// in der Form:
// Dictionary mit dem Teilchennamen des Ausgangsstoffs als Schluessel,
// Werte in einer Liste mit der Reihenfolge:
// Summenformel des Teilchens, pKS-Wert, grobe Staerke,
// Teilchenname der korrespondierenden Base

var S2={
   /*'Hydrogenchlorid':['HCl',
                        '-1.74',
                        'sehr stark',
                        'Chloridion'],*/
   'Chlorwasserstoff':['HCl',
                        '-1.74',
                        'sehr stark',
                        'Chloridion'],
    'Schwefelsäure':['H₂SO₄',
                         '-1.74',
                         'sehr stark',
                         'Hydrogensulfation'],
    'Oxoniumion':['H₃O⁺',
                  '-1.74',
                  'stark',
                  'Wasser'],
    'Salpetersäure':['HNO₃',
                         '-1.32',
                         'stark',
                         'Nitration'],
    'Hydrogensulfation':['HSO₄⁻',
                         '1.92',
                         'stark',
                         'Sulfation'],
    'Phosphorsäure':['H₃PO₄',
                         '2.13',
                         'stark',
                         'Dihydrogenphosphation'],
    'Essigsäure':['CH₃COOH',
                      '4.75',
                      'mittelstark',
                      'Acetation'],
    'Kohlensäure':['H₂CO₃',
                       '6.52',
                       'mittelstark',
                       'Hydrogencarbonation'],
    'Dihydrogenphosphation':['H₂PO₄⁻',
                             '7.20',
                             'mittelstark',
                             'Hydrogenphosphation'],
    'Ammoniumion':['NH₄⁺',
                  '9.25',
                  'mittelstark',
                  'Ammoniak'],
    'Hydrogencarbonation':['HCO₃⁻',
                           '10.40',
                           'schwach',
                           'Carbonation'],
    'Hydrogenphosphation':['HPO₄²⁻',
                           '12.36',
                           'schwach',
                           'Phosphation'],
    'Wasser':['H₂O',
              '15.74',
              'schwach',
              'Hydroxidion'],
    'Ammoniak':['NH₃',
                '15.74',
                'sehr schwach',
                'Amidion'],
    'Hydroxidion':['OH⁻',
                   '15.74',
                   'sehr schwach',
                   'Oxidion']}
