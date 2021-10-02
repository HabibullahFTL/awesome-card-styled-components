
import Card from './Card';
import { Container } from './styles/Containers.styles';

export default function Tutorial({setThemeName}) {
    return (
        <Container>
            <Card setThemeName={setThemeName}/>
        </Container>
    );
}