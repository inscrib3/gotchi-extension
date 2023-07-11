(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=c(t);fetch(t.href,i)}})();const d="https://ordiscan.com",o={keys:{gotchi:"gotchi",tab:"tab"},ordinals:{content:`${d}/content`,minting:`${d}/content/7b9cdb349d8a75152834437f6453b235d1884c188f4428d69db4b26fd3048ccbi0`},gotchi:{collection:`${d}/content/1a3dc6a44ea3d88a10e5761cc5fb612d85890cc3a40a5bb9faae0d404ed9b5f5i0`},previewer:"https://ordiscan.com/content/7b9cdb349d8a75152834437f6453b235d1884c188f4428d69db4b26fd3048ccbi0?q="},s=e=>{const r=localStorage.getItem(o.keys.gotchi);e.innerHTML=`<iframe height="550px" width="100%" src="${o.ordinals.content}/${r}" frameborder="0" />`},l=e=>{e.innerHTML=`<iframe height="550px" width="100%" src="${o.gotchi.collection}" frameborder="0" />`},m=e=>{e.innerHTML='<iframe height="550px" width="100%" src="inscrib3/index.html" frameborder="0" />'},b=e=>{const c=new URLSearchParams(window.location.search).get("tab");c&&localStorage.setItem(o.keys.tab,c);const n=(()=>{const t=localStorage.getItem(o.keys.tab);return parseInt(t||"0")})();e.innerHTML=`<div id=app>
<div id=tab></div>
<div id=tabs>
<a href="?tab=0" style="${n===0&&"text-decoration: underline"}">Gotchi</a>
<a href="?tab=1" style="${n===1&&"text-decoration: underline"}">Collection</a>
<a href="${o.ordinals.minting}" style="${n===2&&"text-decoration: underline"}" target=_blank>Minting</a>
<a href="?tab=3" style="${n===3&&"text-decoration: underline"}">Inscrib3</a>
<a href="?tab=4" style="color: blue; ${n===4&&"text-decoration: underline"}">N3XT</a>
</div>
</div>`,n===0&&s(document.getElementById("tab")),n===1&&l(document.getElementById("tab")),n===3&&m(document.getElementById("tab")),n===4&&(document.getElementById("tab").innerHTML='<div style="height: 550px; text-align: center"><img style="margin: 150px auto; height: 200px; display: inline-block; animation: shake 1s; animation-iteration-count: infinite;" src="egg.png" /></div>')},g=e=>{e.innerHTML=`<div id="container">
    <img src="logo.png" width="300" />
    <input type="text" id="gotchi" placeholder="Gotchi ID" />
    <button type="submit" id="submit">Play</button>
    <hr />
    <button type="button" id="mint">Mint</button>
    </div>`,document.getElementById("submit").onclick=()=>{const r=document.getElementById(o.keys.gotchi).value;localStorage.setItem(o.keys.gotchi,r),s(e)},document.getElementById("mint").onclick=()=>{window.open(o.ordinals.minting,"_blank")}},u=()=>{localStorage.getItem(o.keys.gotchi)?b(document.body):g(document.body)};u();
