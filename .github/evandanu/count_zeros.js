function CountZeros(A) {
  var arraylength = A.length;

  var total = 0;

  var i = 0;

  for (i = 0; i < arraylength; i++) {
    console.log(A[i]);

    if (A[i] == 0) {
      total = total + 1;
    }
  }

  console.log("The number of zeros is: " + total);
  return total;
}
