APP_NAME=notes-frontend
IMAGE_NAME=$(DOCKERHUB_USERNAME)/$(APP_NAME):$(GITHUB_SHA)
export GITHUB_SHA

.PHONY: build docker-run clean push test

build:
	docker build -t ${IMAGE_NAME} .

docker-run:
	docker run -p 80:80 --name $(APP_NAME)-container $(IMAGE_NAME)

clean:
	docker rm -f $(APP_NAME)-container || true
	docker rmi -f $(IMAGE_NAME) || true

push:
	docker push $(IMAGE_NAME)
