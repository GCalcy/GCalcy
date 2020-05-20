  const getInternals = () => {
    let Clt1 = document.getElementById('Ct1').value;
    let Clt2 = document.getElementById('Ct2').value;
    let As = document.getElementById('Asgt').value;
    let At = document.getElementById('Att').value;
    let Nf = document.getElementById('Nonf').value;
    let endSem = document.getElementById('End').value;
    let marks = "";

    let Ctest1 = Clt1 / 4;
    let Ctest2 = Clt2 / 4;
    let eSem = endSem * 0.6;

    let intMarks = parseFloat(Ctest1) + parseFloat(Ctest2) + parseFloat(As) + parseFloat(At) + parseFloat(Nf);
    let totalMarks = parseFloat(Ctest1) + parseFloat(Ctest2) + parseFloat(As) + parseFloat(At) + parseFloat(Nf) + parseFloat(eSem);

    if (totalMarks <= 100 && totalMarks >= 91) {
      grades = 'O';
      gradep = '10';
    } else if (totalMarks <= 90 && totalMarks >= 81) {
      grades = 'E';
      gradep = '9';
    } else if (totalMarks <= 80 && totalMarks >= 71) {
      grades = 'A+';
      gradep = '8';
    } else if (totalMarks <= 70 && totalMarks >= 61) {
      grades = 'A';
      gradep = '7';
    } else if (totalMarks <= 60 && totalMarks >= 51) {
      grades = 'B';
      gradep = '6';
    } else if (totalMarks <= 50 && totalMarks >= 41) {
      grades = 'C';
      gradep = '5';
    } else {
      grades = 'F';
      gradep = '0';
    }

    document.getElementById('int').innerHTML = intMarks
    document.getElementById('ends').innerHTML = eSem
    document.getElementById('total').innerHTML = totalMarks
    document.getElementById('grd').innerHTML = grades
    document.getElementById('grdp').innerHTML = gradep
  }

  function refreshPage() {
    window.location.reload()
    alert("The marks you have entered will be lost on reload. Continue anyway?");
  };
