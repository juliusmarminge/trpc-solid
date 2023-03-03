import { type VoidComponent } from "solid-js";
import { trpc } from "~/utils/trpc";

const Home: VoidComponent = () => {
  const hello = trpc.greeting.useQuery();

  return <div>{hello.data ?? "No data"}</div>;
};

export default Home;
