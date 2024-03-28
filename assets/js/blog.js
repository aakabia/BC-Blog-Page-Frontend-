const mainEL = document.querySelector("#mainEL");
const toggleBTN = document.querySelector("#toggle");
const bodyEL = document.querySelector("#bodyEL");

console.log(mainEL);
console.log(toggleBTN);

// Above, I selected three elements from my html and checked if they were working.

function renderBlogPosts() {
  const storedBlogs = JSON.parse(localStorage.getItem("blogPosts"));

  for (i = 0; i < storedBlogs.length; i++) {
    const blogs = storedBlogs[i];

    const section = document.createElement("section");
    section.setAttribute("class", "blog");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title1");
    h2.textContent = blogs.blogTitle;

    const p = document.createElement("p");
    p.setAttribute("class", "blogpost");
    p.textContent = blogs.content;

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "author");
    h3.textContent = "Posted by:";

    const span = document.createElement("span");
    span.textContent = blogs.user;

    mainEL.appendChild(section);
    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(h3);
    h3.appendChild(span);
  }
  // Above I created a function, (which is a for loop), to render the blog posts from local storage and on to the screen.
  // Also, I created elements, gave them attributes and appended them.
}

let mode = "dark";

// When toggeling between these two items, the variable assigned has to be outside of the function.

function lightDark(event) {
  event.stopPropagation();

  if (mode === "dark") {
    mode = "light";
    bodyEL.setAttribute("class", "light");
  } else {
    mode = "dark";
    bodyEL.setAttribute("class", "dark");
  }
}

//  Above, I created a function that allows me to switch the background color for the page.

toggleBTN.addEventListener("click", lightDark);

// Above, I created a event listener and assigned to my toggle btn.

renderBlogPosts();

// Last, I called the function so that everytime the page loads this function is working.
