import { importShared } from './__federation_fn_import-BoUzWnYO.js';
import { c as createSlice, b as createSelector, j as jsxRuntimeExports, p as products, a as addToCart, d as dispatchCartItemAdded } from './products-Du5H8IMT.js';

const initialState = {
  items: []
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product);
      }
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist(state) {
      state.items = [];
    },
    setWishlistState(_state, action) {
      return action.payload;
    }
  }
});
const { addToWishlist, removeFromWishlist, clearWishlist, setWishlistState } = wishlistSlice.actions;
const selectWishlistItems = (state) => state.wishlist.items;
createSelector(selectWishlistItems, (items) => items.length);

function ProductCard({
  product,
  onAddToCart,
  onSelectProduct,
  isInWishlist = false,
  onToggleWishlist
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid #ddd", padding: "1rem", borderRadius: 8, position: "relative" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: "0.5rem", right: "0.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onToggleWishlist?.(product),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5em"
        },
        title: isInWishlist ? "Remove from wishlist" : "Add to wishlist",
        children: isInWishlist ? "❤️" : "🤍"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, width: 120, height: 120 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `/product/${product.id}?ref=list`,
        onClick: (event) => {
          event.preventDefault();
          onSelectProduct(product.id);
        },
        children: product.name
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "$",
      product.price
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: product.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onAddToCart(product), children: "Add to Cart" })
  ] });
}

const {useDispatch,useSelector} = await importShared('react-redux');
function ProductList({ onSelectProduct }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist?.items ?? []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatchCartItemAdded(product);
  };
  const handleSelectProduct = (id) => {
    if (onSelectProduct) {
      onSelectProduct(id);
    } else {
      window.location.href = `/product/${id}?ref=list`;
    }
  };
  const handleToggleWishlist = (product) => {
    const isInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem"
        },
        children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductCard,
          {
            product,
            onAddToCart: handleAddToCart,
            onSelectProduct: handleSelectProduct,
            isInWishlist: wishlistItems.some((item) => item.id === product.id),
            onToggleWishlist: handleToggleWishlist
          },
          product.id
        ))
      }
    )
  ] });
}

export { ProductList as default };
