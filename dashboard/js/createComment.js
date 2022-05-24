const myComment = async (e) => {
  e.preventDefault();
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
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())

    .then((json) => console.log(json));
  document.getElementById("comment_name").value = "";
  document.getElementById("comment_text").value = "";
};

document.getElementById("comment_button").addEventListener("click", myComment);
