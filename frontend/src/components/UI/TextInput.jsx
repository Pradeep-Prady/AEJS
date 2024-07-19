const TextInput = ({ label="", placeHolder, type, name, value, onChange }) => {
  return (
    <div className="w-full flex flex-col justify-end my-1 md:my-2">
      <label className="label"> {label}</label>
      <input
        className="input"
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;