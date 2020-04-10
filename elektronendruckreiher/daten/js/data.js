var redm_knoepfe=[
  'Redm1_Na',
  'Redm1_H₂_alkalisch',
  'Redm1_Zn',
  'Redm1_H₂_sauer',
  'Redm1_Cu',
  'Redm1_MnO₂_alkalisch',
  'Redm1_Cr³⁺_alkalisch',
  'Redm1_I⁻',
  'Redm1_Br⁻',
  'Redm1_Cl⁻',
  'Redm1_Mn²⁺_sauer',
  'Redm1_Cr³⁺_sauer'
];
var oxm_knoepfe=[
  'Oxm2_Na⁺',
  'Oxm2_H₂O_alkalisch',
  'Redm1_Zn²⁺',
  'Oxm2_H₃O⁺',
  'Oxm2_Cu²⁺',
  'Oxm2_MnO₄⁻_alkalisch',
  'Oxm2_CrO₄²⁻_alkalisch',
  'Oxm2_I₂',
  'Oxm2_Br₂',
  'Oxm2_Cl₂',
  'Oxm2_MnO₄⁻_sauer',
  'Oxm2_Cr₂O₇²⁻_sauer'
];


//SCHLUESSEL:Teilgleichung
var ox={
  'start':'<span class="redm">Redm1<span class="ox">niedrige OZ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> → <span class="oxm">Oxm1<sup>n+</sup><span class="ox">hohe OZ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> + <span class="el">n e⁻</span>',
  'Redm1_Na':'<span class="redm">Na<span class="ox">0</span></span> → <span class="oxm">Na<span class="ox">+I</span>⁺</span> + <span class="el">e⁻</span>',
  'Redm1_H₂_alkalisch':'<span class="redm">H₂<span class="ox">0</span></span> + <span class="ladung">2 OH⁻</span> → <span class="oxm">H₂<span class="ox">+I</span>O</span> + <span class="el">2 e⁻</span> + H₂O',
  'Redm1_Zn':'<span class="redm">Zn<span class="ox">0</span></span> → <span class="oxm">Zn<span class="ox">+II</span>²⁺</span> + <span class="el">2 e⁻</span>',
  'Redm1_H₂_sauer':'<span class="redm">3 H₂<span class="ox">&nbsp;&nbsp;&nbsp;&nbsp;0</span></span> + 6 H₂O → <span class="oxm">2 H₃<span class="ox">+I</span>O⁺</span> + <span class="el">6 e⁻</span> + <span class="ladung">4 H₃O⁺</span>',
  'Redm1_Cu':'<span class="redm">Cu<span class="ox">0</span></span> → <span class="oxm">Cu<span class="ox">+II</span>²⁺</span> + <span class="el">2 e⁻</span>',
  'Redm1_MnO₂_alkalisch':'<span class="redm">Mn<span class="ox">+IV</span>O₂</span> + <span class="ladung">4 OH⁻</span> → <span class="oxm">Mn<span class="ox">+VII</span>O₄⁻</span> + <span class="el">3 e⁻</span> + 2 H₂O',
  'Redm1_Cr³⁺_alkalisch':'<span class="redm">Cr³⁺<span class="ox">+III</span></span> + <span class="ladung">8 OH⁻</span> → <span class="oxm">Cr<span class="ox">+VI</span>O₄²⁻</span> + <span class="el">3 e⁻</span> + 4 H₂O',
  'Redm1_I⁻':'<span class="redm">2 I⁻<span class="ox">-I</span></span> → <span class="oxm">I₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span>',
  'Redm1_Br⁻':'<span class="redm">2 Br⁻<span class="ox">-I</span></span> → <span class="oxm">Br₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span>',
  'Redm1_Cl⁻':'<span class="redm">2 Cl⁻<span class="ox">-I</span></span> → <span class="oxm">Cl₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span>',
  'Redm1_Mn²⁺_sauer':'<span class="redm">Mn²⁺<span class="ox">+II</span></span> + 12 H₂O → <span class="oxm">Mn<span class="ox">+VII</span>O₄⁻</span> + <span class="el">5 e⁻</span> + <span class="ladung">8 H₃O⁺</span>',
  'Redm1_Cr³⁺_sauer':'<span class="redm">2 Cr³⁺<span class="ox">+III</span></span> + 21 H₂O → <span class="oxm">Cr₂<span class="ox">+VI</span>O₇²⁻</span> + <span class="el">6 e⁻</span> + <span class="ladung">14 H₃O⁺</span>'
};
//SCHLUESSEL:Teilgleichung
var red={
  'start':'<span class="oxm">Oxm2<span class="ox">hohe OZ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> + <span class="el">m e⁻</span> → <span class="redm">Redm2<sup>m-</sup><span class="ox">niedrige OZ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>',
  'Oxm2_Na⁺':'<span class="oxm">Na<span class="ox">+I</span>⁺</span> + <span class="el">e⁻</span> → <span class="redm">Na<span class="ox">0</span></span>',
  'Oxm2_H₂O_alkalisch':'<span class="oxm">H₂<span class="ox">+I</span>O</span> + <span class="el">2 e⁻</span> + H₂O → <span class="redm">H₂<span class="ox">0</span></span> + <span class="ladung">2 OH⁻</span>',
  'Oxm2_Zn²⁺':'<span class="oxm">Zn<span class="ox">+II</span>²⁺</span> + <span class="el">2 e⁻</span> → <span class="redm">Zn<span class="ox">0</span></span>',
  'Oxm2_H₃O⁺_sauer':'<span class="oxm">2 H₃<span class="ox">+I</span>O⁺</span> + <span class="el">6 e⁻</span> + <span class="ladung">4 H₃O⁺</span> → <span class="redm">3 H₂<span class="ox">&nbsp;&nbsp;&nbsp;&nbsp;0</span></span> + 6 H₂O',
  'Oxm2_Cu²⁺':'<span class="oxm">Cu<span class="ox">+II</span>²⁺</span> + <span class="el">2 e⁻</span> → <span class="redm">Cu<span class="ox">0</span></span>',
  'Oxm2_MnO₄⁻_alkalisch':'<span class="oxm">Mn<span class="ox">+VII</span>O₄⁻</span> + <span class="el">3 e⁻</span> + 2 H₂O → <span class="redm">Mn<span class="ox">+IV</span>O₂</span> + <span class="ladung">4 OH⁻</span>',
  'Oxm2_CrO₄²⁻_alkalisch':'<span class="oxm">Cr<span class="ox">+VI</span>O₄²⁻</span> + <span class="el">3 e⁻</span> + 4 H₂O → <span class="redm">Cr³⁺<span class="ox">+III</span></span> + <span class="ladung">8 OH⁻</span>',
  'Oxm2_I₂':'<span class="oxm">I₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span> → <span class="redm">2 I⁻<span class="ox">-I</span></span>',
  'Oxm2_Br₂':'<span class="oxm">Br₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span> → <span class="redm">2 Br⁻<span class="ox">-I</span></span>',
  'Oxm2_Cl₂':'<span class="oxm">Cl₂<span class="ox">0</span></span> + <span class="el">2 e⁻</span> → <span class="redm">2 Cl⁻<span class="ox">-I</span></span>',
  'Oxm2_MnO₄⁻_sauer':'<span class="oxm">Mn<span class="ox">+VII</span>O₄⁻</span> + <span class="el">5 e⁻</span> + <span class="ladung">8 H₃O⁺</span> → <span class="redm">Mn²⁺<span class="ox">+II</span></span> + 12 H₂O',
  'Oxm2_Cr₂O₇²⁻_sauer':'<span class="oxm">Cr₂<span class="ox">+VI</span>O₇²⁻</span> + <span class="el">6 e⁻</span> + <span class="ladung">14 H₃O⁺</span> → <span class="redm">2 Cr³⁺<span class="ox">+III</span></span> + 21 H₂O'
};

