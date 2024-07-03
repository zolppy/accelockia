interface ILabel {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({
  htmlFor,
  children,
}: ILabel): React.ReactElement {
  return (
    <label className="text-sm text-gray-500 w-fit" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
