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
const rowinput = document.querySelectorAll(".grid__input-row");

columnInput.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    let valueInput = e.target.value;
    blockColumns[index].style.gridColumn = `${valueInput}`;
  });
});
rowinput.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    let valueInput = e.target.value;
    blockColumns[index].style.gridRow = `${valueInput}`;
  });
});

const autoColums = document.querySelector(".grid__auto-colums");
const boxAutoColumn = document.querySelector(".grid__box-auto-column");

autoColums.addEventListener("input", (e) => {
  boxAutoColumn.style.gridAutoColumns = `${e.target.value}`;
});

const btnFlowColum = document.querySelector(".grid__btn-flow-colum");
const btnFlowRow = document.querySelector(".grid__btn-flow-row");
const boxAutoFlow = document.querySelector(".grid__box-auto-flow");

btnFlowColum.addEventListener("click", () => {
  boxAutoFlow.classList.add("grid__box-auto-flow-active-colum");
});
btnFlowRow.addEventListener("click", () => {
  boxAutoFlow.classList.remove("grid__box-auto-flow-active-colum");
});

const btnFlowDenseAct = document.querySelector(".grid__btn-flow-dense-act");
const btnFlowDenseRow = document.querySelector(".grid__btn-flow-dense");
const boxAutoFlowDense = document.querySelector(".grid__box-auto-flow-dense");

btnFlowDenseAct.addEventListener("click", () => {
  boxAutoFlowDense.classList.add("grid__box-auto-flow-dense-act");
});

btnFlowDenseRow.addEventListener("click", () => {
  boxAutoFlowDense.classList.remove("grid__box-auto-flow-dense-act");
});

const boxAutoFlowCom = document.querySelector(".grid__box-auto-flow-com");
const btnFlowComRow = document.querySelector(".grid__btn-flow-com-row");
const btnFlowComColumn = document.querySelector(".grid__btn-flow-com-column");
const btnFlowComRowDense = document.querySelector(
  ".grid__btn-flow-com-row-dense",
);
const btnFlowComColumnDense = document.querySelector(
  ".grid__btn-flow-com-column-dense",
);

const arrBtnFlowCom = [
  btnFlowComRow,
  btnFlowComColumn,
  btnFlowComRowDense,
  btnFlowComColumnDense,
];

arrBtnFlowCom.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    removeClassAct();
    if (index === 0) {
      boxAutoFlowCom.classList.add("grid__box-auto-flow-com-act-row");
    } else if (index === 1) {
      boxAutoFlowCom.classList.add("grid__box-auto-flow-com-act-column");
    } else if (index === 2) {
      boxAutoFlowCom.classList.add("grid__box-auto-flow-com-act-row-dense");
    } else if (index === 3) {
      boxAutoFlowCom.classList.add("grid__box-auto-flow-com-act-column-dense");
    }
  });
});

const removeClassAct = () => {
  let nameClass = boxAutoFlowCom.className;
  if (nameClass.includes("act")) {
    boxAutoFlowCom.classList.remove("grid__box-auto-flow-com-act-row");
    boxAutoFlowCom.classList.remove("grid__box-auto-flow-com-act-column");
    boxAutoFlowCom.classList.remove("grid__box-auto-flow-com-act-row-dense");
    boxAutoFlowCom.classList.remove("grid__box-auto-flow-com-act-column-dense");
  }
};
