import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function InvoiceResume() {
  return (
    <div
      className="
        bg-white
        p-4
        border
        rounded
        flex
        flex-col
      "
    >
      <div className="flex justify-between">
        <h1 className="text-lg mb-4">Cartão de Crédito</h1>
        <Link href="/" className="text-blue-500 font-bold">
          <FaChevronRight />
        </Link>
      </div>
      <Invoice />
    </div>
  );
}

function Invoice() {
  return (
    <div
      className="
        border
        rounded
        p-4
        flex
        justify-between
      "
    >
      <div
        className="
          flex
          flex-col
          justify-between
        "
      >
        <span>Fatura atual</span>
        <span className="font-bold gap-4">R$ 1.769,23</span>
      </div>
    </div>
  );
}