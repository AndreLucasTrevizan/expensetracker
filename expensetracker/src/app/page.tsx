import OptionsMenu from "./_ui/OptionsMenu";
import NextSevenPayments from "./_ui/NextSevenPayments";
import InvoiceResume from "./_ui/InvoiceResume";

export default function Home() {
  return (
    <div
      className="
        flex
        flex-col
        flex-1
        gap-4
      "
    >
      <OptionsMenu />
      <NextSevenPayments />
      <InvoiceResume />
    </div>
  );
}
