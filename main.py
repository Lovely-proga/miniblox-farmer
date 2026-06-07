import time
import requests

# Константы для запроса
URL = "https://session.coolmathblox.ca/rewarded_ad"
HEADERS = {
    "Content-Type": "application/json",
    "authorization": "377fed677b50abee283e6c75f71493b4",
}
# Пустой JSON-словарь, соответствующий body: JSON.stringify({ }) в твоем JS-коде
PAYLOAD = {}

print("Скрипт запущен. Отправка запросов каждые 10 секунд... (Нажми Ctrl+C для выхода)")

try:
    while True:
        try:
            # Преимущество requests.post с аргументом json в том,
            # что он сам переведет словарь в строку и выставит правильные заголовки.
            response = requests.post(URL, json=PAYLOAD, headers=HEADERS)

            # Проверяем статус ответа (200 OK, 201 и т.д.)
            if response.status_code == 200:
                # Пытаемся распарсить JSON, как в .then(res => res.json())
                data = response.json()
                print(f" Response: {data}")
            else:
                print(
                    f" Error: Сервер вернул код {response.status_code}. Ответ: {response.text}"
                )

        except requests.exceptions.RequestException as e:
            # Ловим ошибки сети (аналог .catch(err => ...))
            print(f" Error: {e}")

        # Интервал в 10000 мс (10 секунд)
        time.sleep(10)

except KeyboardInterrupt:
    print("\nСкрипт остановлен пользователем.")