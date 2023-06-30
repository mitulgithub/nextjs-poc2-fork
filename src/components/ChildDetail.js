import { GET_CHILD_BY_ID } from "@/graphql/GetChildById";
import { useQuery } from "@apollo/client";

function ChildDetail({ id }) {
  const { loading, data } = useQuery(GET_CHILD_BY_ID, {
    variables: { id },
  });
  
  if (loading) {
    return <h3>Loading ....</h3>;
  }
  if (data) {
    console.log("data", data);
  }
  return (
    data && (
      <>
        <h3>Child Details</h3>
        <p>{`Name = ${data.Child.name}`}</p>
        <p>{`Age = ${data.Child.age}`}</p>
        
      </>
    )
  );
}
export default ChildDetail;
