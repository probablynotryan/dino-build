import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoSearch from './dino-search.js';
import DinoInfo from './dino-info.js';
// import *** from './js/*** */.js';

$(document).ready(function() {
  $('#dinoSubmit').click(function() {
    $('#some-awesome-container').html("");
    let promise = DinoSearch.getDino();
    promise.then(function(response) {
      let dinoSelector = JSON.parse(response);
      document.querySelector('#some-awesome-container').innerHTML = dinoSelector;
      let promiseAgain = DinoInfo.getInfo();
      promiseAgain.then(function(responseAgain) {
        let dinoInformation = JSON.parse(responseAgain);
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
});




// var xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://dinoipsum.com/api/?format=json&words=1&paragraphs=1');
//   xhr.onload = function() {
//     if (this.status === 200) {
//       let dinoSelector = JSON.parse(this.response);
//       document.querySelector('#some-awesome-container').innerHTML = dinoSelector;
//     } else {
//       console.log('Where did all the dinosaurs go?');
//     }
//   };
//   xhr.send();

//https://dinoipsum.com/api?key1=value1&key2=value2...
// format: {json, html, text} output format (defaults to html)
// words: the number of words per paragraph (defaults to 30)
// paragraphs: the number of paragraphs (defaults to 10)