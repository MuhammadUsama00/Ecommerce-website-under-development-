import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";
const Product = ({ product }) => {
  return (
    <Card className="product-card">
      <Card.Img
        className="product-card-img"
        variant="top"
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text as="h5">Rs: {product.price} /-</Card.Text>
        <Rating
          value={product.rating}
          text={`from ${product.numReviews} users`}
        />
      </Card.Body>
      <Card.Body className="d-grid">
        <LinkContainer to={`/product/${product._id}`}>
          <Button>Add to cart</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default Product;
