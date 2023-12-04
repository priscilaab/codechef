import { Col, Row } from "reactstrap"
import ItemCardapio from "../components/ItemCardapio"
import teokbokki from '../images/teokbokki.webp';
import bibimbap from '../images/bibimbap.webp';
import kimbap from '../images/kimbap.jpg';
import jajangmyeon from '../images/jajangmyeon.jpg';
import cbulgogi from '../images/cbulgogi.webp';
import bulgogi from '../images/bulgogi.jpg';
import kimchijjigae from '../images/kimchijjigae.webp';
import bungeoppang from '../images/bungeoppang.jpg';



function Cardapio() {
    return (
        <div>
            <Row>
                <Col>
                    <h1 className="display-4 text-center">Nosso cardápio</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ItemCardapio titulo="Bungeoppang" img={bungeoppang} descricao="Bolinhos doce recheado: Pasta de feijão vermelho, Chocolate ou Creme "/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Kimchi-Jjigae" img={kimchijjigae} descricao="Arroz, 80 gr de Tofu, 100gr de barriga de porco, cebola, cebolinha, kimchi, gochujang (pasta), gochujang (em flocos) "/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Bugolgi" img={bulgogi} descricao="Arroz, 300gr de alcatra, cebolinha, gergilim, molho de soja, pêra, cenoura, abobrinha, repolho roxo, pimentão verde "/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Tteokbokki" img={teokbokki} descricao="Tteok (massa de arroz), omuk (massa de peixe), cebola, cebolinha, gochujang (pimenta coreana)"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ItemCardapio titulo="Bibimbap" img={bibimbap} descricao="Arroz, ovo, cogumelos Paris, abobrinha, gergelim, cenoura, broto de feijão, 300 g de filé mignon em tirinhas, espinafre, molho picante"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Kimbap" img={kimbap} descricao="Arroz, cenoura, pepino, nabo em conserva, pimentão vermelho, espinafre, filé mignon" />
                </Col>
                <Col>
                    <ItemCardapio titulo="Jajangmyeon" img={jajangmyeon} descricao="Macarrão Udon, jajang (pasta de soja preta), cebola, repolho, 300 gr de lombo suíno"/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Chicken Bulgogi" img={cbulgogi} descricao="Arroz, 300gr de frango, cebolinha, mel, gergilim, molho de soja, gengibre, cenoura, broto de feijão "/>
                </Col>
                
            </Row>
          
        </div>
    )
}
export default Cardapio