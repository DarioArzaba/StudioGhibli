import {useDispatch, useSelector} from 'react-redux';
import {selectTheme} from '../app/selectors/themeSelector';
import {useCallback, useEffect} from 'react';
import {updateTheme} from '../app/actions/actionCreators';
import {readData, storeData} from '../utils/persistanceManager';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    const checkTheme = async () => {
      const storedTheme = await readData('theme');
      if (storedTheme !== null) {
        dispatch(updateTheme(storedTheme));
      } else {
        dispatch(updateTheme(theme));
      }
    };
    checkTheme();
  }, [theme, dispatch]);

  const setTheme = useCallback(
    async (newTheme: string) => {
      await storeData('theme', newTheme);
      dispatch(updateTheme(newTheme));
    },
    [dispatch],
  );

  return {theme, setTheme};
};
