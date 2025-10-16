(function () {
  try {
    var css = '.pp{position:fixed;left:0;top:0;right:0;bottom:0;pointer-events:none;overflow:hidden;background:rgba(0,0,0,.6);z-index:2147483647}' +
              '.pp .paddle{position:absolute;width:12px;height:80px;background:#0ff;border-radius:6px;top:50%;transform:translateY(-50%)}' +
              '.pp .paddle.left{left:8px}.pp .paddle.right{right:8px}' +
              '.pp .ball{position:absolute;width:18px;height:18px;border-radius:50%;background:#ff0;left:50%;top:50%;transform:translate(-50%,-50%)}' +
              '.pp .score{position:fixed;left:50%;top:6px;transform:translateX(-50%);font-family:monospace;color:#0f0;background:rgba(0,0,0,.6);padding:6px 10px;border-radius:6px;z-index:2147483648}';
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);

    var wrap = document.createElement('div'); wrap.className = 'pp';
    var left = document.createElement('div'); left.className = 'paddle left';
    var right = document.createElement('div'); right.className = 'paddle right';
    var ball = document.createElement('div'); ball.className = 'ball';
    var score = document.createElement('div'); score.className = 'score'; score.textContent = '0 : 0';
    wrap.appendChild(left); wrap.appendChild(right); wrap.appendChild(ball);
    document.body.appendChild(wrap); document.body.appendChild(score);

    var W = innerWidth, H = innerHeight;
    var b = { x: W/2, y: H/2, vx: (Math.random()>0.5?1:-1)*4, vy: (Math.random()*2-1)*3, r: 9 };
    var p = { h: 80, rw: innerWidth - 8 - 12 };
    var sc = [0,0];
    function clamp(n,a,b){ return Math.max(a, Math.min(b, n)); }
    addEventListener('resize', function(){ W=innerWidth; H=innerHeight; p.rw = W - 8 - 12; });

    function resetBall(who){
      b.x=W/2; b.y=H/2; b.vx=(who===0?1:-1)*4; b.vy=(Math.random()*2-1)*3;
      ball.style.transition='transform .08s'; ball.style.transform='scale(1.6)';
      setTimeout(function(){ ball.style.transform='scale(1)'; ball.style.transition=''; },120);
    }

    (function render(){
      b.x += b.vx; b.y += b.vy;
      if (b.y - b.r < 0) { b.y = b.r; b.vy = -b.vy; }
      if (b.y + b.r > H) { b.y = H - b.r; b.vy = -b.vy; }

      var leftY  = clamp((b.y - p.h/2) + (Math.random()-.5)*30, 10, H - p.h - 10);
      var rightY = clamp((b.y - p.h/2) + (Math.random()-.5)*30, 10, H - p.h - 10);
      left.style.top  = leftY + 'px';
      right.style.top = rightY + 'px';

      var leftX = 8 + 12;
      if (b.x - b.r < leftX){
        if (b.y > leftY && b.y < leftY + p.h){
          b.x = leftX + b.r; b.vx = -b.vx; b.vx *= 1.03; b.vy += ((b.y-(leftY+p.h/2))/(p.h/2))*2;
        } else { sc[1]++; resetBall(1); }
      }
      var rightX = p.rw;
      if (b.x + b.r > rightX){
        if (b.y > rightY && b.y < rightY + p.h){
          b.x = rightX - b.r; b.vx = -b.vx; b.vx *= 1.03; b.vy += ((b.y-(rightY+p.h/2))/(p.h/2))*2;
        } else { sc[0]++; resetBall(0); }
      }

      ball.style.left = (b.x - b.r) + 'px';
      ball.style.top  = (b.y - b.r) + 'px';
      score.textContent = sc[0] + ' : ' + sc[1];
      requestAnimationFrame(render);
    })();
  } catch(e){}
})();
