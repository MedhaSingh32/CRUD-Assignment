import update from 'react-addons-update';

const defaultInfo = {
    teamData: [],
    userData: []
};

export default function addTeamReducer(state = defaultInfo, action) {
    // console.log(action.data,'action data');
    switch (action.type) {
    case 'ADD_TEAM': {
        return update(state, { teamData:  { $unshift: action.data  } });
    }
    case 'ADD_USER': {

        return update(state, { userData: { $unshift: action.data } });
    }
    case 'DELETE_USER' : {
        return {...state, userData: action.data};
    }

    }
   
}
