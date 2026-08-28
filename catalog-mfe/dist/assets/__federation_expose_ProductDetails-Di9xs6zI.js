import { importShared } from './__federation_fn_import-BoUzWnYO.js';
import { p as products, j as jsxRuntimeExports, a as addToCart, d as dispatchCartItemAdded } from './products-Du5H8IMT.js';

const {useEffect} = await importShared('react');

const {useDispatch} = await importShared('react-redux');
function ProductDetails({ id }) {
  const dispatch = useDispatch();
  const product = products.find((p) => String(p.id) === id);
  useEffect(() => {
    if (product) {
      sessionStorage.setItem("recentProduct", JSON.stringify(product));
    }
  }, [product]);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Product not found." });
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatchCartItemAdded(product);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: product.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, width: 200, height: 200 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "$",
      product.price
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: product.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddToCart, children: "Add to Cart" })
  ] });
}

export { ProductDetails as default };
