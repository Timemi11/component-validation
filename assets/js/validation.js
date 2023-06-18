// console.log(fn.nextElementSibling.nextElementSibling.style.visibility);
function validtext(ele) {
  ele.style.border = "1px solid hsl(246, 25%, 77%)";
  ele.nextElementSibling.style.display = "none";
  ele.nextElementSibling.nextElementSibling.style.visibility = "hidden";
}
function invalidtext(ele) {
  ele.style.border = "1px solid red";
  ele.nextElementSibling.style.display = "block";
  ele.nextElementSibling.nextElementSibling.style.visibility = "visible";
}
function checkIs(ele, text) {
  ele.value == text ? invalidtext(ele) : validtext(ele);
}
function regmatch(ele, text) {
  // !ele.value.trim().match(text) ? invalidtext(ele) : validtext(ele);
  if (ele.value.trim() == "") {
    ele.nextElementSibling.nextElementSibling.innerText =
      "Email cannot be empty";
    invalidtext(ele);
  } else if (!ele.value.trim().match(text)) {
    ele.nextElementSibling.nextElementSibling.innerText =
      "Looks like this is not email";
    invalidtext(ele);
  } else {
    validtext(ele);
  }
}

let fn = document.getElementById("fname");
let ln = document.getElementById("lname");
let em = document.getElementById("email");
let pw = document.getElementById("pw");
let reg = /([a-z]\w+[@]\w+\.(com|ac.th))/gi;
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  checkIs(fn, "");
  checkIs(ln, "");
  regmatch(em, reg);
  checkIs(pw, "");
});
