// ══════════════════════════════════════════════════════════
// DONNEES SLOVENIENNES
// ══════════════════════════════════════════════════════════

const VOCAB = [

  // 🌿 Nature
  { q: 'gora', a: '⛰️ montagne', hint: '/góra/', ex: 'Gora je visoka.', cat: 'Nature' },
  { q: 'reka', a: '🌊 rivière', hint: '/réka/', ex: 'Reka teče skozi mesto.', cat: 'Nature' },
  { q: 'jezero', a: '🏞️ lac', hint: '/jézero/', ex: 'Blejsko jezero je lepo.', cat: 'Nature' },
  { q: 'gozd', a: '🌲 forêt', hint: '/gózd/', ex: 'Slovenci imajo radi gozdove.', cat: 'Nature' },
  { q: 'cvet', a: '🌸 fleur', hint: '/tsvét/', ex: 'Cvet diši.', cat: 'Nature' },
  { q: 'drevo', a: '🌳 arbre', hint: '/drévo/', ex: 'Drevo je staro.', cat: 'Nature' },
  { q: 'trava', a: '🌿 herbe', hint: '/tráva/', ex: 'Trava je zelena.', cat: 'Nature' },
  { q: 'dež', a: '🌧️ pluie', hint: '/déš/', ex: 'Danes pada dež.', cat: 'Nature' },
  { q: 'veter', a: '💨 vent', hint: '/véter/', ex: 'Veter piha močno.', cat: 'Nature' },
  { q: 'oblak', a: '☁️ nuage', hint: '/óblak/', ex: 'Oblaki so sivi.', cat: 'Nature' },
  { q: 'sonce', a: '☀️ soleil', hint: '/sónce/', ex: 'Sonce sije.', cat: 'Nature' },
  { q: 'luna', a: '🌙 lune', hint: '/lúna/', ex: 'Luna sveti ponoči.', cat: 'Nature' },
  { q: 'sneg', a: '🧊 neige', hint: '/snég/', ex: 'Sneg je padel.', cat: 'Nature' },
  { q: 'morje', a: '🌊 mer', hint: '/mórje/', ex: 'Primorska ima lepo morje.', cat: 'Nature' },
  { q: 'skala', a: '🪨 rocher', hint: '/skála/', ex: 'Skala je trdna.', cat: 'Nature' },

  // 🐻 Animaux
  { q: 'pes', a: '🐶 chien', hint: '/pés/', ex: 'Moj pes je prijazen.', cat: 'Animaux' },
  { q: 'mačka', a: '🐱 chat', hint: '/máchka/', ex: 'Mačka spi na stolu.', cat: 'Animaux' },
  { q: 'konj', a: '🐴 cheval', hint: '/kónj/', ex: 'Konj teče hitro.', cat: 'Animaux' },
  { q: 'krava', a: '🐄 vache', hint: '/kráva/', ex: 'Krava da mleko.', cat: 'Animaux' },
  { q: 'ptica', a: '🐦 oiseau', hint: '/ptíca/', ex: 'Ptica poje na drevesu.', cat: 'Animaux' },
  { q: 'riba', a: '🐟 poisson', hint: '/ríba/', ex: 'Lovimo ribe.', cat: 'Animaux' },
  { q: 'zajec', a: '🐰 lapin', hint: '/zájec/', ex: 'Zajec skače po travi.', cat: 'Animaux' },
  { q: 'medved', a: '🐻 ours', hint: '/méved/', ex: 'Medved živi v gozdu.', cat: 'Animaux' },
  { q: 'volk', a: '🐺 loup', hint: '/vólk/', ex: 'Volk tuli v luni.', cat: 'Animaux' },
  { q: 'sova', a: '🦉 hibou', hint: '/sóva/', ex: 'Sova leti ponoči.', cat: 'Animaux' },
  { q: 'metulj', a: '🦋 papillon', hint: '/métulj/', ex: 'Metulj je lep.', cat: 'Animaux' },
  { q: 'kača', a: '🐍 serpent', hint: '/kàča/', ex: 'Kača je nevarna.', cat: 'Animaux' },
  { q: 'lisica', a: '🦊 renard', hint: '/lísica/', ex: 'Lisica je zvita.', cat: 'Animaux' },

  // 🗓️ Temps
  { q: 'vedno', a: '🔄 toujours', hint: '/védno/', ex: 'Vedno je vesel.', cat: 'Temps' },
  { q: 'nikoli', a: '🚫 jamais', hint: '/níkoli/', ex: 'Nikoli ne zamujam.', cat: 'Temps' },
  { q: 'včasih', a: '🔁 parfois', hint: '/vtčásih/', ex: 'Včasih dežuje poleti.', cat: 'Temps' },
  { q: 'ponedeljek', a: '📆 lundi', hint: '/ponedéljek/', ex: 'Začnemo v ponedeljek.', cat: 'Temps' },
  { q: 'torek', a: '📆 mardi', hint: '/tórek/', ex: 'Sestanek je v torek.', cat: 'Temps' },
  { q: 'sreda', a: '📆 mercredi', hint: '/sréda/', ex: 'Sreda je na sredini.', cat: 'Temps' },
  { q: 'četrtek', a: '📆 jeudi', hint: '/četrték/', ex: 'Četrtek je pred petkom.', cat: 'Temps' },
  { q: 'petek', a: '📆 vendredi', hint: '/pétek/', ex: 'Petek je najboljši dan!', cat: 'Temps' },
  { q: 'sobota', a: '📆 samedi', hint: '/sobóta/', ex: 'V soboto čistimo.', cat: 'Temps' },
  { q: 'nedelja', a: '📆 dimanche', hint: '/nedélja/', ex: 'Nedelja je počitniška.', cat: 'Temps' },
  { q: 'danes', a: "📅 aujourd'hui", hint: '/dánes/', ex: 'Danes je lep dan.', cat: 'Temps' },
  { q: 'jutri', a: '📅 demain', hint: '/jútri/', ex: 'Jutri pridem domov.', cat: 'Temps' },
  { q: 'včeraj', a: '📅 hier', hint: '/včeráj/', ex: 'Včeraj je deževalo.', cat: 'Temps' },

  // 🍽️ Nourriture
  { q: 'kruh', a: '🍞 pain', hint: '/krúh/', ex: 'Jemo kruh za zajtrk.', cat: 'Nourriture' },
  { q: 'sir', a: '🧀 fromage', hint: '/síːr/', ex: 'Sir na kruhu.', cat: 'Nourriture' },
  { q: 'jajce', a: '🥚 œuf', hint: '/jájce/', ex: 'Jajce za zajtrk.', cat: 'Nourriture' },
  { q: 'piščanec', a: '🍗 poulet', hint: '/píščanec/', ex: 'Pečen piščanec.', cat: 'Nourriture' },
  { q: 'krompir', a: '🥔 pomme de terre', hint: '/krompír/', ex: 'Krompir z maslom.', cat: 'Nourriture' },
  { q: 'paradižnik', a: '🍅 tomate', hint: '/paradížnik/', ex: 'Rdeč paradižnik.', cat: 'Nourriture' },
  { q: 'kumara', a: '🥒 concombre', hint: '/kúmara/', ex: 'Kumara v solati.', cat: 'Nourriture' },
  { q: 'jabolko', a: '🍎 pomme', hint: '/jábólko/', ex: 'Zeleno jabolko.', cat: 'Nourriture' },
  { q: 'banana', a: '🍌 banane', hint: '/banána/', ex: 'Rumena banana.', cat: 'Nourriture' },
  { q: 'jagoda', a: '🍓 fraise', hint: '/jagóda/', ex: 'Jagode poleti!', cat: 'Nourriture' },
  { q: 'kava', a: '☕ café', hint: '/káva/', ex: 'Skodelica kave.', cat: 'Nourriture' },
  { q: 'čaj', a: '🍵 thé', hint: '/čáj/', ex: 'Pijem čaj zvečer.', cat: 'Nourriture' },
  { q: 'sladoled', a: '🍦 glace', hint: '/sladóléd/', ex: 'Sladoled na soncu!', cat: 'Nourriture' },
  { q: 'torta', a: '🎂 gâteau', hint: '/tórta/', ex: 'Torta za zabavo.', cat: 'Nourriture' },
  { q: 'čokolada', a: '🍫 chocolat', hint: '/čokoláda/', ex: 'Temna čokolada je dobra.', cat: 'Nourriture' },
  { q: 'voda', a: '💧 eau', hint: '/vóda/', ex: 'Kozarec vode.', cat: 'Nourriture' },
  { q: 'vino', a: '🍷 vin', hint: '/víno/', ex: 'Slovensko vino je dobro.', cat: 'Nourriture' },
  { q: 'pivo', a: '🍺 bière', hint: '/pívo/', ex: 'Laško pivo.', cat: 'Nourriture' },
  { q: 'juha', a: '🍲 soupe', hint: '/júha/', ex: 'Topla juha.', cat: 'Nourriture' },
  { q: 'sadje', a: '🍇 fruits', hint: '/sádje/', ex: 'Sveže sadje.', cat: 'Nourriture' },
  { q: 'mleko', a: '🥛 lait', hint: '/mléko/', ex: 'Kozarec mleka.', cat: 'Nourriture' },

  // 👨‍👩‍👧 Famille
  { q: 'sestra', a: '👧 sœur', hint: '/séstra/', ex: 'Moja sestra živi v Mariboru.', cat: 'Famille' },
  { q: 'brat', a: '👦 frère', hint: '/brat/', ex: 'Moj brat je starejši.', cat: 'Famille' },
  { q: 'dedek', a: '👴 grand-père', hint: '/déděk/', ex: 'Dedek pripoveduje zgodbe.', cat: 'Famille' },
  { q: 'babica', a: '👵 grand-mère', hint: '/bábica/', ex: 'Babica peče potico.', cat: 'Famille' },
  { q: 'oče', a: '👨 père', hint: '/óče/', ex: 'Moj oče je učitelj.', cat: 'Famille' },
  { q: 'mati', a: '👩 mère', hint: '/máti/', ex: 'Moja mati kuha večerjo.', cat: 'Famille' },
  { q: 'stric', a: '👨 oncle', hint: '/stríc/', ex: 'Stric pride v nedeljo.', cat: 'Famille' },
  { q: 'teta', a: '👩 tante', hint: '/téta/', ex: 'Teta živi v Ljubljani.', cat: 'Famille' },
  { q: 'bratranec', a: '🧑 cousin', hint: '/bratránec/', ex: 'Moj bratranec je smešen.', cat: 'Famille' },
  { q: 'dojenček', a: '👶 bébé', hint: '/dojénčěk/', ex: 'Dojenček spi.', cat: 'Famille' },
  { q: 'družina', a: '👨‍👩‍👧 famille', hint: '/družína/', ex: 'Velika družina.', cat: 'Famille' },

  // 🏙️ Lieux
  { q: 'bolnišnica', a: '🏥 hôpital', hint: '/bolníšnica/', ex: 'Bolnišnica je velika.', cat: 'Lieux' },
  { q: 'lekarna', a: '💊 pharmacie', hint: '/lékárna/', ex: 'Lekarna je odprta.', cat: 'Lieux' },
  { q: 'knjižnica', a: '📚 bibliothèque', hint: '/knjížnica/', ex: 'Izposojam knjige v knjižnici.', cat: 'Lieux' },
  { q: 'restavracija', a: '🍽️ restaurant', hint: '/restavrácija/', ex: 'Jemo v restavraciji.', cat: 'Lieux' },
  { q: 'hotel', a: '🏨 hôtel', hint: '/hótél/', ex: 'Bivamo v hotelu.', cat: 'Lieux' },
  { q: 'letališče', a: '✈️ aéroport', hint: '/letalíšče/', ex: 'Letališče je daleč.', cat: 'Lieux' },
  { q: 'cerkev', a: '⛪ église', hint: '/cérkev/', ex: 'Cerkev je stara.', cat: 'Lieux' },
  { q: 'park', a: '🌳 parc', hint: '/párk/', ex: 'Sprehajamo se po parku.', cat: 'Lieux' },
  { q: 'trg', a: '🏛️ place publique', hint: '/trg/', ex: 'Tržnica je na trgu.', cat: 'Lieux' },
  { q: 'avtobus', a: '🚌 bus', hint: '/avtóbús/', ex: 'Gremo z avtobusom.', cat: 'Lieux' },
  { q: 'vlak', a: '🚂 train', hint: '/vlak/', ex: 'Vlak odpelje ob 10.', cat: 'Lieux' },
  { q: 'avto', a: '🚗 voiture', hint: '/ávto/', ex: 'Avto je rdeč.', cat: 'Lieux' },
  { q: 'kolo', a: '🚲 vélo', hint: '/kólo/', ex: 'Kolesarim v službo.', cat: 'Lieux' },
  { q: 'čoln', a: '⛵ bateau', hint: '/čóln/', ex: 'Plujemo s čolnom.', cat: 'Lieux' },
  { q: 'šola', a: '🏫 école', hint: '/šóla/', ex: 'Otroci gredo v šolo.', cat: 'Lieux' },
  { q: 'most', a: '🌉 pont', hint: '/móst/', ex: 'Triglava most.', cat: 'Lieux' },
  { q: 'trgovina', a: '🛒 magasin', hint: '/trgovína/', ex: 'Kupujemo v trgovini.', cat: 'Lieux' },

  // 🎨 Couleurs
  { q: 'rdeča', a: '🔴 rouge', hint: '/rdéča/', ex: 'Rdeč avto.', cat: 'Couleurs' },
  { q: 'modra', a: '🔵 bleu(e)', hint: '/módra/', ex: 'Nebo je modro.', cat: 'Couleurs' },
  { q: 'zelena', a: '🟢 vert(e)', hint: '/zeléna/', ex: 'Trava je zelena.', cat: 'Couleurs' },
  { q: 'rumena', a: '🟡 jaune', hint: '/ruména/', ex: 'Sonce je rumeno.', cat: 'Couleurs' },
  { q: 'črna', a: '⚫ noir(e)', hint: '/črna/', ex: 'Črna mačka.', cat: 'Couleurs' },
  { q: 'bela', a: '⚪ blanc(he)', hint: '/béla/', ex: 'Sneg je bel.', cat: 'Couleurs' },
  { q: 'rjava', a: '🟤 brun(e)', hint: '/rjáva/', ex: 'Medved je rjav.', cat: 'Couleurs' },
  { q: 'siva', a: '🩶 gris(e)', hint: '/síva/', ex: 'Sivo nebo.', cat: 'Couleurs' },
  { q: 'roza', a: '🌸 rose', hint: '/róza/', ex: 'Roza cvet.', cat: 'Couleurs' },
  { q: 'vijolična', a: '💜 violet(te)', hint: '/vijolíčna/', ex: 'Vijolična obleka.', cat: 'Couleurs' },
  { q: 'oranžna', a: '🟠 orange', hint: '/oránžna/', ex: 'Oranžna pomaranča.', cat: 'Couleurs' },

  // 🔢 Chiffres
  { q: 'ena', a: '1️⃣ un / une', hint: '/éna/', ex: 'En otrok.', cat: 'Chiffres' },
  { q: 'dve', a: '2️⃣ deux', hint: '/dvé/', ex: 'Dve kavi.', cat: 'Chiffres' },
  { q: 'tri', a: '3️⃣ trois', hint: '/trí/', ex: 'Trije dnevi.', cat: 'Chiffres' },
  { q: 'štiri', a: '4️⃣ quatre', hint: '/štíri/', ex: 'Štirje letni časi.', cat: 'Chiffres' },
  { q: 'pet', a: '5️⃣ cinq', hint: '/pét/', ex: 'Pet minut.', cat: 'Chiffres' },
  { q: 'šest', a: '6️⃣ six', hint: '/šést/', ex: 'Šest jajc.', cat: 'Chiffres' },
  { q: 'sedem', a: '7️⃣ sept', hint: '/sédom/', ex: 'Sedem dni v tednu.', cat: 'Chiffres' },
  { q: 'osem', a: '8️⃣ huit', hint: '/ósem/', ex: 'Osem ur spanja.', cat: 'Chiffres' },
  { q: 'devet', a: '9️⃣ neuf', hint: '/dévot/', ex: 'Devet mesecev.', cat: 'Chiffres' },
  { q: 'deset', a: '🔟 dix', hint: '/désot/', ex: 'Deset evrov.', cat: 'Chiffres' },
  { q: 'dvajset', a: '2️⃣0️⃣ vingt', hint: '/dvájsot/', ex: 'Dvajset let star.', cat: 'Chiffres' },
  { q: 'trideset', a: '3️⃣0️⃣ trente', hint: '/trídot/', ex: 'Trideset minut.', cat: 'Chiffres' },
  { q: 'sto', a: '💯 cent', hint: '/stó/', ex: 'Sto evrov.', cat: 'Chiffres' },
  { q: 'tisoč', a: '🔢 mille', hint: '/tísoč/', ex: 'Tisoč ljudi.', cat: 'Chiffres' },

  // 😊 Émotions
  { q: 'žalosten', a: '😢 triste', hint: '/žalóston/', ex: 'Zakaj si žalosten?', cat: 'Émotions' },
  { q: 'jezen', a: '😠 en colère', hint: '/jézon/', ex: 'On je jezen.', cat: 'Émotions' },
  { q: 'prestrašen', a: '😨 effrayé(e)', hint: '/prestrášon/', ex: 'Prestrašen je teme.', cat: 'Émotions' },
  { q: 'presenečen', a: '😲 surpris(e)', hint: '/presonéčen/', ex: 'Presenečen sem!', cat: 'Émotions' },
  { q: 'lačen', a: '🍽️ affamé(e)', hint: '/láčen/', ex: 'Lačen sem.', cat: 'Émotions' },
  { q: 'žejen', a: '🥤 assoiffé(e)', hint: '/žéjon/', ex: 'Žejen sem.', cat: 'Émotions' },
  { q: 'bolan', a: '🤒 malade', hint: '/bólán/', ex: 'Danes sem bolan.', cat: 'Émotions' },
  { q: 'zdrav', a: '💪 en bonne santé', hint: '/zdráv/', ex: 'Sem zdrav.', cat: 'Émotions' },
  { q: 'srečen', a: '😊 heureux/se', hint: '/sréčen/', ex: 'Zelo sem srečen!', cat: 'Émotions' },
  { q: 'utrujen', a: '😴 fatigué(e)', hint: '/utrújon/', ex: 'Utrujen sem po delu.', cat: 'Émotions' },
  { q: 'ponosen', a: '💪 fier/fière', hint: '/ponósón/', ex: 'Ponosen sem nate.', cat: 'Émotions' },
  { q: 'zadovoljen', a: '😌 satisfait(e)', hint: '/zadovóljon/', ex: 'Zadovoljen sem z rezultati.', cat: 'Émotions' },

  // 👗 Vêtements
  { q: 'jopica', a: '🧥 veste', hint: '/jófica/', ex: 'Obleci si jopico!', cat: 'Vêtements' },
  { q: 'majica', a: '👕 t-shirt', hint: '/májica/', ex: 'Bela majica.', cat: 'Vêtements' },
  { q: 'hlače', a: '👖 pantalon', hint: '/hláče/', ex: 'Modre hlače.', cat: 'Vêtements' },
  { q: 'krilo', a: '👗 jupe', hint: '/krílo/', ex: 'Rdeče krilo.', cat: 'Vêtements' },
  { q: 'čevlji', a: '👟 chaussures', hint: '/čévļi/', ex: 'Novi čevlji.', cat: 'Vêtements' },
  { q: 'kapa', a: '🧢 casquette', hint: '/kápa/', ex: 'Nosim kapo.', cat: 'Vêtements' },
  { q: 'površina', a: '🧣 écharpe', hint: '/površína/', ex: 'Topla površina.', cat: 'Vêtements' },

  // 💬 Expressions
  { q: 'Dober večer', a: '🌆 Bonsoir', hint: '/dóber véčer/', ex: 'Dober večer! Kako ste?', cat: 'Expressions' },
  { q: 'Seveda', a: '💯 Bien sûr', hint: '/sévoda/', ex: 'Seveda! Ni problema.', cat: 'Expressions' },
  { q: 'Hvala lepa', a: '🙏 Merci beaucoup', hint: '/hvála lépa/', ex: 'Hvala lepa za pomoč!', cat: 'Expressions' },
  { q: 'Prosim', a: "😊 S'il vous plaît", hint: '/prósím/', ex: 'Še eno kavo, prosim.', cat: 'Expressions' },
  { q: 'Oprostite', a: '🤫 Excusez-moi', hint: '/opróstite/', ex: 'Oprostite, kje je pošta?', cat: 'Expressions' },
  { q: 'Na svidenje', a: '👋 Au revoir', hint: '/na svidénje/', ex: 'Na svidenje jutri!', cat: 'Expressions' },
  { q: 'Dobro jutro', a: '🌅 Bonjour (matin)', hint: '/dóbro jútro/', ex: 'Dobro jutro! Lep dan.', cat: 'Expressions' },
  { q: 'Lahko noč', a: '🌙 Bonne nuit', hint: '/láhko noč/', ex: 'Lahko noč!', cat: 'Expressions' },

  // 🔤 Verbes
  { q: 'jesti', a: '🍽️ manger', hint: '/jésti/', ex: 'Jemo večerjo ob šestih.', cat: 'Verbes' },
  { q: 'piti', a: '🥤 boire', hint: '/píti/', ex: 'Pijem kavo vsako jutro.', cat: 'Verbes' },
  { q: 'spati', a: '😴 dormir', hint: '/spáti/', ex: 'Spi osem ur vsako noč.', cat: 'Verbes' },
  { q: 'iti', a: '🚶 aller', hint: '/íti/', ex: 'Grem v službo vsak dan.', cat: 'Verbes' },
  { q: 'teči', a: '🏃 courir', hint: '/téči/', ex: 'Teče v parku zjutraj.', cat: 'Verbes' },
  { q: 'brati', a: '📖 lire', hint: '/bráti/', ex: 'Bere knjigo vsak večer.', cat: 'Verbes' },
  { q: 'pisati', a: '✍️ écrire', hint: '/písati/', ex: 'Piše pismo prijatelju.', cat: 'Verbes' },
  { q: 'govoriti', a: '🗣️ parler', hint: '/govoríti/', ex: 'Govorita slovensko.', cat: 'Verbes' },
  { q: 'poslušati', a: '👂 écouter', hint: '/póslúšati/', ex: 'Poslušaj učitelja!', cat: 'Verbes' },
  { q: 'gledati', a: '👀 regarder', hint: '/glédáti/', ex: 'Gledamo film zvečer.', cat: 'Verbes' },
  { q: 'delati', a: '💼 travailler', hint: '/deláti/', ex: 'Delam v pisarni.', cat: 'Verbes' },
  { q: 'študirati', a: '📚 étudier', hint: '/študírati/', ex: 'Študira medicino v Ljubljani.', cat: 'Verbes' },
  { q: 'kupiti', a: '🛍️ acheter', hint: '/kúpiti/', ex: 'Kupil bom hrano jutri.', cat: 'Verbes' },
  { q: 'prodati', a: '💰 vendre', hint: '/prodáti/', ex: 'Proda svoj stari avto.', cat: 'Verbes' },
  { q: 'pomagati', a: '🤝 aider', hint: '/pomágati/', ex: 'Mi lahko pomagaš?', cat: 'Verbes' },
  { q: 'razumeti', a: '🧠 comprendre', hint: '/razuméti/', ex: 'Ne razumem te besede.', cat: 'Verbes' },
  { q: 'vedeti', a: '💡 savoir', hint: '/vedéti/', ex: 'Veš, koliko je ura?', cat: 'Verbes' },
  { q: 'misliti', a: '💭 penser', hint: '/mísliti/', ex: 'Mislim nate.', cat: 'Verbes' },
  { q: 'ljubiti', a: '💕 aimer (fort)', hint: '/ljúbiti/', ex: 'Ljubim te!', cat: 'Verbes' },
  { q: 'imeti rad', a: '😊 aimer (apprécier)', hint: '/iméti rád/', ex: 'Imam rad slovensko glasbo.', cat: 'Verbes' },
  { q: 'hoteti', a: '🙋 vouloir', hint: '/hotéti/', ex: 'Hočeš kavo?', cat: 'Verbes' },
  { q: 'znati', a: '💪 pouvoir / savoir', hint: '/znáti/', ex: 'Znaš plavati?', cat: 'Verbes' },
  { q: 'morati', a: '📌 devoir', hint: '/moráti/', ex: 'Moram spati več.', cat: 'Verbes' },
  { q: 'priti', a: '🚪 venir', hint: '/príti/', ex: 'Kdaj prideš domov?', cat: 'Verbes' },
  { q: 'oditi', a: '🚗 partir', hint: '/odíti/', ex: 'Odidemo na počitnice.', cat: 'Verbes' },
  { q: 'ostati', a: '⏸️ rester', hint: '/ostáti/', ex: 'Ostani tukaj!', cat: 'Verbes' },
  { q: 'odpreti', a: '🔓 ouvrir', hint: '/odpréti/', ex: 'Odprite vrata.', cat: 'Verbes' },
  { q: 'zapreti', a: '🔒 fermer', hint: '/zapréti/', ex: 'Zaprite okno, hladno je!', cat: 'Verbes' },
  { q: 'dati', a: '🎁 donner', hint: '/dáti/', ex: 'Dal mi je cvet.', cat: 'Verbes' },
  { q: 'vzeti', a: '✋ prendre', hint: '/vzéti/', ex: 'Vzemite si čas.', cat: 'Verbes' },
  { q: 'najti', a: '🔍 trouver', hint: '/náti/', ex: 'Ne morem najti ključev.', cat: 'Verbes' },
  { q: 'začeti', a: '🚀 commencer', hint: '/začéti/', ex: 'Začnemo ob devetih.', cat: 'Verbes' },
  { q: 'nehati', a: '🏁 finir / arrêter', hint: '/néhati/', ex: 'Kdaj nehaš delati?', cat: 'Verbes' },
  { q: 'kuhati', a: '🍳 cuisiner', hint: '/kúhati/', ex: 'Kuham večerjo.', cat: 'Verbes' },
  { q: 'smejati se', a: '😂 rire', hint: '/sméjati se/', ex: 'Smemo se glasno.', cat: 'Verbes' },
];

const PHRASES = [

  // 👋 Présentations
  { q: 'Kako si?', a: '😊 Comment vas-tu ?', hint: '/káko si/', words: ['Kako', 'si?'], cat: 'Présentations' },
  { q: 'Dobro, hvala!', a: '😊 Bien, merci !', hint: '/dóbro, hvála/', words: ['Dobro,', 'hvala!'], cat: 'Présentations' },
  { q: 'Prihajam iz Francije.', a: '🇫🇷 Je viens de France.', hint: '/prihájám iz Fráncije/', words: ['Prihajam', 'iz', 'Francije.'], cat: 'Présentations' },
  { q: 'Govoriš slovensko?', a: '🇸🇮 Tu parles slovène ?', hint: '/govoríš slovénško/', words: ['Govoriš', 'slovensko?'], cat: 'Présentations' },
  { q: 'Malo, hvala.', a: '🤏 Un peu, merci.', hint: '/málo, hvála/', words: ['Malo,', 'hvala.'], cat: 'Présentations' },
  { q: 'Koliko si star?', a: '🎂 Quel âge as-tu ?', hint: '/kolíko si stár/', words: ['Koliko', 'si', 'star?'], cat: 'Présentations' },
  { q: 'S čim se ukvarjaš?', a: '💼 Quel est ton métier ?', hint: '/s čím sɛ ukvárljaš/', words: ['S', 'čim', 'se', 'ukvarjaš?'], cat: 'Présentations' },
  { q: 'Drago mi je!', a: '🤝 Enchanté(e) !', hint: '/drágo mi jɛ/', words: ['Drago', 'mi', 'je!'], cat: 'Présentations' },
  { q: 'Se vidiva!', a: '👋 À bientôt !', hint: '/sɛ vídɪva/', words: ['Se', 'vidiva!'], cat: 'Présentations' },
  { q: 'Me veseli.', a: '😊 Ravi(e) de te rencontrer !', hint: '/mɛ vɛséli/', words: ['Me', 'veseli.'], cat: 'Présentations' },

  // 🗣️ Communication
  { q: 'Ne razumem.', a: '🤷 Je ne comprends pas.', hint: '/nɛ razúmom/', words: ['Ne', 'razumem.'], cat: 'Communication' },
  { q: 'Lahko ponoviš?', a: '🔁 Peux-tu répéter ?', hint: '/láhko ponóviš/', words: ['Lahko', 'ponoviš?'], cat: 'Communication' },
  { q: 'Lahko govoriš počasneje?', a: '🐢 Peux-tu parler plus lentement ?', hint: '/láhko govoríš počásnɛjɛ/', words: ['Lahko', 'govoriš', 'počasneje?'], cat: 'Communication' },
  { q: 'Kako se to reče slovensko?', a: '🇸🇮 Comment dit-on ça en slovène ?', hint: '/káko sɛ tɔ réčɛ slovénško/', words: ['Kako', 'se', 'to', 'reče', 'slovensko?'], cat: 'Communication' },

  // ✨ Expressions courantes
  { q: 'Postojna je jama!', a: '🕯️ Postojna est une grotte !', hint: '/postójna jɛ jáma/', words: ['Postojna', 'je', 'jama!'], cat: 'Expressions' },
  { q: 'Srečno novo leto!', a: '🎄 Bonne année !', hint: '/sréčno nóvo léto/', words: ['Srečno', 'novo', 'leto!'], cat: 'Expressions' },
  { q: 'Dobrodošli v Sloveniji!', a: '🇸🇮 Bienvenue en Slovénie !', hint: '/dobrodošlí v Slovéniji/', words: ['Dobrodošli', 'v', 'Sloveniji!'], cat: 'Expressions' },
  { q: 'Slovenija je lepa država.', a: '🏔️ La Slovénie est un beau pays.', hint: '/Slovénija jɛ lépa držáva/', words: ['Slovenija', 'je', 'lepa', 'država.'], cat: 'Expressions' },
  { q: 'Pijem kavo vsak dan.', a: '☕ Je bois du café tous les jours.', hint: '/píjom kávo vsák dán/', words: ['Pijem', 'kavo', 'vsak', 'dan.'], cat: 'Expressions' },
  { q: 'Lep dan!', a: '☀️ Bonne journée !', hint: '/lɛ̀p dán/', words: ['Lep', 'dan!'], cat: 'Expressions' },
  { q: 'Na zdravje!', a: '🥂 Santé ! (toast)', hint: '/na zdrávjɛ/', words: ['Na', 'zdravje!'], cat: 'Expressions' },
  { q: 'Dober tek!', a: '🍽️ Bon appétit !', hint: '/dóber ték/', words: ['Dober', 'tek!'], cat: 'Expressions' },
  { q: 'Srečno!', a: '🍀 Bonne chance !', hint: '/sréčno/', words: ['Srečno!'], cat: 'Expressions' },
  { q: 'Čestitke!', a: '🎉 Félicitations !', hint: '/čɛstítke/', words: ['Čestitke!'], cat: 'Expressions' },
  { q: 'Vse najboljše!', a: '🎂 Joyeux anniversaire !', hint: '/vsɛ ná̑jboljšɛ/', words: ['Vse', 'najboljše!'], cat: 'Expressions' },
];

// Catégories dynamiques
const CATS_VOCAB = [...new Set(VOCAB.map(v => v.cat))];
const CATS_PHRASES = [...new Set(PHRASES.map(p => p.cat))];

const MODES = {
  vocab:{label:'Vocabulaire',data:VOCAB,hint:'Que signifie ce mot slovène ?'},
  phrases:{label:'Phrases',data:PHRASES,hint:'Que signifie cette phrase ?'},
  mixed:{label:'Mixte',data:[...VOCAB,...PHRASES],hint:'Vocabulaire ou phrases ?'},
  review:{label:'Révision',data:[],hint:'Rappel des erreurs passées'},
  // Catégories vocab
  ...Object.fromEntries(CATS_VOCAB.map(cat => [
    'cat_'+cat, {label:'📂 '+cat, data:VOCAB.filter(v=>v.cat===cat), hint:'Que signifie ce mot ?', isCat:true}
  ])),
  // Catégories phrases
  ...Object.fromEntries(CATS_PHRASES.map(cat => [
    'pcat_'+cat, {label:'💬 '+cat, data:PHRASES.filter(p=>p.cat===cat), hint:'Que signifie cette phrase ?', isCat:true}
  ]))
};

const TOTAL_Q=12;
let mode,questions,qIdx,score,lives,errors,answered,currentQ;
let soundEnabled=false,audioCtx=null;
let currentStreak=0,questionHistory=[];
let pendingMode='vocab',quizDirection='sl2fr';
let lastMode='vocab';

// ── MÉMOIRE ──────────────────────────────────────────────────────
function loadMem(){try{return JSON.parse(localStorage.getItem('sl_v1')||'{}')}catch(e){return{};}}
function saveMem(d){try{localStorage.setItem('sl_v1',JSON.stringify(d))}catch(e){}}
function recordResult(char,correct,qData){
  const m=loadMem();
  if(!m.chars)m.chars={};
  if(!m.chars[char])m.chars[char]={r:0,w:0};
  if(correct)m.chars[char].r++;else m.chars[char].w++;
  if(!m.total)m.total={r:0,w:0};
  if(correct)m.total.r++;else m.total.w++;
  if(!m.streak)m.streak=0;
  if(correct)m.streak++;else m.streak=0;
  if(!m.review)m.review=[];
  if(!correct){
    const ex=m.review.find(x=>x.q===char);
    if(ex)ex.fails=(ex.fails||0)+1;
    else if(qData)m.review.push({...qData,fails:1});
  }else{
    const ex=m.review.find(x=>x.q===char);
    if(ex){ex.ok=(ex.ok||0)+1;if(ex.ok>=2)m.review=m.review.filter(x=>x.q!==char);}
  }
  saveMem(m);
}
function getWeakChars(data,n){
  const m=loadMem();
  if(!m.chars)return shuffle([...data]).slice(0,n);
  return shuffle([...data]).sort((a,b)=>{
    const ca=m.chars[a.q]||{r:0,w:0},cb=m.chars[b.q]||{r:0,w:0};
    return(ca.r/(ca.r+ca.w+1))-(cb.r/(cb.r+cb.w+1));
  }).slice(0,n);
}
function updateMenuStats(){
  const m=loadMem();
  const s=m.streak||0;
  const sb=document.getElementById('streakBanner');
  if(s>=3){document.getElementById('streakCount').textContent=s;sb.classList.remove('hidden');}
  else sb.classList.add('hidden');
  const t=m.total||{r:0,w:0},tot=t.r+t.w;
  if(tot>0){
    const pct=Math.round(t.r/tot*100);
    document.getElementById('globalPct').textContent=pct+'%';
    document.getElementById('globalFill').style.width=pct+'%';
    document.getElementById('globalProgress').style.display='block';
  }
  const rev=(m.review||[]);
  const rc=document.getElementById('reviewCard');
  if(rev.length>0){rc.style.display='block';document.getElementById('reviewCount').textContent=rev.length+' mot(s) à revoir';}
  else rc.style.display='none';
  // Catégories
  const catEmojis={'Nature':'🌿','Animaux':'🐾','Temps':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️','Verbes':'🔤'};
  const cg=document.getElementById('catGrid');if(!cg)return;cg.innerHTML='';
  CATS_VOCAB.forEach(cat=>{
    const btn=document.createElement('div');
    btn.className='mode-card';btn.style.cssText='padding:5px 4px;min-height:0;cursor:pointer';
    btn.innerHTML=`<span style="font-size:22px;display:block;margin-bottom:2px">${catEmojis[cat]||'📂'}</span><h3 style="font-size:13px;line-height:1.2">${cat}</h3>`;
    btn.onclick=()=>chooseDirScreen('cat_'+cat);
    cg.appendChild(btn);
  });
}

// ── AUDIO ────────────────────────────────────────────────────────
function getCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function tone(f,t,d,v,dl=0){
  if(!soundEnabled)return;
  try{const c=getCtx(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=t;o.frequency.value=f;const ts=c.currentTime+dl;g.gain.setValueAtTime(0,ts);g.gain.linearRampToValueAtTime(v,ts+.02);g.gain.exponentialRampToValueAtTime(.001,ts+d);o.start(ts);o.stop(ts+d+.05);}catch(e){}
}
function playCorrect(){tone(523,'sine',.15,.28);tone(659,'sine',.15,.28,.1);tone(784,'sine',.3,.28,.2);}
function playCombo(){tone(880,'sine',.1,.3);tone(1046,'sine',.25,.35,.1);}
function playWrong(){tone(220,'sawtooth',.2,.2);tone(180,'sawtooth',.3,.2,.15);}
function playClick(){tone(600,'sine',.06,.12);}
function toggleSound(){
  soundEnabled=!soundEnabled;
  document.getElementById('soundToggle').textContent=soundEnabled?'🔊':'🔇';
}

// Détection plateforme
const _isAndroid = /android/i.test(navigator.userAgent);

// ── TTS : voix slovène authentique ──────────────────────────────
let _ttsAudio = null;
const _ttsCache = {};
let _slVoice = null;
let _voicesLoaded = false;

// Pré-charger les voix disponibles au démarrage
function _loadVoices() {
  if (!window.speechSynthesis) return;
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    _slVoice = _pickSlovenianVoice(voices);
    _voicesLoaded = true;
  }
}
function _pickSlovenianVoice(voices) {
  // Priorité : voix sl-SI natives (pas "Google", plus authentiques sur desktop)
  const priority = [
    v => v.lang === 'sl-SI' && !v.name.includes('Google'),
    v => v.lang === 'sl' && !v.name.includes('Google'),
    v => v.lang === 'sl-SI',
    v => v.lang && v.lang.startsWith('sl'),
  ];
  for (const test of priority) {
    const found = voices.find(test);
    if (found) return found;
  }
  return null;
}
if (window.speechSynthesis) {
  _loadVoices();
  speechSynthesis.addEventListener('voiceschanged', () => { _loadVoices(); });
}

function _playAudio(url) {
  if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio = null; }
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    _ttsAudio = audio;
    audio.volume = 1.0;
    audio.onended = resolve;
    audio.onerror = reject;
    audio.src = url;
    audio.load();
    audio.play().then(resolve).catch(reject);
  });
}

// Lecture directe Google TTS (pas de Promise — play-and-forget)
function _playGoogleTTS(url) {
  if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio = null; }
  const audio = new Audio();
  _ttsAudio = audio;
  audio.volume = 1.0;
  audio.src = url;
  audio.load();
  return audio.play().catch(function(e) { throw e; });
}

function _webSpeechSL(txt, rate=0.82) {
  if (!window.speechSynthesis) return Promise.reject();
  return new Promise((resolve, reject) => {
    speechSynthesis.cancel();
    const doSpeak = () => {
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = 'sl-SI';
      u.rate = rate;
      u.pitch = 1.0;
      const voice = _slVoice || _pickSlovenianVoice(speechSynthesis.getVoices());
      if (voice) u.voice = voice;
      // Si aucune voix sl trouvée → rejeter pour qu'on ne prononce pas avec une voix fr
      if (!voice && !speechSynthesis.getVoices().some(v => v.lang && v.lang.startsWith('sl'))) {
        reject(new Error('no slovenian voice'));
        return;
      }
      u.onend = resolve;
      u.onerror = reject;
      speechSynthesis.speak(u);
    };
    if (speechSynthesis.getVoices().length > 0) doSpeak();
    else speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
  });
}

// ── MP3 LOCAUX ──────────────────────────────────────────────────
// Placez vos MP3 dans un dossier audio/ à côté du fichier HTML
// ── DÉVERROUILLAGE AUDIO (autoplay policy) ───────────────────────
let _audioUnlocked = false;
async function _unlockAudio() {
  if (_audioUnlocked) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    await ctx.resume();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    _audioUnlocked = true;
  } catch(e) {}
}
document.addEventListener('click', _unlockAudio, { once: false });
document.addEventListener('touchstart', _unlockAudio, { once: false });

function _normalizeKey(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ').trim();
}

async function speak(txt) {
  if (!txt) return;
  await _unlockAudio();
  if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio = null; }
  if (window.speechSynthesis) speechSynthesis.cancel();

  // PRIORITÉ 1 : AUDIO_MAP (base64 ou URL locale)
  if (AUDIO_MAP[txt]) {
    try { await _playAudio(AUDIO_MAP[txt]); return; } catch(e) { console.warn('AUDIO_MAP exact failed:', txt, e); }
  }

  // PRIORITÉ 2 : AUDIO_MAP normalisée
  var kl = _normalizeKey(txt);
  var mk = Object.keys(AUDIO_MAP);
  for (var _i = 0; _i < mk.length; _i++) {
    if (_normalizeKey(mk[_i]) === kl) {
      try { await _playAudio(AUDIO_MAP[mk[_i]]); return; } catch(e) { console.warn('AUDIO_MAP norm failed:', mk[_i], e); }
    }
  }

  // PRIORITÉ 3 : Google Translate TTS (voix slovaque — très proche phonétiquement du slovène)
  var enc = encodeURIComponent(txt);
  var gUrls = [
    'https://translate.googleapis.com/translate_tts?ie=UTF-8&q=' + enc + '&tl=sk&client=gtx&ttsspeed=0.85',
    'https://translate.google.com/translate_tts?ie=UTF-8&q=' + enc + '&tl=sk-SK&client=tw-ob&ttsspeed=0.85',
  ];
  for (var _j = 0; _j < gUrls.length; _j++) {
    try { await _playAudio(gUrls[_j]); return; } catch(e) {
      console.warn('Google TTS échoué:', gUrls[_j]);
    }
  }

  // PRIORITÉ 4 : Web Speech API — cherche une voix slave (slovaque, tchèque, polonais)
  if (window.speechSynthesis) {
    var voices = speechSynthesis.getVoices();
    var slVoice = voices.find(function(v) {
      return v.lang === 'sk-SK' || v.lang === 'sk' ||
             v.lang === 'cs-CZ' || v.lang === 'cs' ||
             v.lang === 'pl-PL' || v.lang === 'pl';
    });
    if (slVoice) {
      var u = new SpeechSynthesisUtterance(txt);
      u.lang = slVoice.lang;
      u.voice = slVoice;
      u.rate = 0.82;
      speechSynthesis.speak(u);
      return;
    }
  }

  console.warn('⚠️ Aucune voix slave trouvée. Options :');
  console.warn('  1. Installez une voix slovaque/tchèque dans Paramètres Windows');
  console.warn('  2. Utilisez Microsoft Edge (il a plus de voix gratuites)');
}

// ── SPEAK HELPER ─────────────────────────────────────────────────
function speakQ(qObj) {
  if (!qObj) return;
  speak(qObj.q);
}

// ── UTILITAIRES ──────────────────────────────────────────────────
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const g=document.querySelector('.game');
  if(g)g.scrollTop=0;
}
function goMenu(){showScreen('menuScreen');updateMenuStats();updateDefiMenuCard();}
function replayLast(){if(lastMode==='reconstruct')chooseReconstructDir();else if(lastMode==='dictee')chooseDicteeDir();else startGame(lastMode);}
function showCombo(t){const el=document.getElementById('comboFlash');el.textContent=t;el.classList.remove('show');void el.offsetWidth;el.classList.add('show');}

// ── MODE QUIZ ────────────────────────────────────────────────────
let _pendingCat = '';
function chooseDirScreen(m){
  pendingMode=m;
  const labels={vocab:'Vocabulaire 📖',phrases:'Phrases 💬',mixed:'Mixte 🎲'};
  document.getElementById('dirTitle').textContent=labels[m]||'Choisir le sens';
  // Bouton Apprendre : visible uniquement pour les catégories vocab
  const isVocabCat = m.startsWith('cat_');
  const learnBtn = document.getElementById('learnDirBtn');
  if(learnBtn){
    learnBtn.style.display = isVocabCat ? '' : 'none';
    if(isVocabCat){ _pendingCat = m.replace('cat_',''); }
  }
  showScreen('dirScreen');
}
function startGame(m,dir){
  mode=m;lastMode=m;currentStreak=0;questionHistory=[];
  quizDirection=dir||'random';
  questions=getWeakChars(MODES[m].data,TOTAL_Q);
  questions=questions.map(q=>{
    let d;
    if(quizDirection==='random') d=Math.random()>.5?'sl2fr':'fr2sl';
    else d=quizDirection;
    return{...q,direction:d};
  });
  qIdx=0;score=0;lives=5;errors=[];answered=false;
  showScreen('quizScreen');
  const dirLabel=quizDirection==='sl2fr'?' → français':quizDirection==='fr2sl'?' → slovène':' ×2';
  document.getElementById('modeLbl').textContent=(MODES[m].label||m)+dirLabel;
  updateStreakUI();
  renderQuestion();
}
function startReview(){
  const m=loadMem();
  const rev=m.review||[];
  if(!rev.length){goMenu();return;}
  mode='review';lastMode='review';currentStreak=0;questionHistory=[];
  questions=shuffle([...rev]).slice(0,TOTAL_Q).map(q=>({...q,direction:Math.random()>.5?'sl2fr':'fr2sl'}));
  qIdx=0;score=0;lives=5;errors=[];answered=false;
  showScreen('quizScreen');
  document.getElementById('modeLbl').textContent='🔁 Révision';
  updateStreakUI();
  renderQuestion();
}
function renderLives(){
  const el=document.getElementById('livesDisplay');el.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<lives?'♥':'♡';s.style.color=i<lives?'var(--aurora-green)':'rgba(255,255,255,.2)';el.appendChild(s);}
}
function updateStreakUI(){
  const el=document.getElementById('streakDisplay'),num=document.getElementById('streakNum');
  if(currentStreak>=2){el.style.display='flex';num.textContent=currentStreak;el.classList.remove('fire');void el.offsetWidth;el.classList.add('fire');}
  else el.style.display='none';
}
function renderQuestion(){
  answered=false;
  const q=questions[qIdx];currentQ=q;
  const dir=q.direction||'sl2fr';
  document.getElementById('progressFill').style.width=Math.round(qIdx/TOTAL_Q*100)+'%';
  document.getElementById('scoreLbl').textContent=score+' pts';
  renderLives();
  const card=document.getElementById('charCard');
  card.classList.remove('flip-in');void card.offsetWidth;card.classList.add('flip-in');
  if(dir==='sl2fr'){
    document.getElementById('mainChar').style.fontSize='';
    document.getElementById('mainChar').textContent=q.q;
    const lenQ=q.q.length;
    document.getElementById('mainChar').style.fontSize=lenQ>30?'clamp(14px,4vmin,20px)':lenQ>20?'clamp(16px,5vmin,22px)':lenQ>10?'clamp(18px,5.5vmin,24px)':lenQ>5?'clamp(20px,6.5vmin,26px)':'clamp(22px,7vmin,28px)';
    document.getElementById('charHint').textContent=q.hint||'';
    document.getElementById('examplePhrase').textContent=q.ex||'';
  }else{
    document.getElementById('mainChar').textContent=q.a;
    const lenA=q.a.length;
    document.getElementById('mainChar').style.fontSize=lenA>30?'clamp(14px,4vmin,20px)':lenA>20?'clamp(16px,5vmin,22px)':lenA>10?'clamp(18px,5.5vmin,24px)':lenA>5?'clamp(20px,6.5vmin,26px)':'clamp(22px,7vmin,28px)';
    document.getElementById('charHint').textContent='';
    document.getElementById('examplePhrase').textContent=q.ex||'';
  }
  document.getElementById('feedback').textContent='';document.getElementById('feedback').className='feedback';
  document.getElementById('nextBtn').className='next-btn';
  const modeData=mode==='review'?[...VOCAB,...PHRASES]:MODES[mode].data;
  let correctAnswer,opts;
  if(dir==='sl2fr'){
    correctAnswer=q.a;
    const allAns=modeData.map(x=>x.a);
    opts=shuffle([q.a,...shuffle(allAns.filter(a=>a!==q.a)).slice(0,3)]);
  }else{
    correctAnswer=q.q;
    const allQ=modeData.map(x=>x.q);
    opts=shuffle([q.q,...shuffle(allQ.filter(k=>k!==q.q)).slice(0,3)]);
  }
  const grid=document.getElementById('optionsGrid');grid.innerHTML='';
  opts.forEach(o=>{
    const b=document.createElement('button');b.className='opt';
    b.textContent=o;
    b.style.fontSize=o.length>20?'11px':o.length>10?'13px':'15px';
    b.onclick=()=>pick(b,o,correctAnswer,dir);
    grid.appendChild(b);
  });
}
function pick(btn,chosen,correct,dir){
  if(answered)return;answered=true;
  document.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(b.textContent===correct)b.classList.add('correct');});
  const q=questions[qIdx],fb=document.getElementById('feedback');
  const ok=chosen===correct;
  recordResult(q.q,ok,q);
  questionHistory.push(ok);
  if(ok){
    score+=10;btn.classList.add('correct');currentStreak++;updateStreakUI();
    if(currentStreak===3){fb.textContent='🔥 Série de 3 !';fb.className='feedback good';showCombo('🔥 ×3');playCombo();}
    else if(currentStreak===5){fb.textContent='⚡ Série de 5 !';fb.className='feedback good';showCombo('⚡ ×5');playCombo();}
    else if(currentStreak>5&&currentStreak%2===1){showCombo('❄️ ×'+currentStreak);fb.textContent='❄️ ×'+currentStreak+' !';fb.className='feedback good';playCombo();}
    else{fb.textContent=dir==='sl2fr'?`✓ ${q.q} = ${q.a}`:`✓ ${q.a} = ${q.q}`;fb.className='feedback good';playCorrect();}
  }else{
    btn.classList.add('wrong');lives--;currentStreak=0;updateStreakUI();
    errors.push({char:q.q,correct:q.a,hint:q.hint});
    fb.textContent=dir==='sl2fr'?`✗ ${q.q} = ${q.a}`:`✗ ${q.a} = ${q.q}`;fb.className='feedback bad';playWrong();
  }
  document.getElementById('scoreLbl').textContent=score+' pts';renderLives();
  // Révéler l'IPA après la réponse (utile en fr2sl)
  if(dir==='fr2sl') document.getElementById('charHint').textContent=q.hint||'';
  const nb=document.getElementById('nextBtn');
  nb.textContent=qIdx<TOTAL_Q-1&&lives>0?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  speakQ(q);
  if(lives<=0)setTimeout(()=>showResults(false),600);
}
function nextQuestion(){qIdx++;if(qIdx>=TOTAL_Q||lives<=0){showResults(false);return;}renderQuestion();}

// ── RÉSULTATS ────────────────────────────────────────────────────
function showResults(isDraw){
  showScreen('resultsScreen');
  const s=score,maxS=TOTAL_Q*10;
  const errs=errors;
  const correctCount=questionHistory.filter(Boolean).length;
  const pct=Math.round(s/maxS*100);
  document.getElementById('finalScore').textContent=s;
  document.getElementById('finalTotal').textContent='/ '+maxS;
  document.getElementById('stCorrect').textContent=correctCount;
  document.getElementById('stWrong').textContent=errs.length;
  document.getElementById('stPct').textContent=pct+'%';
  let msg,sub,emo;
  if(pct>=90){msg='Odlično!';sub='Excellent ! Vous maîtrisez ce sujet.';emo='⭐';}
  else if(pct>=70){msg='Dobro opravljeno!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
  else if(pct>=50){msg='Nadaljuj!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
  else{msg='Vadi še!';sub='La pratique régulière est la clé.';emo='🇸🇮';}
  document.getElementById('resultEmoji').textContent=emo;
  document.getElementById('resultMsg').textContent=msg;
  document.getElementById('resultSub').textContent=sub;
  if(questionHistory.length>0){
    const bars=document.getElementById('perfBars');bars.innerHTML='';
    document.getElementById('perfChart').style.display='block';
    questionHistory.forEach((ok,i)=>{
      const b=document.createElement('div');b.className='perf-bar '+(ok?'ok':'ko');
      b.style.height='0';bars.appendChild(b);
      setTimeout(()=>{b.style.height=(ok?'100%':'40%');},i*55+300);
    });
  }else document.getElementById('perfChart').style.display='none';
  const wl=document.getElementById('wrongList');
  if(errs.length>0){
    let html='<h4>À revoir :</h4>';
    errs.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char">${e.char}</span><span class="wrong-ans">${e.correct}${e.hint?' · '+e.hint:''}<span class="review-tag">révision</span></span></div>`;});
    wl.innerHTML=html;
  }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
  document.getElementById('replayBtn').textContent='Rejouer — '+(MODES[mode]&&MODES[mode].label||'');
}

// ── MODE RECONSTRUIRE ────────────────────────────────────────────
const RECONSTRUCT_Q=8;
let rQuestions,rQIdx,rScore,rErrors,rAnswered,rCurrentAnswer,rCurrentWords;

function chooseReconstructDir(){showScreen('reconstructDirScreen');}
function startReconstruct(dir){
  lastMode='reconstruct';
  const pool=PHRASES.filter(p=>p.words&&p.words.length>=2);
  rQuestions=shuffle([...pool]).slice(0,RECONSTRUCT_Q).map(q=>{
    // assign direction per question
    let d=dir;
    if(d==='random') d=Math.random()<0.5?'fr2sl':'sl2fr';
    return {...q,_dir:d};
  });
  rQIdx=0;rScore=0;rErrors=[];
  showScreen('reconstructScreen');
  renderReconstructQ();
}
function renderReconstructQ(){
  rAnswered=false;rCurrentAnswer=[];
  const q=rQuestions[rQIdx];
  const dir=q._dir;
  document.getElementById('rProgressFill').style.width=Math.round(rQIdx/RECONSTRUCT_Q*100)+'%';
  document.getElementById('rScoreLbl').textContent=rScore+' pts';
  document.getElementById('rLivesDisplay').innerHTML='<span style="font-size:13px;color:var(--text-muted)">'+(rQIdx+1)+' / '+RECONSTRUCT_Q+'</span>';
  document.getElementById('rFeedback').textContent='';document.getElementById('rFeedback').className='feedback';
  document.getElementById('rNextBtn').className='next-btn';
  document.getElementById('rCheckBtn').style.display='none';
  const hintEl=document.getElementById('rHint');hintEl.textContent='';hintEl.style.opacity='0';

  if(dir==='fr2sl'){
    // Show French, reconstruct Slovenian (original mode)
    document.getElementById('rModeLbl').textContent='🧩 FR → SL';
    document.getElementById('rInstruction').textContent='Reconstituez la phrase en slovène :';
    document.getElementById('rTranslation').textContent=q.a;
    rCurrentWords=shuffle([...q.words]);
  } else {
    // Show Slovenian, reconstruct French
    document.getElementById('rModeLbl').textContent='🧩 SL → FR';
    document.getElementById('rInstruction').textContent='Reconstituez la traduction en français :';
    document.getElementById('rTranslation').textContent=q.q;
    // Split French answer into words
    rCurrentWords=shuffle(q.a.split(' '));
  }
  renderReconstructUI();
}
function renderReconstructUI(){
  const q=rQuestions[rQIdx];
  const dir=q._dir;
  const targetWords=dir==='fr2sl'?q.words:q.a.split(' ');
  const slots=document.getElementById('reconstructSlots');slots.innerHTML='';
  if(rCurrentAnswer.length===0){
    const ph=document.createElement('span');ph.style.cssText='font-size:13px;color:var(--text-muted);font-style:italic';
    ph.textContent='Cliquez les mots pour former la phrase…';slots.appendChild(ph);
  }else{
    rCurrentAnswer.forEach((wordIdx,i)=>{
      const btn=document.createElement('button');btn.className='slot-word';
      btn.textContent=rCurrentWords[wordIdx];
      if(!rAnswered)btn.onclick=()=>removeReconstructWord(i);
      slots.appendChild(btn);
    });
  }
  const bank=document.getElementById('wordBank');bank.innerHTML='';
  rCurrentWords.forEach((word,i)=>{
    const btn=document.createElement('button');btn.className='bank-word';btn.textContent=word;
    if(rCurrentAnswer.includes(i)){btn.classList.add('used');}
    else if(!rAnswered){btn.onclick=()=>addReconstructWord(i);}
    bank.appendChild(btn);
  });
  const cb=document.getElementById('rCheckBtn');
  if(!rAnswered&&rCurrentAnswer.length===targetWords.length)cb.style.display='block';
  else cb.style.display='none';
}
function addReconstructWord(idx){if(rAnswered||rCurrentAnswer.includes(idx))return;rCurrentAnswer.push(idx);playClick();renderReconstructUI();}
function removeReconstructWord(ansIdx){if(rAnswered)return;rCurrentAnswer.splice(ansIdx,1);renderReconstructUI();}
function checkReconstruct(){
  if(rAnswered)return;
  const q=rQuestions[rQIdx];rAnswered=true;
  const dir=q._dir;
  const targetWords=dir==='fr2sl'?q.words:q.a.split(' ');
  document.getElementById('rCheckBtn').style.display='none';
  const built=rCurrentAnswer.map(i=>rCurrentWords[i]).join(' ');
  const correct=targetWords.join(' ');
  const fb=document.getElementById('rFeedback');
  if(built===correct){
    rScore+=10;
    fb.textContent=dir==='fr2sl'?'✨ Parfait ! '+q.q:'✨ Parfait ! '+q.a;
    fb.className='feedback good';playCorrect();
    document.querySelectorAll('.slot-word').forEach(el=>{el.style.background='linear-gradient(135deg,var(--aurora-green),#1e6a3a)';el.style.borderColor='#27ae60';});
  }else{
    rErrors.push({char:dir==='fr2sl'?q.a:q.q,correct:dir==='fr2sl'?q.q:q.a});
    fb.textContent='✗ Bonne réponse :';fb.className='feedback bad';
    if(dir==='fr2sl'){
      const hintEl=document.getElementById('rHint');hintEl.textContent=q.hint;hintEl.style.opacity='1';
    }
    const slots=document.getElementById('reconstructSlots');slots.innerHTML='';
    targetWords.forEach(w=>{
      const btn=document.createElement('span');btn.className='slot-word';
      btn.style.cssText='background:linear-gradient(135deg,var(--aurora-green),#1e6a3a);border-color:#27ae60;cursor:default';
      btn.textContent=w;slots.appendChild(btn);
    });
    playWrong();
  }
  document.getElementById('rScoreLbl').textContent=rScore+' pts';
  const nb=document.getElementById('rNextBtn');
  nb.textContent=rQIdx<RECONSTRUCT_Q-1?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  setTimeout(()=>speakQ(q),600);
}
function nextReconstructQ(){
  rQIdx++;
  if(rQIdx>=RECONSTRUCT_Q){
    showScreen('resultsScreen');
    const maxS=RECONSTRUCT_Q*10,pct=Math.round(rScore/maxS*100);
    document.getElementById('finalScore').textContent=rScore;
    document.getElementById('finalTotal').textContent='/ '+maxS;
    document.getElementById('stCorrect').textContent=RECONSTRUCT_Q-rErrors.length;
    document.getElementById('stWrong').textContent=rErrors.length;
    document.getElementById('stPct').textContent=pct+'%';
    let msg,sub,emo;
    if(pct>=90){msg='Odlično!';sub='Excellent ! Parfaite maîtrise des phrases.';emo='⭐';}
    else if(pct>=70){msg='Dobro opravljeno!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
    else if(pct>=50){msg='Nadaljuj!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
    else{msg='Vadi še!';sub='La pratique régulière est la clé.';emo='🇸🇮';}
    document.getElementById('resultEmoji').textContent=emo;
    document.getElementById('resultMsg').textContent=msg;
    document.getElementById('resultSub').textContent=sub;
    document.getElementById('perfChart').style.display='none';
    const wl=document.getElementById('wrongList');
    if(rErrors.length>0){
      let html='<h4>À revoir :</h4>';
      rErrors.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char" style="font-size:13px">${e.char}</span><span class="wrong-ans">${e.correct}<span class="review-tag">révision</span></span></div>`;});
      wl.innerHTML=html;
    }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
    document.getElementById('replayBtn').textContent='Rejouer — Reconstruire';
    return;
  }
  renderReconstructQ();
}
function speakReconstruct(){if(rQuestions&&rQIdx<rQuestions.length)speakQ(rQuestions[rQIdx]);}
function speakCurrent(){if(currentQ)speakQ(currentQ);}

// ── MODE DICTÉE ──────────────────────────────────────────────────
const DICTEE_Q=8;
let dPool,dType,dQuestions,dQIdx,dScore,dErrors,dAnswered,dCurrentAnswer,dCurrentWords,dAnswer;

function chooseDicteeDir(){showScreen('dicteeDirScreen');}

function startDictee(type){
  dType=type;lastMode='dictee';

  if(type==='mots'){
    dPool=VOCAB.map(v=>({...v,words:v.q.split('')}));
  }else if(type==='phrases'){
    dPool=PHRASES.filter(p=>p.words&&p.words.length>=2);
  }else{
    dPool=[...VOCAB.map(v=>({...v,words:v.q.split('')})),...PHRASES.filter(p=>p.words&&p.words.length>=2)];
  }

  dQuestions=shuffle([...dPool]).slice(0,DICTEE_Q);
  dQIdx=0;dScore=0;dErrors=[];
  showScreen('dicteeScreen');
  renderDicteeQ();
}

function renderDicteeQ(){
  dAnswered=false;dCurrentAnswer=[];
  const item=dQuestions[dQIdx];
  // For vocab: answer = full word (q), for phrases: answer = full phrase (q)
  dAnswer=item.q;
  // Build word/letter bank
  if(dType==='mots'){
    // Single word — split into letters
    dCurrentWords=shuffle(item.q.split(''));
  }else if(dType==='phrases'){
    // Phrase — split into words
    dCurrentWords=shuffle([...item.words]);
  }else{
    // Mixte
    if(item.words){
      // It's a phrase
      dCurrentWords=shuffle([...item.words]);
    }else{
      const wordStr=item.q;
      if(wordStr.split(' ').length>1){
        dCurrentWords=shuffle(wordStr.split(' '));
      }else{
        dCurrentWords=shuffle(wordStr.split(''));
      }
    }
  }

  document.getElementById('dProgressFill').style.width=Math.round(dQIdx/DICTEE_Q*100)+'%';
  document.getElementById('dScoreLbl').textContent=dScore+' pts';
  document.getElementById('dLivesDisplay').innerHTML='<span style="font-size:13px;color:var(--text-muted)">'+(dQIdx+1)+' / '+DICTEE_Q+'</span>';
  document.getElementById('dFeedback').textContent='';document.getElementById('dFeedback').className='feedback';
  document.getElementById('dNextBtn').className='next-btn';
  document.getElementById('dCheckBtn').style.display='none';

  // Speed slider label
  const slider=document.getElementById('dicteeSpeedSlider');
  const lbl=document.getElementById('dicteeSpeedLbl');
  lbl.textContent=parseFloat(slider.value).toFixed(2)+'x';

  // Update mode label
  const isWords=dCurrentWords.length===item.q.length&&!item.q.includes(' ');
  document.getElementById('dModeLbl').textContent=isWords?'👂 Dictée — Mot':'👂 Dictée — Phrase';

  renderDicteeUI();
  // Play audio automatically after short delay
  setTimeout(()=>playDicteeAudio(),400);
}

function renderDicteeUI(){
  const item=dQuestions[dQIdx];
  const slots=document.getElementById('dicteeSlots');slots.innerHTML='';
  if(dCurrentAnswer.length===0){
    const ph=document.createElement('span');ph.style.cssText='font-size:13px;color:var(--text-muted);font-style:italic';
    ph.textContent='Cliquez pour composer la réponse…';slots.appendChild(ph);
  }else{
    dCurrentAnswer.forEach((wordIdx,i)=>{
      const btn=document.createElement('button');btn.className='slot-word';
      btn.textContent=dCurrentWords[wordIdx];
      if(!dAnswered)btn.onclick=()=>removeDicteeWord(i);
      slots.appendChild(btn);
    });
  }
  const bank=document.getElementById('dicteeBank');bank.innerHTML='';
  dCurrentWords.forEach((word,i)=>{
    const btn=document.createElement('button');btn.className='bank-word';btn.textContent=word;
    if(dCurrentAnswer.includes(i)){btn.classList.add('used');}
    else if(!dAnswered){btn.onclick=()=>addDicteeWord(i);}
    bank.appendChild(btn);
  });
  const cb=document.getElementById('dCheckBtn');
  if(!dAnswered&&dCurrentAnswer.length===dCurrentWords.length)cb.style.display='block';
  else cb.style.display='none';
}

function addDicteeWord(idx){if(dAnswered||dCurrentAnswer.includes(idx))return;dCurrentAnswer.push(idx);playClick();renderDicteeUI();}
function removeDicteeWord(ansIdx){if(dAnswered)return;dCurrentAnswer.splice(ansIdx,1);renderDicteeUI();}

function playDicteeAudio(){
  const item=dQuestions[dQIdx];if(!item)return;
  speakQ(item);
}
function playDicteeSlow(){
  const item=dQuestions[dQIdx];if(!item)return;
  const rate=parseFloat(document.getElementById('dicteeSpeedSlider').value)||0.65;
  if(_ttsAudio){_ttsAudio.pause();_ttsAudio=null;}
  const nk=_normalizeKey(item.q);
  let clip=AUDIO_MAP[item.q];
  if(!clip){for(const k in AUDIO_MAP){if(_normalizeKey(k)===nk){clip=AUDIO_MAP[k];break;}}}
  // Si on a un clip, on le joue ajusté en vitesse
  if(clip){
    _ttsAudio=new Audio(clip);
    _ttsAudio.playbackRate=rate;
    _ttsAudio.volume=1.0;
    _ttsAudio.play();
  }else{
    // Fallback Google TTS direct avec vitesse
    const enc=encodeURIComponent(item.q);
    const url='https://translate.googleapis.com/translate_tts?ie=UTF-8&q='+enc+'&tl=sl&client=gtx&ttsspeed='+rate;
    _ttsAudio=new Audio(url);
    _ttsAudio.volume=1.0;
    _ttsAudio.play().catch(()=>{console.warn('Google TTS direct failed for dictee speed');});
  }
}
function changeDicteeSpeed(){
  const slider=document.getElementById('dicteeSpeedSlider');
  const lbl=document.getElementById('dicteeSpeedLbl');
  const rate=parseFloat(slider.value)||0.65;
  lbl.textContent=rate.toFixed(2)+'x';
  // Replay immediately at new speed
  if(dQuestions&&dQuestions[dQIdx]) playDicteeSlow();
}

function checkDictee(){
  if(dAnswered)return;
  dAnswered=true;
  const item=dQuestions[dQIdx];
  document.getElementById('dCheckBtn').style.display='none';

  const built=dCurrentAnswer.map(i=>dCurrentWords[i]).join('');
  const correct=dAnswer;
  const fb=document.getElementById('dFeedback');

  if(built===correct){
    dScore+=10;
    fb.textContent='✨ Parfait !';
    fb.className='feedback good';playCorrect();
    document.querySelectorAll('.slot-word').forEach(el=>{el.style.background='linear-gradient(135deg,var(--aurora-green),#1e6a3a)';el.style.borderColor='#27ae60';});
  }else{
    dErrors.push({char:item.a||item.q,correct:correct});
    fb.textContent='✗ Bonne réponse : '+item.q;fb.className='feedback bad';
    const slots=document.getElementById('dicteeSlots');slots.innerHTML='';
    const parts=dType==='mots'||!item.words?correct.split(''):correct.split('');
    parts.forEach(ch=>{
      const sp=document.createElement('span');sp.className='slot-word';
      sp.style.cssText='background:linear-gradient(135deg,var(--aurora-green),#1e6a3a);border-color:#27ae60;cursor:default';
      sp.textContent=ch;slots.appendChild(sp);
    });
    playWrong();
  }
  document.getElementById('dScoreLbl').textContent=dScore+' pts';
  const nb=document.getElementById('dNextBtn');
  nb.textContent=dQIdx<DICTEE_Q-1?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  setTimeout(()=>speakQ(item),600);
}

function nextDicteeQ(){
  dQIdx++;
  if(dQIdx>=DICTEE_Q){
    showScreen('resultsScreen');
    const maxS=DICTEE_Q*10,pct=Math.round(dScore/maxS*100);
    document.getElementById('finalScore').textContent=dScore;
    document.getElementById('finalTotal').textContent='/ '+maxS;
    document.getElementById('stCorrect').textContent=DICTEE_Q-dErrors.length;
    document.getElementById('stWrong').textContent=dErrors.length;
    document.getElementById('stPct').textContent=pct+'%';
    let msg,sub,emo;
    if(pct>=90){msg='Odlično!';sub='Excellent ! Parfaite maîtrise.';emo='⭐';}
    else if(pct>=70){msg='Dobro opravljeno!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
    else if(pct>=50){msg='Nadaljuj!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
    else{msg='Vadi še!';sub='La pratique régulière est la clé.';emo='🇸🇮';}
    document.getElementById('resultEmoji').textContent=emo;
    document.getElementById('resultMsg').textContent=msg;
    document.getElementById('resultSub').textContent=sub;
    document.getElementById('perfChart').style.display='none';
    const wl=document.getElementById('wrongList');
    if(dErrors.length>0){
      let html='<h4>À revoir :</h4>';
      dErrors.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char" style="font-size:13px">${e.char}</span><span class="wrong-ans">${e.correct}<span class="review-tag">révision</span></span></div>`;});
      wl.innerHTML=html;
    }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
    document.getElementById('replayBtn').textContent='Rejouer — Dictée';
    return;
  }
  renderDicteeQ();
}

// ── DÉFI JOURNALIER ─────────────────────────────────────────────
const DEFI_Q_PER_PHASE=5;
const DEFI_PHASES=[
  {label:'Vocabulaire',data:()=>VOCAB,dir:'sl2fr',icon:'📖'},
  {label:'Vocabulaire',data:()=>VOCAB,dir:'sl2fr',icon:'📖'},
  {label:'Phrases',data:()=>PHRASES,dir:'sl2fr',icon:'💬'}
];
const TOTAL_DEFI_Q=DEFI_PHASES.length*DEFI_Q_PER_PHASE;
let defiState=null,defiTimerInterval=null;

function getDefiDateKey(){const d=new Date();return`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;}
function loadDefi(){try{return JSON.parse(localStorage.getItem('sl_defi')||'{}')}catch(e){return{};}}
function saveDefi(d){try{localStorage.setItem('sl_defi',JSON.stringify(d))}catch(e){}}
function getDefiSeed(){const k=getDefiDateKey();let h=0;for(let i=0;i<k.length;i++)h=((h<<5)-h)+k.charCodeAt(i);return Math.abs(h);}
function seededShuffle(arr,seed){const a=[...arr];let s=seed;for(let i=a.length-1;i>0;i--){s=(s*1664525+1013904223)&0xFFFFFFFF;const j=Math.abs(s)%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
function buildDefiQuestions(){
  const seed=getDefiSeed();let all=[];
  DEFI_PHASES.forEach((phase,pi)=>{seededShuffle(phase.data(),seed+pi*999).slice(0,DEFI_Q_PER_PHASE).forEach(q=>{all.push({...q,_phase:pi,_dir:phase.dir});});});
  return all;
}
function renderDefiCalendar(containerId){
  const d=loadDefi();const hist=d.history||[];
  const container=document.getElementById(containerId);if(!container)return;
  const last7=[];
  for(let i=6;i>=0;i--){const day=new Date();day.setDate(day.getDate()-i);const key=`${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`;const entry=hist.find(h=>h.date===key);last7.push({key,day:day.getDate(),entry});}
  let html='<h4>7 derniers jours</h4><div class="defi-cal">';
  last7.forEach(({key,day,entry})=>{
    if(key===getDefiDateKey()&&!entry){html+=`<div class="defi-day" style="background:var(--blue-mid);color:#fff;border-color:var(--aurora-green)">${day}</div>`;}
    else if(entry){html+=`<div class="defi-day ${entry.won?'won':'lost'}" title="${entry.score} pts">${day}</div>`;}
    else{html+=`<div class="defi-day empty">${day}</div>`;}
  });
  html+='</div>';container.innerHTML=html;
}
function updateDefiMenuCard(){
  const d=loadDefi();const todayKey=getDefiDateKey();
  const todayDone=d.history&&d.history.find(h=>h.date===todayKey);
  const badge=document.getElementById('defiDoneBadge');const streakBadge=document.getElementById('defiStreakBadge');const desc=document.getElementById('defiCardDesc');
  if(todayDone){if(badge)badge.style.display='block';if(desc)desc.textContent=todayDone.score+' pts · '+Math.round(todayDone.pct)+'% réussite';}
  else{if(badge)badge.style.display='none';if(desc)desc.textContent='5+5+5 questions · Nouveau défi chaque jour';}
  const streak=d.streak||0;
  if(streakBadge){if(streak>=2){streakBadge.style.display='block';streakBadge.textContent='🔥 '+streak+' jours';}else streakBadge.style.display='none';}
}
function startDefiCountdownTimer(){
  const tick=()=>{const now=new Date(),midnight=new Date(now);midnight.setHours(24,0,0,0);const diff=midnight-now;const h=String(Math.floor(diff/3600000)).padStart(2,'0');const m=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');const s=String(Math.floor((diff%60000)/1000)).padStart(2,'0');const el=document.getElementById('defiTimer');if(el)el.textContent=`${h}:${m}:${s}`;};
  tick();return setInterval(tick,1000);
}
function startDefi(){
  const todayKey=getDefiDateKey();const d=loadDefi();const todayEntry=d.history&&d.history.find(h=>h.date===todayKey);
  const now=new Date();const dayNames=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];const monthNames=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const dateEl=document.getElementById('defiDateLbl');if(dateEl)dateEl.textContent=dayNames[now.getDay()]+' '+now.getDate()+' '+monthNames[now.getMonth()]+' '+now.getFullYear();
  showScreen('defiScreen');
  if(defiTimerInterval)clearInterval(defiTimerInterval);defiTimerInterval=startDefiCountdownTimer();
  if(todayEntry){
    document.getElementById('defiQuizZone').style.display='none';document.getElementById('defiPhaseLbl').style.display='none';
    document.getElementById('defiCountdown').style.display='flex';document.getElementById('defiAlreadyDone').style.display='block';
    renderDefiStepsDisplay(TOTAL_DEFI_Q,TOTAL_DEFI_Q,[]);renderDefiCalendar('defiHistory');return;
  }
  document.getElementById('defiCountdown').style.display='none';document.getElementById('defiQuizZone').style.display='block';
  document.getElementById('defiPhaseLbl').style.display='block';document.getElementById('defiAlreadyDone').style.display='none';
  defiState={questions:buildDefiQuestions(),qIdx:0,score:0,lives:5,errors:[],answered:false,history:[]};
  renderDefiQuestion();
}
function renderDefiStepsDisplay(total,current,histArr){
  const container=document.getElementById('defiSteps');if(!container)return;container.innerHTML='';
  for(let i=0;i<total;i++){const step=document.createElement('div');step.className='defi-step';
    if(i<current){if(histArr[i]===false){step.classList.add('fail');step.textContent='✗';}else{step.classList.add('done');step.textContent='✓';}}
    else if(i===current){step.classList.add('active');step.textContent=(i+1);}
    else{step.textContent=(i+1);}container.appendChild(step);}
}
function renderDefiQuestion(){
  const st=defiState;st.answered=false;const q=st.questions[st.qIdx];const phaseIdx=q._phase;const phase=DEFI_PHASES[phaseIdx];
  const phaseLbl=document.getElementById('defiPhaseLbl');if(phaseLbl)phaseLbl.textContent='PHASE '+(phaseIdx+1)+' — '+phase.label.toUpperCase()+' ('+(st.qIdx%DEFI_Q_PER_PHASE+1)+'/'+DEFI_Q_PER_PHASE+')';
  renderDefiStepsDisplay(TOTAL_DEFI_Q,st.qIdx,st.history);
  document.getElementById('defiProgressFill').style.width=Math.round(st.qIdx/TOTAL_DEFI_Q*100)+'%';
  document.getElementById('defiScoreLbl').textContent=st.score+' pts';
  const livesEl=document.getElementById('defiLivesDisplay');livesEl.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<st.lives?'♥':'♡';s.style.color=i<st.lives?'var(--aurora-green)':'rgba(255,255,255,.2)';livesEl.appendChild(s);}
  document.getElementById('defiModeLbl').textContent='🏆 '+phase.label;
  const card=document.getElementById('defiCharCard');card.classList.remove('flip-in');void card.offsetWidth;card.classList.add('flip-in');
  const dir=q._dir;const mainEl=document.getElementById('defiMainChar');const hintEl=document.getElementById('defiHint');const exEl=document.getElementById('defiEx');
  mainEl.textContent=q.q;mainEl.style.fontSize=q.q.length>15?'16px':q.q.length>10?'18px':q.q.length>5?'20px':'24px';
  hintEl.textContent=q.hint||'Que signifie ce mot ?';exEl.textContent=q.ex||'';
  document.getElementById('defiFeedback').textContent='';document.getElementById('defiFeedback').className='feedback';
  document.getElementById('defiNextBtn').className='next-btn';
  const allData=phase.data();const correctAnswer=q.a;
  const allAns=allData.map(x=>x.a);const opts=shuffle([q.a,...shuffle(allAns.filter(a=>a!==q.a)).slice(0,3)]);
  const grid=document.getElementById('defiOptionsGrid');grid.innerHTML='';
  opts.forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o;b.style.fontSize=o.length>20?'11px':o.length>10?'13px':'15px';b.onclick=()=>pickDefi(b,o,correctAnswer,dir,q);grid.appendChild(b);});
}
function pickDefi(btn,chosen,correct,dir,q){
  if(defiState.answered)return;defiState.answered=true;
  document.querySelectorAll('#defiOptionsGrid .opt').forEach(b=>{b.disabled=true;if(b.textContent===correct)b.classList.add('correct');});
  const ok=chosen===correct;defiState.history.push(ok);const fb=document.getElementById('defiFeedback');
  if(ok){defiState.score+=10;btn.classList.add('correct');fb.textContent=`✓ ${q.q} = ${q.a}`;fb.className='feedback good';playCorrect();}
  else{btn.classList.add('wrong');defiState.lives--;defiState.errors.push({char:q.q,correct:q.a,hint:q.hint});fb.textContent=`✗ ${q.q} = ${q.a}`;fb.className='feedback bad';playWrong();}
  document.getElementById('defiScoreLbl').textContent=defiState.score+' pts';
  const livesEl=document.getElementById('defiLivesDisplay');livesEl.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<defiState.lives?'♥':'♡';s.style.color=i<defiState.lives?'var(--aurora-green)':'rgba(255,255,255,.2)';livesEl.appendChild(s);}
  const isLast=defiState.qIdx>=TOTAL_DEFI_Q-1;const nb=document.getElementById('defiNextBtn');
  nb.textContent=isLast||defiState.lives<=0?'Voir les résultats →':'Question suivante →';nb.className='next-btn show';
  speakQ(q);if(defiState.lives<=0)setTimeout(()=>endDefi(),700);
}
function nextDefiQuestion(){defiState.qIdx++;if(defiState.qIdx>=TOTAL_DEFI_Q||defiState.lives<=0){endDefi();return;}renderDefiQuestion();}
function speakDefi(){if(defiState&&defiState.qIdx<defiState.questions.length)speakQ(defiState.questions[defiState.qIdx]);}
function computeDefiStreak(defiData,wonToday){
  const hist=defiData.history||[];let streak=wonToday?1:0;let checkDate=new Date();checkDate.setDate(checkDate.getDate()-1);
  for(let i=0;i<60;i++){const key=`${checkDate.getFullYear()}-${checkDate.getMonth()+1}-${checkDate.getDate()}`;const entry=hist.find(h=>h.date===key);if(entry&&entry.won){streak++;checkDate.setDate(checkDate.getDate()-1);}else break;}
  return streak;
}
function endDefi(){
  const st=defiState;const maxScore=TOTAL_DEFI_Q*10;const pct=Math.round(st.score/maxScore*100);const correctCount=st.history.filter(Boolean).length;const won=pct>=50;
  let xpGain=Math.round(st.score/2);const d=loadDefi();const streak=computeDefiStreak(d,won);
  if(streak>=7)xpGain+=50;else if(streak>=3)xpGain+=20;if(pct>=90)xpGain+=30;else if(pct>=70)xpGain+=15;
  const todayKey=getDefiDateKey();if(!d.history)d.history=[];d.history=d.history.filter(h=>h.date!==todayKey);
  d.history.push({date:todayKey,score:st.score,pct,won,correct:correctCount,errors:st.errors.length});
  d.xp=(d.xp||0)+xpGain;d.streak=streak;saveDefi(d);updateDefiMenuCard();
  showScreen('defiResultScreen');
  let trophy,msg,sub;
  if(pct>=90){trophy='🏆';msg='Odlično!';sub='Parfait ! Vous dominez le défi du jour !';}
  else if(pct>=70){trophy='🥈';msg='Dobro opravljeno!';sub='Très bien ! Encore un effort demain.';}
  else if(pct>=50){trophy='🥉';msg='Nadaljuj!';sub='Pas mal ! Continuez la pratique.';}
  else{trophy='❄️';msg='Vadi še!';sub='La régularité est la clé. À demain !';}
  document.getElementById('defiTrophy').textContent=trophy;document.getElementById('defiResultMsg').textContent=msg;document.getElementById('defiResultSub').textContent=sub;
  document.getElementById('defiFinalScore').textContent=st.score;document.getElementById('defiFinalTotal').textContent='/ '+maxScore;
  const stars=document.getElementById('defiStarsRow').querySelectorAll('span');const numStars=pct>=90?3:pct>=60?2:pct>=30?1:0;
  stars.forEach((s,i)=>{setTimeout(()=>{if(i<numStars)s.classList.add('lit');},300+i*200);});
  document.getElementById('defiXpGained').textContent='+'+xpGain+' XP';document.getElementById('defiTotalXp').textContent='Total : '+d.xp+' XP';
  setTimeout(()=>{document.getElementById('defiXpFill').style.width=Math.min(100,(xpGain/150)*100)+'%';},400);
  const badges=[];
  if(pct>=100)badges.push({icon:'💯',label:'Score parfait'});if(st.errors.length===0)badges.push({icon:'✨',label:'Sans faute'});
  if(streak>=7)badges.push({icon:'🔥',label:'7 jours !'});else if(streak>=3)badges.push({icon:'🔥',label:streak+' jours'});
  if(correctCount===TOTAL_DEFI_Q)badges.push({icon:'❄️',label:'Toutes les phases'});
  document.getElementById('defiBadgesRow').innerHTML=badges.map((b,i)=>`<div class="defi-badge" style="animation-delay:${i*.1}s"><span class="badge-icon">${b.icon}</span>${b.label}</div>`).join('');
  renderDefiCalendar('defiResultHistory');
}

// ── MODAL PHONÉTIQUE ────────────────────────────────────────────
function showPhoneticModal() {
  if(document.getElementById('phoneticModal')) return;
  const modal = document.createElement('div');
  modal.id = 'phoneticModal';
  modal.style.cssText = `position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(5,15,30,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:fadeIn .2s ease`;
  modal.innerHTML = `
<div style="background:linear-gradient(160deg,#0d2137,#122840);border:1.5px solid rgba(26,188,156,.35);border-radius:18px;max-width:420px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.7);position:relative;padding:0">
  <!-- En-tête -->
  <div style="padding:16px 18px 12px;border-bottom:1px solid rgba(46,134,193,.18);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:linear-gradient(160deg,#0d2137,#122840);border-radius:18px 18px 0 0;z-index:1">
    <div>
      <div style="font-size:16px;font-weight:900;color:#f0f4f8;letter-spacing:.3px">🇸🇮 Guide de prononciation slovène</div>
      <div style="font-size:11px;color:#5d8aa8;margin-top:2px">Alphabet phonétique international (API)</div>
    </div>
    <button onclick="closePhoneticModal()" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:15px;color:#f0f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button>
  </div>

  <div style="padding:14px 18px 18px">

    <!-- Voyelles -->
    <div style="font-size:11px;font-weight:700;color:#1abc9c;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Voyelles</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ː','Son LONG','La voyelle ou consonne précédente est tenue deux fois plus longtemps','ex: /víːno/ → "viino" long','#52be80')}
      ${phoneticRow('a','A','Comme "a" dans "papa" — toujours ouvert','ex: /máti/ → "mati"','#52be80')}
      ${phoneticRow('ɛ','È','Comme "è" dans "fête" — e ouvert','ex: /médved/ → "mèdved"','#52be80')}
      ${phoneticRow('e','É','Comme "é" dans "été" — e fermé','ex: /réka/ → "réka"','#52be80')}
      ${phoneticRow('i','I','Comme "i" dans "ici" — toujours tendu','ex: /píti/ → "píti"','#52be80')}
      ${phoneticRow('ɔ','O ouvert','Comme "o" dans "porte" — o ouvert','ex: /gɔzd/ → "gòzd"','#52be80')}
      ${phoneticRow('o','O fermé','Comme "o" dans "eau" — o fermé','ex: /sóva/ → "sóva"','#52be80')}
      ${phoneticRow('u','OU','Comme "ou" dans "loup" — toujours arrondi','ex: /vújk/ → "vóulk"','#52be80')}
    </div>

    <!-- Consonnes slovènes spécifiques -->
    <div style="font-size:11px;font-weight:700;color:#8e44ad;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Consonnes slovènes spécifiques</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ʃ','CH','Comme "ch" dans "chat" — sifflant retroflexe','ex: /déš/ (dež) → "dèch"','#8e44ad')}
      ${phoneticRow('ʒ','J','Comme "j" dans "je" — voisant de ʃ','ex: /méʒ/ (mož) → "mèje"','#8e44ad')}
      ${phoneticRow('tʃ','TCH','Comme "tch" dans "tchèque"','ex: /tʃáːj/ (čaj) → "tchái"','#8e44ad')}
      ${phoneticRow('ts','TS','Comme "ts" dans "tsigane" — jamais "s" !','ex: /tsvét/ (cvet) → "tsvét"','#8e44ad')}
      ${phoneticRow('ʒʒ','DJ / DŽ','Affriquée sonore —介于 "j" et "dch"','ex: /družína/ → "droujína"','#8e44ad')}
      ${phoneticRow('ɾ','R roulé','R roulé/alvéolaire comme en espagnol ou italien','ex: /réka/ → "réka" (roulé)','#8e44ad')}
      ${phoneticRow('ʋ','V / W','Consonne labio-dentale — entre "v" et "ou" français','ex: /véter/ → "vétèu"','#8e44ad')}
      ${phoneticRow('j','Y consonne','Comme "y" dans "yeux" — semi-voyelle','ex: /jútri/ → "yóutri"','#8e44ad')}
      ${phoneticRow('x','KH','Comme la "jota" espagnole ou "kh" arabe','ex: /krúx/ (kruh) → "kroukh"','#8e44ad')}
      ${phoneticRow('ʎ','LY','L mouillé — langue contre la voûte palatine','ex: /čévʎi/ → "tchév-li"','#8e44ad')}
      ${phoneticRow('g','G dur','Toujours "g" dur comme "garçon" — jamais "j"','ex: /snég/ → "snèg" dur','#8e44ad')}
    </div>

    <!-- Accents & intonation -->
    <div style="font-size:11px;font-weight:700;color:#f1c40f;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Accentuation & intonation</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ˈ','Accent tonique','La syllabe suivante porte l\'accent principal — très important en slovène !','ex: /ˈsló-ʋɛn-ʃkɔ/','#f1c40f')}
      ${phoneticRow('á','Accent sur voyelle','L\'accent tombe sur la voyelle marquée — allègement du reste','ex: /máma/ → MA-ma','#f1c40f')}
      ${phoneticRow('´','Ton montant','Le ton monte sur la voyelle accentuée','ex: /píːti/ (ton montant)','#f1c40f')}
      ${phoneticRow('`','Ton descendant','Le ton descend sur la voyelle accentuée','ex: /písati/ (ton descendant)','#f1c40f')}
    </div>

    <!-- Astuce -->
    <div style="background:rgba(82,190,128,.09);border:1px solid rgba(82,190,128,.25);border-radius:10px;padding:10px 12px">
      <div style="font-size:12px;font-weight:700;color:#52be80;margin-bottom:5px">💡 Astuce clé pour le slovène</div>
      <div style="font-size:11.5px;color:#a8c8d8;line-height:1.6">Le slovène a <b style="color:#f0f4f8">deux systèmes de sons</b> que le français n'a pas :<br>
        • <span style="font-family:'Courier New',monospace;color:#1abc9c">c</span> se prononce <span style="font-family:'Courier New',monospace;color:#1abc9c">/ts/</span> (jamais /s/) : <em>cvet</em> → /tsvét/<br>
        • <span style="font-family:'Courier New',monospace;color:#1abc9c">č</span> se prononce <span style="font-family:'Courier New',monospace;color:#1abc9c">/tʃ/</span> comme "tch" : <em>čaj</em> → /<span style="color:#1abc9c">tʃ</span>áj/<br>
        • <span style="font-family:'Courier New',monospace;color:#1abc9c">š</span> se prononce <span style="font-family:'Courier New',monospace;color:#1abc9c">/ʃ/</span> comme "ch" : <em>šola</em> → /<span style="color:#1abc9c">ʃ</span>óla/<br>
        • <span style="font-family:'Courier New',monospace;color:#1abc9c">ž</span> se prononce <span style="font-family:'Courier New',monospace;color:#1abc9c">/ʒ/</span> comme "j" : <em>dež</em> → /dé<span style="color:#1abc9c">ʃ</span>/ (avec h aspiré)</div>
    </div>
  </div>
</div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target===modal) closePhoneticModal(); });
}

function phoneticRow(symbol, name, desc, example, color) {
  return `<div style="display:flex;align-items:flex-start;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:9px 11px">
    <div style="flex-shrink:0;width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.06);border:1.5px solid ${color}44;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:18px;font-weight:700;color:${color}">${symbol}</div>
    <div style="min-width:0">
      <div style="font-size:13px;font-weight:700;color:#f0f4f8">${name}</div>
      <div style="font-size:11px;color:#8aaabb;line-height:1.4;margin-top:2px">${desc}</div>
      <div style="font-size:10.5px;color:#5d8aa8;font-family:'Courier New',monospace;margin-top:3px">${example}</div>
    </div>
  </div>`;
}

function closePhoneticModal() {
  const m = document.getElementById('phoneticModal');
  if(m) { m.style.animation='none'; m.style.opacity=0; m.style.transition='opacity .15s'; setTimeout(()=>m.remove(),150); }
}

function showPhoneticHelp() { showPhoneticModal(); }

// ── FLOCONS DE NEIGE ─────────────────────────────────────────────
(function(){
  const c=document.getElementById('snowflakes');
  const flakes=['❄','❅','❆','·','*','•'];
  for(let i=0;i<30;i++){
    const p=document.createElement('div');p.className='snowflake';
    const sz=8+Math.random()*14,left=Math.random()*100,delay=Math.random()*16,dur=10+Math.random()*14;
    p.textContent=flakes[Math.floor(Math.random()*flakes.length)];
    p.style.cssText=`left:${left}%;font-size:${sz}px;animation-duration:${dur}s;animation-delay:${delay}s;opacity:0`;
    c.appendChild(p);
  }
})();

updateMenuStats();
updateDefiMenuCard();

// ── PAYSAGE FIXE ─────────────────────────────────────────────────
(function(){
  var menuL=document.querySelector('#menuScreen .menu-landscape');
  if(!menuL)return;
  // Clone pour le mettre en arrière-plan en bas, toujours visible
  var fixed=document.createElement('div');
  fixed.id='fixedLandscape';
  // Le SVG a un viewBox de 500x220 — on couvre toute la hauteur en arrière-plan
  fixed.style.cssText='position:fixed;top:0;bottom:0;left:0;right:0;max-width:500px;margin:0 auto;z-index:0;pointer-events:none;background:transparent';
  fixed.innerHTML=menuL.innerHTML;
  // Sur le clone fixed, on rend le fond de ciel TRANSPARENT pour garder montagnes/lac
  var skyStop=fixed.querySelector('#lSky stop[offset="100%"]');
  if(skyStop){skyStop.setAttribute('stop-color','transparent');skyStop.setAttribute('stop-opacity','0');}
  // On rend les rect de fond du SVG transparents aussi
  var bgRect=fixed.querySelector('rect[fill="url(#lSky)"]');
  if(bgRect)bgRect.setAttribute('fill','transparent');

  document.body.appendChild(fixed);
  // Rendre le menu-landscape original invisible et sans hauteur
  menuL.style.display='none';
  // Sur desktop, élargir
  if(window.innerWidth>=520){fixed.style.maxWidth='none';}
  window.addEventListener('resize',function(){
    if(window.innerWidth>=520){fixed.style.maxWidth='none';}
    else{fixed.style.maxWidth='500px';}
  });
  // Remonter .game pour qu'il soit au-dessus du paysage (z-index plus haut)
  var gameEl=document.querySelector('.game');
  if(gameEl)gameEl.style.position='relative';
})();

// PWA Service Worker (désactivé en mode fichier local)
// navigator.serviceWorker non disponible sans serveur HTTP

// ══════════════════════════════════════════════════════════
// TRADUCTEUR FR ↔ SL
// ══════════════════════════════════════════════════════════

var _tradLang = 'fr2sl'; // direction courante
var _tradRecog = null;   // instance SpeechRecognition
var _tradRecording = false;

// Suggestions selon la direction
var _tradSuggestions = {
  fr2sl: ['Bonjour !','Comment allez-vous ?','Je ne comprends pas.','Où est la gare ?','Combien ça coûte ?','Merci beaucoup !'],
  sl2fr: ['Dober dan!','Kako si?','Ne razumem.','Kje je postaja?','Koliko stane?','Hvala lepa!']
};

function showTranslator(){
  showScreen('translatorScreen');
  _renderTradSuggestions();
}

function _renderTradSuggestions(){
  var el = document.getElementById('tradSuggestions');
  if(!el) return;
  var suggs = _tradSuggestions[_tradLang] || [];
  el.innerHTML = suggs.map(function(s){
    return '<button class="trad-action-btn" style="font-size:11px" onclick="useTradSuggestion(\''+s.replace(/'/g,"\\'")+'\')">' + s + '</button>';
  }).join('');
}

function useTradSuggestion(txt){
  document.getElementById('tradInput').value = txt;
  onTradInput();
  doTranslate();
}

function swapTradLang(){
  // Inverser la direction
  _tradLang = _tradLang === 'fr2sl' ? 'sl2fr' : 'fr2sl';
  var isFr2sl = _tradLang === 'fr2sl';
  document.getElementById('tradSrcLabel').textContent  = isFr2sl ? '🇫🇷 Français' : '🇸🇮 Slovène';
  document.getElementById('tradDstLabel').textContent  = isFr2sl ? '🇸🇮 Slovène'  : '🇫🇷 Français';
  // Remettre le résultat dans l'input si on a déjà traduit
  var res = document.getElementById('tradResult').textContent;
  var inp = document.getElementById('tradInput').value;
  if(res){
    document.getElementById('tradInput').value = res;
    _clearTradResult();
  }
  onTradInput();
  _renderTradSuggestions();
}

function onTradInput(){
  var val = document.getElementById('tradInput').value.trim();
  document.getElementById('tradBtn').disabled = !val;
}

function clearTradInput(){
  document.getElementById('tradInput').value = '';
  _clearTradResult();
  document.getElementById('tradBtn').disabled = true;
}

function _clearTradResult(){
  document.getElementById('tradResult').style.display = 'none';
  document.getElementById('tradResult').textContent = '';
  document.getElementById('tradResultHint').style.display = 'none';
  document.getElementById('tradResultHint').textContent = '';
  document.getElementById('tradResultActions').style.display = 'none';
  document.getElementById('tradPlaceholder').style.display = 'block';
}

async function doTranslate(){
  var text = document.getElementById('tradInput').value.trim();
  if(!text) return;

  var isFr2sl = _tradLang === 'fr2sl';
  var srcLang  = isFr2sl ? 'fr' : 'sl';
  var dstLang  = isFr2sl ? 'sl' : 'fr';

  // UI loading
  var btn = document.getElementById('tradBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner" style="width:14px;height:14px;border-width:2px"></span><span>Traduction…</span>';
  document.getElementById('tradPlaceholder').textContent = '⏳ Traduction en cours…';
  _clearTradResult();
  document.getElementById('tradPlaceholder').style.display = 'block';
  document.getElementById('tradPlaceholder').textContent = '⏳ Traduction en cours…';

  try {
    // Google Translate API gratuite (pas de clé requise)
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl='
      + srcLang + '&tl=' + dstLang + '&dt=t&dt=rm&q=' + encodeURIComponent(text);

    var resp = await fetch(url);
    if(!resp.ok) throw new Error('HTTP ' + resp.status);
    var data = await resp.json();

    // Parser la réponse Google Translate
    var translated = '';
    var romanized  = '';
    if(data[0]) {
      data[0].forEach(function(chunk){ if(chunk[0]) translated += chunk[0]; });
    }
    // Romanisation (translittération) — présente dans data[0][i][3] ou data[1]
    if(data[0]) {
      data[0].forEach(function(chunk){ if(chunk[3]) romanized += chunk[3]; });
    }

    // Afficher
    document.getElementById('tradPlaceholder').style.display = 'none';
    document.getElementById('tradResult').textContent = translated;
    document.getElementById('tradResult').style.display = 'block';
    if(romanized && romanized !== translated){
      document.getElementById('tradResultHint').textContent = '/' + romanized + '/';
      document.getElementById('tradResultHint').style.display = 'block';
    }
    document.getElementById('tradResultActions').style.display = 'flex';

    // Auto-prononcer le résultat si c'est du slovène
    if(dstLang === 'sl') setTimeout(function(){ speak(translated); }, 300);

  } catch(e) {
    document.getElementById('tradPlaceholder').style.display = 'block';
    document.getElementById('tradPlaceholder').textContent = '⚠️ Erreur de traduction. Vérifiez votre connexion.';
    console.error('Translate error:', e);
  }

  btn.disabled = false;
  btn.innerHTML = '<span>🌐</span><span>Traduire</span>';
}

function speakTrad(which){
  var isFr2sl = _tradLang === 'fr2sl';
  if(which === 'input'){
    var txt = document.getElementById('tradInput').value.trim();
    if(!txt) return;
    var lang = isFr2sl ? 'fr' : 'sl';
    if(lang === 'sl') speak(txt);
    else _speakFr(txt);
  } else {
    var out = document.getElementById('tradResult').textContent;
    if(!out) return;
    var outLang = isFr2sl ? 'sl' : 'fr';
    if(outLang === 'sl') speak(out);
    else _speakFr(out);
  }
}

function _speakFr(txt){
  if(!window.speechSynthesis) return;
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(txt);
  u.lang = 'fr-FR';
  u.rate = 0.9;
  var voices = speechSynthesis.getVoices();
  var frVoice = voices.find(function(v){ return v.lang && v.lang.startsWith('fr'); });
  if(frVoice) u.voice = frVoice;
  speechSynthesis.speak(u);
}

function copyTradResult(){
  var txt = document.getElementById('tradResult').textContent;
  if(!txt) return;
  if(navigator.clipboard){
    navigator.clipboard.writeText(txt).then(function(){
      var btn = event.target;
      var orig = btn.textContent;
      btn.textContent = '✓ Copié !';
      setTimeout(function(){ btn.textContent = orig; }, 1500);
    });
  } else {
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = txt; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ── DICTÉE VOCALE (SpeechRecognition) ────────────────────
function toggleTradMic(){
  if(_tradRecording){ _stopTradMic(); return; }
  _startTradMic();
}

function _startTradMic(){
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){
    alert('La reconnaissance vocale n\'est pas disponible sur ce navigateur. Utilisez Chrome ou Edge.');
    return;
  }
  var isFr2sl = _tradLang === 'fr2sl';
  _tradRecog = new SR();
  _tradRecog.lang = isFr2sl ? 'fr-FR' : 'sl-SI';
  _tradRecog.continuous = false;
  _tradRecog.interimResults = true;

  var btn = document.getElementById('tradMicBtn');
  btn.classList.add('recording');
  btn.textContent = '⏹ Arrêter';
  _tradRecording = true;

  _tradRecog.onresult = function(e){
    var transcript = '';
    for(var i = e.resultIndex; i < e.results.length; i++){
      transcript += e.results[i][0].transcript;
    }
    document.getElementById('tradInput').value = transcript;
    onTradInput();
  };

  _tradRecog.onend = function(){
    _stopTradMic();
    // Auto-traduire après dictée
    var val = document.getElementById('tradInput').value.trim();
    if(val) doTranslate();
  };

  _tradRecog.onerror = function(e){
    console.error('Speech error:', e.error);
    _stopTradMic();
  };

  _tradRecog.start();
}

function _stopTradMic(){
  if(_tradRecog){ try{ _tradRecog.stop(); }catch(e){} _tradRecog = null; }
  _tradRecording = false;
  var btn = document.getElementById('tradMicBtn');
  if(btn){ btn.classList.remove('recording'); btn.textContent = '🎤 Dicter'; }
}

// ══════════════════════════════════════════════════════════
// MODE APPRENDRE — Exploration par catégorie
// ══════════════════════════════════════════════════════════

let _learnCat = '';
let _learnDir = 'sl'; // 'sl' = slovène affiché, clic → FR ; 'fr' = français affiché, clic → SL
let _learnRevealTimer = null;

// Icônes par mot (extraits de la champ `a` qui contient déjà l'emoji)
function _learnGetEmoji(item) {
  // Le champ `a` commence souvent par un emoji, ex: "🌊 rivière"
  const match = item.a.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u);
  return match ? match[0] : '📖';
}

function _learnGetFrText(item) {
  // Retire l'emoji du début de `a`
  return item.a.replace(/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2700}-\u{27BF}][\uFE0F]?\s*/u, '').trim();
}

function startLearn(cat) {
  _learnCat = cat || _pendingCat;
  const catEmojis = {'Nature':'🌿','Animaux':'🐾','Temps':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️','Verbes':'🔤'};
  const emoji = catEmojis[_learnCat] || '📂';
  document.getElementById('learnCatTitle').textContent = emoji + ' ' + _learnCat;
  showScreen('learnDirScreen');
}

function startLearnMode(dir) {
  _learnDir = dir;
  _renderLearnScreen();
  showScreen('learnScreen');
}

function _renderLearnScreen() {
  const catEmojis = {'Nature':'🌿','Animaux':'🐾','Temps':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️','Verbes':'🔤'};
  const items = VOCAB.filter(v => v.cat === _learnCat);
  const emoji = catEmojis[_learnCat] || '📂';
  const dir = _learnDir;

  document.getElementById('learnScreenTitle').textContent = emoji + ' ' + _learnCat;
  document.getElementById('learnDirLabel').textContent = dir === 'sl'
    ? '🇸🇮 Slovène → clique pour voir en français'
    : '🇫🇷 Français → clique pour voir en slovène';

  const grid = document.getElementById('learnGrid');
  grid.innerHTML = '';

  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'learn-card';
    card.dataset.idx = idx;

    const emojiChar = _learnGetEmoji(item);
    const frText = _learnGetFrText(item);
    const slText = item.q;

    if (dir === 'sl') {
      // Affiche le mot slovène, clic révèle le français
      card.innerHTML = `
        <div class="learn-card-emoji">${emojiChar}</div>
        <div class="learn-card-main">${slText}</div>
        <div class="learn-card-reveal" style="opacity:0;transition:opacity .2s">${frText}</div>
        <button class="learn-speak-btn" onclick="event.stopPropagation();speak('${slText.replace(/'/g,"\\'")}')">🔊</button>
      `;
    } else {
      // Affiche le français, clic révèle le slovène
      card.innerHTML = `
        <div class="learn-card-emoji">${emojiChar}</div>
        <div class="learn-card-main">${frText}</div>
        <div class="learn-card-reveal" style="opacity:0;transition:opacity .2s">${slText}</div>
        <button class="learn-speak-btn" onclick="event.stopPropagation();speak('${slText.replace(/'/g,"\\'")}')">🔊</button>
      `;
    }

    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('learn-speak-btn')) return;
      _learnRevealWord(card, dir, slText);
    });

    grid.appendChild(card);
  });
}

function _learnRevealWord(card, dir, slText) {
  const reveal = card.querySelector('.learn-card-reveal');
  if (!reveal) return;

  // Jouer le son slovène au clic
  speak(slText);

  // Afficher la traduction
  reveal.style.opacity = '1';
  card.classList.add('learn-card-revealed');

  // Masquer après 2 secondes
  clearTimeout(_learnRevealTimer);
  setTimeout(function() {
    reveal.style.opacity = '0';
    card.classList.remove('learn-card-revealed');
  }, 2000);
}

