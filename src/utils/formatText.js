export const formatText = (text, linkText, link) => {
  if (link.length > 0) {
    return text.replace(
      linkText,
      `<a href="${link}" class="posts__link">${linkText}</a>`,
    );
  }

  return text;
};
