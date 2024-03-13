document.getElementById('atualizacao-indicadores').textContent = '28/02/2024';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">3</td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="razoavel right">60%</td>
  <td class="right">4</td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="proximo right">47%</td>
  <td class="right">54</td>
  <td class="razoavel right">37%</td>
  <td class="right">36</td>
</tr>
<tr>
  <td><b>CAMINHO</b></td>
  <td class="atingiu right">87%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">58%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">70</td>
  <td class="proximo right">42%</td>
  <td class="right">26</td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">54</td>
  <td class="razoavel right">28%</td>
  <td class="right">36</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">26</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">43%</td>
  <td class="right">73</td>
  <td class="proximo right">44%</td>
  <td class="right">18</td>
</tr>
<tr>
  <td><b>ESPETACULAR</b></td>
  <td class="atingiu right">80%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">63%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">76</td>
  <td class="proximo right">48%</td>
  <td class="right">15</td>
</tr>
<tr>
  <td><b>HARMONIA</b></td>
  <td class="atingiu right">85%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="proximo right">46%</td>
  <td class="right">60</td>
  <td class="proximo right">53%</td>
  <td class="right">6</td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">47%</td>
  <td class="right">56</td>
  <td class="proximo right">45%</td>
  <td class="right">17</td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">70%</td>
  <td class="right">1</td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">55</td>
  <td class="razoavel right">31%</td>
  <td class="right">44</td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="proximo right">63%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="proximo right">48%</td>
  <td class="right">11</td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="razoavel right">40%</td>
  <td class="right">103</td>
  <td class="razoavel right">29%</td>
  <td class="right">50</td>
</tr>
<tr>
  <td><b>PROGRESSO</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">43%</td>
  <td class="right">68</td>
  <td class="proximo right">44%</td>
  <td class="right">22</td>
</tr>
<tr>
  <td><b>RENASCER</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">35%</td>
  <td class="right">149</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">26%</td>
  <td class="right">282</td>
  <td class="razoavel right">24%</td>
  <td class="right">97</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">66%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="proximo right">43%</td>
  <td class="right">70</td>
  <td class="razoavel right">39%</td>
  <td class="right">27</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="proximo right">64%</td>
  <td class="right">2</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="proximo right">47%</td>
  <td class="right">13</td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="proximo right">44%</td>
  <td class="right">85</td>
  <td class="razoavel right">30%</td>
  <td class="right">57</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">81%</td>
  <td class="right">3</td>
  <td class="proximo right">45%</td>
  <td class="right">72</td>
  <td class="proximo right">41%</td>
  <td class="right">29</td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">71%</td>
  <td class="right">1</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">42%</td>
  <td class="right">60</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">34%</td>
  <td class="right">147</td>
  <td class="razoavel right">35%</td>
  <td class="right">43</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">67%</td>
  <td class="right">11</td>
  <td class="proximo right">91%</td>
  <td class="right">6</td>
  <td class="proximo right">90%</td>
  <td class="right">7</td>
  <td class="proximo right">46%</td>
  <td class="right">369</td>
  <td class="proximo right">94%</td>
  <td class="right">1</td>
  <td class="razoavel right">39%</td>
  <td class="right">1769</td>
  <td class="razoavel right">34%</td>
  <td class="right">695</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '28/02/2024';
const indicadores_por_equipe = [];
indicadores_por_equipe['ACOLHER'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right razoavel">60%</td>
    <td class="right">95%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">53%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">93%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">54</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">36</td>
  </tr>
`
indicadores_por_equipe['CAMINHO'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right atingiu">87%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">58%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">70</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">42%</td>
    <td class="right">57%</td>
    <td class="right">26</td>
  </tr>
`
indicadores_por_equipe['COMUN. RURAIS'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">52%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">54</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">28%</td>
    <td class="right">57%</td>
    <td class="right">36</td>
  </tr>
`
indicadores_por_equipe['ESPERANÇA'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">26</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">73</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">18</td>
  </tr>
`
indicadores_por_equipe['ESPETACULAR'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right atingiu">80%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">63%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">76</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">48%</td>
    <td class="right">57%</td>
    <td class="right">15</td>
  </tr>
`
indicadores_por_equipe['HARMONIA'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right atingiu">85%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">53%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">88%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">60</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">53%</td>
    <td class="right">57%</td>
    <td class="right">6</td>
  </tr>
`
indicadores_por_equipe['HUMANIZAR'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">52%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">56</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">17</td>
  </tr>
`
indicadores_por_equipe['LIBERDADE'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">70%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">51%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">55</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">31%</td>
    <td class="right">57%</td>
    <td class="right">44</td>
  </tr>
`
indicadores_por_equipe['MAIS SAÚDE'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">63%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">48%</td>
    <td class="right">50%</td>
    <td class="right">11</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">93%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">103</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">29%</td>
    <td class="right">57%</td>
    <td class="right">50</td>
  </tr>
`
indicadores_por_equipe['PROGRESSO'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right atingiu">100%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">88%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">51%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">68</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">22</td>
  </tr>
`
indicadores_por_equipe['RENASCER'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right atingiu">100%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right razoavel">35%</td>
    <td class="right">50%</td>
    <td class="right">149</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">26%</td>
    <td class="right">57%</td>
    <td class="right">282</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">24%</td>
    <td class="right">57%</td>
    <td class="right">97</td>
  </tr>
`
indicadores_por_equipe['UNIÃO'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">93%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">51%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">70</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
  </tr>
`
indicadores_por_equipe['VIDA'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">64%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">47%</td>
    <td class="right">50%</td>
    <td class="right">13</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">85</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">57</td>
  </tr>
`
indicadores_por_equipe['VIDA E SAÚDE'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">57%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">81%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">72</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">41%</td>
    <td class="right">57%</td>
    <td class="right">29</td>
  </tr>
`
indicadores_por_equipe['VIVER'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">71%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">42%</td>
    <td class="right">50%</td>
    <td class="right">60</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">34%</td>
    <td class="right">57%</td>
    <td class="right">147</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">43</td>
  </tr>
`
indicadores_por_equipe['Município'] = `
  <tr>
    <th></th>
    <th>Percentual<br>atingido</th>
    <th>Meta</th>
    <th>Pacientes que faltam<br>para cumprir a meta</th>
  </tr>
  <tr>
    <td>Pré-natal</td>
    <td class="right proximo">67%</td>
    <td class="right">75%</td>
    <td class="right">11</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">6</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">7</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">369</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">94%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">1769</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">34%</td>
    <td class="right">57%</td>
    <td class="right">695</td>
  </tr>
`
