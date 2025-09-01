

async function logout() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("profissional");
    localStorage.removeItem("cod_profissional");
    localStorage.removeItem("profissional_equipes");
    localStorage.removeItem("profissional_pagina");
    location.href = "index.html";
  }