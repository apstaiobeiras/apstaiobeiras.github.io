

const rotas = {
    fluxo: {
        "recepcao.html": [
            "solicitacoes.html",
            "agendados.html",
        ],
        "acs.html": [
            "relatorio-producao-acs.html",
            "relatorio-cadastros-invalidos.html",
            "relatorio-lista-prontuario.html",
            "relatorio-visitas-por-dia-por-familia.html",
        ],
    },
    acesso_indireto: {
        "lista-acs.html": "acs.html",
        "lista-recepcionistas.html": "recepcao.html",
        "lista-enfermeiros.html": "enfermeiro_esf.html",
        "enfermeiro_esf.html": "acs.html",
    }
}

function backlink() {
    let cod            = (new URLSearchParams(window.location.search)).get('cod');
    let token          = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode           = (new URLSearchParams(window.location.search)).get('mode') || 'r1';
    let unidade        = (new URLSearchParams(window.location.search)).get('unidade');
    let home_link      = (new URLSearchParams(window.location.search)).get('home_link');
    let fake_home_link = (new URLSearchParams(window.location.search)).get('fake_home_link');
    let old_cod        = (new URLSearchParams(window.location.search)).get('old_cod');
    let backlink       = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");
    let pagina_atual   = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");

    if (Object.keys(rotas.fluxo).includes(home_link)) {
        if (rotas.fluxo[home_link].includes(pagina_atual)) {
            window.location.href = `${home_link}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
            return;
        }
        if (home_link == pagina_atual) {
            window.location.href = `index.html`;
            return;
        }
        window.location.href = "404.html"
        return;
    }

    if (Object.keys(rotas.fluxo).includes(home_link)) {
        if (rotas.fluxo[home_link].includes(fake_home_link)) {
            window.location.href = `${fake_home_link}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
            return;
        }
        if (fake_home_link == pagina_atual) {
            window.location.href = `${home_link}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
            return;
        }
        window.location.href = "404.html"
        return;
    }

    if (rotas.acesso_indireto[home_link]) {
        if (rotas.acesso_indireto[home_link] == pagina_atual) {
            window.location.href = `${home_link}?cod=${old_cod}&token=${token}&backlink=${home_link}`;
            return;
        }
        window.location.href = `${rotas.acesso_indireto[home_link]}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
        return;
    }

    if (home_link == "null" && (backlink == "enfermeiro_esf.html" || backlink == "preceptoria.html")) {
        window.location.href = `lista-enfermeiros.html?cod=les&token=${token}`;
        return;
    }

    window.location.href = `${backlink}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
}

function gotoPage(page) {
    let cod       = (new URLSearchParams(window.location.search)).get('cod');
    let token     = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode      = (new URLSearchParams(window.location.search)).get('mode') || 'r1';
    let unidade   = (new URLSearchParams(window.location.search)).get('unidade');
    let home_link = (new URLSearchParams(window.location.search)).get('home_link');
    let old_cod   = (new URLSearchParams(window.location.search)).get('old_cod');
    let backlink  = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");

    window.location.href = `${page}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
}

function backToHome(link) {
    onclick = "window.location.href = 'acs.html?cod='+(new URLSearchParams(window.location.search)).get('cod')+'&token='+(new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)";

    let cod       = (new URLSearchParams(window.location.search)).get('cod');
    let token     = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode      = (new URLSearchParams(window.location.search)).get('mode')
    let unidade   = (new URLSearchParams(window.location.search)).get('unidade');
    let home_link = (new URLSearchParams(window.location.search)).get('home_link');
    let old_cod   = (new URLSearchParams(window.location.search)).get('old_cod');
    let backlink  = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");


    if (link == "index.html" && (home_link != "null" || home_link != null)) {
        home_link = home_link == "null"?"index.html":home_link;

        window.location.href = `${home_link}?cod=${old_cod}&token=${token}&mode=${mode}`;
        return;
    }

    window.location.href = `${link}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}&home_link=${home_link}&old_cod=${old_cod}`;
}

function bypassCPF(page,new_cod,unidade){
    let cod       = (new URLSearchParams(window.location.search)).get('cod');
    let token     = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode      = (new URLSearchParams(window.location.search)).get('mode');

    let backlink  = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");

    let enc_cod = new_cod.toString(36);

    window.location.href = `${page}?cod=${enc_cod}&token=${token}&mode=${mode}&backlink=${backlink}&home_link=${backlink}&old_cod=${cod}&unidade=${unidade}`;
}