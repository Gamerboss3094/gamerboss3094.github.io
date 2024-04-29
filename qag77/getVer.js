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
const verOrder = [
  '1.0.0',
  '1.1.0',
  '1.2.0',
  '1.3.0',
  '1.3.1',
  '1.4.0'
]
var CV = CVinfo.version[0];
var LV = LVinfo.version[0];

function updateAvailable() {
  alert('Just ignore the following messages, i am trying to update the updating system');
  alert(CVinfo.full);
  alert(verOrder.indexOf(CVinfo.full));
}
