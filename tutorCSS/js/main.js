import { sentGridSection } from "./grid.js";
import "../SCSS/tutorcss.scss";

sentGridSection();

const btnNoneFlex = document.querySelector(".tut-css__btn-none-flex");
const btnFlex = document.querySelector(".tut-css__btn-flex");
const btnInlineFlex = document.querySelector(".tut-css__btn-inline-flex");
const tutCssFlexBox = document.querySelector(".tut-css__flex-box");

btnNoneFlex.addEventListener("click", () => {
  removeFlexClass(tutCssFlexBox);
  tutCssFlexBox.classList.add("tut-css__flex-box-none-flex-active");
});

btnFlex.addEventListener("click", () => {
  removeFlexClass(tutCssFlexBox);
  tutCssFlexBox.classList.add("tut-css__flex-box-flex-active");
});
btnInlineFlex.addEventListener("click", () => {
  removeFlexClass(tutCssFlexBox);
  tutCssFlexBox.classList.add("tut-css__flex-box_inline-flex-active");
});

const flexDirection = document.querySelector(".flex-direction");
const cssFlexDirection = document.querySelectorAll(".tut-css__flex-direction");

cssFlexDirection.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let valueFlex = e.currentTarget.value;
    removeFlexClass(flexDirection);
    swohFlexdirection(valueFlex);
  });
});

const swohFlexdirection = (valueFlex) => {
  if (valueFlex === "row") {
    flexDirection.classList.add("flex-direction-row-active");
  } else if (valueFlex === "column") {
    flexDirection.classList.add("flex-direction-colum-active");
  } else if (valueFlex === "column-reverse") {
    flexDirection.classList.add("flex-direction-colum-rev-active");
  } else if (valueFlex === "row-reverse") {
    flexDirection.classList.add("flex-direction-row-rev-active");
  }
};

const removeFlexClass = (nameClass) => {
  nameClass.classList.forEach((className) => {
    if (className.includes("active")) {
      nameClass.classList.remove(className);
    }
  });
};

const flexWrap = document.querySelector(".flex-wrap");
const cssFlexWrap = document.querySelectorAll(".tut-css__flex-wrap");

cssFlexWrap.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log(e.currentTarget.value);
    let valueFlex = e.currentTarget.value;
    removeFlexClass(flexWrap);
    showFlexwrap(valueFlex);
  });
});

const showFlexwrap = (valueFlex) => {
  if (valueFlex === "nowrap") {
    flexWrap.classList.add("flex-wrap-nowrap-active");
  } else if (valueFlex === "wrap") {
    flexWrap.classList.add("flex-wrap-wrap-active");
  } else if (valueFlex === "wrap-reverse") {
    flexWrap.classList.add("flex-wrap-wrap-reverse-active");
  }
};

const flexJustify = document.querySelector(".flex-justify");
const cssFlexJustify = document.querySelectorAll(".tut-css__flex-justify");

cssFlexJustify.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let valueFlex = e.currentTarget.value;
    removeFlexClass(flexJustify);
    showFlexJustify(valueFlex);
  });
});

const showFlexJustify = (valueFlex) => {
  if (valueFlex === "start") {
    flexJustify.classList.add("flex-justify-start-active");
  } else if (valueFlex === "end") {
    flexJustify.classList.add("flex-justify-end-active");
  } else if (valueFlex === "flex-start") {
    flexJustify.classList.add("flex-justify-flex-start-active");
  } else if (valueFlex === "flex-end") {
    flexJustify.classList.add("flex-justify-flex-end-active");
  } else if (valueFlex === "left") {
    flexJustify.classList.add("flex-justify-left-active");
  } else if (valueFlex === "right") {
    flexJustify.classList.add("flex-justify-right-active");
  } else if (valueFlex === "center") {
    flexJustify.classList.add("flex-justify-center-active");
  } else if (valueFlex === "space-between") {
    flexJustify.classList.add("flex-justify-space-between-active");
  } else if (valueFlex === "space-around") {
    flexJustify.classList.add("flex-justify-space-around-active");
  } else if (valueFlex === "space-evenly") {
    flexJustify.classList.add("flex-justify-space-evenly-active");
  }
};

const flexAlign = document.querySelector(".flex-align");
const cssFlexAlign = document.querySelectorAll(".tut-css__flex-align");
const blockStretch = document.querySelectorAll(".block-stretch");
const cssAlignCode = document.querySelector(".tut-css__align-code");

const htmlPreAlign = [
  `.parent{
    display: flex;
    align-items: stretch;
    .child{
        height: auto;
    }
}`,
  `.parent{
    display: flex;
    align-items: stretch;
}`,
];

cssFlexAlign.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let valueFlex = e.currentTarget.value;
    cssAlignCode.textContent = htmlPreAlign[1];
    removeFlexClass(flexAlign);
    removeHeightBlock();
    showFlexAlign(valueFlex);
  });
});

const showFlexAlign = (valueFlex) => {
  if (valueFlex === "stretch") {
    flexAlign.classList.add("flex-align-start-active");
    cssAlignCode.textContent = htmlPreAlign[0];
    blockStretch.forEach((elem) => {
      elem.classList.add("block-active-height");
    });
  } else if (valueFlex === "flex-start") {
    flexAlign.classList.add("flex-align-flex-start-active");
  } else if (valueFlex === "flex-end") {
    flexAlign.classList.add("flex-align-flex-end-active");
  } else if (valueFlex === "center") {
    flexAlign.classList.add("flex-align-center-active");
  } else if (valueFlex === "baseline") {
    flexAlign.classList.add("flex-align-baseline-active");
  }
};

const removeHeightBlock = () => {
  blockStretch.forEach((elem) => {
    elem.classList.remove("block-active-height");
  });
};

const cssFlexAlignSelf = document.querySelectorAll(".tut-css__flex-align-self");
const blockAlignSelf = document.querySelectorAll(".block-stretch-self")[0];
const cssAlignSelfCode = document.querySelector(
  ".tut-css__align-self-code-self",
);

const htmlPreAlignSelf = [
  `.parent{
    display: flex;
    align-items: center;
      .child 1 {
        heighte: auto;
        align-self:stretch;
    }
}`,
  `.parent{
    display: flex;
    align-items: center;
      .child 1 {
        height: 7rem;
        align-self:flex-start;
    }
}`,
  `.parent{
    display: flex;
    align-items: center;
      .child 1 {
        height: 7rem;
        align-self:flex-end;
    }
}`,
  `.parent{
    display: flex;
    align-items: center;
      .child 1 {
        height: 7rem;
        align-self:center;
    }
}`,
  `.parent{
    display: flex;
    align-items: center;
      .child 1 {
        height: 7rem;
        align-self:baseline;
    }
}`,
];

cssFlexAlignSelf.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let valueFlex = e.currentTarget.value;
    console.log(valueFlex);
    removeFlexClassSelf();
    showFlexAlignSelf(valueFlex);
  });
});

const showFlexAlignSelf = (valueFlex) => {
  if (valueFlex === "stretch") {
    blockAlignSelf.classList.add("block-active-height");
    blockAlignSelf.classList.add("flex-align-self-start-active");
    cssAlignSelfCode.textContent = htmlPreAlignSelf[0];
  } else if (valueFlex === "flex-start") {
    blockAlignSelf.classList.add("flex-align-self-flex-start-active");
    cssAlignSelfCode.textContent = htmlPreAlignSelf[1];
  } else if (valueFlex === "flex-end") {
    blockAlignSelf.classList.add("flex-align-self-flex-end-active");
    cssAlignSelfCode.textContent = htmlPreAlignSelf[2];
  } else if (valueFlex === "center") {
    blockAlignSelf.classList.add("flex-align-self-center-active");
    cssAlignSelfCode.textContent = htmlPreAlignSelf[3];
  } else if (valueFlex === "baseline") {
    blockAlignSelf.classList.add("flex-align-self-baseline-active");
    cssAlignSelfCode.textContent = htmlPreAlignSelf[4];
  }
};

const removeFlexClassSelf = () => {
  blockAlignSelf.classList.remove("block-active-height");
  blockAlignSelf.classList.forEach((className) => {
    if (className.includes("active")) {
      blockAlignSelf.classList.remove(className);
    }
    console.log(blockAlignSelf.classList);
  });
};

const flexAlContent = document.querySelector(".flex-al-content");
const cssFlexAlContent = document.querySelectorAll(".tut-css__flex-al-content");

cssFlexAlContent.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let valueFlex = e.currentTarget.value;
    removeFlexClass(flexAlContent);
    showFlexAlContent(valueFlex);
  });
});

const showFlexAlContent = (valueFlex) => {
  if (valueFlex === "stretch") {
    flexAlContent.classList.add("flex-al-content-start-active");
  } else if (valueFlex === "flex-start") {
    flexAlContent.classList.add("flex-al-content-flex-start-active");
  } else if (valueFlex === "flex-end") {
    flexAlContent.classList.add("flex-al-content-flex-end-active");
  } else if (valueFlex === "center") {
    flexAlContent.classList.add("flex-al-content-center-active");
  } else if (valueFlex === "space-around") {
    flexAlContent.classList.add("flex-al-content-space-between-active");
  } else if (valueFlex === "space-between") {
    flexAlContent.classList.add("flex-al-content-space-around-active");
  } else if (valueFlex === "space-evenly") {
    flexAlContent.classList.add("flex-al-content-space-evenly-active");
  }
};

const btnFlexOrder = document.querySelectorAll(".tut-css__flex-order");
const btnblockOrders = document.querySelectorAll(".block-order");

btnFlexOrder.forEach((element, index) => {
  element.addEventListener("input", (e) => {
    let valueBtn = e.currentTarget.value;
    btnblockOrders[index].style.setProperty("order", `${valueBtn}`);
  });
});

const blockGrow = document.querySelectorAll(".block-grow");
const btnGrowInputs = document.querySelectorAll(".tut-css__flex-grow");

btnGrowInputs.forEach((element, index) => {
  element.addEventListener("input", (e) => {
    let valueBtn = e.currentTarget.value;
    blockGrow[index].style.setProperty("flex-grow", `${valueBtn}`);
  });
});

const blockShrink = document.querySelectorAll(".block-shrink");
const btnShrinkInputs = document.querySelectorAll(".tut-css__flex-shrink");

btnShrinkInputs.forEach((element, index) => {
  element.addEventListener("input", (e) => {
    let valueBtn = e.currentTarget.value;
    blockShrink[index].style.setProperty("flex-shrink", `${valueBtn}`);
  });
});

const flexGapInput = document.querySelector(".tut-css__flex-gap");
const flexGapBlocks = document.querySelector(".flex-gap");

flexGapInput.addEventListener("input", (e) => {
  let valueBtn = e.currentTarget.value;
  flexGapBlocks.style.setProperty("gap", `${valueBtn}`);
});
