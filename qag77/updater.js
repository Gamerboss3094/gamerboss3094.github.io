var LVinfo = {
  "version": [
    {
      "major": 999,
      "minor": 999,
      "patch": 999,
      "full": 'Cannot show latest version, click "Update" and it will automatically download the latest version'
    }
  ]
};
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
