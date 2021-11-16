import React,{Component} from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component {
constructor(props){
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.state = {
        welcomeMessage : ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
}

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
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )         
    }

    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch()

        HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data})
    }
}

export default WelcomeComponent