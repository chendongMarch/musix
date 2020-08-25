var eeui = app.requireModule('eeui');

Vue.mixin({
  data() {
    return {
      resourceUrl: 'https://eeui.app/dist/1.0.1/pages/',
    };
  },

  methods: {
    openViewCode(str) {
      this.openViewUrl('https://eeui.app/' + str + '.html');
    },

    openViewUrl(url) {
      eeui.openPage({
        url: this.resourceUrl + 'index_browser.js',
        pageType: 'app',
        statusBarColor: '#2AA244',
        params: {
          title: 'EEUI',
          url: url,
        },
      });
    },
  },
});
