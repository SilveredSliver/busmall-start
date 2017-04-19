'use strict'

var imgDirectory = 'img';

function getImage(name, filePath) {
  this.name = name;
  this.filePath = filePath;
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

  var lastImages = [];
  console.log(lastImages);

  function selectThree (imgFileList, lastImages) {
    this.theImages = [];
    var x = 0;
    var n = imgFileList.length;
    while(this.theImages.length < 3) {
      x = Math.random();
      console.log(x);
      var i = Math.floor(n * x);
      var testImage = imgFileList[i];
      if (lastImages.indexOf(testImage < -1)) {
        this.theImages.push(i);
      }
    }
  };


  //var foo = new selectThree(imgFileList, lastImages);
  //console.log(foo.theImages[0]);
  for (var j = 0; j < 25; j++) {
    var myThree = new selectThree(imgFileList, lastImages);

    for (var k = 0; k < 3; k++) {
      console.log(myThree.theImages[k]);
      imgList[myThree.theImages[k]].numDisplayed++;
    };

    //I need to put these  images on the  website
    //I then need to wait for the user to click on an image
    lastImages = myThree.theImages;

  var optionOneImage = imgFileList[myThree.theImages[0]];
  }
  console.log(imgList);

var count1 = 0;
var countStartB1 = document.getElementById('count1');
countStartB1.textContent = count1;
var b1 = document.getElementById('b1');
function addClickEvent1() {
  count1++
  countStartB1.textContent = count1;
}
b1.addEventListener('click', addClickEvent1);

var count2 = 0;
var countStartB2 = document.getElementById('count2');
countStartB2.textContent = count2;
var b2 = document.getElementById('b2');
function addClickEvent2() {
  count2++
  countStartB2.textContent = count2;
}
b2.addEventListener('click', addClickEvent2);

var count3 = 0;
var countStartB3 = document.getElementById('count3');
countStartB3.textContent = count3;
var b3 = document.getElementById('b3');
function addClickEvent3() {
  count3++
  countStartB3.textContent = count3;
}
b3.addEventListener('click', addClickEvent3);

  // function createTable(imgFileList, imgList) {
  var table = document.createElement('table');
  var tableBody = document.createElement("tbody");
  for (var i = 0; i < imgFileList.length; i++) {

    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.appendChild(document.createTextNode(imgFileList[i]));
    row.appendChild(cell);
    cell.appendChild(document.createTextNode(imgList[i].numDisplayed));
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
  //}

  //var myTable = createTable(imgFileList, imgList);
  //console.log(myTable);

  function generateRow(obj) {
    var row = document.createElement('tr');
    var imgName = document.createElement('td');
    imgName.textContent = obj.name;
    row.appendChild(imgName);

    var numDisplayed = document.createElement('td');
    numDisplayed.textContent = obj.numDisplayed;
    row.appendChild(numDisplayed);

    var numClicks = document.createElement('td');
    numClicks.textContent = obj.numClicks;
    row.appendChild(numClicks);

    return row;
  };

  var myRow = generateRow(imgList[0]);
  console.log(myRow);

  function generateAllRows(myTable, imgList) {
    for (i = 0; i < imgList.length; i++) {
      var nextRow = new generateRow(imgList[i]);
      myTable.appendChild(nextRow);
      console.log(nextRow);
    }
    return myTable;
  }


  function generateUserSessionTable() {
    var table = document.createElement('table');//this is a  div tag created in javascript
    table.setAttribute('id', 'userSessionTable');

    //table.setAttribute('id', 'store-report-table');
    document.body.appendChild(table);

    var headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    //add 'th' to table with text of 'Store Name'
    var imageHeadingName = document.createElement('th');
    imageHeadingName.textContent = 'Image Name';
    table.appendChild(imageHeadingName);
    var numberOfDisplays = document.createElement('th');
    numberOfDisplays.textContent = 'Number of Displays';
    table.appendChild(numberOfDisplays);
    var clicks = document.createElement('th');
    clicks.textContent = 'Number of Clicks';
    table.appendChild(clicks);



    return table;
  }

  var userTable = generateUserSessionTable();
  userTable = generateAllRows(userTable, imgList);
