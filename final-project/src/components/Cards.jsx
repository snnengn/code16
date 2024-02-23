
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards({data}) {
  return (
    <Row className='container mx-auto my-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {data.map(card => (
                <Col>

          <Card className='h-100 border-0 shadow'>
            <Card.Img src={card.image}
            alt='...'
            position='top'
            className=''
            style={{height:250}}
          />
            <Card.Body>
              <Card.Title>{card.ADI}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                  ))}
    </Row>
  );
}

export default Cards;