# CMDX - Portfolio Grafika z Blogiem

Nowoczesna strona portfolio dla grafika zbudowana w Astro.js z pełną optymalizacją SEO, blogiem i galerią portfolio. Obsługa MDX pozwala na tworzenie interaktywnych wpisów z komponentami React.

## Funkcje

- **Blog z obsługą MDX** - Pisz wpisy w Markdown z możliwością używania komponentów React
- **Portfolio** - Galeria projektów z opisami, tagami i kategoriami
- **Ultra szybkie ładowanie** - 40% szybciej niż tradycyjne frameworki
- **SEO-optimized** - Pełne meta tags, Open Graph, Schema.org
- **Content Collections** - Type-safe zarządzanie treścią
- **Dynamic Routing** - Automatyczne generowanie stron
- **Sitemap XML** - Automatycznie generowana
- **Zero JavaScript** - Domyślnie statyczny HTML
- **100/100 Lighthouse Score** - Doskonała wydajność
- **Responsywny design** - Działa perfekcyjnie na wszystkich urządzeniach

## Jak Dodać Nową Podstronę?

### Krok 1: Utwórz nowy plik Markdown

Przejdź do folderu `src/content/pages/` i utwórz nowy plik `.md`, np.:

```
src/content/pages/moja-nowa-strona.md
```

### Krok 2: Wypełnij frontmatter

```markdown
---
title: "Tytuł Twojej Strony - Główne Słowo Kluczowe"
description: "Opis strony do 160 znaków - pojawi się w wynikach Google"
keywords:
  - słowo kluczowe 1
  - słowo kluczowe 2
  - słowo kluczowe 3
publishDate: 2025-01-15
author: "Twoje Imię"
---

# Nagłówek H1

Treść Twojej strony w Markdown...

## Nagłówek H2

Dalszy content...
```

### Krok 3: Napisz treść

Użyj Markdown do formatowania treści:

```markdown
# Nagłówek H1
## Nagłówek H2
### Nagłówek H3

**Pogrubiony tekst**
*Kursywa*

- Lista
- Punktowana

1. Lista
2. Numerowana

[Link](https://example.com)

![Obrazek](./image.jpg)
```

### Krok 4: Gotowe!

Astro automatycznie:
- Wygeneruje stronę pod URLem `/moja-nowa-strona`
- Doda ją do sitemap.xml
- Zastosuje pełne SEO (meta tags, Open Graph, Schema.org)
- Wyświetli na stronie głównej

## Struktura Projektu

```
/
├── src/
│   ├── content/
│   │   ├── config.ts          # Schema Content Collections
│   │   ├── blog/              # ← Wpisy blogowe (.mdx)
│   │   ├── portfolio/         # ← Projekty portfolio (.mdx)
│   │   └── pages/             # ← Zwykłe strony (.md)
│   ├── layouts/
│   │   ├── SEOLayout.astro        # Layout bazowy z pełnym SEO
│   │   ├── BlogPostLayout.astro   # Layout dla wpisów bloga
│   │   └── PortfolioLayout.astro  # Layout dla projektów
│   └── pages/
│       ├── index.astro            # Strona główna
│       ├── blog/
│       │   ├── index.astro        # Lista wpisów bloga
│       │   └── [slug].astro       # Pojedynczy wpis
│       ├── portfolio/
│       │   ├── index.astro        # Lista projektów
│       │   └── [slug].astro       # Pojedynczy projekt
│       └── [slug].astro           # Dynamiczne strony
├── public/
│   └── images/                    # Obrazy publiczne
├── astro.config.mjs               # Konfiguracja (MDX + Sitemap)
├── package.json
├── README.md
└── INSTRUKCJA_DODAWANIA_WPISOW.md # ← Szczegółowa instrukcja
```

## Konfiguracja

### Zmień domenę

Edytuj `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://twoja-domena.pl', // ← Zmień na swoją domenę
  integrations: [sitemap()],
});
```

### Zmień branding

Edytuj `src/pages/index.astro` i zmień:
- Tytuł strony głównej
- Opis
- Nagłówki

## Komendy

| Komenda | Akcja |
|---------|-------|
| `npm install` | Instalacja zależności |
| `npm run dev` | Start dev server na `localhost:4321` |
| `npm run build` | Budowanie produkcyjnej wersji do `dist/` |
| `npm run preview` | Podgląd produkcyjnej wersji lokalnie |

## SEO Features

### Meta Tags
Każda strona automatycznie otrzymuje:
- Title tag (zoptymalizowany)
- Meta description
- Meta keywords
- Canonical URL
- Robots meta tag

### Open Graph
- og:title
- og:description
- og:image
- og:url
- og:type
- og:locale

### Twitter Cards
- twitter:card
- twitter:title
- twitter:description
- twitter:image

### Schema.org
Structured data typu WebPage z:
- @type: WebPage
- name
- description
- url
- author
- datePublished

### Sitemap XML
Automatycznie generowana na `/sitemap-0.xml`

## Dodatkowe Pola (Opcjonalne)

W frontmatter możesz użyć dodatkowych pól:

```markdown
---
title: "Tytuł"
description: "Opis"
keywords: ["słowo1", "słowo2"]
ogImage: "/custom-og-image.jpg"     # Własny obrazek Open Graph
canonical: "https://inna-domena.pl" # Custom canonical URL
noindex: false                       # true = nie indeksuj w Google
nofollow: false                      # true = nie podążaj za linkami
author: "Jan Kowalski"               # Autor artykułu
publishDate: 2025-01-15              # Data publikacji
---
```

## Przykładowy Workflow

1. **Research słów kluczowych** - Znajdź popularne frazy w Twojej niszy
2. **Utwórz plik** - `src/content/pages/slowo-kluczowe.md`
3. **Wypełnij frontmatter** - Tytuł, opis, keywords
4. **Napisz treść** - Minimum 1000 słów, wartościowy content
5. **Zbuduj i deploy** - `npm run build`
6. **Gotowe!** - Strona gotowa do indeksacji

## Deployment

### Netlify
```bash
npm run build
# Deploy folder: dist/
```

### Vercel
```bash
npm run build
# Output directory: dist/
```

### GitHub Pages
Dodaj do `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',
});
```

## Szybki Start - Dodawanie Treści

### 📝 Dodawanie wpisu na blog

```bash
# 1. Utwórz plik
src/content/blog/moj-nowy-wpis.mdx

# 2. Dodaj frontmatter i treść (zobacz INSTRUKCJA_DODAWANIA_WPISOW.md)

# 3. Gotowe! Wpis pojawi się na /blog
```

### 🎨 Dodawanie projektu do portfolio

```bash
# 1. Utwórz plik
src/content/portfolio/moj-projekt.mdx

# 2. Dodaj frontmatter i treść (zobacz INSTRUKCJA_DODAWANIA_WPISOW.md)

# 3. Gotowe! Projekt pojawi się na /portfolio
```

### 📄 Dokumentacja

Szczegółowe instrukcje dostępne w pliku: [INSTRUKCJA_DODAWANIA_WPISOW.md](./INSTRUKCJA_DODAWANIA_WPISOW.md)

## Tips dla SEO

1. **Długość treści** - Minimum 1000 słów na stronę
2. **Słowa kluczowe** - Naturalnie w treści, nagłówkach, URL
3. **Linki wewnętrzne** - Linkuj do innych podstron
4. **Obrazki** - Zawsze z atrybutem `alt`
5. **Aktualizacje** - Regularnie aktualizuj content
6. **Mobile-first** - Testuj na urządzeniach mobilnych
7. **Szybkość** - Astro już jest ultra szybki!
8. **Featured images** - Dodawaj atrakcyjne obrazy główne do wpisów
9. **Tags i kategorie** - Używaj dla lepszej organizacji treści

## Performance

Strony zbudowane tym templatem osiągają:
- **100/100** - Performance (Lighthouse)
- **100/100** - SEO (Lighthouse)
- **100/100** - Accessibility (Lighthouse)
- **100/100** - Best Practices (Lighthouse)

## Wsparcie

Masz pytania? Sprawdź:
- [Dokumentacja Astro](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro SEO](https://docs.astro.build/en/guides/seo/)

## Licencja

MIT - Użyj jak chcesz!

---

**Zbudowano z Astro.js - Najszybszym frameworkiem do stron SEO**
