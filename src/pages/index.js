import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const navigateToChildList = () => {
    router.push("/childs");
  };
  return (
    <div>
      <h1>Hello NextJS POC</h1>
      <button onClick={navigateToChildList}>List Child</button>
    </div>
  );
}
