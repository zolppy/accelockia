interface ISubmitButton {
  handleClick: () => void;
  isDisabled: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({
  handleClick,
  isDisabled,
  children,
}: ISubmitButton): React.ReactElement {
  return (
    <button
      className="p-3 rounded-md text-white isDisabled bg-violet-500 hover:bg-violet-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
