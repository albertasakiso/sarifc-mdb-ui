import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
} from 'mdb-react-ui-kit'

import newscard1 from '../assets/pictures/individual/red_Ambassador.jpg'
import newscard2 from '../assets/pictures/teampictures/match2.jpg'
import newscard3 from '../assets/pictures/teampictures/team4.jpg'
import newscard4 from '../assets/pictures/teampictures/team10.jpg'

//gallery pictures

import gallery1 from '../assets/pictures/IMG_20211228_154707_633.jpg'
import gallery2 from '../assets/pictures/ramadam_karim1.jpg'
import gallery3 from '../assets/pictures/IMG_20220105_174136_857.jpg'
import gallery4 from '../assets/pictures//teampictures/corevaluesinceo1.jpg'
import gallery5 from '../assets/pictures/IMG_20211231_163205_747.jpg'
import gallery6 from '../assets/pictures/happy_easter.jpg'

import coverimage from '../assets/cover/sarifcteamphotovsarrowheads.jpg'
function LatestNews() {
  const [scrollableModal, setScrollableModal] = useState(false)

  const [centredModal, setCentredModal] = useState(false)

  const toggleShow = () => setCentredModal(!centredModal)

  return (
    <>
      <NavBar />

      {/* news page image background cover */}
      <div
        className=' mt-0 text-center bg-image shadow-1-strong'
        style={{
          // 'url("http://localhost:3000/static/media/IMG_20211228_154707_633.1b8e0a6f.jpg")'
          backgroundImage: `url(${gallery1})`,
          height: 400,
          marginTop: 58,
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>LATEST NEWS</h1>
              <h4>
                Match Reports, Upcoming Matches, Training and General News
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/*  news temps */}
      <main>
        <div className='container-fluid bg-light text-dark'>
          <hr className='mb-5 mt-3' />
          <section
            className='section extra-margins pb-3 mt-4 wow fadeIn'
            data-wow-delay='0.3s'
          >
            {/*Grid row*/}

            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard2} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Sari FC is the Best Division 3 Football Club in Northern
                      Ghana
                    </h4>

                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Football, the most popular sport on the planet, has the
                      magic ingredient to touch lives from far no matter where
                      it’s played. Godwin Apullah aka DJ Ambassador, is a
                      Tamale-based football manager, building technologist,
                      philanthropist, and an entrepreneur who founded the Sari
                      FC football club.
                    </p>
                    {/* <MDBBtn
                      outline
                      rounded
                      // className='justify-content'
                      // href='/news/1'
                    >
                      Read More
                    </MDBBtn> */}
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              Sari FC is the Best Division 3 Football Club in
                              Northern Ghana. The Sari FC sports club is located
                              in Nyankpala, Tolon District. Nyankpala is a
                              popular community in the Northern Region of Ghana,
                              well-known for hosting the Agriculture campus of
                              the University for Development Studies (UDS). As
                              an experienced player and a football fanatic,
                              Godwin is the head coach of Sari FC. Over the past
                              years, he has been investing his resources in
                              discovering and grooming the talents of both
                              juvenile and senior players in and around
                              Nyankpala.
                            </p>
                            <p>
                              Due to his good leadership skills and commitment
                              to the team, the Sari FC football club in Northern
                              Ghana is going places. It’s one of the most
                              promising football clubs in the lower divisions
                              that will soon take over the Ghana football
                              industry by storm. The ultimate goal of DJ
                              Ambassador and the Sari FC club is to progress to
                              the highest level of professional football league
                              system in Ghana (the Ghana Premier League).
                            </p>
                            <p>
                              And if you look at their statistics, the future
                              looks very bright for Sari FC. With maximum
                              support from stakeholders, Sari FC can make a
                              quantum leap to the top in the next few years. For
                              example, as a division 3 team, Sari FC has been
                              competing with division 2 teams such as Arrow
                              Heads. Their matches are always a delight to watch
                              since the football club has skillful young with
                              players who are very passionate about the game.
                              These lads show their determination to conquer
                              barriers both on the pitch and outside the pitch.
                            </p>
                            <p>
                              Before the Covid-19 burst into the scenes to
                              disrupt the calendar of Ghanaian football
                              competitions, Sari FC never missed their training
                              sessions. The club wants to raise their standards.
                              On September 20, President Akufo Addo in his 17th
                              Covid-19 update, lifted the ban on contact sports
                              in Ghana. Management of the Sari FC football
                              received this information with delighted hearts.
                              So, their boys are back on the pitch to start
                              their normal training while obeying the safety
                              protocols. Head coach Godwin has declared his
                              intention to strengthen his squad this summer.
                              Talenter soccer players in Nyankpala within the
                              age of 25-15 may want to grab this golden
                              opportunity before the transfer window closes.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Why Ghana Juvenile Football League is Not Producing Great
                      Talents
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Do you wonder why Ghana juvenile football league is not
                      producing fine talents to take Ghana to the top of world
                      football?” Godwin Apullah, head coach of division 3 club
                      Sari FC, believes it is due to these two main factors; age
                      cheating and lack of quality coaches.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              I don’t mean to sound like I am on a tangent or
                              anything, but I felt since I do have the platform
                              to voice some of the issues, why not?
                              Additionally, my hope is that maybe once a
                              conversation has begun, then maybe we can start to
                              turn things around. First off, I would like to say
                              that my perspective comes from two sides. Not only
                              have I watched countless youth football games, but
                              I’m also a Youth coach. I prefaced my column with
                              that, so people will have an idea of where I am
                              coming from. Age fraud is age fabrication or the
                              use of false documentation to gain an advantage
                              over opponents. In football, it is common amongst
                              players belonging to clubs and associations where
                              records are not easily verifiable, especially the
                              local level. The media often refer to the player
                              with false documentation as an “age-cheat”. There
                              are several reasons why players choose to use
                              false documentation. Clubs want to win Ghana
                              juvenile football league while European scouts and
                              academics are looking for young talented players
                              from poorer countries and clubs to sign. The
                              players know that there is a lesser chance of
                              being signed if they are, for example, 23 years
                              old as opposed to 15 or 13 years old as there
                              would be less time for the club to develop the
                              player. Age fabrication also allows an older
                              player to enter in youth competitions. FIFA says
                              that “over-age players have been wrongly entered
                              into various youth competitions, often benefiting
                              from an unfair advantage due to their greater
                              physical maturity compared to players of the
                              proper age.” In some cases, it is possible for the
                              player not to know their own date of birth and
                              make an approximate guess when it comes to gaining
                              official documents. Biased selection into the
                              various national teams is one factor, and none is
                              guilty of this than club chairmen, administrators
                              and coaches. Players knowingly cheat on the ages
                              because they know it is difficult to get spotted
                              and recruited to play top club sides or the
                              national teams. Corrupt club officials also do it
                              to take advantage of boys.
                            </p>
                            <p>
                              Age-cheating: a major reason why Ghana Juvenile
                              Football League is not producing great talents Age
                              cheating i.e. using only a child’s level of
                              education to determine his age is basically wrong
                              at the local level because children don’t have the
                              same opportunity of starting their education at
                              the same time due to different valued reasons.
                              Juvenile football is not about winning but
                              development. But how will a coach convince the kid
                              who may lose all his league games because of age
                              imbalance in a league? I have a bigger issue with
                              bad coaching on the youth level in football
                              because a coach giving bad technique in football
                              can potentially be life threatening likewise age
                              cheating. One of my main problems with youth
                              football is the lack of quality coaches to fill
                              all the roles available. I have personally
                              witnessed a coach teaching bad tackling technique
                              to a young player around the age of 10. I’m sure I
                              don’t have to tell anyone the dangers of teaching
                              a player the wrong tackling technique. To think an
                              incident like this is singular would be very
                              naïve. I would hate to see a kid become paralyzed
                              because of bad coaching; that is a scary thought
                              to say the least. Every coach has to take HEADS UP
                              training, but is that enough? We have to do more
                              for our kids so we can minimize the risk of the
                              game as much as possible.
                            </p>
                            <p>
                              GFA should offer free coaching courses for Ghana
                              juvenile football league managers I therefore
                              implore the Ghana Football Association GFA in
                              collaboration with the Regional and District
                              Football Associations to run compulsory free
                              license D coaching certification courses for all
                              coaches in Ghana juvenile football league systems.
                              Quality coaches can only be effective if the
                              facilities and equipment are available to them.
                              Recently, Baba Rahman donated Footballs, Jerseys
                              and other equipment to juvenile football clubs in
                              Tamale Metro and Sagenaregu Municipal. I wish to
                              use this opportunity to appeal to other players
                              and businessmen to invest in juvenile football.
                              Juvenile football was created to teach the kids
                              the game and for them to develop character and
                              life skills. Some coaches have used the sport to
                              live out their dreams and bolster their resume,
                              which is sad. We need to get back to having the
                              focus on the kids and not a coach’s win/loss
                              record.
                            </p>
                            I grew up in an era where coaches sometimes made you
                            run until you threw up, so I am not sensitive by any
                            stretch of the imagination. My problem isn’t with
                            coaches disciplining or coaching their players, but
                            with the excessiveness of it. It seems some of these
                            coaches live through their players and if the team
                            loses, they take it harder than the players. I
                            appreciate a coach who feels bad when the team does
                            not win, but to belittle and demean his players in
                            front of their teammates is something that I have
                            witnessed way too often. I took it hard when my team
                            lost, but I used that as a means to teach the kids
                            something, rather than humiliating the child.
                            Prepare and standard Juvenile football is key to
                            Ghana‘s football success. Written By: Godwin A.
                            Apullah (Coach Ambassador)
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={gallery1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Club Friendly : SARI FC 1 – 4 Shooting Stars
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Sari Fc, Nyankpala based division three club engaged the
                      division two side, Nyankpala Shooting Stars in a friendly
                      encounter. The game that produced immense quality display
                      from the two teams.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              The build up to the game and the buzz surrounding
                              the SARI Park was an intensed one, as the only
                              division two team in the district taking on one of
                              the best division three clubs in the district,
                              Tolon. Both clubs being located in Nyankpala
                              pulled a large crowd to witness what could be
                              described as one of the most entertaining games in
                              recent times.
                            </p>
                            <p>
                              The match was handled by an experienced referee
                              ,Mr Mohammed who showed class and professionalism
                              ensuring that the match ended smoothly despite the
                              two clubs being clubs from same town. The home
                              team took the lead on the 29th minute as Skipper
                              Adam, capitalized on a defensive error to assist
                              his side’s striker, Mohammed to score the opener.
                              The away team, Nyankpala Shooting Stars equalized
                              from a counter attack as Goalkeeper Mahamud could
                              not hold onto the ball as it slipped into the net
                              on the half mark.
                            </p>
                            <p>
                              The first half ended with 1 – 1 scoreline. The
                              second half started poorly for the home team, Sari
                              Fc as they conceded on the 47th minute. The
                              visitors took control of the match and increased
                              their lead on the 50th minute to make it 1-3. The
                              home side struggled to get back into the game but
                              right winger, Sasco missed a glaring chance to
                              reduce the deficit. The division two side,
                              Shooting Stars finally put the game to bed as the
                              ball from an indirect free kick found its way into
                              the net on the 80th minute . The home side showed
                              their class at the later part of the game but
                              nothing came from it. Proceedings were brought to
                              an end by the referee with Nyankpala Shooting
                              Stars winning the match by 4-1.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
            </div>
            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard2} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Sari FC is the Best Division 3 Football Club in Northern
                      Ghana
                    </h4>

                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Football, the most popular sport on the planet, has the
                      magic ingredient to touch lives from far no matter where
                      it’s played. Godwin Apullah aka DJ Ambassador, is a
                      Tamale-based football manager, building technologist,
                      philanthropist, and an entrepreneur who founded the Sari
                      FC football club.
                    </p>
                    {/* <MDBBtn
                      outline
                      rounded
                      // className='justify-content'
                      // href='/news/1'
                    >
                      Read More
                    </MDBBtn> */}
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              Sari FC is the Best Division 3 Football Club in
                              Northern Ghana. The Sari FC sports club is located
                              in Nyankpala, Tolon District. Nyankpala is a
                              popular community in the Northern Region of Ghana,
                              well-known for hosting the Agriculture campus of
                              the University for Development Studies (UDS). As
                              an experienced player and a football fanatic,
                              Godwin is the head coach of Sari FC. Over the past
                              years, he has been investing his resources in
                              discovering and grooming the talents of both
                              juvenile and senior players in and around
                              Nyankpala.
                            </p>
                            <p>
                              Due to his good leadership skills and commitment
                              to the team, the Sari FC football club in Northern
                              Ghana is going places. It’s one of the most
                              promising football clubs in the lower divisions
                              that will soon take over the Ghana football
                              industry by storm. The ultimate goal of DJ
                              Ambassador and the Sari FC club is to progress to
                              the highest level of professional football league
                              system in Ghana (the Ghana Premier League).
                            </p>
                            <p>
                              And if you look at their statistics, the future
                              looks very bright for Sari FC. With maximum
                              support from stakeholders, Sari FC can make a
                              quantum leap to the top in the next few years. For
                              example, as a division 3 team, Sari FC has been
                              competing with division 2 teams such as Arrow
                              Heads. Their matches are always a delight to watch
                              since the football club has skillful young with
                              players who are very passionate about the game.
                              These lads show their determination to conquer
                              barriers both on the pitch and outside the pitch.
                            </p>
                            <p>
                              Before the Covid-19 burst into the scenes to
                              disrupt the calendar of Ghanaian football
                              competitions, Sari FC never missed their training
                              sessions. The club wants to raise their standards.
                              On September 20, President Akufo Addo in his 17th
                              Covid-19 update, lifted the ban on contact sports
                              in Ghana. Management of the Sari FC football
                              received this information with delighted hearts.
                              So, their boys are back on the pitch to start
                              their normal training while obeying the safety
                              protocols. Head coach Godwin has declared his
                              intention to strengthen his squad this summer.
                              Talenter soccer players in Nyankpala within the
                              age of 25-15 may want to grab this golden
                              opportunity before the transfer window closes.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Why Ghana Juvenile Football League is Not Producing Great
                      Talents
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Do you wonder why Ghana juvenile football league is not
                      producing fine talents to take Ghana to the top of world
                      football?” Godwin Apullah, head coach of division 3 club
                      Sari FC, believes it is due to these two main factors; age
                      cheating and lack of quality coaches.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              I don’t mean to sound like I am on a tangent or
                              anything, but I felt since I do have the platform
                              to voice some of the issues, why not?
                              Additionally, my hope is that maybe once a
                              conversation has begun, then maybe we can start to
                              turn things around. First off, I would like to say
                              that my perspective comes from two sides. Not only
                              have I watched countless youth football games, but
                              I’m also a Youth coach. I prefaced my column with
                              that, so people will have an idea of where I am
                              coming from. Age fraud is age fabrication or the
                              use of false documentation to gain an advantage
                              over opponents. In football, it is common amongst
                              players belonging to clubs and associations where
                              records are not easily verifiable, especially the
                              local level. The media often refer to the player
                              with false documentation as an “age-cheat”. There
                              are several reasons why players choose to use
                              false documentation. Clubs want to win Ghana
                              juvenile football league while European scouts and
                              academics are looking for young talented players
                              from poorer countries and clubs to sign. The
                              players know that there is a lesser chance of
                              being signed if they are, for example, 23 years
                              old as opposed to 15 or 13 years old as there
                              would be less time for the club to develop the
                              player. Age fabrication also allows an older
                              player to enter in youth competitions. FIFA says
                              that “over-age players have been wrongly entered
                              into various youth competitions, often benefiting
                              from an unfair advantage due to their greater
                              physical maturity compared to players of the
                              proper age.” In some cases, it is possible for the
                              player not to know their own date of birth and
                              make an approximate guess when it comes to gaining
                              official documents. Biased selection into the
                              various national teams is one factor, and none is
                              guilty of this than club chairmen, administrators
                              and coaches. Players knowingly cheat on the ages
                              because they know it is difficult to get spotted
                              and recruited to play top club sides or the
                              national teams. Corrupt club officials also do it
                              to take advantage of boys.
                            </p>
                            <p>
                              Age-cheating: a major reason why Ghana Juvenile
                              Football League is not producing great talents Age
                              cheating i.e. using only a child’s level of
                              education to determine his age is basically wrong
                              at the local level because children don’t have the
                              same opportunity of starting their education at
                              the same time due to different valued reasons.
                              Juvenile football is not about winning but
                              development. But how will a coach convince the kid
                              who may lose all his league games because of age
                              imbalance in a league? I have a bigger issue with
                              bad coaching on the youth level in football
                              because a coach giving bad technique in football
                              can potentially be life threatening likewise age
                              cheating. One of my main problems with youth
                              football is the lack of quality coaches to fill
                              all the roles available. I have personally
                              witnessed a coach teaching bad tackling technique
                              to a young player around the age of 10. I’m sure I
                              don’t have to tell anyone the dangers of teaching
                              a player the wrong tackling technique. To think an
                              incident like this is singular would be very
                              naïve. I would hate to see a kid become paralyzed
                              because of bad coaching; that is a scary thought
                              to say the least. Every coach has to take HEADS UP
                              training, but is that enough? We have to do more
                              for our kids so we can minimize the risk of the
                              game as much as possible.
                            </p>
                            <p>
                              GFA should offer free coaching courses for Ghana
                              juvenile football league managers I therefore
                              implore the Ghana Football Association GFA in
                              collaboration with the Regional and District
                              Football Associations to run compulsory free
                              license D coaching certification courses for all
                              coaches in Ghana juvenile football league systems.
                              Quality coaches can only be effective if the
                              facilities and equipment are available to them.
                              Recently, Baba Rahman donated Footballs, Jerseys
                              and other equipment to juvenile football clubs in
                              Tamale Metro and Sagenaregu Municipal. I wish to
                              use this opportunity to appeal to other players
                              and businessmen to invest in juvenile football.
                              Juvenile football was created to teach the kids
                              the game and for them to develop character and
                              life skills. Some coaches have used the sport to
                              live out their dreams and bolster their resume,
                              which is sad. We need to get back to having the
                              focus on the kids and not a coach’s win/loss
                              record.
                            </p>
                            I grew up in an era where coaches sometimes made you
                            run until you threw up, so I am not sensitive by any
                            stretch of the imagination. My problem isn’t with
                            coaches disciplining or coaching their players, but
                            with the excessiveness of it. It seems some of these
                            coaches live through their players and if the team
                            loses, they take it harder than the players. I
                            appreciate a coach who feels bad when the team does
                            not win, but to belittle and demean his players in
                            front of their teammates is something that I have
                            witnessed way too often. I took it hard when my team
                            lost, but I used that as a means to teach the kids
                            something, rather than humiliating the child.
                            Prepare and standard Juvenile football is key to
                            Ghana‘s football success. Written By: Godwin A.
                            Apullah (Coach Ambassador)
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={gallery1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Club Friendly : SARI FC 1 – 4 Shooting Stars
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Sari Fc, Nyankpala based division three club engaged the
                      division two side, Nyankpala Shooting Stars in a friendly
                      encounter. The game that produced immense quality display
                      from the two teams.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              The build up to the game and the buzz surrounding
                              the SARI Park was an intensed one, as the only
                              division two team in the district taking on one of
                              the best division three clubs in the district,
                              Tolon. Both clubs being located in Nyankpala
                              pulled a large crowd to witness what could be
                              described as one of the most entertaining games in
                              recent times.
                            </p>
                            <p>
                              The match was handled by an experienced referee
                              ,Mr Mohammed who showed class and professionalism
                              ensuring that the match ended smoothly despite the
                              two clubs being clubs from same town. The home
                              team took the lead on the 29th minute as Skipper
                              Adam, capitalized on a defensive error to assist
                              his side’s striker, Mohammed to score the opener.
                              The away team, Nyankpala Shooting Stars equalized
                              from a counter attack as Goalkeeper Mahamud could
                              not hold onto the ball as it slipped into the net
                              on the half mark.
                            </p>
                            <p>
                              The first half ended with 1 – 1 scoreline. The
                              second half started poorly for the home team, Sari
                              Fc as they conceded on the 47th minute. The
                              visitors took control of the match and increased
                              their lead on the 50th minute to make it 1-3. The
                              home side struggled to get back into the game but
                              right winger, Sasco missed a glaring chance to
                              reduce the deficit. The division two side,
                              Shooting Stars finally put the game to bed as the
                              ball from an indirect free kick found its way into
                              the net on the 80th minute . The home side showed
                              their class at the later part of the game but
                              nothing came from it. Proceedings were brought to
                              an end by the referee with Nyankpala Shooting
                              Stars winning the match by 4-1.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
            </div>

            <div className='row'>
              {/*Grid column*/}
              <div className='col-lg-4 col-md-12 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard2} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Sari FC is the Best Division 3 Football Club in Northern
                      Ghana
                    </h4>

                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Football, the most popular sport on the planet, has the
                      magic ingredient to touch lives from far no matter where
                      it’s played. Godwin Apullah aka DJ Ambassador, is a
                      Tamale-based football manager, building technologist,
                      philanthropist, and an entrepreneur who founded the Sari
                      FC football club.
                    </p>
                    {/* <MDBBtn
                      outline
                      rounded
                      // className='justify-content'
                      // href='/news/1'
                    >
                      Read More
                    </MDBBtn> */}
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              Sari FC is the Best Division 3 Football Club in
                              Northern Ghana. The Sari FC sports club is located
                              in Nyankpala, Tolon District. Nyankpala is a
                              popular community in the Northern Region of Ghana,
                              well-known for hosting the Agriculture campus of
                              the University for Development Studies (UDS). As
                              an experienced player and a football fanatic,
                              Godwin is the head coach of Sari FC. Over the past
                              years, he has been investing his resources in
                              discovering and grooming the talents of both
                              juvenile and senior players in and around
                              Nyankpala.
                            </p>
                            <p>
                              Due to his good leadership skills and commitment
                              to the team, the Sari FC football club in Northern
                              Ghana is going places. It’s one of the most
                              promising football clubs in the lower divisions
                              that will soon take over the Ghana football
                              industry by storm. The ultimate goal of DJ
                              Ambassador and the Sari FC club is to progress to
                              the highest level of professional football league
                              system in Ghana (the Ghana Premier League).
                            </p>
                            <p>
                              And if you look at their statistics, the future
                              looks very bright for Sari FC. With maximum
                              support from stakeholders, Sari FC can make a
                              quantum leap to the top in the next few years. For
                              example, as a division 3 team, Sari FC has been
                              competing with division 2 teams such as Arrow
                              Heads. Their matches are always a delight to watch
                              since the football club has skillful young with
                              players who are very passionate about the game.
                              These lads show their determination to conquer
                              barriers both on the pitch and outside the pitch.
                            </p>
                            <p>
                              Before the Covid-19 burst into the scenes to
                              disrupt the calendar of Ghanaian football
                              competitions, Sari FC never missed their training
                              sessions. The club wants to raise their standards.
                              On September 20, President Akufo Addo in his 17th
                              Covid-19 update, lifted the ban on contact sports
                              in Ghana. Management of the Sari FC football
                              received this information with delighted hearts.
                              So, their boys are back on the pitch to start
                              their normal training while obeying the safety
                              protocols. Head coach Godwin has declared his
                              intention to strengthen his squad this summer.
                              Talenter soccer players in Nyankpala within the
                              age of 25-15 may want to grab this golden
                              opportunity before the transfer window closes.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={newscard1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Why Ghana Juvenile Football League is Not Producing Great
                      Talents
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Do you wonder why Ghana juvenile football league is not
                      producing fine talents to take Ghana to the top of world
                      football?” Godwin Apullah, head coach of division 3 club
                      Sari FC, believes it is due to these two main factors; age
                      cheating and lack of quality coaches.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              I don’t mean to sound like I am on a tangent or
                              anything, but I felt since I do have the platform
                              to voice some of the issues, why not?
                              Additionally, my hope is that maybe once a
                              conversation has begun, then maybe we can start to
                              turn things around. First off, I would like to say
                              that my perspective comes from two sides. Not only
                              have I watched countless youth football games, but
                              I’m also a Youth coach. I prefaced my column with
                              that, so people will have an idea of where I am
                              coming from. Age fraud is age fabrication or the
                              use of false documentation to gain an advantage
                              over opponents. In football, it is common amongst
                              players belonging to clubs and associations where
                              records are not easily verifiable, especially the
                              local level. The media often refer to the player
                              with false documentation as an “age-cheat”. There
                              are several reasons why players choose to use
                              false documentation. Clubs want to win Ghana
                              juvenile football league while European scouts and
                              academics are looking for young talented players
                              from poorer countries and clubs to sign. The
                              players know that there is a lesser chance of
                              being signed if they are, for example, 23 years
                              old as opposed to 15 or 13 years old as there
                              would be less time for the club to develop the
                              player. Age fabrication also allows an older
                              player to enter in youth competitions. FIFA says
                              that “over-age players have been wrongly entered
                              into various youth competitions, often benefiting
                              from an unfair advantage due to their greater
                              physical maturity compared to players of the
                              proper age.” In some cases, it is possible for the
                              player not to know their own date of birth and
                              make an approximate guess when it comes to gaining
                              official documents. Biased selection into the
                              various national teams is one factor, and none is
                              guilty of this than club chairmen, administrators
                              and coaches. Players knowingly cheat on the ages
                              because they know it is difficult to get spotted
                              and recruited to play top club sides or the
                              national teams. Corrupt club officials also do it
                              to take advantage of boys.
                            </p>
                            <p>
                              Age-cheating: a major reason why Ghana Juvenile
                              Football League is not producing great talents Age
                              cheating i.e. using only a child’s level of
                              education to determine his age is basically wrong
                              at the local level because children don’t have the
                              same opportunity of starting their education at
                              the same time due to different valued reasons.
                              Juvenile football is not about winning but
                              development. But how will a coach convince the kid
                              who may lose all his league games because of age
                              imbalance in a league? I have a bigger issue with
                              bad coaching on the youth level in football
                              because a coach giving bad technique in football
                              can potentially be life threatening likewise age
                              cheating. One of my main problems with youth
                              football is the lack of quality coaches to fill
                              all the roles available. I have personally
                              witnessed a coach teaching bad tackling technique
                              to a young player around the age of 10. I’m sure I
                              don’t have to tell anyone the dangers of teaching
                              a player the wrong tackling technique. To think an
                              incident like this is singular would be very
                              naïve. I would hate to see a kid become paralyzed
                              because of bad coaching; that is a scary thought
                              to say the least. Every coach has to take HEADS UP
                              training, but is that enough? We have to do more
                              for our kids so we can minimize the risk of the
                              game as much as possible.
                            </p>
                            <p>
                              GFA should offer free coaching courses for Ghana
                              juvenile football league managers I therefore
                              implore the Ghana Football Association GFA in
                              collaboration with the Regional and District
                              Football Associations to run compulsory free
                              license D coaching certification courses for all
                              coaches in Ghana juvenile football league systems.
                              Quality coaches can only be effective if the
                              facilities and equipment are available to them.
                              Recently, Baba Rahman donated Footballs, Jerseys
                              and other equipment to juvenile football clubs in
                              Tamale Metro and Sagenaregu Municipal. I wish to
                              use this opportunity to appeal to other players
                              and businessmen to invest in juvenile football.
                              Juvenile football was created to teach the kids
                              the game and for them to develop character and
                              life skills. Some coaches have used the sport to
                              live out their dreams and bolster their resume,
                              which is sad. We need to get back to having the
                              focus on the kids and not a coach’s win/loss
                              record.
                            </p>
                            I grew up in an era where coaches sometimes made you
                            run until you threw up, so I am not sensitive by any
                            stretch of the imagination. My problem isn’t with
                            coaches disciplining or coaching their players, but
                            with the excessiveness of it. It seems some of these
                            coaches live through their players and if the team
                            loses, they take it harder than the players. I
                            appreciate a coach who feels bad when the team does
                            not win, but to belittle and demean his players in
                            front of their teammates is something that I have
                            witnessed way too often. I took it hard when my team
                            lost, but I used that as a means to teach the kids
                            something, rather than humiliating the child.
                            Prepare and standard Juvenile football is key to
                            Ghana‘s football success. Written By: Godwin A.
                            Apullah (Coach Ambassador)
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>

                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-lg-4 col-md-6 mb-4'>
                {/*Card Light*/}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img src={gallery1} className='card-img-top' alt />
                    <a>
                      <div className='mask' />
                    </a>
                  </div>
                  {/*/.Card image*/}
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>
                      Club Friendly : SARI FC 1 – 4 Shooting Stars
                    </h4>
                    <hr />
                    {/*Text*/}
                    <p className='card-text'>
                      Sari Fc, Nyankpala based division three club engaged the
                      division two side, Nyankpala Shooting Stars in a friendly
                      encounter. The game that produced immense quality display
                      from the two teams.
                    </p>
                    <MDBBtn
                      outline
                      rounded
                      onClick={() => setScrollableModal(!scrollableModal)}
                    >
                      Read More
                    </MDBBtn>

                    <MDBModal
                      show={scrollableModal}
                      setShow={setScrollableModal}
                      tabIndex='-1'
                    >
                      <MDBModalDialog scrollable>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Continue Reading</MDBModalTitle>
                            <MDBBtn
                              className='btn-close'
                              color='none'
                              onClick={() =>
                                setScrollableModal(!scrollableModal)
                              }
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <p>
                              The build up to the game and the buzz surrounding
                              the SARI Park was an intensed one, as the only
                              division two team in the district taking on one of
                              the best division three clubs in the district,
                              Tolon. Both clubs being located in Nyankpala
                              pulled a large crowd to witness what could be
                              described as one of the most entertaining games in
                              recent times.
                            </p>
                            <p>
                              The match was handled by an experienced referee
                              ,Mr Mohammed who showed class and professionalism
                              ensuring that the match ended smoothly despite the
                              two clubs being clubs from same town. The home
                              team took the lead on the 29th minute as Skipper
                              Adam, capitalized on a defensive error to assist
                              his side’s striker, Mohammed to score the opener.
                              The away team, Nyankpala Shooting Stars equalized
                              from a counter attack as Goalkeeper Mahamud could
                              not hold onto the ball as it slipped into the net
                              on the half mark.
                            </p>
                            <p>
                              The first half ended with 1 – 1 scoreline. The
                              second half started poorly for the home team, Sari
                              Fc as they conceded on the 47th minute. The
                              visitors took control of the match and increased
                              their lead on the 50th minute to make it 1-3. The
                              home side struggled to get back into the game but
                              right winger, Sasco missed a glaring chance to
                              reduce the deficit. The division two side,
                              Shooting Stars finally put the game to bed as the
                              ball from an indirect free kick found its way into
                              the net on the 80th minute . The home side showed
                              their class at the later part of the game but
                              nothing came from it. Proceedings were brought to
                              an end by the referee with Nyankpala Shooting
                              Stars winning the match by 4-1.
                            </p>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color='secondary'
                              onClick={() =>
                                setScrollableModal(!setScrollableModal)
                              }
                            >
                              back
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                    <span>
                      <span className='d-flex justify-content-center'>
                        <MDBCardFooter>
                          <small className='text-muted'>
                            Last updated 3 mins ago
                          </small>
                        </MDBCardFooter>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#3b5998' }}
                        >
                          <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#55acee' }}
                        >
                          <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#dd4b39' }}
                        >
                          <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>
                        <MDBBtn
                          tag='a'
                          color='none'
                          className='m-1'
                          style={{ color: '#ac2bac' }}
                        >
                          <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                      </span>
                    </span>
                  </div>
                  {/*/.Card content*/}
                </div>
                {/*/.Card Light*/}
              </div>
              {/*Grid column*/}
            </div>
          </section>
        </div>
        {/*Carousel Wrapper*/}
      </main>

      <Footer />
    </>
  )
}

export default LatestNews
