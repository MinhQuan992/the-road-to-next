import Link from "next/link";
import { ticketsPath } from "@/utils/paths";

const HomePage = async () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <Link className="underline text-sm" href={ticketsPath()}>
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
