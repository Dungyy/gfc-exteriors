import { FaHome, FaLeaf, FaPaintRoller, FaSnowflake, FaTools, FaWater } from 'react-icons/fa'
import { GiWindow, GiElectric } from 'react-icons/gi'
import { MdOutlineFence, MdCleaningServices, MdOutlineRoofing, MdOutlineCleaningServices  } from 'react-icons/md'
import { BiSolidLandscape } from 'react-icons/bi'

export const services = [
  {
    id: 1,
    name: 'Pressure Washing',
    description: 'Restore your home\'s exterior with our professional pressure washing services.',
    details: 'Driveways, siding, decks, patios, and more.',
    category: 'exterior',
    icon: <FaWater className="text-gfc-gold" />,
  },
  {
    id: 2,
    name: 'Gutter Cleaning',
    description: 'Prevent water damage with regular gutter cleaning and maintenance.',
    details: 'Debris removal, downspout clearing, and minor repairs.',
    category: 'maintenance',
    icon: <MdOutlineCleaningServices className="text-gfc-gold" />,
  },
  {
    id: 3,
    name: 'Window Installation & Cleaning',
    description: 'Enhance your view with our window installation and cleaning services.',
    details: 'Interior and exterior, screens, tracks, and sills.',
    category: 'exterior',
    icon: <GiWindow className="text-gfc-gold" />,
  },
  {
    id: 4,
    name: 'Lawn Care',
    description: 'Keep your lawn looking its best with our professional care services.',
    details: 'Mowing, trimming, edging, and fertilization.',
    category: 'landscaping',
    icon: <FaLeaf className="text-gfc-gold" />,
  },
  {
    id: 5,
    name: 'Snow Removal',
    description: 'Stay safe during winter with prompt and reliable snow removal.',
    details: 'Driveways, walkways, and commercial properties.',
    category: 'seasonal',
    icon: <FaSnowflake className="text-gfc-gold" />,
  },
  {
    id: 6,
    name: 'Roof Cleaning',
    description: 'Extend the life of your roof with our specialized cleaning services.',
    details: 'Moss removal, algae treatment, and preventative care.',
    category: 'maintenance',
    icon: <MdOutlineRoofing className="text-gfc-gold" />,
  },
  {
    id: 7,
    name: 'Fence Installation',
    description: 'Enhance privacy and security with our quality fence installation.',
    details: 'Wood, vinyl, chain link, and custom designs.',
    category: 'exterior',
    icon: <MdOutlineFence className="text-gfc-gold" />,
  },
  // {
  //   id: 8,
  //   name: 'Electrical Repairs',
  //   description: 'Professional electrical services for a safe and efficient home.',
  //   details: 'Fixture installation, wiring, and troubleshooting.',
  //   category: 'maintenance',
  //   icon: <GiElectric className="text-gfc-gold" />,
  // },
  {
    id: 9,
    name: 'Seasonal Cleanup',
    description: 'Prepare your property for the changing seasons with our thorough cleanup.',
    details: 'Spring and fall cleanups, leaf removal, and bed preparation.',
    category: 'seasonal',
    icon: <MdCleaningServices className="text-gfc-gold" />,
  },
]

export const categories = [
  { id: 'all', name: 'All Services', icon: <FaHome /> },
  { id: 'exterior', name: 'Exterior', icon: <FaPaintRoller /> },
  { id: 'landscaping', name: 'Landscaping', icon: <BiSolidLandscape /> },
  { id: 'seasonal', name: 'Seasonal', icon: <FaSnowflake /> },
  { id: 'maintenance', name: 'Maintenance', icon: <FaTools /> },
]