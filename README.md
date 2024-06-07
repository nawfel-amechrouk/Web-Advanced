# Web-Advanced
# Quiz App

Deze Quiz App maakt gebruik van verschillende JavaScript-functionaliteiten en technieken om een interactieve quizervaring te bieden. Hieronder vind je een overzicht van de gebruikte technieken en hoe ze in de code zijn toegepast.

## Elementen selecteren

In de `basis.js` worden verschillende elementen geselecteerd met behulp van `document.getElementById`. Dit wordt gebruikt om toegang te krijgen tot specifieke DOM-elementen zoals de quizcontainer, vraagcontainer, antwoordencontainer, enz.

## Elementen manipuleren

Elementen worden gemanipuleerd door hun `innerHTML` aan te passen. Dit wordt bijvoorbeeld gedaan bij het laden van nieuwe vragen in de quiz door de inhoud van de vraag- en antwoordencontainers te updaten.

## Event aan een element koppelen

Een event wordt gekoppeld aan de knoppen in de antwoordencontainer met behulp van `addEventListener`. Dit zorgt ervoor dat er een functie wordt aangeroepen wanneer een antwoord wordt geselecteerd.

## Formulier valideren

Formuliervalidatie vindt plaats door het controleren van de geselecteerde antwoorden tegen de correcte antwoorden uit de quizdata. Dit wordt gedaan in de `selectAnswer` functie.

## Gebruiken van een constante

Constanten worden gebruikt voor vaste elementen in de DOM, zoals `const app = document.getElementById('app');`. Dit zorgt ervoor dat deze elementen niet per ongeluk worden herdefinieerd.

## Gebruiken van template literals

Template literals worden gebruikt voor het dynamisch weergeven van strings, zoals bij het tonen van het eindresultaat van de quiz: ``resultText.innerText = `Je hebt ${score} van de ${quizData.length} vragen goed beantwoord.`;``.

## Destructuring

Destructuring wordt gebruikt om eigenschappen van de quizdata eenvoudig te extraheren, bijvoorbeeld: `const { question, answers } = quizData[currentQuestionIndex];`.

## Spread & Rest operator

De spread operator wordt gebruikt om de antwoorden te mengen, zoals: `answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)`.

## Iteratie over een array

De `forEach` methode wordt gebruikt om over de antwoorden te itereren en knoppen voor elk antwoord te maken en toe te voegen aan de antwoordencontainer.

## Arrow function

Arrow functions worden gebruikt voor het afhandelen van click-events, bijvoorbeeld: `button.addEventListener('click', () => selectAnswer(answer));`.

## Callback function

Een callback function wordt gebruikt in de `forEach` methode om knoppen te maken voor elk antwoord en een click-event toe te voegen.

## Promise

Een Promise wordt gebruikt in de `fetchQuizData` functie om de quizdata op te halen van een API.

## Consumer methods

De `map` methode wordt gebruikt om de quizdata te verwerken en de structuur ervan aan te passen.

## Async & Await

De `async` en `await` worden gebruikt om asynchrone data op te halen in de `fetchQuizData` functie.

## Self executing function

Een self-executing function wordt niet expliciet gebruikt in deze app, maar kan toegevoegd worden om de initiële data te laden, bijvoorbeeld: `(function() { fetchQuizData(); })();`.

## Fetch om data op te halen

De `fetch` API wordt gebruikt om quizdata op te halen van een externe API.

## JSON manipuleren en weergeven

De JSON data wordt gemanipuleerd en weergegeven in de quiz door de structuur van de API-response aan te passen en de vragen en antwoorden in de DOM te plaatsen.

## Basis CSS Animatie

CSS animatie wordt gebruikt voor het fade-in effect bij het laden van de quizvragen en resultaten.

## Gebruiken van een flexbox of CSS grid

Flexbox wordt gebruikt om de layout van de pagina te centreren en de elementen netjes uit te lijnen.