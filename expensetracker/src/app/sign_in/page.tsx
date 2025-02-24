"use client";

import { useActionState } from "react";
import { handleSignIn } from "./actions";
import Link from "next/link";
import Error from "../_ui/Error";

const initialState = {
  message: '',
}

export default function SignIn() {
  const [state, formAction, pending] = useActionState(handleSignIn, initialState);

  return (
    <div
      className="
        p-4
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          bg-white
          p-4
          border
          rounded
          w-96
        "
      >
        <h1 className="text-lg mb-8 text-center">Acesse o sistema</h1>
        <form
          className="
            flex
            flex-col
            gap-4
          "
          action={formAction}
        >
          <div
            className="flex flex-col"
          >
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="
                p-2
                border
                rounded
              "
              name="email"
            />
          </div>
          <div
            className="flex flex-col"
          >
            <label>Senha</label>
            <input
              type="password"
              placeholder="Entre com sua senha"
              className="
                p-2
                border
                rounded
              "
              name="password"
            />
          </div>
          <div
            className="flex flex-col"
          >
            <button
              className="
                bg-blue-500
                text-white
                font-bold
                p-2
                rounded
              "
            >{pending ? "Carregando" : "Entrar"}</button>
          </div>
          {state?.message && (
            <Error message={state.message} />
          )}
          <div className="text-center">
            <Link href={"/forget_password"} className="text-blue-500">Esqueci minha senha</Link>
            <div className="border border-t-0 border-l-0 border-r-0 my-2"></div>
            <Link href={"/sign_up"} className="text-blue-500">Criar conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}