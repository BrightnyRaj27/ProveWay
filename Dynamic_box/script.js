const options = document.querySelectorAll(".option");
const totalElement = document.getElementById("total");

function selectOption(option) {
  options.forEach((o) => {
    const selectors = o.querySelector(".selectors");
    o.classList.remove("selected");
    o.querySelector("input").checked = false;
    if (selectors) selectors.innerHTML = "";
  });

  const input = option.querySelector("input");
  const selectorsContainer = option.querySelector(".selectors");
  if (!input || !selectorsContainer) return;

  input.checked = true;
  option.classList.add("selected");

  const pairs = parseInt(option.dataset.pairs);
  const price = parseFloat(option.dataset.price);
  totalElement.textContent = price.toFixed(2);

  for (let i = 1; i <= pairs; i++) {
    const row = document.createElement("div");
    row.classList.add("selector-row");

    row.innerHTML = `
    <span class="pair-label">#${i}</span>
    <select class="size-dropdown">
      <option>S</option>
      <option>M</option>
      <option>L</option>
    </select>
    <select class="color-dropdown">
      <option>colour</option>
      <option>Black</option>
      <option>White</option>
      <option>Red</option>
    </select>
  `;

    selectorsContainer.appendChild(row);
  }
}

// Bind hover and click
options.forEach((option) => {
  option.addEventListener("mouseenter", () => selectOption(option));
  option
    .querySelector("input")
    .addEventListener("change", () => selectOption(option));
});
