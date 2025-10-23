export interface Project {
  id: string
  title: string
  location: string
  type: string
  description: string
  year: string
  area?: string
  images: string[]
  featured: boolean
  category: 'municipal' | 'metallurgical' | 'railway'
  tags: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ManufacturingData {
  brandName: string
  shortName: string
  tagline: string
  description: string
  companyInfo: {
    cin: string
    pan: string
    incorporated: string
    type: string
  }
  about: {
    founded: string
    capacity: string
    industry: string
    summary: string
    promoters: Array<{
      name: string
      experience: string
      focus: string
    }>
    coreActivities: string
  }
  factory: {
    address: string
    process: string
    location: string
  }
  expansion: {
    projectCost: string
    capacity: string
    completion: string
    promotersContribution: string
    termLoan: string
  }
  products: Array<{
    id: string
    title: string
    description: string
    features: string[]
    category: string
  }>
  infrastructure: {
    manufacturing: {
      title: string
      description: string
      features: string[]
    }
    testing: {
      title: string
      description: string
      features: string[]
    }
    it: {
      title: string
      description: string
      features: string[]
    }
    design: {
      title: string
      description: string
      features: string[]
    }
  }
  quality: {
    assurance: {
      title: string
      description: string
      features: string[]
    }
    laboratory: {
      title: string
      description: string
      features: string[]
    }
    certifications: {
      title: string
      description: string
      features: string[]
    }
  }
  manufacturingProcess: Array<{
    step: string
    description: string
  }>
  rawMaterials: string[]
  utilities: {
    power: string
    water: string
    fuel: string
    safety: string
  }
  groupCompanies: Array<{
    name: string
    business: string
  }>
  industryContext: {
    turnover: string
    exports: string
    sectors: {
      automotive: string
      pipesFittings: string
      agriculture: string
      sanitaryWare: string
      others: string
    }
    position: string
  }
  contact: {
    office: {
      address: string
      type: string
    }
    factory: {
      address: string
      type: string
    }
    phone: string
    email: string
    website: string
  }
  quickFacts: Array<{
    label: string
    value: string
  }>
}

export const projects: Project[] = [
  {
    id: 'municipal-casting',
    title: 'Municipal Casting Project',
    location: 'Durgapur',
    type: 'Municipal Infrastructure',
    description: 'High-strength, corrosion-resistant municipal castings built to IS standards. Precision manufacturing ensures durability and reliability for urban infrastructure.',
    year: '2024',
    area: '7,200 MTPA',
    images: [
      '/images/dippl/municipal/manhole-covers.jpg',
      '/images/dippl/municipal/drainage-grates.jpg',
      '/images/dippl/municipal/utility-access.jpg',
      '/images/dippl/municipal/street-furniture.jpg'
    ],
    featured: true,
    category: 'municipal',
    tags: ['municipal', 'infrastructure', 'corrosion-resistant', 'IS standards']
  },
  {
    id: 'railway-casting',
    title: 'Railway Infrastructure Castings',
    location: 'Durgapur',
    type: 'Railway Components',
    description: 'Custom iron castings for locomotive and rail infrastructure. Built to meet stringent railway specifications and safety standards.',
    year: '2024',
    area: 'Custom Orders',
    images: [
      '/images/dippl/railway/3.png',
      '/images/dippl/railway/track-components.jpg',
      '/images/dippl/railway/signal-equipment.jpg',
      '/images/dippl/railway/railway-castings.jpg'
    ],
    featured: true,
    category: 'railway',
    tags: ['railway', 'locomotive', 'safety-compliant', 'custom casting']
  },
  {
    id: 'ingot-moulds',
    title: 'Metallurgical Ingot Moulds',
    location: 'Durgapur',
    type: 'Metallurgical Equipment',
    description: 'Precision-molded ingot moulds for metallurgical industries. Engineered for consistent performance and extended service life.',
    year: '2024',
    area: 'Custom Specifications',
    images: [
      '/images/dippl/metallurgical/2.png',
      '/images/dippl/metallurgical/centre-columns.jpg',
      '/images/dippl/metallurgical/mould-casting.jpg',
      '/images/dippl/metallurgical/precision-moulds.jpg'
    ],
    featured: true,
    category: 'metallurgical',
    tags: ['metallurgical', 'ingot-moulds', 'precision', 'extended-life']
  }
];

export const services: Service[] = [
  {
    id: 'municipal-casting',
    title: 'Municipal Casting of Gray and Ductile Iron',
    description: 'High-strength, corrosion-resistant municipal castings built to IS standards for urban infrastructure development.',
    icon: 'Building2',
    features: [
      'Manhole covers and frames',
      'Drainage grates',
      'Utility access covers',
      'Street furniture components'
    ]
  },
  {
    id: 'ingot-moulds',
    title: 'Cast Iron Ingot Moulds and Centre Columns',
    description: 'Precision-molded ingot moulds for metallurgical industries with extended service life and consistent performance.',
    icon: 'Cog',
    features: [
      'Custom ingot moulds',
      'Centre column casting',
      'Metallurgical grade quality',
      'Precision engineering'
    ]
  },
  {
    id: 'railway-casting',
    title: 'Locomotive / Railway Castings',
    description: 'Custom iron castings for locomotive and rail infrastructure meeting stringent railway specifications and safety standards.',
    icon: 'Train',
    features: [
      'Locomotive components',
      'Track infrastructure parts',
      'Signal equipment castings',
      'Railway safety components'
    ]
  }
];

export const processSteps = [
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'We understand your requirements and specifications for precision casting solutions.',
    icon: 'MessageCircle'
  },
  {
    id: 'design-engineering',
    title: 'Design & Engineering',
    description: 'Our engineering team creates detailed designs and specifications for your casting needs.',
    icon: 'PenTool'
  },
  {
    id: 'mold-preparation',
    title: 'Mold Preparation',
    description: 'Green sand molds are prepared using semi-automatic processes for precision.',
    icon: 'Ruler'
  },
  {
    id: 'casting-production',
    title: 'Casting Production',
    description: 'High-quality ductile iron casting using state-of-the-art induction furnaces.',
    icon: 'Hammer'
  },
  {
    id: 'quality-delivery',
    title: 'Quality & Delivery',
    description: 'Rigorous testing and quality checks before dispatch to your location.',
    icon: 'CheckCircle'
  }
];

export const brandValues = [
  {
    title: 'Precision Engineering',
    description: 'Advanced manufacturing processes ensuring consistent quality and reliability.',
    icon: 'Target'
  },
  {
    title: 'Innovation & Technology',
    description: 'State-of-the-art equipment and modern techniques for superior casting solutions.',
    icon: 'Cog'
  },
  {
    title: 'Quality Excellence',
    description: 'Rigorous quality control and testing at every stage of production.',
    icon: 'Award'
  },
  {
    title: 'Customer Partnership',
    description: 'Building lasting relationships through reliable delivery and service excellence.',
    icon: 'Users'
  }
];

// Import manufacturing data
import dipplData from './data/dippl.json'

export const manufacturingData: ManufacturingData = dipplData 