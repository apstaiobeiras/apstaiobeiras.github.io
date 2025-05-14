#!/usr/bin/bash

dia=$( date -d "-7 days" +"%d")
mes=$( date -d "-7 days" +"%m")
ano=$( date -d "-7 days" +"%Y")

rm -rf fichas lote.zip

fichas=(
  "Esu%3A%3AAtividadeColetiva:Lote_Atividade_Coletiva_:atividade_coletiva"
  "Esu%3A%3AAtendimentoProcedimento:Lote_Atendimento_Procedimento_:atendimento_procedimento"
  "Esu%3A%3AAtendimentoOdontologico:Lote_Atendimento_Odontologico_:atendimento_odontologico"
  "Esu%3A%3AVisitaDomiciliar:Lote_Visitas_Domiciliares_:visita_domiciliar"
  "Esu%3A%3AAtendimentoIndividual:Lote_Atendimento_Individual_:atendimento_individual"
  "Esu%3A%3ACadastroDomiciliar:Lote_Cadastro_Domiciliar_:cadastro_domiciliar"
  "Esu%3A%3AAvaliacaoElegibilidade:Lote_Avaliacao_Elegibilidade:avaliacao_elegibilidade"
  "Esu%3A%3AAtendimentoDomiciliar:Lote_Atendimento_Domiciliar_:atendimento_domiciliar"
  "Esu%3A%3AAtendimentoVacinacao:Lote_Ficha_Vacinacao_:atendimento_vacinacao"
)

cadastros=(
  "Esu%3A%3AQuestionarioPaciente:questionario_paciente"
  "Esu%3A%3AMarcadoresConsumoAlimentar:marcadores_consumo_alimentar"
)

for ficha in ${cadastros[@]} ; do
  modelo=$(echo ${ficha} | cut -d: -f1)
  diretorio=$(echo ${ficha} | cut -d: -f2)

  x=$(curl "https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus/arquivo_exportacao?model=${modelo}" \
    -H 'accept: application/json, text/javascript, */*; q=0.01' \
    -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
    -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
    -b 'device_id=7a0b28e8-4cf0-48e4-89da-ddbdc42a2746; auth_token=ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKamNtVnpZMlZ5SWl3aVlYVmtJam9pWTJ4cFpXNTBJaXdpYzJWblgyOXdaWEpoWkc5eVgybGtJam8yT0RVc0ltUmxkbWxqWlY5cFpDSTZJamRoTUdJeU9HVTRMVFJqWmpBdE5EaGxOQzA0T1dSaExXUmtZbVJqTkRKaE1qYzBOaUlzSW1OdlpHbG5iMTl0ZFc1cFkybHdhVzhpT2pNeE5qZ3dNRElzSW1OdlpHbG5iMTkxYm1sa1lXUmxJam95TUN3aVkyOWthV2R2WDNObGRHOXlJam93ZlEuLVZWVmJRZ1RQUnlSTDkzdmhhLUd0NkRCczNhSzlnb1hPTVk1WUtMZV9WbyI%3D--4373a235d0742bc237ec685cd8b815fd64c52397; expires_in=2693829200746; _vmx_saude_session=Ty9WRjAyeEJySkRpUmdLSXVSRXJxRm5RbVRvd0tlSzVOUEpSanVpallUaU5hMGh5Z3NReGhnYUZ6Mzk1aktHV1pCeHY1YWNESUg0WmFnOGFkcEZkUnE2ZC81c0s0UENFT2xYWDdBc21pUlk4UnRTK1BobnRHODYvdEN5bUpod1Y3NldTWVdVaU5oYStvanZQZW1pVHJRPT0tLXA3cFJqQ29vOWRrR25MSndFM2o1OHc9PQ%3D%3D--affc733f349f7669a4beae51e905b828918f47c9' \
    -H 'origin: https://www.taiobeiras-mg.vivver.com' \
    -H 'priority: u=1, i' \
    -H 'referer: https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus' \
    -H 'sec-ch-ua: "Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Windows"' \
    -H 'sec-fetch-dest: empty' \
    -H 'sec-fetch-mode: cors' \
    -H 'sec-fetch-site: same-origin' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
    -H 'x-csrf-token: ke1fNrTOE626SlNHw7Hkr/wTbSc+voGDRjvkgrGgXRhcmSCC2ZUSTzNRzPeKbfQkdCHdGs1lA/QKt7aEZgEwEg==' \
    -H 'x-requested-with: XMLHttpRequest' \
    --data-raw "registros=&data_inicio=${dia}%2F${mes}%2F${ano}&data_final=${dia}%2F${mes}%2F${ano}&tipo_search=1&id_operador=685&codprofissional=")

  curl "https://www.taiobeiras-mg.vivver.com/esu/${diretorio}/download_zip" \
    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
    -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
    -b 'device_id=7a0b28e8-4cf0-48e4-89da-ddbdc42a2746; auth_token=ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKamNtVnpZMlZ5SWl3aVlYVmtJam9pWTJ4cFpXNTBJaXdpYzJWblgyOXdaWEpoWkc5eVgybGtJam8yT0RVc0ltUmxkbWxqWlY5cFpDSTZJamRoTUdJeU9HVTRMVFJqWmpBdE5EaGxOQzA0T1dSaExXUmtZbVJqTkRKaE1qYzBOaUlzSW1OdlpHbG5iMTl0ZFc1cFkybHdhVzhpT2pNeE5qZ3dNRElzSW1OdlpHbG5iMTkxYm1sa1lXUmxJam95TUN3aVkyOWthV2R2WDNObGRHOXlJam93ZlEuLVZWVmJRZ1RQUnlSTDkzdmhhLUd0NkRCczNhSzlnb1hPTVk1WUtMZV9WbyI%3D--4373a235d0742bc237ec685cd8b815fd64c52397; expires_in=2693829203098; _vmx_saude_session=am45STc4c1ZoaDYzcFd5Y1hIYk40UXhCQU5kZ21WVUdXVG9mWlZ1K1BqVzlaUjBacnNieC8zaDFtMlZRY2ZRVnNjaUlOSzZrQjVWd21hNXF3R05hbWxTa0dYajM3OE9oemhsaWtKVUNXVmtQNm9MYkVBQ2NKWEJ5QmtyVFRudEM4d2luMTBJZ016Z0paMGJTVmtzRmRnPT0tLUVFdzBUcW1nbXpuUGRGb21wdkVnRUE9PQ%3D%3D--b140855d522e3f19fb82bea82ec1a4daed677b3c' \
    -H 'if-none-match: W/"656fe1e58d1e32e8e1e275456854558e"' \
    -H 'priority: u=0, i' \
    -H 'referer: https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus' \
    -H 'sec-ch-ua: "Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Windows"' \
    -H 'sec-fetch-dest: iframe' \
    -H 'sec-fetch-mode: navigate' \
    -H 'sec-fetch-site: same-origin' \
    -H 'upgrade-insecure-requests: 1' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
    -o "tmp.zip"

  mkdir -p fichas
  x=$(unzip 'tmp.zip' -d fichas)
  rm -rf tmp.zip

  sleep 10s
done

for ficha in ${fichas[@]} ; do
  modelo=$(echo ${ficha} | cut -d: -f1)
  arquivo=$(echo ${ficha} | cut -d: -f2)
  pasta=$(echo ${ficha} | cut -d: -f3)

  curl "https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus/arquivo_exportacao?model=${modelo}" \
    -H 'accept: application/json, text/javascript, */*; q=0.01' \
    -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
    -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
    -b 'device_id=7a0b28e8-4cf0-48e4-89da-ddbdc42a2746; ISCHECKURLRISK=false; auth_token=ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKamNtVnpZMlZ5SWl3aVlYVmtJam9pWTJ4cFpXNTBJaXdpYzJWblgyOXdaWEpoWkc5eVgybGtJam8yT0RVc0ltUmxkbWxqWlY5cFpDSTZJamRoTUdJeU9HVTRMVFJqWmpBdE5EaGxOQzA0T1dSaExXUmtZbVJqTkRKaE1qYzBOaUlzSW1OdlpHbG5iMTl0ZFc1cFkybHdhVzhpT2pNeE5qZ3dNRElzSW1OdlpHbG5iMTkxYm1sa1lXUmxJam95TUN3aVkyOWthV2R2WDNObGRHOXlJam93ZlEuLVZWVmJRZ1RQUnlSTDkzdmhhLUd0NkRCczNhSzlnb1hPTVk1WUtMZV9WbyI%3D--4373a235d0742bc237ec685cd8b815fd64c52397; expires_in=2693824112584; _vmx_saude_session=MUplNXhnUjVtUUNrRlpsZUYzWU5hWXhJM212dHpkMGp5citOOHJEOW1MdXJ6d21sR0VqWllMODA3Ky8yK1dlUndXOEYrOE5qSnYvcFRJWHJtM1VDSHJrVENKcWUvdzdyb1pZL2ZMUjRXSXFWWXRqdmtPRkczNHVtem0yeUNVa1N3cWRIRFRua1lCbGRFTVdEVmh3RVZnPT0tLXVKMkhlbCtZUTIxZk0zZVRVM3JaV0E9PQ%3D%3D--2274e8b0aefaa0e2102055d268a60fe88a7d6d7c' \
    -H 'origin: https://www.taiobeiras-mg.vivver.com' \
    -H 'priority: u=1, i' \
    -H 'referer: https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus' \
    -H 'sec-ch-ua: "Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Windows"' \
    -H 'sec-fetch-dest: empty' \
    -H 'sec-fetch-mode: cors' \
    -H 'sec-fetch-site: same-origin' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
    -H 'x-csrf-token: ke1fNrTOE626SlNHw7Hkr/wTbSc+voGDRjvkgrGgXRhcmSCC2ZUSTzNRzPeKbfQkdCHdGs1lA/QKt7aEZgEwEg==' \
    -H 'x-requested-with: XMLHttpRequest' \
    --data-raw "registros=&data_inicio=${dia}%2F${mes}%2F${ano}&data_final=${dia}%2F${mes}%2F${ano}&tipo_search=1&id_operador=685&codprofissional="

    sleep 10s

  curl "https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus/download_zip?file=${arquivo}&folder=${pasta}" \
    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
    -H 'accept-language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
    -b 'device_id=7a0b28e8-4cf0-48e4-89da-ddbdc42a2746; ISCHECKURLRISK=false; auth_token=ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKamNtVnpZMlZ5SWl3aVlYVmtJam9pWTJ4cFpXNTBJaXdpYzJWblgyOXdaWEpoWkc5eVgybGtJam8yT0RVc0ltUmxkbWxqWlY5cFpDSTZJamRoTUdJeU9HVTRMVFJqWmpBdE5EaGxOQzA0T1dSaExXUmtZbVJqTkRKaE1qYzBOaUlzSW1OdlpHbG5iMTl0ZFc1cFkybHdhVzhpT2pNeE5qZ3dNRElzSW1OdlpHbG5iMTkxYm1sa1lXUmxJam95TUN3aVkyOWthV2R2WDNObGRHOXlJam93ZlEuLVZWVmJRZ1RQUnlSTDkzdmhhLUd0NkRCczNhSzlnb1hPTVk1WUtMZV9WbyI%3D--4373a235d0742bc237ec685cd8b815fd64c52397; expires_in=2693824487924; _vmx_saude_session=cmxZWUF2dHVNYmZpL0FWcWVQdWc3Uml5V00weXJhY09id21SNTIvb092SFlHYkkvVlF5YU9DdG9GcGxTZG1kNXBLcElsVTlBR2tSRS9RUURJMWNaYnNZTWdnM2NGMk1FNlRaSXlhZG1ZQ0hHaEVEdTBTaGNjNjliRERoZzdoT0t1SXQvZm92d2pqOURCS2ZxenhFd1h3PT0tLWJ2b3hrd05TaVUyOThZbm1rTGx0elE9PQ%3D%3D--be8822e39c3f700bcc1a86cae54f86ad59d50fa5' \
    -H 'priority: u=0, i' \
    -H 'referer: https://www.taiobeiras-mg.vivver.com/esu/exportacao_esus' \
    -H 'sec-ch-ua: "Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'sec-ch-ua-platform: "Windows"' \
    -H 'sec-fetch-dest: iframe' \
    -H 'sec-fetch-mode: navigate' \
    -H 'sec-fetch-site: same-origin' \
    -H 'sec-fetch-user: ?1' \
    -H 'upgrade-insecure-requests: 1' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
    -o "tmp.zip"

  mkdir -p fichas
  unzip 'tmp.zip' -d fichas
  rm -rf tmp.zip
done

(
  cd fichas/
  x=$(zip -r ../lote.zip *)
)

#---------------------------------------------------------------------------------------

loging_data=$(curl -i 'http://201.182.70.181:8080/api/graphql' \
  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Api-Consumer-Id: ESUS_WEB_CLIENT' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://201.182.70.181:8080' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://201.182.70.181:8080/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
  -H 'accept: */*' \
  -H 'apollographql-client-name: PEC Web' \
  -H 'apollographql-client-version: 5.3.26' \
  -H 'content-type: application/json' \
  --data-raw $'[{"operationName":"Login","variables":{"input":{"username":"08452367686","password":"Jogos48tronos#","force":true}},"query":"mutation Login($input: LoginInput\u0021) {\\n  login(input: $input) {\\n    success\\n    __typename\\n  }\\n}\\n"}]' \
  --insecure)


JSESSIONID=$(echo "${loging_data}" | grep "JSESSIONID=" | cut -d\= -f2 | cut -d\; -f1)
XSRF_TOKEN=$(echo "${loging_data}" | grep "XSRF-TOKEN=" | cut -d\= -f2 | cut -d\; -f1)

#---------------------------------------------------------------------------------------

curl 'http://201.182.70.181:8080/api/graphql' \
  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -b "JSESSIONID=${JSESSIONID}; XSRF-TOKEN=${XSRF_TOKEN}; ISCHECKURLRISK=undefined" \
  -H 'Origin: http://201.182.70.181:8080' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://201.182.70.181:8080/' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
  -H 'accept: */*' \
  -H 'apollographql-client-name: PEC Web' \
  -H 'apollographql-client-version: 5.3.26' \
  -H 'content-type: application/json' \
  --data-raw $'[{"operationName":"SelecionarAcesso","variables":{"input":{"id":"37616"}},"query":"mutation SelecionarAcesso($input: SelecionarAcessoInput\u0021) {\\n  selecionarAcesso(input: $input) {\\n    id\\n    profissional {\\n      id\\n      nome\\n      __typename\\n    }\\n    acesso {\\n      id\\n      moduloInicial\\n      __typename\\n    }\\n    recursos\\n    __typename\\n  }\\n}\\n"}]' \
  --insecure \
  -o /dev/null

#---------------------------------------------------------------------------------------

curl -i 'http://201.182.70.181:8080/api/transmissao/importarFichas' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -b "JSESSIONID=${JSESSIONID}; XSRF-TOKEN=${XSRF_TOKEN}; ISCHECKURLRISK=undefined" \
  -H 'Origin: http://201.182.70.181:8080' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://201.182.70.181:8080/transmissao/recebimento/lote' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36' \
  -H "X-XSRF-TOKEN: ${XSRF_TOKEN}" \
  -F 'file=@lote.zip;type=application/x-zip-compressed' \
  --insecure

