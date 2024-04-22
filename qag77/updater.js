function updatePrompt() {
  swal({
    title: 'Update Available!',
    text: 'Cannot show latest version, click "Update" to automatically download the latest version',
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
  updatePrompt();
}

update();
