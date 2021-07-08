/*function helloTeam(){
  console.log('Hello Team')
}
*/
//document.querySelector('#myClick').onclick = helloTeam;
//document.querySelector('#myClick').addEventListener('click', helloTeam);

/*
const itemOne = document.querySelector('.item-one');
const itemTwo = document.querySelector('.item-two');
const itemThree = document.querySelector('.item-three');

itemOne.addEventListener('click', function(e) {
  console.log (111);
  e.stopPropagation();
});

itemTwo.addEventListener('click', function(e) {
  console.log (222);
  e.stopPropagation();
});

itemThree.addEventListener('click', function(e) {
  console.log (333);
  e.stopPropagation();
});
*/

const list = document.querySelector('ul');

list.addEventListener('click', e => {
  if(e.traget.tagName === "LI"){
    e.traget.innerHTML = e.traget.innerHTML ** 2
  }
})