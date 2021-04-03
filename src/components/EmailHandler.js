export const saveButton = (e) => {
  //   e.preventDefault();
  console.log('wow');
};

export const createTask = (e) => {
  e.preventDefault();
  const emails = document.getElementById('group-area').value.split(/\r|\r\n|\n/)
    .length;
  var lines = emails.value.split(/\r|\r\n|\n/);
  var count = lines.length;
  alert(count);
};
