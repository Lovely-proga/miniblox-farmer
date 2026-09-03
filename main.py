import os
import time
import requests

URL = "https://miniblox.io/auth-api/rewarded_ad/start"
TOKEN = os.getenv("AUTH_TOKEN")

# Оптимизированные заголовки
HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://miniblox.io/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
}

# Добавляем токен авторизации, если он передан
if TOKEN:
    HEADERS["Authorization"] = TOKEN

PAYLOAD = {}

print("Запуск бесконечного цикла в GitHub Actions...")

# Использование Session повышает производительность за счет переиспользования TCP-соединений
with requests.Session() as session:
    session.headers.update(HEADERS)
    
    while True:
        try:
            response = session.post(URL, json=PAYLOAD, timeout=10)
            print(f"Status: {response.status_code} | Data: {response.text}")
        except Exception as e:
            print(f"Error: {e}")
        
        time.sleep(10)
