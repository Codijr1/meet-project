// src/components/Alert.js

import { Component } from 'react';

//alert
class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.bgColor = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "2px",
            borderStyle: "solid",
            fontWeight: "bolder",
            borderRadius: "7px",
            borderColor: this.color,
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

//info alert
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)';
        this.bgColor = 'rgb(173, 216, 230, 0.3)';
    }
}

//error alert
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 0, 0)';
        this.bgColor = 'rgba(255, 0, 0, 0.3)';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 255, 0)';
        this.bgColor = 'rgba(255, 255, 0, 0.3)';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };