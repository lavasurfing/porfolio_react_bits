// import ColorBends from '../ui/ColorBlends_background';
// import LightPillar from '../ui/LightPillar_Background';
// import Lightfall from '../ui/LightFall_Background';
// import Galaxy from '../ui/Galaxy';

import Lightning from '../ui/Lightning';

function HeroSection() {


    return (

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Lightning
                hue={260}
                xOffset={0}
                speed={1}
                intensity={1}
                size={1}
            />
        </div>

    );
}

export default HeroSection;