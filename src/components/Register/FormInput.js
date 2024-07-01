const FormInput = (props) => {
  const { label, onChange, id, ...dataInputProps } = props;
  return (
    <div className="formInput">
      <label className="formLabel">{label}</label>
      <input {...dataInputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
