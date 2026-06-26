// Ambient declarations for side-effect / module CSS imports so TypeScript
// doesn't flag `import './globals.css'` (TS2882).
declare module '*.css';
