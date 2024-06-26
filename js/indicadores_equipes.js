document.getElementById('atualizacao-indicadores').textContent = '26/06/2024';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="atingiu right">83%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">50%</td>
  <td class="right">40</td>
  <td class="proximo right">42%</td>
  <td class="right">28</td>
</tr>
<tr>
  <td><b>CAMINHO</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">2</td>
  <td class="proximo right">83%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">55%</td>
  <td class="right"></td>
  <td class="proximo right">77%</td>
  <td class="right">2</td>
  <td class="proximo right">51%</td>
  <td class="right">33</td>
  <td class="proximo right">47%</td>
  <td class="right">17</td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="proximo right">47%</td>
  <td class="right">12</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">44%</td>
  <td class="right">67</td>
  <td class="razoavel right">40%</td>
  <td class="right">23</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="razoavel right">42%</td>
  <td class="right">3</td>
  <td class="proximo right">71%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">26</td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="proximo right">44%</td>
  <td class="right">69</td>
  <td class="razoavel right">35%</td>
  <td class="right">31</td>
</tr>
<tr>
  <td><b>ESPETACULAR</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">66%</td>
  <td class="right"></td>
  <td class="proximo right">80%</td>
  <td class="right">1</td>
  <td class="proximo right">48%</td>
  <td class="right">55</td>
  <td class="proximo right">44%</td>
  <td class="right">23</td>
</tr>
<tr>
  <td><b>HARMONIA</b></td>
  <td class="atingiu right">88%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">82%</td>
  <td class="right">3</td>
  <td class="proximo right">41%</td>
  <td class="right">90</td>
  <td class="razoavel right">27%</td>
  <td class="right">49</td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="atingiu right">90%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">21</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">52%</td>
  <td class="right">27</td>
  <td class="proximo right">49%</td>
  <td class="right">13</td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">57%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="proximo right">81%</td>
  <td class="right">2</td>
  <td class="proximo right">47%</td>
  <td class="right">46</td>
  <td class="proximo right">43%</td>
  <td class="right">25</td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">44%</td>
  <td class="right">34</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">48%</td>
  <td class="right">52</td>
  <td class="proximo right">51%</td>
  <td class="right">10</td>
</tr>
<tr>
  <td><b>PROGRESSO</b></td>
  <td class="atingiu right">85%</td>
  <td class="right"></td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="razoavel right">39%</td>
  <td class="right">89</td>
  <td class="proximo right">41%</td>
  <td class="right">27</td>
</tr>
<tr>
  <td><b>RENASCER</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">4</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="razoavel right">57%</td>
  <td class="right">6</td>
  <td class="razoavel right">34%</td>
  <td class="right">159</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">31%</td>
  <td class="right">236</td>
  <td class="razoavel right">26%</td>
  <td class="right">94</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">65%</td>
  <td class="right">3</td>
  <td class="atingiu right">95%</td>
  <td class="right"></td>
  <td class="proximo right">86%</td>
  <td class="right">2</td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="razoavel right">40%</td>
  <td class="right">87</td>
  <td class="razoavel right">35%</td>
  <td class="right">35</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">60%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">25</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">42%</td>
  <td class="right">94</td>
  <td class="razoavel right">35%</td>
  <td class="right">47</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="ruim right">0%</td>
  <td class="right">5</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="razoavel right">37%</td>
  <td class="right">125</td>
  <td class="proximo right">47%</td>
  <td class="right">18</td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">71%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">40%</td>
  <td class="right">86</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">28%</td>
  <td class="right">189</td>
  <td class="ruim right">20%</td>
  <td class="right">77</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">68%</td>
  <td class="right">10</td>
  <td class="proximo right">91%</td>
  <td class="right">5</td>
  <td class="proximo right">90%</td>
  <td class="right">6</td>
  <td class="proximo right">44%</td>
  <td class="right">566</td>
  <td class="proximo right">92%</td>
  <td class="right">5</td>
  <td class="razoavel right">39%</td>
  <td class="right">1823</td>
  <td class="razoavel right">34%</td>
  <td class="right">716</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '26/06/2024';
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
    <td class="right atingiu">83%</td>
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
    <td class="right proximo">91%</td>
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
    <td class="right proximo">50%</td>
    <td class="right">57%</td>
    <td class="right">40</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">42%</td>
    <td class="right">57%</td>
    <td class="right">28</td>
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
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">83%</td>
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
    <td class="right atingiu">55%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">77%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">51%</td>
    <td class="right">57%</td>
    <td class="right">33</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">17</td>
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
    <td class="right neutro">0%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right neutro">0%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right neutro">0%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">47%</td>
    <td class="right">50%</td>
    <td class="right">12</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">67</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">23</td>
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
    <td class="right razoavel">42%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">71%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">26</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">69</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">31</td>
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
    <td class="right atingiu">66%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">80%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">48%</td>
    <td class="right">57%</td>
    <td class="right">55</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">44%</td>
    <td class="right">57%</td>
    <td class="right">23</td>
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
    <td class="right atingiu">88%</td>
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
    <td class="right atingiu">52%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">82%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">41%</td>
    <td class="right">57%</td>
    <td class="right">90</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">27%</td>
    <td class="right">57%</td>
    <td class="right">49</td>
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
    <td class="right atingiu">90%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">21</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">52%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">49%</td>
    <td class="right">57%</td>
    <td class="right">13</td>
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
    <td class="right proximo">57%</td>
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
    <td class="right proximo">81%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">46</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">25</td>
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
    <td class="right proximo">44%</td>
    <td class="right">50%</td>
    <td class="right">34</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">48%</td>
    <td class="right">57%</td>
    <td class="right">52</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">51%</td>
    <td class="right">57%</td>
    <td class="right">10</td>
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
    <td class="right atingiu">85%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">85%</td>
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
    <td class="right atingiu">50%</td>
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
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">89</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">41%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
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
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right razoavel">57%</td>
    <td class="right">95%</td>
    <td class="right">6</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right razoavel">34%</td>
    <td class="right">50%</td>
    <td class="right">159</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">31%</td>
    <td class="right">57%</td>
    <td class="right">236</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">26%</td>
    <td class="right">57%</td>
    <td class="right">94</td>
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
    <td class="right proximo">65%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">95%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">86%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">50%</td>
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
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">87</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">35</td>
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
    <td class="right atingiu">100%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right razoavel">60%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">25</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">42%</td>
    <td class="right">57%</td>
    <td class="right">94</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">47</td>
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
    <td class="right ruim">0%</td>
    <td class="right">75%</td>
    <td class="right">5</td>
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
    <td class="right atingiu">54%</td>
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
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">125</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">18</td>
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
    <td class="right proximo">40%</td>
    <td class="right">50%</td>
    <td class="right">86</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">28%</td>
    <td class="right">57%</td>
    <td class="right">189</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">20%</td>
    <td class="right">57%</td>
    <td class="right">77</td>
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
    <td class="right proximo">68%</td>
    <td class="right">75%</td>
    <td class="right">10</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">6</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">44%</td>
    <td class="right">50%</td>
    <td class="right">566</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">1823</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">34%</td>
    <td class="right">57%</td>
    <td class="right">716</td>
  </tr>
`
