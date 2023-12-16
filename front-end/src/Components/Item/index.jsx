function Item({ name, price, sale_price }) {
  return (
    <div className="pl-[20px]">
      <div className="bg-black  ml-[20px] p-[10px] rounded-xl hover:opacity-80 hover:cursor-pointer">
        <img
          className="w-[260px] height-[260px ]"
          src="https://vietnhaccenter.com/wp-content/uploads/2020/06/piano-yamaha-ju-109-pe-1641405753-300x300.jpg"
        />
        <h3 className="text-white">{name}</h3>
        <p className="text-yellow-400">
          {price}
          <span className="text-[14px] ml-[6px] line-through text-yellow-200">
            {sale_price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Item;
