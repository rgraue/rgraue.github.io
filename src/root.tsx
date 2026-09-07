import React from 'react';
import { ColorModeProvider } from './components/ui/colorMode';
import { ChakraProvider, defaultSystem, Flex } from '@chakra-ui/react';
import { Footer } from './components/footer/footer';
import { Projects } from './components/projects';
import { Banner } from './components/ui/banner';

export const Root = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider defaultTheme='dark'>
                <Flex direction={'column'} justify={'space-between'} h='110dvh'>
                    <Banner/>
                    <Projects />
                    <Footer />
                </Flex>
            </ColorModeProvider>
        </ChakraProvider>
    )
    
}