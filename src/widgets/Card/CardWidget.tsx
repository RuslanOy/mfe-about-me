import { Box, Heading, Image, Link, Card } from '@chakra-ui/react';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { CARD_TEXT } from './constants';
import { useTranslation } from 'react-i18next';

export const CardWidget = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Card.Root
      flexDirection={{ base: 'column', md: 'row' }}
      overflow="hidden"
      maxW="xl"
      shadow="2xl"
      borderWidth="revert"
    >
      <Image
        loading="lazy"
        objectFit="cover"
        maxW={{ base: '100%', md: '200px' }}
        width="auto"
        height="auto"
        src='https://mfe-about-me.vercel.app/assets/img/me.webp'
        alt="Ruslan Oyun"
      />
      <Box>
        <Card.Body>
          <Heading as="h1" mb="2">
            {t('name')}
          </Heading>

          <Card.Description>{t('shortAboutMe')}</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Link
            href="https://t.me/rayaoiun"
            variant="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CARD_TEXT.LINKS.TELEGRAM} <LuExternalLink />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ruslanoyun"
            variant="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CARD_TEXT.LINKS.LINKEDIN} <LuExternalLink />
          </Link>
          <Link
            href="https://github.com/RuslanOy"
            variant="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CARD_TEXT.LINKS.GITHUB} <LuExternalLink />
          </Link>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
