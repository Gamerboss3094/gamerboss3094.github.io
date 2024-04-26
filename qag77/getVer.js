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
  if(CV.major >= LV.major) {
    return false;
  } elseif(CV.minor >= LV.minor) {
    return false;
  } elseif(CV.patch >= LV.patch) {
    return false;
  } else {
    return true;
  }
}
