export function tck() {
  alert("Это ТЦК, предьявите Ваши документы");

  const text = document.createElement("h1");
  text.classList.add("title");
  text.textContent = "Центр ТЦК";
  document.body.appendChild(text);

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = "./images/tck.jpg";
  container.appendChild(img);

  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Получить отсрочку";
  document.body.appendChild(btn);
}
