import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import  ShowUser  from './ShowUser';
import './Header.css'

class LeftContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserPanel:false,
            title:'',
            teamData:[],
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({teamData:nextProps.teamData});
    }

    showUserEvent = (e) => {
        this.setState({showUserPanel:true}); 
        this.setState({title: e.target.title})      
    }

    render() {
        console.log(this.props.teamData);
        const {teamData, showUserPanel} = this.state;
        return (
            <div>
                <h3>Teams</h3>
                {
                    !!teamData.length &&
                    teamData.map((team)=>{
                        return (
                            <ul>
                                <li title={team} onClick={(e)=>{this.showUserEvent(e)}} >{team}</li>
                            </ul>
                        )
                    })
                }
                {showUserPanel && <ShowUser title={this.state.title}/>}
            </div>
        )

    }

}

function mapStateToProps(state) {
    return {
        teamData:_.get(state,'teamData',[]),
    };
}
function matchDispatchToProps(){
    return {}
}

export default connect(
    mapStateToProps, matchDispatchToProps
  )(LeftContainer)