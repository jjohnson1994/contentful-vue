import * as Contentful from 'contentful';

let client = null;

const ContentfulVue = {
  install(Vue, options) {
    client = Contentful.createClient({
      space: options.space,
      accessToken: options.accessToken,
    });

    Vue.prototype.$contentful = client;
  },
};

export default ContentfulVue;
