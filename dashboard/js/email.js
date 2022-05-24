// const dsEmail = document.getElementById("dsEmail");

fetch("https:/karerandela.herokuapp.com/api/v1/emails", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(
    (json) =>
      (document.getElementById("dsTable").innerHTML = json.data.email
        .map(
          (email) => `
         
         <table class="table" onclick="getId('${email._id}')">
         
            <tr id="email_id" class="low lowShadow">
              <td class="colomn1">${email.createAt
                .split("")
                .slice(0, 10)
                .join("")
                .substring(0, 15)}</td>
              <td class="colomn2">${email.email.substring(0, 20)}</td>
              <td class="colomn3">${email.message.substring(0, 30)}</td>
            </tr>
           
          </table>
          </div>
      `
        )
        .reverse()
        .join(""))
  );

// displaying email...........................................

async function getId(id) {
  document.getElementById("hideTable").style.opacity = 0.3;
  console.log(id);

  try {
    const emails = await fetch(
      `https:/karerandela.herokuapp.com/api/v1/emails/${id}`,
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

    const data = await emails.json();
    console.log(data.data);
    document.getElementById("popup").innerHTML = ` <div class="popup">
     <button id="Close" class="Close articleCloseButton" onclick="getArticleId">Close</button>
                
         <h3>${data?.data?.email.email}</h3>
         <p>${data?.data?.email.message}</p>
          <h4>${data?.data?.email.createAt
            ?.split("")
            .slice(0, 10)
            .join("")
            .substring(0, 12)}</h4>
          <button id="Delete" class="Delete articleButton" onclick=getEmailId('${
            data?.data?.email._id
          }') style="background-color: rgb(255, 24, 24);">delete</button>
        </div>`;
    document.getElementById("popup").style.display = "block";
    document.getElementById("Close").addEventListener("click", () => {
      document.getElementById("popup").style.display = "none";
      document.getElementById("hideTable").style.opacity = 1;
    });
  } catch (error) {
    console.log(error);
  }
}

// delete email..............................................................

async function getEmailId(id) {
  await fetch(`https:/karerandela.herokuapp.com/api/v1/emails/${id}`, {
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
  // document.getElementById("popup").style.display = "none";
}
