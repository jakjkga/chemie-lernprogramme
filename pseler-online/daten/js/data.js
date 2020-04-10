var startelement='H';

var alle_elemente=[
    'H',                                    'He', 
    'Li', 'Be', 'B',  'C',  'N', 'O', 'F',  'Ne',
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
    'K',  'Ca'
];
var metalle=[                                           
    'Li', 'Be',  
    'Na', 'Mg', 'Al',
    'K',  'Ca'
];
var halbmetalle=[                                           
                'B',  
                     'Si'
];
var nichtmetalle=[
    'H',                                     
                      'C',  'N', 'O', 'F',  
                            'P', 'S', 'Cl'
];
var edelgase=[
                                            'He', 
                                            'Ne',
                                            'Ar'
];
var erste_periode=[
    'H', 'He'
];
var zweite_periode=[
    'Li', 'Be', 'B',  'C',  'N', 'O', 'F',  'Ne'
];
var dritte_periode=[
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
];
var vierte_periode=[
    'K',  'Ca'
];
var erste_hg=[
    'H', 'Li', 'Na', 'K'
];
var zweite_hg=[
    'Be', 'Mg', 'Ca'
];
var dritte_hg=[
    'B', 'Al'
];
var vierte_hg=[
    'C', 'Si'
];
var fuenfte_hg=[
    'N', 'P'
];
var sechste_hg=[
    'O', 'S'
];
var siebte_hg=[
    'F', 'Cl'
];
var achte_hg=[
    'He', 'Ne', 'Ar'
];

var positionen={
    'linear':{
        'H':[0, 0], 
        'He':[28, 0], 
        'Li':[56, 0], 
        'Be':[84, 0], 
        'B':[112, 0], 
        'C':[140, 0], 
        'N':[168, 0], 
        'O':[196, 0], 
        'F':[224, 0], 
        'Ne':[252, 0],
        'Na':[280, 0], 
        'Mg':[308, 0], 
        'Al':[336, 0], 
        'Si':[364, 0], 
        'P':[392, 0], 
        'S':[420, 0], 
        'Cl':[448, 0], 
        'Ar':[476, 0],
        'K':[504, 0],
        'Ca':[532, 0]
    },
    'tabellarisch':{
        'H':[0, 0], 
        'He':[196, 0], 
        'Li':[0, 28], 
        'Be':[28, 28], 
        'B':[56, 28], 
        'C':[84, 28], 
        'N':[112, 28], 
        'O':[140, 28], 
        'F':[168, 28], 
        'Ne':[196, 28],
        'Na':[0, 56], 
        'Mg':[28, 56], 
        'Al':[56, 56], 
        'Si':[84, 56], 
        'P':[112, 56], 
        'S':[140, 56], 
        'Cl':[168, 56], 
        'Ar':[196, 56],
        'K':[0, 84],
        'Ca':[28, 84]
    }
};

