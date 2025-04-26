function templateReplace(str, params = {}) {
  return str.replace(/\{\{(.*?)\}\}/g, (_, key) => params[key.trim()] || '');
}

export function createI18n(translations, lang = 'en') {
  const currentLang = translations[lang] ? lang : 'en';
 
  return {
    getText() {
      return translations[currentLang];
    },
    replace: new Proxy(
      {},
      {
        get(_, key) {
          return (params) => {
            const raw = translations[currentLang][key];
            return raw ? templateReplace(raw, params) : '';
          };
        },
      }
    ),
  };
}
