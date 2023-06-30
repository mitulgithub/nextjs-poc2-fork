import ChildDetail from "../../components/ChildDetail";
import { useRouter } from "next/router";

function ChildDetailPage() {
  const router = useRouter();
  const navigateToChildList = () => {
    router.push("/");
  };
  return (
    <>
      <ChildDetail id={router.query.id} />
      <br />
      <button onClick={navigateToChildList}>Home</button>
    </>
  );
}

export default ChildDetailPage;
