export const sentGridSection = () => {
  const btnContainer = document.querySelectorAll(".grid__btn-container");
  const boxWrapperContainer = document.querySelector(".grid__box-container");

  btnContainer.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const textBtn = e.target.textContent.replaceAll(" ", "");
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

const textareaTemplateAreas = document.querySelector(
  ".grid__template-areas-textarea",
);

const boxTemplateAreas = document.querySelector(".grid__box-template-areas");

textareaTemplateAreas.addEventListener("input", (e) => {
  const valueTextarea = e.target.value.replace(/;/g, "");
  boxTemplateAreas.style.gridTemplateAreas = `${valueTextarea}`;
});

const inputForBlockTemplateAreas = document.querySelectorAll(
  ".grid__input-for-block-template-areas",
);

const templateAreasBlock = document.querySelectorAll(
  ".grid__template-areas-block",
);

inputForBlockTemplateAreas.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    templateAreasBlock[index].style.gridArea = `${e.target.value}`;
  });
});

const gapInput = document.querySelector(".grid__gap-input");
const boxGap = document.querySelector(".grid__box-gap");

gapInput.addEventListener("input", (e) => {
  boxGap.style.gap = `${e.target.value}`;
});

const justifyContentBtns = document.querySelectorAll(
  ".grid__justify-content-btn",
);
const boxJustifyContent = document.querySelector(".grid__box-justify-content");

justifyContentBtns.forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    removeJustifyContentAct();
    if (index === 0) {
      boxJustifyContent.classList.add(
        "grid__input-box-justify-content-act-start",
      );
    } else if (index === 1) {
      boxJustifyContent.classList.add(
        "grid__input-box-justify-content-act-end",
      );
    } else if (index === 2) {
      boxJustifyContent.classList.add(
        "grid__input-box-justify-content-act-center",
      );
    } else if (index === 3) {
      boxJustifyContent.classList.add(
        "grid__input-box-justify-content-act-space-around",
      );
    } else if (index === 4) {
      boxJustifyContent.classList.add(
        "grid__input-box-act-justify-content-space-between",
      );
    } else if (index === 5) {
      boxJustifyContent.classList.add(
        "grid__input-box-act-justify-content-space-evenly",
      );
    }
  });
});

const removeJustifyContentAct = () => {
  boxJustifyContent.classList.remove(
    "grid__input-box-justify-content-act-start",
  );
  boxJustifyContent.classList.remove("grid__input-box-justify-content-act-end");
  boxJustifyContent.classList.remove(
    "grid__input-box-justify-content-act-center",
  );
  boxJustifyContent.classList.remove(
    "grid__input-box-justify-content-act-space-around",
  );
  boxJustifyContent.classList.remove(
    "grid__input-box-act-justify-content-space-between",
  );
  boxJustifyContent.classList.remove(
    "grid__input-box-act-justify-content-space-evenly",
  );
};

const justifyItemsBtn = document.querySelectorAll(".grid__justify-items-btn");
const boxJustifyItems = document.querySelector(".grid__box-justify-items");
const justifyItems = document.querySelectorAll(".justify-items");
const codeJustifyItems = document.querySelector(".grid__code-justify-items");

justifyItemsBtn.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    removeJustifyItems();
    if (index === 0) {
      removeWidthForJustifyItems();
    } else if (index === 1) {
      changeWidthForJustifyItems();
      boxJustifyItems.classList.add("grid__box-justify-items-act-start");
    } else if (index === 2) {
      changeWidthForJustifyItems();
      boxJustifyItems.classList.add("grid__box-justify-items-act-end");
    } else if (index === 3) {
      changeWidthForJustifyItems();
      boxJustifyItems.classList.add("grid__box-justify-items-act-center");
    }
  });
});

const changeWidthForJustifyItems = () => {
  justifyItems.forEach((elem) => {
    elem.classList.add("justify-items-act");
    codeJustifyItems.textContent = `
    .parent{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    .childs{
        width: 50%;
        height: 50%;
    }
    `;
  });
};
const removeWidthForJustifyItems = () => {
  justifyItems.forEach((elem) => {
    elem.classList.remove("justify-items-act");
    codeJustifyItems.textContent = `
    .parent{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    .childs{
        width: auto;
        height: auto;
    }
    `;
  });
};

const removeJustifyItems = () => {
  boxJustifyItems.classList.remove("grid__box-justify-items-act-start");
  boxJustifyItems.classList.remove("grid__box-justify-items-act-end");
  boxJustifyItems.classList.remove("grid__box-justify-items-act-center");
};

const boxAlignItems = document.querySelector(".grid__box-align-items");
const alignItems = document.querySelectorAll(".align-items");
const alignItemsBtn = document.querySelectorAll(".align-items-btn");

alignItemsBtn.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    removeAlignItems();
    if (index === 0) {
    } else if (index === 1) {
      boxAlignItems.classList.add("grid__box-align-items-act-start");
    } else if (index === 2) {
      boxAlignItems.classList.add("grid__box-align-items-act-end");
    } else if (index === 3) {
      boxAlignItems.classList.add("grid__box-align-items-act-center");
    } else if (index === 4) {
      boxAlignItems.classList.add("grid__box-align-items-act-baseline");
    }
  });
});

const removeAlignItems = () => {
  boxAlignItems.classList.remove("grid__box-align-items-act-start");
  boxAlignItems.classList.remove("grid__box-align-items-act-end");
  boxAlignItems.classList.remove("grid__box-align-items-act-center");
  boxAlignItems.classList.remove("grid__box-align-items-act-baseline");
};

const boxSelf = document.querySelector(".grid__box-self");
const selfOne = document.querySelector(".self-one");
const selfInputs = document.querySelectorAll(".grid__self-input");

selfInputs.forEach((elem, index) => {
  elem.addEventListener("input", (e) => {
    if (index === 0) {
      boxSelf.style.placeItems = `${e.target.value}`;
    } else if (index === 1) {
      selfOne.style.placeSelf = `${e.target.value}`;
    }
  });
});
