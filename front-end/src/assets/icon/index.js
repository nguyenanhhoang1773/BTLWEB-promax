export const StartIcon = ({ deltail }) => (
  <div className="inline-block">
    {deltail && (
      <svg
        enableBackground="new 0 0 15 15"
        viewBox="0 0 15 15"
        x="0"
        y="0"
        className="w-[16px] inline-block fill-yellow-400"
      >
        <polygon
          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polygon>
      </svg>
    )}
    {!deltail && (
      <svg
        enableBackground="new 0 0 15 15"
        viewBox="0 0 15 15"
        x="0"
        y="0"
        className="w-[20px] inline-block fill-[#ffce3d] "
      >
        <polygon
          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polygon>
      </svg>
    )}
  </div>
);
export const CartIcon = () => (
  <svg
    enableBackground="new 0 0 15 15"
    viewBox="0 0 15 15"
    x="0"
    y="0"
    className="w-[26px] inline-block stroke-yellow-600 fill-yellow-600"
  >
    <g>
      <g>
        <polyline
          fill="none"
          points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polyline>
        <circle cx="6" cy="13.5" r="1" stroke="none"></circle>
        <circle cx="11.5" cy="13.5" r="1" stroke="none"></circle>
      </g>
      <line
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="7.5"
        x2="10.5"
        y1="7"
        y2="7"
      ></line>
      <line
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="9"
        x2="9"
        y1="8.5"
        y2="5.5"
      ></line>
    </g>
  </svg>
);
