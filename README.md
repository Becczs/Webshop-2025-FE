# Hakim Livs

## Projektbeskrivning & Syfte

En webshop för Hakims kunder där de kan handla online och även få varorna hemlevererade. Hakim kan också hantera sina beställningar och skriva ut listor för att enklare plocka ihop sina ordrar.

## URL till Github-repo

[Webshop-2025-FE](https://github.com/Becczs/Webshop-2025-FE.git)

## Info om hur du deployar

[Deploy Instruktioner](https://willandskill.notion.site/Projekt-upps-ttning-Frontend-1b617cd1771581d49123f895777366cb)

## Kodstruktur och Arkitektur

### Endpoints (API)

- [Products API](https://webshop-2025-be-g9.vercel.app/api/products/)
- [Category API](https://webshop-2025-be-g9.vercel.app/api/category/)
- [Orders API](https://webshop-2025-be-g9.vercel.app/api/orders/)
- [Products Search API](https://webshop-2025-be-g9.vercel.app/api/products?search/)
- [User API](https://webshop-2025-be-g9.vercel.app/api/user/)
- [Login API](https://webshop-2025-be-g9.vercel.app/api/login/)

## Setup och Installation

Ladda ner **Live Server** och **Live Sass Compiler**.  
Se installationsinstruktioner:

- [Live Sass Compiler installation](https://dev.to/sampadsarker/install-and-customize-the-live-sass-compiler-19k9)
- [Live Server installation](https://code-you.org/students/resources/guides/install-live-server-in-vs-code/)

## Kodbibliotek & Teknologier

- **HTML5 & SCSS/CSS** – Struktur & styling
- **Vanilla JavaScript** – Funktionalitet
- **Bootstrap** – Styling  
  [Dokumentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- **Axios** – Alla HTTP-anrop till backend-API:er  
  [Dokumentation](https://axios-http.com/docs/intro)
- **LocalStorage** – Spara produkter i varukorgen  
  [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Hjälpfunktioner för API-anrop

I mappen `utils` finns en samling hjälpfunktioner som återanvänds genom hela projektet för att hantera API-anrop. Dessa funktioner gör det enkelt att separera logiken för kommunikation med backend från övrig applikationslogik. Funktionen använder Axios (importerat via CDN med ES module syntax) för att utföra HTTP-förfrågningar. Nedan listas de viktigaste funktionerna samt ett komplett kodexempel som innehåller alla funktioner:

### Funktionerna
- **fetchProducts()**  
  Hämtar alla produkter från API:et via:  
  ```javascript
  const url = 'https://webshop-2025-be-g9.vercel.app/api/products/';

- **fetchCategories()**
  Hämtar alla produkter från API:et via:  
  ```javascript
  const url = 'https://webshop-2025-be-g9.vercel.app/api/category/';

- **fetchOrders()**
Hämtar orderdata från API:et via:
```javascript
const url = 'https://webshop-2025-be-g9.vercel.app/api/orders/';

- **searchProducts(query)**
Söker efter produkter utifrån ett sökord. Parametern query kodas med encodeURIComponent för att hantera specialtecken.
const url = `https://webshop-2025-be-g9.vercel.app/api/products?search=${encodeURIComponent(query)}`;

- **fetchUser()**
Hämtar användardata från API:et via:
```javascript
const url = 'https://webshop-2025-be-g9.vercel.app/api/user/';

- **loginUser(email, password)**
Skickar en POST-förfrågan för att logga in en användare med e-post och lösenord.
```javascript
const url = 'https://webshop-2025-be-g9.vercel.app/api/user/login/'




## Exempel på hur hjälpfunktionerna ser ut i koden:

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm';

export async function fetchProducts() {
  const url = 'https://webshop-2025-be-g9.vercel.app/api/products';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Fel vid hämtning av produkter:', error);
    return [];
  }
}

---

## Förbättringspunkter
mer UX




