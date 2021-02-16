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
        this.props.processForm(user).then(this.props.closeModal).then(() => this.props.history.push("/browse"));
    }
    componentWillUnmount() {
        this.props.clearErrors();
    }
    renderErrors() {
        if (this.props.errors.session.length !== 0) {
            return (
                <ul id="session_error">
                    {this.props.errors.session.map((error, i) => (
                        <li className="session-error" key={`error-${i}`}>
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
                        <h3 className="signin-header">Sign in with your Mango ID</h3>
                        <h4 className="sign-in-info">You will be signed in to Mango TV and Mango Music</h4>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        
                        <div className="login-form">

                            <label>
                                <input className="session-inputs" type="text"
                                    value={this.state.email}
                                    placeholder="Mango ID"
                                    onChange={this.update('email')}
                                    className="login-email"
                                />
                            </label>

                            <label>
                                <input className="session-inputs" type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="login-password"
                                />
                            </label>

                            {this.renderErrors()}



                            <input className="session-submit" type="submit" value="Login" />
                            {this.props.otherForm}


                            
                        </div>
                    </form>
                </div>
            );
        } else if (this.props.formType === 'signup') {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <img className="logo" src={window.mangoURL} alt="Mango Logo" />
                        <h3 className="signup-header">Create a new Mango ID</h3>
                        <h4 className="signup-info">You will be signed in to Mango TV and Mango Music</h4>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className="signup-form">

                            <label>
                                <input className="session-inputs" type="text"
                                    value={this.state.email}
                                    placeholder="Mango ID"
                                    onChange={this.update('email')}
                                    className="signup-email"
                                />
                            </label>

                            <label>
                                <input className="session-inputs" type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="signup-password"
                                />
                            </label>

                            {this.renderErrors()}



                            <input className="session-submit" type="submit" value="Sign Up" />
                            {this.props.otherForm}


                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);

