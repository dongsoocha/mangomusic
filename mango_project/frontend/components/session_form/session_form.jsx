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
                        Sign in with your Mango ID
            <br />
            You will be signed in to Mango TV and Mango Music
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>Mango ID:
                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                    {this.props.otherForm}
                </div>
            );
        } else if (this.props.formType === 'signup') {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        Create a new Mango ID
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
                        </div>
                    </form>
                    {this.props.otherForm}
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);

