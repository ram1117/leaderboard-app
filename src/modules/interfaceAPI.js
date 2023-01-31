import { readFromForm, populateScoresTable, showMessage } from "./appCRUD";
//test array, will be removed once hit api
const gameId = '/xAnLxnpCzCYPPY9fdvNC';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const scoreUrl = baseUrl+'games'+gameId+'/scores/';

export const fetchFromAPI = async () => {
  const scores = await fetch(scoreUrl).then((response) => response.json()).then((json) => json);
  populateScoresTable(scores.result);
}

export const writeToAPI = async () => {
  const userInput = readFromForm();
  if (userInput!==null) {
    fetch(scoreUrl, {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
    showMessage('score added successfully', 'green');
  }
}