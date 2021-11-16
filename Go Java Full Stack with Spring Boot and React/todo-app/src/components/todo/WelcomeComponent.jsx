import React,{Component} from "react";

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div class="container">
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div class="container">
                    Click gere to get a customized welcome message
                You can manage your todos <Link to="/todos">here</Link>
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        ) 
        
    }
}

export default WelcomeComponent