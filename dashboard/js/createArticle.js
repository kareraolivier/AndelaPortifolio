const blog = async (e) => {
  e.preventDefault();
  const btitle = document.getElementById("articleTitle").value;
  const bblog = tinymce.activeEditor.getContent();
  const body = {
    title: btitle,
    blog: bblog,
  };
  await fetch("https:/karerandela.herokuapp.com/api/v1/blogs", {
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
  document.getElementById("articleTitle").value = "";
  tinymce.activeEditor.getContent()="";
};

document.getElementById("blogButton").addEventListener("click", blog);


//get blogs.............................................................

fetch("https:/karerandela.herokuapp.com/api/v1/blogs", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(
    (json) =>
      (document.getElementById("getArticles").innerHTML = json.data.blog
        .map(
          (blog) =>
            `
          <div class="getArticle">
              <h1 class="articleTitle">${blog.title}</h1>
              
                ${blog.blog.substring(0, 400)}
             
               <button id="Edit" class="Edit articleButton" 
               onClick=getBlogId('${blog._id}')>Edit</button>
               <button id="Delete" class="Delete articleButton"onclick="getArticleId('${
                 blog._id
               }')">Delete</button>


              </div>
            `
        )
        .reverse()
        .join(""))
  );

// single blog.......................................................

// delete...............................................................
async function getArticleId(id) {
  await fetch(`https:/karerandela.herokuapp.com/api/v1/blogs/${id}`, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("token")).token
      }`,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .then(() => location.reload());
}

// update..........................................................................
async function getBlogId(id) {
  console.log(id);

  const res = await fetch(
    `https:/karerandela.herokuapp.com/api/v1/blogs/${id}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).token
        }`,
      },
    }
  );
  const blog = await res.json();
  console.log(blog.data.blog);
  document.getElementById("articleTitle").value = blog.data.blog.title;
  tinymce.activeEditor.setContent(blog.data.blog.blog);

  // console.log("nnn", body);
  document
    .getElementById("updateButton")
    .addEventListener("click", async (e) => {
      e.preventDefault();

      const body = {
        title: document.getElementById("articleTitle").value,
        blog: tinymce.activeEditor.getContent(),
      };
      try {
        const resi = await fetch(
          `https:/karerandela.herokuapp.com/api/v1/blogs/${id}`,
          {
            method: "patch",
            headers: {
              mode: "no-cors",
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("token")).token
              }`,
            },
            body: JSON.stringify(body),
          }
        );
        const data = await resi.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    });
}
