# Przewodnik po optymalizacji obrazów w Astro

## Dlaczego używać `src/assets/` zamiast `public/`?

### ❌ `public/` - BEZ optymalizacji
- Obrazy są serwowane dokładnie tak, jak zostały zapisane
- Brak kompresji, brak resizingu
- Brak generowania wielu formatów (WebP, AVIF)
- Brak lazy loadingu
- Większe pliki = wolniejsze ładowanie strony

### ✅ `src/assets/` - Z optymalizacją Astro
- Automatyczna kompresja obrazów
- Automatyczne generowanie responsywnych wersji
- Konwersja do nowoczesnych formatów (WebP, AVIF)
- Built-in lazy loading
- Lepsze SEO i Core Web Vitals

---

## Jak używać zoptymalizowanych obrazów

### 1. Umieść obrazy w `src/assets/`

```
src/
  assets/
    portfolio/
      moj-projekt-cover.jpg
      moj-projekt-galeria-1.jpg
      moj-projekt-galeria-2.jpg
    blog/
      moj-artykul-cover.jpg
```

### 2. W frontmatter pliku MDX użyj relatywnej ścieżki

```yaml
---
title: "Mój projekt"
# Zdjęcie główne (cover)
coverImage: ../../assets/portfolio/moj-projekt-cover.jpg
coverImageAlt: "Opis zdjęcia dla dostępności"

# Galeria (opcjonalna)
gallery:
  - src: ../../assets/portfolio/moj-projekt-galeria-1.jpg
    alt: "Opis pierwszego zdjęcia"
    caption: "Podpis pod pierwszym zdjęciem"
  - src: ../../assets/portfolio/moj-projekt-galeria-2.jpg
    alt: "Opis drugiego zdjęcia"
    caption: "Podpis pod drugim zdjęciem"
---
```

### 3. W treści MDX możesz też dodawać obrazy

```markdown
## Moja sekcja

![Opis alternatywny](../../assets/portfolio/screenshot.jpg)
*Opcjonalny podpis pod zdjęciem*
```

---

## Pełny przykład - Nowy wpis portfolio

Stwórz plik: `src/content/portfolio/moj-nowy-projekt.mdx`

```mdx
---
title: "Redesign aplikacji mobilnej BankApp"
description: "Kompleksowy redesign aplikacji bankowej z naciskiem na UX i dostępność"
keywords: ["mobile", "ui/ux", "redesign", "banking", "app"]
publishDate: 2024-11-01
projectDate: 2024-10-15
client: "BankApp"
category: "UI/UX Design"
tags: ["mobile design", "ui/ux", "figma", "prototyping"]

# Zdjęcie główne projektu
coverImage: ../../assets/portfolio/bankapp-cover.jpg
coverImageAlt: "Główny ekran aplikacji BankApp po redesignie"

# Galeria zdjęć projektu
gallery:
  - src: ../../assets/portfolio/bankapp-before-after.jpg
    alt: "Porównanie przed i po redesignie"
    caption: "Stary vs nowy design - znacząca poprawa czytelności"
  - src: ../../assets/portfolio/bankapp-user-flow.jpg
    alt: "Schemat user flow"
    caption: "Uproszczony proces przelewu - z 7 do 3 kroków"
  - src: ../../assets/portfolio/bankapp-components.jpg
    alt: "System komponentów"
    caption: "Design system - komponenty i wzorce"

featured: true
projectUrl: "https://example.com/bankapp"
ogImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630"
---

## Wyzwanie

Aplikacja BankApp była przestarzała i miała niski wskaźnik użyteczności...

![Ekran onboardingu](../../assets/portfolio/bankapp-onboarding.jpg)
*Nowy proces onboardingu - szybki i intuicyjny*

## Rozwiązanie

Przeprojektowałem aplikację od podstaw...
```

---

## Formaty obrazów - co wybrać?

### Najlepsze formaty dla portfolio grafika:
- **JPG** - zdjęcia, mockupy (dobra kompresja)
- **PNG** - grafiki z przezroczystością, loga
- **WebP** - nowoczesny format (Astro automatycznie go generuje!)

### Zalecane rozmiary:
- Cover image: min. 1920x1080px (Full HD)
- Galeria: min. 1200x800px
- Obrazy w treści: 800-1200px szerokości

### Optymalizacja przed uplodem:
Mimo że Astro optymalizuje obrazy, warto przed uplodem:
1. Zmniejszyć rozmiar do maksymalnie 2500px szerokości
2. Użyć narzędzi typu TinyPNG lub ImageOptim
3. Docelowy rozmiar pliku: < 500KB dla JPG, < 200KB dla PNG

---

## Migracja z `public/` do `src/assets/`

Jeśli masz już obrazy w `public/images/`:

1. **Przenieś pliki:**
   ```bash
   # Z:
   public/images/portfolio/projekt.jpg

   # Do:
   src/assets/portfolio/projekt.jpg
   ```

2. **Zaktualizuj frontmatter:**
   ```yaml
   # Było:
   coverImage: "/images/portfolio/projekt.jpg"

   # Powinno być:
   coverImage: ../../assets/portfolio/projekt.jpg
   ```

3. **Zaktualizuj obrazy w treści:**
   ```markdown
   # Było:
   ![Opis](/images/portfolio/screenshot.jpg)

   # Powinno być:
   ![Opis](../../assets/portfolio/screenshot.jpg)
   ```

---

## FAQ

**Q: Czy mogę nadal używać zewnętrznych URL (np. Unsplash)?**
A: Tak! Dla `ogImage` możesz używać zewnętrznych URL. Ale dla `coverImage` i `gallery` lepiej używać lokalnych plików z `src/assets/`.

**Q: Co się stanie jeśli plik nie istnieje?**
A: Astro zgłosi błąd podczas budowania. To dobrze - łapie błędy wcześnie!

**Q: Czy muszę się martwić o WebP i AVIF?**
A: Nie! Astro automatycznie generuje te formaty i serwuje odpowiedni format w zależności od przeglądarki.

**Q: Jak sprawdzić czy optymalizacja działa?**
A:
1. Zbuduj projekt: `npm run build`
2. Zobacz wygenerowane pliki w `dist/_astro/`
3. Zobaczysz wiele wersji tego samego obrazu w różnych rozmiarach i formatach!

---

## Podsumowanie

✅ **Zawsze używaj** `src/assets/` dla obrazów portfolio i bloga
✅ **Używaj** relatywnych ścieżek w frontmatter
✅ **Dodawaj** `alt` text dla dostępności
✅ **Optymalizuj** obrazy przed uplodem (< 2500px, < 500KB)
❌ **Unikaj** `public/` dla głównych obrazów projektu
