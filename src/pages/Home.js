import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";
import teokbokki from '../images/teokbokki.webp';
import bibimbap from '../images/bibimbap.webp';
import kimbap from '../images/kimbap.jpg';
import jajangmyeon from '../images/jajangmyeon.jpg';

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Tteokbokki" img={teokbokki} descricao="Tteok (massa de arroz), omuk (massa de peixe), cebola, cebolinha, gochujang (pimenta coreana)"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Bibimbap" img={bibimbap} descricao="Arroz, ovo, cogumelos paris, abobrinha, gergelim, cenoura, broto de feijão, 300 g de filé mignon em tirinhas, espinafre, molho picante"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Kimbap" img={kimbap} descricao="Arroz, cenoura, pepino, nabo em conserva, pimentão vermelho, espinafre, filé mignon"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Jajangmyeon" img={jajangmyeon} descricao="Macarrão Udon, jajang (pasta de soja preta), cebola, repolho, 300 gr de lombo suíno" />
                </Col>
            </Row>
        </div>
    )
}
export default Home;