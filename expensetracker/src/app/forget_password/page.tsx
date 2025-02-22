"use client";

/* import { useActionState } from "react";
import { handleSignIn } from "./actions"; */
//import Link from "next/link";

/* const initialState = {
  message: '',
} */

export default function SignIn() {
  //const [state, formAction, pending] = useActionState(handleSignIn, initialState);

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
        <h1 className="text-lg text-center">Recuperando Senha</h1>
        <div className="text-center py-4">
          <small>Enviaremos um código para o seu e-mail</small>
        </div>
        <form
          className="
            flex
            flex-col
            gap-4
          "
          action={() => {}}
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
            <button
              className="
                bg-blue-500
                text-white
                font-bold
                p-2
                rounded
              "
            >{"Entrar"}</button>
          </div>
          {/* {state?.message && (
            <div
              className="
                bg-red-500
                p-2
                flex
                justify-center
                rounded
              "
            >
              <span className="text-white font-bold">{state?.message}</span>
            </div>
          )} */}
        </form>
      </div>
    </div>
  );
}