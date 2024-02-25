import Row from "react-bootstrap/esm/Row";
import Karacabey from "../HavaDurumu/Karacabey";
import Mudanya from "../HavaDurumu/Mudanya";
import Gemlik from "../HavaDurumu/Gemlik";
import Iznik from "../HavaDurumu/Iznik";
const HavaDurumu = () => {
  return (
    <Row className="container mx-auto my-3 border p-3 rounded row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 bg-light">
      <Karacabey />
      <Mudanya />
      <Gemlik />
      <Iznik />
    </Row>
  );
};

export default HavaDurumu;
