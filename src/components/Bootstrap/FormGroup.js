const FormGroup = ({ Label, Id, Type, className, Desc }) => {
  return (
    <div className="mb-3">
      <label htmlFor={Id} className="form-label">
        {Label}
      </label>
      <input
        type={Type}
        className={"form-control" + (className ? " " + className : "")}
        id={Id}
        aria-describedby={Id + "Help"}
        placeholder={"Enter " + Label}
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
