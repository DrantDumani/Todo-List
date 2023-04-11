# Todo-List

This is a Todo List app created by following the curriculum on [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list). It's themed around encouraging users to store tasks that are not strictly work related, aiming to help strike a work / life balance.

This webapp uses localStorage, storing user data through cookies when allowed. It functions on both mobile and desktop.

A modular approach was taken with this project, in order to separate responsibilities.

## Technologies used

HTML, SCSS, Webpack, Javascript

## Bugs

- ~~ If a user is viewing one of the categories (Today, Tomorrow, Work, Personal) while attempting to delete a project, then the current category is wiped clean entirely ~~

- There's another bug where tasks are sometimes overwritten or duplicated. I will have to isolate and look into that one. Maybe run a console.log to see where it occurs. It most likely has to do with how tasks are edited.

- ~~ When editing tasks, if editing a task would remove it from the category tab a bug occurs where the task edit modal stays open and the console displays an error. This can be fixed by just closing all modals once a task is edited. ~~
