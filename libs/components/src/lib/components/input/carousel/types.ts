import { PrizmInputCarouselContent } from './carousel-content';

export interface PrizmInputCarousel {
  carouselContent: PrizmInputCarouselContent;
  lightMode: boolean;
  disabled: boolean;
  stepLeft(): void;
  left(): void;
  stepRight(): void;
  right(): void;
}
