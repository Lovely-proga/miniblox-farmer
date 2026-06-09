import os
import time
import requests

URL = "https://session.coolmathblox.ca/rewarded_ad"
# Берем токен из секретов GitHub
TOKEN = os.getenv("AUTH_TOKEN")

HEADERS = {
    "Content-Type": "application/json",
    "authorization": TOKEN,
}
PAYLOAD = {}

print("Запуск бесконечного цикла в GitHub Actions...")
while True:
    try:
        response = requests.post(URL, json=PAYLOAD, headers=HEADERS)
        print(f"Response: {response.status_code}")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(10)
