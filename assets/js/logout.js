


if (localStorage.getItem("override:codProfissional")) {
    ([...document.getElementsByClassName("navbar")[0].children]).reverse()[0].innerText = "Voltar pro meu perfil";
}
async function logout() {
    let { data, error } = await supabase.auth.signOut();
    if (localStorage.getItem("override:codProfissional") == null) {
        localStorage.removeItem("profissional");
    }
    localStorage.removeItem("override:codProfissional");
    window.location.href = "index.html"
}
