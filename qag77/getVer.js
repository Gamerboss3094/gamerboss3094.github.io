var LVinfo = {
  "version": [
    {
      "major": 1,
      "minor": 4,
      "patch": 0,
      "full": "1.4.0"
    }
  ]
};
var CV = CVinfo.version[0];
var LV = LVinfo.version[0];

function updateAvailable() {
  if(CV.major < LV.major && CV.patch < LV.patch && CV.minor < LV.minor && !(CV.major > LV.major) && !(CV.minor > LV.minor) && !(CV.patch > LV.patch)) {
    return true;
  } else {
    return false;
  }
}
