export default function Error({
  message,
}: {
  message: string,
}) {
  return (
    <div
      className="
        bg-red-500
        p-2
        flex
        justify-center
        rounded
      "
    >
      <span className="text-white font-bold">{message}</span>
    </div>
  );
}