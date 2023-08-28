import generateJoke from "./generate-joke";
import { v4 as uuidv4 } from "uuid";
import './styles/main.scss';

console.log('Joke ID: ' + uuidv4());
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();