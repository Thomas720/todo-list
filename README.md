# Lab 27 --- Custom Hooks

- [Pull Riquest](https://github.com/Thomas720/todo-list/pull/4)
- [Deployed Version](https://thirsty-neumann-848542.netlify.app/)

* In this lab, I will be extending your ToDo application, utilizing a remote API and custom hooks.

## Application Overview

The ToDo application will have the following features:

- Tasks should be persisted across page reloads through the use of an API, either your own or the provided 401 API server - See API documentation here.

  - Note that when using the provided server, there may be multiple students changing the saved database tasks.

- Users should be able to delete existing tasks by clicking a "delete" button on each task item.

- Users should have access to a form where a new ToDo task can be added. This form should have the following fields:

  - Task Description / Text
  - Assigned To
  - Status (complete or incomplete)
  - Difficulty (a number between 1 and 5)

- When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa.

- The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read "4 Incomplete ToDo Items" or something similar.
