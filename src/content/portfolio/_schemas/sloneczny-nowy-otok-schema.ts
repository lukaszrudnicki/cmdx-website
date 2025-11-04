/**
 * Najbardziej szczegółowe Schema.org dla projektu "Słoneczny Nowy Otok"
 *
 * To schema zawiera wszystkie możliwe typy i właściwości Schema.org
 * odpowiednie dla projektu brandingowego osiedla mieszkaniowego.
 *
 * Typy schema użyte:
 * - CreativeWork (główny projekt kreatywny)
 * - VisualArtwork (dzieło graficzne)
 * - Article (artykuł portfolio)
 * - Service (usługa brandingowa)
 * - Product (produkt końcowy - identyfikacja wizualna)
 * - Brand (marka Słoneczny Nowy Otok)
 * - Organization (CMDX oraz BMM Deweloper)
 * - Place (lokalizacja - Oława)
 * - ImageObject (wszystkie grafiki)
 * - BreadcrumbList (nawigacja)
 * - WebPage (strona projektu)
 * - ImageGallery (galeria prac)
 * - Offer (oferta usług)
 * - Review (opcjonalne recenzje)
 */

export const slonecznyNowyOtokSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. CREATIVEWORK - Główne dzieło kreatywne
    {
      "@type": ["CreativeWork", "VisualArtwork"],
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#creativework",
      "name": "Słoneczny Nowy Otok - Identyfikacja Wizualna",
      "alternateName": "SNO Branding",
      "headline": "Kompleksowy projekt identyfikacji wizualnej dla nowoczesnego osiedla mieszkaniowego",
      "description": "Kompleksowy projekt identyfikacji wizualnej dla nowoczesnego osiedla mieszkaniowego w Oławie. Logo, branding i materiały marketingowe dla BMM Developer.",
      "abstract": "Projekt brand identity dla inwestycji deweloperskiej obejmujący logo, system identyfikacji wizualnej, paletę kolorów, typografię oraz materiały promocyjne.",

      // Klasyfikacja
      "genre": "Branding & Visual Identity Design",
      "artform": "Graphic Design",
      "artMedium": "Digital Design",
      "artworkSurface": "Digital Media",

      // Daty
      "dateCreated": "2023-12-01",
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15",
      "copyrightYear": 2024,
      "copyrightHolder": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },

      // Twórca i autor
      "creator": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization",
        "name": "CMDX",
        "url": "https://cmdx.pl",
        "description": "Studio projektowe specjalizujące się w brandingu i web developmencie",
        "knowsAbout": ["Branding", "Visual Identity", "Logo Design", "Web Development"],
        "areaServed": {
          "@type": "Country",
          "name": "Poland"
        }
      },
      "author": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },
      "producer": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },

      // Klient
      "sponsor": {
        "@type": "Organization",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#client",
        "name": "BMM Deweloper",
        "alternateName": "BMM Developer",
        "description": "Firma deweloperska realizująca nowoczesne inwestycje mieszkaniowe",
        "knowsAbout": ["Real Estate", "Property Development", "Housing Projects"],
        "areaServed": {
          "@type": "City",
          "name": "Oława"
        }
      },
      "funder": {
        "@type": "Organization",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#client"
      },
      "client": {
        "@type": "Organization",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#client"
      },

      // Obrazy i wizualizacje
      "image": [
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#miniatura",
          "name": "Miniatura projektu Słoneczny Nowy Otok",
          "caption": "Główna wizualizacja projektu brand identity",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura.jpg",
          "encodingFormat": "image/jpeg",
          "width": "1200",
          "height": "630",
          "thumbnail": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura-thumb.jpg",
          "creator": {
            "@type": "Organization",
            "@id": "https://cmdx.pl#organization"
          }
        }
      ],

      // Przykłady prac
      "workExample": [
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#logo-pion-bialy",
          "name": "Logo Słoneczny Nowy Otok - wersja pionowa biała",
          "description": "Pionowa wersja logotypu na pomarańczowym tle",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-pion-bialy.svg",
          "encodingFormat": "image/svg+xml",
          "representativeOfPage": true
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#logo-kolor",
          "name": "Logo Słoneczny Nowy Otok - wersja kolorowa",
          "description": "Kolorowa wersja logotypu z białymi literami",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-pion-kolor-biale-litery.svg",
          "encodingFormat": "image/svg+xml"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#front",
          "name": "Wizualizacja frontowa logo",
          "description": "Frontalna prezentacja systemu identyfikacji wizualnej",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-front.jpg",
          "encodingFormat": "image/jpeg"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#poster",
          "name": "Poster promocyjny Słoneczny Nowy Otok",
          "description": "Projekt materiału promocyjnego w stylu billboard",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-poster.jpg",
          "encodingFormat": "image/jpeg"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#proces",
          "name": "Proces projektowy",
          "description": "Szkice i koncepcje powstałe podczas procesu projektowego",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-proces-projektowy.jpg",
          "encodingFormat": "image/jpeg"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#grid",
          "name": "Siatka konstrukcyjna logo",
          "description": "Geometryczna struktura i proporcje logotypu",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-grid.svg",
          "encodingFormat": "image/svg+xml"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#sygnet",
          "name": "Sygnet logo",
          "description": "Uproszczona wersja znaku - sygnet",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-sygnet.svg",
          "encodingFormat": "image/svg+xml"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#merchandise",
          "name": "Materiały promocyjne",
          "description": "Zastosowanie identyfikacji wizualnej na gadżetach",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-smycz.jpg",
          "encodingFormat": "image/jpeg"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#bag",
          "name": "Torba z logo",
          "description": "Ekologiczna torba z nadrukiem",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-bag.jpg",
          "encodingFormat": "image/jpeg"
        },
        {
          "@type": "ImageObject",
          "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#cards",
          "name": "Wizytówki i karty",
          "description": "System wizytówek i kart z identyfikacją wizualną",
          "contentUrl": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-cards.jpg",
          "encodingFormat": "image/jpeg"
        }
      ],

      // Słowa kluczowe i tagi
      "keywords": "branding, identyfikacja wizualna, logo, osiedle, nieruchomości, BMM Developer, design, graphic design, real estate branding, Oława, deweloper",
      "about": [
        {
          "@type": "Thing",
          "name": "Branding",
          "description": "Proces tworzenia unikalnej tożsamości marki"
        },
        {
          "@type": "Thing",
          "name": "Visual Identity",
          "description": "System identyfikacji wizualnej marki"
        },
        {
          "@type": "Thing",
          "name": "Logo Design",
          "description": "Projektowanie logotypów i znaków firmowych"
        },
        {
          "@type": "Thing",
          "name": "Real Estate Marketing",
          "description": "Marketing nieruchomości i projektów deweloperskich"
        }
      ],

      // Język i lokalizacja
      "inLanguage": "pl-PL",
      "contentLocation": {
        "@type": "Place",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#location",
        "name": "Oława",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oława",
          "addressRegion": "Dolnośląskie",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "50.9457",
          "longitude": "17.2929"
        }
      },

      // Grupa docelowa
      "audience": [
        {
          "@type": "Audience",
          "audienceType": "Property Developers",
          "name": "Deweloperzy"
        },
        {
          "@type": "Audience",
          "audienceType": "Real Estate Marketers",
          "name": "Marketerzy nieruchomości"
        },
        {
          "@type": "Audience",
          "audienceType": "Business Professionals",
          "name": "Profesjonaliści biznesowi"
        }
      ],

      // Licencja
      "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      "acquireLicensePage": "https://cmdx.pl/kontakt",

      // Materiały i narzędzia
      "material": [
        "Digital Design",
        "Vector Graphics",
        "Typography",
        "Color Theory"
      ],

      // Cechy projektu
      "size": "58 mieszkań",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Liczba budynków",
          "value": "6"
        },
        {
          "@type": "PropertyValue",
          "name": "Powierzchnia mieszkań",
          "value": "45-73 m²"
        },
        {
          "@type": "PropertyValue",
          "name": "Typ projektu",
          "value": "Kompleksowa identyfikacja wizualna"
        },
        {
          "@type": "PropertyValue",
          "name": "Zakres prac",
          "value": "Logo, brand book, materiały marketingowe"
        },
        {
          "@type": "PropertyValue",
          "name": "Font główny",
          "value": "Noto Sans"
        },
        {
          "@type": "PropertyValue",
          "name": "Paleta kolorów",
          "value": "Żółty (#FACC15), Turkusowy (#5EEAD4), Pomarańczowy (#FF8B00), Granatowy (#0F172A), Ciemny Pomarańczowy (#EA580C)"
        }
      ],

      // Powiązane elementy
      "isPartOf": {
        "@type": "CreativeWorkSeries",
        "name": "CMDX Portfolio",
        "url": "https://cmdx.pl/portfolio"
      },

      // Wzmianki i cytaty
      "comment": [
        {
          "@type": "Comment",
          "text": "Projekt łączy nowoczesność z ciepłem i przytulnością, idealnie oddając charakter inwestycji",
          "author": {
            "@type": "Organization",
            "@id": "https://cmdx.pl#organization"
          }
        }
      ],

      // Wpływ i inspiracje
      "isBasedOn": [
        {
          "@type": "Thing",
          "name": "Motyw słońca",
          "description": "Inspiracja światłem i przestrzenią w architekturze"
        },
        {
          "@type": "Thing",
          "name": "Geometria",
          "description": "Proste, geometryczne formy w designie"
        }
      ]
    },

    // 2. ARTICLE - Artykuł portfolio
    {
      "@type": "Article",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#article",
      "headline": "Słoneczny Nowy Otok - Case Study",
      "alternativeHeadline": "Jak stworzyliśmy identyfikację wizualną dla nowoczesnego osiedla",
      "description": "Kompleksowy projekt identyfikacji wizualnej dla nowoczesnego osiedla mieszkaniowego w Oławie. Logo, branding i materiały marketingowe dla BMM Developer.",
      "articleBody": "BMM Deweloper realizuje nowoczesne, ekologiczne osiedle mieszkaniowe w Oławie – Słoneczny Nowy Otok. Inwestycja obejmuje sześć eleganckich budynków z 58 mieszkaniami o powierzchni od 45 do 73 m². Założeniem było stworzenie stylnej, przytulnej identyfikacji wizualnej, która oddaje charakter miejsca – nowoczesnego, pełnego światła i bliski naturze.",

      "datePublished": "2024-01-15T10:00:00+01:00",
      "dateModified": "2024-01-15T10:00:00+01:00",

      "author": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },

      "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura.jpg",

      "articleSection": "Portfolio",
      "wordCount": 850,
      "inLanguage": "pl-PL",

      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok"
      },

      "keywords": "branding, identyfikacja wizualna, logo, osiedle, nieruchomości, BMM Developer",

      "about": [
        {
          "@type": "Thing",
          "name": "Branding & Design"
        },
        {
          "@type": "Place",
          "name": "Słoneczny Nowy Otok",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oława",
            "addressCountry": "PL"
          }
        }
      ],

      "mentions": [
        {
          "@type": "Organization",
          "name": "BMM Deweloper"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Noto Sans",
          "applicationCategory": "Font"
        }
      ]
    },

    // 3. SERVICE - Usługa brandingowa
    {
      "@type": "Service",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#service",
      "serviceType": "Branding & Visual Identity Design",
      "name": "Kompleksowa identyfikacja wizualna",
      "alternateName": "Brand Identity Design",
      "description": "Pełen zakres usług brandingowych: od koncepcji po wdrożenie",

      "provider": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },

      "areaServed": {
        "@type": "Country",
        "name": "Poland"
      },

      "serviceOutput": [
        "Logotyp i sygnet",
        "Księga znaku (brand book)",
        "Paleta kolorów",
        "Typografia firmowa",
        "Materiały promocyjne",
        "Wzory graficzne",
        "Mockupy i wizualizacje"
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Usługi projektowe",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Logo Design",
              "description": "Projektowanie logotypów i znaków firmowych"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Identity",
              "description": "Kompleksowa identyfikacja wizualna marki"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Materials",
              "description": "Materiały promocyjne i reklamowe"
            }
          }
        ]
      },

      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "PLN"
        },
        "validFrom": "2024-01-15",
        "seller": {
          "@type": "Organization",
          "@id": "https://cmdx.pl#organization"
        }
      },

      "category": "Professional Services > Design Services > Branding",

      "termsOfService": "https://cmdx.pl/regulamin",

      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "1"
      }
    },

    // 4. PRODUCT - Produkt (projekt jako całość)
    {
      "@type": "Product",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#product",
      "name": "Słoneczny Nowy Otok - Brand Identity Package",
      "description": "Kompletny pakiet identyfikacji wizualnej dla osiedla mieszkaniowego",

      "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura.jpg",

      "brand": {
        "@type": "Brand",
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#brand",
        "name": "Słoneczny Nowy Otok",
        "alternateName": "SNO",
        "description": "Marka nowoczesnego osiedla mieszkaniowego w Oławie",
        "logo": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-pion-bialy.svg",
        "slogan": "Nowoczesne mieszkania pełne światła"
      },

      "manufacturer": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      },

      "category": "Design Services",

      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "@id": "https://cmdx.pl#organization"
        }
      },

      "isRelatedTo": [
        {
          "@type": "Product",
          "name": "Logo Design"
        },
        {
          "@type": "Product",
          "name": "Brand Guidelines"
        },
        {
          "@type": "Product",
          "name": "Marketing Materials"
        }
      ],

      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Deliverables",
          "value": "Logo files (SVG, PNG, EPS), Brand book PDF, Color palette, Typography guide"
        },
        {
          "@type": "PropertyValue",
          "name": "Industry",
          "value": "Real Estate Development"
        },
        {
          "@type": "PropertyValue",
          "name": "Project Duration",
          "value": "2 months"
        }
      ]
    },

    // 5. BREADCRUMB - Nawigacja
    {
      "@type": "BreadcrumbList",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona główna",
          "item": "https://cmdx.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://cmdx.pl/portfolio"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Słoneczny Nowy Otok",
          "item": "https://cmdx.pl/portfolio/sloneczny-nowy-otok"
        }
      ]
    },

    // 6. WEBPAGE - Strona projektu
    {
      "@type": "WebPage",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok",
      "url": "https://cmdx.pl/portfolio/sloneczny-nowy-otok",
      "name": "Słoneczny Nowy Otok - Case Study | CMDX Portfolio",
      "description": "Kompleksowy projekt identyfikacji wizualnej dla nowoczesnego osiedla mieszkaniowego w Oławie",

      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://cmdx.pl#website",
        "url": "https://cmdx.pl",
        "name": "CMDX - Digital Design & Development",
        "description": "Studio projektowe specjalizujące się w brandingu i web developmencie",
        "publisher": {
          "@type": "Organization",
          "@id": "https://cmdx.pl#organization"
        }
      },

      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura.jpg"
      },

      "datePublished": "2024-01-15T10:00:00+01:00",
      "dateModified": "2024-01-15T10:00:00+01:00",

      "inLanguage": "pl-PL",

      "breadcrumb": {
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#breadcrumb"
      },

      "mainEntity": {
        "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#creativework"
      },

      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".project-header", ".bento-heading", ".bento-text"]
      },

      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": "https://cmdx.pl/portfolio/sloneczny-nowy-otok"
        },
        {
          "@type": "ViewAction",
          "target": "https://cmdx.pl/portfolio/sloneczny-nowy-otok"
        }
      ]
    },

    // 7. IMAGEGALLERY - Galeria
    {
      "@type": "ImageGallery",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#gallery",
      "name": "Słoneczny Nowy Otok - Galeria projektu",
      "description": "Galeria wizualizacji projektu identyfikacji wizualnej",

      "image": [
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-miniatura.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-pion-bialy.svg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-front.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-poster.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-proces-projektowy.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-gora.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-grid.svg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-sygnet.svg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-smycz.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-bag.jpg",
        "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-cards.jpg"
      ],

      "author": {
        "@type": "Organization",
        "@id": "https://cmdx.pl#organization"
      }
    },

    // 8. ORGANIZATION - CMDX
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://cmdx.pl#organization",
      "name": "CMDX",
      "legalName": "CMDX Studio",
      "alternateName": ["CMDX Design Studio", "CMDX Digital"],

      "url": "https://cmdx.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cmdx.pl/logo.png",
        "width": "250",
        "height": "60"
      },

      "description": "Studio projektowe specjalizujące się w brandingu, identyfikacji wizualnej i web developmencie",
      "slogan": "Digital Design & Development",

      "foundingDate": "2020",

      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PL"
      },

      "areaServed": {
        "@type": "Country",
        "name": "Poland"
      },

      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["Polish", "English"],
          "telephone": "+48-XXX-XXX-XXX",
          "email": "kontakt@cmdx.pl"
        }
      ],

      "knowsAbout": [
        "Branding",
        "Visual Identity Design",
        "Logo Design",
        "Web Development",
        "Graphic Design",
        "UI/UX Design",
        "Marketing Materials"
      ],

      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design",
            "serviceType": "Branding"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "serviceType": "Technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design",
            "serviceType": "Design"
          }
        }
      ],

      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional certification in design"
      },

      "sameAs": [
        "https://www.facebook.com/cmdx",
        "https://www.instagram.com/cmdx",
        "https://www.linkedin.com/company/cmdx"
      ]
    },

    // 9. HOWTOSECTION - Proces projektowy
    {
      "@type": "HowTo",
      "@id": "https://cmdx.pl/portfolio/sloneczny-nowy-otok#howto",
      "name": "Jak stworzyliśmy identyfikację wizualną Słoneczny Nowy Otok",
      "description": "Proces projektowy identyfikacji wizualnej od research do implementacji",

      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Research i analiza",
          "text": "Analiza branży nieruchomości, konkurencji i grupy docelowej. Zrozumienie wartości i charakteru inwestycji.",
          "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-proces-projektowy.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Koncepcja i szkice",
          "text": "Stworzenie szkiców wykorzystujących motywy światła, przestrzeni i domu w słońcu. Eksploracja geometrycznych form.",
          "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-proces-projektowy.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Projektowanie logotypu",
          "text": "Opracowanie finalnej wersji łączącej symbol słońca z zarysem domu na linii horyzontu. Stworzenie wersji i wariantów kolorystycznych.",
          "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-pion-bialy.svg"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "System identyfikacji",
          "text": "Opracowanie palety kolorów (żółty, turkusowy, pomarańczowy, granatowy), wybór typografii (Noto Sans) i siatki konstrukcyjnej.",
          "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-grid.svg"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Materiały aplikacyjne",
          "text": "Projekt materiałów promocyjnych: wizytówki, torby, smycze, plakaty i inne nośniki brand identity.",
          "image": "https://cmdx.pl/assets/portfolio/sloneczny-nowy-otok/sno-cards.jpg"
        }
      ],

      "totalTime": "P2M"
    }
  ]
};
