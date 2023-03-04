const box = document.querySelector('.box');

async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let users = await res.json();
    users.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let a = document.createElement("a")
      h2.textContent = user.name;
      p.textContent = user.body;
      a.textContent = user.email;
      box.append(card)
      card.append(h2)
      card.append(p)
      card.append(a)
    });
  } catch (error) {
    console.error("nma qvosssan blet");
  }
}
getUsers();