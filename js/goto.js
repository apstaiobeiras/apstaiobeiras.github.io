function backlink() {
    let cod            = (new URLSearchParams(window.location.search)).get('cod');
    let token          = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode           = (new URLSearchParams(window.location.search)).get('mode') || 'r1';
    let unidade        = (new URLSearchParams(window.location.search)).get('unidade');
    let path           = ((new URLSearchParams(window.location.search)).get('path'));
    let cod_path       = (((new URLSearchParams(window.location.search)).get('cod_path')) || "");
    let pagina       = (((new URLSearchParams(window.location.search)).get('pagina')) || "up");

    if (!path) {
        window.location.href = `index.html`;
        return
    }

    let path_array     = path.split("/");
    let cod_array      = cod_path.split("/").reverse();

    cod = cod_array.reverse().pop();

    path_array.pop();

    let back_page = path_array.reverse()[0] || "index.html"

    if (back_page == "index.html"){
        window.location.href = `index.html`;
        return
    }

    window.location.href = `${back_page}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&cod_path=${cod_array.join("/")}&path=${path_array.reverse().join("/")}&pagina=${pagina}`;
}

function gotoPage(page,nargs) {
    let args      = nargs && "&"+nargs || "";
    let cod       = (new URLSearchParams(window.location.search)).get('cod');
    let token     = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode      = (new URLSearchParams(window.location.search)).get('mode') || 'r1';
    let unidade   = (new URLSearchParams(window.location.search)).get('unidade');
    let path      = ((new URLSearchParams(window.location.search)).get('path') || window.location.pathname.split("/").reverse()[0])+"/"+page;
    let cod_path  = (((new URLSearchParams(window.location.search)).get('cod_path')) || "")+"/"+cod;
    let pagina       = (((new URLSearchParams(window.location.search)).get('pagina')) || "up");

    window.location.href = `${page}?cod=${cod}&token=${token}&mode=${mode}&unidade=${unidade}&cod_path=${cod_path}&path=${path}${args}&pagina=${pagina}`;
}

function bypassCPF(page,new_cod,unidade){
    let cod       = (new URLSearchParams(window.location.search)).get('cod');
    let token     = (new Date()).setSeconds((new Date()).getSeconds()+30).toString(36)
    let mode      = (new URLSearchParams(window.location.search)).get('mode');
    let path      = ((new URLSearchParams(window.location.search)).get('path') || window.location.pathname.split("/").reverse()[0])+"/"+page;
    let cod_path  = ((new URLSearchParams(window.location.search)).get('cod_path') || cod)+ "/"+cod;
    let pagina       = (((new URLSearchParams(window.location.search)).get('pagina')) || "up");

    window.location.href = `${page}?cod=${new_cod}&token=${token}&mode=${mode}&unidade=${unidade}&cod_path=${cod_path}&path=${path}&pagina=${pagina}`;
}