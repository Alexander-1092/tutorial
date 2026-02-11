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
    console.log(e.currentTarget.value);
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
