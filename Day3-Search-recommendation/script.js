document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const items = document.querySelectorAll("#itemList .list-group-item");
  const list = document.getElementById("itemList");
  const copy = list.innerHTML;

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();

    //const indexs = [];

    const index = text.indexOf(search);

    if (index !== -1 && search !== "") {
      //list.innerHTML = `<li class="list-group-item">${item.textContent}</li>`;
      const highlightedText = item.textContent.substring(
        index,
        index + search.length
      );

      item.innerHTML = item.textContent.replace(
        highlightedText,
        `<span class="highlight">${highlightedText}</span>`
      );
      item.style.display = "";
    } else {
      item.style.display = "none";
      //item.innerHTML = item.textContent;
    }
  });
  //list.innerHTML = copy;
});
