(function(){
  'use strict';
  // small helper: safe call that returns true if alert worked
  function tryAlert(msg, timeoutMs) {
    timeoutMs = timeoutMs || 300;
    try {
      // Some browsers may block alert() inside certain frames; wrap in try/catch
      // We'll attempt to show it and detect if it blocks by using a timer.
      var fired = false;
      var t = setTimeout(function(){ fired = true; }, timeoutMs);
      // attempt alert — if blocked in sandbox, this throws or does not run as expected
      try { alert(msg); } catch (e) { clearTimeout(t); return false; }
      clearTimeout(t);
      // if we reached here, assume alert ran (user closed it)
      return true;
    } catch (e) {
      return false;
    }
  }

  // Fallback toast (non-blocking) to display a short domain label
  function showToast(text) {
    try {
      var d = document.createElement('div');
      d.textContent = text;
      d.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:2147483647;background:rgba(0,0,0,0.86);color:#fff;padding:8px 12px;border-radius:8px;font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:13px;box-shadow:0 6px 24px rgba(0,0,0,0.4);pointer-events:none';
      document.documentElement.appendChild(d);
      setTimeout(function(){ try{ d.remove(); }catch(e){} }, 8000);
    } catch(e){}
  }

  // Minimal confetti from your original (keeps behavior small)
  function runConfettiAndMessage() {
    try {
      var s=document.createElement('style');
      s.textContent='.c{position:fixed;top:-10vh;pointer-events:none;animation:fall 9s linear forwards;will-change:transform,opacity}@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}' +
                    '.msg{position:fixed;left:50%;top:50%;transform:translate(-50%,-60%);font-family:monospace,Segoe UI,Arial;color:#fff;background:rgba(0,0,0,0.72);padding:14px 20px;border-radius:10px;font-size:22px;z-index:2147483650;opacity:0;pointer-events:none}';
      document.head.appendChild(s);

      var w=document.createElement('div');
      w.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden;z-index:2147483647;pointer-events:none';
      document.body.appendChild(w);

      var cols=['#c8102e','white','#3350ec'];
      for(var i=0;i<220;i++){
        var e=document.createElement('div');
        e.className='c';
        e.style.left=(50+(Math.random()-0.5)*100)+'vw';
        e.style.top=(Math.random()-0.2)*10+'vh';
        e.style.width=(3+Math.random()*7)+'px';
        e.style.height=(10+Math.random()*18)+'px';
        e.style.background=cols[Math.floor(Math.random()*cols.length)];
        e.style.borderRadius=(Math.random()*60)+'%';
        e.style.animationDelay=(Math.random()*1.5)+'s';
        e.style.transform='rotate('+Math.floor(Math.random()*360)+'deg)';
        w.appendChild(e);
      }

      var m=document.createElement('div');
      m.className='msg';
      m.textContent='Education matters — just hack ethically';
      document.body.appendChild(m);

      setTimeout(function(){ m.style.transition='opacity .9s ease, transform .9s ease'; m.style.opacity=1; m.style.transform='translate(-50%,-50%)'; },700);
      setTimeout(function(){ try{ w.remove(); m.remove(); }catch(e){} }, 12000);
    } catch(e){}
  }

  // main run
  try {
    var domain = (typeof document.domain !== 'undefined' && document.domain) ? document.domain : (location && location.hostname ? location.hostname : 'unknown');

    // Try alert; if it fails, use toast
    var alerted = false;
    try {
      alerted = tryAlert(domain, 350);
    } catch(e){ alerted = false; }

    if (!alerted) {
      // console clue for debugging
      try { console.info('[conf.js] alert blocked or unsupported; showing toast fallback. domain=', domain); } catch(e){}
      showToast(domain);
    }

    // always run the confetti (so you'll have visual proof even if alert blocked)
    runConfettiAndMessage();

  } catch(e){
    try { console.error('[conf.js] error', e); } catch(e){}
  }
})();
