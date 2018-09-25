var skillset = document.getElementsByClassName('skillset');
//alert(skillset)
function main() {
  $('.skill-html').hide()
  $('.skill-html').fadeIn(2000)
  $('.skill-js').hide()
  $('.skill-js').fadeIn(2000)
  $('.skill-jquery').hide()  
  $('.skill-jquery').fadeIn(2000)
  $('.projects').hide()
  $('.projects-button').on('click',function(){ $('.projects').toggle() })
}
$(document).ready(main);