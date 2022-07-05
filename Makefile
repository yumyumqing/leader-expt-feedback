.PHONY: run
run:
	npm install --include=dev
	npm run build
	npm run start

.PHONY: test
test:
	npm install --include=dev
	npm run build
	npm run e2e:headless