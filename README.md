# PlantCareHub

PlantCareHub is a React + Vite web application that helps users care for their
plants. It combines AI-powered plant disease detection, a plant care chatbot, a
plant library, and environmental analysis behind a simple authenticated UI.

## Features

- **FloraCheck** — upload a photo or use the camera to detect plant diseases and
  get symptoms, cause, and treatment.
- **Chatbot** — ask plant-care questions and get AI-generated guidance.
- **Plant Library & Details** — browse plants and view detailed care information.
- **Environmental Analysis** — insights related to the plant's environment.
- **Authentication** — register, login, and a full password-reset flow
  (forget password → verify code → set new password), with protected routes.

## Tech Stack

- React 18 + Vite
- React Router DOM
- Tailwind CSS
- Formik + Yup (forms & validation)
- Axios (API calls)
- Framer Motion (animations)

## Getting Started

```bash
# install dependencies
npm install

# copy env file and set the API base URL if needed
cp .env.example .env

# start the dev server
npm run dev
```

## Environment Variables

| Variable             | Description                                   | Default |
| -------------------- | --------------------------------------------- | ------- |
| `VITE_API_BASE_URL`  | Base URL for the backend API                  | `/api`  |

In development, requests to `/api` are proxied to the backend (see
`vite.config.js`). In production, set `VITE_API_BASE_URL` to the backend origin.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
