import Link from "next/link";
import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";

const HomePage = async () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
      <div className="flex flex-col flex-1 items-center">
        <Link className="underline text-sm" href={ticketsPath()}>
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
