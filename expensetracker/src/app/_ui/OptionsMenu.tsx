
import Link from 'next/link';
import {
  FaBarcode,
  FaGear,
  FaFileInvoice,
  FaMoneyBill1Wave,
} from 'react-icons/fa6';

export interface OptionType {
  route: string;
  name: string;
  icon: React.JSX.Element;
}

const options: OptionType[] = [
  {
    route: "/",
    name: "Pagamentos",
    icon: <FaBarcode size={30} />
  },
  {
    route: "/",
    name: "Fatura",
    icon: <FaFileInvoice size={30} />
  },
  {
    route: "/",
    name: "Receita",
    icon: <FaMoneyBill1Wave size={30} />
  },
  {
    route: "/",
    name: "Configurações",
    icon: <FaGear size={30} />
  }
];

export default function OptionsMenu() {
  return (
    <div
      className="
        flex
        justify-between
        gap-4
      "
    >
      {options.map((option) => <Option option={option} />)}
    </div>
  );
}

function Option({
  option
}: {
  option: OptionType
}) {
  return (
    <Link
      href={option.route}
      className="
        p-4
        bg-white
        rounded
        border
        flex
        flex-col
        items-center
        justify-center
        w-40
        hover:pointer
      "
    >
      {option.icon}
      <span className='mt-4'>{option.name}</span>
    </Link>
  );
}
