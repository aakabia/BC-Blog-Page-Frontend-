const userName = document.querySelector("#Username");
const blogName = document.querySelector("#blog-title");
const contentArea = document.querySelector("#content-area");
const addPost = document.querySelector("#submit-Button");
const clear = document.querySelector("#clearblog");

// Above I slected all the elements I will be using in Java for this page with queryselector and a  id.

function getBlogPost(event) {
  //event.preventDefault();  --- this allows my console.logs not to appear when uncommented.

  let userValue = userName.value.trim();
  let blogValue = blogName.value.trim();
  let contentValue = contentArea.value.trim();

  // Also, I grabbed the values from each input area and gave it a trim for whitespace.

  let blogInfo = {
    user: userValue,
    blogTitle: blogValue,
    content: contentValue,
  };

  let blogArry = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // Also, Above, I made these values into a object.
  // Also I created an empty array to store my information.

  if (userValue === "") {
    event.preventDefault();
    alert("Please fill in UserName!");
    return false;
  } else if (blogValue === "") {
    event.preventDefault();
    alert("Please fill in Title!");
    return false;
  } else if (contentValue === "") {
    event.preventDefault();
    alert("Please fill in Content!");
    return false;
  } else {
  }

  blogArry.push(blogInfo);
  clear.reset();

  // Above, I put a prevent default which stops the page from going to a new page as each condition is checked.
  // Above, I made a conditional statment for the user to be alerted if any blank fields are in the form.
  // Above, I pushed the results to the blog array and cleared the values.

  let blogArraySerialized = JSON.stringify(blogArry);

  localStorage.setItem("blogPosts", blogArraySerialized);
  // Above , I added the blog posts to local storage, as a object, under one array.

  console.log(blogArry);
  console.log(blogArraySerialized);

  // Above, I logged the results on the conosol.
}

addPost.addEventListener("click", getBlogPost);

// Above, I Added a event listener to the button and passed in the function I made.
