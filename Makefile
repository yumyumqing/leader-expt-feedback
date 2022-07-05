.PHONY: run
run:
	npm install
	npm run build
	npm run start

.PHONY: test
test:
	npm install
	npm run build
	npm run e2e:headless