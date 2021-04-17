import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/all.min.css";
import "../css/bootstrap.min.css";
import "../css/responsive.css";
import "../css/style.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../node_modules/bootstrap-select/dist/js/bootstrap-select.min";
import Master from "./pages";
import AdminMasetr from "./admin/pages";
// Context import
import Cart from "../context/cart/Cart";
import UnitProvider from "../context/unit/UnitProvider";
import CategoryProvider from "../context/category/CategoryProvider";
import TagProvider from "../context/tag/TagProvider";
import ProductProvider from "../context/product/ProductProvider";

function App() {
  return (
    <Router>
      <ProductProvider>
        <TagProvider>
          <CategoryProvider>
            <UnitProvider>
              <Cart>
                <Switch>
                  <Route path="/" exact component={Master} />
                  <Route path="/admin" component={AdminMasetr} />
                </Switch>
              </Cart>
            </UnitProvider>
          </CategoryProvider>
        </TagProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
