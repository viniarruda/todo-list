## Project idea

The idea of ​​the project is that users can create different boards to separate each task they need to perform during the week.

Some examples of boards that can be created:

- Work
- Personal
- Gym

## Libs

This project use these following libs:

- NextJs
- PandaCss
- react-hook-form
- react-query
- zustand
- zod
- react-icons
- jest + testing-library

## Project Structure

```sh
src
├── design-system   # design-system
  └── theme # theme config
    └── shared # shared files. Ex: colors, spacing
    └── tokens # json tokens files
    └── utils # some functions that help to use theme
  └── components # components folder
└── layouts # Nextjs layouts
└── services # react-query queries and mutations
└── stores # zustand store
└── utils # utils
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

`username`: any mail. ex: mail@test.com
`password`: any password. ex: 123456

## Project idea

First of all, I decided to create an Todo List, so the first think that I did as validate the idea using [https://excalidraw.com/](excalidraw)

<div>
  <img align="center" alt="excalidraw mockup" height="400" width="600" src="https://github.com/viniarruda/todo-list/blob/main/public/excalidraw_mockup.jpeg">
</div>

## Theme

PandaCss have a default theme value, so the values in this project are based in this. You can see more [https://panda-css.com/docs/customization/theme](here)

## Mock Api

I used [https://mockapi.io/](https://mockapi.io/) to created the Auth and TodoList mocked api

## How to create a new board when doest have form yet?

Go to `src/services/requestExamples` and copy the json in `api.json`. You can do `POST` request in postman in this url: `https://5eb454842b81f700163084b3.mockapi.io/todoList`

#### Features

- [x] Login
- [ ] Home
  - [x] Sidebar
  - [x] Dashboard
  - [x] Board List
    - [x] Create new board
    - [ ] Edit board
    - [ ] Delete board
  - [x] Todo List
    - [x] Create new todo
    - [ ] Edit todo
    - [x] Move between columns
    - [ ] Delete todo
- [ ] Components
  - [x] Badge
  - [x] Board Cards
    - [x] Add Drag'n'drop
  - [x] Todo Cards

## Type of tests coverage

- Unit
- Integration
- Api

## Future steps

- [ ] Add form to input values for new board
- [ ] Dynamic labels colors
- [ ] Create api to save the users to link the boards
- [ ] Create api for board and for tasks
- [ ] Improve tests
- [ ] AuthLayout
