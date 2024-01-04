import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../Components/Item";
function ListPage() {
  const { type: type } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setProducts([]);
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    setTimeout(() => {
      setLoading(true);
    }, 500);
    console.log(products);
  }, [type]);
  return (
    <>
      {products.length > 0 && loading && (
        <>
          <h3 className="text-white ml-[10px] font-[600] text-[22px]">
            Kết quả tìm kiếm cho "{type}".
          </h3>
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
        </>
      )}
      {products.length <= 0 && (
        <div className="min-h-[600px]">
          <h3 className="text-white ml-[10px] font-[600] text-[22px]">
            Không có sản phẩm nào được tìm thấy với từ khóa "{type}".
          </h3>
        </div>
      )}
    </>
  );
}

export default ListPage;
