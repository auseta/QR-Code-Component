import React from 'react'
import { StyledH1, StyledImage, StyledP, StyledQrContainer } from './StyledComponents'
import QrCodeImage from '../../images/image-qr-code.png'


const QrContainer = () => {
  return (
    <StyledQrContainer>
      <StyledImage src={ QrCodeImage } alt='qr-code' />
      <StyledH1>Improve your front-end skills by building projects</StyledH1>
      <StyledP>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</StyledP>
    </StyledQrContainer>
  )
}

export default QrContainer