export default function InputWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="flex flex-col gap-y-1">{children}</div>;
}
