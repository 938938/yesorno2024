import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href={'/'}>메인</Link>
      <Link href={'/history'}>이력</Link>
      <Link href={'/setting'}>설정</Link>
    </div>
  );
};

export default Nav;
