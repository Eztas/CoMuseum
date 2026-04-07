// トリガーで不要なGmailを自動で削除
// 2022/02/07に作成
function myFunction() {
  //1日より前のAdobeメールを削除する
  deleteMail(GmailApp.search('label:deleteadobe older_than:1d' +' -is:starred'));
}

function deleteMail(deleteThreads1) {
 
  for (var i = 0; i < deleteThreads1.length; i++) {
    deleteThreads1[i].moveToTrash();
  }
}
