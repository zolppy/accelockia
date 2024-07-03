"use client";

import { useRouter } from "next/navigation";

export default function BackButton(): React.ReactElement {
  const router = useRouter();

  return (
    <button
      className="p-3 rounded-md text-white isDisabled bg-violet-500 hover:bg-violet-600"
      type="submit"
      onClick={() => router.back()}
    >
      Voltar
    </button>
  );
}
