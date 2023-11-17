import "./subHead.css";
// eslint-disable-next-line react/prop-types
const SubHead = ({ content }) => {
  return (
    <div>
      <h2 className="sub">{content}</h2>
    </div>
  );
};

export default SubHead;
