import fs from 'fs';
import matter from 'gray-matter';
// import { getGithubPreviewProps, parseMarkdown } from 'next-tinacms-github';

/**
 * Returns a list pages
 * @returns {string[]} Array of folder names in the pages directory
 */
export function getPageLists() {
  return fs
    .readdirSync('src/pages')
    .filter((v) => !/.jsx|.js/.test(v))
    .reverse();
}

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page) {
  const content = await import(`../data/pages/${page}.md`);
  return matter(content?.default);
}

/**
 * Get Data associated with the app
 */
export async function getConfigData() {
  const data = await import('../data/config.md');
  return matter(data.default)?.data;
}

/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @returns Page Props
 */
export async function getPageProps(page, preview = false, previewData = null) {
  const { data, content } = await getPageData(page);
  const config = await getConfigData();

  // if (preview) {
  //   const gitHubProps = await getGithubPreviewProps({
  //     ...previewData,
  //     fileRelativePath: `/src/data/pages/${page}.md`,
  //     parse: parseMarkdown,
  //   });
  //   const file = gitHubProps?.props?.file;

  //   return {
  //     props: {
  //       sourceProvider: null,
  //       logoImage: config?.logoImage,
  //       navLinks: config?.navLinks,
  //       data,
  //       content,
  //       file,
  //       ...gitHubProps?.props,
  //     },
  //   };
  // }

  return {
    props: {
      sourceProvider: null,
      logoImage: config?.logoImage,
      navLinks: config?.navLinks,
      data,
      content,
      error: null,
      preview,
      file: {
        sha: '',
        data: {
          frontmatter: data,
          markdownBody: content,
        },
        fileRelativePath: `/src/data/pages/${page}.md`,
      },
    },
  };
}
