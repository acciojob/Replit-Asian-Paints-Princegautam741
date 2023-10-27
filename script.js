document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-container");
  const gridItems = document.querySelectorAll(".grid-item");
  const blockIdInput = document.getElementById("block_id");
  const colorInput = document.getElementById("colour_id");
  const changeButton = document.getElementById("change_button");
  const resetButton = document.getElementById("Reset");

  // Initialize grid background colors
  gridItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });

  // Handle color change when the "Change Color" button is clicked
  changeButton.addEventListener("click", function () {
    const blockId = blockIdInput.value;
    const selectedColor = colorInput.value;

    const block = document.getElementById(blockId);

    if (block) {
      // Set the background color of the selected block
      block.style.backgroundColor = selectedColor;
    } else {
      alert("Block ID not found!");
    }
  });

  // Reset all grid items to transparent background
  resetButton.addEventListener("click", function () {
    gridItems.forEach((item) => {
      item.style.backgroundColor = "transparent";
    });
  });
});
