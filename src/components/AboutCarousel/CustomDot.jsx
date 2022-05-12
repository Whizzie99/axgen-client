// eslint-disable-next-line react/prop-types
const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      marginTop: "10px",
      background: "#1890ff",
    }}
  ></span>
);

export default MyDot;
