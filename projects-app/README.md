# EE461L Task 3 – React Projects App

## Overview

A custom React front end for a project resource manager. Users can browse projects, join/leave them, and check out or return hardware sets.

## How to Install

```bash
cd projects-app
npm install
```

## How to Run

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## How to Zip for Submission

**Important:** Do NOT include `node_modules` in the zip.

```bash
# From the repo root:
cd projects-app
rm -rf node_modules
cd ..
zip -r projects-app.zip projects-app
```

Or, if you prefer to keep node_modules intact for development:

```bash
zip -r projects-app.zip projects-app -x "projects-app/node_modules/*"
```

## Rubric Checklist

| Requirement | Where It's Satisfied |
|---|---|
| **2+ MUI library components** | `AppBar` + `Typography` in `HeaderBar.js`; `Card` + `Chip` in `ProjectCard.js`; `Button` + `TextField` in `HardwareSetRow.js` |
| **2+ custom components (besides Projects)** | `HeaderBar.js`, `ProjectCard.js`, `HardwareSetRow.js` |
| **Reuse one custom component multiple times** | `ProjectCard` rendered 3x in `Projects.js`; `HardwareSetRow` rendered 2x per project in `ProjectCard.js` |
| **Props parent to child (x2)** | (1) `Projects` passes `title` to `HeaderBar`; (2) `Projects` passes `project`, handlers to `ProjectCard`; (3) `ProjectCard` passes hw data, handlers to `HardwareSetRow` |
| **Custom event handler modifying state** | `handleToggleJoin` in `Projects.js` toggles `isJoined` state; `handleCheckOut` / `handleCheckIn` modify hardware quantities; `handleQtyChange` updates input state |
| **No backend / no database** | All data is hardcoded in `INITIAL_PROJECTS` inside `Projects.js` |
| **Functional components + hooks** | All components are functions; `useState` used in `Projects.js` |

## Component Hierarchy

```
App
 └── Projects (state lives here)
     ├── HeaderBar (receives title prop)
     └── ProjectCard x 3 (receives project data + handlers)
         └── HardwareSetRow x 2 per card (receives hw data + handlers)
```
