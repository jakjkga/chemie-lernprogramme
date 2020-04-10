// Chemische Daten
var carbonylverbindungen={
    '00':'Aldehyd',
    '01':'Aldehyd',
    '10':'Aldehyd',
    '11':'Keton',
    '20':'Carbonsäure und Aldehyd',
    '02':'Aldehyd und Carbonsäure',
    '21':'Carbonsäure',
    '12':'Carbonsäure',
    '22':'Kohlensäure',
    '30':'Ester',
    '03':'Ester',
    '31':'Ester',
    '13':'Ester',
    '32':'Kohlensäureester',
    '23':'Kohlensäureester',
    '33':'Kohlensäurediester',
    '40':'Carbonsäureamid',
    '04':'Carbonsäureamid',
    '41':'Carbonsäureamid',
    '14':'Carbonsäureamid',
    '44':'Harnstoff',
    '42':'Carbamidsäure',
    '24':'Carbamidsäure',
    '43':'Carbamidsäureester',
    '34':'Carbamidsäureester'
}

var hydroxyverbindungen={
    // Hydroxyverbindungen
    '0000':'Primärer Alkohol',
    '0010':'Primärer Alkohol',
    '0020':'Hydrat',
    '0030':'Halbacetal',
    '0040':'Halbaminal',
    '0100':'Primärer Alkohol',
    '0110':'Sekundärer Alkohol',
    '0120':'Hydrat',
    '0130':'Halbacetal',
    '0140':'Halbaminal',
    '0200':'Hydrat',
    '0210':'Hydrat',
    '0220':'Nicht erlaubt',
    '0230':'Nicht erlaubt',
    '0240':'Nicht stabil',
    '0300':'Halbacetal',
    '0310':'Halbacetal',
    '0320':'Nicht stabil',
    '0330':'Nicht stabil',
    '0340':'Nicht stabil',
    '0400':'Halbaminal',
    '0410':'Halbaminal',
    '0420':'Nicht stabil',
    '0430':'Nicht stabil',
    '0440':'Nicht stabil',
    '1000':'Primärer Alkohol',
    '1010':'Sekundärer Alkohol',
    '1020':'Hydrat',
    '1030':'Halbacetal',
    '1040':'Halbaminal',
    '1100':'Sekundärer Alkohol',
    '1110':'Tertiärer Alkohol',
    '1120':'Hydrat',
    '1130':'Halbketal',
    '1140':'Halbaminal',
    '1200':'Hydrat',
    '1210':'Hydrat',
    '1220':'Nicht erlaubt',
    '1230':'Nicht erlaubt',
    '1240':'Nicht stabil',
    '1300':'Halbacetal',
    '1310':'Halbketal',
    '1320':'Nicht stabil',
    '1330':'Nicht stabil',
    '1340':'Nicht stabil',
    '1400':'Halbaminal',
    '1410':'Halbaminal',
    '1420':'Nicht stabil',
    '1430':'Nicht stabil',
    '1440':'Nicht stabil',
    '2000':'Hydrat',
    '2010':'Hydrat',
    '2020':'Nicht stabil',
    '2030':'Nicht stabil',
    '2040':'Nicht stabil',
    '2100':'Hydrat',
    '2110':'Hydrat',
    '2120':'Nicht stabil',
    '2130':'Nicht stabil',
    '2140':'Nicht stabil',
    '2200':'Nicht stabil',
    '2210':'Nicht stabil',
    '2220':'Nicht erlaubt',
    '2230':'Nicht erlaubt',
    '2240':'Nicht stabil',
    '2300':'Nicht stabil',
    '2310':'Nicht stabil',
    '2320':'Nicht stabil',
    '2330':'Nicht stabil',
    '2340':'Nicht stabil',
    '2400':'Nicht stabil',
    '2410':'Nicht stabil',
    '2420':'Nicht stabil',
    '2430':'Nicht stabil',
    '2440':'Nicht stabil',
    '3000':'Halbacetal',
    '3010':'Halbacetal',
    '3020':'Nicht stabil',
    '3030':'Nicht stabil',
    '3040':'Nicht stabil',
    '3100':'Halbacetal',
    '3110':'Halbketal',
    '3120':'Nicht stabil',
    '3130':'Nicht stabil',
    '3140':'Nicht stabil',
    '3200':'Nicht stabil',
    '3210':'Nicht stabil',
    '3220':'Nicht erlaubt',
    '3230':'Nicht erlaubt',
    '3240':'Nicht stabil',
    '3300':'Nicht stabil',
    '3310':'Nicht stabil',
    '3320':'Nicht stabil',
    '3330':'Nicht stabil',
    '3340':'Nicht stabil',
    '3400':'Nicht stabil',
    '3410':'Nicht stabil',
    '3420':'Nicht stabil',
    '3430':'Nicht stabil',
    '3440':'Nicht stabil',
    '4000':'Halbaminal',
    '4010':'Halbaminal',
    '4020':'Nicht stabil',
    '4030':'Nicht stabil',
    '4040':'Nicht stabil',
    '4100':'Halbaminal',
    '4110':'Halbaminal',
    '4120':'Nicht stabil',
    '4130':'Nicht stabil',
    '4140':'Nicht stabil',
    '4200':'Nicht stabil',
    '4210':'Nicht stabil',
    '4220':'Nicht erlaubt',
    '4230':'Nicht erlaubt',
    '4240':'Nicht stabil',
    '4300':'Nicht stabil',
    '4310':'Nicht stabil',
    '4320':'Nicht stabil',
    '4330':'Nicht stabil',
    '4340':'Nicht stabil',
    '4400':'Nicht stabil',
    '4410':'Nicht stabil',
    '4420':'Nicht stabil',
    '4430':'Nicht stabil',
    '4440':'Nicht stabil',
    // Carboxyverbindungen
    '0001':'Ether',
    '0011':'Ether',
    '0021':'Halbacetal',
    '0031':'Vollacetal',
    '0041':'Halbaminal',
    '0101':'Ether',
    '0111':'Ether',
    '0121':'Halbacetal',
    '0131':'Vollacetal',
    '0141':'Halbaminal',
    '0201':'Halbacetal',
    '0211':'Halbacetal',
    '0221':'Nicht erlaubt',
    '0231':'Nicht erlaubt',
    '0241':'Nicht stabil',
    '0301':'Vollacetal',
    '0311':'Vollacetal',
    '0321':'Nicht stabil',
    '0331':'Nicht stabil',
    '0341':'Nicht stabil',
    '0401':'Halbaminal',
    '0411':'Nicht stabil',
    '0421':'Nicht stabil',
    '0431':'Nicht stabil',
    '0441':'Nicht stabil',
    '1001':'Ether',
    '1011':'Ether',
    '1021':'Halbacetal',
    '1031':'Vollacetal',
    '1041':'Halbaminal',
    '1101':'Ether',
    '1111':'Ether',
    '1121':'Halbketal',
    '1131':'Vollketal',
    '1141':'Halbaminal',
    '1201':'Halbacetal',
    '1211':'Halbketal',
    '1221':'Nicht erlaubt',
    '1231':'Nicht erlaubt',
    '1241':'Nicht stabil',
    '1301':'Vollacetal',
    '1311':'Vollketal',
    '1321':'Nicht stabil',
    '1331':'Nicht stabil',
    '1341':'Nicht stabil',
    '1401':'Halbaminal',
    '1411':'Halbaminal',
    '1421':'Nicht stabil',
    '1431':'Nicht stabil',
    '1441':'Nicht stabil',
    '2001':'Halbacetal',
    '2011':'Halbacetal',
    '2021':'Nicht stabil',
    '2031':'Nicht stabil',
    '2041':'Nicht stabil',
    '2101':'Halbacetal',
    '2111':'Halbketal',
    '2121':'Nicht stabil',
    '2131':'Nicht stabil',
    '2141':'Nicht stabil',
    '2201':'Nicht stabil',
    '2211':'Nicht stabil',
    '2221':'Nicht erlaubt',
    '2231':'Nicht erlaubt',
    '2241':'Nicht stabil',
    '2301':'Nicht stabil',
    '2311':'Nicht stabil',
    '2321':'Nicht stabil',
    '2331':'Nicht stabil',
    '2341':'Nicht stabil',
    '2401':'Nicht stabil',
    '2411':'Nicht stabil',
    '2421':'Nicht stabil',
    '2431':'Nicht stabil',
    '2441':'Nicht stabil',
    '3001':'Vollacetal',
    '3011':'Vollacetal',
    '3021':'Nicht stabil',
    '3031':'Nicht stabil',
    '3041':'Nicht stabil',
    '3101':'Vollacetal',
    '3111':'Vollketal',
    '3121':'Nicht stabil',
    '3131':'Nicht stabil',
    '3141':'Nicht stabil',
    '3201':'Nicht stabil',
    '3211':'Nicht stabil',
    '3221':'Nicht erlaubt',
    '3231':'Nicht erlaubt',
    '3241':'Nicht stabil',
    '3301':'Nicht stabil',
    '3311':'Nicht stabil',
    '3321':'Nicht stabil',
    '3331':'Nicht stabil',
    '3341':'Nicht stabil',
    '3401':'Nicht stabil',
    '3411':'Nicht stabil',
    '3421':'Nicht stabil',
    '3431':'Nicht stabil',
    '3441':'Nicht stabil',
    '4001':'Halbaminal',
    '4011':'Nicht stabil',
    '4021':'Nicht stabil',
    '4031':'Nicht stabil',
    '4041':'Nicht stabil',
    '4101':'Halbaminal',
    '4111':'Halbaminal',
    '4121':'Nicht stabil',
    '4131':'Nicht stabil',
    '4141':'Nicht stabil',
    '4201':'Nicht stabil',
    '4211':'Nicht stabil',
    '4221':'Nicht erlaubt',
    '4231':'Nicht erlaubt',
    '4241':'Nicht stabil',
    '4301':'Nicht stabil',
    '4311':'Nicht stabil',
    '4321':'Nicht stabil',
    '4331':'Nicht stabil',
    '4341':'Nicht stabil',
    '4401':'Nicht stabil',
    '4411':'Nicht stabil',
    '4421':'Nicht stabil',
    '4431':'Nicht stabil',
    '4441':'Nicht stabil',
}

var sk_info={
    'Primärer Alkohol':'',
    'Sekundärer Alkohol':'',
    'Tertiärer Alkohol':'',
    'Aldehyd':'',
    'Keton':'',
    'Carbonsäure':'',
    'Ester':'',
    'Ether':'',
    'Carbonsäureamid':'',
    'Carbamidsäureester':'',
    'Hydrat':'',
    'Halbacetal':'',
    'Halbaminal':'',
    'Vollacetal':'',
    'Halbketal':'',
    'Vollketal':'',
    'Nicht stabil':''
}
