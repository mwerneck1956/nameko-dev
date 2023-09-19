<h1 align ='center' > Nameko Devex </h1>

## 🔖 About

It consists of a simple project in Svelte that implements the following figma [interface](https://www.figma.com/file/DSl3CRb0uW5hyIUNE0rWPK/nameko-devex?node-id=0:1), and a page to show information about an order.

## Overview do projeto

![Mobile](https://github.com/mwerneck1956/nameko-dev/blob/main/Svelte.gif)

## 💻 Languages/Frameworks/Libraries Used

- 🖥️ Svelte
- <img src = 'https://badges.aleen42.com/src/tailwindcss.svg' />
- <img src = 'https://badges.aleen42.com/src/typescript.svg'>
- ✏️ Vitest
- ✏️ Svelte testing library

## Installation

To start the development process you must have the following tools on your machine:

- NodeJS
- GIT
- Yarn

### Baixando a aplicação

```bash
$ git clone https://github.com/mwerneck1956/nameko-dev
$ cd src
```

### Configuring environment variables

To configure the environment variables necessary for the application to function, you must just add the URL of the orders service, this variable is called `PUBLIC_API_URL` and is located at .env

```bash
PUBLIC_API_URL = YOUR_API_URL
```

### Installing dependencies

```bash
$ yarn install || npm i
```

### Running the application

```bash
$ yarn dev || npm run dev
```

### 🧪 "Run the unit tests (Vitest + Svelte testing library)."

```bash
$  yarn test || npm run test
```
