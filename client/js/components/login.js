var React = require('react');

var login = React.createClass({
    render:function(){
        return (
            <div className = "homepage">
                <div className ="homepage-text">
                    <h1 className = 'login-header'>Japanese Z</h1>
                    <h2 className = 'login-greeting'>Moshi Moshi!</h2>
                </div>
                <div className = "register-login">
                	<button className = "register-login-button" >
                        <a href="/auth/google">Register/Log In with <span>Google</span> 
                        </a>
                    </button>
                </div>
            </div>
        )
    }
})

module.exports = login