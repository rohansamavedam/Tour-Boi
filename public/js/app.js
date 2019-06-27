const validateEntry = () => {
  var isValid = true;
  if($('#option-selector').val()===''){
    isValid = false;
  }
  return isValid;
}

function myFunction(val) {
  var d = new Date(val)
  var n = d.getDate();
  var k = d.getFullYear();
  var p = d.getMonth();
  return  p + '/' + n + '/' + k;
}

function travelVer(val){
  if(val<=2){
    $('#travelinfo').text('Travel is usually safe')
  }else if(val>2 && val<=3.5){
    $('#travelinfo').text('Travel with higher caution')
  }else if(val>3.5 && val<=4.5){
    $('#travelinfo').text('Reconsider travelling')
  }else{
    $('#travelinfo').text('Do not travel')
  }
}

$(document).ready(function() {
  var myDateOne = myFunction( $('#onetime').text() *1000);
  var myDateTwo = myFunction( $('#twotime').text() *1000);
  var myDateThree = myFunction( $('#threetime').text() *1000);
  var myDateFour = myFunction( $('#fourtime').text() *1000);
  var myDateFive = myFunction( $('#fivetime').text() *1000);

  $('#onetime').text(myDateOne)
  $('#twotime').text(myDateTwo)
  $('#threetime').text(myDateThree)
  $('#fourtime').text(myDateFour)
  $('#fivetime').text(myDateFive)
  var val = $('#travelinfo').text()
  travelVer(val);
  console.log(val);





    $('#imgholder').hide();
    $('#down').hide();
    $('#traveled').hide();
    $('#maped').hide();
    $('#weathered').hide();
    var pathname = window.location.pathname
    if(pathname.substring(0,5)==='/info'){
      $('#imgholder').show();
      $('#traveled').show();
      $('#maped').show();
      $('#weathered').show();
    }
    // if(pathname.substring())
    $("#search-button").click(function(e) {
      e.preventDefault()
      if(validateEntry()){
          $('#down').show();
          const location = $('#option-selector').val()
          console.log(location)
          var index = location.indexOf(' ');
          console.log(index)
          const location1 = location.substring(0, index)
          const ccode = location.substring(index+1)
          console.log(ccode)
          const url = '/info?address='+location1+'&code='+ccode;
          window.location.assign(url)
      }else{
        alert('Please select a destiantion')
      }
    });
  });

