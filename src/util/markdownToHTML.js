import remark from 'remark';
import html from 'remark-html';

/**
 * Converts a string that contains markdown into string that contains html
 * All markdown will be sanitized for safety
 * @param {string} markdown
 */
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html, { sanitize: true }).process(markdown);
  return result.toString();
}
