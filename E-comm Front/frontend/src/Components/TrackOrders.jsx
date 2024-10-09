import React, { useEffect, useState } from 'react'
import { ChakraProvider, Stack, Text } from '@chakra-ui/react'
import {
    Step,
    StepIcon,
    StepIndicator,
    StepSeparator,
    StepStatus,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const steps = [
  { title: 'Placed', description: 'Placed' },
  { title: 'Processing', description: 'Processing' },
  { title: 'Shipping', description: 'Shipping' },
  { title: 'Delivered', description: 'Delivered' },
];

const TrackOrders = ({ status }) => {
  const [indexvar, setIndex] = useState(0);

  const { activeStep } = useSteps({
    index: indexvar,
    count: steps.length,
  });

  // Define the ripple effect using keyframes
  const ripple = keyframes`
    0% {
      box-shadow: 0 0 0 0 gray;
    }
    70% {
      box-shadow: 0 0 0 10px rgba(66, 153, 225, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(66, 153, 225, 0);
    }
  `;

  // Custom RippleStepIcon component
  const RippleStepIcon = ({ isRipple }) => (
    <StepIcon
      sx={{
        animation: isRipple ? `${ripple} 1.5s infinite` : 'none',
        borderRadius: '50%',
        padding: '4px',
        border: '2px solid',
        borderColor: 'blue.400',
      }}
    />
  );

  // Update the index based on status prop
  useEffect(() => {
    if (status === 'placed') {
      setIndex(1);
    } else if (status === 'processing') {
      setIndex(2);
    } else if (status === 'shipping') {
      setIndex(3);
    } else if (status === 'delivered') {
      setIndex(4);
    }
  }, [status]);

  return (
    <ChakraProvider>
      <Stack>
        <Stepper size="sm" index={indexvar} gap="0">
          {steps.map((step, index) => (
            <Step key={index} gap="0">
              <StepIndicator>
                <StepStatus
                  complete={<RippleStepIcon isRipple={index+1 === indexvar} />}
                />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: '0' }} />
            </Step>
          ))}
        </Stepper>
        <Text mt={4}>
          <b>{indexvar === 1 && 'Placed'}</b>
          <b>{indexvar === 2 && 'Processing'}</b>
          <b>{indexvar === 3 && 'Shipping'}</b>
          <b>{indexvar === 4 && 'Delivered'}</b>
        </Text>
      </Stack>
    </ChakraProvider>
  );
}

export default TrackOrders;
