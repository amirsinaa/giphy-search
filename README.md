# Giphy Search

<p align="center">
  <img src="https://raw.githubusercontent.com/amirsinaa/giphy-search/main/.github/demo.gif" />
</p>

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
│   │   │   ├── loading.tsx
│   │   │   ├── styles.tsx
│   │   │   └── page-transition.tsx
│   │   ├── gif/
│   │   │   ├── styles.tsx
│   │   │   └── search-gif.tsx
│   │   ├── skeleton/
│   │   │   ├── header/
│   │   │   │   ├── styles.tsx
│   │   │   │   └── index.tsx
│   │   │   └── footer/
│   │   │   │   ├── styles.tsx
│   │   │   │   └── index.tsx
│   │   └── ui-elements/
│   │   │   ├── button/
│   │   │   │   ├── styles.tsx
│   │   │   │   ├── buttons.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── form/
│   │   │   │   └── index.tsx
│   │   │   ├── input/
│   │   │   │   ├── inputs.tsx
│   │   │   │   └── index.tsx
│   │   │   └── select/
│   │   │   │   ├── select-box-item.tsx
│   │   │   │   ├── styles.tsx
│   │   │   │   └── select-box.tsx
│   ├── constants
│   │   ├── theme.tsxgiphy.ts
│   │   └── animations.ts
│   ├── layouts
│   │   ├── main/
│   │   │   ├── theme.tsx
│   │   │   ├── global.tsx
│   │   │   ├── styles.tsx
│   │   │   └── index.tsx
│   ├── pages/
│   │   ├── home/
│   │   │   └── index.tsx
│   │   └──about
│   │   │   └── index.tsx
│   ├── types/
│   │   ├── gif.d.ts
│   │   └── index.ts
│   ├── index.tsx
│   ├── emotion.d.ts
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
