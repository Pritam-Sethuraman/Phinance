"use client";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = {
  text: String;
};

function AuthButton({ text }: Props) {
  return <Button onClick={() => signIn()}>{text}</Button>;
}

export default AuthButton;
