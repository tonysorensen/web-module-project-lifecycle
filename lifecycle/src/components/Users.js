import React from 'react';
import axios from '../Github';
import User from './UserCard.js'


class Users extends React.Component {
state={

}

componentDidMount () {
axios.get('https://api.github.com/users/tonysorensen')
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err);
    });
}
render(){
    return(
        <h1>Hello World</h1>
    )
}
}
 export default Users
