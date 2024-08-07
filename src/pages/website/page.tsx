import styles from './page.module.scss';
import { SFlex, SInput, SPageSection } from 'react-simple-ui-lib';

export default function Page() {
    return (
        <>
            <SPageSection height={'100vh'} className={styles.hero} paddingTop={'15%'}>
                <h1>Hero Section</h1>
            </SPageSection>

            <SPageSection height={'100vh'} className={styles.carousel}>
                <h1>Carousel Section</h1>
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
        </>
    );
}
