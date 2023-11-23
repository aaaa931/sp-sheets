import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

interface BaseImgProps {
  src: string;
  srcset?: string;
  alt?: string;
  width?: string;
  height?: string;
}

const StyledImgContainer = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  &::before {
    content: "Image not found";
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${grey[500]};
    color: ${grey[100]};
  }
`;

const BaseImg = ({ src, srcset, alt, width, height }: BaseImgProps) => (
  <StyledImgContainer>
    <StyledImg src={src} srcSet={srcset} alt={alt} style={{ width, height }} />
  </StyledImgContainer>
);

export default BaseImg;
