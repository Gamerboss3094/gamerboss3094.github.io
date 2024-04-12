var LVinfo = {
  "version": [
    {
      "major": 1,
      "minor": 3,
      "patch": 1,
      "full": "1.3.1"
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
