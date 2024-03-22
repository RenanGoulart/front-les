import styled from "styled-components";

export const Container = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  padding-bottom: 1rem;
  margin-top: 2rem;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
`;

export const AlbumName = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const ArtistName = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 100%;
  height: auto;

  padding: 0.75rem;
  margin-top: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_ff};

  border: none;
  background-color: ${({ theme }) => theme.colors.green_56};

  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;
