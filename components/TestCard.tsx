import { CardWithForm } from './CardForm';
import { CardWithAnimationComponent } from './CardWithAnimationComponent';

export const TestCard = () => {
  return (
    <CardWithAnimationComponent color="white">
      <CardWithForm />
    </CardWithAnimationComponent>
  );
};
