(function(){
  'use strict';

  // tryAlert attempts to show an alert and returns true if it likely ran (not blocked)
  function tryAlert(msg, timeoutMs){
    timeoutMs = timeoutMs || 350;
    try {
      // Use a short timer to detect blocking; if alert blocks, the user must close it, so timer will expire before code continues.
      var fired = false;
      var t = setTimeout(function(){ fired = true; }, timeoutMs);
      try { alert(msg); } catch(e){ clearTimeout(t); return false; }
      clearTimeout(t);
      // If we reached here without throwing, assume alert was displayed and closed by the user
      return true;
    } catch(e){
      return false;
    }
  }

  // Non-blocking toast fallback (shows small label and auto-removes)
  function showToast(text, ttl){
    ttl = typeof ttl === 'number' ? ttl : 8000;
    try {
      var d = document.createElement('div');
      d.textContent = text;
      d.style.cssText = [
        'position:fixed',
        'right:12px',
        'bottom:12px',
        'z-index:2147483647',
        'background:rgba(0,0,0,0.86)',
        'color:#fff',
        'padding:8px 12px',
        'border-radius:8px',
        'font-family:system-ui,Segoe UI,Arial,sans-serif',
        'font-size:13px',
        'box-shadow:0 6px 24px rgba(0,0,0,0.4)',
        'pointer-events:none',
        'opacity:0',
        'transition:opacity .22s'
      ].join(';');
      document.documentElement.appendChild(d);
      // fade in
      requestAnimationFrame(function(){ d.style.opacity = 1; });
      setTimeout(function(){
        try { d.style.opacity = 0; setTimeout(function(){ try{ d.remove(); }catch(e){} }, 240); } catch(e){}
      }, ttl);
    } catch(e){}
  }

  // Confetti + centered message (keeps your original feel)
  function runConfettiAndMessage(){
    try {
      var s = document.createElement('style');
      s.textContent = '.c{position:fixed;top:-10vh;pointer-events:none;animation:fall 9s linear forwards;will-change:transform,opacity}@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}' +
                      '.msg{position:fixed;left:50%;top:50%;transform:translate(-50%,-60%);font-family:monospace,Segoe UI,Arial;color:#fff;background:rgba(0,0,0,0.72);padding:14px 20px;border-radius:10px;font-size:22px;z-index:2147483650;opacity:0;pointer-events:none}';
      document.head.appendChild(s);

      var w = document.createElement('div');
      w.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden;z-index:2147483647;pointer-events:none';
      document.body.appendChild(w);

      var cols = ['#c8102e','white','#3350ec']; // NL colors
      for (var i = 0; i < 220; i++){
        var e = document.createElement('div');
        e.className = 'c';
        e.style.left = (50 + (Math.random() - 0.5) * 100) + 'vw';
        e.style.top = (Math.random() - 0.2) * 10 + 'vh';
        e.style.width = (3 + Math.random() * 7) + 'px';
        e.style.height = (10 + Math.random() * 18) + 'px';
        e.style.background = cols[Math.floor(Math.random() * cols.length)];
        e.style.borderRadius = (Math.random() * 60) + '%';
        e.style.animationDelay = (Math.random() * 1.5) + 's';
        e.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
        w.appendChild(e);
      }

      var m = document.createElement('div');
      m.className = 'msg';
      m.textContent = 'Education matters — just hack ethically';
      document.body.appendChild(m);

      setTimeout(function(){ m.style.transition = 'opacity .9s ease, transform .9s ease'; m.style.opacity = 1; m.style.transform = 'translate(-50%,-50%)'; }, 700);
      setTimeout(function(){ try{ w.remove(); m.remove(); }catch(e){} }, 12000);
    } catch(e){}
  }

  // main
  try {
    // Decide what to alert: cookie if poc_cookie=1 present in URL, otherwise domain
    var query = (location && location.search) ? location.search : '';
    var wantCookie = /\bpoc_cookie=1\b/.test(query); // developer toggle
    var subject = wantCookie ? (typeof document.cookie !== 'undefined' ? document.cookie : '(no-cookie)') : (typeof document.domain !== 'undefined' && document.domain ? document.domain : (location && location.hostname ? location.hostname : 'unknown'));

    // log for triage
    try { console.info('[confetti_nl.js] PoC run; subject=', subject, 'poc_cookie=', wantCookie, 'ts=', new Date().toISOString()); } catch(e){}

    // attempt alert first (dev). If alert blocked, fallback to toast
    var alerted = tryAlert(subject, 350);
    if (!alerted) {
      // fallback: show toast and keep console evidence
      showToast(subject + ' (PoC)');
      try { console.info('[confetti_nl.js] alert blocked; showed toast as fallback.'); } catch(e){}
    } else {
      try { console.info('[confetti_nl.js] alert shown (user dismissed).'); } catch(e){}
    }

    // always show the confetti visual proof
    runConfettiAndMessage();

  } catch(err){
    try { console.error('[confetti_nl.js] runtime error', err); } catch(e){}
  }
})();
