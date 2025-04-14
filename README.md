# Hakim Livs

## Projektbeskrivning & Syfte

En webshop för Hakims kunder där de kan handla online och även få varorna hemlevererade. Hakim kan också hantera sina beställningar och skriva ut listor för att enklare plocka ihop sina ordrar.

## URL till Github-repo

[Webshop-2025-FE](https://github.com/Becczs/Webshop-2025-FE.git)

## Info om hur du deployar

[Deploy Instruktioner](https://willandskill.notion.site/Projekt-upps-ttning-Frontend-1b617cd1771581d49123f895777366cb)


## Kodstruktur och Arkitektur

### Rotmappen
- index.html
  Huvudingången till webbplatsen där grundläggande HTML-struktur och länkningar till stilmallar och script ligger.

- cart.html / checkout.html
  Fristående HTML-sidor för varukorg och utcheckning. Varje sida har sin egen struktur men delar ofta logik via gemensamma script och styling.

- style.css
  En kompilerad CSS-fil som innehåller den samlade stilmallen för projektet.

- combine_files.py
  Ett eventuellt skript för att kombinera filer eller automatisk sammanställning av projektet.

- vercel.json
  Inställningsfil för Vercel-deploy om projektet ligger på Vercel. Används för att konfigurera routing och build-inställningar.

- README.md
  Dokumentation för projektet.

### SCSS-mappen
-  scss/
  Innehåller alla dina SCSS-filer uppdelade i underkategorier för bättre överskådlighet och underhåll. Filstrukturen kan t.ex. se ut så här:

 base/
  Gemensamma grundinställningar och variabler (_globals.scss, _variables.scss).

 components/
  SCSS-filer för specifika komponenter, som kort (_cards.scss), formulär (_form.scss) och liknande.

layout/
  Stilmallar för större layoutdelar, exempelvis header, footer, sidebar och liknande.

 main.scss
  En huvudsaklig SCSS-fil där du importerar alla partials från ovanstående mappar. Den kompileras vanligtvis till en motsvarande main.css.

### Auth-mappen
-  auth.js
  Innehåller övergripande logik för autentisering och inloggning/utloggning.

-  login.html / register.html
  Sidor för inloggning och registrering av användare.

-  register.js, services.js, user.js

### Dashboard-mappen
-  customers.html, products.html, transactions.html m.fl.
  Sidor som utgör olika delar av ett administrativt gränssnitt eller en intern dashboard.

-  dashboard.js, order.js, products.js
  Js filer för admin dashboard, t.ex. för att hämta information om ordrar, kunder eller produkter från ett API.

-  index.html
  Ingångssida till själva dashboarden, där man får en översikt.

### src
- img
  Logga för projektet.

- scripts/
  Innehåller JavaScript-filer för t.ex. cart.js, checkout.js och index.js. Dessa filer hanterar den interaktiva logiken på respektive sida.

- scss/base, scss/components, scss/layout
  Underkategorier för SCSS

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
  ```javascript
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
```javascript

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
```

## Autentisering (Login och Register)
  Projektet innehåller en autentiseringsfunktion där användare kan:
  *Registrera sig via auth/register.html*
  *Logga in via auth/login.html*
  Vid inloggning sparas en token i localStorage, som används för att autentisera framtida API-anrop. Denna token kontrolleras innan man får åtkomst till sidor som kräver inloggning.
  Autentiseringslogiken hanteras i auth.js och services.js där Axios används för att kommunicera med backend:
  ```javascript
  // Exempel: Logga in användare
  async function loginUser(email, password) {
    const response = await axios.post(`${BASE_URL}/login/`, { email, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
  }
```

 ## Dashboard
  När en administratör loggar in kan hen navigera till dashboarden via dashboard/index.html och får då tillgång till följande funktioner:
  *Se och hantera ordrar (order.html & order.js)*
  I order.js används funktionen fetchOrders() för att hämta alla ordrar från backend och visa dem i en tabell:
  ```javascript
  import { fetchOrders } from "../utils/api.js";

  async function renderOrders() {
    const orders = await fetchOrders();
    orders.forEach(order => {
      // Generera HTML-rader för varje order
    });
  }
  ```

Funktion som används:
```javascript
export async function fetchOrders() {
  const url = 'https://webshop-2025-be-g9.vercel.app/api/orders/';
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.get(url, config);
  return response.data;
} 
 ```

Administratören kan även skriva ut en plocklista för varje beställning.

## Lista och redigera produkter (products.html)
Produkter hämtas och visas på sidan med hjälp av fetchProducts(). Varje produkt listas med möjlighet att redigera pris, antal och kategori.
Produkter hämtas och visas på sidan med hjälp av fetchProducts(). Varje produkt listas med möjlighet att redigera pris, antal och kategori.
```javascript
import { fetchProducts } from "../utils/api.js";

async function renderProducts() {
  const products = await fetchProducts();
  products.forEach(product => {
    // Skapa DOM-element för varje produkt
  });
}

Formulär på sidan gör det möjligt för admin att uppdatera produkternas information. Förändringarna skickas till backend med hjälp av PATCH- eller PUT-anrop (om tillgängligt i API).
```

## Skapa produktkort i gränssnittet

När produkter hämtas från API:et används en funktion för att dynamiskt skapa HTML-element – ett produktkort för varje produkt. Det här är ett exempel på hur ett produktkort kan genereras i JavaScript:
```javascript
function createProductCard(product) {
  const container = document.createElement("div");
  container.classList.add("card", "mb-3");

  container.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">Pris: ${product.price} kr</p>
      <p class="card-text">Kategori: ${product.category.name}</p>
      <button class="btn btn-primary">Lägg till i varukorgen</button>
    </div>
  `;

  return container;
}

Denna funktion används tillsammans med fetchProducts() i loopen för att rendera hela produktlistan:
const productList = document.getElementById("productList");
products.forEach(product => {
  const card = createProductCard(product);
  productList.append(card);
});
Kortet innehåller information som namn, pris och kategori.
```

  ## Förbättringspunkter
  - mer UX
  - utökad funktionalitet, hantera beställningar som admin, öka pris på produkt när antal ändras (i varukorgen),
    rensa inte varukorg förns beställning är gjord osv.
  - responsivitet, nu endast anpasad för desktop.
  - feedback till användare, laddningsstatus och felmeddelanden.



