# Pokébase – tværfagligt midtvejsprojekt

Pokébase er en webapplikation, hvor brugeren kan udforske Pokémon, filtrere efter forskellige egenskaber, se og administrere trainers samt undersøge statistik gennem et dashboard.

Projektet består af:

- En MySQL-database.
- Et REST API udviklet med Node.js og Express.
- En frontend udviklet med HTML, CSS og JavaScript.
- Et dashboard med databasebaserede datavisualiseringer.

## Gruppemedlemmer

- Marcus Larn Sperling
- John Bærendsen
- Nikolaj Falck Gutfeld
- Emil Frost

## Ansvarsfordeling

- **Marcus:** Databasedesign, DDL-scripts, databaseforbindelse og integration.
- **John Bærendsen:** Trainers-funktioner i API og frontend.
- **Nikolaj:** Pokémon-visning og filtrering i API og frontend.
- **Emil:** Statistik, dashboard og datavisualisering.
- **Alle:** Test, fejlhåndtering, design og færdiggørelse.

---

# Step 1 – Databasedesign

Projektet tager udgangspunkt i en eksisterende Pokémon-database, som er blevet udvidet med et ligasystem.

## Eksisterende data

Databasen indeholder blandt andet information om:

- Pokémon.
- Pokémon-typer og stats.
- Trainers.
- Forholdet mellem trainers og Pokémon.
- Body shapes.
- Moves.

## Udvidelse af databasen

Databasen er udvidet med følgende tabeller:

### `league`

Indeholder oplysninger om de forskellige ligaer:

- Ligaens ID.
- Navn.
- Region.
- Challenge.
- Beskrivelse.

### `league_trainer`

Forbinder trainers og ligaer i en mange-til-mange-relation.

### `battle`

Indeholder planlagte, afsluttede og aflyste kampe mellem trainers.

## ER-diagram og SQL-filer

ER-diagram og databasescripts findes i mappen:

```text
Database/
```

Mappen indeholder:

- `ER-Diagram.png`
- `ER-Diagram.mwb`
- `league.sql`
- `test-data.sql`

`league.sql` opretter de nye tabeller og ligaernes grunddata.

`test-data.sql` indsætter testdata til ligaer, deltagere og kampe.

---

# Step 2 – API

Backend er udviklet med:

- Node.js.
- Express.
- MySQL2.
- dotenv.
- CORS.

API’et kommunikerer med MySQL-databasen og sender data til frontend i JSON-format.

## API-endpoints

### Pokémon

#### Hent Pokémon

```http
GET /pokemons
```

Understøttede filtre:

```http
GET /pokemons?name=pika
GET /pokemons?type=fire
GET /pokemons?minAttack=70
GET /pokemons?type=fire&minAttack=70
```

Filtrene gør det muligt at søge efter:

- Navn.
- Type.
- En minimumsværdi for attack.

### Trainers

#### Hent alle trainers

```http
GET /trainers
```

#### Hent en trainers Pokémon

```http
GET /trainers/:id/pokemons
```

#### Opret en trainer

```http
POST /trainers
```

Eksempel på request body:

```json
{
  "trainer_name": "Ash",
  "age": 10,
  "hometown": "Pallet Town"
}
```

#### Tilføj en Pokémon til en trainer

```http
POST /trainers/:id/pokemons
```

Eksempel på request body:

```json
{
  "pokedex_number": 25
}
```

### Ligaer

#### Hent alle ligaer

```http
GET /leagues
```

### Statistik

#### Hent antal Pokémon pr. type

```http
GET /stats/types
```

#### Hent gennemsnitlig attack pr. type

```http
GET /stats/average-attack
```

#### Hent antal Pokémon pr. trainer

```http
GET /stats/trainers
```

## Test af API

API-endpoints er testet med Insomnia.

Testene omfatter:

- Korrekte GET-requests.
- Oprettelse af data med POST.
- Pokémon-filtrering.
- Statistikforespørgsler.
- Manglende input.
- Ugyldige trainer- og Pokémon-ID’er.
- Søgninger uden resultater.

[UDFYLD: Tilføj eventuelt et screenshot eller link til en Insomnia-export.]

---

# Step 3 – Frontend

Frontend består af tre hovedsider:

## Pokémon-siden

Pokémon-siden viser Pokémon fra databasen med:

- Pokédex-nummer.
- Navn.
- Primær og sekundær type.
- HP.
- Attack.
- Defence.
- Special attack.
- Special defence.
- Speed.

Brugeren kan filtrere Pokémon efter:

- Navn.
- Type.
- Minimum attack.

## Trainers-siden

Trainers-siden gør det muligt at:

- Se alle trainers.
- Vælge en trainer.
- Se en trainers Pokémon.
- Oprette en ny trainer.
- Tilføje en Pokémon til en trainer.

## Dashboardet

Dashboardet viser statistik fra databasen gennem:

- Et søjlediagram.
- Et cirkeldiagram.
- En tabel eller talbaseret oversigt.

Frontend anvender JavaScript og `fetch()` til at kommunikere med API’et.

---

# Step 4 – Dashboard og datavisualisering

Dashboardet anvender SQL-forespørgsler og API-endpoints til at vise statistik fra databasen.

De valgte statistikker er:

1. Antal Pokémon inden for hver type.
2. Gennemsnitlig attack for hver Pokémon-type.
3. Trainers sorteret efter antal Pokémon.

Data visualiseres med Chart.js.

Visualiseringerne består af:

- Et cirkeldiagram over fordelingen af Pokémon-typer.
- Et søjlediagram over gennemsnitlig attack pr. type.
- En tabel over trainers og deres antal Pokémon.

Statistikken beregnes i MySQL og hentes gennem API’et. Værdierne er derfor ikke skrevet manuelt ind i frontend.

---

# Step 5 – Færdiggørelse

Applikationen er testet som en samlet løsning bestående af:

```text
MySQL-database → Express API → JavaScript frontend
```

Der er arbejdet med:

- Navigation mellem de tre sider.
- Ensartet design.
- Responsivt layout.
- Loading-beskeder.
- Beskeder ved tomme resultater.
- Succesbeskeder efter oprettelse af data.
- Håndtering af ugyldigt input.
- Håndtering af database- og forbindelsesfejl.

[UDFYLD: Beskriv eventuelle kendte fejl eller begrænsninger.]

---

# Installation

## Forudsætninger

Følgende skal være installeret:

- Node.js.
- npm.
- MySQL 8 eller nyere.
- En browser.

## 1. Hent projektet

```bash
git clone [INDSÆT REPOSITORY-LINK]
cd [INDSÆT MAPPENAVN]
```

## 2. Installer backend-pakker

Åbn backendmappen:

```bash
cd backend
npm install
```

## 3. Opsæt databasen

Opret eller importer den eksisterende Pokémon-database.

Kør derefter SQL-filerne i denne rækkefølge:

```text
1. Database/league.sql
2. Database/test-data.sql
```

[UDFYLD: Tilføj navnet på filen med den oprindelige Pokémon-database, hvis den afleveres sammen med projektet.]

## 4. Opret miljøfilen

Kopiér `.env.example` og omdøb kopien til `.env`.

Eksempel:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=pokemon
```

Indsæt dine egne lokale databaseoplysninger.

Den rigtige `.env`-fil er ignoreret af Git og må ikke pushes til GitHub.

## 5. Start backend

```bash
npm start
```

Backend kører som standard på:

```text
http://localhost:3000
```

## 6. Start frontend

Åbn frontendmappen gennem en lokal webserver, eksempelvis Live Server.

[UDFYLD: Tilføj den præcise fremgangsmåde, I bruger.]

Åbn derefter:

```text
Pokebase.html
```

---

# Projektstruktur

```text
projekt/
├── backend/
│   ├── Database/
│   │   ├── ER-Diagram.png
│   │   ├── ER-Diagram.mwb
│   │   ├── league.sql
│   │   └── test-data.sql
│   ├── .env.example
│   ├── main.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── Pokebase.html
│   ├── Pokebase.js
│   ├── Trainer.html
│   ├── Trainer.js
│   ├── Dashboard.html
│   ├── Dashboard.js
│   ├── poke.css
│   └── pokebase-logo.png
│
└── README.md
```

Tilpas strukturen ovenfor, hvis jeres endelige mapper eller filnavne er anderledes.

---

# Screenshots

## Pokémon-side

[INDSÆT SCREENSHOT]

## Trainers-side

[INDSÆT SCREENSHOT]

## Dashboard

[INDSÆT SCREENSHOT]

## ER-diagram

[INDSÆT SCREENSHOT ELLER LINK TIL ER-DIAGRAM]

---

# Teknologier

- HTML5.
- CSS.
- JavaScript.
- Fetch API.
- Node.js.
- Express.
- MySQL.
- Insomnia.
- Git og GitHub.

---

# Repositories

Frontend:

https://github.com/MLSXO/Tv-rfaglgt-midtvejsprojekt/tree/Frontend

Backend:

https://github.com/MLSXO/Tv-rfaglgt-midtvejsprojekt/tree/Backend

Hvis projektet afleveres i ét samlet repository:

https://github.com/MLSXO/Tv-rfaglgt-midtvejsprojekt/tree/main
---

