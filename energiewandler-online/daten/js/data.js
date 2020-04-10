var einzel_energiewandler={
    // Lichtenergie
    '1A':['Nichtlineare Optik',0],       // 0
    '1B':['Solarzelle', 0.25],
    '1C':['Fotosynthese', 0.2],
    '1D':['Kernphotoeffekt',0],     // 3
    '1E':['Radiometer',0],      // 4
    '1F':['Solarkollektor', 0.7],
    // Elektrische Energie
    '2A':['Blitz',0],           // 0
    '2B':['Transformator',0],       // 1
    '2C':['Akkumulator', 0.8], 
    '2D':['nicht bekannt',0],       // 3
    '2E':['Elektromotor', 0.9],
    '2F':['Elektroheizung',0],      // 5
    // Chemische Energie
    '3A':['Glühwürmchen, Chemolumiszenz',0],     // 0
    '3B':['Brennstoffzelle', 0.4],
    '3C':['Kohlevergasung',0],      // 2
    '3D':['nicht bekannt',0],       // 3
    '3E':['Muskel', 0.35],  // Verbrennungsmotor 0.3
    '3F':['Ölheizung', 0.8],
    // Kernenergie
    '4A':['Gammastrahlen',0],       // 0
    '4B':['Radionuklidbatterie',0],      // 1
    '4C':['Radiolyse',0],       // 2
    '4D':['Brutreaktor',0],     // 3
    '4E':['Atombombe',0],       // 4
    '4F':['Kernreaktor', 0.4],
    // Mechanische Energie
    '5A':['Synchrotonstrahlung',0],      // 0
    '5B':['Generator', 0.95],
    '5C':['Eischnee',0],        // 2
    '5D':['Reaktionen im Teilchenbeschleueniger',0], // 3
    '5E':['Getriebe', 0.95],
    '5F':['Bremsen',0],         // 5
    // Wärmeenergie
    '6A':['Schwarzer Strahler',0],       // 0
    '6B':['Thermoelement',0],       // 1
    '6C':['Hochofen',0],        // 2
    '6D':['Supernova',0],       // 3
    '6E':['Dampfturbine', 0.82], 
    '6F':['Wärmeüberträger',0]      // 5
    }
var zugefuehrte_energieformen={
    'lichtenergie':'1',
    'elektrische_energie':'2',
    'chemische_energie':'3',
    'kernenergie':'4',
    'mechanische_energie':'5',
    'waermeenergie':'6'
    }
var nutzbare_energieformen={
    'lichtenergie':'A',
    'elektrische_energie':'B',
    'chemische_energie':'C',
    'kernenergie':'D',
    'mechanische_energie':'E',
    'waermeenergie':'F'
    }
var mehrstufige_energiewandler={
    'auto':['Auto',''],
    'foen':['Fön',''],
    'kohlekraftwerk':['Kohlekraftwerk',''],
    'kernkraftwerk':['Kernkraftwerk',''],
    'solarkraftwerk':['Solarkraftwerk',''],
    'mensch':['Mensch',''],
    'baum':['Baum',''],
    }
