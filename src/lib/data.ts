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
  category: string
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
    id: 'railway',
    title: 'Railway Infrastructure Castings',
    location: 'Durgapur',
    type: 'Railway Components',
    description: 'Custom iron castings for locomotive and rail infrastructure. Built to meet stringent railway specifications and safety standards.',
    year: '2024',
    area: 'Custom Orders',
    images: [
      '/images/dippl/railway/brake-block.jpg',
    ],
    featured: true,
    category: 'railway',
    tags: ['railway', 'locomotive', 'safety-compliant', 'custom casting']
  },
  {
    id: 'hardscape',
    title: 'Urban Hardscape Projects',
    location: 'Durgapur',
    type: 'Hardscape',
    description: 'High-quality hardscape products for urban and industrial areas.',
    year: '2024',
    area: 'Multiple Sites',
    images: [
      '/images/dippl/hardscape/tree-grates.jpg'
    ],
    featured: true,
    category: 'urban',
    tags: ['hardscape', 'urban', 'infrastructure']
  }
];

export const services: Service[] = [
  {
    id: 'railway',
    title: 'Locomotive / Railway Castings',
    description: 'Custom iron castings for locomotive and rail infrastructure meeting stringent railway specifications and safety standards.',
    icon: 'Train',
    features: [
      'Locomotive components',
      'Track infrastructure parts',
      'Signal equipment castings',
      'Railway safety components'
    ]
  },
  {
    id: 'hardscape',
    title: 'Hardscape Castings',
    description: 'Durable cast iron solutions for urban and industrial hardscape needs.',
    icon: 'Grid',
    features: [
      'Detectable warning plates',
      'Tree grates',
      'Trench grates for water management'
    ]
  },
  {
    id: 'bollards',
    title: 'Architectural Bollards',
    description: 'Stylish and functional bollards for safe environments.',
    icon: 'Circle',
    features: [
      'Visual & physical barriers',
      'Durable construction',
      'Architectural design options'
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
    description: 'Ductile iron is casted into the mould using a semi-automatic pouring system.',
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