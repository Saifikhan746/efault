async function initBlog() {
  const postsDiv = document.getElementById("posts");

  let posts;
  try {
    const res = await fetch("posts/index.json");
    if (!res.ok) throw new Error("index.json not found");
    posts = await res.json();
  } catch {
    postsDiv.innerHTML = "<p style='color:red'>[ERROR] could not load post index.</p>";
    return;
  }

  if (posts.length === 0) {
    postsDiv.innerHTML = "<p>no posts yet.</p>";
    return;
  }

  const list = document.createElement("div");

  posts.forEach(post => {
    // derive slug: "posts/first-post.md" → "first-post"
    const slug = post.file.replace(/^posts\//, "").replace(/\.md$/, "");

    const item = document.createElement("div");
    item.className = "post-item";
    item.innerHTML = `
      <a href="post.html?file=${encodeURIComponent(slug)}">&#9658; ${post.title}</a>
      <span class="post-date">${post.date}</span>
    `;

    const heart = document.getElementById("heart-widget");
    const heart2 = document.getElementById("heart-widget-2");

    item.addEventListener("mouseenter", () => {
      if (heart) heart.src = "assets/heart-2.gif";
    });
    item.addEventListener("mouseleave", () => {
      if (heart) heart.src = "assets/heart-1.gif";
    });
    item.addEventListener("click", () => {
      if (heart2) {
        heart2.classList.add("enlarge");
        setTimeout(() => heart2.classList.remove("enlarge"), 600);
      }
    });

    list.appendChild(item);
  });

  postsDiv.appendChild(list);
}

document.addEventListener("DOMContentLoaded", initBlog);
