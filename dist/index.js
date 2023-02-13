function getRenderer() {
  return {
    name: "astro-mithril",
    clientEntrypoint: "astro-mithril/client.js",
    serverEntrypoint: "astro-mithril/server.js",
    jsxImportSource: "react",
    jsxTransformOptions: async () => {
      var _a;
      const babelPluginTransformReactJsxModule = await import("@babel/plugin-transform-react-jsx");
      const jsx = ((_a = babelPluginTransformReactJsxModule == null ? void 0 : babelPluginTransformReactJsxModule.default) == null ? void 0 : _a.default) ?? (babelPluginTransformReactJsxModule == null ? void 0 : babelPluginTransformReactJsxModule.default);
      return {
        plugins: [
          jsx(
            {},
            {
              pragma: "m",
              pragmaFrag: "'['"
            }
          )
        ]
      };
    }
  };
}
function getViteConfiguration() {
  return {
    resolve: {
      dedupe: ["mithril"]
    }
  };
}
function src_default() {
  return {
    name: "astro-mithril",
    hooks: {
      "astro:config:setup": ({ addRenderer, updateConfig }) => {
        addRenderer(getRenderer());
        updateConfig({ vite: getViteConfiguration() });
      }
    }
  };
}
export {
  src_default as default
};
