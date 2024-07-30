import { setAccessToken } from '../../axiosInstance';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { fetchLogoutUser } from '../../redux/thunkActions';
import { Avatar, Button, IconButton, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Navbar() {
  const user = useAppSelector((store) => store.userSlice.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickHome = () => {
    navigate('/')
  }

  const clickGame = () => {
    navigate('/games')
  }

  const clickSingIn = () => {
    navigate('/signin')
  }

  const clickRegistr = () => {
    navigate('/signup')
  }

  const clickProfile = () => {
    navigate('/profile')
  }

  const logoutHandler = async () => {
    await dispatch(fetchLogoutUser());
    setAccessToken('');
  };

  return (
    <div className={styles.wrapper}>
      {user?.username ? (
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.nameAva}>
              <Avatar className={styles.ava} width={'55px'} height={'60px'} backgroundColor={'gray'} src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}`} alt="avatar" />
              <div className={styles.nickName}>{user.username}</div>
            </div>
          </div>
          <Link to="/" className={styles.name}>СВОЯ ИГРА</Link>
          <Link to="/contact" className={styles.name}>Контакты</Link>
          <div className={styles.right}>
            <Menu>
              <MenuButton
                marginLeft={'20px'}
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                backgroundColor={'white'}
              />
              <MenuList padding={'0px'}>
                <Button fontSize={'25px'} width={'100%'} onClick={clickGame} color={'black'}>Игра</Button>
                <Button fontSize={'25px'} width={'100%'} onClick={clickProfile} color={'black'}>Профиль</Button>
                <Button fontSize={'25px'} width={'100%'} onClick={logoutHandler} color={'black'}>Выйти</Button>
              </MenuList>
            </Menu>
          </div>
        </div>
        ) : (
          <div className={styles.wrapper}>
            <div className={styles.left}>
            </div>
            <Link to="/" className={styles.name}>СВОЯ ИГРА</Link>
            <div className={styles.right}>
              <Menu>
                <MenuButton
                  marginLeft={'20px'}
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  backgroundColor={'white'}
                />
                <MenuList padding={'0px'}>
                  {/* <Button fontSize={'25px'} width={'100%'} onClick={clickHome} color={'black'}>Главная</Button> */}
                  {/* <Button fontSize={'25px'} width={'100%'} onClick={clickSingIn} color={'black'}>Вход</Button>
                  <Button fontSize={'25px'} width={'100%'} onClick={clickRegistr} color={'black'}>Регистрация</Button> */}
                  <AuthForm fontSize={'25px'} width={'100%'} title='Войти' type='signin' />
                  <AuthForm fontSize={'25px'} width={'100%'} title='Зарегистрироваться' type='signup' />
                </MenuList>
              </Menu>
            </div>
          </div>
        )}
        
    </div>
    // <div className={styles.wrapper}>
    //   <div className={styles.left}>
    //     <Link to="/">На главную</Link>
    //   </div>
    //   <div className={styles.left}>
    //     <Link to="/hooks">Хуки</Link>
    //   </div>
    //   <div className={styles.right}>
    //     {user?.username ? (
    //       <>
    //         <Link to="/">{user.username}</Link>
    //         <p className={styles.fake__link} onClick={logoutHandler}>
    //           Выйти
    //         </p>
    //       </>
    //     ) : (
    //       <>
    //         <Link to="/signin">Войти</Link>
    //         <Link to="/signup">Регистрация</Link>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
}
