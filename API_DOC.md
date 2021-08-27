# ExTrac App Server

ExTrac App is a simple application to manage every day expenses. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

> Register new user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>",
  "fullName": "<fullName to get insert into>",
  "phoneNumber": "<phoneNumber to get insert into>",
  "address": "<address to get insert into>",
  "budget": "<budget to get insert into>",
  "saving": "<saving to get insert into>",
}
```

_Response (201 - Created)_

```
{
  "id": <auto increment id>,
  "email": <inserted user's email>,
  "password": <hashed password>,
  "fullName": <inserted user's name>,
  "phoneNumber": <inserted user's phone number or null>,
  "address": <inserted user's address or null>,
  "budget":  <inserted user's initial budget>,
  "saving": <inserted user's saving target>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
  "balance": <user's balance>
}
```

_Response (422 - Unprocessable Entity)_

```
{
  "message": <error message>
}
```

_Response (400 - Bad Request)_

```
{
  "message": <error message>
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### POST /login

> Login user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<user's email>",
  "password": "<user's password>",
}
```

_Response (200 - OK)_

```
{
  "access_token": "<user's token for session>",
  "email": "<user's email>",
  "fullName": "<user's full name>"
}
```

_Response (400 - Bad Request)_

```
{
  "message": <error message>
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### PATCH /budget

> Add budget

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Body_

```
{
  "addBudget": <added budget amount>
}
```

_Response (200)_

```
 {
  "id": 1,
  "email": "<user email>",
  "password": "<hashed password>",
  "fullName": "<user full name>",
  "phoneNumber": "<user phone number or null>",
  "address": "<user address or null>",
  "budget": <user updated budget>,
  "balance": <user balance>,
  "saving": <user saving target>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### PATCH /saving

> Change saving target

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Body_

```
{
  "saving": <saving target amount>
}
```

_Response (200)_

```
 {
  "id": 1,
  "email": "<user email>",
  "password": "<hashed password>",
  "fullName": "<user full name>",
  "phoneNumber": "<user phone number or null>",
  "address": "<user address or null>",
  "budget": <user budget>,
  "balance": <user balance>,
  "saving": <user updated saving target>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### GET /transaction

> Get all transaction data of the logged in user

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
    "name": "<transaction name>",
    "amount": <transaction amount>,
    "date": "<transaction date>",
    "currency": "<transaction currency>",
    "location": "<transaction location>",
    "UserId": <user id>,
    "updatedAt": <data updated date>,
    "createdAt": <data created date>,
    "User": <user data>,
    "Tags": <array of associated tags>,
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### POST /transaction

> Add new transaction

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Body_

```
{
  "name": "<transaction name>",
  "amount": "<transaction amount>",
  "date": "<transaction date>",
  "currency": "<transaction currency>",
  "UserId": <logged in user ID>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
  "location": <transaction location>,
}
```

_Response (201 - Created)_

```
{
  "id": <transaction ID>,
  "name": "<transaction name>",
  "amount": "<transaction amount>",
  "date": "<transaction date>",
  "currency": "<transaction currency>",
  "UserId": <logged in user ID>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
  "location": <transaction location>
}
```

_Response (400 - Bad Request)_

```
{
  "message": <error message>
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": <error message>
}
```

---

### PUT /transaction/:id

> Edit existing transaction

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Params_

```
{
  "id": <transaction ID>
}
```

_Request Body_

```
{
  "name": "<transaction name>",
  "amount": "<transaction amount>",
  "date": "<transaction date>",
  "UserId": <logged in user ID>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
  "location": <transaction location>
}
```

_Response (201 - Created)_

```
{
  "id": <transaction ID>,
  "name": "<transaction name>",
  "amount": "<transaction amount>",
  "date": "<transaction date>",
  "currency": "<transaction currency>",
  "UserId": <logged in user ID>,
  "updatedAt": <data updated date>,
  "createdAt": <data created date>,
  "location": <transaction location>
}
```

_Response (400 - Bad Request)_

```
{
  "message": <error message>
}
```

_Response (404 - Not Found)_

```
{
  "message": <error message>
}
```

_Response (500 - Internal Server Error)_

```

{
   "message": <error message>
}
```

---

### DELETE /transaction/:id

> Delete transaction

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}

```

_Request Params_

```
{
  "id": <transaction ID>
}
```

_Request Body_

```

not needed

```

_Response (200 - OK)_

```

{
 "message": "Transaction successfully deleted"
}

```

_Response (404 - Not Found)_

```

{
"message": <error message>
}

```

_Response (500 - Internal Server Error)_

```

{
"message": <error message>
}

```

---

### PATCH /transaction/currency/:id

> Convert transaction amount and currency

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Params_

```
{
  "id": <transaction ID>
}
```

_Request Body_

```
{
  "convertTo": "<requested converted currency>",
}
```

_Response (200 - OK)_

```
{
  "message": "Successfully convert from <previous amount> <previous currency> to <converted amount> <converted currency>"
}
```

_Response (500 - Internal Server Error)_

```

{
   "message": <error message>
}
```

---

### GET /tag

> View all tag data

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
  {
    "id": <tag ID>,
    "name": "<tag name>",
    "createdAt": <data created date>,
    "updatedAt": <data updated date>,
    "Transactions": <array of associated transaction>
]
```

_Response (500 - Internal Server Error)_

```

{
   "message": <error message>
}
```

---

### POST /tag/:id

> View all tag data

_Request Header_

```
{
  "access_token": "<access token got from loggin in>"
}
```

_Request Params_

```
{
  "id": <transaction ID>
}
```

_Request Body_

```
{
  "addedTag": <tag ID>
}
```

_Response (201 - Created)_

```
{
  "message": "Tag successfully added"
}
```

_Response (500 - Internal Server Error)_

```

{
   "message": <error message>
}
```

---
