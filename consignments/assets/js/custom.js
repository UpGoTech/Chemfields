function toggleDropdown(toggler) {
  if(toggler) { // Show if true
    $('#mydropdown').removeClass('fadeOut').addClass('fadeIn').show();
  } else { // Hide
    $('#mydropdown').removeClass('fadeIn').addClass('fadeOut').hide();
  }
}
