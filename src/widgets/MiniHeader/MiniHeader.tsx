import { ChangeLang } from '@/features/ChangeLanguage';
import { DownloadCV } from '@/features/DownloadCV';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const MiniHeader = (): React.ReactElement => {
  return (
    <Flex justifyContent="space-between" width="full" direction={{base: 'column', md: 'row'}} gap='4' padding='2'>
      <ChangeLang />
      <DownloadCV />
    </Flex>
  );
};
