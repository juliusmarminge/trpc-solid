import { type VoidComponent } from "solid-js";
import { trpc } from "~/utils/trpc";

const Home: VoidComponent = () => {
  const hello = trpc.greeting.useQuery();
  const me = trpc.me.useQuery();

  return (
    <>
      <div>{hello.data ?? "No data"}</div>
      <div>{me.data ?? "No token"}</div>
    </>
  );
};

export default Home;
