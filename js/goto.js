function gotoPage(page) {
    let cod      = (new URLSearchParams(window.location.search)).get('cod');
    let token    = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode     = (new URLSearchParams(window.location.search)).get('mode');
    let unidade  = (new URLSearchParams(window.location.search)).get('unidade');
    let backlink = window.location.href.replace(/^.*\//,"").replace(/\?.*/,"");

    window.location.href = `${page}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&backlink=${backlink}`;
}