// ══════════════════════════════════════════════════════════
// DONNÉES D'AUDIO — SLOVÈNE
// Utilise Google Translate TTS (tl=sl)
// ══════════════════════════════════════════════════════════

window._AUDIO_DATA_VOCAB = {};

// ── Construction automatique des URL Google TTS ──────────
(function() {
  const _g = 'https://translate.googleapis.com/translate_tts?ie=UTF-8&q=';
  const _t = '&tl=sl&client=gtx&ttsspeed=0.85';
  const words = [
    // Nature
    'gora','reka','jezero','gozd','cvet','drevo','trava','pesek','led','dež','veter','oblak','nevihta','sonce','luna','zvezda','morje','potok','dolina','skala',
    // Animaux
    'pes','mačka','konj','krava','ptica','riba','zajec','sova','medved','volk','lisica','jeleň','miš','kača','metulj',
    // Temps / Calendrier
    'vedno','nikoli','včasih','ponedeljek','torek','sreda','četrtek','petek','sobota','nedelja','danes','jutri','včeraj','dopoldne','popoldne','zvečer','ponoči',
    // Nourriture
    'kruh','sir','jajce','piščanec','krompir','paradižnik','kumara','jabolko','banana','jagoda','kava','čaj','sok','sladoled','torta','čokolada','juha','meso','ribe','zelenjava','sadje','kruh','maslo','mleko','voda','vino','pivo',
    // Famille
    'sestra','brat','dedek','babica','oče','mati','stric','teta','bratranec','dojenček','družina','sin','hči','mož','žena',
    // Lieux & transport
    'bolnišnica','lekarna','knjižnica','restavracija','hotel','letališče','pristanišče','cerkev','park','trg','avtobus','vlak','avto','kolo','čoln','cesta','most','šola','trgovina','tržnica',
    // Couleurs
    'rdeča','modra','zelena','rumena','črna','bela','oranžna','roza','vijolična','rjava','siva',
    // Chiffres
    'ena','dve','tri','štiri','pet','šest','sedem','osem','devet','deset','enajst','dvanajst','dvajset','trideset','sto','tisoč',
    // Émotions
    'žalosten','jezen','prestrašen','presenečen','lačen','žejen','bolan','zdrav','stresen','zadovoljen','srečen','utrujen','samoten','ponosen','živčen',
    // Vêtements
    'jopica','majica','hlače','krilo','čevlji','kapa','rokavice','površina','nogavice','plašč',
    // Expressions
    'Dober večer','Seveda','Hvala lepa','Prosim','Oprostite','Na svidenje','Dobro jutro','Lahko noč',
  ];
  window._AUDIO_DATA_VOCAB = {};
  words.forEach(function(w) {
    window._AUDIO_DATA_VOCAB[w] = _g + encodeURIComponent(w) + _t;
  });
})();
