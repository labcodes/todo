# Users

Control the users registered to the system.

## Signup User /signup

Create a user account with

- **email**
- **name**
- **password**

### POST

Create a new user and an access token for it.

- Request (application/json)

  {
    "email": "mail@mail.com",
    "name": "FirstName LastName",
    "password": "supersecret"
  }

- Response **201 CREATED**

Return email and name of the created user and the authentication token to be used on further requests

  {
    "email": "mail@mail.com",
    "name": "FirstName LastName",
    "token":  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im1haWxAbWFpbC5jb20iLCJleHAiOjE1MTU3Nzk4MzEsImVtYWlsIjoibWFpbEBtYWlsLmNvbSJ9.x6kbZUX6dLdKW9zH0rmfxOknkTKgZ18zEO-PZDYAcO0"
  }

- Error **400 BAD REQUEST**

  {
    "email": [
        "Enter a valid email address."
    ],
    "name": [
        "This field may not be blank."
    ],
    "password": [
        "This field may not be blank."
    ]
  }

## Obtain Json Web Token /api-token-auth

Obtain authentication token for the given user.

### POST

Generate a new authentication token to be used on further requests.

- Request (application/json)

  {
    "email": "mail@mail.com",
    "password": "supersecret"
  }

- Response

  {
    "token":  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im1haWxAbWFpbC5jb20iLCJleHAiOjE1MTU3Nzk4MzEsImVtYWlsIjoibWFpbEBtYWlsLmNvbSJ9.x6kbZUX6dLdKW9zH0rmfxOknkTKgZ18zEO-PZDYAcO0"
  }

- Error **400 BAD REQUEST**

  {
      "non_field_errors": [
          "Unable to log in with provided credentials."
      ]
  }
