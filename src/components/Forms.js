import FormsFunc from "./_FormsFunc";
import FormsState from "./_FormsState";

const Forms = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <FormsState />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormsFunc />
        </div>
      </div>
    </>
  );
};

export default Forms;
