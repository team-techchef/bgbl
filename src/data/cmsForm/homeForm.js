import getObjValue from '../../util/getObjValue';

const homeFormConfig = {
  id: 'index', // a unique identifier for this instance of the form
  label: 'Home page', // name of the form to appear in the sidebar
  fields: [
    // define fields to appear in the form
    {
      name: 'frontmatter.mainHeader', // field name maps to the corresponding key in initialValues
      label: 'Main Page Header', // label that appears above the field
      component: 'text', // the component used to handle UI and input to the field
    },
    {
      label: 'Block Quote',
      name: 'frontmatter.blockQuote',
      description: 'Block Quote',
      component: 'group',
      fields: [
        {
          label: 'Book',
          name: 'book',
          description: 'the book text',
          component: 'text',
        },
        {
          label: 'Quote',
          name: 'quote',
          description: 'Quote',
          component: 'text',
        },
        {
          label: 'Author',
          name: 'author',
          description: 'The quote author',
          component: 'text',
        },
        {
          label: 'Image',
          name: 'image',
          description: 'Background Image',
          component: 'group',
          fields: [
            {
              label: 'Image Src',
              name: 'src',
              component: 'image',
              previewSrc: (formValues, { input }) => {
                const imageNode = getObjValue(formValues, input.name);

                if (typeof imageNode !== 'string') return '';

                return imageNode || '';
              },
              parse: (filename) => `/${filename}`,
              uploadDir: () => '/public',
            },
            {
              label: 'Image Alt',
              name: 'alt',
              component: 'text',
            },
          ],
        },
      ],
    },
    {
      label: 'Accordion',
      name: 'frontmatter.drawer',
      component: 'group-list',
      description: 'List of Accordion Panels',
      fields: [
        {
          label: 'Label',
          name: 'label',
          component: 'text',
        },
        {
          label: 'Books',
          name: 'books',
          component: 'group-list',
          description: 'List of books',
          fields: [
            {
              label: 'Label',
              name: 'title',
              component: 'text',
            },
            {
              label: 'Link',
              name: 'link',
              component: 'text',
            },
            {
              label: 'Image Src',
              name: 'image',
              component: 'text',
            },
            {
              label: 'Image Alt',
              name: 'alt',
              component: 'text',
            },
          ],
        },
      ],
    },
    {
      label: 'Call To Action Cards',
      name: 'frontmatter.callToActionCards',
      component: 'group-list',
      description: 'List of CTA Cards',
      fields: [
        {
          label: 'Name',
          name: 'caption',
          component: 'text',
        },
        {
          label: 'Link',
          name: 'link',
          component: 'text',
        },
        {
          label: 'Image',
          name: 'image',
          component: 'group',
          fields: [
            {
              label: 'Alt',
              name: 'alt',
              description: 'The name of the image',
              component: 'text',
            },
            {
              label: 'Src',
              name: 'src',
              description: 'image path',
              component: 'text',
            },
          ],
        },
      ],
    },
  ],
};

export default homeFormConfig;
