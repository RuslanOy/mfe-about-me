import { Button } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';

export const ChangeLang = (): React.ReactElement => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={toggleLanguage} shadow="xl">
      {i18n.language === 'ru' ? 'Eng' : 'Ru'}
      <IoLanguageOutline />
    </Button>
  );
};
