/*******************************************************************************
****   Welche Namen sollen durch andere ersetzt bzw. ergänzt werden?        ****
*******************************************************************************/

spezialnamen_liste=[
// Mono ersetzen durch eine leere Zeichenkette
'Hydrogenmonofluorid',
'Hydrogenmonochlorid',
'Hydrogenmonobromid',
'Hydrogenmonoiodid',
'Trihydrogenmononitrid',
'Dihydrogenmonooxid',
'Disauerstoffdihydrid',
// Ungewöhnliche Reihenfolge
'Fluormonohydrid',
'Chlormonohydrid',
'Brommonohydrid',
'Iodmonohydrid',
'Sauerstoffdihydrid',
'Schwefeldihydrid',
'Stickstofftrihydrid',
'Phosphortrihydrid',
'Kohlenstofftetrahydrid',
'Dikohlenstoffhexahydrid',
'Trikohlenstoffoctahydrid',
'Tetrakohlenstoffdecahydrid',
'Dikohlenstofftetrahydrid',
'Trikohlenstoffhexahydrid',
'Tetrakohlenstoffoctahydrid',
'Pentakohlenstoffdecahydrid',
'Dikohlenstoffdihydrid',
'Trikohlenstofftetrahydrid',
'Tetrakohlenstoffhexahydrid',
'Pentakohlenstoffoctahydrid',
'Hexakohlenstoffdecahydrid',
// Oxide
'Trisauerstoffmonosulfid',
'Disauerstoffmonosulfid',
'Sauerstoffmononitrid',
'Disauerstoffmononitrid',
'Sauerstoffdinitrid',
'Distickstoffmonooxid',
'Sauerstoffmononitrid',
'Tetrasauerstoffdinitrid',
'Pentasauerstoffdinitrid',
'Decasauerstofftetraphosphid',
'Dihydrogendioxid'
// Halogenide
//TODO

];


spezialnamen=new Array();
// Mono ersetzen durch eine leere Zeichenkette
spezialnamen['Hydrogenmonofluorid']='Hydrogenfluorid, Fluorwasserstoff';
spezialnamen['Hydrogenmonochlorid']='Hydrogenchlorid, Chlorwasserstoff';
spezialnamen['Hydrogenmonobromid']='Hydrogenbromid, Bromwasserstoff';
spezialnamen['Hydrogenmonoiodid']='Hydrogeniodid, Iodwasserstoff';
spezialnamen['Trihydrogenmononitrid']='Ammoniak';
spezialnamen['Dihydrogenmonooxid']='Wasser';
spezialnamen['Disauerstoffdihydrid']='Wasserstoffperoxid';
// Ungewöhnliche Reihenfolge z.B. Hydride
spezialnamen['Fluormonohydrid']='Hydrogenfluorid, Fluorwasserstoff';
spezialnamen['Chlormonohydrid']='Hydrogenchlorid, Chlorwasserstoff';
spezialnamen['Brommonohydrid']='Hydrogenbromid, Bromwasserstoff';
spezialnamen['Iodmonohydrid']='Hydrogeniodid, Iodwasserstoff';
spezialnamen['Sauerstoffdihydrid']='Dihydrogenoxid, Wasser';
spezialnamen['Schwefeldihydrid']='Dihydrogensulfid, Schwefelwasserstoff';
spezialnamen['Stickstofftrihydrid']='Trihydrogennitrid, Ammoniak';
spezialnamen['Phosphortrihydrid']='Phosphin';
spezialnamen['Kohlenstofftetrahydrid']='Methan';
spezialnamen['Dikohlenstoffhexahydrid']='Ethan';
spezialnamen['Trikohlenstoffoctahydrid']='Propan';
spezialnamen['Tetrakohlenstoffdecahydrid']='Butan';
spezialnamen['Dikohlenstofftetrahydrid']='Ethen';
spezialnamen['Trikohlenstoffhexahydrid']='Propen';
spezialnamen['Tetrakohlenstoffoctahydrid']='Buten';
spezialnamen['Pentakohlenstoffdecahydrid']='Penten';
spezialnamen['Dikohlenstoffdihydrid']='Ethin';
spezialnamen['Trikohlenstofftetrahydrid']='Propin';
spezialnamen['Tetrakohlenstoffhexahydrid']='Butin';
spezialnamen['Pentakohlenstoffoctahydrid']='Pentin';
spezialnamen['Hexakohlenstoffdecahydrid']='Hexin';

// Oxide
spezialnamen['Trisauerstoffmonosulfid']='Schwefeltrioxid';
spezialnamen['Disauerstoffmonosulfid']='Schwefeldioxid';
spezialnamen['Sauerstoffmononitrid']='Stickstoffmonooxid';
spezialnamen['Disauerstoffmononitrid']='Stickstoffdioxid';
spezialnamen['Sauerstoffdinitrid']='Distickstoffmonooxid, Lachgas';
spezialnamen['Distickstoffmonooxid']='Lachgas';
spezialnamen['Tetrasauerstoffdinitrid']='Distickstofftetraoxid';
spezialnamen['Pentasauerstoffdinitrid']='Distickstoffpentaoxid';
spezialnamen['Decasauerstofftetraphosphid']='Tetraphosphordecaoxid';
spezialnamen['Dihydrogendioxid']='Wasserstoffperoxid';

// Halogenide
//TODO



/*******************************************************************************
****        Welche Namen sind überhaupt zulässig ?                          ****
*******************************************************************************/
erlaubtenamen_liste=[
'Hydrogenmonofluorid',
'Hydrogenmonochlorid',
'Hydrogenmonobromid',
'Hydrogenmonoiodid',
'Dihydrogenmonooxid',
'Stickstofftrihydrid',
'Trihydrogenmononitrid',
'Schwefeldioxid',
'Schwefeltrioxid',
'Stickstoffmonooxid',
'Stickstoffdioxid',
'Distickstoffmonooxid',
'Distickstofftetraoxid',
'Distickstoffpentaoxid',
'Tetraphosphordecaoxid',
'Kohlenstoffmonooxid',
'Kohlenstoffdioxid'
]

/*******************************************************************************
****        Verbotene Kombinationen bei gleichem Element                    ****
*******************************************************************************/
verbotene_liste=[
'Hydrogenhydrid',
'Fluorfluorid',
'Chlorchlorid',
'Brombromid',
'Iodiodid',
'Sauerstoffoxid',
'Schwefelsulfid',
'Stickstoffnitrid',
'Phosphorphosphid'
]

