# To-Do List

Resources for the To-Do List domain.

## List and Create To-Do Lists /todo/todo_list/

List and create To-Do Lists:

- **id**
- **name**

### GET /todo/todo_list/

Retrieve all To-Do Lists.

- Response **200 OK** (application/json)

```
  [
    {
      "id": 1,
      "name": "Things to do"
    }
  ]
```

### POST /todo/todo_list/

Create a new To-Do List.

- Request (application/json)

`
  {
    "name": "Things to do",
  }
`

- Response **201 CREATED** (application/json)

`
  {
    "id": 1,
    "name": "Things to do"
  }
`

- Error **400 BAD REQUEST**

`
  {
    "name": [
        "This field may not be blank."
    ]
  }
`

## To-Do List Detail /todo/todo_list/<id>/

Retrieve and update a To-Do List by it's id

- **id**
- **name**

### GET /todo/todo_list/1/

Retrieve To-Do List with the given id.

- Response **200 OK** (application/json)

`
  {
    "id": 1,
    "name": "Things to do"
  }
`

### PUT /todo/todo_list/1/

Update To-Do List with the given id.

- Request (application/json)

`
  {
    "name": "Things to do",
  }
`

- Response **200 OK**

`
  {
    "id": 1,
    "name": "Things to do"
  }
`

- Error **400 BAD REQUEST**

`
  {
    "name": [
        "This field may not be blank."
    ]
  }
`
