//Square pattern
let size = 5;

for (let i = 0; i < size; i++) {
  let pattern = '';
  for (let j = 0; j < size; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

//triangles pattern
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

//diamonds pattern
let rows = 5;

// Top half
for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= rows - i; j++) {
    pattern += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += '*';
  }
  console.log(pattern);
}

// Bottom half
for (let i = rows - 1; i >= 1; i--) {
  let pattern = '';
  for (let j = 1; j <= rows - i; j++) {
    pattern += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += '*';
  }
  console.log(pattern);
}
