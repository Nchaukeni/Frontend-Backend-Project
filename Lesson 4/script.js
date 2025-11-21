const mainContainer = document.querySelector(".main-container");
const addUserForm = document.getElementById("add-user-form");
const checkUsersForm = document.getElementById("check-all-users");
const checkUserById = document.getElementById("check-user-by-id");
const firstName = document.getElementById("userName");
const lastName = document.getElementById("sirname-text");
const userSex = document.getElementById("user-sex");
const userId = document.getElementById("userId");

addUserForm.addEventListener("submit", async () => {
  try {
    const res = await fetch("/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, userSex }),
    });
    const data = await res.json();
  } catch (error) {}
});
