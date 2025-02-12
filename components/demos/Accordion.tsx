import React from 'react';
import { styled, keyframes, Box } from '@modulz/design-system';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { HeroContainer } from '@components/HeroContainer';

const StyledAccordion = styled(Accordion.Root, {
  borderTop: '1px solid gainsboro',
});

const StyledItem = styled(Accordion.Item, {
  borderBottom: '1px solid gainsboro',
});

const StyledHeader = styled(Accordion.Header, {
  margin: 0,
  display: 'flex',
});

const StyledButton = styled(Accordion.Button, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 10,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledPanel = styled(Accordion.Panel, {
  padding: 10,
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const AccordionDemo = ({ showChevrons, preventClose, initialValue = null, ...props }) => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <StyledAccordion
      type="single"
      {...props}
      value={value}
      onValueChange={(newValue) => {
        if (preventClose && newValue === undefined) {
          return;
        }
        setValue(newValue);
      }}
    >
      <StyledItem value="item-1">
        <StyledHeader>
          <StyledButton>Item 1 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 1.</StyledPanel>
      </StyledItem>

      <StyledItem value="item-2">
        <StyledHeader>
          <StyledButton>Item 2 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 2.</StyledPanel>
      </StyledItem>

      <StyledItem value="item-3">
        <StyledHeader>
          <StyledButton>Item 3 {showChevrons && <AccordionChevron aria-hidden />}</StyledButton>
        </StyledHeader>
        <StyledPanel>Here goes the content for the accordion item 3.</StyledPanel>
      </StyledItem>
    </StyledAccordion>
  );
};

const panel1 = keyframes({
  '0%': { transform: 'translateY(0)' },
  '29.9999%': { transform: 'translateY(0)' },
  '30%': { transform: 'translateY(0)' },
  '69.9999%': { transform: 'translateY(0)' },
  '70%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(0)' },
});

const panel2 = keyframes({
  '0%': { transform: 'translateY(0)' },
  '29.9999%': { transform: 'translateY(0)' },
  '30%': { transform: 'translateY(30px)' },
  '69.9999%': { transform: 'translateY(30px)' },
  '70%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(0)' },
});

const text1 = keyframes({
  '0%': { opacity: '0' },
  '29.9999%': { opacity: '0' },
  '30%': { opacity: '1' },
  '69.9999%': { opacity: '1' },
  '70%': { opacity: '0' },
  '100%': { opacity: '0' },
});

const text2 = keyframes({
  '0%': { opacity: '0' },
  '29.9999%': { opacity: '0' },
  '30%': { opacity: '0' },
  '69.9999%': { opacity: '0' },
  '70%': { opacity: '0' },
  '100%': { opacity: '0' },
});

const cursor = keyframes({
  '0%': { transform: 'translate(30px, 30px)' },
  '22%': { transform: 'translate(30px, 30px)' },
  '26%': { transform: 'translate(0, 0)' },
  '74%': { transform: 'translate(0, 0)' },
  '78%': { transform: 'translate(30px, 30px)' },
});

const click = keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '27%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '29%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '31%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },

  '67%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '69%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '71%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },

  '100%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
});

export const AccordionHero = () => {
  return (
    <HeroContainer>
      <Box css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: 5,
            right: -10,
            transform: 'translate(30px, 30px)',
            animation: `${cursor} 6000ms infinite`,
            animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            zIndex: '1',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0)">
              <g filter="url(#filter0_d)">
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  fill="black"
                />
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="-5.68303"
                y="-5.68302"
                width="31.4545"
                height="32.5526"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <clipPath id="clip0">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Box
            css={{
              position: 'absolute',
              top: -12,
              right: 0,
              bottom: 0,
              left: -12,
              borderRadius: '50%',
              boxShadow: '0 0 0 3px black',
              opacity: '0',
              transform: 'scale(.5)',
              animation: `${click} 6000ms infinite`,
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          ></Box>
        </Box>

        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            px: '$2',
            height: '$2',
            backgroundColor: 'white',
            width: 100,
            position: 'relative',
            animation: `${panel1} 6000ms infinite`,
          }}
        >
          <Box
            css={{
              animation: `${text1} 6000ms infinite`,
              position: 'absolute',
              bottom: -30,
              left: 0,
            }}
          >
            <Box
              css={{
                height: '$1',
                backgroundColor: 'rgba(0,0,0,.8)',
                width: 75,
                mt: 10,
              }}
            ></Box>
            <Box
              css={{
                height: '$1',
                backgroundColor: 'rgba(0,0,0,.8)',
                width: 50,
                mt: 10,
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            height: '$2',
            backgroundColor: 'white',
            width: 100,
            position: 'relative',
            my: 10,
            animation: `${panel2} 6000ms infinite`,
          }}
        >
          <Box
            css={{
              animation: `${text2} 6000ms infinite`,
              position: 'absolute',
              bottom: -30,
              left: 0,
            }}
          >
            <Box
              css={{
                height: '$1',
                backgroundColor: 'rgba(0,0,0,.8)',
                width: 75,
                mt: 10,
              }}
            ></Box>
            <Box
              css={{
                height: '$1',
                backgroundColor: 'rgba(0,0,0,.8)',
                width: 50,
                mt: 10,
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </HeroContainer>
  );
};
