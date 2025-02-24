"use client";

import { useActionState } from "react";
import { createRevenue } from "../revenue/actions";
import Error from "./Error";

const initialState = {
  message: ''
};

export default function FormCreateRevenue() {
  const [state, formAction, pending] = useActionState(createRevenue, initialState);

  return (
    <form
      action={formAction}
      className="
        flex
        flex-col
        flex-wrap
        items-start
        gap-4
      "
    >
      <div
        className="
          w-full
          flex
          justify-between
          flex-wrap
          gap-4
        "
      >
        <div
          className="
            flex
            flex-col
            flex-1
          "
        >
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Teeste"
            className="
              border
              rounded
              p-2
            "
            name="description"
          />
        </div>
        <div
          className="
            flex
            flex-col
          "
        >
          <label>Valor</label>
          <input
            type="text"
            placeholder="Teeste"
            className="
              border
              rounded
              p-2
            "
            name="value"
          />
        </div>
      </div>
      <button
        onSubmit={() => {}}
        className="
          px-4
          py-2
          bg-blue-500
          font-bold
          text-white
          h-max
          rounded
        "
      >{pending ? "Carregando" : "Criar"}</button>
      {state?.message && (
        <Error message={state.message} />
      )}
    </form>
  );
}