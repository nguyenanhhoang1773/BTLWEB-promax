import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../Components/Item";
function ListPage() {
  const { type: type } = useParams();
  const [products, setProducts] = useState();
  const allPd = useSelector((state) => state.storeProducts.all);
  useEffect(() => {
    if (type === "all") {
      setProducts(allPd);
      return;
    }
    axios
      .get("http://localhost:8000/api/search", {
        params: {
          value: type,
        },
      })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [type]);
  return (
    <>
      {products && (
        <div className="flex flex-wrap">
          {products.map(
            ({ id, slug, name, price, image, sale_price }, index) => (
              <Item
                list
                key={index}
                slug={slug}
                id={id}
                name={name}
                image={image}
                price={price}
                sale_price={sale_price}
              />
            )
          )}
        </div>
      )}
    </>
  );
}

export default ListPage;
