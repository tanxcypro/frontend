import { Container } from "react-bootstrap";

// import component
import DetailAbout from "../components/DetailAbout";

function About() {
  return (
    <Container className="text-center">
      <p style={{color:'white'}} className="h1">About Us</p>
      <p  style={{color:'white'}}>
        Maecenas bibendum vel tortor non congue. Maecenas at sodales turpis, id
        maximus odio. Donec aliquet elementum mauris, vel semper tortor ultrices
        a. Cras pulvinar tristique diam, vel lobortis lacus cursus quis. Morbi
        ante nibh, laoreet tincidunt fringilla non, fringilla ac ligula. Duis
        libero orci, rhoncus quis ultricies et, euismod sit amet purus. In
        mollis lectus nunc, vel tempus lorem lobortis id. Nullam maximus elit
        quis nibh gravida, ut hendrerit felis fringilla. Proin at aliquam
        tortor.
      </p>
     <DetailAbout  style={{color:'white'}} title="test title"/>
    </Container>
  );
}

export default About;
