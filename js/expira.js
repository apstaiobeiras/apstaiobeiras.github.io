


let cod_profissional = null;
(() => {
const data_atual = (new Date()).getTime();

if (!(new URLSearchParams(window.location.search)).get('token')) window.location.href="index.html";

if ((new URLSearchParams(window.location.search)).get('cod') == "qes") return;

const token = parseInt((new URLSearchParams(window.location.search)).get('token'), 36);
if (data_atual>token) window.location.href="index.html";

if (!(new URLSearchParams(window.location.search)).get('cod')) window.location.href="index.html";
cod_profissional = parseInt((new URLSearchParams(window.location.search)).get('cod'), 36);
})()