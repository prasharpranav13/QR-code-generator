//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
let imgBox = document.getElementsByClassName("imgBox")[0];
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qrTxt");
let btn = document.getElementById("btn");
btn.onclick = () => {
  qrCodeGenerator();
};
const qrCodeGenerator = () => {
  if (qrTxt.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrTxt.value;
    imgBox.classList.add("showImg");
  } else {
    qrTxt.classList.add("error");
    //this class should be removed after some time shouldn't be continuous
    setTimeout(() => {
      qrTxt.classList.remove("error");
    }, 1000);
  }
};
