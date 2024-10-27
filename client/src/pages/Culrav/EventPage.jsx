import culravmobilebg from '@/images/avishmobbottom.png';
import culravhbottom from '@/images/baseblack.png';
import bullet from '@/images/bullet1.png';
import layer1 from '@/images/Layer1.png';
import paint from '@/images/paint.png';
import wall from '@/images/walls1.png';

function CulravEvent() {
    return (
        <div
            className="flex flex-col min-h-screen bg-[#FFFAF0] text-[#181818] w-full bg-fixed overflow-x-hidden pt-[10%] "
            style={{
                backgroundImage: `url(${wall})`, // Two layers of background images
                backgroundRepeat: 'repeat', // Repeat the first image (avishkareventbg) across the page, keep paint centered
                backgroundPosition: 'top-left', // Position each background layer
                backgroundSize: '100vw', // Set the size for each background
            }}
        >
            {/* Paint Background Section */}
            <div
                className="flex items-center justify-center text-center w-full text-[#FFFAF0] "
                style={{
                    backgroundImage: `url(${paint})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '60vw',
                    height: '35vw',  // Adjust height to fit the paint design
                    margin: '0 auto' // Center-align paint background
                }}
            >
                <span className="font-bionix text-[4vw] pl-[5%]">KREEDOMANIA</span>
            </div>

            {/* Content Wrapper */}
            <div className="flex-grow"
            >
                {/* Description Section */}
                <section className="flex flex-col items-center px-4 py-6 text-center"
                        style={{
                        backgroundImage: ` url(${layer1})`, // Two layers of background images
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '70vw',
                        height: '35vw',  // Adjust height to fit the paint design
                        margin: '0 auto'
                            
                    }}>
                    <h2 className="text-[#F54E25] font-bionix text-[3.5vw] uppercase mb-4">Description</h2>
                    <p className="w-full text-[3vw] text-[#181818] font-bebas"
                    style={{ wordSpacing: '0.2em' }}>
                        We invite you all to take part in the most popular form of theatre, stage play.
                        Rangmanch brings you Natymanach, stage play. So get up and get ready to mesmerize
                        the world with your theatrics.
                    </p>
                </section>
                {/* Rules Section */}
                <section className="px-4 py-6">
                    <h2 className="text-[#F54E25] font-bionix text-[3.5vw] uppercase text-center mb-4">Rules</h2>
                    <ul className="w-full mx-[5%] text-[#181818] font-bebas space-y-4 items-start justify-center flex flex-col">
                        {[
                            "The team shall consist of a minimum of 8 and a maximum of 35 people ",
                            "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
                            "The time limit for each performance is 20 minutes.",
                            "Use of harmful props or materials is prohibited.",
                            "Any kind of offensive content will lead to disqualification.",
                            "Teams must respect other participants and maintain decorum."
                        ].map((rule, index) => (
                            <li key={index} className="flex items-start text-[3vw] mr-[10%]"
                            style={{ wordSpacing: '0.2em' }}>
                                <div
                                    className="mr-4 bg-cover bg-center p-[1vw]"
                                    style={{
                                        backgroundImage: `url(${bullet})`,
                                        width: '0.5em',   // Set bullet width relative to font size
                                        height: '0.5em'   // Set bullet height relative to font size
                                    }}
                                ></div>
                                {rule}
                            </li>
                        ))}
                    </ul>

                </section>

                {/* Register Button */}
                <div className="flex justify-center py-6">
                    <button className="bg-[#F54E25] text-[2.5vw] font-bionix hover:bg-orange-600 text-[#FFFAF0] font-bold py-2 px-6">
                        Register
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <div
                className="font-bionix w-full h-full bottom-0 text-center relative overflow-y-hidden overflow-x-hidden"
            >
                {/* Mobile Background */}
                <div
                    className="absolute inset-0 w-full h-[25vw] bg-cover bg-no-repeat hidden sm:block"
                    style={{ backgroundImage: `url(${culravhbottom})` }}
                ></div>
                <div
                    className="absolute inset-0 w-full h-[20vw] sm:hidden bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${culravmobilebg})` }}
                ></div>

                {/* Content overlay */}
                <div className="relative z-10  ">
                    <h2 className="uppercase text-[3vw] text-[#F54E25] font-bold mb-4 mt-[5%]">Coordinators</h2>
                    <div className="flex justify-around font-bold text-[#FFFAF0] text-[2.5vw]">
                        <div>Person Name</div>
                        <div>Person Name</div>
                        <div>Person Name</div>
                        <div>Person Name</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CulravEvent;
