export default function Container({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="bg-slate-200 w-full min-h-svh flex flex-col text-gray-500 relative">
      {children}
    </div>
  );
}
