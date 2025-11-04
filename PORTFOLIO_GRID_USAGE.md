# Komponent PortfolioGrid - Instrukcja użycia

Komponent `PortfolioGrid.astro` służy do wyświetlania projektów portfolio w różnych konfiguracjach na stronie.

## Właściwości (Props)

| Właściwość | Typ | Domyślna wartość | Opis |
|-----------|-----|------------------|------|
| `limit` | `number` | brak | Maksymalna liczba projektów do wyświetlenia |
| `featured` | `boolean` | brak | Filtruj tylko polecane projekty (true) lub niepolecane (false) |
| `category` | `string` | brak | Filtruj projekty według kategorii |
| `excludeSlug` | `string` | brak | Wyklucz projekt o podanym slug (przydatne na stronie szczegółów) |
| `columns` | `2 \| 3 \| 4` | `3` | Liczba kolumn w siatce (responsywna) |
| `class` | `string` | `''` | Dodatkowe klasy CSS |

## Przykłady użycia

### 1. Wyświetl wszystkie projekty (siatka 3 kolumny)

```astro
---
import PortfolioGrid from '../components/PortfolioGrid.astro';
---

<PortfolioGrid />
```

### 2. Wyświetl tylko 6 najnowszych projektów

```astro
<PortfolioGrid limit={6} />
```

### 3. Wyświetl tylko polecane projekty

```astro
<PortfolioGrid featured={true} />
```

### 4. Wyświetl 3 polecane projekty w siatce 3-kolumnowej

```astro
<PortfolioGrid featured={true} limit={3} columns={3} />
```

### 5. Wyświetl projekty z konkretnej kategorii

```astro
<PortfolioGrid category="Branding & Design" />
```

### 6. Wyświetl powiązane projekty (na stronie szczegółów projektu)

```astro
---
// Na stronie /portfolio/[slug].astro
const { slug } = Astro.params;
const entry = await getEntry('portfolio', slug);
---

<Section>
  <h2>Powiązane projekty</h2>
  <PortfolioGrid
    category={entry.data.category}
    excludeSlug={slug}
    limit={3}
  />
</Section>
```

### 7. Sekcja "Featured Projects" na stronie głównej

```astro
---
import Section from '../components/Section.astro';
import Container from '../components/Container.astro';
import PortfolioGrid from '../components/PortfolioGrid.astro';
---

<Section>
  <Container>
    <h2 class="text-4xl font-bold text-center mb-12">Wybrane projekty</h2>
    <PortfolioGrid featured={true} limit={6} columns={3} />
  </Container>
</Section>
```

### 8. Siatka 2-kolumnowa z niestandardowymi klasami

```astro
<PortfolioGrid
  columns={2}
  limit={4}
  class="my-12"
/>
```

### 9. Pełna strona portfolio

```astro
---
import Layout from '../layouts/Layout.astro';
import Section from '../components/Section.astro';
import Container from '../components/Container.astro';
import PortfolioGrid from '../components/PortfolioGrid.astro';
---

<Layout title="Portfolio - CMDX">
  <Section>
    <Container>
      <h1 class="text-5xl font-bold text-center mb-4">Nasze projekty</h1>
      <p class="text-center text-gray-600 mb-12">
        Poznaj nasze najlepsze realizacje
      </p>

      <!-- Polecane projekty -->
      <h2 class="text-3xl font-bold mb-8">Wyróżnione projekty</h2>
      <PortfolioGrid featured={true} columns={3} class="mb-16" />

      <!-- Wszystkie pozostałe projekty -->
      <h2 class="text-3xl font-bold mb-8">Wszystkie projekty</h2>
      <PortfolioGrid featured={false} columns={3} />
    </Container>
  </Section>
</Layout>
```

## Uwagi techniczne

- Komponent automatycznie sortuje projekty według daty publikacji (najnowsze najpierw)
- Siatka jest w pełni responsywna:
  - Mobile: 1 kolumna
  - Tablet (md): 2 kolumny
  - Desktop (lg): 2/3/4 kolumny (w zależności od ustawienia)
- Jeśli nie ma projektów do wyświetlenia, pojawi się komunikat "Brak projektów do wyświetlenia"
- Komponent wykorzystuje istniejący komponent `Card.astro` do wyświetlania pojedynczych projektów
- Obrazy są automatycznie optymalizowane przez Astro

## Integracja z content collections

Komponent automatycznie pobiera dane z kolekcji `portfolio` zdefiniowanej w `src/content/config.ts`.

Każdy projekt portfolio powinien zawierać:
- `title` - tytuł projektu
- `coverImage` - główny obraz (wykorzystywany w karcie)
- `coverImageAlt` - tekst alternatywny dla obrazu
- `publishDate` - data publikacji (używana do sortowania)
- `featured` (opcjonalnie) - czy projekt jest polecany
- `category` (opcjonalnie) - kategoria projektu
