import {RootState} from '@store/index';
import {useSelector} from 'react-redux';

const useLanguage = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);

  return language;
};

export default useLanguage;
