import React,{Component} from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import PropTypes from 'prop-types';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import SinglePhoto from './Single';


class Main extends Component{

    constructor(){
        super()
       
       
    }
    
    render() {
        
        return(
            <div> 
            <h1><Link to="/">PhotoWall</Link></h1>  
            <Route exact path="/" render = {(history) => (
                 <div>
                 <Photowall {...this.props} onHistory={history} />
             </div>
            )}
            />
            {<Route path="/AddPhoto" render = {({history}) => (
                  <AddPhoto {...this.props} onHistory={history} />   
            )}
                />}
            <Route path="/single/:id" render= {(params) => (
                <SinglePhoto {...this.props} {...params}  />
            )} />
           </div>
        );
    }

    
}


export default Main;