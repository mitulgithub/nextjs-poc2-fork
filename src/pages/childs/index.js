import Childs from "@/components/Childs";
import client from "../../apollo-client";
import { GET_CHILDS } from "@/graphql/GetChilds";

function ChildList(props) {
  const { childs } = props;
  return <Childs childs={childs} />;
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_CHILDS });
  return {
    props: {
      childs: data.allChildren,
    },
  };
}

export default ChildList;
