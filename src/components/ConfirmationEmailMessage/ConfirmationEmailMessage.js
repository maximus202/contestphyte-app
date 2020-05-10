import React, { Component } from 'react';

class ConfirmationEmailMessage extends Component {
  render() {
    console.log(this.props.participantDetails);
    if (this.props.participantDetails.isConfirmed == 'false') {
        return (
            <section>
                <h1>Don&apos;t forget to confirm your entry!</h1>
                <p>To finish your entry, open the email we just sent you!</p>
            </section>
        );
    } 
        return null;
    
  }
}

export default ConfirmationEmailMessage;
