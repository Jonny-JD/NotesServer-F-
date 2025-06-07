APP_NAME=notes-frontend
IMAGE_NAME=$(DOCKERHUB_USERNAME)/$(APP_NAME):latest

.PHONY: build docker-run clean login push

build:
	npm install
	npm run clean
	npm run build
	docker build -t ${IMAGE_NAME} .

docker-run:
	docker run -p 80:80 --name $(APP_NAME)-container $(IMAGE_NAME)

clean:
	docker rm -f $(APP_NAME)-container || true
	docker rmi -f $(IMAGE_NAME) || true

login:
	echo docker login -u "$$DOCKERHUB_USERNAME" --password "$$DOCKERHUB_TOKEN"

push: login
	docker push $(IMAGE_NAME)