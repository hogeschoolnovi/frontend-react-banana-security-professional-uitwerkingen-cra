import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  // state voor het formulier
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // state voor functionaliteit
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    toggleError(false);
    toggleLoading(true);

    try {
      await axios.post('http://localhost:3000/register', {
        email: email,
        password: password,
        username: username,
      });

      // Let op: omdat we geen axios Canceltoken gebruiken zul je hier een memory-leak melding krijgen.
      // Om te zien hoe je een canceltoken implementeerd kun je de bonus-branch bekijken!

      // als alles goed gegaan is, linken we dyoor naar de login-pagina
      history.push('/signin');
    } catch(e) {
      console.error(e);
      toggleError(true);
    }

    toggleLoading(false);
  }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-field">
          Emailadres:
          <input
            type="email"
            id="email-field"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="username-field">
          Gebruikersnaam:
          <input
            type="text"
            id="username-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password-field">
          Wachtwoord:
          <input
            type="password"
            id="password-field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
        <button
          type="submit"
          className="form-button"
          disabled={loading}
        >
          Registreren
        </button>

      </form>

      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;