import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        if (this.props.errors.session.length !== 0) {
            return (
                <ul id="session_error">
                    {this.props.errors.session.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );  
        }
    }

    render() {
        if (this.props.formType === "login") {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <img className="logo" src={window.mangoURL} alt="Mango Logo"/>
                        <br />
                        <h3 className="signin-header">Sign in with your Mango ID</h3>
                        
                        <br />
                        <h4 className="sign-in-info">You will be signed in to Mango TV and Mango Music</h4>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.email}
                                    placeholder="Mango ID"
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    placeholder="password"
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            {this.props.otherForm}
                        </div>
                    </form>
                </div>
            );
        } else if (this.props.formType === 'signup') {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <h3 className="Log in header"></h3>
                        <br />
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        {this.renderErrors()}
                        <div className="signup-form">
                            <br />
                            <label>Mango ID:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            {this.props.otherForm}
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);

