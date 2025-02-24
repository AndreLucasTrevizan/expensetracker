"use server"

import { getUserDetail } from "../profile/actions";

export async function UserProfile() {
  const user = await getUserDetail();
  
  return (
    <div
      className="flex justify-between flex-wrap gap-4"
    >
      <div
        className="flex flex-col flex-1"
      >
        <label htmlFor="">Nome</label>
        <input
          className="
          p-2
          border
          rounded
          text-sm
          "
          type="text"
          value={user.name}
          disabled
        />
      </div>
      <div
        className="flex flex-col flex-1"
      >
        <label htmlFor="">E-mail</label>
        <input
          className="
          p-2
          border
          rounded
          text-sm
          "
          type="text"
          value={user.email}
          disabled
        />
      </div>
      <div
        className="flex flex-col flex-1"
      >
        <label htmlFor="">Criado em</label>
        <input
          className="
          p-2
          border
          rounded
          text-sm
          "
          type="text"
          value={new Date(user.createdAt).toLocaleDateString()}
          disabled
        />
      </div>
      <div
        className="flex flex-col flex-1"
      >
        <label htmlFor="">Atualizado em</label>
        <input
          className="
          p-2
          border
          rounded
          text-sm
          "
          type="text"
          value={new Date(user.updatedAt).toLocaleDateString()}
          disabled
        />
      </div>
    </div>
  );
}
