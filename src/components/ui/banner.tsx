import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./colorMode";
import { useDevice } from "../../hooks/device";

export const Banner = () => {
    const device = useDevice();

    return (
        <Box
            backgroundImage={'url(./dist/imgs/banner.svg)'}
            backgroundPosition='center'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            h={device == 'MOBILE' ? '20vh' : '30vh'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            textAlign={'center'}
        >
            <Flex direction={'column'}>
                <ColorModeButton style={{
                    position: 'absolute',
                    right: '5%',
                    top: '10px'
                }}/>
                <Text textStyle={'4xl'} color={'whiteAlpha.900'}>Hello</Text>
                <Text textStyle={'2xl'} color={'white'}>check out my projects</Text>
            </Flex>
        </Box>
    )
}