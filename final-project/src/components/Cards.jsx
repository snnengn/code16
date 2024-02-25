import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Cards({ plaj }) {
  return (
    <Link className="text-decoration-none" to={`/plajlar/${plaj.id}`}>
      <Col className="my-2">
        <Card className="h-100 border-0 shadow">
          <Card.Img
            src={plaj.image}
            alt="..."
            position="top"
            className=""
            style={{ height: 250 }}
          />
          <Card.Body>
            <Card.Title>{plaj.ADI}</Card.Title>
            <p className="text-body-tertiary">{plaj.MAHALLE}-{plaj.ILCE}</p>
            <Card.Text>
              <p>Uzunluk: <h6>{plaj.PLAJ_UZUNL}</h6></p>
              <p>Genişlik: <h6>{plaj.ORTALAMA_G}</h6></p>
              <p>Soyunma Kabini: <h6>{plaj.SOYUNMA_KA} adet</h6></p>
              <p>Duş: <h6>{plaj.DUS_ADET} adet</h6></p>
              <p>Tuvalet: <h6>{plaj.TUVALET_AD} adet</h6></p>
              <p>Otopark: <h6>{plaj.OTOPARK_DU} adet</h6></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}

export default Cards;
