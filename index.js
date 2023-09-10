function performOperations() {
  // Lấy dữ liệu đầu vào từ người dùng và chuyển thành một mảng các số nguyên
  var inputArray = document.getElementById("inputArray").value;
  var integerArray = inputArray.split(",").map(Number);

  // Tính tổng của các số dương trong mảng
  var positiveSum = integerArray.reduce(function (acc, val) {
    return val > 0 ? acc + val : acc;
  }, 0);

  // Đếm số lượng số dương trong mảng
  var positiveCount = integerArray.filter(function (val) {
    return val > 0;
  }).length;

  // Tìm số nguyên nhỏ nhất trong mảng
  var minInteger = Math.min.apply(null, integerArray);

  // Tìm số dương nhỏ nhất trong mảng
  var minPositiveInteger = Math.min.apply(
    null,
    integerArray.filter(function (val) {
      return val > 0;
    })
  );

  // Tìm số chẵn cuối cùng trong mảng (nếu có)
  var lastEven = integerArray
    .slice()
    .reverse()
    .find(function (val) {
      return val % 2 === 0;
    });

  // Nhập vị trí hai phần tử muốn đổi chỗ và đổi chỗ giá trị của chúng
  var positions = prompt(
    "Nhập hai vị trí muốn đổi chỗ giá trị (cách nhau bằng dấu phẩy):"
  )
    .split(",")
    .map(Number);
  if (
    positions.length === 2 &&
    positions.every(function (pos) {
      return pos >= 0 && pos < integerArray.length;
    })
  ) {
    var pos1 = positions[0];
    var pos2 = positions[1];
    var temp = integerArray[pos1];
    integerArray[pos1] = integerArray[pos2];
    integerArray[pos2] = temp;
  }

  // Sắp xếp mảng theo thứ tự tăng dần
  integerArray.sort(function (a, b) {
    return a - b;
  });

  // Kiểm tra xem một số có phải là số nguyên tố
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // Tìm số nguyên tố đầu tiên trong mảng (nếu có)
  var firstPrime = integerArray.find(function (val) {
    return isPrime(val);
  });

  // Nhập mảng các số thực từ người dùng và đếm số lượng số nguyên
  var realNumbers = prompt("Nhập mảng các số thực, cách nhau bằng dấu phẩy:")
    .split(",")
    .map(Number);
  var integerCount = realNumbers.filter(function (val) {
    return Number.isInteger(val);
  }).length;

  // Đếm số lượng số dương và số âm trong mảng
  var positiveCountInArray = integerArray.filter(function (val) {
    return val > 0;
  }).length;
  var negativeCountInArray = integerArray.filter(function (val) {
    return val < 0;
  }).length;

  // Hiển thị kết quả trên giao diện
  var result = `
        Tổng các số dương: ${positiveSum} <br>
        Đếm số dương: ${positiveCount} <br>
        Số nhỏ nhất: ${minInteger} <br>
        Số dương nhỏ nhất: ${minPositiveInteger} <br>
        Số chẵn cuối cùng: ${lastEven !== undefined ? lastEven : -1} <br>
        Mảng sau khi đổi chỗ: ${integerArray.join(", ")} <br>
        Số nguyên tố đầu tiên: ${
          firstPrime !== undefined ? firstPrime : -1
        } <br>
        Số nguyên trong mảng số thực: ${integerCount} <br>
        Số lượng số dương trong mảng: ${positiveCountInArray} <br>
        Số lượng số âm trong mảng: ${negativeCountInArray} <br>
    `;

  document.getElementById("result").innerHTML = result;
}
