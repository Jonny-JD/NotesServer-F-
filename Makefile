APP_NAME=notes-frontend
IMAGE_NAME=$(DOCKERHUB_USERNAME)/$(APP_NAME):$(GITHUB_SHA)
IMAGE_NAME_TEST=$(DOCKERHUB_USERNAME)/$(APP_NAME):$(GITHUB_SHA)-test
IMAGE_NAME_FEATURE=$(DOCKERHUB_USERNAME)/$(APP_NAME):$(GITHUB_SHA)-feature
export GITHUB_SHA

.PHONY: build docker-run clean push build-test build-feature push-test push-feature

build:
	docker build -t ${IMAGE_NAME} .

build-test:
	docker build -t ${IMAGE_NAME_TEST} .

build-feature:
	docker build -t ${IMAGE_NAME_FEATURE} .

docker-run:
	docker run -p 80:80 --name $(APP_NAME)-container $(IMAGE_NAME)

clean:
	docker rm -f $(APP_NAME)-container || true
	docker rmi -f $(IMAGE_NAME) || true

push:
	docker push $(IMAGE_NAME)

push-test:
	docker push $(IMAGE_NAME_TEST)

push-feature:
	docker push $(IMAGE_NAME_FEATURE)
