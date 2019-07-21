import React, { Component } from 'react';
import { AuthStore } from '../../helpers';
import { Redirect, Link } from "react-router-dom";
import './Login.scss';

class Login extends Component {

  handleForm = (e) => {
    e.preventDefault();
    console.log('preventDefault');
  }

  render() {
    const logo = process.env.REACT_APP_URL + '/images/logo.svg';
    const emailIcon = process.env.REACT_APP_URL + '/icons/email-icon.svg';
    const passwordIcon = process.env.REACT_APP_URL + '/icons/password-icon.svg';

    if (AuthStore.isAuthenticated()) {
      return <Redirect to={{ pathname: "/account/feeds" }} />
    }

    return (
      <div className="Login container">
        <div className="row">
          <div className="col-12">

            <form onSubmit={this.handleForm} className="LoginForm">
              <Link to="/account/feeds">
                <img src={logo} alt="Socialite Logo" className="logo" />
              </Link>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">On se connait déjà ?</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    <Link to="/auth/register">Non ? Faisons connaissance !</Link>
                  </h6>

                  <div className="card-text">
                    <div className="form-group">
                      <label htmlFor="email">Adresse e-mail</label>
                      <div className="field-group">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre email" />
                        <img className="image" src={emailIcon} alt="Mot de passe" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Mot de passe</label>
                      <div className="field-group">
                        <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Entrez votre mot de passe" />
                        <img className="image image-password" src={passwordIcon} alt="Mot de passe" />
                      </div>
                    </div>
                  </div>

                  <div className="button-row">
                    <button type="submit" className="btn btn-primary">C'est parti !</button>
                    <a href="/forget-password" className="card-link mt-2">Identifiants oubliés ?</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
