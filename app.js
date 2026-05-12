async function initBlog() {
  const postsDiv = document.getElementById("posts");

  let posts;
  try {
    const res = await fetch("posts/index.json");
    if (!res.ok) throw new Error("index.json not found");
    posts = await res.json();
  } catch {
    postsDiv.innerHTML = "<p style='color:#8b1a1a'>[ERROR] could not load post index.</p>";
    return;
  }

  if (posts.length === 0) {
    postsDiv.innerHTML = "<p>no posts yet.</p>";
    return;
  }

  const list = document.createElement("div");

  posts.forEach(post => {
    const slug = post.file.replace(/^posts\//, "").replace(/\.md$/, "");

    const item = document.createElement("div");
    item.className = "post-item";
    item.innerHTML = `
      <a href="post.html?file=${encodeURIComponent(slug)}">&#9658; ${post.title}</a>
      <span class="post-date">${post.date}</span>
    `;

    list.appendChild(item);
  });

  postsDiv.appendChild(list);
}

document.addEventListener("DOMContentLoaded", initBlog);
