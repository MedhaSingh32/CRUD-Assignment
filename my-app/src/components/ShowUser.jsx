import React from 'react';
import {addUser,deleteUser} from '../actions/actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import './ShowUser.css';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            description:'',
            finalArray:[],
            userBalanceView:[],
        }
    }

    
    addUserDetails = () => {
        const userArray = [];
        let obj= {
            teamName:this.props.title,
            name: this.state.name,
            description: this.state.description
        }
        userArray.push(obj);
        this.props.addUser(userArray);
        this.setState({name: ''});
        this.setState({description: ''});

    }

    componentWillReceiveProps(nextprops) {
        this.setState({finalArray:nextprops.userData});
    }

    handleChange = (e) => {
        if(e.target.name === 'name') {
            this.setState({name: e.target.value});
        }
        else {
            this.setState({description: e.target.value});
        }

    }

    deleteUser (index,title) {
     const {finalArray} = this.state;
     const result = _.filter(finalArray,user=>user.teamName === title)
     result.splice(index,1);
     this.setState({finalArray:result});
     this.props.deleteUser(result);
    }

    render () {
        const {finalArray} = this.state;
        const { title } = this.props;
        return (
            <div className="container">
            <b>{this.props.title}</b>
            <div class="card">
                <div>
                    <h4><b>Name</b></h4>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
                    <h4><b>Description</b></h4>
                    <textarea rows="4" cols="35" onChange={this.handleChange} value={this.state.description}>
                    </textarea>
                    <br/>
                    <br/>
                    <button className="button" onClick={this.addUserDetails}>Create User +</button>
                </div>
            </div>
            {
                !!_.get(finalArray,'length') && 
                <div>
                    {
                    _.filter(finalArray,user=> user.teamName === title).map((user,index)=>{
                        return(
                            <div className="container">
                                <div className="card">
                                {user.name}
                                <h4><b>Description</b></h4>
                                    {user.description}
                                <br/>
                                <br/>
                                <button className="dltbutton" onClick={this.deleteUser.bind(this,index,title)}>Delete User -</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state,'mapstatetoprops data')
    return {userData:_.get(state,'userData',[])}
}

export default connect(
    mapStateToProps,{addUser,deleteUser}
  )(ShowUser)