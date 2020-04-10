var ampholyte=[
  'S2_HSO₄⁻',
  'S2_H₂PO₄⁻',
  'S2_HS⁻',
  'S2_HCO₃⁻',
  'S2_HPO₄²⁻',
  'S2_H₂O',
  'B1_HSO₄⁻',
  'B1_H₂O',
  'B1_H₂PO₄⁻',
  'B1_HCO₃⁻',
  'B1_HPO₄²⁻',
  'B1_HS⁻',
]

var saeure_knoepfe=[
  'S2_HCl',
  'S2_H₂SO₄',
  'S2_H₃O⁺',
  'S2_HNO₃',
  'S2_HSO₄⁻',
  'S2_H₃PO₄',
  'S2_CH₃COOH',
  'S2_H₂CO₃',
  'S2_H₂S',
  'S2_H₂PO₄⁻',
  'S2_NH₄⁺',
  'S2_HCN',
  'S2_HCO₃⁻',
  'S2_HPO₄²⁻',
  'S2_HS⁻',
  'S2_H₂O',
  'S2_CH₃CH₂OH'
]
var basen_knoepfe=[
  'B1_Cl⁻',
  'B1_HSO₄⁻',
  'B1_H₂O',
  'B1_NO₃⁻',
  'B1_SO₄²⁻',
  'B1_H₂PO₄⁻',
  'B1_CH₃COO⁻',
  'B1_HCO₃⁻',
  'B1_HS⁻',
  'B1_HPO₄²⁻',
  'B1_NH₃',
  'B1_CN⁻',
  'B1_CO₃²⁻',
  'B1_PO₄³⁻',
  'B1_S²⁻',
  'B1_OH⁻',
  'B1_CH₃CH₂O⁻'
]

//SCHLUESSEL:[SF, SF korresp. Base, Name korresp. Base, pKs, Stärke]
var saeuren={
'start':['S2', 'B2', 'B2', '', 'noch nicht ausgewählten'],
'S2_HCl':['HCl', 'Cl⁻', 'Chloridion', '-6', 'sehr starken Säure'],
'S2_H₂SO₄':['H₂SO₄', 'HSO₄⁻', 'Hydrogensulfation', '-3', 'sehr starken Säure'],
'S2_H₃O⁺':['H₃O⁺', 'H₂O', 'Wasser', '-1.74', 'starken Säure'],
'S2_HNO₃':['HNO₃', 'NO₃⁻', 'Nitration', '-1.32', 'starken Säure'],
'S2_HSO₄⁻':['HSO₄⁻', 'SO₄²⁻', 'Sulfation', '1.92', 'starken Säure'],
'S2_H₃PO₄':['H₃PO₄', 'H₂PO₄⁻', 'Dihydrogenphosphation', '2.13', 'starken Säure'],
'S2_CH₃COOH':['CH₃COOH', 'CH₃COO⁻', 'Acetation', '4.75', 'schwachen Säure'],
'S2_H₂CO₃':['H₂CO₃', 'HCO₃⁻', 'Hydrogencarbonation', '6.52', 'schwachen Säure'],
'S2_H₂S':['H₂S', 'HS⁻', 'Hydrogensulfidion', '6.92', 'schwachen Säure'],
'S2_H₂PO₄⁻':['H₂PO₄⁻', 'HPO₄²⁻', 'Hydrogenphosphation', '7.20', 'schwachen Säure'],
'S2_NH₄⁺':['NH₄⁺', 'NH₃', 'Ammoniak', '9.25', 'sehr schwachen Säure'],
'S2_HCN':['HCN', 'CN⁻', 'Cyanidion', '9.40', 'sehr schwachen Säure'],
'S2_HCO₃⁻':['HCO₃⁻', 'CO₃²⁻', 'Carbonation', '10.40', 'sehr schwachen Säure'],
'S2_HPO₄²⁻':['HPO₄²⁻', 'PO₄³⁻', 'Phosphation', '12.36', 'sehr schwachen Säure'],
'S2_HS⁻':['HS⁻', 'S²⁻', 'Sulfidion', '13.00', 'sehr schwachen Säure'],
'S2_H₂O':['H₂O', 'OH⁻', 'Hydroxidion', '15.74', 'sehr schwachen Säure'],
'S2_CH₃CH₂OH':['CH₃CH₂OH', 'CH₃CH₂O⁻', 'Ethanolation', '15.90', 'extrem schwachen Säure']
}
//SCHLUESSEL:[SF, SF korresp. Säure, Name korresp. Säure, pKb, Stärke]
var basen={
'start':['B1', 'S1', 'S1', '', 'noch nicht ausgewählte'],
'B1_Cl⁻':['Cl⁻', 'HCl', 'Chlorwasserstoff', '20', 'extrem schwache Base'],
'B1_HSO₄⁻':['HSO₄⁻', 'H₂SO₄', 'Schwefelsäure', '17', 'extrem schwache Base'],
'B1_H₂O':['H₂O', 'H₃O⁺', 'Oxoniumion', '15.74', 'sehr schwache Base'],
'B1_NO₃⁻':['NO₃⁻', 'HNO₃', 'Salpetersäure', '15.32', 'sehr schwache Base'],
'B1_SO₄²⁻':['SO₄²⁻', 'HSO₄⁻', 'Hydrogensulfation', '12.08', 'sehr schwache Base'],
'B1_H₂PO₄⁻':['H₂PO₄⁻', 'H₃PO₄', 'Phosphorsäure', '11.87', 'sehr schwache Base'],
'B1_CH₃COO⁻':['CH₃COO⁻', 'CH₃COOH', 'Essigsäure', '9.25', 'sehr schwache Base'],
'B1_HCO₃⁻':['HCO₃⁻', 'H₂CO₃', 'Kohlensäure', '7.48', 'schwache Base'],
'B1_HS⁻':['HS⁻', 'H₂S', 'Schwefelwasserstoff', '7.08', 'schwache Base'],
'B1_HPO₄²⁻':['HPO₄²⁻', 'H₂PO₄⁻', 'Dihydrogenphosphation', '6.80', 'schwache Base'],
'B1_NH₃':['NH₃', 'NH₄⁺', 'Ammoniumion', '4.75', 'schwache Base'],
'B1_CN⁻':['CN⁻', 'HCN', 'Blausäure', '4.60', 'schwache Base'],
'B1_CO₃²⁻':['CO₃²⁻', 'HCO₃⁻', 'Hydrogencarbonation', '3.60', 'schwache Base'],
'B1_PO₄³⁻':['PO₄³⁻', 'HPO₄²⁻', 'Hydrogenphosphation', '1.64', 'starke Base'],
'B1_S²⁻':['S²⁻', 'HS⁻', 'Hydrogensulfidion', '-1.00', 'starke Base'],
'B1_OH⁻':['OH⁻', 'H₂O', 'Wasser', '-1.74', 'starke Base'],
'B1_CH₃CH₂O⁻':['CH₃CH₂O⁻', 'CH₃CH₂OH', 'Ethanol', '-1.90', 'sehr starke Base']
}

// Startwerte Säure 2
var sf_s2=saeuren['start'][0];
var bez_s2='S2';
var sf_b2=saeuren['start'][1];
var bez_b2=saeuren['start'][2];
var pks=saeuren['start'][3];
var staerke_s2=saeuren['start'][4];
var pks_s1='';
// Startwerte Base 1
var sf_b1=basen['start'][0];
var bez_b1='B1';
var sf_s1=basen['start'][1];
var bez_s1=basen['start'][2];
var pkb=basen['start'][3];
var staerke_b1=basen['start'][4];
var pkb_b2='';
