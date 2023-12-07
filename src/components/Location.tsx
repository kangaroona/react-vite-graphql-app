import { Ilcation } from "../types/location";
import { useQuery } from "@apollo/client";
// import { GET_LOCATIONS } from "../gql/location";
function Location() {
  return <div>xx</div>;
  // const { loading, error, data } = useQuery(GET_LOCATIONS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  // const locations: Ilcation[] = data.locations;
  // return locations.map(({ id, name, description, photo }) => (
  //   <div key={id}>
  //     <h3>{name}</h3>
  //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
  //     <br />
  //     <b>About this location:</b>
  //     <p>{description}</p>
  //     <br />
  //   </div>
  // ));
}

export default Location;
