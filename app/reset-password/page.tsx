"use client";

import Container from "../components/generic/Container";
import Image from "next/image";
import logo from "@/public/svg/logo-no-background.svg";
import { FaLock } from "react-icons/fa6";
import InputWrapper from "../components/login/LoginForm/components/InputWrapper";
import Label from "../components/login/LoginForm/components/Label";
import Input from "../components/login/LoginForm/components/Input";
import SubmitButton from "../components/login/LoginForm/components/SubmitButton";
import BackButton from "../components/generic/BackButton";
import Form from "../components/generic/Form";
import { useContext, useEffect, useState } from "react";
import { ILoginCtx, LoginCtx } from "@/context/LoginCtx";
import { validateEmail } from "@/utils/validators/email";

export default function ResetPassword(): React.ReactElement {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { email, updateEmail } = useContext(LoginCtx) as ILoginCtx;

  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form handleSubmit={handleSubmit}>
        <Image
          className="w-52 self-center"
          src={logo}
          alt="ilustração de cadeado roxo à esquerda, com nome 'Accelockia' à direita dele."
        />
        <div>
          <div className="flex gap-x-3 items-center mb-1 text-gray-400">
            <FaLock className="text-xl" />
            <h2 className="text-xl">Redefinir senha</h2>
          </div>
          <hr />
        </div>
        <p className="text-justify ">
          Insira o seu email e enviaremos um link para você redefinir a sua
          senha.
        </p>
        <InputWrapper>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            id="email"
            type="email"
            maxLength={45}
            minLength={8}
            required
            placeholder="Informe seu e-mail"
            handleChange={(event) => updateEmail(event)}
            value={email}
          />
        </InputWrapper>
        <SubmitButton handleClick={() => {}} isDisabled={isDisabled}>
          Avançar
        </SubmitButton>
        <BackButton />
      </Form>
    </Container>
  );
}
