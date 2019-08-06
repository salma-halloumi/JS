const parent= document.getElementById('parent');
var p_count=0;

parent.addEventListener('click',function(){
  p_count++;
  document.getElementById('parent-count').innerHTML=p_count;
});
const child= document.getElementById('child');
var c_count=0;
child.addEventListener('click',function(){
  c_count++;
  document.getElementById('child-count').innerHTML=c_count;
});

const name= document.getElementById('name');
const res_name= document.getElementById('res-name');

name.addEventListener("input", function(event){
  res_name.innerHTML= event.target.value;
});

const res= document.getElementById('result');
res.addEventListener('mousemove',function(event){
  document.getElementById('mouse-x').innerHTML= event.offsetX;
  document.getElementById('mouse-y').innerHTML= event.offsetY;
});
