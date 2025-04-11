Hakim Livs 

##Projektbeskrivning & syfte:
En webshop för Hakims kunder där de kan handla online och även få varorna hemlevererade.
Hakim kan också hantera sina beställningar och skriva ut listor för att enklare plocka ihop sina ordrar.

##URL till Github-repo : https://github.com/Becczs/Webshop-2025-FE.git

##Info om hur du deployar: https://willandskill.notion.site/Projekt-upps-ttning-Frontend-1b617cd1771581d49123f895777366cb

##Kodstruktur och arkitektur:

##Alla endpoints (API) : 
-https://webshop-2025-be-g9.vercel.app/api/products/
-https://webshop-2025-be-g9.vercel.app/api/category/
https://webshop-2025-be-g9.vercel.app/api/orders/
https://webshop-2025-be-g9.vercel.app/api/products?search/
https://webshop-2025-be-g9.vercel.app/api/user/
https://webshop-2025-be-g9.vercel.app/api/login/

##Setup och installation
Ladda ner Live Server och Live Sass Compiler 
instruktioner hur du installerar dessa : (https://dev.to/sampadsarker/install-and-customize-the-live-sass-compiler-19k9) (https://code-you.org/students/resources/guides/install-live-server-in-vs-code/)

##Kodbibliotek & teknologier
HTML5 & SCSS/CSS - struktur & styling
Vanilla JavaScript - funktionalitet 
Bootstrap - styling (https://getbootstrap.com/docs/5.0/getting-started/introduction/)
Axios - Alla HTTP-anrop till backend-API:er dokumentation: (https://axios-http.com/docs/intro)
LocalStorage - spara produkter i varukorgen (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


##Hjälpfunktioner för API-anrop
I mappen utils finns en samling hjälpfunktioner som återanvänds genom hela projektet för att hantera API-anrop. Dessa funktioner gör det enkelt att separera logiken för kommunikation med backend från övrig applikationslogik. Funktionen använder Axios (importerat via CDN med ES module syntax) för att utföra HTTP-förfrågningar. Nedan listas de viktigaste funktionerna och var du hittar dem:

#fetchProducts()
Hämtar alla produkter från API:et via:
const url = 'https://webshop-2025-be-g9.vercel.app/api/products';
Returnerar data från svaret, eller en tom array om ett fel uppstår.

fetchCategories()
Hämtar alla kategorier från API:et via:
const url = 'https://webshop-2025-be-g9.vercel.app/api/category/';
Returnerar data från svaret, eller en tom array vid fel.

#fetchOrders()
Hämtar orderdata från API:et via:
const url = 'https://webshop-2025-be-g9.vercel.app/api/orders/';
Vid fel loggas ett meddelande och en tom array returneras.

#searchProducts(query)
Söker efter produkter utifrån ett sökord. Parametern query kodas med encodeURIComponent för att hantera specialtecken.
URL:
const url = `https://webshop-2025-be-g9.vercel.app/api/products?search=${encodeURIComponent(query)}`;
Returnerar sökresultat eller en tom array vid fel.

#fetchUser()
Hämtar användardata från API:et via:
const url = 'https://webshop-2025-be-g9.vercel.app/api/user/';
Om ett fel uppstår loggas detta, och en tom array returneras.

#loginUser(email, password)
Skickar en POST-förfrågan för att logga in en användare med e-post och lösenord.
URL:
const url = 'https://webshop-2025-be-g9.vercel.app/api/user/login/'
Funktionen returnerar svarsdatan eller felobjektet om något går snett.



#Exempel på hur hjälpfunktionerna ser ut i koden:

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

##Förbättringspunkter





