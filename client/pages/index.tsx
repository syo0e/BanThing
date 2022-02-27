import type { NextPage } from 'next';
import Head from 'next/head';
import First from '../components/home/first/first';
import Progress from '../components/home/progress';
import Second from '../components/home/second/second';
import Introduction from '../components/home/introduction';
import Third from '../components/home/third/third';
import Caption from '../components/home/caption';
import Footer from '../components/home/footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  if (typeof window !== 'undefined') {
    window.onload = function () {
      setTimeout(function () {
        scrollTo(0, 0);
      }, 100);
    };
  }

  return (
    <>
      <div className={styles.home_container}>
        <Head>
          <title>BanThing</title>
          <meta name="BanThing" content="Order with your foodmate" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Progress />

        <First />

        <Second />

        <Third />

        <Introduction
          imagePosition={'left'}
          image={'/foodmate.png'}
          title={'내 주변의 배달메이트'}
          description={[
            '마침 배달음식을 시켜먹고 싶은데',
            '배달비도 최저금액도 함께 나눌 수 있는',
            '내 주변의 배달메이트를 찾으신다면',
            ' ',
            '지금 바로 반띵에서 확인해보세요!',
          ]}
        />

        <Introduction
          imagePosition={'right'}
          image={'/chatting.png'}
          title={'댓글을 통한 메뉴선정'}
          description={[
            '어떤 햄버거를 먹을지, 어떤 치킨을 먹을지',
            '배달메이트와 실시간으로 상의하여',
            '구체적인 메뉴를 함께 정해보세요.',
            ' ',
            '마음이 잘 통한다면 주문하기만 하면 됩니다!',
          ]}
        />
        {/* <Introduction
          imagePosition={'right'}
          image={'/rating.png'}
          title={'레이팅 시스템'}
          description={[
            '모든 합의가 끝나면 평가하기를 통해',
            '배달메이트에게 점수를 주세요!',
            ' ',
            '해당 점수는 배달메이트의 평점에 반영되며,',
            '평점은 다른 이용자들에게 노출됩니다.',
          ]}
        /> */}

        <Caption />

        <Footer />
      </div>
    </>
  );
};

export default Home;
