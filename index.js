var userData = [];
function getNumberFromUser() {
  var number = document.getElementById("txt-number").value * 1;
  userData.push(number);
  document.getElementById("kq1").innerHTML = userData;
}
document.getElementById("btn1").onclick = getNumberFromUser;

console.log(userData);

function arrSum(userData) {
  let tongSoDuong = 0;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i] > 0) {
      tongSoDuong += userData[i];
    }
  }
  return tongSoDuong;
}

document.getElementById("btn2").onclick = function () {
  let tong = arrSum(userData);
  document.getElementById("kq2").innerHTML = tong;
};

function demSoDuong(userData) {
  let tong1 = 0;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i] > 0) {
      tong1 += 1;
    }
  }
  return tong1;
}

document.getElementById("btn3").onclick = function () {
  let tong2 = demSoDuong(userData);
  document.getElementById("kq3").innerHTML = tong2;
};

document.getElementById("btn4").onclick = function () {
  let min = userData[0];
  for (var i = 1; i < userData.length; i++) {
    if (userData[i] < min) {
      min = userData[i];
    }
  }
  document.getElementById("kq4").innerHTML = min;
};

document.getElementById("btn12").onclick = function () {
  let min1 = userData[0];
  for (var i = 1; i < userData.length; i++) {
    if (userData[i] < min1 && userData[i] > 0) {
      min1 = userData[i];
    }
  }
  document.getElementById("kq12").innerHTML = min1;
};

document.getElementById("btn5").onclick = function () {
  let soChanCuoiCung = -1;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i] % 2 == 0) {
      soChanCuoiCung = userData[i];
    }
  }
  document.getElementById("kq5").innerHTML = soChanCuoiCung;
};

document.getElementById("btn6").onclick = function () {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  let tam = userData[viTri1];
  userData[viTri1] = userData[viTri2];
  userData[viTri2] = tam;
  // userData[viTri2] = userData[viTri1];
  document.getElementById("kq6").innerHTML = userData;
};

document.getElementById("btn7").onclick = function () {
  var sapXep = userData.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("kq7").innerHTML = sapXep;
};

function soNguyenTo(so) {
  if (so <= 1) return false;
  for (let i = 2; i * i <= so; i++) {
    if (so % i == 0) return false;
  }
  return true;
}

document.getElementById("btn8").onclick = function () {
  soNT = -1;
  for (let i = 0; i < userData.length; i++) {
    if (soNguyenTo(userData[i])) {
      soNT = userData[i];
      break;
    }
  }
  document.getElementById("kq8").innerHTML = soNT;
};

function getNumberFromUser1() {
  var number1 = document.getElementById("newNumber").value * 1;
  userData.push(number1);
  document.getElementById("kq9").innerHTML = userData;
}
document.getElementById("btn9").onclick = getNumberFromUser1;

document.getElementById("btn10").onclick = function () {
  tongSoNguyen = 0;
  for (let i = 0; i < userData.length; i++) {
    if (!Number.isInteger(userData[i])) {
      tongSoNguyen;
    } else {
      tongSoNguyen += 1;
    }
  }
  document.getElementById("kq10").innerHTML = tongSoNguyen;
};

document.getElementById("btn11").onclick = function () {
  var tongSoDuong = 0;
  var tongSoAm = 0;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i] < 0) {
      tongSoAm += 1;
    } else if (userData[i] > 0) {
      tongSoDuong += 1;
    }
  }
  if (tongSoAm < tongSoDuong) {
    document.getElementById(
      "kq11"
    ).innerHTML = `Tổng số âm bé hơn tổng số dương`;
  } else if (tongSoAm > tongSoDuong) {
    document.getElementById(
      "kq11"
    ).innerHTML = `Tổng số âm lớn hơn tổng số dương`;
  } else {
    document.getElementById("kq11").innerHTML = `Tổng số âm bằng tổng số dương`;
  }
};
