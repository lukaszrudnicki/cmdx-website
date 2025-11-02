# Komponenty Tailwind CSS

Ten dokument opisuje dostępne komponenty zbudowane z Tailwind CSS, które możesz używać w swoim portfolio.

## 📦 Dostępne Komponenty

### Button

Przyciski w różnych wariantach i rozmiarach.

```astro
---
import Button from '../components/Button.astro';
---

<!-- Warianty -->
<Button href="/portfolio" variant="primary">Primary Button</Button>
<Button href="/blog" variant="secondary">Secondary Button</Button>
<Button href="/contact" variant="outline">Outline Button</Button>

<!-- Rozmiary -->
<Button href="#" size="sm">Small</Button>
<Button href="#" size="md">Medium</Button>
<Button href="#" size="lg">Large</Button>

<!-- Bez linku (zwykły button) -->
<Button>Click Me</Button>
```

**Props:**
- `href` (optional) - Link URL
- `variant` - 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size` - 'sm' | 'md' | 'lg' (default: 'md')
- `class` - Dodatkowe klasy CSS

---

### Card

Karty do wyświetlania wpisów bloga, projektów portfolio, etc.

```astro
---
import Card from '../components/Card.astro';
---

<Card
  href="/blog/moj-wpis"
  title="Tytuł Wpisu"
  description="Krótki opis wpisu..."
  image="https://images.unsplash.com/photo-..."
  imageAlt="Alt text"
  date="15 marca 2024"
  tags={['design', 'tutorial']}
  featured={true}
/>
```

**Props:**
- `href` (optional) - Link do pełnego wpisu
- `title` (required) - Tytuł karty
- `description` - Opis
- `image` - URL obrazu
- `imageAlt` - Alt text dla obrazu
- `tags` - Array tagów
- `date` - Data (string)
- `featured` - Czy wyróżniony (boolean)
- `class` - Dodatkowe klasy CSS

---

### Container

Kontener z max-width i paddingiem.

```astro
---
import Container from '../components/Container.astro';
---

<Container size="lg">
  <!-- Treść -->
</Container>
```

**Props:**
- `size` - 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')
- `class` - Dodatkowe klasy CSS

**Rozmiary:**
- `sm` - max-width: 768px (3xl)
- `md` - max-width: 1024px (5xl)
- `lg` - max-width: 1280px (7xl)
- `xl` - max-width: 1400px

---

### Hero

Sekcja hero z animowanym tłem i gradientami.

```astro
---
import Hero from '../components/Hero.astro';
import Button from '../components/Button.astro';
---

<Hero
  title="Tytuł Hero"
  subtitle="Podtytuł hero"
>
  <Button href="/portfolio" variant="primary" size="lg">
    CTA Button
  </Button>
</Hero>
```

**Props:**
- `title` (required) - Główny tytuł
- `subtitle` - Podtytuł
- `class` - Dodatkowe klasy CSS

**Slot:** Przyciski lub inne elementy CTA

---

### Section

Sekcja z opcjonalnym tytułem i różnymi tłami.

```astro
---
import Section from '../components/Section.astro';
---

<Section
  title="Tytuł Sekcji"
  subtitle="Podtytuł sekcji"
  background="gradient"
>
  <!-- Treść sekcji -->
</Section>
```

**Props:**
- `title` - Tytuł sekcji
- `subtitle` - Podtytuł
- `background` - 'white' | 'gray' | 'gradient' (default: 'white')
- `class` - Dodatkowe klasy CSS

---

### Nav

Nawigacja z logo i menu (mobile-responsive).

```astro
---
import Nav from '../components/Nav.astro';
---

<Nav />
```

Aby zmienić linki w nawigacji, edytuj plik `src/components/Nav.astro`:

```javascript
const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/blog', label: 'Blog' },
  { href: '/portfolio', label: 'Portfolio' },
  // Dodaj więcej linków tutaj
];
```

---

### Footer

Stopka strony z linkami i social media.

```astro
---
import Footer from '../components/Footer.astro';
---

<Footer />
```

Aby dostosować Footer, edytuj plik `src/components/Footer.astro`.

---

## 🎨 Przykład Użycia - Kompletna Strona

```astro
---
import SEOLayout from '../layouts/SEOLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import Section from '../components/Section.astro';
import Card from '../components/Card.astro';
import Button from '../components/Button.astro';
import Footer from '../components/Footer.astro';

const posts = await getCollection('blog');
---

<SEOLayout
  title="Moja Strona"
  description="Opis strony"
  keywords={['keyword1', 'keyword2']}
>
  <Nav />

  <Hero
    title="Witaj na Mojej Stronie"
    subtitle="Kreatywne rozwiązania graficzne"
  >
    <Button href="/portfolio" variant="primary" size="lg">
      Zobacz Portfolio
    </Button>
    <Button href="/blog" variant="outline" size="lg">
      Czytaj Blog
    </Button>
  </Hero>

  <Section
    title="Najnowsze Wpisy"
    subtitle="Z mojego bloga"
    background="white"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card
          href={`/blog/${post.slug}`}
          title={post.data.title}
          description={post.data.description}
          image="https://via.placeholder.com/600x400"
          tags={post.data.tags}
        />
      ))}
    </div>
  </Section>

  <Footer />
</SEOLayout>
```

## 🎨 Kolory i Gradienty

Projekt używa następujących kolorów:

### Główne Kolory
- **Purple**: `purple-500`, `purple-600`, `purple-700`
- **Pink**: `pink-500`, `pink-600`
- **Blue**: `blue-500`, `cyan-500`
- **Orange/Red**: `orange-500`, `red-500`

### Gradienty
```css
/* Purple to Pink */
bg-gradient-to-r from-purple-600 to-pink-600

/* Purple to Blue */
bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50

/* Pink to Red */
bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
```

## 🌙 Dark Mode

Wszystkie komponenty wspierają dark mode. Używaj klas z prefiksem `dark:`:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Dark mode ready!
</div>
```

## 📐 Grid Layouts

### 2 kolumny (responsywne)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Elementy -->
</div>
```

### 3 kolumny (responsywne)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Elementy -->
</div>
```

### Auto-fit
```html
<div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
  <!-- Elementy -->
</div>
```

## 💡 Wskazówki

1. **Konsystencja**: Używaj tych samych komponentów w całym projekcie
2. **Spacing**: Używaj Tailwind spacing scale (px-4, py-8, gap-6, etc.)
3. **Responsywność**: Zawsze testuj na różnych rozmiarach ekranu
4. **Dostępność**: Komponenty mają wbudowane aria-labels i właściwe tagi semantyczne
5. **Performance**: Obrazy używają lazy loading domyślnie

## 🔧 Dostosowywanie

### Własne Kolory

Edytuj `tailwind.config.mjs` (jeśli istnieje) lub używaj klas Tailwind bezpośrednio:

```html
<div class="bg-[#custom-color]">Custom color</div>
```

### Własne Komponenty

Twórz nowe komponenty w `src/components/`:

```astro
---
// src/components/MyComponent.astro
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="p-6 bg-white rounded-lg shadow-lg">
  <h3 class="text-2xl font-bold">{title}</h3>
  <slot />
</div>
```

## 📚 Dokumentacja

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Astro Docs](https://docs.astro.build)
- [Tailwind UI Components](https://tailwindui.com)

---

**Potrzebujesz pomocy?** Zobacz przykłady w `src/pages/index.astro` lub sprawdź kod poszczególnych komponentów w `src/components/`.
