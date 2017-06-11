TOKEN="eyJhbGciOiJIUzI1NiIsInR5c...SZzeLQ8XgAmOCtXAlhtC10A_JizM323JAXuIK1w4gM"

curl -X GET \
--header "Accept: application/json" \
--header "Authorization: Bearer $TOKEN" \
"https://api.easyac.xyz/classes?ano=2016&semestre=1"
