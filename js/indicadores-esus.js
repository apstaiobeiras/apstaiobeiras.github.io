document.getElementById('atualizacao-indicadores').textContent = '30/01/2025';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="proximo right">72%</td>
  <td class="right">1</td>
  <td class="proximo right">81%</td>
  <td class="right">2</td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="razoavel right">38%</td>
  <td class="right">109</td>
  <td class="razoavel right">37%</td>
  <td class="right">40</td>
</tr>
<tr>
  <td><b>CAMINHO</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">37%</td>
  <td class="right">116</td>
  <td class="razoavel right">32%</td>
  <td class="right">48</td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">14</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">34%</td>
  <td class="right">128</td>
  <td class="razoavel right">29%</td>
  <td class="right">40</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="proximo right">66%</td>
  <td class="right">1</td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">32</td>
  <td class="razoavel right">66%</td>
  <td class="right">2</td>
  <td class="razoavel right">30%</td>
  <td class="right">145</td>
  <td class="ruim right">23%</td>
  <td class="right">52</td>
</tr>
<tr>
  <td><b>ESPETACULAR</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">75%</td>
  <td class="right">1</td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">37%</td>
  <td class="right">134</td>
  <td class="razoavel right">30%</td>
  <td class="right">49</td>
</tr>
<tr>
  <td><b>HARMONIA</b></td>
  <td class="proximo right">60%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="razoavel right">31%</td>
  <td class="right">157</td>
  <td class="ruim right">22%</td>
  <td class="right">66</td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">3</td>
  <td class="razoavel right">58%</td>
  <td class="right">5</td>
  <td class="proximo right">83%</td>
  <td class="right">2</td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="proximo right">43%</td>
  <td class="right">77</td>
  <td class="proximo right">43%</td>
  <td class="right">25</td>
</tr>
<tr>
  <td><b>LIBERDADE</b></td>
  <td class="proximo right">60%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="razoavel right">38%</td>
  <td class="right">94</td>
  <td class="razoavel right">35%</td>
  <td class="right">43</td>
</tr>
<tr>
  <td><b>MAIS SAÚDE</b></td>
  <td class="proximo right">55%</td>
  <td class="right">2</td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="razoavel right">32%</td>
  <td class="right">151</td>
  <td class="razoavel right">28%</td>
  <td class="right">56</td>
</tr>
<tr>
  <td><b>PROGRESSO</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">75%</td>
  <td class="right">1</td>
  <td class="proximo right">48%</td>
  <td class="right">7</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">34%</td>
  <td class="right">123</td>
  <td class="proximo right">48%</td>
  <td class="right">16</td>
</tr>
<tr>
  <td><b>RENASCER</b></td>
  <td class="proximo right">70%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">60%</td>
  <td class="right">4</td>
  <td class="razoavel right">34%</td>
  <td class="right">150</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">26%</td>
  <td class="right">298</td>
  <td class="ruim right">22%</td>
  <td class="right">113</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="atingiu right">77%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="razoavel right">59%</td>
  <td class="right">8</td>
  <td class="proximo right">48%</td>
  <td class="right">13</td>
  <td class="proximo right">94%</td>
  <td class="right">1</td>
  <td class="razoavel right">32%</td>
  <td class="right">143</td>
  <td class="ruim right">21%</td>
  <td class="right">60</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="razoavel right">50%</td>
  <td class="right">1</td>
  <td class="proximo right">75%</td>
  <td class="right">1</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">53%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">38%</td>
  <td class="right">127</td>
  <td class="razoavel right">26%</td>
  <td class="right">69</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="proximo right">53%</td>
  <td class="right">3</td>
  <td class="proximo right">84%</td>
  <td class="right">2</td>
  <td class="proximo right">69%</td>
  <td class="right">4</td>
  <td class="atingiu right">52%</td>
  <td class="right"></td>
  <td class="proximo right">80%</td>
  <td class="right">2</td>
  <td class="razoavel right">29%</td>
  <td class="right">183</td>
  <td class="razoavel right">30%</td>
  <td class="right">50</td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">69%</td>
  <td class="right">1</td>
  <td class="razoavel right">53%</td>
  <td class="right">6</td>
  <td class="proximo right">84%</td>
  <td class="right">2</td>
  <td class="proximo right">44%</td>
  <td class="right">51</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">24%</td>
  <td class="right">215</td>
  <td class="ruim right">22%</td>
  <td class="right">76</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">62%</td>
  <td class="right">19</td>
  <td class="proximo right">83%</td>
  <td class="right">17</td>
  <td class="proximo right">78%</td>
  <td class="right">24</td>
  <td class="proximo right">45%</td>
  <td class="right">569</td>
  <td class="proximo right">93%</td>
  <td class="right">3</td>
  <td class="razoavel right">30%</td>
  <td class="right">2778</td>
  <td class="razoavel right">26%</td>
  <td class="right">1027</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '30/01/2025';
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
    <td class="right proximo">72%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">81%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">53%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">85%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">109</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">40</td>
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
    <td class="right proximo">88%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">88%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
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
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">116</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">48</td>
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
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">14</td>
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
    <td class="right">128</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">29%</td>
    <td class="right">57%</td>
    <td class="right">40</td>
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
    <td class="right proximo">66%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
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
    <td class="right proximo">45%</td>
    <td class="right">50%</td>
    <td class="right">32</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right razoavel">66%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">145</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">23%</td>
    <td class="right">57%</td>
    <td class="right">52</td>
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
    <td class="right proximo">75%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
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
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">134</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">49</td>
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
    <td class="right proximo">60%</td>
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
    <td class="right razoavel">31%</td>
    <td class="right">57%</td>
    <td class="right">157</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">22%</td>
    <td class="right">57%</td>
    <td class="right">66</td>
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
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right razoavel">58%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">83%</td>
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
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">77</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">25</td>
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
    <td class="right proximo">60%</td>
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
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">94</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">43</td>
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
    <td class="right proximo">55%</td>
    <td class="right">75%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">88%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">88%</td>
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
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">151</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">28%</td>
    <td class="right">57%</td>
    <td class="right">56</td>
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
    <td class="right proximo">75%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">48%</td>
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
    <td class="right razoavel">34%</td>
    <td class="right">57%</td>
    <td class="right">123</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">48%</td>
    <td class="right">57%</td>
    <td class="right">16</td>
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
    <td class="right proximo">70%</td>
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
    <td class="right razoavel">60%</td>
    <td class="right">95%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right razoavel">34%</td>
    <td class="right">50%</td>
    <td class="right">150</td>
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
    <td class="right">298</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">22%</td>
    <td class="right">57%</td>
    <td class="right">113</td>
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
    <td class="right atingiu">77%</td>
    <td class="right">75%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right razoavel">59%</td>
    <td class="right">95%</td>
    <td class="right">8</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">48%</td>
    <td class="right">50%</td>
    <td class="right">13</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">94%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">143</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">21%</td>
    <td class="right">57%</td>
    <td class="right">60</td>
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
    <td class="right razoavel">50%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">75%</td>
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
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">127</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">26%</td>
    <td class="right">57%</td>
    <td class="right">69</td>
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
    <td class="right proximo">53%</td>
    <td class="right">75%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">84%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">69%</td>
    <td class="right">95%</td>
    <td class="right">4</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right atingiu">52%</td>
    <td class="right">50%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">80%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">29%</td>
    <td class="right">57%</td>
    <td class="right">183</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">50</td>
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
    <td class="right proximo">69%</td>
    <td class="right">75%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right razoavel">53%</td>
    <td class="right">95%</td>
    <td class="right">6</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">84%</td>
    <td class="right">95%</td>
    <td class="right">2</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">44%</td>
    <td class="right">50%</td>
    <td class="right">51</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">24%</td>
    <td class="right">57%</td>
    <td class="right">215</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">22%</td>
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
    <td class="right proximo">62%</td>
    <td class="right">75%</td>
    <td class="right">19</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">83%</td>
    <td class="right">95%</td>
    <td class="right">17</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">78%</td>
    <td class="right">95%</td>
    <td class="right">24</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">45%</td>
    <td class="right">50%</td>
    <td class="right">569</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">93%</td>
    <td class="right">95%</td>
    <td class="right">3</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">2778</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">26%</td>
    <td class="right">57%</td>
    <td class="right">1027</td>
  </tr>
`
