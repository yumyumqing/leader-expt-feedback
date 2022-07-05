This is a web application built with [Next.js](https://nextjs.org/), [NextUI](https://nextui.org/) and tested with [Cypress](https://docs.cypress.io/).

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
