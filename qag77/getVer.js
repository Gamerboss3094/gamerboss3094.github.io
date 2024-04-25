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
    if(CV.major > LV.major) {
      return false;
    }
    if(LV.minor > CV.minor) {
      return true;
    } else {
      if(CV.minor > LV.minor) {
        return false;
      }
      if(LV.patch > CV.patch) {
        return true;
      } else {
        return false;
      }
    }
  }
}
