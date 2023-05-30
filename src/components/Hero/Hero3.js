import clientsBanner from '../../assets/img/clients.png';

import Divider  from "@material-ui/core/Divider";

const Hero3 = ({ pageTitle = ''}) => {

    return (
        <section className='client-banner' style={{ backgroundImage: `url(${clientsBanner})` }}>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='client-content'>
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


export default Hero3;