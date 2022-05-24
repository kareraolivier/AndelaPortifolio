async function getSingleBlog(id) {
  await fetch(`https:/karerandela.herokuapp.com/api/v1/blogs/${id}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (json) =>
        (document.getElementById("singleBlog").innerHTML = `
       <div class="blog-post">
        <h2>${json?.data?.blog.title}</h2>
        <div class="post">
          <img src="/image/singleblog.jpg" alt="single post" />
          <p>
          ${json?.data?.blog.blog}
          </p>
          <div class="author">
            <p>Rwitten by: ${json?.data?.blog.author}</p>
            <p class="date">Published on: ${json?.data?.blog.createAt
              .split("")
              .slice(0, 10)
              .join("")}.</p>
          </div>
        </div>
        <div class="comment-card">
          <div class="post-commet">
            <input type="text" placeholder="your name" class="comment-name" id="comment_name" />
            <input type="text" placeholder="comment...." class="comment-textbox" id="comment_text" />
            <button id="comment_button" onclick=postMyComment("${
              json?.data?.blog._id
            }")>comment</button>
          </div>
          <div class="comments" id="postComment">
           ${json?.data?.blog.comments

             ?.map(
               (comment) =>
                 `<div class="single-comment">
               <h3>${comment?.fullName}</h3>
               <p>
                 ${comment?.comment}
               </p>
               <p class="date">Posted on:${comment.createAt
                 .split("")
                 .slice(0, 10)
                 .join("")}</p>
             </div>`
             )
             .reverse()
             .join("")}
            
          </div>
        </div>
      </div> 
            `)
    );
}

// comments...........................

async function postMyComment(id) {
  // const myComment = async (e) => {
  //   e.preventDefault();
  const userName = document.getElementById("comment_name").value;
  const userMessage = document.getElementById("comment_text").value;
  const body = {
    fullName: userName,
    comment: userMessage,
  };
  await fetch(`https:/karerandela.herokuapp.com/api/v1/blogs/${id}/comment`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("token")).token
      }`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())

    .then((json) => console.log(json));
  document.getElementById("comment_name").value = "";
  document.getElementById("comment_text").value = "";
}

// document
//   .getElementById("comment_button")
//   .addEventListener("click", myComment);
// }
