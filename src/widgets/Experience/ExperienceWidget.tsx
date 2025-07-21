import React from 'react';
import { Accordion, Heading, List, Skeleton, Text } from '@chakra-ui/react';
import { LuCircleCheck } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { JobExperience } from './config';

export const ExperienceWidget = (): React.ReactElement => {
  const { t, ready } = useTranslation();

  if (!ready) return <Skeleton height="200px" />;

  const jobExperience = t('jobExperience', { returnObjects: true, defaultValue: [] });
  const safeExperience = Array.isArray(jobExperience) ? (jobExperience as JobExperience[]) : [];

  return (
    <Accordion.Root
      variant="subtle"
      multiple
      borderWidth="revert"
      borderRadius="l3"
      borderColor="border.muted"
      padding="6"
      size="lg"
      maxWidth="700px"
      minWidth={{ base: 'auto', md: '700px' }}
      shadow="2xl"
    >
      <Heading as="h2" paddingY="2.5" paddingX="4.5">
        {t('experience')}
      </Heading>
      {safeExperience.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <LuCircleCheck />
            <Heading as="h3">{item.company}</Heading>
            <Accordion.ItemIndicator />
            <Text textStyle="xs" color="fg.muted">
              {item.value === 'a' && t('currentJob')}
            </Text>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.title}</Accordion.ItemBody>
            {item.description.length > 0 && (
              <Accordion.ItemBody>
                {item.description.map((el, index) => (
                  <List.Root as="ul" key={index}>
                    <List.Item>{el}</List.Item>
                  </List.Root>
                ))}
              </Accordion.ItemBody>
            )}
            <Accordion.ItemBody>{item.responsibilities.text}</Accordion.ItemBody>
            <Accordion.ItemBody>
              {item.responsibilities.responsibilitiesArray.map((el, index) => (
                <List.Root key={index} padding="1">
                  <List.Item>{el}</List.Item>
                </List.Root>
              ))}
            </Accordion.ItemBody>
            <Accordion.ItemBody>{item.stack}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
