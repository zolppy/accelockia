import Link from "next/link";

export default function ChangePassword(): React.ReactElement {
  return (
    <Link
      href="/reset-password"
      className="text-right text-violet-500 text-sm hover:underline"
    >
      Esqueceu ou deseja alterar sua senha
    </Link>
  );
}
