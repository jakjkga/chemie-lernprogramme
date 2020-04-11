/*
################################################################################
##                            Summenformeln und Namen                         ##
################################################################################
*/
beispiele=new Array();
beispiele['-']=['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
// AL₁      ####################################################################
beispiele['H₂']=[
'Wasserstoff', // NameDesMolekuels
'1', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₁</span>', // Typ
'1', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'2 (1. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'nur ein Ligand', // WinkelLAL
's ⇒ keine',  // Hybridisierung
'AL1' // Typ für Bild
];
// AL₁E₁     ####################################################################
beispiele['N₂']=[
'Stickstoff', // NameDesMolekuels
'1', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₁</span>', // Typ
'2', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'1', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'linear', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'180°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp',  // Hybridisierung
'AL1E1' // Typ für Bild
];
// AL₁E₂     ###################################################################
beispiele['O₂']=[
'Sauerstoff', // NameDesMolekuels
'1', // ZahlLiganden
'2', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₂</span>', // Typ
'3', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'trigonal planar', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'120°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp²',  // Hybridisierung
'AL1E2' // Typ für Bild
];
// AL₁E₃    ####################################################################
beispiele['F₂']=[
'Fluor', // NameDesMolekuels
'1', // ZahlLiganden
'3', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₃</span>', // Typ
'4', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp³',  // Hybridisierung
'AL1E3' // Typ für Bild
];
beispiele['Cl₂']=[
'Chlor', // NameDesMolekuels
'1', // ZahlLiganden
'3', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₃</span>', // Typ
'4', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp³',  // Hybridisierung
'AL1E3' // Typ für Bild
];
beispiele['Br₂']=[
'Brom', // NameDesMolekuels
'1', // ZahlLiganden
'3', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₃</span>', // Typ
'4', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp³',  // Hybridisierung
'AL1E3' // Typ für Bild
];
beispiele['I₂']=[
'Iod', // NameDesMolekuels
'1', // ZahlLiganden
'3', // ZahlFreieEP
'A<span class="orangefarben">L₁</span><span class="gruen">E₃</span>', // Typ
'4', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'nur ein Ligand', // WinkelLAL
'sp³',  // Hybridisierung
'AL1E3' // Typ für Bild
];
// AL₂      ####################################################################
beispiele['CO₂']=[
'Kohlenstoffdioxid', // NameDesMolekuels
'2', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₂</span>', // Typ
'2', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'2', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'180°', // WinkelLAL
'sp',  // Hybridisierung
'AL2' // Typ für Bild
];
beispiele['NO₂⁺']=[
'Nitroniumion', // NameDesMolekuels
'2', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₂</span>', // Typ
'2', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'2', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'180°', // WinkelLAL
'sp',  // Hybridisierung
'AL2' // Typ für Bild
];
beispiele['HCN']=[
'Blausäure', // NameDesMolekuels
'2', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₂</span>', // Typ
'2', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'1', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'180°', // WinkelLAL
'sp',  // Hybridisierung
'AL2' // Typ für Bild
];
beispiele['CHCH']=[
'Ethin', // NameDesMolekuels
'2', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₂</span>', // Typ
'2', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'1', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'180°', // WinkelLAL
'sp',  // Hybridisierung
'AL2' // Typ für Bild
];
// AL₂E₁     ###################################################################
beispiele['SO₂']=[
'Schwefeldioxid', // NameDesMolekuels
'2', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₂</span><span class="gruen">E₁</span>', // Typ
'3', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'2', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'trigonal planar', // RaeumlicherBauMitFreienEP
'gewinkelt', // RaeumlicherBauMitLiganden
'ca. 120°', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL2E1' // Typ für Bild
];
beispiele['NO₂']=[
'Stickstoffdioxid', // NameDesMolekuels
'2', // ZahlLiganden
'½ (Ausnahme)', // ZahlFreieEP
'A<span class="orangefarben">L₂</span><span class="gruen">E₁</span>', // Typ
'3', // GesamtzahlPlaetze
'1', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'7 (Ausnahme)', // GesamtzahlValenzelektronen
'trigonal planar', // RaeumlicherBauMitFreienEP
'gewinkelt', // RaeumlicherBauMitLiganden
'ca. 120°', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL2E1' // Typ für Bild
];
// AL₂E₂     ###################################################################
beispiele['H₂O']=[
'Wasser', // NameDesMolekuels
'2', // ZahlLiganden
'2', // ZahlFreieEP
'A<span class="orangefarben">L₂</span><span class="gruen">E₂</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'gewinkelt', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL2E2' // Typ für Bild
];
beispiele['H₂S']=[
'Schwefelwasserstoff', // NameDesMolekuels
'2', // ZahlLiganden
'2', // ZahlFreieEP
'A<span class="orangefarben">L₂</span><span class="gruen">E₂</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'gewinkelt', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL2E2' // Typ für Bild
];
// AL₂E₃      ####################################################################
beispiele['I₃⁻']=[
'Triiodidion', // NameDesMolekuels
'2', // ZahlLiganden
'3', // ZahlFreieEP
'A<span class="orangefarben">L₂</span><span class="gruen">E₃</span>', // Typ
'5', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (5. Periode)', // GesamtzahlValenzelektronen
'trigonal bipyramidal', // RaeumlicherBauMitFreienEP
'linear', // RaeumlicherBauMitLiganden
'90°', // WinkelEAL
'180°', // WinkelLAL
'sp³d',  // Hybridisierung
'AL2E3' // Typ für Bild
];
// AL₃     ###################################################################
beispiele['H₂CO₃']=[
'Kohlensäure', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['CO₃²⁻']=[
'Carbonation', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['CHOH']=[
'Methanal', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['HCOOH']=[
'Methansäure', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['HNO₃']=[
'Salpetersäure', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['NO₃⁻']=[
'Nitration', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['BF₃']=[
'Bortrifluorid', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'6 (Elektronenmangel!)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
beispiele['SO₃']=[
'Schwefeltrioxid', // NameDesMolekuels
'3', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₃</span>', // Typ
'3', // GesamtzahlPlaetze
'0', // ZahlEinfachbindungen
'3', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'12 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal planar', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 120°', // WinkelLAL
'sp²',  // Hybridisierung
'AL3' // Typ für Bild
];
// AL₃E₁ ###################################################################
beispiele['NH₃']=[
'Ammoniak', // NameDesMolekuels
'3', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₃</span><span class="gruen">E₁</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'trigonal pyramidal', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL3E1' // Typ für Bild
];
beispiele['H₃O⁺']=[
'Oxoniumion', // NameDesMolekuels
'3', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₃</span><span class="gruen">E₁</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'trigonal pyramidal', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL3E1' // Typ für Bild
];
beispiele['PCl₃']=[
'Phosphortrichlorid', // NameDesMolekuels
'3', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₃</span><span class="gruen">E₁</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'trigonal pyramidal', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL3E1' // Typ für Bild
];
beispiele['H₂SO₃']=[
'Schwefelige Säure', // NameDesMolekuels
'3', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₃</span><span class="gruen">E₁</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'trigonal pyramidal', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL3E1' // Typ für Bild
];
beispiele['SO₃²⁻']=[
'Sulfition', // NameDesMolekuels
'3', // ZahlLiganden
'1', // ZahlFreieEP
'A<span class="orangefarben">L₃</span><span class="gruen">E₁</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'tetraedrisch', // RaeumlicherBauMitFreienEP
'trigonal pyramidal', // RaeumlicherBauMitLiganden
'ca. 109°', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL3E1' // Typ für Bild
];
// AL₄       ###################################################################
beispiele['CH₄']=[
'Methan', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'4', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['NH₄⁺']=[
'Ammoniumion', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'4', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'8', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['H₂SO₄']=[
'Schwefelsäure', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'2', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'12 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['SO₄²⁻']=[
'Sulfation', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'2', // ZahlEinfachbindungen
'2', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'12 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['H₃PO₄']=[
'Phosphorsäure', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['PO₄³⁻']=[
'Phosphation', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
beispiele['POCl₃']=[
'Phosphoroxidtrichlorid', // NameDesMolekuels
'4', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₄</span>', // Typ
'4', // GesamtzahlPlaetze
'3', // ZahlEinfachbindungen
'1', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'tetraedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'ca. 109°', // WinkelLAL
'sp³',  // Hybridisierung
'AL4' // Typ für Bild
];
// AL₅      ####################################################################
beispiele['PF₅']=[
'Phosphorpentafluorid', // NameDesMolekuels
'5', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₅</span>', // Typ
'5', // GesamtzahlPlaetze
'5', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'10 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'trigonal bipyramidal', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'90°, 120°, 180°', // WinkelLAL
'sp³d',  // Hybridisierung
'AL5' // Typ für Bild
];
// AL₆      ####################################################################
beispiele['SF₆']=[
'Schwefelhexafluorid', // NameDesMolekuels
'6', // ZahlLiganden
'0', // ZahlFreieEP
'A<span class="orangefarben">L₆</span>', // Typ
'6', // GesamtzahlPlaetze
'6', // ZahlEinfachbindungen
'0', // ZahlDoppelbindungen
'0', // ZahlDreifachbindungen
'12 (3. Periode)', // GesamtzahlValenzelektronen
'kein freies EP', // RaeumlicherBauMitFreienEP
'oktaedrisch', // RaeumlicherBauMitLiganden
'kein freies EP', // WinkelEAL
'90°, 180°', // WinkelLAL
'sp³d²',  // Hybridisierung
'AL6' // Typ für Bild
];
/*
################################################################################
##                                Funktionen                                  ##
################################################################################
*/

function lade_seite() {
    document.forms['SF'].elements['SF_auswahl'].options[0].selected="selected";
    hole_aktuellen_index('SF', 'SF_auswahl')
}

var oktettauswahl_liste=[ 'Phosphation',
    'Phosphoroxidtrichlorid',
    'Phosphorsäure',
    'Schwefeldioxid',
    'Schwefelige Säure',
    'Schwefeltrioxid',
    'Schwefelsäure',
    'Sulfation',
    'Sulfition'
];

Array.prototype.contains=function(gesuchter_wert) {
    for (var i=0, len=this.length; i < len && this[i] !== gesuchter_wert; i++);
         return i < len;
}

function hole_aktuellen_index(auswahlname, optionname) {
    var schluessel=String(document.forms[auswahlname].elements[optionname].value);
    var NameDesMolekuels=beispiele[schluessel][0];
    var ZahlLiganden=beispiele[schluessel][1];
    var ZahlFreieEP=beispiele[schluessel][2];
    var Typ=beispiele[schluessel][3];
    var GesamtzahlPlaetze=beispiele[schluessel][4];
    var ZahlEinfachbindungen=beispiele[schluessel][5];
    var ZahlDoppelbindungen=beispiele[schluessel][6];
    var ZahlDreifachbindungen=beispiele[schluessel][7];
    var GesamtzahlValenzelektronen=beispiele[schluessel][8];
    var RaeumlicherBauMitFreienEP=beispiele[schluessel][9];
    var RaeumlicherBauMitLiganden=beispiele[schluessel][10];
    var WinkelEAL=beispiele[schluessel][11];
    var WinkelLAL=beispiele[schluessel][12];
    var Hybridisierung=beispiele[schluessel][13];
    var Bildname3D=beispiele[schluessel][14];
    // Umschalter aktivieren für die oktettauswahl_liste 
    if (oktettauswahl_liste.contains(NameDesMolekuels) != true) {
        //alert(NameDesMolekuels+' NICHT enthalten');
        document.OAF.OA[0].disabled=true;
        document.OAF.OA[1].disabled=true;
        document.OAF.OA[0].checked=true;
        oktettauswahl_vorsilbe='';
        document.forms['OAF'].style.color='darkgrey';
    } else {
        //alert(NameDesMolekuels+' enthalten');
        document.OAF.OA[0].disabled=false;
        document.OAF.OA[1].disabled=false;
        if (document.OAF.OA[1].checked != true) {
            document.OAF.OA[0].checked=true;
        }
        document.forms['OAF'].style.color='black';
    }
    // Texte setzen
    document.getElementById('name_des_molekuels').innerHTML=NameDesMolekuels;
    document.getElementById('zahl_liganden').innerHTML=ZahlLiganden;
    document.getElementById('zahl_freie_ep').innerHTML=ZahlFreieEP;
    document.getElementById('typ').innerHTML=Typ;
    document.getElementById('gesamtzahl_plaetze').innerHTML=GesamtzahlPlaetze;
    document.getElementById('zahl_einfachbindungen').innerHTML=ZahlEinfachbindungen;
    document.getElementById('zahl_doppelbindungen').innerHTML=ZahlDoppelbindungen;
    document.getElementById('zahl_dreifachbindungen').innerHTML=ZahlDreifachbindungen;
    document.getElementById('gesamtzahl_valenzelektronen').innerHTML=GesamtzahlValenzelektronen;
    document.getElementById('raeumlicher_bau_mit_freien_ep').innerHTML=RaeumlicherBauMitFreienEP;
    document.getElementById('raeumlicher_bau_mit_liganden').innerHTML=RaeumlicherBauMitLiganden;
    document.getElementById('winkel_eal').innerHTML=WinkelEAL;
    document.getElementById('winkel_lal').innerHTML=WinkelLAL;
    document.getElementById('hybridisierung').innerHTML=Hybridisierung;
    // Link anpassen
    var linkende=NameDesMolekuels;
    // Ausnahmen für anderslautende Links
    if (linkende == '-') {
        linkende='VSEPR';
    }
    if (linkende == 'Triiodidion') {
         linkende='Datei:Triiodide.svg';
    }
    if (linkende == 'Kohlensäure') {
         linkende='Kohlens%C3%A4ure';
    }
    if (linkende == 'Carbonation') {
         linkende='Carbonate';
    }
    if (linkende == 'Salpetersäure') {
         linkende='Salpeters%C3%A4ure';
    }
    if (linkende == 'Nitration') {
         linkende='Nitrate';
    }
    if (linkende == 'Schwefelige Säure') {
         linkende='Schweflige_S%C3%A4ure';
    }
    if (linkende == 'Sulfition') {
         linkende='Sulfite';
    }
    if (linkende == 'Schwefelsäure') {
         linkende='Schwefels%C3%A4ure';
    }
    if (linkende == 'Sulfation') {
         linkende='Sulfate';
    }
    if (linkende == 'Phosphorsäure') {
         linkende='Phosphors%C3%A4ure';
    }
    if (linkende == 'Phosphation') {
         linkende='Phosphate';
    }
    if (linkende == 'Phosphoroxidtrichlorid') {
         linkende='Phosphoroxychlorid';
    }
    document.getElementById('wp_link').href='https://de.wikipedia.org/wiki/'+linkende;
    // Bilder setzen
    if (schluessel == '-') {
        NameDesMolekuels='start';
        Bildname3D='start_3d';
    }
    setze_bild_st('abb_st', NameDesMolekuels, '_st', '.png', oktettauswahl_vorsilbe);
    setze_bild_3d('abb_3d', Bildname3D, '.png');
    setze_hintergrund('abb_st', 'white');
    setze_hintergrund('abb_3d', 'white');
    if (schluessel == '-') {
        setze_hintergrund('abb_st', '#ffffff');
        setze_hintergrund('abb_3d', '#ffffff');
        document.OAF.OA[0].disabled=true;
        document.OAF.OA[1].disabled=true;
        document.OAF.OA[0].checked=false;
        document.OAF.OA[1].checked=false;
        document.forms['OAF'].style.color='darkgrey';
    }
}

var oktettauswahl_vorsilbe='';

function oktett_auswahl(wert) {
    oktettauswahl_vorsilbe=wert;
}

function setze_bild_st(abbildung, bildname, typ, dateiendung, oktettauswahl_vorsilbe) {
    var bildpfad='daten/img/'+oktettauswahl_vorsilbe+bildname+typ+dateiendung
    //alert(bildpfad);
    document.getElementById(abbildung).src=bildpfad;
}

function setze_bild_3d(abbildung, bildname, dateiendung) {
    var bildpfad='daten/img/'+bildname+dateiendung
    //alert(bildpfad);
    document.getElementById(abbildung).src=bildpfad;
}

function setze_hintergrund(abbildung, farbe) {
    document.getElementById(abbildung).style.backgroundColor=farbe;
}
