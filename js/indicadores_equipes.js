document.getElementById('atualizacao-indicadores').textContent = '10/06/2024';
const indicadores_equipes = `
<tr>
  <td><b>ACOLHER</b></td>
  <td class="atingiu right">84%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">92%</td>
  <td class="right">1</td>
  <td class="atingiu right">51%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">59</td>
  <td class="razoavel right">38%</td>
  <td class="right">37</td>
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
  <td class="proximo right">45%</td>
  <td class="right">67</td>
  <td class="proximo right">43%</td>
  <td class="right">27</td>
</tr>
<tr>
  <td><b>COMUN. RURAIS</b></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="neutro right">0%</td>
  <td class="right"></td>
  <td class="proximo right">42%</td>
  <td class="right">30</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">41%</td>
  <td class="right">83</td>
  <td class="razoavel right">38%</td>
  <td class="right">26</td>
</tr>
<tr>
  <td><b>ESPERANÇA</b></td>
  <td class="razoavel right">37%</td>
  <td class="right">3</td>
  <td class="razoavel right">62%</td>
  <td class="right">3</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">46%</td>
  <td class="right">25</td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="razoavel right">38%</td>
  <td class="right">99</td>
  <td class="razoavel right">30%</td>
  <td class="right">38</td>
</tr>
<tr>
  <td><b>ESPETACULAR</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">65%</td>
  <td class="right"></td>
  <td class="proximo right">80%</td>
  <td class="right">1</td>
  <td class="proximo right">46%</td>
  <td class="right">74</td>
  <td class="razoavel right">38%</td>
  <td class="right">34</td>
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
  <td class="razoavel right">38%</td>
  <td class="right">105</td>
  <td class="razoavel right">24%</td>
  <td class="right">54</td>
</tr>
<tr>
  <td><b>HUMANIZAR</b></td>
  <td class="atingiu right">90%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">90%</td>
  <td class="right">1</td>
  <td class="proximo right">46%</td>
  <td class="right">24</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">66</td>
  <td class="razoavel right">39%</td>
  <td class="right">28</td>
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
  <td class="right">54</td>
  <td class="proximo right">41%</td>
  <td class="right">28</td>
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
  <td class="right">37</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">43%</td>
  <td class="right">83</td>
  <td class="proximo right">45%</td>
  <td class="right">22</td>
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
  <td class="razoavel right">37%</td>
  <td class="right">102</td>
  <td class="razoavel right">35%</td>
  <td class="right">38</td>
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
  <td class="right">160</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">29%</td>
  <td class="right">256</td>
  <td class="ruim right">23%</td>
  <td class="right">101</td>
</tr>
<tr>
  <td><b>UNIÃO</b></td>
  <td class="proximo right">59%</td>
  <td class="right">4</td>
  <td class="atingiu right">95%</td>
  <td class="right"></td>
  <td class="proximo right">86%</td>
  <td class="right">2</td>
  <td class="atingiu right">50%</td>
  <td class="right"></td>
  <td class="proximo right">91%</td>
  <td class="right">1</td>
  <td class="razoavel right">38%</td>
  <td class="right">99</td>
  <td class="razoavel right">32%</td>
  <td class="right">39</td>
</tr>
<tr>
  <td><b>VIDA</b></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">60%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">45%</td>
  <td class="right">26</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">40%</td>
  <td class="right">109</td>
  <td class="razoavel right">30%</td>
  <td class="right">58</td>
</tr>
<tr>
  <td><b>VIDA E SAÚDE</b></td>
  <td class="ruim right">14%</td>
  <td class="right">5</td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="proximo right">85%</td>
  <td class="right">1</td>
  <td class="atingiu right">54%</td>
  <td class="right"></td>
  <td class="proximo right">88%</td>
  <td class="right">1</td>
  <td class="razoavel right">30%</td>
  <td class="right">170</td>
  <td class="razoavel right">40%</td>
  <td class="right">29</td>
</tr>
<tr>
  <td><b>VIVER</b></td>
  <td class="proximo right">61%</td>
  <td class="right">2</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="proximo right">39%</td>
  <td class="right">91</td>
  <td class="atingiu right">100%</td>
  <td class="right"></td>
  <td class="razoavel right">27%</td>
  <td class="right">197</td>
  <td class="ruim right">18%</td>
  <td class="right">79</td>
</tr>
<tr>
  <td><b>Município</b></td>
  <td class="proximo right">65%</td>
  <td class="right">13</td>
  <td class="proximo right">91%</td>
  <td class="right">5</td>
  <td class="proximo right">89%</td>
  <td class="right">8</td>
  <td class="proximo right">44%</td>
  <td class="right">613</td>
  <td class="proximo right">92%</td>
  <td class="right">5</td>
  <td class="razoavel right">35%</td>
  <td class="right">2154</td>
  <td class="razoavel right">30%</td>
  <td class="right">830</td>
</tr>
`;
document.getElementById('atualizacao-indicadores').textContent = '10/06/2024';
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
    <td class="right atingiu">84%</td>
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
    <td class="right proximo">92%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">59</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">37</td>
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
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">67</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">43%</td>
    <td class="right">57%</td>
    <td class="right">27</td>
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
    <td class="right proximo">42%</td>
    <td class="right">50%</td>
    <td class="right">30</td>
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
    <td class="right">83</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">26</td>
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
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">25</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">99</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">38</td>
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
    <td class="right atingiu">65%</td>
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
    <td class="right proximo">46%</td>
    <td class="right">57%</td>
    <td class="right">74</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">34</td>
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
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">105</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">24%</td>
    <td class="right">57%</td>
    <td class="right">54</td>
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
    <td class="right proximo">90%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">46%</td>
    <td class="right">50%</td>
    <td class="right">24</td>
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
    <td class="right">66</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">39%</td>
    <td class="right">57%</td>
    <td class="right">28</td>
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
    <td class="right">54</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">41%</td>
    <td class="right">57%</td>
    <td class="right">28</td>
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
    <td class="right">37</td>
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
    <td class="right">83</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right proximo">45%</td>
    <td class="right">57%</td>
    <td class="right">22</td>
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
    <td class="right razoavel">37%</td>
    <td class="right">57%</td>
    <td class="right">102</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">38</td>
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
    <td class="right">160</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">29%</td>
    <td class="right">57%</td>
    <td class="right">256</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">23%</td>
    <td class="right">57%</td>
    <td class="right">101</td>
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
    <td class="right proximo">59%</td>
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
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">1</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">38%</td>
    <td class="right">57%</td>
    <td class="right">99</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">32%</td>
    <td class="right">57%</td>
    <td class="right">39</td>
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
    <td class="right proximo">45%</td>
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
    <td class="right razoavel">40%</td>
    <td class="right">57%</td>
    <td class="right">109</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">58</td>
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
    <td class="right proximo">85%</td>
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
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">170</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">40%</td>
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
    <td class="right proximo">61%</td>
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
    <td class="right proximo">39%</td>
    <td class="right">50%</td>
    <td class="right">91</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right atingiu">100%</td>
    <td class="right">95%</td>
    <td class="right"></td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">27%</td>
    <td class="right">57%</td>
    <td class="right">197</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right ruim">18%</td>
    <td class="right">57%</td>
    <td class="right">79</td>
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
    <td class="right proximo">65%</td>
    <td class="right">75%</td>
    <td class="right">13</td>
  </tr>
  <tr>
    <td>Exames de gestantes</td>
    <td class="right proximo">91%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Pré-natal odontológico</td>
    <td class="right proximo">89%</td>
    <td class="right">95%</td>
    <td class="right">8</td>
  </tr>
  <tr>
    <td>Citopatológico</td>
    <td class="right proximo">44%</td>
    <td class="right">50%</td>
    <td class="right">613</td>
  </tr>
  <tr>
    <td>Vacinas</td>
    <td class="right proximo">92%</td>
    <td class="right">95%</td>
    <td class="right">5</td>
  </tr>
  <tr>
    <td>Hipertensos</td>
    <td class="right razoavel">35%</td>
    <td class="right">57%</td>
    <td class="right">2154</td>
  </tr>
  <tr>
    <td>Diabéticos</td>
    <td class="right razoavel">30%</td>
    <td class="right">57%</td>
    <td class="right">830</td>
  </tr>
`
