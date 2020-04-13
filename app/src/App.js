import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./App.css";

const Card = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="card-root">
      <Modal isOpen={modal} toggle={toggle} size="lg" style={{ width: "80vw" }}>
        <ModalHeader toggle={toggle}>Candidate Statement</ModalHeader>
        <ModalBody>
          <p style={{ whiteSpace: "pre-line" }}>{props.canStat}</p>
        </ModalBody>
      </Modal>
      {props.hasVideo ? (
        <div className="card-conatiner">
          <div className="card-video-root">
            <video
              width="100%"
              height="auto"
              controls
              style={{ borderRadius: "10px" }}
            >
              <source src={props.vidSrc} type="video/mp4" />
            </video>
          </div>
          <div className="card-right-root">
            <div className="card-img-root">
              <img
                src={props.imgSrc}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div className="card-desc-root">
              <div className="card-desc-lines">Hey I'm {props.name}!</div>
              <div className="card-desc-lines">
                I'm standing for the role of {props.position}!
              </div>
              <div className="card-desc-footer-button">
                <Button style={{ backgroundColor: "#8a4af3" }} onClick={toggle}>
                  My candidate statement
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-conatiner">
          <div className="card-video-root">
            <img
              src={props.imgSrc}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px"
              }}
            />
          </div>
          <div className="card-right-root">
            {/* <div className="card-img-root"></div> */}
            <div className="card-desc-root">
              <div className="card-desc-lines">Hey I'm {props.name}!</div>
              <div className="card-desc-lines">
                I'm standing for the role of {props.position}!
              </div>
              <div className="card-desc-footer-button">
                <Button style={{ backgroundColor: "#8a4af3" }} onClick={toggle}>
                  My candidate statement
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div id="App-root">
      <Card
        name="Alondra Esquivel"
        hasVideo={true}
        vidSrc={require("./assets/videos/VP F.MOV")}
        imgSrc={require("./assets/images/alondra2.JPG")}
        position={"VP Facilities & Services"}
        canStat={`Hello Gators! I’m Alondra Esquivel Garcia and I’m running as your next VP of Facilities and Services for Associated Students. Currently, I’m third year double majoring in Political Science and Race & Resistance Studies. As a first generation college student, I have learned that advocating for others and public service is necessary. I’m passionate about helping those in need and getting projects started.
\n\n
        To ensure success and inclusivity, SF State needs to start to provide more basic need resources.
        \n\n
        My goals if elected are to:\n
        1. Establish an Off-Campus Housing Resource Center.\n
        Currently, 17% of students attending SF State are housing insecure. Students need a reliable and safe office that can help them find affordable housing in the Bay Area. \n
        2. Expand Multi-Stall Gender Neutral Restrooms.\n
        Students who are non-binary need a safe and non-gender confirming multi-stall restrooms that they can use at all hours a day. The single stall restrooms are being used as ADA compliant, family restrooms, and gender neutral. Students fear using these restrooms because there are others who need to use them as well. \n
        3. Provide FREE Menstrual Products in EVERY Restroom\n
        Not only do females menstruate, but others who are non binary and male menstruate as well. By providing free menstrual products in every restroom, we can ensure we are helping those who menstruate and combating the stigma. \n
        
        \nI know I can devote my time and effort to get these goals done in the next year. Vote Alondra for VP of Facilities and Services. 
        
        `}
      />
      <Card
        name="Andrew Carrillo"
        hasVideo={false}
        imgSrc={require("./assets/images/andrew1.JPG")}
        position={"President"}
        canStat={`Hello everyone! My name is Andrew Carrillo and I am running to be your next Associated Students President. I am running for multiple reasons, but they are centered around my belief that Associated Students should be serving the needs of every student on campus. Whether you are a first year student just arriving at SFSU or a graduating senior who is ready for the next chapter of life you should feel supported by your student government. One of my main priorities would be to establish a Basic Needs Program that focuses on supporting students who are in need of groceries, hygiene products, and especially provide a centralized hub where students are given information and options for affordable housing in the area. I will work tirelessly to increase funding and resources for AS Programs like Project Connect and the Women's Center so they feel supported by their student government. Lastly, I believe there needs to be greater access to space for student organizations. There needs to be more space on campus where student organizations can gather for meetings, store their organization materials, and host events free of cost.

\n\nStudent voices are powerful when we stand united in a common cause. We at San Francisco State know this too well, we are the change makers, the reformers, the activists who throughout the decades have fought and demanded for a better educational experience. I would be truly honored to have your support and vote in mission to make San Francisco State a more equitable campus.
`}
      />
      <Card
        name="Brittany Nguyen"
        hasVideo={false}
        imgSrc={require("./assets/images/brittany1.JPG")}
        position={"Graduate Studies Representative"}
        canStat={`Being a 1st year graduate student, I had to learn and navigate the resources and what services were available for me. I can imagine how many other students who may experience the same way of trying to navigate and find support so that they can excel being a student here - and I want to help. Which is why I am running to be your next Graduate Representative because I want to initiate dialogue and create tangible steps toproduce positive changes for the benefit of our graduate student community.

        \n\nIf elected to be your next Graduate Representative, my 5 main goals I hope to accomplish is to:
        \n1. Provide more transparency and open communication with graduate students so that they are aware of what Associated Students and the Division of Graduate Student resources and services are available to utilize
        \n2. Advocate for a communal space for ALL graduate students to build community with one another and collaborate together for future projects
        \n3. Establish an alumni networking event where graduate students can connect with alumni who are out in the field
        \n4. Increase student engagement with our undergraduate students 
        \n5. Advocate for more financial aid and resources for graduate students 
        
        \n\nI am counting on your vote and if elected, I will do my best to advocate our graduate student community and take action that will help us graduate students thrive and succeed here at SF State. 
        
        \n\nWarm Regards,
        \nBrittnay Nguyen
        `}
      />
      <Card
        name="Chantel Bermudez"
        hasVideo={false}
        imgSrc={require("./assets/images/chantel3.JPG")}
        position={"VP Social Justice & Equity"}
        canStat={`As the daughter of an Immigrant, student of the ethnic studies college, and the product of an education
        system which has failed me countless times, resistance has become the dedication of my work.
        \n\nMy future goals and objectives if elected is to tackle the issues YOU experience. An issue you feel is not
        being represented or your story which you feel is consistently silenced. Whether you're one person who
        experienced one challenge, or countless more, your story is worth fighting for.
        \n\nAs VP of Social Justice and Equity I will continue to remind our administration what they have
        consistently forgotten, who has built this campus: students who fought for equity.
        \n\nMy past activism on this campus has been comprised of successfully serving students through:
        \n*Creation of the first Planned Parenthood Gen Action organization
        \n*Passing a document on behalf of CSU Students opposing federal laws under Trump Administration that
        would seriously harm survivors of assault
        \n*Consistently confronting the Title IX department head on & demanding equity
        \n*Fighting for more counselors (specifically those who represent our diverse student population)
        \n*Modeling a space, for students by students, dedicated to serving survivors of assault on this campus
        \n\nThis position was made for YOUR voice and YOUR inequities to be heard.
        Elected or not, that has been and will continue to be my mission
        You will be heard and we will be unapologetic like those before us.`}
      />
      <Card
        name="Ja' Corey"
        hasVideo={false}
        imgSrc={require("./assets/images/jacorey1.JPG")}
        position={"Ethnic Studies Representative"}
        canStat={`Hello Gators, I’m running for this position because I believe I can bring a voice to the ethnic studies college that has been long been silent. If elected I would become an advocate for the students of our college and make sure we have a voice in important decisions such as funding and class availability. I believe that in working with the elected administration and peers within the college, together we can secure the resources and funding we deserve.
        `}
      />
      <Card
        name="Jainam Shah"
        hasVideo={false}
        imgSrc={require("./assets/images/jainam1.jpg")}
        position={"Science and Engineering Representative"}
        canStat={`For me, being a member of the student government means channelling the energy that we all bring along to trigger a positive change in everyone's life here in SFSU.

        \n\nMy name is Jainam Shah and I am a junior studying Computer Science at SF State. My focus, if elected, would be to make the existing resources and inventory more accessible and prominent and to increase the networking and inclusivity within the gator community. 
        
        \n\nI was surprised to find out that many of my associates were unaware of the amazing resources and services like online tutoring and the AS food pantry offered by our university. So instead of introducing something entirely new, I would like to make the existing amenities more recognised so that its utilisation is maximised! I would do so by advocating the shortcomings which lead to the underutilisation and act to overcome them.
        
        \n\nSecondly, I want to promote the connectivity and networking aspect of our community. I want to build strong interconnections within our community to create a help and support chain that could guide us in hardships, as many of us may currently be in, and cope up. To accomplish that I would promote and encourage organising inclusive events and activities hence defining and strengthening our gator community. 
        `}
      />
      <Card
        name="Joshua Ochoa"
        hasVideo={false}
        imgSrc={require("./assets/images/joshua1.jpg")}
        position={"VP External Affairs"}
        canStat={`Here at San Francisco State, students often feel unrepresented and unheard by our university and student government. Too often, students struggle with food insecurity, housing insecurity, financial insecurity, and the lack of financial aid.
 
\n\nOur students continue to feel that they don’t have a say in the decisions being made on campus, and our student government doesn’t do enough to reach out and hear students’ voices directly. These are the reasons why I'm running to be the Vice President of External Affairs.
  
 \n\nAs your next Vice President of External Affairs:
 \n1. I will fight for students' voices against powerful interests, and protect our student rights.
  \n2. I will fight for more financial aid and basic needs resources for SF State and for the entire CSU.
  \n3. I will fight for a more affordable CSU, and fight against any increase in CSU tuition.
  \n4. I will fight for more affordable housing and transportation for our students.
  \n5. I will fight for more financial resources for our student clubs, organizations, and programs.
 \nIf elected, I will stand up for you and every student on this campus to make sure that your voice is heard, and that our student government fights for and is held accountable to students.
  
 \n\nI would honored to have your vote and your help to make positive change here at SF State.
  
 \n\nIn Solidarity,
 \nJoshua Ochoa.
 \n#Ochoa4VPExternalAffairs
 `}
      />
      <Card
        name="Rashid A Rahman"
        hasVideo={false}
        imgSrc={require("./assets/images/rashid1.jpg")}
        position={"VP Finance"}
        canStat={`Hello, Fellow Gators! I’m Rashid Abdul Rahiman and I am currently a Junior in SF State. I’m
majoring in Finance and minoring in Decision Science. I’m running to be your next Vice
President of Finance because I want to make big impact by making productive changes. 
\n\nAs an international student, SF State has become my home away from home. The diversity at SF
State is represented by all the different clubs and organizations we have on campus. I believe
they help shape students’ experiences by offering a sense of belonging and campus involvement.
Student organizations are a vital part of the campus and I&#39;m determined to strengthen the
relationship between the organizations and Associated Students. I ensure to help our clubs and
organizations are well advocated for by ensuring better funding resources and proposal to ease
the funding process.
\n\nIf elected as VP of Finance, I hope to bring major change in the communication process and
encourage better facilitation of student org. funding. Student’s currently pay two different
student fees to Associated Students and students should have the right to know where their
money is going. I’m dedicated to maintaining transparency in regards to the budget that will be
given to me when elected.
\n\nVote for Rashid Abdul Rahiman as your 2020-2021 VP of Finance. He will ensure transparency
and advocacy in the AS Budget.`}
      />
      <Card
        name="Samiksha Nehra"
        hasVideo={false}
        imgSrc={require("./assets/images/samiksha1.JPG")}
        position={"Business Representative"}
        canStat={`Hello Gators, I am Samiksha Nehra, and I am running for Associated student Business
        Representative. My major is business administration in finance and I am currently in my junior
        year.  During this time at San Francisco State University, I have learned the knowledge of
        different functional areas into business solutions which is most important in college of business.
        I will try to increase the number of counselors for the college of business. I will also try San
        Francisco State University business alumni to meet current students to help them with the job
        opportunities and to guide them to a successful path after they graduate from San Francisco
        State University. Student alumni can help the student with business ethics, business solutions,
        and sustainability issues in business. I will try everything that will make college of business more
        interesting overall.`}
      />
      <Card
        name="Tatiana Orellana"
        hasVideo={false}
        imgSrc={require("./assets/images/tatiana1.PNG")}
        position={"Health and Social Sciences Representative"}
        canStat={``}
      />
      <Card
        name="Ty Lewis"
        hasVideo={false}
        imgSrc={require("./assets/images/ty1.JPG")}
        position={"Liberal and Creative Arts Representative"}
        canStat={``}
      />
      <Card
        name="Zoram Mercado"
        hasVideo={false}
        imgSrc={require("./assets/images/zoram1.png")}
        position={"VP Internal Affairs"}
        canStat={`“Being involved as a student organization leader for my entire college career, has taught me 1st hand the lack of representation and involvement students have in decisions that directly affect students. As VP of Internal Affairs, my focus will lie in updating students, making meetings accessible, and physically making sure the voices of students are heard and implemented. There are far too many resources that students are not aware of. I will ensure that students understand what is available to them and implement their feedback for the resources that do not satisfyingly meet their needs. College students in San Francisco lack basic needs, such as food, housing, health wellness, and legal resources. There are many young efforts on campus that are tackling these issues but must be enhanced and unified with the help of students to be fully effective. My experience as a community organizer has taught me how to bring students together and apply their strengths to the collective vision. I always make sure that I bring ideas to the table as well as keep my vision flexible. I do not have all the solutions nor answers, but I do not hesitate to reach out to people and collect perspectives from students, faculty, and staff of all backgrounds. Perspective derives from the intersectionality of sexuality, gender, race, nationality, ethnicity, residency status, job status, career of interest, socioeconomic class, and religion. Making an effort to understand and apply these perspectives is key to executing a goal towards a healthy community.”`}
      />
    </div>
  );
}

export default App;
