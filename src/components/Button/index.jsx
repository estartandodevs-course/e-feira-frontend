import { PrimaryButton } from './styles';

export const Button = ({ description }) => {
  return (
    <PrimaryButton>
      <button> {description} </button>
    </PrimaryButton>
  );
};
