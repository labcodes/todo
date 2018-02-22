# TODO

A To-Do List application written in Django/React

## Project Setup

Install requirements

`
$ pip install -r requirements.txt
`

Create .env file

`
$ cp .env.example .env
`

Migrate database

`
$ python manage.py migrate
`

Install Node dependencies

`
$ npm install
`

## Running the project

Run Django server

`
$ python manage.py runserver
`

Build static files

    - Only once
        `
        $ npm start
        `

    - On watch mode
        `
        $ npm run watch
        `
