/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
function setDate() {
  let dateViews = document.getElementsByClassName("date-view");
  
  let currentDate = Date();
  
  for (var index = 0; index < dateViews.length; index++) {
    dateViews[index].innerHTML = currentDate;
  }
}