import { Button, Flex, Link, Menu, Portal } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CgSoftwareDownload } from 'react-icons/cg';

export const DownloadCV = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button shadow="xl">
            {t('downloadCV')}
            <CgSoftwareDownload />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Flex direction="row" gap="1.5">
                <Button asChild>
                  <Link href="/assets/files/Ruslan_Oyun_RU_CV.pdf" download="Ruslan_Oyun_RU_CV.pdf">
                    RU
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/assets/files/Ruslan_Oyun_EN_CV.pdf" download="Ruslan_Oyun_EN_CV.pdf">
                    ENG
                  </Link>
                </Button>
              </Flex>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};
