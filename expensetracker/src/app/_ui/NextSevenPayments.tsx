import Link from "next/link";

import {
  FaChevronRight
} from 'react-icons/fa6';

export default function NextSevenPayments() {
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
      <h1 className="text-lg mb-4">Pagamentos para os próximos 7 dias</h1>
      <Payment />
    </div>
  );
}

function Payment() {
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
        <span>Cama</span>
        <span className="font-bold gap-4">R$ 351,23</span>
      </div>
      <Link href="/" className="text-blue-500 font-bold">
        <FaChevronRight />
      </Link>
    </div>
  );
}