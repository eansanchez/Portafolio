import React from 'react';
import { Grid, GridItem, Avatar, Text, } from "@chakra-ui/react";
import '../App.css';

const Profile = () => {
    return (
      <Grid
        templateRows="repeat(2, 1fr)"
        h="200px"
        gap={4}
        templateColumns="repeat(5, 1fr)"
        mt="150px"
        mr="100px"
        ml="100px"
        mb="550px"
      >

  <GridItem ml="10px" rowSpan={2} colSpan={1} bg="">
  
    <Avatar mt="20px" ml="50px" size="xl" name="Christian Nwamba" src="https://bit.ly/code-beast" />{" "}
    <Text mt="20px" ml="60px" fontSize="15px" color="Orange"
     style={{fontSize:"20px", fontFamily: 'Roboto'}}
    >EMANUEL SANCHEZ</Text>
    <Text 
    mt="20px" mb="250px" ml="20px" color="grey">

      <h4 style={{fontSize:"15px", fontFamily: 'Roboto'}}>
      Desarrollador Front-End.
      Proactivo, responsable y con
      aspiracion de crecimiento
      profesional en el campo IT,
      aplicando al 100% las habilidades
      adquiridas.
      </h4>
      <br></br>
      <hr />
      <br></br>
      <h4 mt="2px" style={{fontSize:"15px", fontFamily: 'Roboto'}}
      >Excelentes habilidades de diseño y creación.
      Óptimo desempeño en equipo e independiente.
      Responsabilidad y disciplina
      Capacidad de organización
      Formación continua
      </h4>

      </Text>

  </GridItem>



  <GridItem colSpan={3} bg="">
  <Text mt="20px" ml="60px" fontSize="30px" color="Orange" textAlign="center">
    <h2 style={{fontSize:"30px", fontFamily: 'Roboto'}}>
      CONOCIMIENTOS Y FORMACIÓN
    </h2>
    <hr />
    <br></br>
  </Text>
  <Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>DISEÑO WEB ADAPTABLE</strong> (responsive design) <br />
  Implementación práctica, conocimientos de la teoría y tendencias.
  </h4>
</Text>

<Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>HTML5</strong> <br />
  Páginas web semánticas con los últimos estándares de codificación.
  </h4>
</Text>

<Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>CSS3</strong> <br />
  Experiencia y formación referente a las novedades en CSS.
  </h4>
</Text> 

<Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>JAVASCRIPT</strong> <br />
  Experiencia en el lenguaje de programación JavaScript 
  </h4>
</Text>

<Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>REACT</strong> <br />
  En proceso de aprendisaje en el Framework Reactjs
  </h4>
</Text>

<Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>GITHUB</strong> <br />
  Conocimientos en el sistema de gestión de proyectos Github
  </h4>
 </Text> 

 <Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>POTHOSHOP</strong> <br />
  Conocimiento y experiencia enfocado al diseño gráfico y web
  </h4>
 </Text> 

 <Text mt="20px" ml="60px" fontSize="15px" color="grey">
<h4 textAlign="center" style={{fontSize:"15px", fontFamily: 'Roboto' }}>
  <strong>ILUSTRATOR</strong> <br />
  Conocimiento y experiencia enfocado al diseño gráfico y web
  </h4>
 </Text> 

  


   </GridItem> 
</Grid>
    )
}

export default Profile; 
