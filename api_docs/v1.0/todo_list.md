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

```
  {
    "name": "Things to do",
  }
```

- Response **201 CREATED** (application/json)

```
  {
    "id": 1,
    "name": "Things to do"
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be blank."
    ]
  }
```

## To-Do List Detail /todo/todo_list/<id>/

Retrieve, update and delete a To-Do List by it's id

- **id**
- **name**

### GET /todo/todo_list/1/

Retrieve To-Do List with the given id.

- Response **200 OK** (application/json)

```
  {
    "id": 1,
    "name": "Things to do"
  }
```

### PUT /todo/todo_list/1/

Update To-Do List with the given id.

- Request (application/json)

```
  {
    "name": "Things to do",
  }
```

- Response **200 OK**

```
  {
    "id": 1,
    "name": "Things to do"
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be blank."
    ]
  }
```

### PATCH /todo/todo_list/1/

Partially update To-Do List with the given id.

- Request (application/json)

```
  {
    "name": "Things to do",
  }
```

- Response **200 OK**

```
  {
    "id": 1,
    "name": "Things to do"
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be blank."
    ]
  }
```

### DELETE /todo/todo_list/1/

Delete To-Do List with the given id.

- Response **204 NO CONTENT**


## List and Create Tasks /todo/task/

List and create Tasks:

- **id**
- **name**
- **todo_list**: To-Do List primary key
- **due_date**: ISO date
- **owner**: User primary key

### GET /todo/task/

Retrieve all Tasks.

- Response **200 OK** (application/json)

```
  [
    {
        "id": 1,
        "name": "Thing to do",
        "todo_list": 1,
        "due_date": "2018-01-31",
        "owner": 1
    }
  ]
```

### POST /todo/task/

Create a new Task.

- Request (application/json)

```
  {
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Response **201 CREATED** (application/json)

```
  {
    "id": 1,
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be null."
    ],
    "todo_list": [
        "Invalid pk \"0\" - object does not exist."
    ],
    "due_date": [
        "Date has wrong format. Use one of these formats instead: YYYY[-MM[-DD]]."
    ],
    "owner": [
        "Incorrect type. Expected pk value, received str."
    ]
  }
```

## Task Detail /todo/task/<id>/

Retrieve, update and delete a Task List by it's id

- **id**
- **name**
- **todo_list**: To-Do List primary key
- **due_date**: ISO date
- **owner**: User primary key

### GET /todo/task/1/

Retrieve Task with the given id.

- Response **200 OK** (application/json)

```
  {
    "id": 1,
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

### PUT /todo/task/1/

Update Task with the given id.

- Request (application/json)

```
  {
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Response **200 OK**

```
  {
    "id": 1,
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be null."
    ],
    "todo_list": [
        "Invalid pk \"0\" - object does not exist."
    ],
    "due_date": [
        "Date has wrong format. Use one of these formats instead: YYYY[-MM[-DD]]."
    ],
    "owner": [
        "Incorrect type. Expected pk value, received str."
    ]
  }
```

### PATCH /todo/task/1/

Partially update Task with the given id.

- Request (application/json)

```
  {
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Response **200 OK**

```
  {
    "id": 1,
    "name": "Thing to do",
    "todo_list": 1,
    "due_date": "2018-01-31",
    "owner": 1
  }
```

- Error **400 BAD REQUEST**

```
  {
    "name": [
        "This field may not be null."
    ],
    "todo_list": [
        "Invalid pk \"0\" - object does not exist."
    ],
    "due_date": [
        "Date has wrong format. Use one of these formats instead: YYYY[-MM[-DD]]."
    ],
    "owner": [
        "Incorrect type. Expected pk value, received str."
    ]
  }
```

### DELETE /todo/task/1/

Delete Task with the given id.

- Response **204 NO CONTENT**
