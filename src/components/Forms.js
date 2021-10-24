import FormsFunc from "./_FormsFunc";
import FormsState from "./_FormsState";

const Forms = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h4>Stateful Class Component</h4>
          <FormsState />
        </div>
        <div className="col-6">
          <h4>Stateless Functional Component</h4>
          <FormsFunc />
        </div>
      </div>
    </>
  );
};

export default Forms;
