import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <div className="carousel_wrapper">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_banners_main/d7/7f/d77f7e918a19833302032a7fddfa707a0d52cc54dbc86fd796e1f0d343ccaadd.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_banners_main/b6/8f/b68f9a216cdd73167daf27af034e88f1ca7a11737b0d4d33b929347dc485ce53.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_banners_main/41/20/41204f84ac5b45e9ddb28cfd847ec017d0ca0a365a3a4378fc398ce50649325d.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_banners_main/8c/e0/8ce038653ca44c6460a65a63aa0563d922b170091b82141862b65a8a58fc9ef0.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload/site_banners_main/3a/79/3a792047f6f3c91e24fa69048f5203a3a7e4148c5f0917bd685558c32b7cc64e.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carousel_image">
        <img
          src="https://online-apteka.com.ua/assets/images/banner/%D0%9A%D0%92%D0%97/%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%20%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D0%BA%D1%83%D0%BC%D1%8B%20(%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80).jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default UncontrolledExample;
