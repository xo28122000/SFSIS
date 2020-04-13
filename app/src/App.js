import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./App.css";

const Card = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="card-root">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Candidate Statement</ModalHeader>
        <ModalBody>
          For me, being a member of the student government means channelling the
          energy that we all bring along to trigger a positive change in
          everyone's life here in SFSU. My name is Jainam Shah and I am a junior
          studying Computer Science at SF State. My focus, if elected, would be
          to make the existing resources and inventory more accessible and
          prominent and to increase the networking and inclusivity within the
          gator community. I was surprised to find out that many of my
          associates were unaware of the amazing resources and services like
          online tutoring and the AS food pantry offered by our university. So
          instead of introducing something entirely new, I would like to make
          the existing amenities more recognised so that its utilisation is
          maximised! I would do so by advocating the shortcomings which lead to
          the underutilisation and act to overcome them. Secondly, I want to
          promote the connectivity and networking aspect of our community. I
          want to build strong interconnections within our community to create a
          help and support chain that could guide us in hardships, as many of us
          may currently be in, and cope up. To accomplish that I would promote
          and encourage organising inclusive events and activities hence
          defining and strengthening our gator community.
        </ModalBody>
      </Modal>
      <div className="card-video-root">
        <video
          width="100%"
          height="auto"
          controls
          style={{ borderRadius: "10px" }}
        >
          <source src={require("./assets/videos/VP F.MOV")} type="video/mp4" />
        </video>
      </div>
      <div className="card-right-root">
        <div className="card-img-root">
          <img
            src={require("./assets/images/jainam1.jpg")}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px"
            }}
          />
        </div>
        <div className="card-desc-root">
          <div className="card-desc-lines">Hey I'm Jainam Shah!</div>
          <div className="card-desc-lines">
            I'm standing for the role of Science and Engineering Rep!
          </div>
          <div className="card-desc-footer-button">
            <Button style={{ backgroundColor: "#8a4af3" }} onClick={toggle}>
              My candidate statement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div id="App-root">
      <Card />
      <Card />
    </div>
  );
}

export default App;
