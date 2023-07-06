function Post({ id, title, body, tags }) {
  const tagsStr = tags
    .map((tag) => `${tag[0].toUpperCase()}${tag.slice(1)}`)
    .join(', ');

  return `
    <div class="post rounded-lg shadow-md border p-4 space-y-4" data-id="${id}">
      <h2 class="text-2xl">${title}</h2>
      <p class="text-sm">
        ${body}
      </p>
      <div class="text-blue-500 text-xs">${tagsStr}</div>
    </div>
  `;
}

export default Post;
