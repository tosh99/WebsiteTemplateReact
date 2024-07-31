import styles from './website.module.scss';
import { SFlex, SInput, SPageSection } from 'react-simple-ui-lib';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Website() {
    return (
        <>
            <SPageSection height={'100vh'} className={styles.hero} paddingTop={'15%'}>
                <h1>Hero Section</h1>
            </SPageSection>

            <SPageSection height={'100vh'} className={styles.carousel}>
                <h1>Carousel Section</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </SPageSection>

            <SPageSection height={'100vh'} className={styles.review}>
                <h1>Review Section</h1>
                <img src="https://placehold.co/512" alt="avatar" />
            </SPageSection>

            <SPageSection className={styles.footer} paddingTop={30} paddingBottom={30}>
                <SFlex justify={'space-between'}>
                    <SFlex direction={'column'}>
                        <p>Address</p>
                        <a>Email</a>
                    </SFlex>
                    <SFlex direction={'column'}>
                        <h3>Menu</h3>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                    </SFlex>
                    <SFlex direction={'column'}>
                        <h3>Menu</h3>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                        <br />
                        <h3>Menu</h3>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                        <p>Menu 1</p>
                    </SFlex>
                    <SFlex>
                        <SInput placeholder={'Email Address'} />
                    </SFlex>
                </SFlex>
            </SPageSection>

            <SPageSection
                className={styles.copyright}
                style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                }}>
                <h1>Copyright Section</h1>
            </SPageSection>
        </>
    );
}
