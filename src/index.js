import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoSearch from './dino-search.js';
import DinoInfo from './dino-info.js';

$(document).ready(function() {
  $('#dinoSubmit').click(function() {
    $('#some-awesome-container').html("");

    Promise.all([DinoSearch.getDino(), DinoInfo.getInfo()])
      .then(([result1, result2]) => {
        console.log(result1, result2);
        let dinoSelector = JSON.parse(result1);
        let dinoInformation = JSON.parse(result2);

        document.querySelector('#some-awesome-container').innerHTML = dinoSelector;

    for (let i = 0; i < dinoInformation.length; i++) {
          if (dinoInformation[i].Name === dinoSelector.toString()) {
            document.querySelector('#some-awesome-container-again').innerHTML = dinoInformation[i].Description;
            return;
          } 
          document.querySelector('#some-awesome-container-again').innerHTML = "No description avaliable.";
        }
      });
  });
});