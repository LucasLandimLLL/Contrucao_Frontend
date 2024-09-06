import Image from 'next/image';

const Logo = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Image src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/02/27195131/Mega-Sena-8.jpg"
     alt="Logo Mega Sena" width={200} height={200} />
  </div>
);

export default Logo;
