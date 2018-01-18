# To-Do List

Resources for the To-Do List domain.

## List and Create To-Do Lists /todo/todo-lists/

List and create To-Do Lists:

- **id**
- **name**

### GET /todo/todo-lists/

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

### POST /todo/todo-lists/

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

## To-Do List Detail /todo/todo-lists/<id>/

Retrieve, update and delete a To-Do List by it's id

- **id**
- **name**

### GET /todo/todo-lists/1/

Retrieve To-Do List with the given id.

- Response **200 OK** (application/json)

```
  {
    "id": 1,
    "name": "Things to do"
  }
```

### PUT /todo/todo-lists/1/

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

### PATCH /todo/todo-lists/1/

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

### DELETE /todo/todo-lists/1/

Delete To-Do List with the given id.

- Response **204 NO CONTENT**


## List and Create Tasks /todo/tasks/

List and create Tasks:

- **id**
- **name**
- **todo_list**: To-Do List primary key
- **due_date**: ISO date
- **owner**: User primary key

### GET /todo/tasks/

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

### POST /todo/tasks/

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

## Task Detail /todo/tasks/<id>/

Retrieve, update and delete a Task List by it's id

- **id**
- **name**
- **todo_list**: To-Do List primary key
- **due_date**: ISO date
- **owner**: User primary key

### GET /todo/tasks/1/

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

### PUT /todo/tasks/1/

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

### PATCH /todo/tasks/1/

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

### DELETE /todo/tasks/1/

Delete Task with the given id.

- Response **204 NO CONTENT**
