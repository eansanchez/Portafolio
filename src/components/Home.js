import React from 'react';
import { SimpleGrid, Box, } from "@chakra-ui/react";
import '../App.css';

const Home = () => {
    return (
        
        <SimpleGrid columns={1} spacing={0}>
            <Box 
           mt="150px" 
           ml="320px"
           mb="50px" 
           color="Orange"
           fontSize="30px"  
           textAlign="">
                <h1 style={{fontSize:"70px", fontFamily: 'Roboto'}}>
                                 EMANUEL SANCHEZ.
                </h1>     
            </Box>
            <Box 
           mt="px" 
           ml="30px"
           mb="200px" 
           color="Grey"  
           textAlign="center">
                <h4 style={{fontSize:"20px", fontFamily: 'Roboto'}}>
                Desarrollador Front-End. Proactivo, responsable y con aspiracion de crecimiento profesional en el campo IT, <br /> aplicando al 100% las habilidades adquiridas.
                </h4> 
                <br></br> 
                <br></br>
             <hr></hr>
            </Box>
        </SimpleGrid>

    ) 
}

export default Home;