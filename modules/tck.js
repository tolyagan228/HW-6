export function tck() {
  alert("Это ТЦК, предъявите Ваши документы");

  const text = document.createElement("h1");
  text.classList.add("title");
  text.textContent = "Центр ТЦК";
  document.body.appendChild(text);

  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = "./images/tckhello.jpg";
  container.appendChild(img);

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Получить отсрочку";
  document.body.appendChild(btn);
}
