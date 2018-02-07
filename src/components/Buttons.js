import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeUser} from '../actions';
import firebase from 'firebase';
import {characterExport} from '../reducers';

class Buttons extends React.Component {

    handleClick = () => {
        firebase.auth().signOut()
            .then(() => {
                this.props.changeUser(null);
            });
    };

    handleDonate = () => {
        window.open('https://paypal.me/SkyJedi');
    };

    render() {
        return (
          <div className='hidePrint' style={{textAlign: 'right'}}>
              <a href={this.props.characterExport} download='character'><button type="button">Export</button></a>
              <input type='button' onClick={this.handleDonate} value="Donate" />
              <button onClick={this.handleClick}>Sign Out</button>
          </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        channel: state.channel,
        characterExport: characterExport(state),
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Buttons);