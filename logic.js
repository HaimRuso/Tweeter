const Tweeter=function(){
    const posts=[
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter=0
    let commentIdCounter=0
    for(let i=0; i<posts.length; i++){
        for(let j=0; j<posts[i].comments.length; j++){
            commentIdCounter++
    }
}
console.log(commentIdCounter)
    const getPosts=function(){
        return posts

    }
    const addPost= function(text){
        if(posts.length==0){
            postIdCounter++
            posts.push({text:text, id:"p"+postIdCounter,comments:[]})
        }
        else{
        postIdCounter=parseInt(posts[posts.length-1].id[1])
        postIdCounter++
        posts.push({text:text, id:"p"+postIdCounter,comments:[]})
        }
    }
    const removePost=function(id){
        if(posts.length!=0){
        for(let post in posts){
            if(posts[post].id==id){
                posts.splice(post,1)
            }
        }
    }
    }
    const addComment=function(text,pid){
        for(let post in posts){
            if(posts[post].id==pid){
                        commentIdCounter++ 
                        posts[post].comments.push({text:text,id:"c"+commentIdCounter})   
                    }
                
                }
            }

    const removeComment= function(idp,idc){
       
        for(let post in posts){
            if(posts[post].id==idp){
                if(posts[post].comments!=0){
                for(let comment in posts[post].comments){
                    if(posts[post].comments[comment].id==idc){
                        posts[post].comments.splice(comment,1) 
                    }
 
            }
    }
}
    }
}

    

    return{
        addPost,
        removePost,
        getPosts,
        addComment,
        removeComment

    }
}
    



