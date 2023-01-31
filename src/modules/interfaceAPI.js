import { readFromForm, populateScoresTable, showMessage } from './appCRUD.js';

const gameId = '/myB4aP7362UjeuVPdr2v';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const scoreUrl = `${baseUrl}games${gameId}/scores/`;

export const fetchFromAPI = async () => {
  const scores = await fetch(scoreUrl).then((response) => response.json());
  populateScoresTable(scores.result);
};

export const writeToAPI = async () => {
  const userInput = readFromForm();
  if (userInput !== null) {
    await fetch(scoreUrl, {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()).then(() => { showMessage('Score added successfully', 'green'); });
  }
};