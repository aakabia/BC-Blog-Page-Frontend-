const mainEL = document.querySelector("#mainEL");
const toggleBTN = document.querySelector("#toggle");


console.log(mainEL);
console.log(toggleBTN);




function renderBlogPosts(){

const storedBlogs = JSON.parse(localStorage.getItem("blogPosts"));

for ( i=0; i < storedBlogs.length; i++){
    const blogs = storedBlogs[i];

    const section = document.createElement("section");
    section.setAttribute("class","blog");

    const h2 = document.createElement("h2");
    h2.setAttribute("class","title1");
    h2.textContent = blogs.blogTitle;



    const p = document.createElement("p");
    p.setAttribute("class","blogpost");
    p.textContent = blogs.content;

    const h3 = document.createElement("h3");
    h3.setAttribute("class","author");
    h3.textContent = "Posted by:";

    const span = document.createElement("span");
    span.textContent = blogs.user;

    mainEL.appendChild(section);
    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(h3);
    h3.appendChild(span);


}


};

renderBlogPosts();