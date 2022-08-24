# Giphy Search

Simple GIF searching react app using Giphy API
> The purpose of this application is more about best practices than the application logic complexity

# Structure

```bash
├── public # publicly accessible assets
├── src
│   ├── api/
│   │   ├── search/
│   │   │   └── index.ts # Giphy API search method
│   │   └── api.ts # Application API layer
│   ├── components
│   │   ├── animation/
|   │   │   ├── loading.tsx
|   │   │   └── page-transition.tsx
│   │   ├── search/
│   │   │   └── search-from.tsx
│   │   └── skeleton/
│   │   │   ├── header/
│   │   │       └── index.tsx
│   │   │   └── footer/
│   │   │       └── index.tsx
│   ├── constants
│   │   └── animations.ts
│   ├── layouts
│   │   ├── main/
|   │   |   ├── theme.tsx
|   │   |   ├── global.tsx
│   │   │   └── index.tsx # Giphy API search method
│   ├── pages/
│   │   ├── home/
│   │   │   └── index.tsx
│   ├── types/
│   │   ├── gif.d.ts
|   |   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── .gitignore
```

# Guide

- register for an account <https://developers.giphy.com/>
- create a new app and genrate an API key
- rename `.env.example` to `.env`
- put your API key in `REACT_APP_GIPHY_API_KEY` enviorment variable
- run `npm run start`
