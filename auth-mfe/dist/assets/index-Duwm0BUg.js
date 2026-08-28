import { importShared } from './__federation_fn_import-BTAm1X4k.js';
import LoginPage, { j as jsxRuntimeExports, c as configureStore, a as authReducer } from './__federation_expose_LoginPage-DC8tNoer.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

function StandaloneApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Auth MFE (Standalone)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPage, {})
  ] });
}

const {StrictMode} = await importShared('react');
const {Provider} = await importShared('react-redux');
const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StandaloneApp, {}) }) })
);
