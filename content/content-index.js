// for technology field
import { softwareDevelopment } from './technology/software-development.js';
import { dataScience } from './technology/data-science.js';
import { cloudComputing } from './technology/cloud-computing.js';
import { cybersecurity } from './technology/cybersecurity.js';
import { embeddedIoT } from './technology/embedded.js';

// for engineering field 
import { mechanicalEngineering } from './engineering/mechanical.js';
import { electricalEngineering } from './engineering/electrical.js';
import { computerEngineering } from './engineering/computer.js';
import { civilEngineering } from './engineering/civil.js';
import { chemicalEngineering } from './engineering/chemical.js';

// for economics and management field 
import { economics } from './econ and management/economics.js';
import { businessAdmin } from './econ and management/business administration.js';
import { finance } from './econ and management/finance.js';
import { management } from './econ and management/management.js';
import { internationalBusiness } from './econ and management/international business.js';

// for healthcare and wellness
import { medicine } from './healthcare and wellness/medicine.js';
import { nursing } from './healthcare and wellness/nursing.js';
import { pharmacy } from './healthcare and wellness/pharmacy.js';
import { publicHealth } from './healthcare and wellness/public health.js';
import { physiotherapy } from './healthcare and wellness/physical therapy.js';

// for creative and communication 
import { graphicDesign } from './creative and communication/graphic-design.js';
import { journalismMedia } from './creative and communication/journal-media.js';
import { advertisingMarketing } from './creative and communication/advertising-marketing.js';
import { filmTvProduction } from './creative and communication/film-television.js';
import { publicRelations } from './creative and communication/public-relation.js';

// for education and humanities
import { earlyChildhoodEducation } from './education and humanities/early-childhood.js';
import { secondaryHigherEducation } from './education and humanities/secondary-higher.js';
import { linguisticsTranslation } from './education and humanities/linguistics.js';
import { philosophyEthics } from './education and humanities/philosophy-ethic.js';
import { historyCulturalStudies } from './education and humanities/history-culture.js'

// for service industry 
import { hospitalityTourism } from './service industry/hospitality-tourism.js';
import { culinaryArts } from './service industry/art-food.js';
import { retailSales } from './service industry/retail-sale.js';
import { eventPlanning } from './service industry/event-planning.js';
import { customerSupport } from './service industry/customer-support.js';

// for environment and agriculture
import { environmentalScience } from './environment and agriculture/environmental-science.js';
import { agronomyScience } from './environment and agriculture/agronomy-crop.js';
import { animalScience } from './environment and agriculture/animal-science.js';
import { forestryWildlife } from './environment and agriculture/forestry-wildlife.js';
import { renewableEnergy } from './environment and agriculture/renewable-energy.js';

export const contentMappings = {
    // for technology field 
    'software-development': softwareDevelopment,
    'data-science-ai': dataScience,
    'cloud-computing': cloudComputing,
    'cybersecurity': cybersecurity,
    'embedded': embeddedIoT,
    
    // for engineering field 
    'mechanical-engineering': mechanicalEngineering,
    'electrical-engineering': electricalEngineering,
    'computer-engineering': computerEngineering,    
    'civil-engineering': civilEngineering,
    'chemical-engineering': chemicalEngineering,

    // for economics and management field
    'economics': economics,
    'business-administration': businessAdmin,
    'finance': finance,
    'management': management,
    'international-business': internationalBusiness,

    // healthcare and wellness
    'medicine': medicine,
    'nursing': nursing,
    'pharmacy': pharmacy,
    'public-health': publicHealth,
    'physical-therapy': physiotherapy,

    // for creative and communication
    'graphic-design': graphicDesign, 
    'journalism-media': journalismMedia,
    'advertising-marketing': advertisingMarketing,
    'film-tv-production': filmTvProduction,
    'public-relations': publicRelations,

    // for education and humanities
    'early-childhood-education': earlyChildhoodEducation,
    'secondary-higher-education': secondaryHigherEducation,
    'linguistics-translation': linguisticsTranslation,
    'philosophy-ethics': philosophyEthics,
    'history-cultural-studies': historyCulturalStudies,

    // for service industry 
    'hospitality-tourism': hospitalityTourism,
    'culinary-arts': culinaryArts,
    'retail-sales': retailSales,
    'event-planning': eventPlanning,
    'customer-support': customerSupport, 

    // for environment and agriculture
    'environmental-science': environmentalScience,
    'agronomy': agronomyScience,
    'animal-science': animalScience,
    'forestry-wildlife': forestryWildlife,
    'renewable-energy': renewableEnergy,
};
