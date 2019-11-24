const Renderer=function(){

    const renderPosts=function(posts){
       
        $('#posts').empty();
        for(let post of posts){
            $('#posts').append('<div class="post" id='+post.id+'>'+post.text+
            '<div class="delete">Delete</div> <div class="addComment">Add Comment</div> <input type="text" placeholder="Whats on your mind?" id="input1"> </div>')
            
            // let postId=post.id;
            
            for(let comment of post.comments){
                $('#'+post.id ).append
                ('<div class="comments" data-id='+comment.id+'>'+comment.text+
                '<div class="cmt">Delete comment</div></div>')
            }
        }
    }
    return{
        renderPosts
    }
}