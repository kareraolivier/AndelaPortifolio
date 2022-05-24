fetch(`https:/karerandela.herokuapp.com/api/v1/users`, {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("token")).token.id
    }`,
  },
})
  .then((res) => res.json())
  .then(
    (json) => console.log(json)
    //   (document.getElementById("userName").innerHTML = json.data.email.map(
    //     (email) => `

    //      <table class="table"onclick="getId('${email._id}')">

    //         <tr id="email_id" class="low lowShadow">
    //           <td class="colomn1">${email.createAt
    //             .split("")
    //             .slice(0, 10)
    //             .join("")
    //             .substring(0, 15)}</td>
    //           <td class="colomn2">${email.email.substring(0, 20)}</td>
    //           <td class="colomn3">${email.message.substring(0, 30)}</td>
    //         </tr>

    //       </table>
    //       </div>
    //   `
    //   ))
  );
