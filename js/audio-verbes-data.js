// ══════════════════════════════════════════════════════════
// DONNÉES D'AUDIO — SLOVÈNE (verbes & phrases)
// ══════════════════════════════════════════════════════════

window._AUDIO_DATA_VERBES = {};

(function() {
  const _g = 'https://translate.googleapis.com/translate_tts?ie=UTF-8&q=';
  const _t = '&tl=sl&client=gtx&ttsspeed=0.85';
  const words = [
    // Verbes
    'jesti','piti','spati','iti','teči','brati','pisati','govoriti','poslušati','gledati','delati','študirati','kupiti','prodati','pomagati','razumeti','vedeti','misliti','čutiti','ljubiti','imeti rad','hoteti','znati','morati','priti','oditi','ostati','odpreti','zapreti','dati','vzeti','najti','začeti','nehati','kuhati','peči','rezati','mešati','smejati se','plakati','smrdeti','vonjati','dotikati se','nositi','oblačiti se','sleči se','kopati se','česati se','umivati se',
  ];
  window._AUDIO_DATA_VERBES = {};
  words.forEach(function(w) {
    window._AUDIO_DATA_VERBES[w] = _g + encodeURIComponent(w) + _t;
  });
})();
