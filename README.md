# JWT-Auth-express

使用 node.js express 實作的後端 JWT Authentication 驗證練習

實作內容參考 [Web Dev Simplified - JWT Authentication Tutorial - Node.js](https://www.youtube.com/watch?v=mbsmsi7l3r4v)

## 環境變數設定.env

ex:

```
ACCESS_TOKEN_SECRET=ac641613d9c450efa68544b02d88cf43
REFRESH_TOKEN_SECRET=b8cf05bba4b399698e0289dfc48a7c22
```

## 服務 Server

### 啟動 server

`npm run devStart`

### API

`GET http://localhost:3000/posts` 回應範例資料

```json
[
  {
    "username": "david",
    "title": "david post1"
  },
  {
    "username": "chen",
    "title": "chen post"
  }
]
```

## JWT 驗證 Server

### 啟動 server

`npm run devStartAuth`

### API

`GET http://localhost:4000/login`

- 登入，回傳 `refreshToken` 及有效期限 15 秒的 `accessToken`

`GET http://localhost:4000/logout`

- 登出，移除 `refreshToken`

`GET http://localhost:4000/token`

- 使用 `refreshToken` 取得新的有效期限 15 秒的 `accessToken`
