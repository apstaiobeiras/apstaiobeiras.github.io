document.getElementById('atualizacao-indicadores').textContent = '02/05/2024';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">3</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">60%</td>
  <td class="right">4</td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="atingiu right">60%</td>
  <td class="right"></td>
  <td class="atingiu right">61%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>CAMINHO</b></td>
  <td class="atingiu right">88%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">58%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">63%</td>
  <td class="right"></td>
  <td class="atingiu right">63%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">59%</td>
  <td class="right"></td>
  <td class="proximo right">52%</td>
  <td class="right">6</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="razoavel right">33%</td>
  <td class="right">2</td>
  <td class="razoavel right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">48%</td>
  <td class="right">11</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">56%</td>
  <td class="right">5</td>
  <td class="atingiu right">58%</td>
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
  <td class="atingiu right">64%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">64%</td>
  <td class="right"></td>
  <td class="atingiu right">67%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>HARMONIA</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">55%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="proximo right">56%</td>
  <td class="right">3</td>
  <td class="atingiu right">61%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="atingiu right">83%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">68%</td>
  <td class="right"></td>
  <td class="atingiu right">70%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">70%</td>
  <td class="right">1</td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="atingiu right">61%</td>
  <td class="right"></td>
  <td class="atingiu right">60%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">56%</td>
  <td class="right">1</td>
</tr>
<tr>
  <td><b>PROGRESSO</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">59%</td>
  <td class="right"></td>
  <td class="atingiu right">63%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>RENASCER</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">36%</td>
  <td class="right">137</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">39%</td>
  <td class="right">166</td>
  <td class="razoavel right">36%</td>
  <td class="right">62</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">66%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">56%</td>
  <td class="right">5</td>
  <td class="proximo right">52%</td>
  <td class="right">7</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="atingiu right">78%</td>
  <td class="right"></td>
  <td class="proximo right">85%</td>
  <td class="right">2</td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">87%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">53%</td>
  <td class="right">9</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="atingiu right">90%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">57%</td>
  <td class="right"></td>
  <td class="proximo right">82%</td>
  <td class="right">3</td>
  <td class="atingiu right">62%</td>
  <td class="right"></td>
  <td class="atingiu right">65%</td>
  <td class="right"></td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="atingiu right">80%</td>
  <td class="right"></td>
  <td class="proximo right">93%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">44%</td>
  <td class="right">50</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">44%</td>
  <td class="right">82</td>
  <td class="proximo right">45%</td>
  <td class="right">24</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">72%</td>
  <td class="right">4</td>
  <td class="proximo right">92%</td>
  <td class="right">4</td>
  <td class="proximo right">91%</td>
  <td class="right">5</td>
  <td class="proximo right">47%</td>
  <td class="right">234</td>
  <td class="proximo right">94%</td>
  <td class="right">1</td>
  <td class="proximo right">52%</td>
  <td class="right">426</td>
  <td class="proximo right">51%</td>
  <td class="right">177</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '02/05/2024';
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
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right razoavel">60%</td>
    <td class="right">95%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">54%</td>
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
    <td class="right atingiu">60%</td>
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
indicadores_por_equipe['CAMINHO'] = `
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
    <td class="right atingiu">63%</td>
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
    <td class="right atingiu">54%</td>
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
    <td class="right atingiu">59%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">52%</td>
    <td class="right">57%</td>
    <td class="right">6</td>
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
    <td class="right razoavel">33%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right razoavel">66%</td>
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
    <td class="right">11</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">56%</td>
    <td class="right">57%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">58%</td>
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
    <td class="right atingiu">64%</td>
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
    <td class="right atingiu">67%</td>
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
    <td class="right atingiu">55%</td>
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
    <td class="right proximo">56%</td>
    <td class="right">57%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">61%</td>
    <td class="right">57%</td>
    <td class="right"></td>
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
    <td class="right atingiu">70%</td>
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
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">61%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">60%</td>
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
    <td class="right atingiu">50%</td>
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
    <td class="right atingiu">57%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">56%</td>
    <td class="right">57%</td>
    <td class="right">1</td>
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
    <td class="right atingiu">53%</td>
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
    <td class="right proximo">36%</td>
    <td class="right">50%</td>
    <td class="right">137</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">166</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">36%</td>
    <td class="right">57%</td>
    <td class="right">62</td>
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
    <td class="right proximo">56%</td>
    <td class="right">57%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">52%</td>
    <td class="right">57%</td>
    <td class="right">7</td>
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
    <td class="right atingiu">78%</td>
    <td class="right">75%</td>
    <td class="right"></td>
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
    <td class="right atingiu">50%</td>
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
    <td class="right atingiu">57%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">53%</td>
    <td class="right">57%</td>
    <td class="right">9</td>
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
    <td class="right proximo">90%</td>
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
    <td class="right proximo">82%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right atingiu">62%</td>
    <td class="right">57%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right atingiu">65%</td>
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
    <td class="right atingiu">80%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">93%</td>
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
    <td class="right proximo">44%</td>
    <td class="right">50%</td>
    <td class="right">50</td>
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
    <td class="right">82</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">24</td>
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
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">47%</td>
    <td class="right">50%</td>
    <td class="right">234</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">94%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">52%</td>
    <td class="right">57%</td>
    <td class="right">426</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">51%</td>
    <td class="right">57%</td>
    <td class="right">177</td>
  </tr>
`
