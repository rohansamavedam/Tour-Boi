const validateEntry = () => {
  var isValid = true;
  if($('#option-selector').val()===''){
    isValid = false;
  }
  return isValid;
}

$(document).ready(function() {
    $('#imgholder').hide();
    $('#down').hide();
    var pathname = window.location.pathname
    if(pathname.substring(0,5)==='/info'){
      $('#imgholder').show();
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
          const url = 'http://localhost:3000/info?address='+location1+'&code='+ccode;
          window.location.assign(url)
      }else{
        alert('Please select a destiantion')
      }
    });
  });

