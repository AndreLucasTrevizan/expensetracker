import { FaArrowDown } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";

export default function Expenses() {
  return (
    <div
      className="
        flex
        flex-col
        border
        rounded
        bg-white
        p-4
      "
    >
      <span className="text-lg mb-4">Suas transações</span>
      <Transaction />
      <Transaction />
    </div>
  );
}

function Transaction() {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-2
        px-2
        hover:bg-stone-100
        hover:cursor-pointer
        rounded
      "
    >
      <div
        className="
          flex gap-2
        "
      >
        <FaArrowDown color="red" />
        <FaMoneyBill1 color="green" />
      </div>
      <span>Mercado</span>
      <span>Pix</span>
      <span>R$ 14,99</span>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  );
}
