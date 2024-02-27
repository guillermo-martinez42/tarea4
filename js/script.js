function init() {
    var elems = document.querySelectorAll('select');
    var instancesSel = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.datepicker');
    var instancesPic = M.Datepicker.init(elems, {});
  };

function setAsActive(obj) {
    setAsInactive();
    obj.classList.add('active');
}

function setAsInactive() {
    var obj = document.querySelector('.active');
    if (obj != null) obj.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });