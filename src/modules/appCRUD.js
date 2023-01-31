const scoreTable = document.querySelector('.score-table');
const inputName = document.querySelector('#player-name');
const inputScore = document.querySelector('#player-score');
const inputForm = document.querySelector('#form-score-add');

export const showMessage = (msg, colorClass) => {
  const msgElement = document.querySelector('.error-msg2');
  msgElement.textContent = msg;
  msgElement.classList.add(colorClass);
  setTimeout(() => {
    msgElement.textContent = '';
    msgElement.classList.remove(colorClass);
  }, 1000);
};

const validateScore = (value) => value.match(/[0-9]/gi);

export const readFromForm = () => {
  if (validateScore(inputScore.value)) {
    const newScore = { user: inputName.value, score: inputScore.value };
    inputForm.reset();
    return newScore;
  }

  showMessage('Please enter valid score', 'red');
  return null;
};

const removeExistingRows = () => {
  const scores = scoreTable.querySelectorAll('.data-row');
  for (let i = 0; i < scores.length; i += 1) {
    scoreTable.removeChild(scores[i]);
  }
};
export const populateScoresTable = (arr) => {
  removeExistingRows();
  arr.forEach((userObj) => {
    const tr = document.createElement('tr');
    tr.classList.add('table-row', 'data-row');
    const tdName = document.createElement('td');
    tdName.textContent = userObj.user;
    const tdScore = document.createElement('td');
    tdScore.textContent = userObj.score;
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    scoreTable.appendChild(tr);
  });
};