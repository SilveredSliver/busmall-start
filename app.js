'use strict'

// var cacheData = JSON.parse(localStorage.pictureClickData);
//   if (cacheData.length > 0) {
//       alert ('you already have cache data with ' + cacheData.length + 'clicks!');
//   }
var imgDirectory = 'img';

function getImage(name, filePath) {
  this.name = name;
  this.filePath = 'img/' + filePath;
  this.numDisplayed = 0;
  this.numClicked = 0;
}

//var testImage = new getImage('bag.jpg', imgDirectory);
//console.log(testImage);

var imgFileList = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg' ];
  var imgList = [];
  for (var i = 0; i < imgFileList.length; i++) {
    var myImage = new getImage(imgFileList[i], 'img');
    console.log(myImage);
    imgList.push(myImage);
  }


  var totalNumClicked = 0;

  var b1 = document.getElementById('b1');
  function addClickEvent1() {
    totalNumClicked++;
    imgList[curThree.theImages[0]].numClicked++;
    if (totalNumClicked < 26) displayImages()
    else renderChart();
  }
  b1.addEventListener('click', addClickEvent1);

var b2 = document.getElementById('b2');
  function addClickEvent2() {
    totalNumClicked++;
    imgList[curThree.theImages[1]].numClicked++;
    if (totalNumClicked < 26) displayImages()
    else renderChart();
  }
  b2.addEventListener('click', addClickEvent2);

  var b3 = document.getElementById('b3');
  function addClickEvent3() {
    totalNumClicked++;
    imgList[curThree.theImages[2]].numClicked++;
    if (totalNumClicked < 26) displayImages()
    else renderChart();
  }
  b3.addEventListener('click', addClickEvent3);


  var lastImages = [];
  console.log(lastImages);

  function testIsIn(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj)
    return true;
  }
  return false;
  }



  function selectThree (imgFileList, lastImages) {
    this.theImages = [];
    var x = 0;
    var n = imgFileList.length;
    while(this.theImages.length < 3) {
      x = Math.random();
      var i = Math.floor(n * x);
      var testImage = imgFileList[i];
      if (!testIsIn(lastImages, i) && !testIsIn(this.theImages, i)) {
        this.theImages.push(i);
      }
    }
  };

  //var foo = new selectThree(imgFileList, lastImages);
  //console.log(foo.theImages[0]);

  function displayImages()
  {
    curThree = new selectThree(imgFileList, lastImages);

    for (var k = 0; k < 3; k++) {
      console.log(curThree.theImages[k]);
      imgList[curThree.theImages[k]].numDisplayed++;
    };
    //I need to put these  images on the  website
    //I then need to wait for the user to click on an image
    lastImages = curThree.theImages;

    // var optionOneImage = imgFileList[myThree.theImages[0]];
    var imgPath1 = ('img/' + imgFileList[curThree.theImages[0]]);
    document.getElementById('b1').src = imgPath1;
    var imgPath2 = ('img/' + imgFileList[curThree.theImages[1]]);
    document.getElementById('b2').src = imgPath2;
    var imgPath3 = ('img/' + imgFileList[curThree.theImages[2]]);
    document.getElementById('b3').src = imgPath3;

    console.log('num clicked ' + totalNumClicked);

    localStorage.pictureClickData = JSON.stringify(imgList)
  }

var curThree = []
displayImages();



var chartIsRendered = false;
function renderChart() {
console.log('trying to renderChart');
if (chartIsRendered) {
  return;
}
// photos = photos.concat(photosOnScreen);
// photos = photos.concat(photosOnPreviousScreen);
// photos = photos.concat(photosOnSecondToLastScreen);
  //empty out the app div
  app.textContent = '';

  var canvas = document.createElement('canvas');
  canvas.width = app.clientWidth;
  canvas.height = app.clientWidth;
  app.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 50, 50);

  //create a bar data chart object
  var data = {
    labels: [],
    datasets: [
      {
        label: 'click count',
        data: [],
        backgroundColor: 'green'
      },
      {
        label: 'display count',
        data: [],
        backgroundColor: 'blue'
      },
    ],
  };

  var currentPhoto;
  for (var i = 0; i < imgList.length; i++) {
    currentPhoto = imgList[i];
    data.labels.push(currentPhoto.name)
    data.datasets[0].data.push(currentPhoto.numClicked);
    data.datasets[1].data.push(currentPhoto.numDisplayed);
  }

  console.log('Creating new Chart')
  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}


// function createTable() {
//   var table = document.createElement('table');
//   var tableBody = document.createElement("tbody");
//   for (var i = 0; i < imgFileList.length; i++) {
//
//     var row = document.createElement('tr');
//     var cell = document.createElement('td');
//     cell.appendChild(document.createTextNode(imgFileList[i]));
//     row.appendChild(cell);
//     cell.appendChild(document.createTextNode(imgList[i].numDisplayed));
//   }
//   table.appendChild(tableBody);
//   document.body.appendChild(table);
//   }
//
//   function generateRow(obj) {
//     var row = document.createElement('tr');
//     var imgName = document.createElement('td');
//     imgName.textContent = obj.name;
//     row.appendChild(imgName);
//
//     var numDisplayed = document.createElement('td');
//     numDisplayed.textContent = obj.numDisplayed;
//     row.appendChild(numDisplayed);
//
//     var numClicks = document.createElement('td');
//     numClicks.textContent = obj.numClicks;
//     row.appendChild(numClicks);
//
//     return row;
//   };
//
//   var myRow = generateRow(imgList[0]);
//   console.log(myRow);
//
//   function generateAllRows(myTable, imgList) {
//     for (i = 0; i < imgList.length; i++) {
//       var nextRow = new generateRow(imgList[i]);
//       myTable.appendChild(nextRow);
//       console.log(nextRow);
//     }
//     return myTable;
//   }
//
//
//   function generateUserSessionTable() {
//     var table = document.createElement('table');//this is a  div tag created in javascript
//     table.setAttribute('id', 'userSessionTable');
//
//     //table.setAttribute('id', 'store-report-table');
//     document.body.appendChild(table);
//
//     var headingRow = document.createElement('tr');
//     table.appendChild(headingRow);
//
//     //add 'th' to table with text of 'Store Name'
//     var imageHeadingName = document.createElement('th');
//     imageHeadingName.textContent = 'Image Name';
//     table.appendChild(imageHeadingName);
//     var numberOfDisplays = document.createElement('th');
//     numberOfDisplays.textContent = 'Number of Displays';
//     table.appendChild(numberOfDisplays);
//     var clicks = document.createElement('th');
//     clicks.textContent = 'Number of Clicks';
//     table.appendChild(clicks);
//
//
//
//     return table;
//   }
