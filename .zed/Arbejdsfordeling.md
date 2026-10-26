# Arbejdsfordeling – Tværfagligt midtvejsprojekt

> **Projekt:** Pokédex-webapplikation  
> **Gruppemedlemmer:** Marcus, John, Nikolaj og Emil  
> **Afleveringsfrist:** 2. november 2026 kl. 09:00  
> **Internt mål:** Projektet skal helst være færdigt og klar til aflevering søndag den 1. november, så gruppen ikke risikerer problemer mandag morgen.

## Indholdsfortegnelse

1. [Overordnet arbejdsfordeling](#1-overordnet-arbejdsfordeling)
2. [Marcus – Database og integration](#2-marcus--database-og-integration)
3. [John – Trainers](#3-john--trainers)
4. [Nikolaj – Pokémon](#4-nikolaj--pokémon)
5. [Emil – Dashboard](#5-emil--dashboard)
6. [Fælles arbejdsopgaver](#6-fælles-arbejdsopgaver)
7. [Tidsplan](#7-tidsplan)
8. [Prioritering](#8-prioritering)
9. [Afsluttende ansvarsfordeling](#9-afsluttende-ansvarsfordeling)

---

## 1. Overordnet arbejdsfordeling

| Gruppemedlem | Hovedansvar | Arbejdsområder |
|---|---|---|
| **Marcus** | Database og integration | MySQL, ER-diagram, DDL, ny tabel, databaseforbindelse og samlet integration |
| **John** | Trainers | Trainers-side, GET/POST-endpoints, oprettelse af trainers og tilføjelse af Pokémon |
| **Nikolaj** | Pokémon | Pokémon-side, visning af stats, tre filtreringer og API-endpoints |
| **Emil** | Dashboard | SQL-statistikker, API-endpoints, dashboard og datavisualiseringer |

> **Fælles ansvar:** Alle har ansvar for at teste deres egne funktioner og hjælpe med den afsluttende integration.

---

## 2. Marcus – Database og integration

**Primært ansvar:** Sørge for, at databasen fungerer, og at applikationens forskellige dele kan kommunikere med hinanden.

### Database

- [ ] Gennemgå den eksisterende Pokémon-database.
- [ ] Undersøge eksisterende tabeller og relationer.
- [ ] Udarbejde et opdateret ER-diagram.
- [ ] Definere primærnøgler og fremmednøgler.
- [ ] Oprette mindst én ny tabel med et relevant koncept.
- [ ] Skrive DDL-scripts til den nye tabel.
- [ ] Indsætte nødvendige testdata.

### Backend

- [ ] Opsætte forbindelsen mellem MySQL og Express.
- [ ] Sikre, at resten af gruppen kan hente data fra databasen.
- [ ] Hjælpe med fælles opsætning af backend.
- [ ] Kontrollere, at API-endpoints benytter databasen korrekt.

### Integration

- [ ] Hjælpe med at samle gruppens arbejde.
- [ ] Kontrollere, at frontend kan hente data fra backend.
- [ ] Teste forbindelsen mellem database, API og frontend.

### Forslag til ny tabel

`Pokemon_Habitats`, som beskriver, hvor forskellige Pokémon lever.

Tabellen skal anvendes i applikationen. Nikolaj kan eksempelvis vise habitatinformationen på Pokémon-siden.

### Leverancer

- [ ] ER-diagram.
- [ ] DDL-scripts.
- [ ] Ny tabel med testdata.
- [ ] Fungerende MySQL-forbindelse til Express.
- [ ] Hjælp til den samlede integration.

---

## 3. John – Trainers

**Primært ansvar:** Udvikle hele Trainers-funktionen, så brugeren kan udforske trainers og tilføje Pokémon.

### Frontend

- [ ] Oprette `trainers.html`.
- [ ] Vise en liste over alle trainers.
- [ ] Gøre det muligt at vælge en trainer og se vedkommendes Pokémon.
- [ ] Lave en formular til oprettelse af en ny trainer.
- [ ] Lave en funktion til at tilføje Pokémon til en trainer.
- [ ] Bruge JavaScript og `fetch()` til at kommunikere med API'et.

### Backend

- [ ] Lave GET-endpoint til alle trainers.
- [ ] Lave GET-endpoint til en bestemt trainers Pokémon.
- [ ] Lave POST-endpoint til oprettelse af trainers.
- [ ] Lave POST-endpoint til at tilføje Pokémon til en trainer.
- [ ] Sikre, at nye trainers og relationer bliver gemt i MySQL.

### Test

- [ ] Teste endpoints i Insomnia.
- [ ] Kontrollere, at en ny trainer bliver gemt.
- [ ] Kontrollere, at Pokémon bliver tilføjet til den rigtige trainer.
- [ ] Håndtere ugyldige input.

### Leverancer

- [ ] Fungerende Trainers-side.
- [ ] GET- og POST-endpoints.
- [ ] Formularer til oprettelse og tilføjelse.
- [ ] Kommunikation mellem frontend og database via API.

---

## 4. Nikolaj – Pokémon

**Primært ansvar:** Udvikle Pokémon-siden med visning af Pokémon, stats og filtrering.

### Frontend

- [ ] Oprette `pokemon.html`.
- [ ] Vise en liste over alle Pokémon.
- [ ] Vise navn, type og stats.
- [ ] Implementere mindst tre forskellige filtreringer.
- [ ] Vise habitatinformation fra Marcus' nye tabel.
- [ ] Bruge `fetch()` til at hente Pokémon fra API'et.

### Tre obligatoriske filtre

- [ ] **Navn:** Søge efter Pokémon baseret på navn.
- [ ] **Type:** Filtrere Pokémon efter eksempelvis Fire, Water eller Grass.
- [ ] **Attack:** Filtrere Pokémon efter en minimumsværdi for attack.

### Backend

- [ ] Lave GET-endpoint til alle Pokémon.
- [ ] Implementere filtrering gennem query-parametre.
- [ ] Lave SQL-forespørgsler, der håndterer de tre filtre.
- [ ] Sikre, at frontend får de korrekte resultater.

### Test

- [ ] Teste alle tre filtreringer i Insomnia.
- [ ] Kontrollere, at Pokémon-listen vises korrekt.
- [ ] Kontrollere, at API'et returnerer de rigtige data.
- [ ] Håndtere søgninger uden resultater.

### Leverancer

- [ ] Fungerende Pokémon-side.
- [ ] Tre forskellige API-baserede filtre.
- [ ] GET-endpoints.
- [ ] Visning af Pokémon-stats og information fra den nye tabel.

---

## 5. Emil – Dashboard

**Primært ansvar:** Udvikle dashboardet med statistikker og datavisualiseringer.

### SQL og database

- [ ] Udarbejde mindst tre SQL-forespørgsler til statistikker.
- [ ] Sikre, at statistikkerne beregnes på baggrund af MySQL-data.

### Forslag til tre statistikker

- [ ] Hvilken Pokémon-type har den højeste gennemsnitlige attack?
- [ ] Hvor mange Pokémon findes der inden for hver type?
- [ ] Hvilke trainers har flest Pokémon?

### Backend

- [ ] Udvikle GET-endpoints til statistikkerne.
- [ ] Sørge for, at API'et returnerer data i JSON-format.
- [ ] Teste statistikkerne i Insomnia.

### Frontend

- [ ] Oprette `dashboard.html`.
- [ ] Hente statistikker fra API'et med `fetch()`.
- [ ] Implementere mindst to datavisualiseringer med Chart.js.
- [ ] Præsentere den tredje statistik som eksempelvis en tabel eller et talbaseret overblik.

### Forslag til visualiseringer

- [ ] Søjlediagram over gennemsnitlig attack pr. Pokémon-type.
- [ ] Cirkeldiagram over fordelingen af Pokémon-typer.
- [ ] Tabel over trainers med flest Pokémon.

### Leverancer

- [ ] Fungerende dashboard.
- [ ] Tre databasebaserede statistikker.
- [ ] Mindst to datavisualiseringer.
- [ ] GET-endpoints til statistikker.

---

## 6. Fælles arbejdsopgaver

Følgende opgaver skal løses i fællesskab:

- [ ] Oprette to GitHub-repositories: frontend og backend.
- [ ] Aftale filstruktur og API-endpoints.
- [ ] Sørge for, at alle arbejder på den samme databaseversion.
- [ ] Koordinere ændringer i databasen med Marcus.
- [ ] Lave fælles navigation mellem de tre HTML-sider.
- [ ] Teste den samlede applikation.
- [ ] Håndtere eventuelle fejl.
- [ ] Tage screenshots eller optage en video af applikationen.
- [ ] Kontrollere afleveringskravene.
- [ ] Aflevere links til begge GitHub-repositories på WiseFlow.

> **Vigtigt:** Hvert medlem skal pushe sit arbejde til GitHub løbende, så arbejdet ikke først samles på afleveringsdagen.

---

## 7. Tidsplan

| Status | Dato | Arbejdsopgaver | Ansvar |
|:---:|---|---|---|
| ☐ | **26/10 – Mandag** | Planlægning, gennemgang af databasen, repositories og aftale om API-endpoints | Alle |
| ☐ | **27/10 – Tirsdag** | ER-diagram, ny tabel, databaseforbindelse og påbegyndelse af endpoints | Marcus + alle |
| ☐ | **28/10 – Onsdag** | Implementering af Pokémon, Trainers og Dashboard | Nikolaj, John, Emil |
| ☐ | **29/10 – Torsdag** | Færdiggørelse af API, `fetch`, formularer og visualiseringer | Alle |
| ☐ | **30/10 – Fredag** | Samlet integration og test af alle funktioner | Alle |
| ☐ | **31/10 – Lørdag** | Fejlrettelser, forbedringer og dokumentation | Alle |
| ☐ | **01/11 – Søndag** | Endelig gennemgang, screenshots og klargøring af aflevering | Alle |
| ☐ | **02/11 – Mandag** | **Afleveringsfrist kl. 09:00** | Alle |

> **Internt mål:** Projektet skal helst være færdigt og klar til aflevering søndag den 1. november, så I ikke risikerer problemer mandag morgen.

---

## 8. Prioritering

### Prioritet 1 – Skal være færdigt

- [ ] MySQL-database med mindst én ny tabel.
- [ ] Opdateret ER-diagram og DDL-scripts.
- [ ] Fungerende Node.js/Express API.
- [ ] Pokémon-side med mindst tre API-baserede filtre.
- [ ] Trainers-side med GET og POST.
- [ ] Dashboard med mindst tre statistikker.
- [ ] Mindst to datavisualiseringer.
- [ ] Integration mellem frontend, backend og database.
- [ ] To GitHub-repositories.
- [ ] Screenshots eller video til dokumentation.

### Prioritet 2 – Hvis der er tid

- [ ] Bedre styling og navigation.
- [ ] Mere detaljeret Pokémon-information.
- [ ] Forbedret fejlhåndtering.
- [ ] Mere brugervenlige formularer.

### Prioritet 3 – Kun hvis alle krav er opfyldt

- [ ] Pokémon Battles.
- [ ] Kombineret avanceret filtrering.
- [ ] Individuelt Trainer Dashboard.

---

## 9. Afsluttende ansvarsfordeling

| Medlem | Skal som minimum have færdiggjort |
|---|---|
| **Marcus** | Database, ER-diagram, DDL, ny tabel og databaseforbindelse |
| **John** | Trainers-side med alle obligatoriske GET/POST-funktioner |
| **Nikolaj** | Pokémon-side med tre filtre, stats og visning af den nye tabel |
| **Emil** | Dashboard med tre statistikker og to datavisualiseringer |

## Fælles mål

Alle fire dele skal fungere sammen som én samlet Pokédex-applikation, hvor frontend henter data fra vores eget Express API, som kommunikerer med MySQL-databasen.

