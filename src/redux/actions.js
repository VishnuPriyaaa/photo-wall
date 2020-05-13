//remove

export function removePost(index) {
    return {
        type:"REMOVE_POST",
        //ES6
        index
    }
}

export function addPost(post) {
   return {
       type:"ADD_POST",
       //ES6
       post
   }
}

export function addComment(comment,postId){
    return {
        type: "ADD_COMMENT",
        comment,
        postId
    }
}