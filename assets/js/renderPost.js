// renderPost.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const file = params.get("file");
  
    if (!file) {
      document.getElementById("post-content").innerText = "잘못된 요청입니다.";
      return;
    }
  
    fetch(`/posts/${file}.md`)
      .then(res => {
        if (!res.ok) throw new Error("파일을 찾을 수 없습니다.");
        return res.text();
      })
      .then(markdown => {
        const html = marked.parse(markdown);
        document.getElementById("post-content").innerHTML = html;
      })
      .catch(err => {
        document.getElementById("post-content").innerText = "포스트를 불러오는 데 실패했습니다.";
        console.error(err);
      });
  });
  