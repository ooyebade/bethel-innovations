import servicesBanner from '../../assets/img/bether-services.jpg';

import Divider  from "@material-ui/core/Divider";

const Hero5 = ({ pageTitle = '', subHeader=''}) => {

    return (
        <section className='services-banner' style={{ backgroundImage: `url(${servicesBanner})` }}>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='services-content'>
                            <Divider style={{ backgroundColor: 'white', width: '100px', display: 'block', marginRight: 'auto', marginLeft: 'auto', opacity: '1', paddingLeft: '100px', marginBottom: '20px', textAlign: 'center'}} />
                            <h2>{pageTitle}</h2>
                            <h4>{subHeader}</h4>
                            <Divider style={{ backgroundColor: 'white', width: '100px', display: 'block', marginRight: 'auto', marginLeft: 'auto', opacity: '1', paddingLeft: '100px', marginBottom: '10px', textAlign: 'center'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero5;