# React-Fundamentals

This repo contains two independent Create React App (CRA) learning projects. They share no code and have no backend, database, or environment variables.

- `ContextAPI/context_api` — React Context API + `react-router-dom` routing demo.
- `React Component Life Cycle/react_compoent_lifecycle` — class component lifecycle demo.

## Cursor Cloud specific instructions

- Each project is self-contained. Run all commands (`npm start`, `npm test`, `npm run build`) from inside the project's own directory. The second project's path contains spaces, so quote it: `cd "React Component Life Cycle/react_compoent_lifecycle"`.
- Dev servers default to port 3000. To run both at once, set `PORT` (e.g. `PORT=3001 npm start`). Use `BROWSER=none` in this headless environment to stop CRA trying to open a browser.
- `npm test` runs in watch mode by default; set `CI=true` for a single non-interactive run.
- Known pre-existing issues (not environment problems — do not "fix" as setup):
  - `react_compoent_lifecycle`: `src/App.js` has an unused `logo` import, which is only a warning under `npm start` but fails `npm run build` because CRA sets `CI=true` and treats warnings as errors. Its `src/App.test.js` is the default CRA test looking for "learn react" and fails against the actual app.
  - `context_api` passes both `npm test` and `npm run build`.
