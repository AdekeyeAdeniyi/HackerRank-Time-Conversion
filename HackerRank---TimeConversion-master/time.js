function timeConversion(s) {
  var time = s.toLowerCase().split(':');
   var hours = parseInt(time[0]);
   var _ampm = time[2];
   if (_ampm.indexOf('am') != -1 && hours == 12) {
      time[0] = '00';
   }
   if (_ampm.indexOf('pm')  != -1 && hours < 12) {
     time[0] = hours + 12;
   }
   console.log (time.join(':').replace(/(am|pm)/, ''));

}

timeConversion("07:05:45PM");

function gradingStudents(grades){

    var length = grades.length;

    for(var i = 0;  i < length; i++){

        if(grades[i] >= 38){

            if(grades[0] + (5 - grades[0] % 5) - grades[0] < 3){

                grades[i] = grades[0] + (5 - grades[0] % 5);
            }

        }
    }

        grades.forEach(function(grade){

            console.log(grade);
        })

  }

  gradingStudents([73,67,38,33]);