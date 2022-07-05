This is a web application built with [Next.js](https://nextjs.org/), [NextUI](https://nextui.org/), and [LowDB](https://github.com/typicode/lowdb), and tested with [Cypress](https://docs.cypress.io/).

## Run server

```bash
make run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run test
### GUI Cypress test
With the server running, open another terminal and run

```bash
npm run cypress
```
Cypress GUI will be launched: pick browser -> e2e -> spec.cy.ts

### Headless test without launching server
```bash
npm run e2e:headless
```

## API 

HTTP Method | URL Path | Description
--- | --- | ---
POST | /api/feedback | Create a new survey record

### Responses
Status | Meaning | Description
--- | --- | ---
200 | OK | Successful operation
400 | Bad Request | Invalid arguments

### Parameters
Type | Name | Description
--- | --- | ---
string | userId | alphanumeric user id with the length of 10
string | yearOfBirth | participant's year of birth
string | employStatus | participant's employment status
string | feedback | feedback from the participants

## Assumptions made in the UI design
* The DB cannot have any null or empty fields in userId, year of birth, employment status and feedback area. 
* There can be multiple feedback belonging to the same user ID in the DB.
* No limit to the minimum or maximum length of the feedback. The max length would be the hardware limit. 
* No verification is made whether the user ID is valid or not.
* The project is made with the assumption that it's for the standalone demo purposes. Therefore, we avoided any cloud engineering solutions. With that being said, the db used in the project is a lightweight, local json db.

## Resources
* https://nextjs.org/learn/basics/create-nextjs-app
* https://nextjs.org/docs/api-routes/introduction
* https://nextui.org/docs/guide/getting-started
* https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
* https://github.com/typicode/lowdb#readme
