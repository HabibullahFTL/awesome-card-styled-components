
import nerdImage from '../assets/images/illustration.png';
import Button from "./Button";
import { StyledTitle } from './styles/Components.styles';
import { ButtonsContainer, CardContainer, ContentContainer } from './styles/Containers.styles';
import { H1, Image, P, Tag } from './styles/Elements.styles';

export default function Card({setThemeName}) {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag bgColor="#4361ee">EXCLUSIVE</Tag>
                <Tag bgColor="gray" onClick={()=>setThemeName((previousValue)=>previousValue === "dark" ? "light" : "dark")}>Change Theme</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonsContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonsContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}