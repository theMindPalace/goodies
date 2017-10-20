function wrapChars(selector) {
  var e = document.getElementsByClassName(selector)[0];
  if (e.children.length>0) return;
  var text = e.innerText + '';
  e.innerText = '';
  text.split('').forEach(character => {
     var span = document.createElement('span')
     span.innerHTML = character;
     e.appendChild(span);
  })
}
function addClickReplay(){
  var title = document.getElementsByClassName('title')[0];
  document.addEventListener("click", function(e) {
    e.preventDefault();
    title.classList.remove('title');
    void title.offsetWidth;
    title.classList.add('title');
  }, false);  
}

window.addEventListener('load', function() {
  wrapChars('title');
  addClickReplay('title');
}, true);


