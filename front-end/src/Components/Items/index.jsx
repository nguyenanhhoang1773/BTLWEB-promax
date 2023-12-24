import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../Item";

function Imtes() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/list-product")
      .then(function (response) {
        // handle success
        console.log(response);
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div className="flex flex-wrap p-[20px]">
      {product.map(({ name, image, price, sale_price }, index) => {
        return (
          <Item
            key={price}
            name={name}
            image={image}
            price={price}
            sale_price={sale_price}
          />
        );
      })}
    </div>
  );
}

export default Imtes;
