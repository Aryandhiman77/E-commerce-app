import React, { useEffect, useState } from 'react'
import { ChakraProvider, Progress, Stack, Text } from '@chakra-ui/react'
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'

  const steps = [
    { title: 'Placed', description: 'Placed' },
    { title: 'Processing', description: 'Processing' },
    { title: 'Shipping', description: 'Shipping' },
    { title: 'Delivered', description: 'Delivered' },
  ]

  const TrackOrders = ({status}) => {
    let [indexvar,setindex] = useState(0);

    const { activeStep } = useSteps({
      index: indexvar,
      count: steps.length,
    })

    useEffect(()=>{
      if(status==="placed") {
        setindex(1);
      }else if(status==='processing'){
        setindex(2);
      }
      else if(status==='shipping'){
        setindex(3);
      }
      else{
        setindex(4);
      }
    },[])
    return (
      <ChakraProvider>
      <Stack>
      <Stepper size='sm' index={indexvar} gap='0'>
        {steps.map((step, index) => (
          <Step key={index+2} gap='0'>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: '0' }} />
          </Step>
        ))}
      </Stepper>
      <Text>
        <b>{indexvar===1 &&"Placed"}</b>
        <b>{indexvar===2 &&"Processing"}</b>
        <b>{indexvar===3 &&"Shipping"}</b>
        <b>{indexvar===4 &&"Delivered"}</b>
      </Text>
    </Stack>
      </ChakraProvider>
    )
}

export default TrackOrders
