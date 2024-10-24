This project use these following libs:

- NextJs
- PandaCss
- react-hook-form
- react-query
- zustand
- zod
- react-icons

## Project Structure

```sh
src
├── design-system   # design-system
  └── theme # theme config
    └── shared # shared files. Ex: colors, spacing
    └── tokens # json tokens files
    └── utils # some functions that help to use theme
  └── components # components folder
└── app        # Next app folder
 └── featureName       # specific name of the pages
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project idea

First of all, I decided to create an Todo List, so the first think that I did as validate the idea using [https://excalidraw.com/](excalidraw)

<div>
  <img align="center" alt="excalidraw mockup" height="400" width="600" src="https://github.com/viniarruda/todo-list/blob/main/public/excalidraw_mockup.jpeg">
</div>

## Theme

PandaCss have a default theme value, so the values in this project are based in this. You can see more [https://panda-css.com/docs/customization/theme](here)

## Mock Api

I used [https://mockapi.io/](https://mockapi.io/) to created the Auth and TodoList mocked api

#### Features

- [x] Login
- [ ] Home
  - [x] Sidebar
  - [x] Dashboard
  - [x] Board List
    - [ ] Create new board
    - [ ] Edit board
    - [ ] Delete board
  - [x] Todo List
    - [ ] Create new todo
    - [ ] Edit todo
    - [ ] Delete todo
- [ ] Components
  - [x] Badge
  - [x] Board Cards
    - [ ] Add Drag'n'drop
  - [x] Todo Cards

## Steps

- Board List

- The card can be drag and drop up to another card to get your "place"
