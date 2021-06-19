import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import styles from "styles/jss/nextjs-material-kit/pages/wallOfPots.js";

// Sections for this page
import IntroSection1 from "pages-sections/WallOfPots-Sections/IntroSection1.js";
import IntroSection2 from "pages-sections/WallOfPots-Sections/IntroSection2.js";
import IntroSection3 from "pages-sections/WallOfPots-Sections/IntroSection3.js";
import IntroSection4 from "pages-sections/WallOfPots-Sections/IntroSection4.js";
import IntroSection5 from "pages-sections/WallOfPots-Sections/IntroSection5.js";
import IntroSection6 from "pages-sections/WallOfPots-Sections/IntroSection6.js";
import ModelViewer   from "pages-sections/WallOfPots-Sections/ModelViewer.js";
import Modal         from "pages-sections/WallOfPots-Sections/Modal.js";
import { PowerTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function Pot(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  if(props.has3DModel == "true") {
    return (
    <div>

    <img onClick={() => setClassicModal(true)}
      alt="..."
      src={props.path}
      className={navImageClasses}
    />

    <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
        <Dialog
            classes={{
            root: classes.center,
            paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
            >
            <h4 className={classes.modalTitle}>{props.name}</h4>
            </DialogTitle>
            <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            >
            <p>
      <GridContainer justify="center">
        <GridItem xs={6} sm={6} md={7} lg={7} justify='center'>
            <div class="sketchfab-embed-wrapper">
              <iframe 
                  style={{display:'block'}} title={props.potID} frameborder='0' 
                  allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' 
                  allow='fullscreen; autoplay; vr' 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                  src={props.embed}>
                  </iframe>
            </div>
            <br />
            <div>
              {props.captionLine1}{"\n"}
              {props.captionLine2}{"\n"}
              {props.captionLine3}{"\n"}
              {props.captionLine4}{"\n"}
              {props.potID}
            </div>
        </GridItem>
      </GridContainer>
            </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
            <Button
                onClick={() => setClassicModal(false)}
                color="danger"
                simple
            >
                Close
            </Button>
            </DialogActions>
        </Dialog>
        </GridItem>
    </GridContainer>
    </div>
  )
  } else {
    return (
      <div>
  
      <img onClick={() => setClassicModal(true)}
        alt="..."
        src={props.path}
        className={navImageClasses}
      />
  
      <GridContainer>
          <GridItem xs={12} sm={12} md={6} lg={4}>
          <Dialog
              classes={{
              root: classes.center,
              paper: classes.modal,
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
          >
              <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
              >
              <h4 className={classes.modalTitle}>{props.name}</h4>
              </DialogTitle>
              <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
              >
              <p>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={7} lg={7} justify='center'>
              <div class="sketchfab-embed-wrapper">
                <img
                    style={{display:'block', height:'100%', width:'100%', alignContent:'center'}}
                    src={props.path}
                />
              </div>
              <br />
              <div>
                {props.captionLine1}{"\n"}
                {props.captionLine2}{"\n"}
                {props.captionLine3}{"\n"}
                {props.captionLine4}{"\n"}
                {props.potID}
              </div>
          </GridItem>
        </GridContainer>
              </p>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
              <Button
                  onClick={() => setClassicModal(false)}
                  color="danger"
                  simple
              >
                  Close
              </Button>
              </DialogActions>
          </Dialog>
          </GridItem>
      </GridContainer>
      </div>
    )
  }
}

export default function PotsPage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
    <div>
      <Header
        color="transparent"
        brand="Arizona State Museum"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter responsive image="/img/exhibit.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{zIndex: 1}}>Wall of Pots</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    
      <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer justify="center"> 
              <GridItem xs={10} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Column 1",
                      tabIcon: Filter1Icon,
                      tabContent: (
                      <div>
                        <IntroSection1 />
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="McDonald Pattern Corrugated Bowl" 
                                    embed="https://sketchfab.com/models/5866a04d3c04489d9e753c853ee6ffc8/embed"
                                    captionLine1="Mogollon, Point of Pines Province, c. 1150-1280 CE"
                                    captionLine2="Point of Pines Pueblo Graham Co., AZ"
                                    captionLine3="UA Archaelogical Field School, 1952"
                                    potID="A-11451"
                                    path="img/pot-images/Col1/Shelf1/A-11451.png"
                                    has3DModel="true"
                              />
                              
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Fourmile Polychrome Jar"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1330-1400 CE"
                                    captionLine2="Kinishba, Whiteriver, Gila Co., AZ"
                                    captionLine3="UA Archaelogical Project, 1931-1939"
                                    potID="A-3366"
                                    path="img/pot-images/Col1/Shelf1/A-3366.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Tularosa Black-On-White Bird Effigy Canteen"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1200-1300 CE"
                                    captionLine2="Tonto-Roosevelt Basin, Gila Co., AZ"
                                    captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine4="Gladwin Collection"
                                    potID="GP52910"
                                    path="img/pot-images/Col1/Shelf1/GP-52910.png"
                                    has3DModel="false"
                              />
                          
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                           
                        </GridItem>
                      </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3}>
                          <Pot 
                                    name="Babicora Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Sitio Colonia Enriquez, Río Casas Grandes,"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Chihuahua"
                                    captionLine6="McGinnis Collection"
                                    potID="GP38474"
                                    path="img/pot-images/Col1/Shelf2/GP-38474.jpg"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Dublan Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Paquimé, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of a Museum Friend, 1949"
                                    potID="A-7463"
                                    path="img/pot-images/Col1/Shelf2/A-7463.jpg"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3643"
                                    path="img/pot-images/Col1/Shelf2/GP-3643.jpg"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Ramos Polychrome hooded human effigy jar, seated woman nursing infant"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Ledwidge Collection"
                                        potID="GP3724"
                                        path="img/pot-images/Col1/Shelf2/GP-3724.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Ramos Polychrome hooded human effigy jar, squatting man"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Paquimé vicinity, Río Casas Grandes, Chihuahua"
                                        captionLine4="ASM Purchase, 1934"
                                        captionLine5="Ledwidge Collection"
                                        potID="20676"
                                        path="img/pot-images/Col1/Shelf2/20676.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Villa Ahumada Polychrome effigy jar, macaw nesting pens on ends"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Ledwidge Collection"
                                        potID="GP3710"
                                        path="img/pot-images/Col1/Shelf2/GP-3710.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Villa Ahumada Polychrome jar"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Ledwidge Collection"
                                        potID="GP3624"
                                        path="img/pot-images/Col1/Shelf2/GP-3624.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3}>
                          <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3638"
                                    path="img/pot-images/Col1/Shelf3/GP-3638.jpg"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra ProvinceRancho Corralit Gift of Gila Pueblo Foundation, 1950\n Ledwidge Collection\n GP3640"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP-3640"
                                    path="img/pot-images/Col1/Shelf3/GP-3640.jpg"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Escondida Polychrome, Tonto Variant jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1350–1450 CE"
                                    captionLine3="Paquimé vicinity, Río Casas Grandes, Chihuahua"
                                    captionLine4="ASM Purchase, 1934"
                                    captionLine5="Ledwidge Collection"
                                    potID="20658"
                                    path="img/pot-images/Col1/Shelf3/20658.jpg"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Madera Black-on-red hooded macaw effigy jar"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Houghton Collection"
                                        potID="GP10195"
                                        path="img/pot-images/Col1/Shelf3/GP-10195.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Ramos Polychrome jar, sculpted snakes"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Ledwidge Collection"
                                        potID="GP3621"
                                        path="img/pot-images/Col1/Shelf3/GP-3621.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Ramos Polychrome bird effigy jar"
                                        captionLine1=" Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Ledwidge Collection"
                                        potID="GP3631"
                                        path="img/pot-images/Col1/Shelf3/GP-3631.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3}>
                          <Pot 
                                    name="Tularosa Black-on-white pitcher"
                                    captionLine1="Mogollon, Upper Little Colorado Province"
                                    captionLine2="C. 1200–1300 CE"
                                    captionLine3="Zuni River, Apache Co., AZ"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Scorse Collection"
                                    potID="GP1854"
                                    path="img/pot-images/Col1/Shelf4/GP-1854.jpg"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Gila Polychrome bowl"
                                    captionLine1="Salado, c. 1300–1450 CE"
                                    captionLine2="Globe vicinity, Pinal Creek, Gila Co., AZ"
                                    captionLine3="Gift of a Museum Friend, 1933"
                                    potID="6655"
                                    path="img/pot-images/Col1/Shelf4/6655.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="El Paso Polychrome jar"
                                    captionLine1="Mogollon, Jornada Province"
                                    captionLine2="c. 1200–1400 CE"
                                    captionLine3="Janos vicinity, Rio Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="McGinnis Collection"
                                    potID="GP38642"
                                    path="img/pot-images/Col1/Shelf4/GP-38642.jpg"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Mimbres Black-on-white (Style III) bowl"
                                        captionLine2=" Mogollon, Mimbres Province,"
                                        captionLine3="c. 1000–1150 CE"
                                        captionLine4="Pruitt Ranch Site, Mimbres River Valley, Grant Co., NM"
                                        captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine6="Bowen Collection"
                                        potID="GP4955"
                                        path="img/pot-images/Col1/Shelf4/GP-4955.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Reserve Black-on-white bowl"
                                        captionLine1="Mogollon, Upper Little Colorado Province"
                                        captionLine2="C. 1100–1200 CE"
                                        captionLine3="Holbrook Mesa, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Scorse Collection"
                                        potID="GP1113"
                                        path="img/pot-images/Col1/Shelf4/GP-1113.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Mimbres Black-on-white (Style III) bowl"
                                        captionLine1="Mogollon, Mimbres Province,"
                                        captionLine2="c. 1000–1150 CE"
                                        captionLine3="Pruitt Ranch Site, Mimbres River Valley, Grant Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Bowen Collection"
                                        potID="GP4915"
                                        path="img/pot-images/Col1/Shelf4/GP-4915.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Puerco Black-on-redanimal effigy pitcher"
                                        captionLine1="Mogollon, Upper Little Colorado Province"
                                        captionLine2="c. 1000–1180 CE"
                                        captionLine3="Nutria Canyon, McKinley Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Cousins Collection"
                                        potID="GP5973"
                                        path="img/pot-images/Col1/Shelf4/GP-5973.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Anchondo Red-on-brown jar"
                                        captionLine1=" Mogollon, Northern Sierra Province,"
                                        captionLine2="C. 650–800 CE"
                                        captionLine3="Sitio Colonia Enriquez, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="McGinnis Collection"
                                        potID="GP38509"
                                        path="img/pot-images/Col1/Shelf4/GP-38509.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Tonto Polychrome pitcher"
                                        captionLine1="Salado, c. 1350–1450 CE"
                                        captionLine2="C. 650–800 CE"
                                        captionLine3="Gila Pueblo, Pinal Creek, Gila Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Excavated by Harold S. Gladwin, 1941"
                                        potID="GP50570"
                                        path="img/pot-images/Col1/Shelf4/GP-50570.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Wingate Polychrome bowl"
                                        captionLine1="(Gila Pueblo Foundation logo adapted from exterior)"
                                        captionLine2="Mogollon, Upper Little Colorado Province"
                                        captionLine3="C. 1100–1200 CE"
                                        captionLine4="Atarque Wash, Apache Co., AZ"
                                        captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine6="Scorse Collection"
                                        potID="GP2538"
                                        path="img/pot-images/Col1/Shelf4/GP-2538.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3}>
                          <Pot 
                                    name="Alma Smudged bowl"
                                    captionLine1="Mogollon, Point of Pines Province"
                                    captionLine2="C. 400–600 CE"
                                    captionLine3="Crooked Ridge Village, Point of Pines, Graham Co., AZ"
                                    captionLine4="UA Archaeological Field School, 1949"
                                    potID="A-7749"
                                    path="img/pot-images/Col1/Shelf5/A-7749.png"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Tularosa Patterned Corrugated jar"
                                    captionLine1="Mogollon, Pine Lawn Province"
                                    captionLine2="C. 1050–1250 CE"
                                    captionLine3="Mineral Creek, Apache Co., AZ"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Scorse Collection"
                                    potID="GP3054"
                                    path="img/pot-images/Col1/Shelf5/GP-3054.jpg"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Alma Knobby shell trumpet effigy"
                                    captionLine1="Mogollon, Point of Pines Province"
                                    captionLine2="C. 1150–1265 CE"
                                    captionLine3="Point of Pines Province, Graham Co., AZ"
                                    captionLine4="UA Archaeological Field School, 1952"
                                    potID="A-11744"
                                    path="img/pot-images/Col1/Shelf5/A-11744.jpg"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Ramos Black bowl"
                                        captionLine2="Casas Grandes, Northern Sierra Province"
                                        captionLine3="C. 1250–1450 CE"
                                        captionLine4="Paquimé, Río Casas Grandes, Chihuahua"
                                        captionLine5="ASM Purchase, 1926\n Gray Collection"
                                        potID="214462-X-2"
                                        path="img/pot-images/Col1/Shelf5/214462-X-2.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Kinishba Red jar"
                                        captionLine1="Mogollon, Point of Pines Province"
                                        captionLine2="C. 1265–1400 CE"
                                        captionLine3="Red Bow Cliff Dwelling"
                                        captionLine4="Point of Pines, Graham Co., AZ"
                                        captionLine5="UA Archaeological Field School, 1955"
                                        potID="A-16143"
                                        path="img/pot-images/Col1/Shelf5/A-16143.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="San Francisco Red seed jar"
                                        captionLine1="Mogollon, Mimbres Province,"
                                        captionLine2="C. 550–1000 CE"
                                        captionLine3="Harris Village, Mimbres Valley, Grant Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Excavated by Emil W. Haury, 1934"
                                        potID="GP42518"
                                        path="img/pot-images/Col1/Shelf5/GP-42518.jpg"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Tularosa Fillet Rim bowl\"
                                        captionLine1="Mogollon, Pine Lawn Province"
                                        captionLine2="C. 1100–1300 CE"
                                        captionLine3="Provenience unknown"
                                        captionLine4="Gift of Museum Friends, 1980"
                                        potID="80-65-1"
                                        path="img/pot-images/Col1/Shelf5/80-65-1.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                            <Pot 
                                        name="Reserve Plain Corrugated Jar"
                                        captionLine1="Mogollon, Pine Lawn Province"
                                        captionLine2="C. 1100–1300 CE"
                                        captionLine3="Centerfire Creek, Catron Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Coit Collection"
                                        potID="GP8437"
                                        path="img/pot-images/Col1/Shelf5/GP-8437.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 2",
                      tabIcon: Filter2Icon,
                      tabContent: (
                        <div>
                        <IntroSection2 />
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tizon Brown Ware jar"
                                        captionLine1="Upland Patayan or historic Yavapai"
                                        captionLine2="Hassayampa Province"
                                        captionLine3="C. 1600?–1900? CE"
                                        captionLine4="Date Creek Mountains, Yavapai Co., AZ"
                                        captionLine5="ASM Archaeological Project, 1991"
                                        potID="91-39-1"
                                        path="img/pot-images/Col2/Shelf1/91-39-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tizon Brown Ware jar, native repairs with lac"
                                        captionLine1="Upland Patayan or historic Hualapai\"
                                        captionLine2="Hassayampa Province"
                                        captionLine3="C. 1600?–1900? CE"
                                        captionLine4="Harquahala Mountains, Maricopa Co., AZ"
                                        captionLine5="Gift of a Museum Friend, 1942"
                                        potID="A-2700"
                                        path="img/pot-images/Col2/Shelf1/A-2700.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tumco Buff jar, formerly sealed with lac"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1000–1650 CE"
                                        captionLine3="Cibola Valley, Lower Colorado River, Yuma Co., AZ"
                                        captionLine4="BLM Repository Collection, 1970"
                                        potID="A-39022"
                                        path="img/pot-images/Col2/Shelf2/A-39022.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tumco Buff jar, formerly sealed with lac"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1000–1650 CE"
                                        captionLine3="Trigo Mountains, Yuma Co., AZ"
                                        captionLine4="BLM Repository Collection, 1989"
                                        potID="89-42-1"
                                        path="img/pot-images/Col2/Shelf2/89-42-1.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Palomas Stucco wide-mouth jar"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1650–1900 CE"
                                        captionLine3="Heart Tank/Heart Tank Trail, Sierra Pinta, Yuma Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1963"
                                        potID="A-23225"
                                        path="img/pot-images/Col2/Shelf2/A-23225.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Gila Plain jar\"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 650–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-710"
                                        path="img/pot-images/Col2/Shelf2/97-194-710.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Santa Cruz Red-on-buff jar, burden carrier motifs"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 850–1000 CE"
                                        captionLine3="Zeta Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-695"
                                        path="img/pot-images/Col2/Shelf3/97-194-695.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Santa Cruz Red-on-buff jar, burden carrier motifs"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 850–1000 CE"
                                        captionLine3="Zeta Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="94-134-442"
                                        path="img/pot-images/Col2/Shelf3/94-134-442.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Rincon Red-on-brown bowl"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 950–1150 CE"
                                        captionLine3="Red Cave, Whetstone Mountains, Pima Co., AZ"
                                        captionLine4="Coronado National Forest Repository Collection, 1973"
                                        potID="A-40223"
                                        path="img/pot-images/Col2/Shelf4/A-40223.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tanque Verde Red-on-brown bighorn sheep effigy jar"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="Hodges Ruin, Tucson, Pima Co., AZ"
                                        captionLine4="Gift of Wetmore Hodges, 1944"
                                        captionLine5="Excavated by Isabel Kelly and Carl Miller, 1936"
                                        potID="A-9240"
                                        path="img/pot-images/Col2/Shelf4/A-9240.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Rincon Polychrome jar"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1000–1100 CE"
                                        captionLine3="St. Mary’s Hospital Site, Tucson, Pima Co., AZ"
                                        captionLine4="UA Archaeological Project, 1920"
                                        potID="20144"
                                        path="img/pot-images/Col2/Shelf4/20144.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Casa Grande Red-on-buff jar"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="Germann’s Ranch, Queen Creek, Maricopa Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1921"
                                        potID="6113"
                                        path="img/pot-images/Col2/Shelf4/6113.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Casa Grande Red-on-buff pitcher"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="La Ciudad, Phoenix, Maricopa Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Showalter Collection"
                                        potID="GP9786"
                                        path="img/pot-images/Col2/Shelf4/GP-9786.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Sacaton Red-on-buff plate, water bird with fish"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2=" C. 950–1150 CE"
                                        captionLine3="Escuela Site, Painted Rock Reservoir\n Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-149"
                                        path="img/pot-images/Col2/Shelf5/97-194-149.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Gila Butte Red-on-buff bowl, pelican motifs"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2=" C. 750–900 CE"
                                        captionLine3="La Ciudad, Phoenix, Maricopa Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Johnson Collection"
                                        potID="GP6478"
                                        path="img/pot-images/Col2/Shelf5/GP-6478.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Gila Plain jar"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2="C. 650–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir; Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-562"
                                        path="img/pot-images/Col2/Shelf5/97-194-562.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Gila Plain: Tucson Variety boot pitcher"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1300–1450 CE"
                                        captionLine3="University Indian Ruin, Tucson; Pima Co., AZ"
                                        captionLine4="UA Archaeological Project, 1931–1937"
                                        potID="23778"
                                        path="img/pot-images/Col2/Shelf5/23778.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Sacaton Red bowl"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 950–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir; Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-705"
                                        path="img/pot-images/Col2/Shelf5/97-194-705.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 3",
                      tabIcon: Filter3Icon,
                      tabContent: (
                      <div>
                        <IntroSection3 />
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Moenkopi Corrugated jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1075–1300 CE"
                                        captionLine3="Northern Arizona"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="4464-X-2"
                                        path="img/pot-images/Col3/Shelf1/4464-X-2.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Chapin Gray jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="C. 575–900 CE"
                                        captionLine3="Durango vicinity, La Plata Co., CO"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Flora Collection"
                                        potID="GP48325"
                                        path="img/pot-images/Col3/Shelf1/GP-48325.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Sosi Black-on-white jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1050–1180 CE"
                                        captionLine3="Turkey Cave, Tsegi Canyon, Navajo Co., AZ"
                                        captionLine4="Loaned by Grand Canyon National Park, 1976"
                                        captionLine5="Excavated by Harold S. Gladwin, 1929"
                                        potID="AT-76-19-1"
                                        path="img/pot-images/Col3/Shelf2/AT-76-19-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Sosi Black-on-white jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1050–1180 CE"
                                        captionLine3="Turkey Cave, Tsegi Canyon, Navajo Co., AZ"
                                        captionLine4="UA Archaeological Project, c. 1920"
                                        captionLine5="Excavated by Byron Cummings"
                                        potID="12924"
                                        path="img/pot-images/Col3/Shelf2/12924.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Chupadero Black-on-white pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi), Rio Grande Province"
                                        captionLine2="C. 1150–1675 CE"
                                        captionLine3="Provenience unknown"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP53134"
                                        path="img/pot-images/Col3/Shelf3/GP-53134.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Mesa Verde Black-on-white mug"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="C. 1200–1300 CE"
                                        captionLine3="Mesa Verde, Montezuma Co., CO"
                                        captionLine4="Gift of a Museum Friend, 1946"
                                        captionLine5="Wetherill Collection"
                                        potID="A-4183"
                                        path="img/pot-images/Col3/Shelf3/A-4183.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tuwiuca Black-on-orange bowl"
                                        captionLine1="Early Hopi, Winslow Province"
                                        captionLine2="C. 1250–1350 CE"
                                        captionLine3="Chavez Pass Ruin, Chavez Pass; Coconino Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Toelle Collection"
                                        potID="GP9129"
                                        path="img/pot-images/Col3/Shelf3/GP-9129.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Chaco Black-on-white pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi) Chaco Province"
                                        captionLine2="c. 1050–1125 CE"
                                        captionLine3="Gallup vicinity, McKinley Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP5929"
                                        path="img/pot-images/Col3/Shelf3/GP-5929.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Mesa Verde Black-on-white double mug"
                                        captionLine1="Ancestral Pueblo (Anasazi) Mesa Verde Province"
                                        captionLine2="c. 1200–1300 CE"
                                        captionLine3="Dove Creek vicinity, Dolores Co., CO"
                                        captionLine4="Gift of Ethel Crane Allen, 1998"
                                        captionLine5="Allen Collection"
                                        potID="98-98-1"
                                        path="img/pot-images/Col3/Shelf3/98-98-1.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Chapin Black-on-white bowl"
                                        captionLine1="Ancestral Pueblo (Anasazi) Mesa Verde Province"
                                        captionLine2="c. 575–900 CE"
                                        captionLine3="Animas Mountain, La Plata Co., CO"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Flora Collection"
                                        potID="GP46912"
                                        path="img/pot-images/Col3/Shelf3/GP-46912.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Kiet Siel Polychrome canteen"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="c. 1250–1300 CE"
                                        captionLine3="Flagstaff vicinity, Coconino Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Babbitt Brothers Collection"
                                        potID="GP5500"
                                        path="img/pot-images/Col3/Shelf3/GP-5500.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tusayan Black-on- red seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="c. 1050–1200 CE"
                                        captionLine3="Kayenta vicinity, Navajo Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1946"
                                        captionLine5="Wetherill Collection"
                                        potID="A-4161"
                                        path="img/pot-images/Col3/Shelf3/A-4161.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="White Mound Black-on white bird effigy jar"
                                        captionLine1="Ancestral Pueblo (Anasazi) Chaco Province"
                                        captionLine2="C. 675–900 CE"
                                        captionLine3="White Mound Village, Rio Puerco, Apache Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Excavated by Emil W. Haury and E. B. Sayles, 1936"
                                        potID="GP50576"
                                        path="img/pot-images/Col3/Shelf3/GP-50576.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Jeddito Black-on-yellow bowl (not visible)"
                                        captionLine1="Early Hopi, Tusayan Province\"
                                        captionLine2="C. 1375–1630 CE"
                                        captionLine3="Awat’ovi, Antelope Mesa, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP856"
                                        path="img/pot-images/Col3/Shelf3/GP-856.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Pinnawa Glaze-on-white jar"
                                        captionLine1="Early Zuni, White River Province"
                                        captionLine2="C. 1350–1500 CE"
                                        captionLine3="Clear Creek, White Mountains, Gila Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1933"
                                        potID="6894"
                                        path="img/pot-images/Col3/Shelf4/6894.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Sikyatki Polychrome jar, late style"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1450–1630 CE"
                                        captionLine3="Keams Canyon, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="McAdams Collection"
                                        potID="GP4730"
                                        path="img/pot-images/Col3/Shelf4/GP-4730.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Kwakina Polychrome bowl"
                                        captionLine1="Early Zuni, White River Province"
                                        captionLine2="C. 1275–1500 CE"
                                        captionLine3="Kinishba, Whiteriver, Gila Co., AZ"
                                        captionLine4="UA Archaeological Project, 1931–1939"
                                        potID="23823"
                                        path="img/pot-images/Col3/Shelf4/23823.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Matsaki Polychrome jar"
                                        captionLine1="Early Zuni, Zuni Province"
                                        captionLine2="C. 1400–1680 CE"
                                        captionLine3="Mats’a:kya, Zuni River, McKinley Co., NM"
                                        captionLine4="Gift of Museum Friends, 1981"
                                        potID="81-55-1"
                                        path="img/pot-images/Col3/Shelf4/81-55-1.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Jeddito Stippled bowl, hand motif"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1375–1630 CE"
                                        captionLine3="Hopi Mesas, Navajo Co., AZ"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="4096"
                                        path="img/pot-images/Col3/Shelf4/4096.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Awatovi Black-on-yellow ladle (not visible)"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1300–1375 CE"
                                        captionLine3="Hopi Mesas, Navajo Co., AZ"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="18293"
                                        path="img/pot-images/Col3/Shelf4/18293.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Basketmaker Mudware bowl"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="C. 575–700 CE"
                                        captionLine3="Broken Flute Cave, Prayer Rock District Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14380"
                                        path="img/pot-images/Col3/Shelf5/A-14380.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Obelisk Gray seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="C. 450–800 CE"
                                        captionLine3="Cave II, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14304"
                                        path="img/pot-images/Col3/Shelf5/A-14304.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Potsuwi’i Incised canteen"
                                        captionLine1="Early Tewa, Chama Province"
                                        captionLine2="C. 1450–1500 CE"
                                        captionLine3="Poshu’ouinge, Rio Chama,\n Rio Arriba Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Fred Harvey Co. Collection"
                                        potID="GP6108"
                                        path="img/pot-images/Col3/Shelf5/GP-6108.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Tusayan Corrugated jar"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="C. 950–1300 CE"
                                        captionLine3="Broken Flute Cave, Prayer Rock District Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14404"
                                        path="img/pot-images/Col3/Shelf5/A-14404.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Lino Gray seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="C. 575–875 CE"
                                        captionLine3="Cave VIII, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14360"
                                        path="img/pot-images/Col3/Shelf5/A-14360.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Kana-a Gray pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi) Kayenta Province"
                                        captionLine2="C. 760–900 CE"
                                        captionLine3="Kayenta vicinity, Navajo Co., AZ"
                                        captionLine4="ASM Purchase, 1930"
                                        captionLine5="Warren Collection"
                                        potID="19197"
                                        path="img/pot-images/Col3/Shelf5/19197.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Little Colorado Corrugated jar"
                                        captionLine1="Ancestral Pueblo(Anasazi) Little Colorado Province"
                                        captionLine2="C. 1080–1275 CE"
                                        captionLine3="Painted Desert, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Scorse Collection"
                                        potID="GP1079"
                                        path="img/pot-images/Col3/Shelf5/GP-1079.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 4",
                      tabIcon: Filter4Icon,
                      tabContent: (
                      <div>
                        <IntroSection4 />
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polychrome jar"
                                        captionLine1="Palhikwmana (Moisture-drinking Maiden) Katsina design"
                                        captionLine2="C. 1920"
                                        captionLine3="Collector unknown"
                                        captionLine4="Hopi Mesas, AZ"
                                        potID="12726"
                                        path="img/pot-images/Col4/Shelf1/12726.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Laguna Polychrome jar"
                                        captionLine1="Possibly by Triz-Ray (Louise Beeker or Beecher)"
                                        captionLine2="C. 1900"
                                        captionLine3="Pueblo of Laguna, NM"
                                        captionLine4="Gift of Mary T. Fitzmaurice"
                                        captionLine5="Collected by Henry G. Peabody"
                                        potID="75-5-2"
                                        path="img/pot-images/Col4/Shelf1/75-5-2.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Acoma Polychrome jar"
                                        captionLine1="C. 1890"
                                        captionLine2="Pueblo of Acoma, NM"
                                        captionLine3="Gift of B. D. Butler"
                                        potID="22933"
                                        path="img/pot-images/Col4/Shelf2/22933.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Laguna Polychrome jar"
                                        captionLine1="Possibly by Tzu-chey (Minnie Sice)"
                                        captionLine2="C. 1900"
                                        captionLine3="Pueblo of Laguna, NM"
                                        captionLine4="Gift of Mary T. Fitzmaurice"
                                        captionLine5="Collected by Henry G. Peabody"
                                        potID="75-5-1"
                                        path="img/pot-images/Col4/Shelf2/75-5-1.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Acoma Polychrome jar"
                                        captionLine1="C. 1900"
                                        captionLine2="Pueblo of Acoma, NM"
                                        captionLine3="Collected by Nelle A. Dermont"
                                        potID="23682"
                                        path="img/pot-images/Col4/Shelf2/23682.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Acoma wedding jar"
                                        captionLine1="Jessie C. Garcia"
                                        captionLine2="C. 1970"
                                        captionLine3="Pueblo of Acoma, NM"
                                        captionLine4="Collected by Thomas Bahti"
                                        potID="E-9469"
                                        path="img/pot-images/Col4/Shelf2/E-9469.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Acoma Fine-line jar"
                                        captionLine1="Lucy Lewis"
                                        captionLine2="C. 1970"
                                        captionLine3="Pueblo of Acoma, NM"
                                        captionLine4="Gift of Margaret Beecher"
                                        potID="2000-14-2911"
                                        path="img/pot-images/Col4/Shelf2/2000-14-2911.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zuni Polychrome jar"
                                        captionLine1="C. 1870"
                                        captionLine2="Pueblo of Zuni, NM"
                                        captionLine3="Probably collected by Byron Cummings"
                                        potID="12193"
                                        path="img/pot-images/Col4/Shelf3/12193.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zuni Polychrome jar"
                                        captionLine1="Noreen Simplicio"
                                        captionLine2="C. 2004"
                                        captionLine3="Pueblo of Zuni, NM"
                                        captionLine4="ASM Purchase, VP for Research Richard Powell funds"
                                        potID="2004-351-1"
                                        path="img/pot-images/Col4/Shelf3/2004-351-1.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zuni jar with appliqué frogs"
                                        captionLine1="C. 1930"
                                        captionLine2="Pueblo of Zuni, NM"
                                        captionLine3="Gift of Toni Elmore"
                                        captionLine4="Collected by Francis H. Elmore"
                                        potID="97-156-54"
                                        path="img/pot-images/Col4/Shelf3/97-156-54.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zuni Polychrome jar"
                                        captionLine1="C. 1890"
                                        captionLine2="Pueblo of Zuni, NM"
                                        captionLine3="Gift of the Arizona Archaeological and Historical Society"
                                        captionLine4="Collected by Dr. Joshua A. Miller"
                                        potID="4167"
                                        path="img/pot-images/Col4/Shelf3/4167.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zuni owl figure (not visible)"
                                        captionLine1="C. 1880"
                                        captionLine2="Pueblo of Zuni, NM"
                                        captionLine3="Gift of Emily, Elizabeth, and George Brown"
                                        captionLine4="Collected by Dr. Daniel Webster \n Prentiss Jr."
                                        captionLine5="possibly from John Wesley Powell"
                                        potID="E-6423"
                                        path="img/pot-images/Col4/Shelf3/E-6423.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polacca Polychrome ladle"
                                        captionLine1="Taawakatsina (Sun Katsina) on interior and Kooninkatsina (Havasupai Katsina) handle"
                                        captionLine2="C. 1880"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Emily Brown, George D. Brown, and Elizabeth Brown McGuire"
                                        captionLine5="Collected by Dr. Daniel Webster Prentiss Jr."
                                        captionLine6="possibly from John Wesley Powell"
                                        potID="E-6420"
                                        path="img/pot-images/Col4/Shelf4/E-6420.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polacca Polychrome jar"
                                        captionLine1="C. 1880"
                                        captionLine4="Hopi Mesas, AZ"
                                        captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                        potID="GP52543"
                                        path="img/pot-images/Col4/Shelf4/GP-52543.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome jar"
                                        captionLine1="C. 1920 "
                                        captionLine2="Hopi Mesas, AZ"
                                        captionLine3="ASM Purchase"
                                        captionLine4="Collected by Nelle A. Dermont"
                                        potID="8308"
                                        path="img/pot-images/Col4/Shelf4/8308.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polychrome vase"
                                        captionLine1="C. 1928"
                                        captionLine2="Hopi Mesas, AZ"
                                        captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine4="Collected by B. I. Staples"
                                        potID="GP5899"
                                        path="img/pot-images/Col4/Shelf4/GP-5899.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polychrome vase"
                                        captionLine1="C. 1920"
                                        captionLine2="Hopi Mesas, AZ"
                                        captionLine3="Gift of Faith M. Odom"
                                        captionLine4="Collected by Mr. and Mrs. Charles Minor"
                                        potID="88-90-19"
                                        path="img/pot-images/Col4/Shelf4/88-90-19.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polychrome vase"
                                        captionLine1="C. 1870"
                                        captionLine2="Hopi Mesas, AZ"
                                        captionLine3="Gift of the Arizona Archaeological and Historical Society"
                                        captionLine4="Collected by Dr. Joshua A. Miller"
                                        potID="4009"
                                        path="img/pot-images/Col4/Shelf4/4009.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome jar"
                                        captionLine1="Nampeyo and possibly Fannie or Rachael Nampeyo"
                                        captionLine2="C. 1930"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        potID="GP52543"
                                        path="img/pot-images/Col4/Shelf5/GP-52543.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome jar"
                                        captionLine1="Nampeyo and Fannie Nampeyo"
                                        captionLine2="C. 1923"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Mrs. Charles Morgan (Nan) Wood"
                                        captionLine5="Collected by Charles Morgan Wood"
                                        potID="E-2031"
                                        path="img/pot-images/Col4/Shelf5/E-2031.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome jar"
                                        captionLine1="Karen Abeita"
                                        captionLine2="C. 2006"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Milton and Anita Katz"
                                        potID="2006-1052-23"
                                        path="img/pot-images/Col4/Shelf5/2006-1052-23.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome seed jar"
                                        captionLine1="Hisi Nampeyo"
                                        captionLine2="C. 2000"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Milton and Anita Katz"
                                        potID="2006-1052-19"
                                        path="img/pot-images/Col4/Shelf5/2006-1052-19.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi Polacca Polychrome canteen"
                                        captionLine1="Kooninkatsina (Havasupai Katsina) design"
                                        captionLine2="C. 1890"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society"
                                        captionLine5="Collected by Dr. Joshua A. Miller"
                                        potID="18243"
                                        path="img/pot-images/Col4/Shelf5/18243.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Hopi-Tewa Polychrome jar"
                                        captionLine1="Leah Nampeyo"
                                        captionLine2="C. 1970"
                                        captionLine3="Hopi Mesas, AZ"
                                        captionLine4="Gift of Margaret Beecher"
                                        potID="2000-14-32"
                                        path="img/pot-images/Col4/Shelf5/2000-14-32.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 5",
                      tabIcon: Filter5Icon,
                      tabContent: (
                      <div>
                        <IntroSection5 />
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Zia Polychrome jar"
                                        captionLine1="Andrea Gachupin"
                                        captionLine2="C. 2002"
                                        captionLine3="Pueblo of Zia, NM"
                                        captionLine4="ASM Purchase"
                                        potID="E-2847"
                                        path="img/pot-images/Col5/Shelf1/E-2847.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zia Polychrome jar"
                                        captionLine1="Ruby Panana"
                                        captionLine2="C. 1930"
                                        captionLine3="Pueblo of Zia, NM"
                                        captionLine4="Gift of Fred Hawley"
                                        potID="2002-78-1"
                                        path="img/pot-images/Col5/Shelf1/2002-78-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zia dough bowl"
                                        captionLine1="Ruby Panana"
                                        captionLine2="C. 1900"
                                        captionLine3="Pueblo of Zia, NM"
                                        captionLine4="Gift of Dr. and Mrs. George Gaylord Simpson"
                                        potID="80-64-1"
                                        path="img/pot-images/Col5/Shelf1/80-64-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="San Ildefonso Polychrome jar"
                                        captionLine1="Attributed to Crescencio and Maria Martinez"
                                        captionLine2="C. 1915"
                                        captionLine3="Pueblo of San Ildefonso, NM"
                                        captionLine4="Purchased at Rasmussen’s Curios, Tucson, 1930s"
                                        captionLine5="Gift of Mrs. Arthur Hamilton Otis"
                                        potID="E-5518"
                                        path="img/pot-images/Col5/Shelf2/E-5518.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Zia Polychrome jar"
                                        captionLine1="C. 1910"
                                        captionLine2="Pueblo of Zia, NM"
                                        captionLine3="Exchange with Museum of New Mexico"
                                        potID="7377"
                                        path="img/pot-images/Col5/Shelf2/7377.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Santo Domingo Polychrome jar"
                                        captionLine1="C. 1914"
                                        captionLine2="Kewa Pueblo, NM"
                                        captionLine3="Gift of William Donner"
                                        potID="E-3738"
                                        path="img/pot-images/Col5/Shelf2/E-3738.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="San Ildefonso Polychrome jar"
                                        captionLine1="C. 1910"
                                        captionLine2="Pueblo of San Ildefonso, NM"
                                        captionLine3="ASM Purchase"
                                        captionLine4="Collected by Nelle A. Dermont"
                                        potID="8333"
                                        path="img/pot-images/Col5/Shelf2/8333.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <Pot 
                                        name="Santo Domingo Polychrome jar (not visible)"
                                        captionLine1="C. 1900"
                                        captionLine2="Kewa Pueblo, NM"
                                        captionLine3="Gift of Dr. Robert H. Forbes"
                                        potID="E-3649 "
                                        path="img/pot-images/Col5/Shelf2/E-3649.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="San Ildefonso Polychrome jar"
                                        captionLine1="Maria and Julian Martinez"
                                        captionLine2="C. 1920"
                                        captionLine3="Pueblo of San Ildefonso, NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        potID="GP52582"
                                        path="img/pot-images/Col5/Shelf3/GP-52582.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="San Ildefonso terraced serving bowl (part of 30-piece dinnerware set)"
                                        captionLine1="Maria and Julian Martinez"
                                        captionLine2="C. 1929"
                                        captionLine3="Pueblo of San Ildefonso, NM"
                                        captionLine4="Gift of Ansel and Virginia Adams"
                                        potID="77-63-7"
                                        path="img/pot-images/Col5/Shelf3/77-63-7.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Cochiti storyteller figure"
                                        captionLine1="Delfino Trancosa"
                                        captionLine2="C. 1978"
                                        captionLine3="Pueblo of Cochiti, NM"
                                        captionLine4="Gift of Dr. Barbara Babcock"
                                        potID="86-69-1"
                                        path="img/pot-images/Col5/Shelf3/86-69-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="San Ildefonso Black-on-black terraced jar, Awanyu (plumed serpent) design"
                                        captionLine1="Carmelita Dunlap"
                                        captionLine2="C. 1970"
                                        captionLine3="Pueblo of San Ildefonso, NM"
                                        captionLine4="Gift of Thomas Bahti"
                                        potID="E-9392"
                                        path="img/pot-images/Col5/Shelf3/E-9392.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Santa Clara wedding jar"
                                        captionLine1="C. 1910"
                                        captionLine2="Pueblo of Santa Clara, NM"
                                        captionLine3="ASM Purchase"
                                        captionLine4="Collected by Nelle A. Dermont"
                                        potID="8271"
                                        path="img/pot-images/Col5/Shelf3/8271.jpg"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Santa Clara jar with painted Matachin dance"
                                        captionLine1="Lois Gutierrez de la Cruz"
                                        captionLine2="C. 2002"
                                        captionLine3="Pueblo of Santa Clara, NM"
                                        captionLine4="Gift of Milton and Anita Katz"
                                        potID="2006-1052-10"
                                        path="img/pot-images/Col5/Shelf3/2006-1052-10.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Santa Clara seed jar with medallion (not visible)"
                                        captionLine1="Grace Medicine Flower and Camilio Tafoya"
                                        captionLine2="C. 1970"
                                        captionLine3="Pueblo of Santa Clara, NM"
                                        captionLine4="Gift of Thomas Bahti"
                                        potID="E-9393"
                                        path="img/pot-images/Col5/Shelf3/E-9393.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Zia Polychrome jar"
                                        captionLine1="C. 1928"
                                        captionLine2="Pueblo of Zia, NM"
                                        captionLine3="“Purchased from Wichmiller” Gallup Ceremonial First Prize winner"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        potID="GP5902"
                                        path="img/pot-images/Col5/Shelf4/GP-5902.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="San Ildefonso Polychrome bowl"
                                        captionLine1="Maria and Julian Martinez"
                                        captionLine2="C. 1920"
                                        captionLine3="Pueblo of San Ildefonso, NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Collected by Byron Cummings"
                                        potID="12207"
                                        path="img/pot-images/Col5/Shelf4/12207.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Jemez bat bowl"
                                        captionLine1="Verda Toledo"
                                        captionLine2="C. 2006"
                                        captionLine3="Pueblo of Jemez, NM"
                                        captionLine4="Gift of a Museum Friend"
                                        potID="2006-166-1"
                                        path="img/pot-images/Col5/Shelf4/2006-166-1.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Santa Clara jar"
                                        captionLine1="C. 1900"
                                        captionLine2="Pueblo of Santa Clara, NM"
                                        captionLine3="ASM Purchase"
                                        captionLine4="Collected by Nelle A. Dermont"
                                        potID="8279"
                                        path="img/pot-images/Col5/Shelf4/8279.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         <Pot 
                                        name="Cochiti ram effigy pitcher (not visible)"
                                        captionLine1="Teresita Romero"
                                        captionLine2="C. 1962"
                                        captionLine3="Pueblo of Cochiti, NM"
                                        captionLine4="ASM Purchase by Wilma Kaemlein"
                                        potID="E-5340"
                                        path="img/pot-images/Col5/Shelf4/E-5340.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 6",
                      tabIcon: Filter6Icon,
                      tabContent: (
                      <div>
                        <IntroSection6 />
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
      <Footer />
    </div>
    </div>
  );
}
