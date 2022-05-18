const blog = (e) => {
    e.preventDefault();
    const title = document.getElementById("articleTitle").value;
    const blogPost = tinymce.activeEditor.getContent();
  
    db.collection("blog")
      .add({
        title: title,
        newBlog: blogPost,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  document.getElementById("blogButton").addEventListener("click", blog);
  
  //get blogs
  
  db.collection("blog").onSnapshot((blog) => {
    const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  
    document.getElementById("getArticle").innerHTML = data
      ?.map(
        (blog) =>
          `
  <div class="getArticle">
                <h1 class="articleTitle">${blog?.data?.title}</h1>
                <p class="articleBody">
                  ${blog?.data?.newBlog}
                </p>
                 <button id="Edit" class="Edit articleButton">Edit</button>
            <button id="Delete" class="Delete articleButton">Delete</button>
            <button id="Repost" class="Repost articleButton">Repost</button>
          
                </div>
        `
      )
      .join("");
  });
  
  const deleteEmail = () => {
    db.collection("email").doc("");
  
    var delEmail = email.update({
      email: firebase.firestore.FieldValue.delete(),
    });
  };
  document.getElementById("Delete").addEventListener("click", deleteEmail);
  
  // <div key=${blog?.id}>
  //     <p>${blog?.data?.newBlog}</p>
  //     </div>
  