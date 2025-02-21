
import Link from 'next/link';
import {
  FaPlus,
} from 'react-icons/fa6';

export interface OptionType {
  route: string;
  name: string;
  icon: React.JSX.Element;
}

const options: OptionType[] = [
  {
    route: "/revenue/new",
    name: "Nova Receita",
    icon: <FaPlus size={30} color='#3b82f6' />
  },
];

export default function RevenueMenu() {
  return (
    <div
      className="
        flex
        justify-between
        gap-4
      "
    >
      {options.map((option) => <Option key={option.name} option={option} />)}
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
