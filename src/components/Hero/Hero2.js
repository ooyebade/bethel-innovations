import bethelBanner from '../../assets/img/bethel-hero-2.jpg';

import Divider  from "@material-ui/core/Divider";

const Hero2 = ({ pageTitle = ''}) => {

    return (
        <section className='page-banner' style={{ backgroundImage: `url(${bethelBanner})` }}>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='page-content'>
                        <Divider style={{ backgroundColor: 'white', width: '100px', display: 'block', marginRight: 'auto', marginLeft: 'auto', opacity: '1', paddingLeft: '100px', marginBottom: '10px', textAlign: 'center'}} />
                            <h2>{pageTitle}</h2>
                            <Divider style={{ backgroundColor: 'white', width: '100px', display: 'block', marginRight: 'auto', marginLeft: 'auto', opacity: '1', paddingLeft: '100px', marginBottom: '10px', textAlign: 'center'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero2;