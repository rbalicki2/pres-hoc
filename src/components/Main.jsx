import React from 'react';
import ImageContainer from 'src/components/ImageContainer';
import Image from 'src/components/Image';

// I uploaded 37 images
const NUMBER_OF_IMAGES = 10;
const IMAGE_ARRAY = Array(NUMBER_OF_IMAGES).fill().map((_, i) => i);

export default () => <ImageContainer>
  {
    IMAGE_ARRAY.map(i => <Image id={i} key={i} />)
  }
</ImageContainer>;
