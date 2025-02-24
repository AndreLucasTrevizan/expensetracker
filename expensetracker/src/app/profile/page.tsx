import { UserProfile } from "../_ui/UserProfile";

export default function Profile() {
  return (
    <div
      className="
        bg-white
        border
        rounded
        p-4
        flex
        flex-col
      "
    >
      <h1 className="text-xl mb-8">Seu perfil</h1>
      <UserProfile />
    </div>
  );
}