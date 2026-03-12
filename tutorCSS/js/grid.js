export const sentGridSection = () => {
  const btnContainer = document.querySelectorAll(".grid__btn-container");
  const boxWrapperContainer = document.querySelector(".grid__box-container");

  btnContainer.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const textBtn = e.target.textContent.replaceAll(" ", "");
      console.log(textBtn);
      if (textBtn === "display:grid;") {
        boxWrapperContainer.style.setProperty("display", "grid");
      } else if (textBtn === "display:\ninline-grid;") {
        boxWrapperContainer.style.setProperty("display", "inline-grid");
      }
    });
  });

  const boxTemplate = document.querySelector(".grid__box-template");
  const templateColums = document.querySelector(".grid__template-colums");
  const templateRows = document.querySelector(".grid__template-rows");

  templateColums.addEventListener("input", (e) => {
    boxTemplate.style.setProperty("grid-template-columns", `${e.target.value}`);
  });
  templateRows.addEventListener("input", (e) => {
    boxTemplate.style.setProperty("grid-template-rows", `${e.target.value}`);
  });
};

const blockColumns = document.querySelectorAll(".grid__block-column");
const columnInput = document.querySelectorAll(".grid__input-column");

columnInput.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    let indexBlock = index;
    let valueInput = e.target.value;
    blockColumns[indexBlock].style.gridColumn = `${valueInput}`;
  });
});
