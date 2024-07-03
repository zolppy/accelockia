interface IForm {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function Form({
  children,
  handleSubmit,
}: IForm): React.ReactElement {
  return (
    <div className="min-w-[320px] max-w-[500px] w-[90%] bg-white p-6 rounded-lg flex flex-col gap-y-5 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      {children}
    </div>
  );
}
