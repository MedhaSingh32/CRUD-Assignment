import React from 'react';
import {addTeam} from '../actions/actions';
import './Header.css'
import { connect } from 'react-redux';

 class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamArray:[],
        }

        
    }
    createTeam = () => {
        this.props.addTeam(this.state.teamArray);
        // this.setState({ team: '' });

    }
    onChange = (e) => {
        this.setState({teamArray:[e.target.value]});
    }
   render() {
        return (
            <div className="header">
                <select className="selector">
                    <option value="Teams">Teams</option>
                </select>
                <input type="text" onChange={this.onChange} value={this.state.team} className="textbox"/>
                <button onClick={this.createTeam} className="button"> Create</button>
            </div>
        )
   }

}
export default connect(
    null,
    { addTeam }
  )(Header)