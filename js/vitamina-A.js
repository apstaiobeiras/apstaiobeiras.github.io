const tabelaVitamina= `<label>Mostrar apenas da equipe
  <select id="equipe">
    <option value="ACOLHER CAMINHO COMUNIDADES-RURAIS ESPERANÇA ESPETACULAR HARMONIA HUMANIZAR LIBERDADE MAIS-SAUDE PROGRESSO RENASCER UNIAO VIDA VIDA-E-SAUDE VIVER">Todas as equipes</option>
    <option value="ACOLHER">ACOLHER</option>
    <option value="CAMINHO">CAMINHO</option>
    <option value="COMUNIDADES-RURAIS">COMUNIDADES RURAIS</option>
    <option value="ESPERANÇA">ESPERANÇA</option>
    <option value="ESPETACULAR">ESPETACULAR</option>
    <option value="HARMONIA">HARMONIA</option>
    <option value="HUMANIZAR">HUMANIZAR</option>
    <option value="LIBERDADE">LIBERDADE</option>
    <option value="MAIS-SAUDE">MAIS SAUDE</option>
    <option value="PROGRESSO">PROGRESSO</option>
    <option value="RENASCER">RENASCER</option>
    <option value="UNIAO">UNIAO</option>
    <option value="VIDA">VIDA</option>
    <option value="VIDA-E-SAUDE">VIDA E SAUDE</option>
    <option value="VIVER">VIVER</option>
  </select>
</label><label>, do ACS 
  <select id="profissional">
    <option value="540 1129 548 493 447 168 78 581 654 1184 615 31 8 196 271 214 433 456 528 513 801 376 1130 1127 170 301 624 621 1149 404 254 1123 317 599 219 525 389 499 223 315 374 743 67 590 1126 550 1128 802 1120 439 497 441 1321 1122 484 287 207 1234 492 515 247 120 1125 804 1134 564 1135 226">Todas os ACS</option>
    <option value="287">ALCY MENDES</option>
    <option value="223">ALICE DOS SANTOS NETA</option>
    <option value="1134">ALLICY SANTOS LEAO</option>
    <option value="214">ALMERINDA DE OLIVEIRA SANTOS</option>
    <option value="1130">ANELISA MARIA DO NASCIMENTO</option>
    <option value="801">ANGELICA PEREIRA DE OLIVEIRA</option>
    <option value="8">CELMA DOS SANTOS</option>
    <option value="301">CERLIOS MARQUES DOS SANTOS</option>
    <option value="1184">CINTIA MELGES DE OLIVEIRA COSTA</option>
    <option value="439">CLECIVANIA RODRIGUES DE OLIVEIRA</option>
    <option value="528">CLEIDE MAIRY TORRES DE SOUZA</option>
    <option value="550">CLEIDIANE DOS SANTOS MEIRELES</option>
    <option value="456">DAIANE ALVES</option>
    <option value="802">DARLENE MARIA PEREIRA</option>
    <option value="315">DAYANE SOARES MENDES SANTOS</option>
    <option value="1129">DENIZ CAROLINE PEREIRA MARTINS</option>
    <option value="207">ELIANA MARIA SANTOS DE OLIVEIRA</option>
    <option value="493">ELIANE PEREIRA FREITAS</option>
    <option value="484">ELISENE DE JESUS SOUZA</option>
    <option value="599">FELIPE LOPES SANTOS</option>
    <option value="548">GEISIANE CARVALHO</option>
    <option value="226">GEISSIANE MARQUES FERREIRA</option>
    <option value="78">GEYSA MINELY SOUZA</option>
    <option value="219">GISELE OLIVEIRA SANTOS</option>
    <option value="170">GISLENE FERREIRA BARBOSA</option>
    <option value="374">GREICIELE DO CARMO DE JESUS</option>
    <option value="743">ILCA ANTUNIS DA SILVA</option>
    <option value="254">IRANI MENDES ALVES OLIVEIRA</option>
    <option value="513">IRIS TANIA TEIXEIRA ALVES</option>
    <option value="621">IVANI MENDES DE DEUS CHAGAS</option>
    <option value="515">IVANILDE MARIA DO NASCIMENTO</option>
    <option value="492">JAAZIEL MOREIRA SANTOS</option>
    <option value="1321">JANIA SANTOS ROCHA RUFINO NEVES</option>
    <option value="581">JESSICA ANA DE JESUS</option>
    <option value="1125">JEYSLANE MENDES DE OLIVEIRA</option>
    <option value="196">JOSELANE MENDES TEIXEIRA</option>
    <option value="1128">JOSSIVANIA D' ANGELIS COSTA</option>
    <option value="433">JULIANA FERREIRA DA SILVA</option>
    <option value="804">JUNIA DOS SANTOS PEREIRA</option>
    <option value="499">JUSSELY SOARES DE SOUZA</option>
    <option value="540">KAMILA MARIA PEREIRA</option>
    <option value="31">KATIANA FERREIRA</option>
    <option value="1127">KEILA DOS SANTOS SOUSA</option>
    <option value="1126">KELY CRISTINA RODRIGUES ARAúJO</option>
    <option value="1122">KEYTIANE DA SILVA</option>
    <option value="654">LAURY MADALENA DA ROCHA</option>
    <option value="590">LEISIANE ALVES RIBEIRO</option>
    <option value="1149">LIVIA KAMILLY SOARES DOS SANTOS</option>
    <option value="1135">LUANA RODRIGUES DE OLIVEIRA</option>
    <option value="389">LUCIENE FERNANDES COSTA</option>
    <option value="67">LUZINETE APARECIDA OLIVEIRA MEIRELES</option>
    <option value="441">MAGDA ROSA DOS SANTOS</option>
    <option value="564">MAISA OLIVEIRA BARBOSA</option>
    <option value="271">MARLANE DA SILVA SANTOS</option>
    <option value="447">MARTA BARBOSA DE OLIVEIRA</option>
    <option value="615">MICAELY PEREIRA ALVES</option>
    <option value="1123">MIKAELY CRISTINA SOUZA</option>
    <option value="1234">MIRIAN DIAS MOREIRA ALVES</option>
    <option value="525">NAGILA MARIA DOS SANTOS</option>
    <option value="317">NORMA TRANCOSO VIANA</option>
    <option value="497">PATRICIA CALDEIRA DOS SANTOS</option>
    <option value="624">PATRICIA ONOFRE DA CRUZ</option>
    <option value="1120">RAYANNE CHAVES MOREIRA</option>
    <option value="247">RONICLEIA DIAS ROCHA</option>
    <option value="120">SHEILA DARLEN MENDES SOUZA</option>
    <option value="404">SOLANGE FRANCISCA DE SOUZA</option>
    <option value="168">THAIS ROSA DE ALMEIDA SILVA</option>
    <option value="376">WANESSA MOREIRA DE SOUZA</option>
  </select>
</label><label>, que 
  <select id="recebeu">
    <option value="SIM NÃO">Independente de ter tomado ou não</option>
    <option value="SIM">Que tomou a vitamina</option>
    <option value="NÃO">Que não tomou a vitamina</option>
    </select>
</label> <button onclick="filtrar();">Filtrar</button><h3> </h3>  <h3> </h3><table>
  <tr class=" Idade Tomou Vitamina A?">
    <th>Prontuário</th>
    <th>Nome da Criança</th>
    <th>Data de Nascimento</th>
    <th>ESF</th>
    <th>Idade</th>
    <th>ACS</th>
    <th>Tomou a vitamina?</th>
  </tr>
  <tr class="NÃO HARMONIA 540">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121137/?workMode=wmBrowse" target=_blank>73130</a></td>
    <td>Adriel Alves Costa</td>
    <td>08/01/2024</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>KAMILA MARIA PEREIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO CAMINHO 1129">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/104155/?workMode=wmBrowse" target=_blank>71001</a></td>
    <td>Alana Dias Silva</td>
    <td>10/09/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">11 meses</td>
    <td>DENIZ CAROLINE PEREIRA MARTINS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO UNIAO 548">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122291/?workMode=wmBrowse" target=_blank>74031</a></td>
    <td>Alice Alana Miranda Jesus</td>
    <td>25/02/2024</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>GEISIANE CARVALHO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 493">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109840/?workMode=wmBrowse" target=_blank>71636</a></td>
    <td>Alice Marques Araujo</td>
    <td>17/10/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ELIANE PEREIRA FREITAS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO UNIAO 447">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121335/?workMode=wmBrowse" target=_blank>73266</a></td>
    <td>Allana Alves Dias</td>
    <td>16/01/2024</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>MARTA BARBOSA DE OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 168">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/117222/?workMode=wmBrowse" target=_blank>72366</a></td>
    <td>Amaya Mendes Araújo</td>
    <td>24/11/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">9 meses</td>
    <td>THAIS ROSA DE ALMEIDA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO RENASCER 78">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121536/?workMode=wmBrowse" target=_blank>73446</a></td>
    <td>Ana Liz Dos Santos</td>
    <td>25/01/2024</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>GEYSA MINELY SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109139/?workMode=wmBrowse" target=_blank>71548</a></td>
    <td>Analiz Jorge Lacerda</td>
    <td>11/10/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ESPERANÇA 654">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/105594/?workMode=wmBrowse" target=_blank>71153</a></td>
    <td>Anallú Saraiva Leal</td>
    <td>18/09/2023</td>
    <td>ESPERANÇA</td>
    <td  style="text-align: center;">11 meses</td>
    <td>LAURY MADALENA DA ROCHA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 1184">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/119970/?workMode=wmBrowse" target=_blank>72619</a></td>
    <td>Andre Lucas Ferreira de Jesus</td>
    <td>07/12/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">8 meses</td>
    <td>CINTIA MELGES DE OLIVEIRA COSTA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIVER 615">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103439/?workMode=wmBrowse" target=_blank>70930</a></td>
    <td>Anna Liz Santos Freitas</td>
    <td>09/09/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">11 meses</td>
    <td>MICAELY PEREIRA ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM VIDA 31">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121893/?workMode=wmBrowse" target=_blank>73753</a></td>
    <td>Anthony Gael Souza Gomes</td>
    <td>06/02/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">6 meses</td>
    <td>KATIANA FERREIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM LIBERDADE 8">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/107920/?workMode=wmBrowse" target=_blank>71392</a></td>
    <td>Apollo Rodrigues Sanches</td>
    <td>01/10/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CELMA DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIVER 615">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120824/?workMode=wmBrowse" target=_blank>72942</a></td>
    <td>Arthur Aguiar Soares</td>
    <td>25/12/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>MICAELY PEREIRA ALVES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 168">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121907/?workMode=wmBrowse" target=_blank>73767</a></td>
    <td>Aruna Pereira Dos Santos</td>
    <td>13/02/2024</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">6 meses</td>
    <td>THAIS ROSA DE ALMEIDA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO RENASCER 196">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120987/?workMode=wmBrowse" target=_blank>73003</a></td>
    <td>Augusto Lopes Miranda</td>
    <td>14/12/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>JOSELANE MENDES TEIXEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 493">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121637/?workMode=wmBrowse" target=_blank>73532</a></td>
    <td>Aurora Andrade Abreu</td>
    <td>27/01/2024</td>
    <td>VIVER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>ELIANE PEREIRA FREITAS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HARMONIA 271">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121257/?workMode=wmBrowse" target=_blank>73197</a></td>
    <td>Aurora Godinho Cardoso</td>
    <td>11/01/2024</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>MARLANE DA SILVA SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ACOLHER 214">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120781/?workMode=wmBrowse" target=_blank>72932</a></td>
    <td>Aurora Oliveira Viana</td>
    <td>27/12/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>ALMERINDA DE OLIVEIRA SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ACOLHER 168">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/119360/?workMode=wmBrowse" target=_blank>72551</a></td>
    <td>Aurora Rodrigues do Nascimento</td>
    <td>03/12/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>THAIS ROSA DE ALMEIDA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM HUMANIZAR 433">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109911/?workMode=wmBrowse" target=_blank>71644</a></td>
    <td>Ayla Ferreira Santos</td>
    <td>11/10/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JULIANA FERREIRA DA SILVA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO LIBERDADE 456">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120543/?workMode=wmBrowse" target=_blank>72856</a></td>
    <td>Ayla Santos Rocha</td>
    <td>22/12/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">8 meses</td>
    <td>DAIANE ALVES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIVER 528">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103475/?workMode=wmBrowse" target=_blank>70934</a></td>
    <td>Benicio Alves de Oliveira</td>
    <td>07/09/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">11 meses</td>
    <td>CLEIDE MAIRY TORRES DE SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM HARMONIA 540">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120055/?workMode=wmBrowse" target=_blank>72665</a></td>
    <td>Benicio Manoel Oliveira Dias</td>
    <td>07/12/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">8 meses</td>
    <td>KAMILA MARIA PEREIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM UNIAO 548">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121169/?workMode=wmBrowse" target=_blank>73156</a></td>
    <td>Benicio Silva Lopes</td>
    <td>04/12/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>GEISIANE CARVALHO</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA 31">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/105667/?workMode=wmBrowse" target=_blank>71162</a></td>
    <td>Benício Emanuel Barbosa Ribeiro</td>
    <td>11/09/2023</td>
    <td>VIDA</td>
    <td  style="text-align: center;">11 meses</td>
    <td>KATIANA FERREIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO CAMINHO 1129">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121905/?workMode=wmBrowse" target=_blank>73765</a></td>
    <td>Bernardo Matos Lima</td>
    <td>07/02/2024</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>DENIZ CAROLINE PEREIRA MARTINS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 513">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/117499/?workMode=wmBrowse" target=_blank>72388</a></td>
    <td>Brayan Lucas Oliveira Moreira</td>
    <td>12/11/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">9 meses</td>
    <td>IRIS TANIA TEIXEIRA ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 801">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120512/?workMode=wmBrowse" target=_blank>72827</a></td>
    <td>Brayan Rafhaell Campos Rocha</td>
    <td>22/12/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>ANGELICA PEREIRA DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121543/?workMode=wmBrowse" target=_blank>73448</a></td>
    <td>Bruno Marques Mendes</td>
    <td>18/01/2024</td>
    <td>VIVER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HARMONIA 376">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120342/?workMode=wmBrowse" target=_blank>72786</a></td>
    <td>Bryan Santos Oliveira</td>
    <td>17/12/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">8 meses</td>
    <td>WANESSA MOREIRA DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO PROGRESSO 1130">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122503/?workMode=wmBrowse" target=_blank>74211</a></td>
    <td>Caleb Chaves Matos</td>
    <td>25/02/2024</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>ANELISA MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM PROGRESSO 1130">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110224/?workMode=wmBrowse" target=_blank>71697</a></td>
    <td>Carlos Gael Alves Araújo</td>
    <td>19/10/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ANELISA MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO CAMINHO 1127">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121150/?workMode=wmBrowse" target=_blank>73141</a></td>
    <td>Cecilia Alves Santos</td>
    <td>09/01/2024</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>KEILA DOS SANTOS SOUSA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIDA 170">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108377/?workMode=wmBrowse" target=_blank>71438</a></td>
    <td>Celine Cardoso Silva</td>
    <td>03/10/2023</td>
    <td>VIDA</td>
    <td  style="text-align: center;">10 meses</td>
    <td>GISLENE FERREIRA BARBOSA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM UNIAO 301">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114152/?workMode=wmBrowse" target=_blank>72086</a></td>
    <td>Clarice Mendes Nogueira</td>
    <td>08/11/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>CERLIOS MARQUES DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA 170">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121789/?workMode=wmBrowse" target=_blank>73658</a></td>
    <td>Davi Lima Cruz</td>
    <td>05/02/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">6 meses</td>
    <td>GISLENE FERREIRA BARBOSA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO RENASCER 624">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/118895/?workMode=wmBrowse" target=_blank>72506</a></td>
    <td>Davi Mendes Oliveira</td>
    <td>01/12/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>PATRICIA ONOFRE DA CRUZ</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIDA 621">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121646/?workMode=wmBrowse" target=_blank>73541</a></td>
    <td>Diana Antonelli Dias Mendes</td>
    <td>09/01/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>IVANI MENDES DE DEUS CHAGAS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ESPERANÇA 1149">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120645/?workMode=wmBrowse" target=_blank>72894</a></td>
    <td>Diana Cardoso Reis</td>
    <td>07/12/2023</td>
    <td>ESPERANÇA</td>
    <td  style="text-align: center;">8 meses</td>
    <td>LIVIA KAMILLY SOARES DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIDA 404">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121058/?workMode=wmBrowse" target=_blank>73055</a></td>
    <td>Elisa Freitas Pires</td>
    <td>04/01/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>SOLANGE FRANCISCA DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO PROGRESSO 254">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120518/?workMode=wmBrowse" target=_blank>72833</a></td>
    <td>Elisa Oliveira Santos</td>
    <td>21/12/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>IRANI MENDES ALVES OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIDA 31">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/105842/?workMode=wmBrowse" target=_blank>71177</a></td>
    <td>Elloá Silva Viana</td>
    <td>18/09/2023</td>
    <td>VIDA</td>
    <td  style="text-align: center;">11 meses</td>
    <td>KATIANA FERREIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103585/?workMode=wmBrowse" target=_blank>70948</a></td>
    <td>Eloisa Torres Lima</td>
    <td>06/09/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">11 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ESPETACULAR 1123">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112114/?workMode=wmBrowse" target=_blank>71896</a></td>
    <td>Emanuel Dos Santos Costa</td>
    <td>02/11/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">9 meses</td>
    <td>MIKAELY CRISTINA SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO PROGRESSO 254">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/115293/?workMode=wmBrowse" target=_blank>72198</a></td>
    <td>Emanuelly Farias Martins</td>
    <td>13/11/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>IRANI MENDES ALVES OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 317">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121377/?workMode=wmBrowse" target=_blank>73304</a></td>
    <td>Estella Mendes Santos</td>
    <td>25/12/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">8 meses</td>
    <td>NORMA TRANCOSO VIANA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM PROGRESSO 599">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121604/?workMode=wmBrowse" target=_blank>73500</a></td>
    <td>Estevao Rodrigues Greco</td>
    <td>27/01/2024</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>FELIPE LOPES SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO PROGRESSO 219">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120180/?workMode=wmBrowse" target=_blank>72721</a></td>
    <td>Estêvão Oliveira Nascimento</td>
    <td>12/12/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>GISELE OLIVEIRA SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIDA-E-SAUDE 525">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122324/?workMode=wmBrowse" target=_blank>74056</a></td>
    <td>Felipe Moreira Selis</td>
    <td>23/02/2024</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">6 meses</td>
    <td>NAGILA MARIA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 1184">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122021/?workMode=wmBrowse" target=_blank>73843</a></td>
    <td>Fernanda Fernandes de Almeida</td>
    <td>16/02/2024</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">6 meses</td>
    <td>CINTIA MELGES DE OLIVEIRA COSTA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIDA-E-SAUDE 389">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121483/?workMode=wmBrowse" target=_blank>73398</a></td>
    <td>Flávio Arthur de Oliveira</td>
    <td>23/01/2024</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">7 meses</td>
    <td>LUCIENE FERNANDES COSTA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ESPERANÇA 1149">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/116591/?workMode=wmBrowse" target=_blank>72314</a></td>
    <td>Francisco Miranda Cruz</td>
    <td>21/11/2023</td>
    <td>ESPERANÇA</td>
    <td  style="text-align: center;">9 meses</td>
    <td>LIVIA KAMILLY SOARES DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO UNIAO 548">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/115332/?workMode=wmBrowse" target=_blank>72205</a></td>
    <td>Gabriel Batista Dos Anjos</td>
    <td>15/11/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>GEISIANE CARVALHO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM LIBERDADE 8">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/111163/?workMode=wmBrowse" target=_blank>71806</a></td>
    <td>Gabriel Esteves Rodrigues</td>
    <td>24/10/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CELMA DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ACOLHER 499">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/104842/?workMode=wmBrowse" target=_blank>71076</a></td>
    <td>Gabriel Jose Pereira</td>
    <td>13/09/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">11 meses</td>
    <td>JUSSELY SOARES DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM UNIAO 223">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108799/?workMode=wmBrowse" target=_blank>71500</a></td>
    <td>Gabriela Almeida Silva</td>
    <td>06/10/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ALICE DOS SANTOS NETA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO PROGRESSO 315">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121073/?workMode=wmBrowse" target=_blank>73067</a></td>
    <td>Gael Alves Rodrigues</td>
    <td>05/01/2024</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>DAYANE SOARES MENDES SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ACOLHER 499">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121553/?workMode=wmBrowse" target=_blank>73455</a></td>
    <td>Heitor Amos Dos Santos</td>
    <td>27/01/2024</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>JUSSELY SOARES DE SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 374">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121421/?workMode=wmBrowse" target=_blank>73344</a></td>
    <td>Heitor Barbosa Silva</td>
    <td>19/01/2024</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>GREICIELE DO CARMO DE JESUS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108519/?workMode=wmBrowse" target=_blank>71450</a></td>
    <td>Heitor Bessa Rodrigues</td>
    <td>04/10/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA 743">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121828/?workMode=wmBrowse" target=_blank>73694</a></td>
    <td>Heitor Cardoso Miranda</td>
    <td>06/02/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">6 meses</td>
    <td>ILCA ANTUNIS DA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121846/?workMode=wmBrowse" target=_blank>73710</a></td>
    <td>Heitor Dias Pereira</td>
    <td>05/02/2024</td>
    <td>VIVER</td>
    <td  style="text-align: center;">6 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 528">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120397/?workMode=wmBrowse" target=_blank>72809</a></td>
    <td>Heitor Gabriel Miranda Rodrigues</td>
    <td>14/12/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>CLEIDE MAIRY TORRES DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO RENASCER 67">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120928/?workMode=wmBrowse" target=_blank>72977</a></td>
    <td>Helena Oliveira Andrade</td>
    <td>21/12/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>LUZINETE APARECIDA OLIVEIRA MEIRELES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 590">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121655/?workMode=wmBrowse" target=_blank>73550</a></td>
    <td>Heloisa Ferreira Souza</td>
    <td>30/01/2024</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">7 meses</td>
    <td>LEISIANE ALVES RIBEIRO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM LIBERDADE 456">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114574/?workMode=wmBrowse" target=_blank>72121</a></td>
    <td>Heloisa Santos Viana</td>
    <td>01/11/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">9 meses</td>
    <td>DAIANE ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA-E-SAUDE 389">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122356/?workMode=wmBrowse" target=_blank>74085</a></td>
    <td>Heloísa Santos Pereira</td>
    <td>27/02/2024</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">6 meses</td>
    <td>LUCIENE FERNANDES COSTA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM PROGRESSO 219">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/106422/?workMode=wmBrowse" target=_blank>71244</a></td>
    <td>Henri Ferreira Marques</td>
    <td>20/09/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">11 meses</td>
    <td>GISELE OLIVEIRA SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM VIDA 170">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120479/?workMode=wmBrowse" target=_blank>72826</a></td>
    <td>Henry Gustavo de Jesus Cruz</td>
    <td>19/12/2023</td>
    <td>VIDA</td>
    <td  style="text-align: center;">8 meses</td>
    <td>GISLENE FERREIRA BARBOSA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA 621">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122114/?workMode=wmBrowse" target=_blank>73924</a></td>
    <td>Henry Martins Oliveira</td>
    <td>28/01/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>IVANI MENDES DE DEUS CHAGAS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 1184">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108922/?workMode=wmBrowse" target=_blank>71527</a></td>
    <td>Iris Valentine Rodrigues Pereira</td>
    <td>10/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CINTIA MELGES DE OLIVEIRA COSTA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM HUMANIZAR 1126">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/107194/?workMode=wmBrowse" target=_blank>71309</a></td>
    <td>Isabella Ramos da Silva</td>
    <td>24/09/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">11 meses</td>
    <td>KELY CRISTINA RODRIGUES ARAúJO</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM LIBERDADE 8">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109917/?workMode=wmBrowse" target=_blank>71649</a></td>
    <td>Isadora Gabrielly Souza de Oliveira</td>
    <td>10/10/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CELMA DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM UNIAO 301">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120538/?workMode=wmBrowse" target=_blank>72851</a></td>
    <td>Jade Almeida Campos</td>
    <td>22/12/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>CERLIOS MARQUES DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 550">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108884/?workMode=wmBrowse" target=_blank>71521</a></td>
    <td>Jade Ferreira Magalhaes</td>
    <td>09/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CLEIDIANE DOS SANTOS MEIRELES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM CAMINHO 1128">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120269/?workMode=wmBrowse" target=_blank>72777</a></td>
    <td>Jade Santos Ferreira</td>
    <td>17/12/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">8 meses</td>
    <td>JOSSIVANIA D' ANGELIS COSTA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO LIBERDADE 456">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120545/?workMode=wmBrowse" target=_blank>72858</a></td>
    <td>Jade Sophya Nunes Dos Santos</td>
    <td>22/12/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">8 meses</td>
    <td>DAIANE ALVES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO PROGRESSO 1130">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/111019/?workMode=wmBrowse" target=_blank>71790</a></td>
    <td>Joabe Barbosa Penha</td>
    <td>22/10/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ANELISA MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ESPETACULAR 1123">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122099/?workMode=wmBrowse" target=_blank>73910</a></td>
    <td>Joao Miguel Pereira Nascimento</td>
    <td>20/02/2024</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">6 meses</td>
    <td>MIKAELY CRISTINA SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM HUMANIZAR 802">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108833/?workMode=wmBrowse" target=_blank>71503</a></td>
    <td>Joquebede Gomes Pereira</td>
    <td>08/10/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">10 meses</td>
    <td>DARLENE MARIA PEREIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 1129">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114608/?workMode=wmBrowse" target=_blank>72123</a></td>
    <td>Jose Lopes Barbosa</td>
    <td>07/11/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>DENIZ CAROLINE PEREIRA MARTINS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ESPERANÇA 1120">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/nil/?workMode=wmBrowse" target=_blank>75693</a></td>
    <td>Jose Pedro Souza Ribeiro</td>
    <td>23/01/2024</td>
    <td>ESPERANÇA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>RAYANNE CHAVES MOREIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM PROGRESSO 254">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/115620/?workMode=wmBrowse" target=_blank>72236</a></td>
    <td>Jose Rafael Neres de Almeida</td>
    <td>15/11/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>IRANI MENDES ALVES OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA-E-SAUDE 439">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120536/?workMode=wmBrowse" target=_blank>72850</a></td>
    <td>João Miguel Rodrigues Oliveira</td>
    <td>23/12/2023</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">8 meses</td>
    <td>CLECIVANIA RODRIGUES DE OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ESPERANÇA 1149">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/117892/?workMode=wmBrowse" target=_blank>72429</a></td>
    <td>João Miguel Teixeira Chaves</td>
    <td>22/11/2023</td>
    <td>ESPERANÇA</td>
    <td  style="text-align: center;">9 meses</td>
    <td>LIVIA KAMILLY SOARES DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO RENASCER 497">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108376/?workMode=wmBrowse" target=_blank>71437</a></td>
    <td>Julia Azevedo Miranda</td>
    <td>04/10/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>PATRICIA CALDEIRA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 441">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121173/?workMode=wmBrowse" target=_blank>73160</a></td>
    <td>Juliana Mendes Correa</td>
    <td>10/01/2024</td>
    <td>VIVER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>MAGDA ROSA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM HUMANIZAR 802">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/116165/?workMode=wmBrowse" target=_blank>72270</a></td>
    <td>Kevin Rodrigues de Jesus</td>
    <td>11/11/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">9 meses</td>
    <td>DARLENE MARIA PEREIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM COMUNIDADES-RURAIS 1321">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112891/?workMode=wmBrowse" target=_blank>71972</a></td>
    <td>Lara Beatriz Alves Gomes</td>
    <td>05/11/2023</td>
    <td>COMUNIDADES RURAIS</td>
    <td  style="text-align: center;">9 meses</td>
    <td>JANIA SANTOS ROCHA RUFINO NEVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 1127">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110725/?workMode=wmBrowse" target=_blank>71751</a></td>
    <td>Lauane Esther Souza </td>
    <td>22/10/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>KEILA DOS SANTOS SOUSA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 590">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120098/?workMode=wmBrowse" target=_blank>72676</a></td>
    <td>Laura Pereira Meireles</td>
    <td>28/11/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">9 meses</td>
    <td>LEISIANE ALVES RIBEIRO</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM ESPETACULAR 1122">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/106944/?workMode=wmBrowse" target=_blank>71284</a></td>
    <td>Laura Saraiva Freitas</td>
    <td>26/09/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">11 meses</td>
    <td>KEYTIANE DA SILVA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM VIVER 441">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120544/?workMode=wmBrowse" target=_blank>72857</a></td>
    <td>Lavinia Alves Miranda</td>
    <td>23/12/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>MAGDA ROSA DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO VIDA 743">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121557/?workMode=wmBrowse" target=_blank>73459</a></td>
    <td>Liz Moura Santana</td>
    <td>23/01/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>ILCA ANTUNIS DA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 484">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121505/?workMode=wmBrowse" target=_blank>73417</a></td>
    <td>Liz Sofia Pereira da Rocha</td>
    <td>17/01/2024</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">7 meses</td>
    <td>ELISENE DE JESUS SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ESPETACULAR 287">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120515/?workMode=wmBrowse" target=_blank>72830</a></td>
    <td>Lorrany Dias Dos Santos</td>
    <td>22/12/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">8 meses</td>
    <td>ALCY MENDES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO LIBERDADE 8">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122160/?workMode=wmBrowse" target=_blank>73965</a></td>
    <td>Lua Manuela Freitas Oliveira</td>
    <td>20/02/2024</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">6 meses</td>
    <td>CELMA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIDA-E-SAUDE 525">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121508/?workMode=wmBrowse" target=_blank>73420</a></td>
    <td>Lua Nogueira Lopes</td>
    <td>25/01/2024</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">7 meses</td>
    <td>NAGILA MARIA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 581">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108832/?workMode=wmBrowse" target=_blank>71502</a></td>
    <td>Luan Farias Mendes</td>
    <td>09/10/2023</td>
    <td>VIVER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JESSICA ANA DE JESUS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ACOLHER 214">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112222/?workMode=wmBrowse" target=_blank>71910</a></td>
    <td>Luiz Otavio Almeida Santos</td>
    <td>03/11/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">9 meses</td>
    <td>ALMERINDA DE OLIVEIRA SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 1127">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/115331/?workMode=wmBrowse" target=_blank>72204</a></td>
    <td>Luiza Gabrielly Jesus de Araújo</td>
    <td>15/11/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>KEILA DOS SANTOS SOUSA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM VIDA-E-SAUDE 207">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121861/?workMode=wmBrowse" target=_blank>73725</a></td>
    <td>Luiza Victoria Rodrigues de Oliveira</td>
    <td>21/11/2023</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">9 meses</td>
    <td>ELIANA MARIA SANTOS DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ESPETACULAR 1234">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108876/?workMode=wmBrowse" target=_blank>71513</a></td>
    <td>Maite Sofia Soares Santos</td>
    <td>07/10/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">10 meses</td>
    <td>MIRIAN DIAS MOREIRA ALVES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO COMUNIDADES-RURAIS 492">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122449/?workMode=wmBrowse" target=_blank>74172</a></td>
    <td>Manuella Viana Araujo</td>
    <td>19/02/2024</td>
    <td>COMUNIDADES RURAIS</td>
    <td  style="text-align: center;">6 meses</td>
    <td>JAAZIEL MOREIRA SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIDA 170">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/116657/?workMode=wmBrowse" target=_blank>72316</a></td>
    <td>Maria Alice Pereira Dos Santos</td>
    <td>20/11/2023</td>
    <td>VIDA</td>
    <td  style="text-align: center;">9 meses</td>
    <td>GISLENE FERREIRA BARBOSA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 550">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121178/?workMode=wmBrowse" target=_blank>73165</a></td>
    <td>Maria Alice Santana Sousa</td>
    <td>09/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CLEIDIANE DOS SANTOS MEIRELES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 168">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120392/?workMode=wmBrowse" target=_blank>72804</a></td>
    <td>Maria Alves Costa</td>
    <td>09/12/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>THAIS ROSA DE ALMEIDA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 515">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103215/?workMode=wmBrowse" target=_blank>70902</a></td>
    <td>Maria Antonella Silveira Correa</td>
    <td>04/09/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">11 meses</td>
    <td>IVANILDE MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ACOLHER 499">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110190/?workMode=wmBrowse" target=_blank>71695</a></td>
    <td>Maria Cecilia Rodrigues de Oliveira</td>
    <td>19/10/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JUSSELY SOARES DE SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM RENASCER 247">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114572/?workMode=wmBrowse" target=_blank>72120</a></td>
    <td>Maria Clara da Silva Rocha</td>
    <td>12/11/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">9 meses</td>
    <td>RONICLEIA DIAS ROCHA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO CAMINHO 1129">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121809/?workMode=wmBrowse" target=_blank>73677</a></td>
    <td>Maria Eloisa Viana Bergamin</td>
    <td>05/02/2024</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>DENIZ CAROLINE PEREIRA MARTINS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM UNIAO 301">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/105914/?workMode=wmBrowse" target=_blank>71185</a></td>
    <td>Maria Fernanda Dos Santos Oliveira</td>
    <td>19/09/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">11 meses</td>
    <td>CERLIOS MARQUES DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM CAMINHO 1129">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121293/?workMode=wmBrowse" target=_blank>73227</a></td>
    <td>Maria Isis Souza Oliveira</td>
    <td>14/01/2024</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">7 meses</td>
    <td>DENIZ CAROLINE PEREIRA MARTINS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ESPETACULAR 120">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121172/?workMode=wmBrowse" target=_blank>73159</a></td>
    <td>Maria Jade Rodrigues Silva</td>
    <td>09/01/2024</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">7 meses</td>
    <td>SHEILA DARLEN MENDES SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM CAMINHO 1128">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/116099/?workMode=wmBrowse" target=_blank>72268</a></td>
    <td>Maria Julia Celio Almeida</td>
    <td>18/11/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>JOSSIVANIA D' ANGELIS COSTA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 1184">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/104953/?workMode=wmBrowse" target=_blank>71090</a></td>
    <td>Maria Julia de Sousa Teixeira</td>
    <td>16/09/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">11 meses</td>
    <td>CINTIA MELGES DE OLIVEIRA COSTA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO UNIAO 447">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121732/?workMode=wmBrowse" target=_blank>73610</a></td>
    <td>Maria Laura Jesus Pimentel</td>
    <td>01/02/2024</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>MARTA BARBOSA DE OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM RENASCER 78">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121345/?workMode=wmBrowse" target=_blank>73275</a></td>
    <td>Maria Liz Ferreira Souza</td>
    <td>16/01/2024</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>GEYSA MINELY SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO HARMONIA 271">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121690/?workMode=wmBrowse" target=_blank>73577</a></td>
    <td>Matheus Magalhaes Oliveira</td>
    <td>24/01/2024</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>MARLANE DA SILVA SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 515">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121766/?workMode=wmBrowse" target=_blank>73637</a></td>
    <td>Maya Ribeiro Costa</td>
    <td>03/02/2024</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">6 meses</td>
    <td>IVANILDE MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM HARMONIA 1125">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120174/?workMode=wmBrowse" target=_blank>72715</a></td>
    <td>Maya Silveira Costa</td>
    <td>23/11/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">9 meses</td>
    <td>JEYSLANE MENDES DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM UNIAO 301">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112079/?workMode=wmBrowse" target=_blank>71893</a></td>
    <td>Micaelly de Almeida Oliveira</td>
    <td>31/10/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CERLIOS MARQUES DOS SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO PROGRESSO 254">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121939/?workMode=wmBrowse" target=_blank>73797</a></td>
    <td>Miguel Alves de Almeida Lucas</td>
    <td>06/02/2024</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>IRANI MENDES ALVES OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 550">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/111750/?workMode=wmBrowse" target=_blank>71854</a></td>
    <td>Miguel Barros Gomes</td>
    <td>25/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CLEIDIANE DOS SANTOS MEIRELES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM PROGRESSO 254">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109031/?workMode=wmBrowse" target=_blank>71539</a></td>
    <td>Miguel Messias Ramos</td>
    <td>12/10/2023</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>IRANI MENDES ALVES OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO COMUNIDADES-RURAIS 804">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121848/?workMode=wmBrowse" target=_blank>73712</a></td>
    <td>Mávia Nicoly Santos</td>
    <td>06/02/2024</td>
    <td>COMUNIDADES RURAIS</td>
    <td  style="text-align: center;">6 meses</td>
    <td>JUNIA DOS SANTOS PEREIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 317">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122009/?workMode=wmBrowse" target=_blank>73831</a></td>
    <td>Nicolly Rodrigues Brito</td>
    <td>11/02/2024</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">6 meses</td>
    <td>NORMA TRANCOSO VIANA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ESPETACULAR 1234">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110805/?workMode=wmBrowse" target=_blank>71767</a></td>
    <td>Noah Araujo Dos Santos</td>
    <td>15/09/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">11 meses</td>
    <td>MIRIAN DIAS MOREIRA ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM HARMONIA 271">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103437/?workMode=wmBrowse" target=_blank>70928</a></td>
    <td>Noah Harrison Santos Barbosa</td>
    <td>08/09/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">11 meses</td>
    <td>MARLANE DA SILVA SANTOS</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO RENASCER 1134">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114159/?workMode=wmBrowse" target=_blank>72092</a></td>
    <td>Noah Ryan Pereira Soares</td>
    <td>01/11/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">9 meses</td>
    <td>ALLICY SANTOS LEAO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO PROGRESSO 1130">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122419/?workMode=wmBrowse" target=_blank>74144</a></td>
    <td>Noah de Souza Freitas</td>
    <td>29/02/2024</td>
    <td>PROGRESSO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>ANELISA MARIA DO NASCIMENTO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO MAIS-SAUDE 550">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/119912/?workMode=wmBrowse" target=_blank>72593</a></td>
    <td>Paulo Lucca Santos Silva</td>
    <td>04/12/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">8 meses</td>
    <td>CLEIDIANE DOS SANTOS MEIRELES</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIVER 528">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/121405/?workMode=wmBrowse" target=_blank>73330</a></td>
    <td>Pedro Augusto Almeida Ferreira</td>
    <td>20/01/2024</td>
    <td>VIVER</td>
    <td  style="text-align: center;">7 meses</td>
    <td>CLEIDE MAIRY TORRES DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 513">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112748/?workMode=wmBrowse" target=_blank>71956</a></td>
    <td>Pedro Noah da Silva Gomes</td>
    <td>25/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>IRIS TANIA TEIXEIRA ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM MAIS-SAUDE 1184">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112223/?workMode=wmBrowse" target=_blank>71911</a></td>
    <td>Perola Sophia Alves Costa</td>
    <td>31/10/2023</td>
    <td>MAIS SAUDE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>CINTIA MELGES DE OLIVEIRA COSTA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="SIM LIBERDADE 456">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/108375/?workMode=wmBrowse" target=_blank>71436</a></td>
    <td>Rafael Paulo de Souza</td>
    <td>04/10/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>DAIANE ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO RENASCER 497">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/118826/?workMode=wmBrowse" target=_blank>72501</a></td>
    <td>Rafael Silva Carneiro</td>
    <td>14/11/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">9 meses</td>
    <td>PATRICIA CALDEIRA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM HUMANIZAR 317">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/103808/?workMode=wmBrowse" target=_blank>70976</a></td>
    <td>Raryanne Rodrigues da Silva</td>
    <td>05/09/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">11 meses</td>
    <td>NORMA TRANCOSO VIANA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO UNIAO 564">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122183/?workMode=wmBrowse" target=_blank>73988</a></td>
    <td>Raul Manoel Souza Avangelo</td>
    <td>22/02/2024</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>MAISA OLIVEIRA BARBOSA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO VIDA 743">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122015/?workMode=wmBrowse" target=_blank>73837</a></td>
    <td>Ravi Lucca Soares da Silva</td>
    <td>29/01/2024</td>
    <td>VIDA</td>
    <td  style="text-align: center;">7 meses</td>
    <td>ILCA ANTUNIS DA SILVA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 484">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109352/?workMode=wmBrowse" target=_blank>71570</a></td>
    <td>Ravi Pierre Santos</td>
    <td>07/10/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ELISENE DE JESUS SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 484">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122409/?workMode=wmBrowse" target=_blank>74135</a></td>
    <td>Ravi Pierre Souza Chaves</td>
    <td>26/02/2024</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">6 meses</td>
    <td>ELISENE DE JESUS SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HUMANIZAR 1126">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109962/?workMode=wmBrowse" target=_blank>71661</a></td>
    <td>Ravi Souza Dias</td>
    <td>10/10/2023</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">10 meses</td>
    <td>KELY CRISTINA RODRIGUES ARAúJO</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO UNIAO 223">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/109702/?workMode=wmBrowse" target=_blank>71624</a></td>
    <td>Ricardo Daniel Miranda Celio</td>
    <td>10/10/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ALICE DOS SANTOS NETA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM UNIAO 223">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114780/?workMode=wmBrowse" target=_blank>72135</a></td>
    <td>Ruan Sousa Almeida</td>
    <td>06/11/2023</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">9 meses</td>
    <td>ALICE DOS SANTOS NETA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO RENASCER 497">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110727/?workMode=wmBrowse" target=_blank>71753</a></td>
    <td>Sara Mesquita Oliva Campos</td>
    <td>08/10/2023</td>
    <td>RENASCER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>PATRICIA CALDEIRA DOS SANTOS</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM ESPETACULAR 120">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/114160/?workMode=wmBrowse" target=_blank>72093</a></td>
    <td>Saullo Machado de Oliveira</td>
    <td>08/11/2023</td>
    <td>ESPETACULAR</td>
    <td  style="text-align: center;">9 meses</td>
    <td>SHEILA DARLEN MENDES SOUZA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO HARMONIA 1125">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/107368/?workMode=wmBrowse" target=_blank>71326</a></td>
    <td>Saulo Caroba Oliveira</td>
    <td>27/09/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">11 meses</td>
    <td>JEYSLANE MENDES DE OLIVEIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM LIBERDADE 456">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/111058/?workMode=wmBrowse" target=_blank>71797</a></td>
    <td>Sophia Alice Pereira da Costa</td>
    <td>24/10/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">10 meses</td>
    <td>DAIANE ALVES</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO ACOLHER 499">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120307/?workMode=wmBrowse" target=_blank>72783</a></td>
    <td>Stella Moura Sousa</td>
    <td>17/12/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">8 meses</td>
    <td>JUSSELY SOARES DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM LIBERDADE 1135">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/115444/?workMode=wmBrowse" target=_blank>72220</a></td>
    <td>Tayla Melo Sales</td>
    <td>14/11/2023</td>
    <td>LIBERDADE</td>
    <td  style="text-align: center;">9 meses</td>
    <td>LUANA RODRIGUES DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO UNIAO 564">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122193/?workMode=wmBrowse" target=_blank>73998</a></td>
    <td>Theo Ferreira Alves</td>
    <td>23/02/2024</td>
    <td>UNIAO</td>
    <td  style="text-align: center;">6 meses</td>
    <td>MAISA OLIVEIRA BARBOSA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO HARMONIA 226">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/112362/?workMode=wmBrowse" target=_blank>71923</a></td>
    <td>Théo Bessa Moreira</td>
    <td>01/11/2023</td>
    <td>HARMONIA</td>
    <td  style="text-align: center;">9 meses</td>
    <td>GEISSIANE MARQUES FERREIRA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="NÃO ACOLHER 499">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/110912/?workMode=wmBrowse" target=_blank>71779</a></td>
    <td>Yan Liberato Mendes</td>
    <td>24/10/2023</td>
    <td>ACOLHER</td>
    <td  style="text-align: center;">10 meses</td>
    <td>JUSSELY SOARES DE SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM CAMINHO 801">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/111716/?workMode=wmBrowse" target=_blank>71852</a></td>
    <td>Yara Rodrigues Rocha </td>
    <td>26/10/2023</td>
    <td>CAMINHO</td>
    <td  style="text-align: center;">10 meses</td>
    <td>ANGELICA PEREIRA DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
  <tr class="NÃO HUMANIZAR 484">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/122010/?workMode=wmBrowse" target=_blank>73832</a></td>
    <td>Yasmin Souza Alves</td>
    <td>04/02/2024</td>
    <td>HUMANIZAR</td>
    <td  style="text-align: center;">6 meses</td>
    <td>ELISENE DE JESUS SOUZA</td>
    <td style="text-align: center;">🔴</td>
  </tr>
  <tr class="SIM VIDA-E-SAUDE 207">
    <td><a href="https://www.taiobeiras-mg.vivver.com/amb/paciente/120970/?workMode=wmBrowse" target=_blank>72987</a></td>
    <td>Ãnthony Gabriel Ferreira Gomes</td>
    <td>01/01/2024</td>
    <td>VIDA E SAUDE</td>
    <td  style="text-align: center;">7 meses</td>
    <td>ELIANA MARIA SANTOS DE OLIVEIRA</td>
    <td style="text-align: center;">🟢</td>
  </tr>
</table>

`

document.getElementById('planilha').innerHTML = tabelaVitamina;