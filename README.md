# decodeJWT

Small Node + TypeScript project to decode JWTs and run a minimal Express server.

Prerequisites
- Node.js (16+)

Install

```bash
npm install
```

Build

```bash
npm run build
```

Run (development)

```bash
npm start
```

Run (production / compiled)

```bash
node dist/decodejwt.js
```

Notes
- `start` uses `ts-node` to run `src/decodejwt.ts`.
- `build` compiles TypeScript into the `dist` folder.
