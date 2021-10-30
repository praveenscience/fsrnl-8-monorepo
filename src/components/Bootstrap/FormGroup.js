const FormGroup = ({ Label, Id, Type, className, Desc, onChange }) => {
  if (
    !Label ||
    (Label && Label.trim().length === 0) ||
    !Id ||
    (Id && Id.trim().length === 0) ||
    !Type ||
    (Type && Type.trim().length === 0)
  ) {
    return (
      <div className="alert alert-danger">
        Please pass the mandatory <code>Label</code>, <code>Type</code> and{" "}
        <code>Id</code> properties.
      </div>
    );
  }
  return (
    <div className="mb-3">
      <label htmlFor={Id} className="form-label">
        {Label}
      </label>
      <input
        type={Type}
        className={"form-control" + (className ? " " + className : "")}
        id={Id}
        name={Id}
        aria-describedby={Id + "Help"}
        placeholder={"Enter " + Label}
        onChange={onChange}
      />
      {Desc && (
        <div id={Id + "Help"} className="form-text">
          {Desc}
        </div>
      )}
    </div>
  );
};

export default FormGroup;
