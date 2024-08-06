import { Button, ButtonGroup } from '@chakra-ui/react'
import './banner.css';

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-overlay"></div>
            <div className="banner-background">
                <div className="banner-content">
                    <span className="banner-title">not sure where to go? Perfect</span>
                    <ButtonGroup variant='outline' spacing='6' className="button-group">
                        <Button colorScheme='blue' h={10} className="button-custom">I'm flexible</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default Banner;
