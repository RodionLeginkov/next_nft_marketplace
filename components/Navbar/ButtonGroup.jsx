import { useContext } from 'react';

import { NFTContext } from '../../context/NFTContext';
import Button from '../Button';

const ButtonGroup = (props) => {
  const { router, setActive } = props;
  const { connectWallet, currentAccount } = useContext(NFTContext);

  const handleClick = () => {
    setActive('');

    router.push('/create-nft');
  };

  return currentAccount ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={handleClick}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={connectWallet}
    />
  );
};

export default ButtonGroup;
