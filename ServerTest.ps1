for ($i = 0; $i -lt 10000; $i++) {
    Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000/" -Method "POST" -Body "newItem=$i"
}

