// var commentUser = [

// ];

var div = $('js-comment');
var dataComment = JSON.parse(localStorage.getItem('COMMENT'));
var commentUser = dataComment ? dataComment : [];
var getUser = JSON.parse(localStorage.getItem('USER'));
var dataUser = getUser ? getUser : [];

function addComment() {
  var nameUser = $('name').value;
  var comment = $('comment').value;
  var date = new Date();
  var date_format = date.toLocaleTimeString();
  var avatar = getUser ? getUser.avatar : './img/user/defaultUser.png';
  // console.log(avatar);
  var email = getUser ? getUser.email : 'somebody';
  var sendComment = commentUser;
  var id = commentUser.length + 1;

  var getComment = {
    id: id,
    name: nameUser,
    avatar: avatar,
    date: date_format,
    content: comment,
    email: email
  }
  console.log(getComment)
  sendComment.push(getComment)
  if (nameUser && comment) {
    localStorage.setItem('COMMENT', JSON.stringify(sendComment));
    console.log('true');
  } else {
    alert('Please fill out form comment');
    console.log('false')
  }
  div.innerHTML = '';
  showTotal();
  showComment();
  if (!dataUser) {
    $('name').value = '';
  }
  $('comment').value = '';
}

function showTotal() {
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Comment (' + commentUser.length + ')';
  div.appendChild(h2);
}

function showComment() {
  if (commentUser) {
    commentUser.forEach(renderComment);
  }
}
function renderComment(item, index) {
  // console.log(item.avatar)
  var img = document.createElement('img');
  img.src = item.avatar;
  var section = document.createElement('section');
  section.classList.add('comment-content');

  var h3 = document.createElement('h3');
  h3.innerHTML = item.name;

  //Create Button Delete
  var span = document.createElement('span');
  var icontrash = document.createElement('i');
  icontrash.classList.add('fa');
  icontrash.classList.add('fa-window-close');
  span.appendChild(icontrash);
  span.addEventListener('click', function () { delComment(item) });

  var p = document.createElement('p');
  p.classList.add('comment-body');
  p.innerHTML = '- ' + item.content;

  var p2 = document.createElement('p');
  p2.classList.add('comment-foot');
  p2.innerHTML = item.date;

  var div2 = document.createElement('div');
  div2.classList.add('comment-box');
  div2.classList.add('clr');
  div2.appendChild(span)
  section.appendChild(h3);
  section.appendChild(p);
  section.appendChild(p2);
  div2.appendChild(img);
  div2.appendChild(section);
  div.appendChild(div2);
  showbuttondel(item);
}
function showbuttondel(item) {
  for (var i = 0; i < commentUser.length; i++) {
    if (dataUser.email === item.email) {
      // console.log('true');
    }
    else {
      // console.log('false')
    }
  }

}
function delComment(comment) {
  var retVal = confirm('Do you want to delete ?');
  var index = findComment(commentUser, comment);

  if (retVal) {
    if (index !== -1) {
      dataComment.splice(index, 1);
    }
    localStorage.setItem('COMMENT', JSON.stringify(dataComment));
    div.innerHTML = '';
    showTotal();
    showComment();
  }
}

window.onload = function () {
  showTotal();
  showComment();
  $('send').onclick = addComment;
}
