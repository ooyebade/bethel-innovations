import aboutBanner from '../../assets/img/bethel-about.jpg';

import Divider  from "@material-ui/core/Divider";

const Hero4 = ({ pageTitle = ''}) => {

    return (
        <section className='about-banner' style={{ backgroundImage: `url(${aboutBanner})` }}>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='about-content'>
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


export default Hero4;