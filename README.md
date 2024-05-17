# File Upload Server

Этот проект представляет собой сервер для загрузки файлов, написанный на Node.js. Сервер позволяет создавать, получать, обновлять и удалять записи, при этом каждая запись может содержать только один файл. Файлы сохраняются на сервере, и они также удаляются с сервера при удалении записи.

## Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/file-upload-server.git
   cd file-upload-server
   ```
2. Установите зависимости:

    ```bash
   npm install
   ```
   
# Запуск сервера

1. Запустите сервер:

    ```bash
    npm run start
    ```

2. Сервер будет доступен по адресу http://localhost:5000.


# API
## Создание записи

**Запрос**:
* Метод: POST
* URL: /posts
* Тело запроса (form-data):
  * `author` (string): Автор записи
  * `title` (string): Заголовок записи
  * `content` (string): Содержание записи
  * `picture` (file): Изображение (только один файл)

**Пример тела ответа:**
```json
{
  "_id": "60c72b2f5f1b2c001c8e4b10",
  "author": "John Doe",
  "title": "My Post",
  "content": "This is my post content.",
  "picture": "static/123e4567-e89b-12d3-a456-426614174000.jpg",
  "__v": 0
}
```
## Получение всех записей

**Запрос**:
* Метод: GET
* URL: /posts

**Пример тела ответа:**
```json
[
  {
    "_id": "60c72b2f5f1b2c001c8e4b10",
    "author": "John Doe",
    "title": "My Post",
    "content": "This is my post content.",
    "picture": "static/123e4567-e89b-12d3-a456-426614174000.jpg",
    "__v": 0
  }
]
```

## Получение одной записи

**Запрос**:
* Метод: GET
* URL: /posts/:id

**Пример тела ответа:**
```json
{
  "_id": "60c72b2f5f1b2c001c8e4b10",
  "author": "John Doe",
  "title": "My Post",
  "content": "This is my post content.",
  "picture": "static/123e4567-e89b-12d3-a456-426614174000.jpg",
  "__v": 0
}
```

## Обновление записи

**Запрос**:
* Метод: PUT
* URL: /posts
* Тело запроса (JSON):
    * `_id` (string): ID записи
    * `author` (string): Автор записи
    * `title` (string): Заголовок записи
    * `content` (string): Содержание записи

**Пример тела ответа:**
```json
{
  "_id": "60c72b2f5f1b2c001c8e4b10",
  "author": "John Doe",
  "title": "My Updated Post",
  "content": "This is my updated post content.",
  "picture": "static/123e4567-e89b-12d3-a456-426614174000.jpg",
  "__v": 0
}
```

## Удаление записи

**Запрос**:
* Метод: DELETE
* URL: /posts/:id

**Пример тела ответа:**
```json
{
  "_id": "60c72b2f5f1b2c001c8e4b10",
  "author": "John Doe",
  "title": "My Post",
  "content": "This is my post content.",
  "picture": "static/123e4567-e89b-12d3-a456-426614174000.jpg",
  "__v": 0
}
```