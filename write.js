const db = firebase.firestore();

var quill = new Quill('#editor', {
    theme: 'snow'
  });

function createPost(title, content) {

    let h2 = document.querySelector("#topic");
  
    h2.textContent = title;

    const value = content
    const delta = quill.clipboard.convert(value)

    quill.setContents(delta, 'silent')
}
  
  // Get Posts
  function getPost() {
    var docRef = db.collection("posts").doc("IdCj5mzWUsA1Va63R4uR");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            createPost(
                data.postName,
                data.postContent
              );
            console.log("Document data:", data);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }
  
  getPost();

  document.querySelector("#save").addEventListener("click", function() {

    console.log(quill.root.innerHTML);
    let postAuthor = "editor";//document.querySelector("#author").value;
    let postTitle = document.querySelector("#topic").value;
    let postContent = quill.root.innerHTML;//document.querySelector("#editor").value;
    let postDate = Date.now(); //document.querySelector("#postDate").value;
  
    if (
      postAuthor === "" ||
      postTitle === "" ||
      postContent === "" ||
      postDate === ""
    ) {
      alert("Fields Empty");
    } else {
      db.collection("posts")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
    }
  });