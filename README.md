![CK_Welcome](https://user-images.githubusercontent.com/97919748/226455961-75a128c3-1b0a-463a-bfe3-009e1dff91da.png)

## Table of Contents
- [Introduction](#introduction)
- [Learning Goals](#learning-goals)
- [Technologies](#technologies)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)
- [Reflections](#reflections)
- [Contributor](#contributor)
- [Resources](#resources)
- [Project Specifications](#project-specifications)

## Introduction
*Zelda: Breath of the Wild* is a video game that includes a feature that allows a user to “cook” with ingredients they find during their travels. Cooking various ingredients can have varying impacts, but this can be hard to keep track of! 

Calamity Kitchen was designed to help reduce overwhelm when learning what ingredients to combine to produce specific effects when playing *Zelda: Breath of the Wild*. 

The [Turing School of Software and Design](https://turing.edu/) provided a project spec sheet for students to follow, which can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).

## Learning Goals
- Utilize React, including using hooks and functional components
- Incorporate React Router
- Demonstrate understanding of asynchronous JavaScript
- Implement end to end testing with Cypress
- Create personas and user stories to describe your target audience
- Work within constraints to deliver a product for your niche audience, which helps solve a problem unique to them

## Technologies
  - React
  - React Router
  - JavaScript
  - JSX/HTML
  - CSS
  - Cypress
  - REST APIs

## Deployed Link 
Visit the app at the deployed link [here](https://calamity-kitchen.vercel.app/)! 

## Illustrations
### Filtering: 
https://user-images.githubusercontent.com/97919748/226465013-c4fb111c-f68f-4f25-a654-d285870cfdcd.mov

### Search Bar: 
https://user-images.githubusercontent.com/97919748/226465145-a0579469-2c07-4397-a69f-ad8e88a3ca72.mov

## Set Up
1. Clone this [repository](https://github.com/CorCanavan/calamity-kitchen).
2. `cd` into the directory.
3. Run `npm install`.
4. Start the server by running `npm start` and view at http://localhost:3000/.
5. To run tests, first install Cypress with `npm i -D cypress` then run `npm run cypress`.
6. Enter `control + c` to stop the server at any time.

## Features
- A user is first brought to a Welcome page with a description of how to use the app and it's purpose
- Once clicking on the "Let's Get Cooking" button, a user is brought to the homepage and is able to see all available ingredient cards on homepage load, a Dropdown to filter ingredients by Cooking Effect, as well as a Search bar to find an ingredient by typing in it's name
- A user is able to filter ingredient cards by selecting a specific Cooking Effect from the dropdown on the homepage; classic cooking jingle from *Zelda: Breath of the Wild* plays upon selection of Cooking Effect when viewing app on desktop
- A user is able to utilize the Search bar to find an ingredient by typing it's name, in case they do not know the specific Cooking Effect 
- A user is able to click on a specific ingredient card to be brought to that ingredient's details page with additional information on the clicked ingredient 
- A user is able to click on the back button to return to the homepage and can filter by a different Cooking Effect, as well as have the option to view all ingredients again by selecting All Cooking Effects, or can search for an ingredient by name using the Search bar

## Future Features
I love the game *Zelda: Breath of the Wild* and plan on continuing to build out this app to be a resource for gamers who would like to keep track of recipes as well. Future features I want to add include:
- A My Recipes page with a form component that let's a user add recipes they've created, select which ingredients were used, and any additional comments or notes.
- Option to delete Recipe Cards from the My Recipes page

## Reflections
#### Wins
- Using async/await for the first time! I was hitting two different API endpoints in order to aggregate all available cooking ingredients from the game. 
- Successfully adding an audio clip from the game to play once a user makes a cooking effect selection and the cards repopulate.

#### Challenges
- The tight timeframe! I feel very passionately about this app and had so many thoughts on different things I could add, pages I could build out and features I could implement, but knew I had to focus on achieving MVP (Minimum Viable Product) first. It was easy to get caught up in the styling and wanting to make it feel like an extension of the actual game.
- CSS Responsiveness took a lot of trial and error, time and tinkering between Dev Tools and viewing the app from my phone to see first hand how it was displaying.

## Contributor
**Corinne Canavan**
* [LinkedIn](https://www.linkedin.com/in/corinnecanavan/)
* [GitHub](https://github.com/CorCanavan)

## Resources
- The API I utilized for this project: [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/).
- The font used for this project: [Hylia Serif](https://artsyomni.com/hyliaserif).

## Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).

