import Carousel from 'react-bootstrap/Carousel';

function CarouselExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Augart/nglap/fallback/Under-40k_PC_Hero_3000x1200._CB566255759_.jpg" className="d-block w-100" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://m.media-amazon.com/images/I/61eOka58zdL._SX3000_.jpg" className="d-block w-100" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://m.media-amazon.com/images/I/61S9Jhqk8zL._SX3000_.jpg" className="d-block w-100" alt="..." />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselExample;