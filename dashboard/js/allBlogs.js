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
      (document.getElementById("Blog").innerHTML = json.data.blog

        .map(
          (blog) =>
            `
<div class="card">
      <div class="card-img">
        <img src="/image/bitcoin.png" alt="bitcoin" class="image" />
      </div>
      <div>
        <h3>${blog.title}</h3>
        <p>
         ${blog.blog.substring(0, 50)}
        </p>
        <button onclick=getSingleBlog("${blog._id}")>Read more</button>
      </div>
    </div>

      `
        )
        .reverse()
        .join(""))
  );
