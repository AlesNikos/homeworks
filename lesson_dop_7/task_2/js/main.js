let width = 5,
  height = 6,
  total = 0;

for (let i = 1; i <= 10; i++) {
  getArea();
  width = width + 10;
  // console.log(width);
}

function getArea() {
  total = width * height;
  console.log(total);
}
