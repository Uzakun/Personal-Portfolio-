import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import AiVidtoGIF from "../assets/img/AiVidtoGIF.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/projImg1.jpeg";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.jpeg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsFront = [
    {
      title: "Tasty Treasures",
      description: "Delicious delights, savory treasure.",
      imgUrl: projImg2,
      link: "https://uzakun.github.io/Tasty-Treasures-Landing-Page/",
    },
    {
      title: "Textutils",
      description: "Efficient text editing toolkit online.",
      imgUrl: projImg3,
      link: "https://uzakun.github.io/textUtils-react/",
    },
    {
      title: "Tindog",
      description: "Dating app for your beautiful dogs",
      imgUrl: projImg4,
      link: "https://uzakun.github.io/tindog/",
    },
  ];

  const projectsMern = [
    {
      title: "Mindful Pulse - Mental Health",
      description: "Empowering minds, fostering mental wellness.",
      imgUrl: projImg1,
      link: "https://github.com/Uzakun/Mindful-Pulse",
    },
  ];

  const projectsFull = [
    {
      title: "AI Video to GIF",
      description: "Transform videos into perfect GIFs with AI powered captions ✨",
      imgUrl: AiVidtoGIF,
      link: "https://vidtogif.work.gd/",
    },
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've developed a diverse range of full-stack applications to solve real-world problems. For instance, I built an AI-powered tool that automatically generates captioned GIFs from videos based on simple text prompts. I also created a complete MERN stack mental health application to provide community support and mindfulness resources. Additionally, I engineered a visually appealing and fully responsive website, ensuring a seamless experience on any device.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mern Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Frontend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsFull.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsMern.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsFront.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
