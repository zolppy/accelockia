"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import Container from "./components/generic/Container";
import Form from "./components/generic/Form";
import logo from "@/public/svg/logo-no-background.svg";
import InputWrapper from "./components/login/InputWrapper";
import Label from "./components/login/Label";
import Input from "./components/login/Input";
import SubmitButton from "./components/login/SubmitButton";
import ChangePassword from "./components/login/ChangePassword";
import { ILoginCtx, LoginCtx } from "@/context/LoginCtx";
import { validateEmail } from "@/utils/validators/email";

export default function Login(): React.ReactElement {
  const { email, password, updateEmail, updatePassword } = useContext(
    LoginCtx
  ) as ILoginCtx;
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(!(password.length >= 8 && validateEmail(email)));
  }, [email, password]);

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
            <h2 className="text-xl">Login</h2>
          </div>
          <hr />
        </div>
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
        <InputWrapper>
          <Label htmlFor="password">Senha:</Label>
          <Input
            id="password"
            type="password"
            maxLength={30}
            minLength={8}
            required
            placeholder="Informe sua senha"
            handleChange={(event) => updatePassword(event)}
            value={password}
          />
        </InputWrapper>
        <SubmitButton handleClick={() => {}} isDisabled={isDisabled}>
          Entrar
        </SubmitButton>
        <ChangePassword />
      </Form>
    </Container>
  );
}
