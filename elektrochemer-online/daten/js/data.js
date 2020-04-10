        /*
        'Nummer des Redoxpaars':{'E0':'Zahlenwert',
                                 'redm_haelfte':[
                                                koeff_redm,
                                                sf_redm,
                                                koeff_ladaus,
                                                sf_ladaus,
                                                koeff_stoffaus,
                                                sf_stoffaus],
                                 'oxm_haelfte':[koeff_oxm,
                                                sf_oxm,
                                                koeff_el,
                                                sf_el,
                                                koeff_ladaus,
                                                sf_ladaus,
                                                koeff_stoffaus,
                                                sf_stoffaus],
                                 'beschriftung':['Elektrodenmaterial',
                                                 'Ionen-Lösung',
                                                 'Farbe Elektrode',
                                                 'Farbe Lösung']
        }
        */
        var linke_halbzellen={
        '0':{'E0':0,
              'redm_haelfte':['',
                              '',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['',
                             '',
                             '',
                             '',
                             '',
                             '',
                             '',
                             ''],
               'beschriftung':['',
                               '',
                               'gray',
                               'white']
        },
        '1':{'E0':-3.02,
              'redm_haelfte':['1',
                              'Li',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Li⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
               'beschriftung':['Lithium-Elektrode',
                               'Lithiumionen in aprotischer Elektrolyt-Lösung',
                               'gray',
                               'white']
        },
        '2':{'E0':-2.71,
              'redm_haelfte':['1',
                              'Na',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Na⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Natrium-Elektrode',
                              'Natriumionen in aprotischer Elektrolyt-Lösung',
                              'gray',
                              'white']
        },
        '3':{'E0':-1.66,
              'redm_haelfte':['1',
                              'Al',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Al³⁺',
                             '3',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Alumiunium-Elektrode',
                              'Aluminiumionen in aprotischer Elektrolyt-Lösung',
                              'gray',
                              'white']
        },
        '4':{'E0':-0.83,
              'redm_haelfte':['1',
                              'H₂',
                              '2',
                              'OH⁻',
                              '',
                              ''],
              'oxm_haelfte':['2',
                             'H₂O',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Wasserstoff umspülte Platin-Elektrode',
                              'Oxoniumionen-Lösung',
                              'gray',
                              'white']
        },
        '5':{'E0':-0.76,
              'redm_haelfte':['1',
                              'Zn',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Zn²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Zink-Elektrode',
                              'Zink(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '6':{'E0':-0.41,
              'redm_haelfte':['1',
                              'Fe',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Fe²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Eisen-Elektrode',
                              'Eisen(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '7':{'E0':-0.40,
              'redm_haelfte':['1',
                              'Cd',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cd²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Cadmium-Elektrode',
                              'Cadmium(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '8':{'E0':-0.36,
              'redm_haelfte':['1',
                              'Pb',
                              '1',
                              'SO₄²⁻',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'PbSO₄',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Blei-Elektrode',
                              'Festes Blei(II)-sulfat',
                              'gray',
                              'white']
        },
        '9':{'E0':-0.23,
              'redm_haelfte':['1',
                              'Ni',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Ni²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Nickel-Elektrode',
                              'Nickel(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '10':{'E0':-0.14,
              'redm_haelfte':['1',
                              'Sn',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Sn²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Zinn-Elektrode',
                              'Zinn(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '11':{'E0':0.00,
              'redm_haelfte':['1',
                              'H₂',
                              '',
                              '',
                              '2',
                              'H₂O'],
              'oxm_haelfte':['2',
                             'H₃O⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Wasserstoff umspülte Platin-Elektrode',
                              'Oxoniumionen-Lösung',
                              'gray',
                              'white']
        },
        '12':{'E0':0.34,
              'redm_haelfte':['1',
                              'Cu',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cu²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Kupfer-Elektrode',
                              'Kupfer(II)-ionen-Lösung',
                              'brown',
                              'steelblue']
        },
        '13':{'E0':0.40,
              'redm_haelfte':['4',
                              'OH⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'O₂',
                             '4',
                             'e⁻',
                             '',
                             '',
                             '2',
                             'H₂O'],
              'beschriftung':['Sauerstoff umspülte Platin-Elektrode',
                              'Hydroxidionen-Lösung',
                              'gray',
                              'white']
        },
        '14':{'E0':0.54,
              'redm_haelfte':['2',
                              'I⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'I₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Iod an Platin-Elektrode',
                              'Iodidionen-Stärke-Lösung',
                              'gray',
                              'steelblue']
        },
        '15':{'E0':0.80,
              'redm_haelfte':['1',
                              'Ag',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Ag⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Silber-Elektrode',
                              'Silber(I)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '16':{'E0':1.07,
              'redm_haelfte':['2',
                              'Br⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Br₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Brom an Platin-Elektrode',
                              'Bromidionen-Lösung',
                              'gray',
                              'orange']
        },
        '17':{'E0':1.23,
              'redm_haelfte':['6',
                              'H₂O',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'O₂',
                             '4',
                             'e⁻',
                             '4',
                             'H₃O⁺',
                             '',
                             ''],
              'beschriftung':['Sauerstoff umspülte Platin-Elektrode',
                              'Saure Lösung',
                              'gray',
                              'white']
        },
        '18':{'E0':1.36,
              'redm_haelfte':['2',
                              'Cl⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cl₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Chlor an Platin-Elektrode',
                              'Chloridionen-Lösung',
                              'gray',
                              'darkgreen']
        },
        '19':{'E0':1.49,
              'redm_haelfte':['1',
                              'Mn²⁺',
                              '',
                              '',
                              '12',
                              'H₂O'],
              'oxm_haelfte':['1',
                             'MnO₄⁻',
                             '5',
                             'e⁻',
                             '8',
                             'H₃O⁺',
                             '',
                             ''],
              'beschriftung':['Platin-Elektrode',
                              'Permanganationen und Mangan(II)-ionen-Lösung',
                              'gray',
                              'purple']
        },
        '20':{'E0':1.69,
              'redm_haelfte':['1',
                              'PbSO₄',
                              '',
                              '',
                              '5',
                              'H₂O'],
              'oxm_haelfte':['1',
                             'PbO₂',
                             '2',
                             'e⁻',
                             '3',
                             'H₃O⁺',
                             '1',
                             'HSO₄⁻'],
              'beschriftung':['Blei-Elektrode',
                              'Festes Blei(II)-sulfat und festes Blei(IV)-oxid',
                              'gray',
                              'white']
        }
        }

        var rechte_halbzellen={
        '0':{'E0':0,
              'redm_haelfte':['',
                              '',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['',
                             '',
                             '',
                             '',
                             '',
                             '',
                             '',
                             ''],
               'beschriftung':['',
                               '',
                               'gray',
                               'white']
        },
        '1':{'E0':-3.02,
              'redm_haelfte':['1',
                              'Li',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Li⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
               'beschriftung':['Lithium-Elektrode',
                               'Lithiumionen in aprotischer Elektrolyt-Lösung',
                               'gray',
                               'white']
        },
        '2':{'E0':-2.71,
              'redm_haelfte':['1',
                              'Na',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Na⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Natrium-Elektrode',
                              'Natriumionen in aprotischer Elektrolyt-Lösung',
                              'gray',
                              'white']
        },
        '3':{'E0':-1.66,
              'redm_haelfte':['1',
                              'Al',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Al³⁺',
                             '3',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Alumiunium-Elektrode',
                              'Aluminiumionen in aprotischer Elektrolyt-Lösung',
                              'gray',
                              'white']
        },
        '4':{'E0':-0.83,
              'redm_haelfte':['1',
                              'H₂',
                              '2',
                              'OH⁻',
                              '',
                              ''],
              'oxm_haelfte':['2',
                             'H₂O',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Wasserstoff umspülte Platin-Elektrode',
                              'Oxoniumionen-Lösung',
                              'gray',
                              'white']
        },
        '5':{'E0':-0.76,
              'redm_haelfte':['1',
                              'Zn',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Zn²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Zink-Elektrode',
                              'Zink(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '6':{'E0':-0.41,
              'redm_haelfte':['1',
                              'Fe',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Fe²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Eisen-Elektrode',
                              'Eisen(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '7':{'E0':-0.40,
              'redm_haelfte':['1',
                              'Cd',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cd²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Cadmium-Elektrode',
                              'Cadmium(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '8':{'E0':-0.36,
              'redm_haelfte':['1',
                              'Pb',
                              '1',
                              'SO₄²⁻',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'PbSO₄',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Blei-Elektrode',
                              'Festes Blei(II)-sulfat',
                              'gray',
                              'white']
        },
        '9':{'E0':-0.23,
              'redm_haelfte':['1',
                              'Ni',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Ni²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Nickel-Elektrode',
                              'Nickel(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '10':{'E0':-0.14,
              'redm_haelfte':['1',
                              'Sn',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Sn²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Zinn-Elektrode',
                              'Zinn(II)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '11':{'E0':0.00,
              'redm_haelfte':['1',
                              'H₂',
                              '',
                              '',
                              '2',
                              'H₂O'],
              'oxm_haelfte':['2',
                             'H₃O⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Wasserstoff umspülte Platin-Elektrode',
                              'Oxoniumionen-Lösung',
                              'gray',
                              'white']
        },
        '12':{'E0':0.34,
              'redm_haelfte':['1',
                              'Cu',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cu²⁺',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Kupfer-Elektrode',
                              'Kupfer(II)-ionen-Lösung',
                              'brown',
                              'steelblue']
        },
        '13':{'E0':0.40,
              'redm_haelfte':['4',
                              'OH⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'O₂',
                             '4',
                             'e⁻',
                             '',
                             '',
                             '2',
                             'H₂O'],
              'beschriftung':['Sauerstoff umspülte Platin-Elektrode',
                              'Hydroxidionen-Lösung',
                              'gray',
                              'white']
        },
        '14':{'E0':0.54,
              'redm_haelfte':['2',
                              'I⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'I₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Iod an Platin-Elektrode',
                              'Iodidionen-Stärke-Lösung',
                              'gray',
                              'steelblue']
        },
        '15':{'E0':0.80,
              'redm_haelfte':['1',
                              'Ag',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Ag⁺',
                             '1',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Silber-Elektrode',
                              'Silber(I)-ionen-Lösung',
                              'gray',
                              'white']
        },
        '16':{'E0':1.07,
              'redm_haelfte':['2',
                              'Br⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Br₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Brom an Platin-Elektrode',
                              'Bromidionen-Lösung',
                              'gray',
                              'orange']
        },
        '17':{'E0':1.23,
              'redm_haelfte':['6',
                              'H₂O',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'O₂',
                             '4',
                             'e⁻',
                             '4',
                             'H₃O⁺',
                             '',
                             ''],
              'beschriftung':['Sauerstoff umspülte Platin-Elektrode',
                              'Saure Lösung',
                              'gray',
                              'white']
        },
        '18':{'E0':1.36,
              'redm_haelfte':['2',
                              'Cl⁻',
                              '',
                              '',
                              '',
                              ''],
              'oxm_haelfte':['1',
                             'Cl₂',
                             '2',
                             'e⁻',
                             '',
                             '',
                             '',
                             ''],
              'beschriftung':['Chlor an Platin-Elektrode',
                              'Chloridionen-Lösung',
                              'gray',
                              'darkgreen']
        },
        '19':{'E0':1.49,
              'redm_haelfte':['1',
                              'Mn²⁺',
                              '',
                              '',
                              '12',
                              'H₂O'],
              'oxm_haelfte':['1',
                             'MnO₄⁻',
                             '5',
                             'e⁻',
                             '8',
                             'H₃O⁺',
                             '',
                             ''],
              'beschriftung':['Platin-Elektrode',
                              'Permanganationen und Mangan(II)-ionen-Lösung',
                              'gray',
                              'purple']
        },
        '20':{'E0':1.69,
              'redm_haelfte':['1',
                              'PbSO₄',
                              '',
                              '',
                              '5',
                              'H₂O'],
              'oxm_haelfte':['1',
                             'PbO₂',
                             '2',
                             'e⁻',
                             '3',
                             'H₃O⁺',
                             '1',
                             'HSO₄⁻'],
              'beschriftung':['Blei-Elektrode',
                              'Festes Blei(II)-sulfat und festes Blei(IV)-oxid',
                              'gray',
                              'white']
        }
        }

