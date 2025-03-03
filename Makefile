.PHONY: install dev build preview clean help

DOCKER_COMPOSE = docker compose

help: ## Show this help message
	@echo 'Usage:'
	@echo '  make <target>'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

dev: ## Start development server
	$(DOCKER_COMPOSE) up --build

build: ## Build for production
	$(DOCKER_COMPOSE) run --rm docs npm run docs:build

preview: ## Preview production build
	$(DOCKER_COMPOSE) run --rm -p 4173:4173 docs npm run docs:preview

clean: ## Clean up containers and build files
	$(DOCKER_COMPOSE) down
	rm -rf docs/.vitepress/dist
	rm -rf node_modules

shell: ## Open a shell in the Docker Compose environment
	$(DOCKER_COMPOSE) exec docs sh

debug: ## Run with Node.js debug flags to trace ES module issues
	$(DOCKER_COMPOSE) exec docs node --trace-warnings --experimental-modules docs/.vitepress/config.mjs
