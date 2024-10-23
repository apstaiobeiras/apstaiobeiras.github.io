document.getElementById('atualizacao-indicadores').textContent = '11/09/2024';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="proximo right">71%</td>
  <td class="right">1</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">64%</td>
  <td class="right"></td>
  <td class="atingiu right">71%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>CAMINHO</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="proximo right">83%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">77%</td>
  <td class="right">2</td>
  <td class="atingiu right">68%</td>
  <td class="right"></td>
  <td class="atingiu right">71%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">47%</td>
  <td class="right">9</td>
  <td class="razoavel right">50%</td>
  <td class="right">1</td>
  <td class="proximo right">55%</td>
  <td class="right">6</td>
  <td class="proximo right">51%</td>
  <td class="right">8</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="proximo right">57%</td>
  <td class="right">2</td>
  <td class="proximo right">71%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">47%</td>
  <td class="right">18</td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="atingiu right">61%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>ESPETACULAR</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">67%</td>
  <td class="right"></td>
  <td class="proximo right">80%</td>
  <td class="right">1</td>
  <td class="atingiu right">62%</td>
  <td class="right"></td>
  <td class="atingiu right">62%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>HARMONIA</b></td>
  <td class="atingiu right">87%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">80%</td>
  <td class="right">3</td>
  <td class="proximo right">54%</td>
  <td class="right">14</td>
  <td class="proximo right">50%</td>
  <td class="right">13</td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="atingiu right">88%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">49%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">68%</td>
  <td class="right"></td>
  <td class="atingiu right">67%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">62%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">59%</td>
  <td class="right"></td>
  <td class="atingiu right">63%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="atingiu right">87%</td>
  <td class="right"></td>
  <td class="proximo right">87%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">48%</td>
  <td class="right">13</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">62%</td>
  <td class="right"></td>
  <td class="atingiu right">73%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>PROGRESSO</b></td>
  <td class="atingiu right">85%</td>
  <td class="right"></td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">55%</td>
  <td class="right">3</td>
</tr>
<tr>
  <td><b>RENASCER</b></td>
  <td class="proximo right">57%</td>
  <td class="right">3</td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="razoavel right">57%</td>
  <td class="right">6</td>
  <td class="proximo right">36%</td>
  <td class="right">139</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">41%</td>
  <td class="right">150</td>
  <td class="razoavel right">40%</td>
  <td class="right">53</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">73%</td>
  <td class="right">1</td>
  <td class="atingiu right">95%</td>
  <td class="right"></td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="proximo right">50%</td>
  <td class="right">39</td>
  <td class="proximo right">47%</td>
  <td class="right">16</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">60%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">49%</td>
  <td class="right">7</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">52%</td>
  <td class="right">33</td>
  <td class="proximo right">45%</td>
  <td class="right">25</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="razoavel right">40%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">56%</td>
  <td class="right"></td>
  <td class="proximo right">87%</td>
  <td class="right">1</td>
  <td class="atingiu right">65%</td>
  <td class="right"></td>
  <td class="atingiu right">71%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">71%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">41%</td>
  <td class="right">74</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">76</td>
  <td class="proximo right">46%</td>
  <td class="right">23</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">72%</td>
  <td class="right">5</td>
  <td class="proximo right">89%</td>
  <td class="right">8</td>
  <td class="proximo right">90%</td>
  <td class="right">7</td>
  <td class="proximo right">46%</td>
  <td class="right">401</td>
  <td class="proximo right">92%</td>
  <td class="right">5</td>
  <td class="proximo right">52%</td>
  <td class="right">493</td>
  <td class="proximo right">51%</td>
  <td class="right">177</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '11/09/2024';
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
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
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
    <td class="right atingiu">64%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">71%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
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
    <td class="right atingiu">57%</td>
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
    <td class="right atingiu">68%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">71%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right proximo">47%</td>
    <td class="right">50%</td>
    <td class="right">9</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right razoavel">50%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">55%</td>
    <td class="right">57%</td>
    <td class="right">6</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">51%</td>
    <td class="right">57%</td>
    <td class="right">8</td>
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
    <td class="right proximo">57%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
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
    <td class="right proximo">47%</td>
    <td class="right">50%</td>
    <td class="right">18</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">57%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">61%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right atingiu">67%</td>
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
    <td class="right atingiu">62%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">62%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right atingiu">54%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">80%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">54%</td>
    <td class="right">57%</td>
    <td class="right">14</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">50%</td>
    <td class="right">57%</td>
    <td class="right">13</td>
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
    <td class="right proximo">49%</td>
    <td class="right">50%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">68%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">67%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right proximo">62%</td>
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
    <td class="right atingiu">54%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">59%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">63%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right atingiu">87%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">87%</td>
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
    <td class="right proximo">48%</td>
    <td class="right">50%</td>
    <td class="right">13</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">62%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">73%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right atingiu">51%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">57%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">55%</td>
    <td class="right">57%</td>
    <td class="right">3</td>
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
    <td class="right proximo">57%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
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
    <td class="right proximo">36%</td>
    <td class="right">50%</td>
    <td class="right">139</td>
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
    <td class="right">150</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">53</td>
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
    <td class="right proximo">73%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right atingiu">95%</td>
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
    <td class="right atingiu">52%</td>
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
    <td class="right proximo">50%</td>
    <td class="right">57%</td>
    <td class="right">39</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">47%</td>
    <td class="right">57%</td>
    <td class="right">16</td>
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
    <td class="right proximo">49%</td>
    <td class="right">50%</td>
    <td class="right">7</td>
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
    <td class="right">33</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">25</td>
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
    <td class="right razoavel">40%</td>
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
    <td class="right atingiu">56%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">87%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">65%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">71%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right proximo">41%</td>
    <td class="right">50%</td>
    <td class="right">74</td>
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
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">23</td>
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
    <td class="right proximo">72%</td>
    <td class="right">75%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">89%</td>
    <td class="right">95%</td>
    <td class="right">8</td>
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
    <td class="right">401</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">52%</td>
    <td class="right">57%</td>
    <td class="right">493</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">51%</td>
    <td class="right">57%</td>
    <td class="right">177</td>
  </tr>
`
