/*
var LVinfo = {
  "version": [
    {
      "major": 1,
      "minor": 1,
      "patch": 0,
      "full": "1.1.0"
    }
  ]
};
//var CV = CVinfo.version[0];
var LV = LVinfo.version[0];
*/
getTrueLV();
function updateAvailable() {
  if(LV.major > CV.major) {
    return true;
  } else {
    if(LV.minor > CV.minor) {
      return true;
    } else {
      if(LV.patch > CV.patch) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function updatePrompt() {
  swal({
    title: 'Update Available!',
    text: 'Newest Version: ' + LV.full + '\n Current Version: ' + CV.full,
    icon: 'warning',
    buttons: {
      cancel: 'Close',
      update: {
        text: 'Update',
        value: 'update'
      }
    }
  }).then((value) => {
    if(value === 'update') {
      location.href = 'https://github.com/Gamerboss3094/QAG77/releases/latest'
    }
  });
}

function update() {
  if(updateAvailable()) {
    updatePrompt();
  }
}

function getTrueLV() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://gamerboss3094.github.io/qag77/getVer.js");
  xhr.onload = function() {
    if(this.status == 200) {
      let res = this.responseText;
      console.log(res)
      eval(res);
    }
  }
  xhr.send();
}
update();
