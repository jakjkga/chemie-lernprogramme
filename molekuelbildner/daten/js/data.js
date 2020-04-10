var strukturen={
  'H':['wasserstoff'],
  'C':['kohlenstoff', 'kohlenstoff2', 'methan', 'kohlenstoffdioxid', 'kohlensaeure', 'ethan', 'ethen', 'ethin', 'methanol','methanal', 'methansaeure', 'methylamin'],
  'N':['stickstoff', 'ammoniak', 'hydrazin', 'stickstoffmonoxid', 'stickstoffdioxid', 'salpetersaeure', 'blausaeure'],
  'O':['sauerstoff', 'ozon', 'wasser', 'wasserstoffperoxid', 'oxoniumion'],
  'F':['fluor', 'fluorwasserstoff'],
  'P':['phosphor', 'phosphin', 'tetraphosphordecaoxid', 'phosphorsaeure', 'phosphorige_saeure'],
  'S':['schwefel', 'schwefelwasserstoff', 'schwefeldioxid', 'schwefeltrioxid', 'schwefelsaeure'],
  'Cl':['chlor', 'chlorwasserstoff', 'perchlorsaeure'],
  'Br':['brom', 'bromwasserstoff'],
  'I':['iod', 'iodwasserstoff', 'triiodidion']
}

var texte={
  // H
  'wasserstoff':[
      'elementarer Wasserstoff (Hydrogenium)',
      '<label for="wasserstoff"><input type="radio" name="auswahl" id="wasserstoff" onclick="zeige(this.id)" />elementarer Wasserstoff</label><br />'  
  ],
  // C
  'kohlenstoff':[
      'elementarer Kohlenstoff',
      '<label for="kohlenstoff"><input type="radio" name="auswahl" id="kohlenstoff" onclick="zeige(this.id)" />elementarer Kohlenstoff (Diamant)</label><br />'  
  ],
  'kohlenstoff2':[
      'elementarer Kohlenstoff',
      '<label for="kohlenstoff2"><input type="radio" name="auswahl" id="kohlenstoff2" onclick="zeige(this.id)" />elementarer Kohlenstoff (Graphit)</label><br />'  
  ],
  'methan':[
      'Methan',
      '<label for="methan"><input type="radio" name="auswahl" id="methan" onclick="zeige(this.id)" />Methan</label><br />'  
  ],
  'kohlenstoffdioxid':[
      'kohlenstoffdioxid',
      '<label for="kohlenstoffdioxid"><input type="radio" name="auswahl" id="kohlenstoffdioxid" onclick="zeige(this.id)" />Kohlenstoffdioxid</label><br />'  
  ],
  'kohlensaeure':[
      'Kohlensäure',
      '<label for="kohlensaeure"><input type="radio" name="auswahl" id="kohlensaeure" onclick="zeige(this.id)" />Kohlensäure</label><br />'  
  ],
  'ethan':[
      'Ethan',
      '<label for="ethan"><input type="radio" name="auswahl" id="ethan" onclick="zeige(this.id)" />Ethan</label><br />'  
  ],
  'ethen':[
      'Ethen',
      '<label for="ethen"><input type="radio" name="auswahl" id="ethen" onclick="zeige(this.id)" />Ethen</label><br />'  
  ],
  'ethin':[
      'Ethin',
      '<label for="ethin"><input type="radio" name="auswahl" id="ethin" onclick="zeige(this.id)" />Ethin</label><br />'  
  ],
  'methanol':[
      'Methanol',
      '<label for="methanol"><input type="radio" name="auswahl" id="methanol" onclick="zeige(this.id)" />Methanol</label><br />'  
  ],
  'methanal':[
      'Methanal',
      '<label for="methanal"><input type="radio" name="auswahl" id="methanal" onclick="zeige(this.id)" />Methanal (Formaldehyd)</label><br />'  
  ],
  'methansaeure':[
      'Methansäure',
      '<label for="methansaeure"><input type="radio" name="auswahl" id="methansaeure" onclick="zeige(this.id)" />Methansäure (Ameisensäure)</label><br />'  
  ],
  'methylamin':[
      'Methylamin',
      '<label for="methylamin"><input type="radio" name="auswahl" id="methylamin" onclick="zeige(this.id)" />Methylamin (Aminomethan)</label><br />'  
  ],
  // N
  'stickstoff':[
      'elementarer Stickstoff',
      '<label for="stickstoff"><input type="radio" name="auswahl" id="stickstoff" onclick="zeige(this.id)" />elementarer Stickstoff</label><br />'  
  ],
  'ammoniak':[
      'Ammoniak',
      '<label for="ammoniak"><input type="radio" name="auswahl" id="ammoniak" onclick="zeige(this.id)" />Ammoniak</label><br />'  
  ],
  'hydrazin':[
      'Hydrazin',
      '<label for="hydrazin"><input type="radio" name="auswahl" id="hydrazin" onclick="zeige(this.id)" />Hydrazin</label><br />'  
  ],
  'stickstoffmonoxid':[
      'Stickstoffmonoxid',
      '<label for="stickstoffmonoxid"><input type="radio" name="auswahl" id="stickstoffmonoxid" onclick="zeige(this.id)" />Stickstoffmonoxid</label><br />'  
  ],
  'stickstoffdioxid':[
      'Stickstoffdioxid',
      '<label for="stickstoffdioxid"><input type="radio" name="auswahl" id="stickstoffdioxid" onclick="zeige(this.id)" />Stickstoffdioxid</label><br />'  
  ],
  'salpetersaeure':[
      'Salpetersäure',
      '<label for="salpetersaeure"><input type="radio" name="auswahl" id="salpetersaeure" onclick="zeige(this.id)" />Salpetersäure</label><br />'  
  ],
  'blausaeure':[
      'Blausäure',
      '<label for="blausaeure"><input type="radio" name="auswahl" id="blausaeure" onclick="zeige(this.id)" />Blausäure</label><br />'  
  ],
  // O
  'sauerstoff':[
      'elementarer Sauerstoff',
      '<label for="sauerstoff"><input type="radio" name="auswahl" id="sauerstoff" onclick="zeige(this.id)" />elementarer Sauerstoff</label><br />'  
  ],
  'ozon':[
      'Ozon',
      '<label for="ozon"><input type="radio" name="auswahl" id="ozon" onclick="zeige(this.id)" />Ozon</label><br />'  
  ],
  'wasser':[
      'Wasser',
      '<label for="wasser"><input type="radio" name="auswahl" id="wasser" onclick="zeige(this.id)" />Wasser</label><br />'  
  ],
  'oxoniumion':[
      'Oxoniumion',
      '<label for="oxoniumion"><input type="radio" name="auswahl" id="oxoniumion" onclick="zeige(this.id)" />Oxoniumion</label><br />'  
  ],
  'wasserstoffperoxid':[
      'Wasserstoffperoxid',
      '<label for="wasserstoffperoxid"><input type="radio" name="auswahl" id="wasserstoffperoxid" onclick="zeige(this.id)" />Wasserstoffperoxid</label><br />'  
  ],
  // F
  'fluor':[
      'elementares Fluor',
      '<label for="fluor"><input type="radio" name="auswahl" id="fluor" onclick="zeige(this.id)" />elementares Fluor</label><br />'  
  ],
  'fluorwasserstoff':[
      'Fluorwasserstoff (Hydrogenfluorid)',
      '<label for="fluorwasserstoff"><input type="radio" name="auswahl" id="fluorwasserstoff" onclick="zeige(this.id)" />Fluorwasserstoff</label><br />'  
  ],
  // P
  'phosphor':[
      'elementarer Phosphor',
      '<label for="phosphor"><input type="radio" name="auswahl" id="phosphor" onclick="zeige(this.id)" />elementarer Phosphor (weißer Phosphor)</label><br />'  
  ],
  'phosphin':[
      'Phosphin',
      '<label for="phosphin"><input type="radio" name="auswahl" id="phosphin" onclick="zeige(this.id)" />Phosphin</label><br />'  
  ],
  'tetraphosphordecaoxid':[
      'Tetraphosphordecaoxid',
      '<label for="tetraphosphordecaoxid"><input type="radio" name="auswahl" id="tetraphosphordecaoxid" onclick="zeige(this.id)" />Tetraphosphordecaoxid</label><br />'  
  ],
  'phosphorsaeure':[
      'Phosphorsäure',
      '<label for="phosphorsaeure"><input type="radio" name="auswahl" id="phosphorsaeure" onclick="zeige(this.id)" />Phosphorsäure</label><br />'  
  ],
  'phosphorige_saeure':[
      'phosphorige Säure',
      '<label for="phosphorige_saeure"><input type="radio" name="auswahl" id="phosphorige_saeure" onclick="zeige(this.id)" />phosphorige Säure</label><br />'  
  ],
  // S
  'schwefel':[
      'elementarer Schwefel',
      '<label for="schwefel"><input type="radio" name="auswahl" id="schwefel" onclick="zeige(this.id)" />elementarer Schwefel</label><br />'  
  ],
  'schwefelwasserstoff':[
      'Schwefelwasserstoff (Dihydrogensulfid)',
      '<label for="schwefelwasserstoff"><input type="radio" name="auswahl" id="schwefelwasserstoff" onclick="zeige(this.id)" />Schwefelwasserstoff</label><br />'  
  ],
  'schwefeldioxid':[
      'Schwefeldioxid (Schwefel(IV)-oxid)',
      '<label for="schwefeldioxid"><input type="radio" name="auswahl" id="schwefeldioxid" onclick="zeige(this.id)" />Schwefeldioxid</label><br />'  
  ],
  'schwefeltrioxid':[
      'Schwefeltrioxid (Schwefel(VI)-oxid)',
      '<label for="schwefeltrioxid"><input type="radio" name="auswahl" id="schwefeltrioxid" onclick="zeige(this.id)" />Schwefeltrioxid</label><br />'  
  ],
  'schwefelsaeure':[
      'Schwefelsäure',
      '<label for="schwefelsaeure"><input type="radio" name="auswahl" id="schwefelsaeure" onclick="zeige(this.id)" />Schwefelsäure</label><br />'  
  ],
  // Cl
  'chlor':[
      'elementares Chlor',
      '<label for="chlor"><input type="radio" name="auswahl" id="chlor" onclick="zeige(this.id)" />elementares Chlor</label><br />'  
  ],
  'chlorwasserstoff':[
      'Chlorwasserstoff (Hydrogenchlorid)',
      '<label for="chlorwasserstoff"><input type="radio" name="auswahl" id="chlorwasserstoff" onclick="zeige(this.id)" />Chlorwasserstoff</label><br />'  
  ],
  'perchlorsaeure':[
      'Perchlorsaeure',
      '<label for="perchlorsaeure"><input type="radio" name="auswahl" id="perchlorsaeure" onclick="zeige(this.id)" />Perchlorsaeure</label><br />'  
  ],
  // Br
  'brom':[
      'elementares Brom',
      '<label for="brom"><input type="radio" name="auswahl" id="brom" onclick="zeige(this.id)" />elementares Brom</label><br />'  
  ],
  'bromwasserstoff':[
      'Bromwasserstoff (Hydrogenbromid)',
      '<label for="bromwasserstoff"><input type="radio" name="auswahl" id="bromwasserstoff" onclick="zeige(this.id)" />Bromwasserstoff</label><br />'  
  ],
  // I
  'iod':[
      'elementares Iod',
      '<label for="iod"><input type="radio" name="auswahl" id="iod" onclick="zeige(this.id)" />elementares Iod</label><br />'  
  ],
  'iodwasserstoff':[
      'Iodwasserstoff (Hydrogeniodid)',
      '<label for="iodwasserstoff"><input type="radio" name="auswahl" id="iodwasserstoff" onclick="zeige(this.id)" />Iodwasserstoff</label><br />'  
  ],
  'triiodidion':[
      'Triiodidion',
      '<label for="triiodidion"><input type="radio" name="auswahl" id="triiodidion" onclick="zeige(this.id)" />Triiodidion (I₃⁻)</label><br />'  
  ],
  
  
  
  
  







}
