import './style.css';
import { fetchFromAPI,writeToAPI } from './modules/interfaceAPI';
const refreshBtn = document.querySelector('#button-refresh');
const inputForm = document.querySelector('#form-score-add');

const init = () =>{
  refreshBtn.onclick = () =>{
    fetchFromAPI();
  }
  inputForm.onsubmit = (event) =>{
    event.preventDefault();
    writeToAPI();
  }
}
window.onload=()=>{
  init();
  fetchFromAPI();
}
