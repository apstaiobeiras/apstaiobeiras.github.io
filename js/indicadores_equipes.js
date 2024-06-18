document.getElementById('atualizacao-indicadores').textContent = '18/06/2024';
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
  <td class="proximo right">48%</td>
  <td class="right">47</td>
  <td class="razoavel right">40%</td>
  <td class="right">33</td>
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
  <td class="proximo right">49%</td>
  <td class="right">47</td>
  <td class="proximo right">47%</td>
  <td class="right">19</td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="proximo right">43%</td>
  <td class="right">28</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">42%</td>
  <td class="right">76</td>
  <td class="razoavel right">38%</td>
  <td class="right">25</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="razoavel right">37%</td>
  <td class="right">3</td>
  <td class="razoavel right">62%</td>
  <td class="right">3</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">28</td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="razoavel right">40%</td>
  <td class="right">90</td>
  <td class="razoavel right">31%</td>
  <td class="right">36</td>
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
  <td class="proximo right">47%</td>
  <td class="right">63</td>
  <td class="proximo right">42%</td>
  <td class="right">27</td>
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
  <td class="razoavel right">40%</td>
  <td class="right">94</td>
  <td class="razoavel right">27%</td>
  <td class="right">50</td>
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
  <td class="right">22</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">47%</td>
  <td class="right">54</td>
  <td class="proximo right">43%</td>
  <td class="right">22</td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">57%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">81%</td>
  <td class="right">2</td>
  <td class="proximo right">46%</td>
  <td class="right">51</td>
  <td class="proximo right">42%</td>
  <td class="right">27</td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">34</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">66</td>
  <td class="proximo right">47%</td>
  <td class="right">17</td>
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
  <td class="razoavel right">38%</td>
  <td class="right">96</td>
  <td class="razoavel right">38%</td>
  <td class="right">33</td>
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
  <td class="right">242</td>
  <td class="razoavel right">25%</td>
  <td class="right">95</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">60%</td>
  <td class="right">4</td>
  <td class="atingiu right">95%</td>
  <td class="right"></td>
  <td class="proximo right">86%</td>
  <td class="right">2</td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="razoavel right">39%</td>
  <td class="right">95</td>
  <td class="razoavel right">32%</td>
  <td class="right">38</td>
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
  <td class="proximo right">41%</td>
  <td class="right">104</td>
  <td class="razoavel right">31%</td>
  <td class="right">56</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="ruim right">14%</td>
  <td class="right">5</td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="razoavel right">33%</td>
  <td class="right">155</td>
  <td class="proximo right">43%</td>
  <td class="right">24</td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">64%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">40%</td>
  <td class="right">88</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">28%</td>
  <td class="right">191</td>
  <td class="ruim right">20%</td>
  <td class="right">76</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">66%</td>
  <td class="right">12</td>
  <td class="proximo right">91%</td>
  <td class="right">5</td>
  <td class="proximo right">90%</td>
  <td class="right">6</td>
  <td class="proximo right">44%</td>
  <td class="right">592</td>
  <td class="proximo right">92%</td>
  <td class="right">5</td>
  <td class="razoavel right">37%</td>
  <td class="right">2000</td>
  <td class="razoavel right">32%</td>
  <td class="right">774</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '18/06/2024';
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
    <td class="right proximo">48%</td>
    <td class="right">57%</td>
    <td class="right">47</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">33</td>
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
    <td class="right proximo">49%</td>
    <td class="right">57%</td>
    <td class="right">47</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">19</td>
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
    <td class="right proximo">43%</td>
    <td class="right">50%</td>
    <td class="right">28</td>
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
    <td class="right">76</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">25</td>
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
    <td class="right razoavel">37%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right razoavel">62%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">45%</td>
    <td class="right">50%</td>
    <td class="right">28</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">90</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">31%</td>
    <td class="right">57%</td>
    <td class="right">36</td>
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
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">63</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">42%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
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
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">94</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">27%</td>
    <td class="right">57%</td>
    <td class="right">50</td>
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
    <td class="right">22</td>
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
    <td class="right">54</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">22</td>
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
    <td class="right atingiu">50%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">51</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">42%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
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
    <td class="right proximo">45%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">66</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">17</td>
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
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">96</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">33</td>
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
    <td class="right">242</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">25%</td>
    <td class="right">57%</td>
    <td class="right">95</td>
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
    <td class="right proximo">60%</td>
    <td class="right">75%</td>
    <td class="right">4</td>
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
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">95</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">38</td>
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
    <td class="right proximo">41%</td>
    <td class="right">57%</td>
    <td class="right">104</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">31%</td>
    <td class="right">57%</td>
    <td class="right">56</td>
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
    <td class="right ruim">14%</td>
    <td class="right">75%</td>
    <td class="right">5</td>
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
    <td class="right razoavel">33%</td>
    <td class="right">57%</td>
    <td class="right">155</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">24</td>
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
    <td class="right proximo">64%</td>
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
    <td class="right proximo">40%</td>
    <td class="right">50%</td>
    <td class="right">88</td>
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
    <td class="right">191</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">20%</td>
    <td class="right">57%</td>
    <td class="right">76</td>
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
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">12</td>
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
    <td class="right">592</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">2000</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">774</td>
  </tr>
`
