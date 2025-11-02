# Rozwiązywanie Problemów z Tailwind CSS

## Problem: Strona wygląda "rozjechana" - Tailwind nie działa

### Objawy:
- Strona nie ma żadnych stylów
- Wszystkie elementy są wyświetlane jedna pod drugą
- Brak kolorów, paddingów, marginesów
- Wygląda jak zwykły niezostylowany HTML

### Rozwiązanie:

#### 1. Sprawdź czy istnieje `tailwind.config.mjs`

Plik **musi** istnieć w głównym katalogu projektu:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

**Jeśli nie istnieje - utwórz go!**

#### 2. Sprawdź `src/styles/global.css`

Plik musi zawierać:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 3. Sprawdź `src/layouts/SEOLayout.astro`

Na początku pliku (w sekcji `---`) musi być:

```astro
---
import '../styles/global.css';
// ... reszta kodu
---
```

#### 4. Sprawdź `astro.config.mjs`

```javascript
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(), // <-- WAŻNE: bez applyBaseStyles: false
    mdx(),
    sitemap(),
  ],
});
```

#### 5. Upewnij się, że masz właściwą wersję Tailwind

W `package.json` powinna być wersja 3.x:

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

Jeśli masz wersję 4.x, odinstaluj i zainstaluj właściwą:

```bash
npm uninstall tailwindcss @tailwindcss/vite
npm install -D tailwindcss@^3.4.0
```

#### 6. Zrestartuj serwer deweloperski

**ZAWSZE** po zmianach w konfiguracji:

```bash
# Zatrzymaj serwer (Ctrl+C)
# Uruchom ponownie:
npm run dev
```

#### 7. Wyczyść cache (jeśli nadal nie działa)

```bash
# Usuń folder node_modules i zainstaluj ponownie
rm -rf node_modules
npm install
npm run dev
```

---

## Problem: Port 4321 jest zajęty

### Objawy:
```
Port 4321 is in use, trying another one...
Local    http://localhost:4322/
```

### Rozwiązanie:

#### Windows:
```bash
# Znajdź proces na porcie 4321
netstat -ano | findstr :4321

# Zabij proces (zamień PID na numer z poprzedniej komendy)
taskkill /PID [numer_PID] /F
```

#### Linux/Mac:
```bash
# Znajdź i zabij proces na porcie 4321
lsof -ti:4321 | xargs kill -9
```

Lub po prostu użyj innego portu (Astro zrobi to automatycznie).

---

## Problem: Tailwind nie widzi moich komponentów

### Objawy:
- Klasy Tailwind działają w niektórych plikach, ale nie w innych
- Nowe komponenty nie mają stylów

### Rozwiązanie:

Sprawdź `tailwind.config.mjs` - sekcja `content` musi obejmować wszystkie pliki:

```javascript
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/components/**/*.astro', // Komponenty
		'./src/layouts/**/*.astro',     // Layouty
		'./src/pages/**/*.astro',       // Strony
	],
	// ...
}
```

Po zmianie **zrestartuj serwer**!

---

## Problem: Style działają w dev, ale nie po build

### Objawy:
- `npm run dev` - wszystko działa
- `npm run build` + `npm run preview` - brak stylów

### Rozwiązanie:

1. Sprawdź czy `content` w `tailwind.config.mjs` obejmuje wszystkie pliki
2. Zbuduj ponownie:
   ```bash
   rm -rf dist
   npm run build
   ```

---

## Problem: Konflikty stylów (część Tailwind działa, część nie)

### Rozwiązanie:

Sprawdź czy nie masz konfliktujących stylów CSS:

1. **Usuń stare style** z `SEOLayout.astro`:
   ```astro
   <!-- NIE rób tego: -->
   <style is:global>
     * { margin: 0; padding: 0; }
   </style>
   ```

2. **Używaj tylko Tailwind** lub dodaj custom style w `global.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   /* Twoje custom style tutaj */
   @layer components {
     .btn-custom {
       @apply px-4 py-2 bg-blue-500 text-white rounded;
     }
   }
   ```

---

## Checklist Debugowania

Gdy Tailwind nie działa, sprawdź po kolei:

- [ ] Czy istnieje `tailwind.config.mjs`?
- [ ] Czy `src/styles/global.css` ma dyrektywy `@tailwind`?
- [ ] Czy `global.css` jest zaimportowany w layoutzie?
- [ ] Czy `@astrojs/tailwind` jest w `integrations`?
- [ ] Czy masz Tailwind CSS v3 (nie v4)?
- [ ] Czy zrestartowałeś serwer po zmianach?
- [ ] Czy w przeglądarce widzisz import Tailwind w devtools?

---

## Szybka Naprawa (Nuclear Option)

Jeśli nic nie pomaga:

```bash
# 1. Usuń wszystko
rm -rf node_modules
rm package-lock.json
rm -rf dist
rm -rf .astro

# 2. Zainstaluj od nowa
npm install

# 3. Upewnij się że masz tailwind.config.mjs

# 4. Uruchom
npm run dev
```

---

## Dalsze Problemy?

1. Sprawdź console w przeglądarce (F12) - czy są błędy?
2. Sprawdź terminal - czy Astro wyrzuca błędy?
3. Zobacz [Astro Docs - Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
4. Zobacz [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Ostatnia aktualizacja:** 2024-11-01
