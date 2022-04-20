import './SmallLoader.css';

const SmallLoader = () => {
  return (
    <div className="ellipsis-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default SmallLoader;
