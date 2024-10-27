import avishbottom from '@/images/avishbottom.png';
import layer2 from '@/images/avishlayer2.png';
import avishkarmobilebg from '@/images/avishmobbottom.png';
import bullet from '@/images/bullet1.png';
import avishkareventbg from '@/images/Overlay.png';
import paint from '@/images/paint.png';

function AvishkarEvent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#181818]  pt-[10%] text-white bg-fixed overflow-x-hidden"
      style={{ 
        backgroundImage: `url(${avishkareventbg}), url(${layer2})`,
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center, top-left',
        backgroundSize: 'cover, 250px auto',
      }}
    >
      {/* Paint Background Section */}
      <div 
        className="flex items-center justify-center text-center w-full text-white"
        style={{ 
          backgroundImage: `url(${paint})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '60vw',
          height: '35vw',
          margin: '0 auto',
        }}
      >
        <span className="font-bionix text-[4vw] pl-[5%]">KREEDOMANIA</span>
      </div>

      {/* Content Wrapper */}
      <div className="flex-grow">
        {/* Description Section */}
        <section className="flex flex-col items-center px-4 py-6 text-center">
          <h2 className="text-[#F54E25] font-bionix text-[3.5vw] uppercase mb-4">Description</h2>
          <p className="w-full text-[3vw] font-bebas"
          style={{ wordSpacing: '0.2em' }}>
            We invite you all to take part in the most popular form of theatre, stage play.
            Rangmanch brings you Natymanach, stage play. So get up and get ready to mesmerize 
            the world with your theatrics.
          </p>
        </section>

        {/* Rules Section */}
        <section className="px-4 py-6">
          <h2 className="text-[#F54E25] font-bionix text-[3.5vw] uppercase text-center mb-4">Rules</h2>
          <ul className="w-full mx-[5%] font-bebas space-y-4 items-start justify-center flex flex-col">
            {[
              "The team shall consist of a minimum of 8 and a maximum of 35 people ",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The time limit for each performance is 20 minutes.",
              "Use of harmful props or materials is prohibited.",
              "Any kind of offensive content will lead to disqualification.",
              "Teams must respect other participants and maintain decorum."
            ].map((rule, index) => (
              <li key={index} className="flex items-start text-[2.8vw] mr-[10%]"
              style={{ wordSpacing: '0.2em' }}>
                <div 
                  className="mr-4 bg-cover bg-center p-[1vw] " 
                  style={{ 
                    backgroundImage: `url(${bullet})`,
                    width: '0.5em',
                    height: '0.5em'
                  }}
                ></div>
                {rule}
              </li>
            ))}
          </ul>
        </section>

        {/* Register Button */}
        <div className="flex justify-center py-6">
          <button className="bg-orange-500 text-[2.5vw] font-bionix hover:bg-orange-600 text-[#FFFAF0] font-bold py-2 px-6">
            Register
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full text-center relative">
        {/* Desktop Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden sm:block"
          style={{ backgroundImage: `url(${avishbottom})` }}
        ></div>
        {/* Mobile Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat sm:hidden"
          style={{ backgroundImage: `url(${avishkarmobilebg})` }}
        ></div>

        {/* Content overlay */}
        <div className="relative z-10 py-6">
          <h2 className="uppercase text-[3vw] font-bionix mb-4">Coordinators</h2>
          <div className="flex justify-around font-bionix text-[2.5vw]">
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

export default AvishkarEvent;
