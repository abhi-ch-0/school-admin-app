function InputField({ placeholder }) {
    return (
        <input
            type="text"
            className="flex-grow bg-transparent placeholder-neutral-dark text-sm px-2 py-1 focus:outline-none"
            placeholder={placeholder}
        />
    );
}

export default InputField;