//load map in the appropriate section

$('.mapDiv').load('img/map.svg');

// defining global variable for jsonURL
var jsonURL = 'js/mapOne.json';

// defining global variable for data fetched from JSON file
var data;


function fetchJsonData(jsonURL){

  // fetching json data from file
  var xmlhttp = new XMLHttpRequest();

  // var url = "js/mapTwo.json";
  // var data;

  xmlhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200) {

      data = JSON.parse(this.responseText);
      console.log(data);

      }
  };

  var url = jsonURL;

  console.log("url is " + url);

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

fetchJsonData(jsonURL);

// state area click events
$('.mapDiv').on('click', "svg path", function() {

  // change the above 'click' to 'touchstart/touchend' when uploading on Veeva Vault

    $('table').show();

    // console.log('map area clicked');
    var stateName = $(this).attr('data-state');
    console.log(stateName+' state clicked');


    if (stateName == undefined ){
      console.log('no class defined');

    }

    for(var i = 0; i < data.length; i++){
      
      if(data[i].State == stateName){
        //state matches at 30

        console.log(data[i].State + ' state data found');

        $('td.stateName').html(stateName);

        console.log('Number of Persons Values');

        console.log(data[i]['number']['18to64years']);
        console.log(data[i]['number']['White']);
        console.log(data[i]['number']['Black']);
        console.log(data[i]['number']['Hispanic']);
        console.log(data[i]['number']['Others']);

        var numberOf18to64Years = data[i]['number']['18to64years']; //1,402
        var numberOfWhite = data[i]['number']['White'];
        var numberOfBlack = data[i]['number']['Black'];
        var numberOfHispanic = data[i]['number']['Hispanic'];
        var numberOfOthers = data[i]['number']['Others'];

        $('td.numberOf18to64Years').html(numberOf18to64Years); //passing 1,402
        $('td.numberOfWhite').html(numberOfWhite);
        $('td.numberOfBlack').html(numberOfBlack);
        $('td.numberOfHispanic').html(numberOfHispanic);
        $('td.numberOfOthers').html(numberOfOthers);


        console.log('Percentage vaccinated Values');

        console.log(data[i]['percent']['18to64years']); //value 32.3
        console.log(data[i]['percent']['White']);
        console.log(data[i]['percent']['Black']);
        console.log(data[i]['percent']['Hispanic']);
        console.log(data[i]['percent']['Others']);

        var percentOf18to64Years = data[i]['percent']['18to64years']; //value 32.3
        var percentOfWhite = data[i]['percent']['White'];
        var percentOfBlack = data[i]['percent']['Black'];
        var percentOfHispanic = data[i]['percent']['Hispanic'];
        var percentOfOthers = data[i]['percent']['Others'];

        $('td.percentOf18to64Years').html(percentOf18to64Years); //td value change 32.3
        $('td.percentOfWhite').html(percentOfWhite);
        $('td.percentOfBlack').html(percentOfBlack);
        $('td.percentOfHispanic').html(percentOfHispanic);
        $('td.percentOfOthers').html(percentOfOthers);

        $(this).siblings('path').removeClass('active'); // remove existing active class
        $(this).addClass('active'); //add active class

        if(stateName == 'Alaska' || stateName == 'Hawaii' || stateName == 'Michigan'){
          console.log('alaska or hawai');
          $(this).siblings('path[data-state='+ stateName +']').addClass('active');
        }

  }
}


  });

  // remove state data table on click of table close button

  $(document).on('click', ".tableClose", function() {
    $('table').hide();
    $('path.active').removeClass('active');
  });


//loading map

// svg map load
$('.mapImage').on('click', function(){
  console.log('mapImage clicked');

  if($(this).attr('id') == 'mapOneImage'){
    console.log('mapOneImage clicked');

    jsonURL = 'js/mapOne.json';

    fetchJsonData(jsonURL);
  }

  if($(this).attr('id') == 'mapTwoImage'){
    console.log('mapTwoImage clicked');

    jsonURL = 'js/mapTwo.json';

    fetchJsonData(jsonURL);
  }
  if($('#avModal_popUpMapImage').css('display') == 'block' || $('#avModal_popUpMapImagetwo').css('display') == 'block'){
    console.log('popup is showing');

    if($('.mapDiv').load('map.svg')){
      console.log('map loaded');
      mapEvents();
    }
  }
});


// tracking code for dynamic tracking
