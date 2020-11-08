import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../../components/Footer';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
