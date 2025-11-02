# Szybki Start - Portfolio Grafika

Twoja strona jest gotowa! Ten przewodnik pomoże Ci szybko rozpocząć pracę.

## 🚀 1. Uruchom Serwer Deweloperski

```bash
npm install  # Jeśli jeszcze nie zainstalowałeś
npm run dev
```

Otwórz przeglądarkę: http://localhost:4321

## 📝 2. Co masz dostępne?

### Strony:
- **`/`** - Strona główna
- **`/blog`** - Blog z 2 przykładowymi wpisami
- **`/portfolio`** - Portfolio z 2 przykładowymi projektami

### Przykładowa treść:
✅ Blog: "Jak rozpocząć karierę grafika?", "Najlepsze fonty 2024"
✅ Portfolio: "Logo dla Tech Startup", "Redesign sklepu e-commerce"

## ➕ 3. Dodaj Swoją Treść

### Dodaj wpis na blog:
1. Utwórz plik: `src/content/blog/moj-wpis.mdx`
2. Dodaj frontmatter i treść (patrz przykłady)
3. Zapisz - pojawi się na `/blog`

### Dodaj projekt do portfolio:
1. Utwórz plik: `src/content/portfolio/moj-projekt.mdx`
2. Dodaj frontmatter i treść (patrz przykłady)
3. Zapisz - pojawi się na `/portfolio`

📖 **Szczegółowe instrukcje**: [INSTRUKCJA_DODAWANIA_WPISOW.md](./INSTRUKCJA_DODAWANIA_WPISOW.md)

## 🎨 4. Personalizacja

### Zmień dane na stronie głównej:
Edytuj [src/pages/index.astro](./src/pages/index.astro)

### Zmień tytuły sekcji:
- Blog: [src/pages/blog/index.astro](./src/pages/blog/index.astro)
- Portfolio: [src/pages/portfolio/index.astro](./src/pages/portfolio/index.astro)

## 🔧 5. Zmień Domenę

W pliku [astro.config.mjs](./astro.config.mjs):
```javascript
site: 'https://twoja-domena.pl', // ← Zmień
```

## 📸 6. Dodawanie Obrazów

### Dla wpisów/projektów:
Umieść obraz obok pliku `.mdx` i w frontmatter dodaj:
```yaml
coverImage: ./moj-obraz.jpg
coverImageAlt: "Opis obrazu"
```

### Dla globalnych obrazów:
Umieść w `public/images/` i używaj: `![Alt](/images/obraz.jpg)`

## 📦 7. Deploy

```bash
npm run build  # Zbuduje w folderze dist/
```

### Netlify / Vercel:
1. Build command: `npm run build`
2. Output directory: `dist/`

## ✨ Funkcje SEO (automatyczne)

✅ Meta tags ✅ Open Graph ✅ Twitter Cards
✅ Schema.org ✅ Sitemap XML ✅ Canonical URLs

## 🎯 Następne kroki

1. Usuń przykładowe wpisy z `src/content/blog/` i `src/content/portfolio/`
2. Dodaj własne treści
3. Spersonalizuj design i kolory
4. Stwórz strony "O mnie", "Kontakt"
5. Deploy na produkcję!

## 📚 Pomocne zasoby

- [README.md](./README.md) - Pełna dokumentacja
- [INSTRUKCJA_DODAWANIA_WPISOW.md](./INSTRUKCJA_DODAWANIA_WPISOW.md) - Szczegóły
- [Dokumentacja Astro](https://docs.astro.build)
- [Przewodnik MDX](https://mdxjs.com)

---

**Powodzenia z Twoim portfolio! 🚀**
