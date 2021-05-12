import React, { useContext, createContext, useState, useEffect } from "react";
import { firestore } from "../../firebase/database";
import { generateKeyWords } from "../../components/admin/pages/products/utils/generateKeyWords";

let ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

function ProductProvider({ children }) {
  let [remover, setRemover] = useState(false);
  let [loading, setLoading] = useState(false);
  let [view, setView] = useState([]);
  let [searchBy, setSearchBy] = useState("");
  let [lastDoc, setLastDoc] = useState();
  let [isEmpty, setIsEmpty] = useState(false);
  let [loadMoreLoading, setLoadMoreLoading] = useState(false);
  let [limit, setLimit] = useState(1);
  let [isSession, setIsSession] = useState(false);

  let insert = (product) => {
    const keys = generateKeyWords(product.title);
    console.log("Insert = ", product);

    let tags = product.tags.map((tag) => {
      return tag.tag;
    });

    product.tags = tags;
    product.keys = [...keys, ...tags];

    setLoading(true);

    firestore
      .collection("products")
      .add(product)
      .then((snap) => {
        // console.log("Now = ", snap.get());
        setRemover(true);
        setLoading(false);
        setView([{ ...product }, ...view]);
        alert("Check product list.");
      });
  };

  const setLimithandler = (limit) => {
    setLimit(limit);
  };

  const increaseCartAmount = (id) => {
    console.log("increase = ", id);

    const sessionData = JSON.parse(sessionStorage.getItem("products"));

    if (sessionData) {
      const updateSessionData = sessionData.map((data) => {
        if (data.id === id) {
          return { cartAmount: data.cartAmount++, ...data };
        }

        return data;
      });

      sessionStorage.setItem("products", JSON.stringify(updateSessionData));

      setIsSession(true);
    }
  };

  const decearseCartAmount = (id) => {
    const sessionData = JSON.parse(sessionStorage.getItem("products"));

    if (sessionData) {
      const updateSessionData = sessionData.map((data) => {
        if (data.id === id && data.cartAmount > 0) {
          return { cartAmount: data.cartAmount--, ...data };
        }

        return data;
      });

      sessionStorage.setItem("products", JSON.stringify(updateSessionData));

      setIsSession(true);
    }
  };

  const addCarthandler = (id) => {
    console.log(id);

    const dataToBeSessioned = view.find((product) => {
      return id === product.id;
    });

    const oldData = JSON.parse(sessionStorage.getItem("products"));

    if (oldData) {
      const sessionData = JSON.stringify([
        {
          id: dataToBeSessioned.id,
          cartAmount: 1,
        },
        ...oldData,
      ]);
      sessionStorage.setItem("products", sessionData);
      setIsSession(true);
    } else {
      const sessionData = JSON.stringify([
        {
          id: dataToBeSessioned.id,
          cartAmount: 1,
        },
      ]);
      sessionStorage.setItem("products", sessionData);
      setIsSession(true);
    }

    // console.log(dataToBeSessioned);
  };

  const serachByHandler = (value) => {
    // console.log(value);
    setSearchBy(value);
  };

  let LoadMoreHandler = () => {
    setLoadMoreLoading(true);
    firestore
      .collection("products")
      .orderBy("id", "desc")
      .where("keys", "array-contains", searchBy)
      .startAfter(lastDoc)
      .limit(limit)
      .get()
      .then((snap) => {
        // console.log(snap.id);

        if (snap.size !== 0) {
          const newData = snap.docs.map((doc) => {
            return { ...doc.data(), doc: doc.id, cartAmount: 0 };
          });

          const lastData = snap.docs[snap.docs.length - 1];

          setView((prevDatas) => {
            return [...prevDatas, ...newData];
          });

          setLastDoc(lastData);
        } else {
          setIsEmpty(true);
        }

        setLoadMoreLoading(false);
      });
  };

  useEffect(() => {
    firestore
      .collection("products")
      .where("keys", "array-contains", searchBy)
      .orderBy("id", "desc")
      .limit(limit)
      .get()
      .then((snap) => {
        // console.log(snap.docs[0].id);
        setLoadMoreLoading(false);
        if (snap.size !== 0) {
          let data = snap.docs.map((doc) => {
            //   console.log(doc.id);
            return { ...doc.data(), doc: doc.id, cartAmount: 0 };
          });

          const lastData = snap.docs[snap.docs.length - 1];

          setLastDoc(lastData);
          setIsEmpty(false);
          setView(data);
        } else {
          setIsEmpty(true);
        }
      });
  }, [searchBy, limit]);

  const value = {
    insert,
    remover,
    setRemover,
    loading,
    view,
    serachByHandler,
    LoadMoreHandler,
    loadMoreLoading,
    isEmpty,
    setLimithandler,
    addCarthandler,
    isSession,
    setIsSession,
    increaseCartAmount,
    decearseCartAmount,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
