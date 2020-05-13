import React,{Component} from 'react';

class Comments extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const comment = event.target.elements.comment.value;
        if(comment) {
            this.props.addComment(comment,this.props.id)
        }
        event.preventDefault();
        event.target.elements.comment.value = '';

    }

    render() {
        return <div className="comment">
        {
                this.props.comments.map((comment,index) => {
                    return (
                        <p key={index}>{comment}</p>
                    )
                })
        }
          <form className="comment form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="comment" name='comment'></input>
            <button>Submit</button>
           
          </form>
        </div>
    }
}

export default Comments;