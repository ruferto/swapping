import backIcon from '../../assets/img/arrow.svg';
import styled from 'styled-components';

const Image = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  top: 10px;
  position: relative;
`;
const BackButton = () => {
  return <Image src={backIcon} alt="back" height="40" />;
};
export default BackButton;
