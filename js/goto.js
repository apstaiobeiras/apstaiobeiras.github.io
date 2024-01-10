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