import { Button, Row, Col, Image, ListGroup, Form } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import {useState, useEffect} from 'react'


const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const navigation = useNavigate();
  const { id } = params;
  const[products,setProducts]=useState(null)
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)
    useEffect(() =>{
        fetch("http://localhost:5000/api/products/" +id)
        .then((res) =>{
            return res.json();
        })
        .then((data) =>{
            console.log(data)
            setProducts(data);
            setLoading(false);
            setError(null);
        })
        .catch((err) =>{
            console.log(err);
            setError("Some thing bad happen");
            setLoading(false);
        })
    },[id])



  const handleBackClick = () => {
    navigation(-1);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  return (
    <>
      <Row className="my-2">
        <Col>
          <Button onClick={handleBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Col>
      </Row>
      {error && error}
      {loading && <h1>Loading ....</h1>}
      {products && (
        <Row className="my-2">
          <Col lg={5}>
            <Image src={products.image} alt={products.name} fluid />
          </Col>
          <Col lg={4}>
            <ListGroup className='pro'>
              <ListGroup.Item>{products.name}</ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={products.rating}
                  text={`from ${products.numReviews} users`}
                />
              </ListGroup.Item>
              <ListGroup.Item className="fw-bold">
                Price : {products.price}/-
              </ListGroup.Item>
              <ListGroup.Item>Category : {products.category}</ListGroup.Item>
              <ListGroup.Item className="text-capitalize">
                Color : {products.color}
              </ListGroup.Item>
              <ListGroup.Item>Fabric : {products.fabric}</ListGroup.Item>
              <ListGroup.Item>
                Description : {products.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3}>
            <ListGroup className="sub">
              <ListGroup.Item>
                <div>
                  <h4>Subtotal Rs.{products.price * qty}/-</h4>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                Stock :{" "}
                {products.countInStock > 0 ? (
                  <span className="text-success">Available</span>
                ) : (
                  <span className="text-danger">Out of Stock</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col lg={5}>
                    <Form.Label>Quantity:</Form.Label>
                  </Col>
                  <Col lg={7}>
                    <Form.Select
                      disabled={products.countInStock <= 0}
                      onChange={handleQtyChange}
                      className="fo"
                    >
                      {[...Array(products.countInStock).keys()].map(
                        (option) =>
                          option < 16 && (
                            <option value={option + 1} key={option}>{option + 1}</option>
                          )
                      )}
                    </Form.Select>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button disabled={products.countInStock <= 0}>
                    Add to cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};
export default ProductScreen;
