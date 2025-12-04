console.log("JavaScript loaded");
const mainContainer = document.querySelector(".main-container");
const addUserForm = document.getElementById("addUserForm");
const checkUsersForm = document.getElementById("check-all-users");
const checkUserById = document.getElementById("check-user-by-id");

const userId = document.getElementById("userId").value;
const addUserResults = document.getElementById("addUserResults");

addUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("userName").value;
  const lastName = document.getElementById("sirnameText").value;
  const userSex = document.getElementById("userSex").value;
  ///Debugging statements
  console.log("Add user event triggered");
  console.log("user: " + firstName + " " + lastName);
  //////////////////////////////////
  try {
    const res = await fetch("/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, userSex }),
    });
    const data = await res.json();
    data.innerHTML = `<p class="addUserResults"> ${data.message} </p>`;
  } catch (error) {
    addUserResults.innerHTML = `<p class="addUserResults">404 <strong>ERROR</strong>, No established connection</p>`;
  }
});
