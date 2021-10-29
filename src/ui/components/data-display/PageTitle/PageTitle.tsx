import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle?: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled cor={'red'}>{props.title}</PageTitleStyled>

      {props.subtitle}
    </PageTitleContainer>
  );
};

export default PageTitle;