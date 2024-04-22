function getTrueLV() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://gamerboss3094.github.io/qag77/getVer.js");
  xhr.onload = function() {
    if(this.status == 200) {
      let res = this.responseText;
      let tempRes = res;
      let trueLVcommand = "";
      while((tempRes.split('\n').length - 1) > 9) {
        tempRes = tempRes.slice(0, tempRes.lastIndexOf('\n'));
        trueLVcommand = tempRes;
      }
      eval(trueLVcommand);
    }
  }
  xhr.send();
}
getTrueLV();
var CV = CVinfo.version[0];
var LV = LVinfo.version[0];
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
update();
