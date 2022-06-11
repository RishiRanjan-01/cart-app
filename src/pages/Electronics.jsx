import { Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { FetchContext } from "../context/FetchContext";

const Electronics = () => {
  const {getData, products} = useContext(FetchContext);

  useEffect(() => {
    getData("electronics");
  }, []);
  // console.log(products)
  return (
    <div>
      <Heading>Electronics</Heading>
      <Layout products={products} />
    </div>
  );
};

export default Electronics;
