import React from "react";
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
    return(
    <div>
        {/*<button className="addIcon" onClick={props.onAdd}></button>*/}
        {/*<a onClick={props.onAdd} href="#AddPhoto" className="addIcon" ></a>*/}
        <Link to="/AddPhoto" className="addIcon"></Link>
        <div className="photoGrid">
                {props.posts.sort(function(x,y){
                    return y.id - x.id
                }).map((post,index) => <Photo key={index} post={post} {...props}/>)}
        </div>
    </div>
    );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    //onRemove: PropTypes.func.isRequired
}

 export default PhotoWall;