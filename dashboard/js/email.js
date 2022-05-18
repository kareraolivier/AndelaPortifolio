db.collection("email").onSnapshot((email) => {
    const data = email.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    const table = document.getElementById("dsTable");
    table.innerHTML = data
      ?.map(
        (email) =>
          `<div key=${email?.id}>
           <table class="table">
           
              <tr class="low">
                <td class="colomn1">${email?.data?.date}</td>
                <td class="colomn2">${email?.data?.uemail}</td>
                <td class="colomn3">${email?.data?.message}</td>
              </tr>
             
            </table>
            </div>
        `
      )
      .join("");
  });
  