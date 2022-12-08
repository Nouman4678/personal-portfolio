import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/covid19-tracker.png";
import projImg2 from "../assets/img/youtube-clone.png";
import projImg3 from "../assets/img/simongame.png";
import projImg4 from "../assets/img/restaurant.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Covid-19 Tracker",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Youtube Clone",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Simon Game",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Restaurant Site",
      description: "Design & Development",
      imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="imag"></img>
    </section>
  )
}
