# Angular 17 Project with NgRx, Shell & Microfrontends

## Project Overview

This is an Angular 17 application that implements:
- NgRx for state management
- Shell architecture pattern

## Features

- **State Management**: Comprehensive NgRx implementation with:
  - Actions
  - Reducers
  - Effects
  - Selectors
  - Entity adapters (where applicable)

- **Shell Architecture**:
  - Core module for singleton services
  - Shared module for common components/directives/pipes
  - Feature modules for lazy-loaded functionality
  - Auth module for authentication flows

- **Microfrontends**:
  - Module Federation configuration
  - Independent deployment of micro-apps
  - Shared dependency management
  - Dynamic component loading

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm (v9 or higher) or yarn
- Angular CLI (v17)

## Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
cp .env.example .env

npm run start

npm run build
```


License
MIT License - see LICENSE file for details
