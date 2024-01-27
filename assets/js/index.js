let work = document.getElementById('work')
let education = document.getElementById('education')
let list = document.querySelector('.page-about__profile-list');
console.log(work, education)

work.onclick = Click() {

}
work.onclick = function () {
    console.log('Нажали на Work');
    list.innerHTML()
    list.insertAdjacentHTML("afterbegin", `<article class="profile-item">
    <h5>computer engineer</h5>
    <div class="profile-item__bottom">
      <h5>Peru - University</h5>
      <div class="profile-item__date"></div>
        <img src="./assets/img/calenadar.svg" alt="">
        <h6>2009 - 2014</h6>
    </div>
  </article>`);
};
   
education.onclick = Click
    console.log('Нажали на education')