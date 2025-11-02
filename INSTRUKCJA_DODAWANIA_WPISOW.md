# Instrukcja dodawania wpisów Blog i Portfolio

Ten dokument zawiera szczegółowe instrukcje jak dodawać nowe wpisy na blog i do portfolio.

## Struktura projektu

```
src/
├── content/
│   ├── blog/           # Wpisy blogowe
│   ├── portfolio/      # Projekty portfolio
│   └── config.ts       # Konfiguracja kolekcji
├── layouts/
│   ├── BlogPostLayout.astro      # Layout dla bloga
│   ├── PortfolioLayout.astro     # Layout dla portfolio
│   └── SEOLayout.astro           # Bazowy layout SEO
└── pages/
    ├── blog/
    │   ├── index.astro           # Lista wpisów bloga
    │   └── [slug].astro          # Strona pojedynczego wpisu
    └── portfolio/
        ├── index.astro           # Lista projektów
        └── [slug].astro          # Strona pojedynczego projektu
```

## Dodawanie wpisu na blog

### 1. Utwórz nowy plik MDX

Utwórz nowy plik w folderze `src/content/blog/` z rozszerzeniem `.mdx`:

```
src/content/blog/moj-nowy-wpis.mdx
```

Nazwa pliku stanie się slug'iem URL (np. `/blog/moj-nowy-wpis`)

### 2. Dodaj frontmatter (metadane)

Na początku pliku dodaj metadane w formacie YAML:

```yaml
---
title: "Tytuł mojego wpisu"
description: "Krótki opis wpisu (150-160 znaków) - używany w meta description dla SEO"
keywords: ["słowo1", "słowo2", "słowo3"]
publishDate: 2024-03-15
updatedDate: 2024-03-20  # opcjonalne
author: "CMDX"
category: "Kategoria"     # opcjonalne
tags: ["tag1", "tag2"]
draft: false              # ustaw true aby ukryć wpis
---
```

### 3. Napisz treść w Markdown/MDX

Po frontmatter napisz treść używając składni Markdown:

```markdown
# Nagłówek H1

To jest paragraf z **pogrubionym** i *kursywą*.

## Nagłówek H2

- Punkt listy 1
- Punkt listy 2

### Nagłówek H3

> To jest cytat

![Alt text dla obrazu](/images/moj-obraz.jpg)

## Możesz też używać komponentów React!

<MyCustomComponent prop="value" />
```

### 4. Opcjonalnie: Dodaj obraz główny

Jeśli chcesz dodać obraz główny do wpisu:

1. Umieść obraz w folderze `src/content/blog/` lub `public/images/`
2. Dodaj do frontmatter:

```yaml
coverImage: ./moj-obraz.jpg
coverImageAlt: "Opis obrazu dla SEO"
```

### Pełny przykład wpisu blogowego

```mdx
---
title: "Jak nauczyć się Figma w 30 dni"
description: "Kompletny przewodnik dla początkujących jak opanować Figma w miesiąc. Sprawdzone metody i zasoby."
keywords: ["figma", "tutorial", "design", "ui/ux"]
publishDate: 2024-03-15
author: "CMDX"
category: "Tutoriale"
tags: ["figma", "ui/ux", "nauka"]
draft: false
---

# Jak nauczyć się Figma w 30 dni

Figma to jedno z najpopularniejszych narzędzi do projektowania UI/UX...

## Tydzień 1: Podstawy

W pierwszym tygodniu skup się na...

### Interface i nawigacja

Zapoznaj się z interfejsem Figma...
```

## Dodawanie projektu do portfolio

### 1. Utwórz nowy plik MDX

```
src/content/portfolio/nazwa-projektu.mdx
```

### 2. Dodaj frontmatter

Portfolio ma więcej pól niż blog:

```yaml
---
title: "Nazwa projektu"
description: "Opis projektu (używany w SEO i na liście projektów)"
keywords: ["keyword1", "keyword2"]
publishDate: 2024-03-15
projectDate: 2024-02-15    # Data realizacji projektu
client: "Nazwa klienta"    # opcjonalne
category: "Kategoria"      # np. "Branding", "UI/UX Design"
tags: ["tag1", "tag2"]
featured: true             # wyróżniony projekt (wyświetlany na górze)
projectUrl: "https://..."  # link do live projektu (opcjonalne)
---
```

### 3. Opcjonalnie: Dodaj obrazy

#### Obraz główny:

```yaml
coverImage: ./cover.jpg
coverImageAlt: "Opis obrazu"
```

#### Galeria (wiele obrazów):

```yaml
gallery:
  - image: ./img1.jpg
    alt: "Opis pierwszego obrazu"
    caption: "Opcjonalny podpis"
  - image: ./img2.jpg
    alt: "Opis drugiego obrazu"
    caption: "Inny podpis"
```

### Pełny przykład projektu portfolio

```mdx
---
title: "Redesign aplikacji mobilnej FinanceApp"
description: "Kompleksowy redesign aplikacji do zarządzania finansami osobistymi"
keywords: ["mobile", "ui/ux", "fintech", "redesign"]
publishDate: 2024-03-01
projectDate: 2024-02-01
client: "FinanceApp Inc."
category: "Mobile UI/UX"
tags: ["mobile", "ui/ux", "figma", "fintech"]
featured: true
projectUrl: "https://financeapp.com"
coverImage: ./financeapp-cover.jpg
coverImageAlt: "Screenshot aplikacji FinanceApp"
gallery:
  - image: ./screen1.jpg
    alt: "Ekran główny aplikacji"
    caption: "Nowy dashboard z przejrzystym układem"
  - image: ./screen2.jpg
    alt: "Lista transakcji"
---

# Redesign aplikacji mobilnej FinanceApp

FinanceApp to aplikacja do zarządzania finansami osobistymi...

## Wyzwanie

Klient zgłosił się z problemem...

## Rozwiązanie

Przeprowadziłem research i zaprojektowałem...
```

## Możliwości MDX

MDX pozwala używać składni Markdown razem z komponentami React:

### Import komponentów

```mdx
import { Alert } from '../components/Alert.jsx'

# Mój wpis

<Alert type="warning">
  To jest ostrzeżenie!
</Alert>
```

### Inline JavaScript

```mdx
export const year = new Date().getFullYear()

Ten artykuł został napisany w roku {year}.
```

### Komponenty w treści

```mdx
<div style={{ padding: '20px', background: '#f0f0f0' }}>
  To jest niestandardowy blok treści
</div>
```

## Optymalizacja SEO

### Metadane wymagane dla dobrego SEO:

1. **title** - unikalny, opisowy (50-60 znaków)
2. **description** - zachęcający opis (150-160 znaków)
3. **keywords** - 5-10 relevantnych słów kluczowych
4. **publishDate** - ważne dla freshness
5. **ogImage** - obraz do social media (1200x630px)

### Dodatkowe opcje SEO:

```yaml
canonical: "https://twoja-domena.pl/blog/wpis"  # URL kanoniczny
noindex: false   # ustaw true aby wykluczyć z indeksu Google
nofollow: false  # ustaw true dla linków nofollow
```

## Obrazy

### Gdzie umieszczać obrazy:

1. **Małe obrazy lokalne** (< 1MB):
   - `src/content/blog/` lub `src/content/portfolio/`
   - Astro je zoptymalizuje automatycznie

2. **Duże obrazy** (> 1MB):
   - `public/images/`
   - Podaj pełną ścieżkę: `/images/moj-obraz.jpg`

### Optymalizacja obrazów:

- Format: WebP lub JPG
- Rozmiar: max 2000px szerokość
- Kompresja: użyj TinyPNG lub podobnego
- Alt text: zawsze dodawaj opisowy alt text

## Workflow dodawania treści

1. Utwórz plik `.mdx` w odpowiednim folderze
2. Dodaj frontmatter z metadanymi
3. Napisz treść w Markdown
4. Dodaj obrazy (opcjonalnie)
5. Zapisz plik
6. Uruchom `npm run dev` aby zobaczyć podgląd
7. Sprawdź czy wszystko wygląda dobrze
8. Zbuduj stronę: `npm run build`
9. Wdróż na produkcję

## Przydatne komendy

```bash
# Uruchom development server
npm run dev

# Zbuduj stronę produkcyjną
npm run build

# Podgląd buildu produkcyjnego
npm run preview
```

## Przykładowe struktura frontmatter

### Blog - minimalna:
```yaml
---
title: "Tytuł"
description: "Opis"
keywords: ["keyword"]
publishDate: 2024-03-15
draft: false
---
```

### Blog - pełna:
```yaml
---
title: "Tytuł"
description: "Opis"
keywords: ["keyword1", "keyword2"]
publishDate: 2024-03-15
updatedDate: 2024-03-20
author: "CMDX"
category: "Kategoria"
tags: ["tag1", "tag2"]
coverImage: ./obraz.jpg
coverImageAlt: "Alt text"
ogImage: "/images/og-obraz.jpg"
canonical: "https://domena.pl/blog/wpis"
noindex: false
nofollow: false
draft: false
---
```

### Portfolio - minimalna:
```yaml
---
title: "Projekt"
description: "Opis"
keywords: ["keyword"]
publishDate: 2024-03-15
category: "Kategoria"
tags: ["tag1"]
featured: false
---
```

### Portfolio - pełna:
```yaml
---
title: "Projekt"
description: "Opis projektu"
keywords: ["keyword1", "keyword2"]
publishDate: 2024-03-15
projectDate: 2024-02-01
client: "Klient"
category: "Kategoria"
tags: ["tag1", "tag2"]
featured: true
projectUrl: "https://projekt.com"
coverImage: ./cover.jpg
coverImageAlt: "Alt text"
gallery:
  - image: ./img1.jpg
    alt: "Alt"
    caption: "Podpis"
ogImage: "/images/og.jpg"
canonical: "https://domena.pl/portfolio/projekt"
noindex: false
nofollow: false
---
```

## Wsparcie

Jeśli masz pytania lub problemy, sprawdź:
- Dokumentację Astro: https://docs.astro.build
- Dokumentację MDX: https://mdxjs.com
- Przykładowe pliki w `src/content/blog/` i `src/content/portfolio/`
